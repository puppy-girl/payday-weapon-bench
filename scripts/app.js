const DLCs = [
    "Syntax Error",
    "Boys in Blue"
];

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
    const weaponSelector = document.querySelector('div#weapon-list');
    const selectableWeaponTemplate = document.querySelector('template.selectable-weapon').cloneNode(true);
    document.querySelector('template.selectable-weapon').remove();

    for (weapon of sortedWeapons) {
        const selectableWeapon = weaponSelector.appendChild(document.createElement('div'));
        selectableWeapon.innerHTML = selectableWeaponTemplate.innerHTML;
        selectableWeapon.classList = [ 'selectable-weapon' ];
        selectableWeapon.style = `
            --image-x-offset: ${weaponData[weapon].DisplayIcon.SourceUV.X * -1}px;
            --image-y-offset: ${weaponData[weapon].DisplayIcon.SourceUV.Y * -1}px;
            --image-url: url("images/${weaponData[weapon].DisplayIcon.SourceTexture}");
        `;
        selectableWeapon.children[0].innerHTML = weaponData[weapon].DisplayName;
        selectableWeapon.children[1].innerHTML = DLCs[weaponData[weapon].DLC - 1] ?? "";
    }
}

populateWeaponSelector();