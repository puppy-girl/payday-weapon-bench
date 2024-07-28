const DLC = ['Syntax Error', 'Boys in Blue'];

const SKILLS = {
    edge: {
        displayName: 'Edge',
        description: 'You deal 10% extra damage for 20 seconds.',
        modifier: 0.1,
        iconOffset: {
            x: 0,
            y: 0,
        },
    },
    longShot: {
        displayName: 'Long Shot',
        description:
            'As long as you have EDGE and are aiming down sights, distance penalties do not apply to headshot multipliers.',
        iconOffset: {
            x: 127,
            y: 319,
        },
    },
    precisionShot: {
        displayName: 'Precision Shot',
        description:
            'As long as you have EDGE and are aiming down a scope, your shot will deal extra damage based on your scope magnification.',
        iconOffset: {
            x: 191,
            y: 319,
        },
    },
    faceToFace: {
        displayName: 'Face to Face',
        description:
            'As long as you have both EDGE and GRIT, you deal 10% extra damage to targets within 5 meters of you.',
        modifier: 0.1,
        iconOffset: {
            x: 127,
            y: 511,
        },
    },
    coupDeGrace: {
        displayName: 'Coup de Grâce',
        description:
            'If you have EDGE, you will deal 10% more damage when you shoot a staggered or stunned enemy.',
        modifier: 0.1,
        iconOffset: {
            x: 126,
            y: 895,
        },
    },
    combatMarking: {
        displayName: 'Combat Marking',
        description:
            'As long as you have EDGE, you deal an extra 20% damage against any marked target.',
        modifier: 0.2,
        iconOffset: {
            x: 64,
            y: 960,
        },
    },
    painAsymbolia: {
        displayName: 'Pain Asymbolia',
        description:
            'As long as you have Adrenaline and either EDGE, GRIT, RUSH, the effects of these buffs are doubled, and you take 10% less damage to your Adrenaline.',
        modifier: 0.1,
        iconOffset: {
            x: 316,
            y: 1216,
        },
    },
    highGrain: {
        displayName: 'High Grain',
        description:
            'All placed Ammo Bags increase armor penetration for 30 seconds after interaction for you and all your teammates. Each additional crew member equipped with this skill increases weapon damage by 5% on top of that.',
        modifier: 0.2,
        iconOffset: {
            x: 255,
            y: 62,
        },
    },
    expose: {
        displayName: 'Expose',
        description:
            'Shots fired at enemies affected by your flashbang will ignore armor for as long as they are stunned.',
        iconOffset: {
            x: 254,
            y: 894,
        },
    },
    duckAndWeave: {
        displayName: 'Duck and Weave',
        description:
            'As long as you have RUSH, you deal 25% more damage to enemies from behind. This bonus is reduced by 5% for each armor chunk you currently have beyond the first.',
        modifier: 0.25,
        iconOffset: {
            x: 190,
            y: 1279,
        },
    },
};

const EDGE_DEPENDENT_SKILLS = [
    'longShot',
    'precisionShot',
    'faceToFace',
    'coupDeGrace',
    'combatMarking',
    'painAsymbolia',
];

// Sort the weapons list by DLC and class

const weaponClasses = [
    'AssaultRifle',
    'Marksman',
    'Shotgun',
    'Pistol',
    'Revolver',
    'SMG',
    'LMG',
];

const sortedWeapons = Object.keys(WEAPON_DATA).sort((a, b) => {
    return (
        weaponClasses.indexOf(WEAPON_DATA[a].class) -
            weaponClasses.indexOf(WEAPON_DATA[b].class) ||
        WEAPON_DATA[a].dlc - WEAPON_DATA[b].dlc
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
                WEAPON_DATA[weapon].displayIcon.offset.x * -1
            }px;
            --image-y-offset: ${
                WEAPON_DATA[weapon].displayIcon.offset.y * -1
            }px;
            --image-url: url("images/${
                WEAPON_DATA[weapon].displayIcon.source
            }");
        `;

        const weaponInput = selectableWeapon.children[0];
        const weaponName = selectableWeapon.children[1];
        const weaponDLC = selectableWeapon.children[2];

        weaponInput.id = weapon;
        weaponInput.value = weapon;

        weaponName.innerHTML = WEAPON_DATA[weapon].displayName;
        weaponName.setAttribute('for', weapon);

        weaponDLC.innerHTML = DLC[WEAPON_DATA[weapon].dlc - 1] ?? '';
        weaponDLC.setAttribute('for', weapon);

        weaponInput.addEventListener('change', (event) => {
            const selectedWeapon = WEAPON_DATA[event.target.value];

            populateLoadout(selectedWeapon);
            updateWeaponStats(selectedWeapon);
        });

        if (weapon == 'CAR4') weaponInput.checked = true;

        populateLoadout(WEAPON_DATA['CAR4']);
        updateWeaponStats(WEAPON_DATA['CAR4']);
    }
}

const skillSelector = document.querySelector(
    '#skill-selector .loadout-category-container'
);
const skillTemplate = document.querySelector('template.skill').cloneNode(true);
document.querySelector('template.skill').remove();

const attachmentsSection = document.querySelector('#loadout-attachments');

const attachmentTemplate = document
    .querySelector('template.attachment')
    .cloneNode(true);
document.querySelector('template.attachment').remove();

const attachmentSelectorTemplate = document
    .querySelector('#attachment-selector')
    .cloneNode(true);
document.querySelector('#attachment-selector').remove();

const weaponStatTemplate = document
    .querySelector('template.weapon-stat')
    .cloneNode(true);
document.querySelector('template.weapon-stat').remove();

function populateSkills() {
    for (const skill in SKILLS) {
        const selectableSkill = skillSelector.appendChild(
            document.createElement('div')
        );

        selectableSkill.innerHTML = skillTemplate.innerHTML;
        selectableSkill.classList = ['skill'];

        const skillInput = selectableSkill.children[0];
        const skillLabel = selectableSkill.children[1];

        skillInput.id = skill;

        if (EDGE_DEPENDENT_SKILLS.includes(skill)) skillInput.disabled = true;

        skillLabel.innerHTML = SKILLS[skill].displayName;
        skillLabel.setAttribute('for', skill);

        skillLabel.style = `
            --image-x-offset: ${SKILLS[skill].iconOffset.x * -1}px;
            --image-y-offset: ${SKILLS[skill].iconOffset.y * -1}px;
            --image-url: url("images/${
                skill == 'edge' ? 'edge.png' : 'skills.png'
            }");
        `;

        skillInput.addEventListener('change', (event) => {
            updateSkills(event.target.id);
            updateWeaponStats(
                WEAPON_DATA[
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
    for (const skill of EDGE_DEPENDENT_SKILLS) {
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

const attachmentSlots = [
    'sight',
    'mag',
    'barrelExtension',
    'barrel',
    'verticalGrip',
    'foreGrip',
    'grip',
    'stock',
];

function populateLoadout(selectedWeapon) {
    document.querySelector('#loadout h2').innerHTML =
        selectedWeapon.displayName;

    attachmentsSection.innerHTML = '';

    const sortedAttachments = Object.keys(
        selectedWeapon.modularConfiguration
    ).sort((a, b) => {
        return attachmentSlots.indexOf(a) - attachmentSlots.indexOf(b);
    });

    for (const attachmentCategory of sortedAttachments) {
        const defaultAttachment =
            selectedWeapon.modularConfiguration[attachmentCategory]
                .defaultPart ?? 'None';
        const attachments = [
            defaultAttachment,
            ...selectedWeapon.modularConfiguration[attachmentCategory]
                .uniqueParts,
        ];

        const attachmentCategoryName = (
            attachmentCategory.charAt(0).toUpperCase() +
            attachmentCategory.slice(1)
        ).replace(/([a-z])([A-Z])/g, '$1 $2');

        if (
            selectedWeapon.modularConfiguration[attachmentCategory].uniqueParts
                .length > 0
        ) {
            const attachmentFieldset = attachmentsSection.appendChild(
                document.createElement('fieldset')
            );
            attachmentFieldset.innerHTML = attachmentSelectorTemplate.innerHTML;
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
                    ATTACHMENT_DATA[attachment]?.displayName ??
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
    const statData = MOD_DATA[stat];

    if (value == 0 || value == undefined) return 0;

    const previous = statData.findLast((i) => {
        return value >= i.point;
    });
    const next = statData.find((i) => {
        return value <= i.point;
    });

    if (previous == next) return previous.value;

    const gradient =
        (next.value - previous.value) / (next.point - previous.point);
    const intercept = previous.value - gradient * previous.point;

    return gradient * value + intercept;
}

function applyLoadout(weapon, equippedSkills, equippedAttachments) {
    const updatedWeapon = structuredClone(weapon);

    const modifiers = {};
    equippedAttachments.forEach((attachment) => {
        if (!ATTACHMENT_DATA[attachment]?.attributeModifierMap) return;

        ATTACHMENT_DATA[attachment].attributeModifierMap.forEach((modifier) => {
            return modifiers[modifier.attribute]
                ? (modifiers[modifier.attribute] += modifier.value)
                : (modifiers[modifier.attribute] = modifier.value);
        });
    });

    const equippedMag =
        ATTACHMENT_DATA[
            equippedAttachments.find((attachment) => {
                return ATTACHMENT_DATA[attachment].magazineData;
            })
        ]?.magazineData;

    console.log(equippedMag);

    const fireData = updatedWeapon.fireData;

    fireData.ammoLoaded = (equippedMag ?? weapon.fireData).ammoLoaded ?? 10;
    fireData.ammoInventory =
        (equippedMag ?? weapon.fireData).ammoInventory ?? 100;
    fireData.ammoInventoryMax =
        (equippedMag ?? weapon.fireData).ammoInventoryMax ?? 200;
    fireData.ammoPickup = {
        min: (equippedMag ?? weapon.fireData).ammoPickup.min ?? 5,
        max: (equippedMag ?? weapon.fireData).ammoPickup.max ?? 10,
    };

    const equippedSight =
        ATTACHMENT_DATA[
            equippedAttachments.find((attachment) => {
                return ATTACHMENT_DATA[attachment]?.targetingData;
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
        equippedSkills.includes('precisionShot') &&
        equippedSight?.targetingData?.targetingMagnification >= 5
    )
        damageModifier = equippedSight.targetingData.targetingMagnification;

    for (const skill of [
        'edge',
        'coupDeGrace',
        'combatMarking',
        'painAsymbolia',
        'duckAndWeave',
    ]) {
        if (equippedSkills.includes(skill))
            damageModifier += SKILLS[skill].modifier;
    }

    const faceToFaceIsEquipped = equippedSkills.includes('faceToFace');

    fireData.damageDistanceArray = fireData.damageDistanceArray.map(
        (damageStep) => {
            let damage = damageStep.damage;

            // Face to Face adds to the damage modifier within 5 metres
            if (
                faceToFaceIsEquipped &&
                damageStep.distance + rangeModifier <= 500
            )
                damage *= damageModifier + SKILLS['faceToFace'].modifier;
            else damage *= damageModifier;

            return {
                damage: damage,
                distance: damageStep.distance + rangeModifier,
            };
        }
    );

    if (faceToFaceIsEquipped) {
        if (fireData.damageDistanceArray[0].distance > 500) {
            // Insert face to face's 5m range at the start of the array
            fireData.damageDistanceArray.unshift({
                damage:
                    weapon.fireData.damageDistanceArray[0].damage *
                    (damageModifier + SKILLS['faceToFace'].modifier),
                distance: 500,
            });
        } else if (fireData.damageDistanceArray[0].distance < 500) {
            // Insert face to face's 5m range second in the array
            const damage =
                weapon.fireData.damageDistanceArray[1].damage *
                (damageModifier + SKILLS['faceToFace'].modifier);

            fireData.damageDistanceArray.splice(1, 0, {
                damage: damage,
                distance: 500,
            });
        }
    }

    // Long shot removes distance penalties on critical multipliers
    if (equippedSkills.includes('longShot')) {
        fireData.criticalDamageMultiplierDistanceArray = [
            {
                multiplier:
                    fireData.criticalDamageMultiplierDistanceArray[0]
                        .multiplier,
                distance:
                    fireData.criticalDamageMultiplierDistanceArray.reverse()[0]
                        .distance,
            },
        ];
    }

    fireData.roundsPerMinute = fireData.roundsPerMinute ?? 600;

    fireData.armorPenetration = fireData.armorPenetration ?? 0;

    if (equippedSkills.includes('highGrain'))
        fireData.armorPenetration += SKILLS['highGrain'].modifier;

    if (modifiers['OverallReloadPlayRate']) {
        updatedWeapon.reloadTime /= getModData(
            'OverallReloadPlayRate',
            modifiers['OverallReloadPlayRate']
        );

        updatedWeapon.reloadEmptyTime /= getModData(
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

    document.querySelector('#rpm').innerHTML = weapon.fireData.roundsPerMinute;

    document.querySelector('#ap').innerHTML = weapon.fireData.armorPenetration;

    document.querySelector('#mag').innerHTML = weapon.fireData.ammoLoaded;
    document.querySelector('#max-ammo').innerHTML =
        weapon.fireData.ammoInventoryMax;
    document.querySelector('#ammo-pickup').innerHTML =
        weapon.fireData.ammoPickup.min + '-' + weapon.fireData.ammoPickup.max;

    document.querySelector('#reload').innerHTML =
        Math.round(weapon.reloadTime * 100) / 100 + 's';

    document.querySelector('#full-reload').innerHTML =
        Math.round(weapon.reloadEmptyTime * 100) / 100 + 's';

    const weaponDamageStats =
        document.querySelector('#weapon-damage').children[0];
    weaponDamageStats.innerHTML = '';

    weapon.fireData.damageDistanceArray.forEach((damageStep) => {
        const damageStat = weaponDamageStats.appendChild(
            document.createElement('div')
        );
        damageStat.innerHTML = weaponStatTemplate.innerHTML;
        damageStat.classList = ['weapon-stat'];

        damageStat.children[0].innerHTML =
            Math.round(Math.min(damageStep.distance, 100000)) / 100 + 'm';
        damageStat.children[1].innerHTML =
            Math.round(damageStep.damage * 100) / 100;
    });

    const weaponCritStats =
        document.querySelector('#weapon-damage').children[1];
    weaponCritStats.innerHTML = '';

    weapon.fireData.criticalDamageMultiplierDistanceArray.forEach(
        (criticalDamageStep) => {
            const critStat = weaponCritStats.appendChild(
                document.createElement('div')
            );
            critStat.innerHTML = weaponStatTemplate.innerHTML;
            critStat.classList = ['weapon-stat'];

            critStat.children[0].innerHTML =
                Math.min(criticalDamageStep.distance, 100000) / 100 + 'm';
            critStat.children[1].innerHTML =
                criticalDamageStep.multiplier + 'x';
        }
    );
}
