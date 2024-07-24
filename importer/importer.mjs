import * as fs from 'node:fs/promises';

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
            file.path.includes('Gameplay/Weapons/') &&
            weaponCategories.includes(file.path.split('/').pop())
        );
    });

    const attachments = files.filter((file) => {
        return (
            file.path.includes('Gameplay/WeaponParts/') &&
            /WPD_[a-zA-Z0-9_]*\.json/.test(file.name)
        );
    });

    for (const weapon of weapons) {
        const weaponPath = weapon.path + '/' + weapon.name;
        const weaponFiles = await fs.readdir(weaponPath);

        const weaponDataPath =
            weaponPath +
            '/' +
            weaponFiles.find((element) => element.includes('DA_WeaponData'));
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

        const iconFile =
            iconData.BakedSourceTexture.ObjectPath.split('.')[0] + '.png';
        const iconName = iconFile.split('/').reverse()[0];

        const fireDataPath =
            weaponPath +
            '/' +
            weaponFiles.find((element) => element.includes('DA_FireData'));
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

        const weaponAttachments = {};

        for (const attachmentCategory of weaponData.ModularConfiguration) {
            console.log(attachmentCategory);
            const key = attachmentCategory.Key.split(`'`)[1].split('.')[1];
            weaponAttachments[key] = {};
            weaponAttachments[key].DefaultPart = attachmentCategory.Value
                .DefaultPart
                ? attachmentCategory.Value.DefaultPart.ObjectName.split(`'`)[1]
                : null;
            weaponAttachments[key].UniqueModParts =
                attachmentCategory.Value.UniqueModParts.map((part) => {
                    return part.ObjectName.split(`'`)[1];
                });
        }

        const DLC = weapon.path.match(/\d*-DLC[a-zA-Z0]*(\d*)\//);

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

    fs.writeFile(
        '../scripts/weapons.js',
        'const weaponData = ' + JSON.stringify(weaponOutput, null, 4)
    );

    for (const attachment of attachments) {
        const attachmentPath = attachment.path + '/' + attachment.name;
        const attachmentData = JSON.parse(await fs.readFile(attachmentPath))[0]
            .Properties;

        const key = attachment.name.split('.')[0];
        attachmentOutput[key] = {};

        if (attachmentData.AttributeModifierMap)
            attachmentOutput[key].AttributeModifierMap =
                attachmentData.AttributeModifierMap;

        if (attachmentData.MagazineData)
            attachmentOutput[key].MagazineData = JSON.parse(
                await fs.readFile(
                    attachmentData.MagazineData.ObjectPath.split('.')[0] +
                        '.json'
                )
            )[0];

        if (attachmentData.SightDataArray) {
            const targetingDataPath = JSON.parse(
                await fs.readFile(
                    attachmentData.SightDataArray[0].ObjectPath.split('.')[0] +
                        '.json'
                )
            )[0].Properties.TargetingData.ObjectPath;

            const targetingDataProperties = JSON.parse(
                await fs.readFile(targetingDataPath.split('.')[0] + '.json')
            )[0].Properties;

            attachmentOutput[key].TargetingData = {
                TargetingMagnification:
                    targetingDataProperties.TargetingMagnification,
                TargetingOnTopMagnification:
                    targetingDataProperties.TargetingOnTopMagnification,
            };
        }
    }

    fs.writeFile(
        '../scripts/attachments.js',
        'const attachmentData = ' + JSON.stringify(attachmentOutput, null, 4)
    );
} catch (err) {
    console.error(err);
}
