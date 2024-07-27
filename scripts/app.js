const DLCs = ['Syntax Error', 'Boys in Blue'];

const skills = {
    edge: {
        displayName: 'Edge',
        description: 'You deal 10% extra damage for 20 seconds.',
        damageModifier: 0.1,
        iconOffset: {
            X: 0,
            Y: 0,
        },
    },
    'long-shot': {
        displayName: 'Long Shot',
        description:
            'As long as you have EDGE and are aiming down sights, distance penalties do not apply to headshot multipliers.',
        iconOffset: {
            X: 127,
            Y: 319,
        },
    },
    'precision-shot': {
        displayName: 'Precision Shot',
        description:
            'As long as you have EDGE and are aiming down a scope, your shot will deal extra damage based on your scope magnification.',
        iconOffset: {
            X: 191,
            Y: 319,
        },
    },
    'face-to-face': {
        displayName: 'Face to Face',
        description:
            'As long as you have both EDGE and GRIT, you deal 10% extra damage to targets within 5 meters of you.',
        damageModifier: 0.1,
        iconOffset: {
            X: 127,
            Y: 511,
        },
    },
    'coup-de-grace': {
        displayName: 'Coup de Grâce',
        description:
            'If you have EDGE, you will deal 10% more damage when you shoot a staggered or stunned enemy.',
        damageModifier: 0.1,
        iconOffset: {
            X: 126,
            Y: 895,
        },
    },
    'combat-marking': {
        displayName: 'Combat Marking',
        description:
            'As long as you have EDGE, you deal an extra 20% damage against any marked target.',
        damageModifier: 0.2,
        iconOffset: {
            X: 64,
            Y: 960,
        },
    },
    'pain-asymbolia': {
        displayName: 'Pain Asymbolia',
        description:
            'As long as you have Adrenaline and either EDGE, GRIT, RUSH, the effects of these buffs are doubled, and you take 10% less damage to your Adrenaline.',
        damageModifier: 0.1,
        iconOffset: {
            X: 316,
            Y: 1216,
        },
    },
    'high-grain': {
        displayName: 'High Grain',
        description:
            'All placed Ammo Bags increase armor penetration for 30 seconds after interaction for you and all your teammates. Each additional crew member equipped with this skill increases weapon damage by 5% on top of that.',
        armorPenModifier: 0.2,
        iconOffset: {
            X: 255,
            Y: 62,
        },
    },
    expose: {
        displayName: 'Expose',
        description:
            'Shots fired at enemies affected by your flashbang will ignore armor for as long as they are stunned.',
        iconOffset: {
            X: 254,
            Y: 894,
        },
    },
    'duck-and-weave': {
        displayName: 'Duck and Weave',
        description:
            'As long as you have RUSH, you deal 25% more damage to enemies from behind. This bonus is reduced by 5% for each armor chunk you currently have beyond the first.',
        damageModifier: 0.25,
        iconOffset: {
            X: 190,
            Y: 1279,
        },
    },
};

const edgeDependentSkills = [
    'long-shot',
    'precision-shot',
    'face-to-face',
    'coup-de-grace',
    'combat-marking',
    'pain-asymbolia',
];

// Effective Armour Penetration is the amount of damage dealt through armour
// based on the weapon's armour penetration and the enemy's armour hardness
function effectiveArmorPenetration(armorPenetration, armorHardness) {
    // Armour penetrating damage is calculated with AP - AH + 1
    // Clamp Effective Armour Penetration between 0 and 1
    return Math.max(0, Math.min(1, armorPenetration - armorHardness + 1));
}

function shotsToKill(
    damage,
    critMultiplier,
    effectiveArmorPenetration,
    enemyHealth,
    enemyArmor
) {
    if (critMultiplier < 1) critMultiplier = 1;

    const critDamage = damage * critMultiplier,
        APDamage = damage * effectiveArmorPenetration,
        critAPDamage = critDamage * effectiveArmorPenetration;

    const shotsOnArmor = Math.min(
        Math.ceil(enemyArmor / damage),
        Math.ceil(enemyHealth / critAPDamage)
    );
    const remainingHealth = Math.max(
        0,
        Math.floor(enemyHealth - critAPDamage * shotsOnArmor)
    );
    const shotsOnHealth = Math.ceil(remainingHealth / critDamage);

    if (critMultiplier > 1) {
        // Calculate how many crits can be replaced
        // based on damage left over after the kill
        const overdamage =
            critDamage - (remainingHealth % critDamage || critDamage);
        const replacableCrits = Math.min(
            shotsOnHealth,
            Math.floor(overdamage / (critDamage - damage))
        );

        // Calculate how many crits through armour can be replaced
        // based on extra health after replacing crits
        //
        // If the enemy dies from armour penetrating shots,
        // use the damage left over after the kill instead
        const armorOverdamage =
            overdamage - replacableCrits * (critDamage - damage) ||
            critAPDamage - (enemyHealth % critAPDamage || critAPDamage);
        const replacableArmoredCrits = Math.min(
            shotsOnArmor,
            Math.floor(
                armorOverdamage / (critAPDamage - APDamage) || shotsOnArmor
            )
        );

        return {
            armoredCrits: shotsOnArmor - replacableArmoredCrits,
            armoredNonCrits: replacableArmoredCrits,
            unarmoredCrits: shotsOnHealth - replacableCrits,
            unarmoredNonCrits: replacableCrits,
            totalShots: shotsOnArmor + shotsOnHealth,
        };
    }
    return {
        armoredCrits: 0,
        armoredNonCrits: shotsOnArmor,
        unarmoredCrits: 0,
        unarmoredNonCrits: shotsOnHealth,
        totalShots: shotsOnArmor + shotsOnHealth,
    };
}

// Returns the shots to kill at each unique distance
function weaponShotsToKill(weaponName, enemyName, selectedSkills) {
    const weapon = weaponData[weaponName],
        enemy = enemyData[enemyName];

    // Create a new array of distances
    // based on the distance arrays in a weapon's stats
    // ordered from highest to lowest
    const distanceArray = [
        ...new Set([
            ...weapon.DamageDistanceArray.map((dist) => dist.Distance),
            ...weapon.CriticalDamageMultiplierDistanceArray.map(
                (dist) => dist.Distance
            ),
            500, // Add 5m distance for Face to Face
        ]),
    ].sort((a, b) => b - a);

    let damageMultiplier = 1,
        armorPenetrationModifier = 0;

    if (!weapon.ArmorPenetration) weapon.ArmorPenetration = 0;

    // Apply damage and AP buffs from skills
    if (selectedSkills.includes('edge'))
        damageMultiplier += skills.edge.damageMultiplier;
    if (selectedSkills.includes('coupdegrace') && enemyName !== 'Bulldozer')
        damageMultiplier += skills.coupdegrace.damageMultiplier;
    if (selectedSkills.includes('combatmarking'))
        damageMultiplier += skills.combatmarking.damageMultiplier;
    if (selectedSkills.includes('painasymbolia'))
        damageMultiplier += skills.painasymbolia.damageMultiplier;
    if (selectedSkills.includes('highgrain'))
        armorPenetrationModifier += skills.highgrain.armorPenetrationModifier;

    const EAP = effectiveArmorPenetration(
        weapon.ArmorPenetration + armorPenetrationModifier,
        enemy.ArmorHardness
    );

    let shotsAtDistances = {},
        previous = {};

    distanceArray.forEach((distance) => {
        const damage = (
            weapon.DamageDistanceArray.find((i) => i.Distance >= distance) ??
            weapon.DamageDistanceArray.slice(-1)[0]
        ).Damage;

        let multiplier = (
            weapon.CriticalDamageMultiplierDistanceArray.find(
                (i) => i.Distance >= distance
            ) ?? weapon.CriticalDamageMultiplierDistanceArray.slice(-1)[0]
        ).Multiplier;

        if (!selectedSkills.includes('headshot')) multiplier = 1;
        if (
            selectedSkills.includes('headshot') &&
            selectedSkills.includes('longshot')
        )
            multiplier =
                weapon.CriticalDamageMultiplierDistanceArray[0].Multiplier;
        if (enemyName == 'Drone') multiplier = 1;
        if (distance <= 500 && selectedSkills.includes('facetoface'))
            damageMultiplier += skills.facetoface.damageMultiplier;

        const weaponShotsToKill = shotsToKill(
            damage * damageMultiplier,
            multiplier,
            EAP,
            enemy.Health,
            // If headshots are enabled assume the dozer's face is unarmoured
            enemyName == 'Bulldozer' && selectedSkills.includes('headshot')
                ? 0
                : enemy.Armor
        );

        // Calculation only includes headshots if headshots are enabled
        if (enemyName == 'Bulldozer' && selectedSkills.includes('headshot')) {
            weaponShotsToKill.unarmoredCrits +=
                weaponShotsToKill.unarmoredNonCrits;
            weaponShotsToKill.unarmoredNonCrits = 0;
        }

        // Remove duplicates
        if (
            (previous &&
                weaponShotsToKill.armoredCrits != previous.armoredCrits) ||
            weaponShotsToKill.armoredNonCrits != previous.armoredNonCrits ||
            weaponShotsToKill.unarmoredCrits != previous.unarmoredCrits ||
            weaponShotsToKill.unarmoredNonCrits != previous.unarmoredNonCrits
        )
            shotsAtDistances[distance] = weaponShotsToKill;
        previous = weaponShotsToKill;
    });

    return shotsAtDistances;
}

function timeToKill(
    shotsToKill,
    roundsPerMinute,
    pelletCount,
    magSize,
    reloadTime
) {
    if (!roundsPerMinute) roundsPerMinute = 600;
    if (!pelletCount) pelletCount = 1;
    else shotsToKill = Math.ceil(shotsToKill / pelletCount);

    let TTK = (shotsToKill - 1) / (roundsPerMinute / 60);
    if (reloadTime && magSize && shotsToKill > magSize)
        TTK += reloadTime * Math.floor(shotsToKill / magSize);

    return Math.round(TTK * 100) / 100;
}

const weaponCategories = [
    'AssaultRifle',
    'Marksman',
    'Shotgun',
    'Pistol',
    'Revolver',
    'SMG',
    'LMG',
];

const sortedWeapons = Object.keys(weaponData).sort((a, b) => {
    return (
        weaponCategories.indexOf(weaponData[a].TypeClassText) -
            weaponCategories.indexOf(weaponData[b].TypeClassText) ||
        weaponData[a].DLC - weaponData[b].DLC
    );
});

function populateWeaponSelector() {
    const weaponSelector = document.querySelector('#weapon-list');
    const selectableWeaponTemplate = document
        .querySelector('template.selectable-weapon')
        .cloneNode(true);
    document.querySelector('template.selectable-weapon').remove();

    for (const weapon of sortedWeapons) {
        const selectableWeapon = weaponSelector.appendChild(
            document.createElement('div')
        );

        selectableWeapon.innerHTML = selectableWeaponTemplate.innerHTML;
        selectableWeapon.classList = ['selectable-weapon'];
        selectableWeapon.style = `
            --image-x-offset: ${
                weaponData[weapon].DisplayIcon.SourceUV.X * -1
            }px;
            --image-y-offset: ${
                weaponData[weapon].DisplayIcon.SourceUV.Y * -1
            }px;
            --image-url: url("images/${
                weaponData[weapon].DisplayIcon.SourceTexture
            }");
        `;

        const weaponInput = selectableWeapon.children[0];
        const weaponName = selectableWeapon.children[1];
        const weaponDLC = selectableWeapon.children[2];

        weaponInput.id = weapon;
        weaponInput.value = weapon;

        weaponName.innerHTML = weaponData[weapon].DisplayName;
        weaponName.setAttribute('for', weapon);

        weaponDLC.innerHTML = DLCs[weaponData[weapon].DLC - 1] ?? '';
        weaponDLC.setAttribute('for', weapon);

        weaponInput.addEventListener('change', (event) => {
            const selectedWeapon = weaponData[event.target.value];

            populateLoadout(selectedWeapon);
            updateWeaponStats(selectedWeapon);
        });

        if (weapon == 'CAR4') weaponInput.checked = true;

        populateLoadout(weaponData['CAR4']);
        updateWeaponStats(weaponData['CAR4']);
    }
}

const skillContainer = document.querySelector(
    '#skill-selector .loadout-category-container'
);
const skillTemplate = document.querySelector('template.skill').cloneNode(true);
document.querySelector('template.skill').remove();

const loadoutAttachments = document.querySelector('#loadout-attachments');

const attachmentTemplate = document
    .querySelector('template.attachment')
    .cloneNode(true);
document.querySelector('template.attachment').remove();

const attachmentGroupTemplate = document
    .querySelector('#attachment-selector')
    .cloneNode(true);
document.querySelector('#attachment-selector').remove();

const weaponStatTemplate = document
    .querySelector('template.weapon-stat')
    .cloneNode(true);
document.querySelector('template.weapon-stat').remove();

function populateSkills() {
    for (const skill in skills) {
        const selectableSkill = skillContainer.appendChild(
            document.createElement('div')
        );

        selectableSkill.innerHTML = skillTemplate.innerHTML;
        selectableSkill.classList = ['skill'];

        const skillInput = selectableSkill.children[0];
        const skillLabel = selectableSkill.children[1];

        skillInput.id = skill;

        if (edgeDependentSkills.includes(skill)) skillInput.disabled = true;

        skillLabel.innerHTML = skills[skill].displayName;
        skillLabel.setAttribute('for', skill);

        skillLabel.style = `
            --image-x-offset: ${skills[skill].iconOffset.X * -1}px;
            --image-y-offset: ${skills[skill].iconOffset.Y * -1}px;
            --image-url: url("images/${
                skill == 'edge' ? 'edge.png' : 'skills.png'
            }");
        `;

        skillInput.addEventListener('change', (event) => {
            updateSkills(event.target.id);
            updateWeaponStats(
                weaponData[
                    document.querySelector('.selectable-weapon input:checked')
                        .value
                ]
            );
        });
    }
}

const equippedAttachments = [];

function updateAttachments() {
    equippedAttachments.length = 0;

    return document
        .querySelectorAll('.attachment input:checked')
        .forEach((i) => {
            if (i.value !== 'None') equippedAttachments.push(i.value);
        });
}

const equippedSkills = [];

function updateSkills(selectedSkill) {
    const skillIsEquipped = equippedSkills.includes(selectedSkill);

    if (!skillIsEquipped) equippedSkills.push(selectedSkill);
    else equippedSkills.splice(equippedSkills.indexOf(selectedSkill), 1);

    if (selectedSkill !== 'edge') return;
    for (const skill of edgeDependentSkills) {
        const skillInput = document.querySelector(`input#${skill}`);

        if (skillIsEquipped) {
            skillInput.disabled = true;
            skillInput.checked = false;

            if (equippedSkills.includes(skill))
                equippedSkills.splice(equippedSkills.indexOf(skill), 1);
        } else {
            skillInput.disabled = false;
        }
    }
}

const attachmentCategories = [
    'Sight',
    'Mag',
    'BarrelExtension',
    'Barrel',
    'VerticalGrip',
    'ForeGrip',
    'Grip',
    'Stock',
];

function populateLoadout(selectedWeapon) {
    document.querySelector('#loadout h2').innerHTML =
        selectedWeapon.DisplayName;

    loadoutAttachments.innerHTML = '';

    const sortedAttachments = Object.keys(
        selectedWeapon.ModularConfiguration
    ).sort((a, b) => {
        return (
            attachmentCategories.indexOf(a) - attachmentCategories.indexOf(b)
        );
    });

    for (const attachmentCategory of sortedAttachments) {
        const defaultAttachment =
            selectedWeapon.ModularConfiguration[attachmentCategory]
                .DefaultPart ?? 'None';
        const attachments = [
            defaultAttachment,
            ...selectedWeapon.ModularConfiguration[attachmentCategory]
                .UniqueModParts,
        ];

        const attachmentCategoryName = attachmentCategory
            .split('_')
            .pop()
            .replace(/([a-z])([A-Z])/g, '$1 $2');

        if (
            selectedWeapon.ModularConfiguration[attachmentCategory]
                .UniqueModParts.length > 0
        ) {
            const attachmentFieldset = loadoutAttachments.appendChild(
                document.createElement('fieldset')
            );
            attachmentFieldset.innerHTML = attachmentGroupTemplate.innerHTML;
            attachmentFieldset.classList = ['loadout-category'];

            attachmentFieldset.children[0].innerHTML = attachmentCategoryName;

            for (const attachment of attachments) {
                const attachmentButton =
                    attachmentFieldset.children[1].appendChild(
                        document.createElement('div')
                    );
                attachmentButton.innerHTML = attachmentTemplate.innerHTML;
                attachmentButton.classList = ['attachment'];

                const attachmentInput = attachmentButton.children[0];
                const attachmentLabel = attachmentButton.children[1];

                attachmentInput.id = attachmentCategory + '_' + attachment;
                attachmentInput.value = attachment;
                attachmentInput.name = attachmentCategory;
                attachmentInput.checked = attachment == defaultAttachment;

                let attachmentName =
                    attachmentData[attachment]?.DisplayName ??
                    attachment
                        .split('_')
                        .pop()
                        .replace(/([a-z])([A-Z0-9])/g, '$1 $2');

                attachmentLabel.setAttribute(
                    'for',
                    attachmentCategory + '_' + attachment
                );
                attachmentLabel.innerHTML = attachmentName;

                attachmentInput.addEventListener('change', () => {
                    updateAttachments();
                    updateWeaponStats(selectedWeapon);
                });
            }
        }
    }

    updateAttachments();
}

populateWeaponSelector();
populateSkills();

function getModData(stat, value) {
    const statData = modData[stat].Keys;

    if (value == 0 || value == undefined) return 0;

    const previous = statData.findLast((i) => {
        return value >= i.Time;
    });
    const next = statData.find((i) => {
        return value <= i.Time;
    });

    if (previous == next) return previous.Value;

    const gradient =
        (next.Value - previous.Value) / (next.Time - previous.Time);
    const intercept = previous.Value - gradient * previous.Time;

    return gradient * value + intercept;
}

function applyLoadout(weapon, equippedSkills, equippedAttachments) {
    const updatedWeapon = structuredClone(weapon);

    const modifiers = {};
    equippedAttachments.forEach((attachment) => {
        if (!attachmentData[attachment]?.AttributeModifierMap) return;

        attachmentData[attachment].AttributeModifierMap.forEach((modifier) => {
            return modifiers[modifier.Key]
                ? (modifiers[modifier.Key] += modifier.Value)
                : (modifiers[modifier.Key] = modifier.Value);
        });
    });

    const equippedMag =
        attachmentData[
            equippedAttachments.find((attachment) => {
                return attachmentData[attachment].MagazineData;
            })
        ]?.MagazineData?.Properties;

    const fireData = updatedWeapon.FireData;

    fireData.AmmoLoaded = (equippedMag ?? weapon.FireData).AmmoLoaded ?? 10;
    fireData.AmmoInventory =
        (equippedMag ?? weapon.FireData).AmmoInventory ?? 100;
    fireData.AmmoInventoryMax =
        (equippedMag ?? weapon.FireData).AmmoInventoryMax ?? 200;
    fireData.AmmoPickup = {
        Min: (equippedMag ?? weapon.FireData).AmmoPickup.Min ?? 5,
        Max: (equippedMag ?? weapon.FireData).AmmoPickup.Max ?? 10,
    };

    const equippedSight =
        attachmentData[
            equippedAttachments.find((attachment) => {
                return attachmentData[attachment]?.TargetingData;
            })
        ];

    let damageModifier = 1,
        rangeModifier = getModData(
            'DamageDistance',
            modifiers['DamageDistance']
        );

    // Precision Shot sets the base damage modifier
    // to the current scope's magnification
    if (
        equippedSkills.includes('precision-shot') &&
        equippedSight?.TargetingData?.TargetingMagnification >= 5
    )
        damageModifier = equippedSight.TargetingData.TargetingMagnification;

    for (skill of [
        'edge',
        'coup-de-grace',
        'combat-marking',
        'pain-asymbolia',
        'duck-and-weave',
    ]) {
        if (equippedSkills.includes(skill))
            damageModifier += skills[skill].damageModifier;
    }

    const faceToFaceIsEquipped = equippedSkills.includes('face-to-face');

    fireData.DamageDistanceArray = fireData.DamageDistanceArray.map(
        (damageStep) => {
            let damage = damageStep.Damage;

            // Face to Face adds to the damage modifier within 5 metres
            if (
                faceToFaceIsEquipped &&
                damageStep.Distance + rangeModifier <= 500
            )
                damage *=
                    damageModifier + skills['face-to-face'].damageModifier;
            else damage *= damageModifier;

            return {
                Damage: damage,
                Distance: damageStep.Distance + rangeModifier,
            };
        }
    );

    if (faceToFaceIsEquipped) {
        if (fireData.DamageDistanceArray[0].Distance > 500) {
            // Insert face to face's 5m range at the start of the array
            fireData.DamageDistanceArray.unshift({
                Damage:
                    weapon.FireData.DamageDistanceArray[0].Damage *
                    (damageModifier + skills['face-to-face'].damageModifier),
                Distance: 500,
            });
        } else if (fireData.DamageDistanceArray[0].Distance < 500) {
            // Insert face to face's 5m range second in the array
            const damage =
                weapon.FireData.DamageDistanceArray[1].Damage *
                (damageModifier + skills['face-to-face'].damageModifier);

            fireData.DamageDistanceArray.splice(1, 0, {
                Damage: damage,
                Distance: 500,
            });
        }
    }

    // Long shot removes distance penalties on critical multipliers
    if (equippedSkills.includes('long-shot')) {
        console.log('long shot');
        fireData.CriticalDamageMultiplierDistanceArray = [
            {
                Multiplier:
                    fireData.CriticalDamageMultiplierDistanceArray[0]
                        .Multiplier,
                Distance:
                    fireData.CriticalDamageMultiplierDistanceArray.reverse()[0]
                        .Distance,
            },
        ];
    }

    fireData.RoundsPerMinute = fireData.RoundsPerMinute ?? 600;

    fireData.ArmorPenetration = fireData.ArmorPenetration ?? 0;

    if (equippedSkills.includes('high-grain'))
        fireData.ArmorPenetration += skills['high-grain'].armorPenModifier;

    if (modifiers['OverallReloadPlayRate']) {
        updatedWeapon.ReloadNotifyTime /= getModData(
            'OverallReloadPlayRate',
            modifiers['OverallReloadPlayRate']
        );

        updatedWeapon.ReloadEmptyNotifyTime /= getModData(
            'OverallReloadPlayRate',
            modifiers['OverallReloadPlayRate']
        );
    }

    return updatedWeapon;
}

function updateWeaponStats(selectedWeapon) {
    const weapon = applyLoadout(
        selectedWeapon,
        equippedSkills,
        equippedAttachments
    );

    document.querySelector('#rpm').innerHTML = weapon.FireData.RoundsPerMinute;

    document.querySelector('#ap').innerHTML = weapon.FireData.ArmorPenetration;

    document.querySelector('#mag').innerHTML = weapon.FireData.AmmoLoaded;
    document.querySelector('#max-ammo').innerHTML =
        weapon.FireData.AmmoInventoryMax;
    document.querySelector('#ammo-pickup').innerHTML =
        weapon.FireData.AmmoPickup.Min + '-' + weapon.FireData.AmmoPickup.Max;

    document.querySelector('#reload').innerHTML =
        Math.round(weapon.ReloadNotifyTime * 100) / 100 + 's';

    document.querySelector('#full-reload').innerHTML =
        Math.round(weapon.ReloadEmptyNotifyTime * 100) / 100 + 's';

    const weaponDamageStats =
        document.querySelector('#weapon-damage').children[0];
    weaponDamageStats.innerHTML = '';

    weapon.FireData.DamageDistanceArray.forEach((damageStep) => {
        const damageStat = weaponDamageStats.appendChild(
            document.createElement('div')
        );
        damageStat.innerHTML = weaponStatTemplate.innerHTML;
        damageStat.classList = ['weapon-stat'];

        damageStat.children[0].innerHTML =
            Math.round(Math.min(damageStep.Distance, 100000)) / 100 + 'm';
        damageStat.children[1].innerHTML =
            Math.round(damageStep.Damage * 100) / 100;
    });

    const weaponCritStats =
        document.querySelector('#weapon-damage').children[1];
    weaponCritStats.innerHTML = '';

    weapon.FireData.CriticalDamageMultiplierDistanceArray.forEach(
        (criticalDamageStep) => {
            const critStat = weaponCritStats.appendChild(
                document.createElement('div')
            );
            critStat.innerHTML = weaponStatTemplate.innerHTML;
            critStat.classList = ['weapon-stat'];

            critStat.children[0].innerHTML =
                Math.min(criticalDamageStep.Distance, 100000) / 100 + 'm';
            critStat.children[1].innerHTML =
                criticalDamageStep.Multiplier + 'x';
        }
    );
}
