import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const weaponCategories = [
    'AssaultRifle',
    'Marksman',
    'Pistol',
    'Revolver',
    'Shotgun',
    'SMG',
    'LMG',
];

const weaponOutput = {};
const attachmentOutput = {};

try {
    const files = await fs.readdir('PAYDAY3/Content', {
        withFileTypes: true,
        recursive: true,
    });

    const weapons = files.filter((file) => {
        return (
            file.isDirectory() &&
            file.parentPath.includes(`Gameplay${path.sep}Weapons`) &&
            weaponCategories.includes(path.basename(file.parentPath))
        );
    });

    const attachments = files.filter((file) => {
        return (
            file.parentPath.includes(`Gameplay${path.sep}WeaponParts`) &&
            /WPD_[a-zA-Z0-9_]*\.json/.test(file.name)
        );
    });

    for (const weapon of weapons) {
        const weaponPath = weapon.parentPath + '/' + weapon.name;
        const weaponFiles = await fs.readdir(weaponPath);

        const weaponDataPath =
            weaponPath +
            '/' +
            weaponFiles.find((fileName) => fileName.includes('DA_WeaponData'));

        const weaponData = JSON.parse(await fs.readFile(weaponDataPath))[0]
            .Properties;

        const iconDataPath =
            weaponData.DisplayIcon.AssetPathName.replace(
                '/Game',
                'PAYDAY3/Content'
            ).split('.')[0] + '.json';
        const iconDataFile = JSON.parse(await fs.readFile(iconDataPath));
        const iconData = iconDataFile[1]
            ? iconDataFile[1].Properties
            : iconDataFile[0].Properties;

        const iconName = path
            .basename(iconData.BakedSourceTexture.ObjectPath)
            .replace('.0', '.png');

        const fireDataPath =
            weaponPath +
            '/' +
            weaponFiles.find((fileName) => fileName.includes('DA_FireData'));

        const fireData = JSON.parse(await fs.readFile(fireDataPath))[0]
            .Properties;

        const fireDataFilter = [
            'DamageDistanceArray',
            'AmmoLoaded',
            'AmmoInventoryMax',
            'AmmoInventory',
            'AmmoPickup',
            'CriticalDamageMultiplierDistanceArray',
            'FireType',
            'ProjectilesPerFiredRound',
            'MaximumPenetrationCount',
            'ArmorPenetration',
            'RoundsPerMinute',
        ];

        const spreadDataPath =
            weaponPath +
            '/' +
            weaponFiles.find((fileName) => fileName.includes('DA_SpreadData'));

        const spreadData = JSON.parse(await fs.readFile(spreadDataPath))[0]
            .Properties;

        const recoilDataPath =
            weaponPath +
            '/' +
            weaponFiles.find((fileName) => fileName.includes('DA_RecoilData'));

        const recoilData = JSON.parse(await fs.readFile(recoilDataPath))[0]
            .Properties;

        const weaponAttachments = {};

        for (const attachmentCategory of weaponData.ModularConfiguration) {
            const slot = attachmentCategory.Key.split(`'`)[1]
                .split('.')[1]
                .replace('SLOT_', '');
            weaponAttachments[slot] = {};
            weaponAttachments[slot].DefaultPart = attachmentCategory.Value
                .DefaultPart
                ? attachmentCategory.Value.DefaultPart.ObjectName.split(
                      `'`
                  )[1].replace('WPD_', '')
                : null;
            weaponAttachments[slot].UniqueModParts =
                attachmentCategory.Value.UniqueModParts.map((part) => {
                    return part.ObjectName.split(`'`)[1].replace('WPD_', '');
                });
        }

        const DLC = weapon.parentPath.match(/\d*-DLC[a-zA-Z0]*(\d*)/);
        weaponOutput[weapon.name] = {
            DisplayName: weaponData.DisplayName.LocalizedString,
            TypeClassText: weaponData.TypeClassText.LocalizedString,
            DLC: DLC ? DLC[1] : null,
            DisplayIcon: {
                SourceUV: iconData.BakedSourceUV
                    ? iconData.BakedSourceUV
                    : { X: 0, Y: 0 },
                SourceTexture: iconName,
            },
            FireData: Object.fromEntries(
                Object.entries(fireData).filter(([key, _]) =>
                    fireDataFilter.includes(key)
                )
            ),
            SpreadData: spreadData,
            RecoilData: recoilData,
            ModularConfiguration: weaponAttachments,
            ReloadNotifyTime: weaponData.ReloadNotifyTime,
            ReloadEmptyNotifyTime: weaponData.ReloadEmptyNotifyTime,
        };

        try {
            await fs.copyFile(
                iconFile,
                `../images/${iconName}`,
                fs.constants.COPYFILE_EXCL
            );
        } catch {}
    }

    const sortedWeaponData = Object.keys(weaponOutput)
        .sort()
        .reduce((obj, key) => {
            obj[key] = weaponOutput[key];
            return obj;
        }, {});

    fs.writeFile(
        '../scripts/weapons.js',
        'const WEAPON_DATA = Object.freeze(' +
            JSON.stringify(sortedWeaponData, null, 4) +
            ');'
    );

    for (const attachment of attachments) {
        const attachmentPath = attachment.parentPath + '/' + attachment.name;
        const attachmentData = JSON.parse(await fs.readFile(attachmentPath))[0]
            .Properties;

        const key = attachment.name.split('.')[0].replace('WPD_', '');
        attachmentOutput[key] = {};

        if (attachmentData.AttributeModifierMap)
            attachmentOutput[key].AttributeModifierMap =
                attachmentData.AttributeModifierMap.map((modifier) => {
                    return {
                        Key: modifier.Key.replace('ESBZWeaponAttribute::', ''),
                        Value: modifier.Value,
                    };
                });

        if (attachmentData.MagazineData)
            attachmentOutput[key].MagazineData = JSON.parse(
                await fs.readFile(
                    attachmentData.MagazineData.ObjectPath.replace(
                        '.0',
                        '.json'
                    )
                )
            )[0];

        if (attachmentData.SightDataArray) {
            const targetingDataPath = JSON.parse(
                await fs.readFile(
                    attachmentData.SightDataArray[0].ObjectPath.replace(
                        '.0',
                        '.json'
                    )
                )
            )[0].Properties.TargetingData.ObjectPath;

            const targetingDataProperties = JSON.parse(
                await fs.readFile(targetingDataPath.replace('.0', '.json'))
            )[0].Properties;

            attachmentOutput[key].TargetingData = {
                TargetingMagnification:
                    targetingDataProperties.TargetingMagnification,
                TargetingOnTopMagnification:
                    targetingDataProperties.TargetingOnTopMagnification,
            };
        }

        if (attachmentData.DisplayName) {
            attachmentOutput[key].DisplayName =
                attachmentData.DisplayName.LocalizedString;
        }
    }

    const sortedAttachmentData = Object.keys(attachmentOutput)
        .sort()
        .reduce((obj, key) => {
            obj[key] = attachmentOutput[key];
            return obj;
        }, {});

    fs.writeFile(
        '../scripts/attachments.js',
        'const ATTACHMENT_DATA = Object.freeze(' +
            JSON.stringify(sortedAttachmentData, null, 4) +
            ');'
    );

    fs.writeFile(
        '../scripts/moddata.js',
        'const MOD_DATA = Object.freeze(' +
            JSON.stringify(
                JSON.parse(
                    await fs.readFile(
                        'PAYDAY3/Content/Gameplay/Weapons/CT_ModData_Default.json'
                    )
                )[0].Rows,
                null,
                4
            ) +
            ');'
    );
} catch (err) {
    console.error(err);
}
