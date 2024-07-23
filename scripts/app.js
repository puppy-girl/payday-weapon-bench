const DLCs = [
    "Syntax Error",
    "Boys in Blue"
];

const skills = {
    "edge": {
        "displayName": "Edge",
        "description": "You deal 10% extra damage for 20 seconds.",
        "damageModifier": 0.1,
        "iconOffset": {
            "X": 0,
            "Y": 0
        }
    },
    "long-shot": {
        "displayName": "Long Shot",
        "description": "As long as you have EDGE and are aiming down sights, distance penalties do not apply to headshot multipliers.",
        "iconOffset": {
            "X": 2,
            "Y": 5
        }
    },
    "precision-shot": {
        "displayName": "Precision Shot",
        "description": "As long as you have EDGE and are aiming down a scope, your shot will deal extra damage based on your scope magnification.",
        "iconOffset": {
            "X": 3,
            "Y": 5
        }
    },
    "face-to-face": {
        "displayName": "Face to Face",
        "description": "As long as you have both EDGE and GRIT, you deal 10% extra damage to targets within 5 meters of you.",
        "damageModifier": 0.1,
        "iconOffset": {
            "X": 2,
            "Y": 8
        }
    },
    "coup-de-grace": {
        "displayName": "Coup de Grâce",
        "description": "If you have EDGE, you will deal 10% more damage when you shoot a staggered or stunned enemy.",
        "damageModifier": 0.1,
        "iconOffset": {
            "X": 2,
            "Y": 14
        }
    },
    "combat-marking": {
        "displayName": "Combat Marking",
        "description": "As long as you have EDGE, you deal an extra 20% damage against any marked target.",
        "damageModifier": 0.2,
        "iconOffset": {
            "X": 1,
            "Y": 15
        }
    },
    "pain-asymbolia": {
        "displayName": "Pain Asymbolia",
        "description": "As long as you have Adrenaline and either EDGE, GRIT, RUSH, the effects of these buffs are doubled, and you take 10% less damage to your Adrenaline.",
        "damageModifier": 0.1,
        "iconOffset": {
            "X": 5,
            "Y": 19
        }
    },
    "high-grain": {
        "displayName": "High Grain",
        "description": "All placed Ammo Bags increase armor penetration for 30 seconds after interaction for you and all your teammates. Each additional crew member equipped with this skill increases weapon damage by 5% on top of that.",
        "armorPenModifier": 0.2,
        "iconOffset": {
            "X": 4,
            "Y": 1
        }
    },
    "expose": {
        "displayName": "Expose",
        "description": "Shots fired at enemies affected by your flashbang will ignore armor for as long as they are stunned.",
        "iconOffset": {
            "X": 4,
            "Y": 14
        }
    },
    "duck-and-weave": {
        "displayName": "Duck and Weave",
        "description": "As long as you have RUSH, you deal 25% more damage to enemies from behind. This bonus is reduced by 5% for each armor chunk you currently have beyond the first.",
        "damageModifier": 0.25,
        "iconOffset": {
            "X": 3,
            "Y": 20
        }
    }
}

const edgeDependentSkills = [
    "long-shot",
    "precision-shot",
    "face-to-face",
    "coup-de-grace",
    "combat-marking",
    "pain-asymbolia"
]

// Effective Armour Penetration is the amount of damage dealt through armour
// based on the weapon's armour penetration and the enemy's armour hardness
function effectiveArmorPenetration(
    armorPenetration,
    armorHardness
) {
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
    const remainingHealth = Math.max(0, Math.floor(enemyHealth - (critAPDamage * shotsOnArmor)));
    const shotsOnHealth = Math.ceil(remainingHealth / critDamage);

    if (critMultiplier > 1) {
        // Calculate how many crits can be replaced
        // based on damage left over after the kill
        const overdamage = critDamage - (remainingHealth % critDamage || critDamage);
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
            overdamage - (replacableCrits * (critDamage - damage)) ||
            critAPDamage - (enemyHealth % critAPDamage || critAPDamage);
        const replacableArmoredCrits = Math.min(
            shotsOnArmor,
            Math.floor(armorOverdamage / (critAPDamage - APDamage) || shotsOnArmor)
        );

        return {
            armoredCrits: shotsOnArmor - replacableArmoredCrits,
            armoredNonCrits: replacableArmoredCrits,
            unarmoredCrits: shotsOnHealth - replacableCrits,
            unarmoredNonCrits: replacableCrits,
            totalShots: shotsOnArmor + shotsOnHealth
        }
    }
    return {
        armoredCrits: 0,
        armoredNonCrits: shotsOnArmor,
        unarmoredCrits: 0,
        unarmoredNonCrits: shotsOnHealth,
        totalShots: shotsOnArmor + shotsOnHealth
    }
}

// Returns the shots to kill at each unique distance
function weaponShotsToKill(
    weaponName,
    enemyName,
    selectedSkills
) {
    const weapon = weaponData[weaponName],
          enemy = enemyData[enemyName];

    // Create a new array of distances
    // based on the distance arrays in a weapon's stats
    // ordered from highest to lowest
    const distanceArray = [... new Set([
        ...weapon.DamageDistanceArray.map(dist => dist.Distance),
        ...weapon.CriticalDamageMultiplierDistanceArray.map(dist => dist.Distance),
        500 // Add 5m distance for Face to Face
    ])].sort((a, b) => b - a);

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

    distanceArray.forEach(distance => {
        const damage = (weapon.DamageDistanceArray.find(i => i.Distance >= distance) ??
                  weapon.DamageDistanceArray.slice(-1)[0]).Damage;
        
        let multiplier = (weapon.CriticalDamageMultiplierDistanceArray.find(i => i.Distance >= distance) ??
                weapon.CriticalDamageMultiplierDistanceArray.slice(-1)[0]).Multiplier;
        
        if (!selectedSkills.includes('headshot')) multiplier = 1;
        if (selectedSkills.includes('headshot') && selectedSkills.includes('longshot'))
            multiplier = weapon.CriticalDamageMultiplierDistanceArray[0].Multiplier;
        if (enemyName == 'Drone') multiplier = 1;
        if (distance <= 500 && selectedSkills.includes('facetoface'))
            damageMultiplier += skills.facetoface.damageMultiplier;

        const weaponShotsToKill = shotsToKill(
            damage * damageMultiplier,
            multiplier,
            EAP,
            enemy.Health,
            // If headshots are enabled assume the dozer's face is unarmoured
            enemyName == 'Bulldozer' && selectedSkills.includes('headshot') ?
                0 :
                enemy.Armor
        );

        // Calculation only includes headshots if headshots are enabled
        if (enemyName == 'Bulldozer' && selectedSkills.includes('headshot')) {
            weaponShotsToKill.unarmoredCrits += weaponShotsToKill.unarmoredNonCrits;
            weaponShotsToKill.unarmoredNonCrits = 0;
        }
        
        // Remove duplicates
        if (
            previous &&
            weaponShotsToKill.armoredCrits != previous.armoredCrits ||
            weaponShotsToKill.armoredNonCrits != previous.armoredNonCrits ||
            weaponShotsToKill.unarmoredCrits != previous.unarmoredCrits ||
            weaponShotsToKill.unarmoredNonCrits != previous.unarmoredNonCrits
        ) shotsAtDistances[distance] = weaponShotsToKill;
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
    'LMG'
];

const sortedWeapons = Object.keys(weaponData).sort((a, b) => {
    return weaponCategories.indexOf(weaponData[a].TypeClassText) - weaponCategories.indexOf(weaponData[b].TypeClassText)
        || weaponData[a].DLC - weaponData[b].DLC;
});

function populateWeaponSelector() {
    const weaponSelector = document.querySelector('#weapon-list');
    const selectableWeaponTemplate = document.querySelector('template.selectable-weapon').cloneNode(true);
    document.querySelector('template.selectable-weapon').remove();

    for (const weapon of sortedWeapons) {
        const selectableWeapon = weaponSelector.appendChild(document.createElement('div'));

        selectableWeapon.innerHTML = selectableWeaponTemplate.innerHTML;
        selectableWeapon.classList = [ 'selectable-weapon' ];
        selectableWeapon.style = `
            --image-x-offset: ${weaponData[weapon].DisplayIcon.SourceUV.X * -1}px;
            --image-y-offset: ${weaponData[weapon].DisplayIcon.SourceUV.Y * -1}px;
            --image-url: url("images/${weaponData[weapon].DisplayIcon.SourceTexture}");
        `;

        const weaponInput = selectableWeapon.children[0];
        const weaponName = selectableWeapon.children[1];
        const weaponDLC = selectableWeapon.children[2];

        weaponInput.id = weapon;
        weaponInput.value = weapon;

        weaponName.innerHTML = weaponData[weapon].DisplayName;
        weaponName.setAttribute('for', weapon);

        weaponDLC.innerHTML = DLCs[weaponData[weapon].DLC - 1] ?? "";
        weaponDLC.setAttribute('for', weapon);
        
        weaponInput.addEventListener('change', (event) => {
            const selectedWeapon = weaponData[event.target.value];

            populateLoadout(selectedWeapon);
            updateWeaponStats(selectedWeapon);
        });

        if (weapon == 'CAR4')
            weaponInput.checked = true;

        populateLoadout(weaponData['CAR4']);
        updateWeaponStats(weaponData['CAR4']);
    }
}

const skillContainer = document.querySelector('#skill-selector .loadout-category-container');
const skillTemplate = document.querySelector('template.skill').cloneNode(true);
document.querySelector('template.skill').remove();

const loadoutAttachments = document.querySelector('#loadout-attachments');

const attachmentTemplate = document.querySelector('template.attachment').cloneNode(true);
document.querySelector('template.attachment').remove();

const attachmentGroupTemplate = document.querySelector('#attachment-selector').cloneNode(true);
document.querySelector('#attachment-selector').remove();

function populateSkills() {
    for (const skill in skills) {
        const selectableSkill = skillContainer.appendChild(document.createElement('div'));

        selectableSkill.innerHTML = skillTemplate.innerHTML;
        selectableSkill.classList = [ 'skill' ];

        const skillInput = selectableSkill.children[0];
        const skillLabel = selectableSkill.children[1];

        skillInput.id = skill;

        if (edgeDependentSkills.includes(skill))
            skillInput.disabled = true;

        skillLabel.innerHTML = skills[skill].displayName;
        skillLabel.setAttribute('for', skill);
        
        skillLabel.style = `
            --image-x-offset: ${skills[skill].iconOffset.X * -64}px;
            --image-y-offset: ${skills[skill].iconOffset.Y * -64}px;
            --image-url: url("images/${skill == 'edge' ? 'edge.png' : 'skills.png'}");
        `;

        skillInput.addEventListener('change', (event) => {
            updateSkills(event.target.id);
        });
    }
}

const equippedAttachments = [];

function updateAttachments() {
    equippedAttachments.length = 0;

    return document.querySelectorAll('.attachment input:checked').forEach(i => {
            if (i.value !== 'None') equippedAttachments.push(i.value);
        });
}

function populateLoadout(selectedWeapon) {
    document.querySelector('#loadout h2').innerHTML = selectedWeapon.DisplayName;

    loadoutAttachments.innerHTML = '';
    updateAttachments();

    for (const attachmentCategory in selectedWeapon.ModularConfiguration) {
        const defaultAttachment = selectedWeapon.ModularConfiguration[attachmentCategory].DefaultPart
            ?? 'None';
        const attachments = [
            defaultAttachment, ...selectedWeapon.ModularConfiguration[attachmentCategory].UniqueModParts
        ];

        if (selectedWeapon.ModularConfiguration[attachmentCategory].UniqueModParts.length > 0) {
            const attachmentFieldset = loadoutAttachments.appendChild(document.createElement('fieldset'));
            attachmentFieldset.innerHTML = attachmentGroupTemplate.innerHTML;
            attachmentFieldset.classList = [ 'loadout-category' ];
    
            attachmentFieldset.children[0].innerHTML = attachmentCategory;
    
            for (const attachment of attachments) {
                const attachmentButton = attachmentFieldset.children[1].appendChild(document.createElement('div'));
                attachmentButton.innerHTML = attachmentTemplate.innerHTML;
                attachmentButton.classList = [ 'attachment' ];
    
                const attachmentInput = attachmentButton.children[0];
                const attachmentLabel = attachmentButton.children[1];
            
                attachmentInput.id = attachmentCategory + '_' + attachment;
                attachmentInput.value = attachment;
                attachmentInput.name = attachmentCategory;
                attachmentInput.checked = attachment == defaultAttachment;
            
                attachmentLabel.setAttribute('for', attachmentCategory + '_' + attachment);
                attachmentLabel.innerHTML = attachment;

                attachmentInput.addEventListener('change', () => {
                    updateAttachments();
                });
            }
        }
    }
}

populateWeaponSelector();
populateSkills();

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

            if(equippedSkills.includes(skill))
                equippedSkills.splice(equippedSkills.indexOf(skill), 1);
        } else {
            skillInput.disabled = false;
        }
    }
}

function updateWeaponStats(selectedWeapon) {
    const rpmDisplay = document.querySelector('#rpm');
    const apDisplay = document.querySelector('#ap');
    const magSizeDisplay = document.querySelector('#mag');
    const ammoPickupDisplay = document.querySelector('#ammo-pickup');
    const maxAmmoDisplay = document.querySelector('#max-ammo');

    rpmDisplay.innerHTML = selectedWeapon.FireData.RoundsPerMinute ?? 600;
    apDisplay.innerHTML = selectedWeapon.FireData.ArmorPenetration ?? 0;
    magSizeDisplay.innerHTML = selectedWeapon.FireData.AmmoLoaded;
    ammoPickupDisplay.innerHTML = (
        (selectedWeapon.FireData.AmmoPickup.Min ?? 5) + '-' +
        (selectedWeapon.FireData.AmmoPickup.Max ?? 10)
    );
    maxAmmoDisplay.innerHTML = selectedWeapon.FireData.AmmoInventory;
}