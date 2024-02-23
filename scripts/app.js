// Effective Armour Penetration is the amount of damage dealt through armour
// based on the weapon's armour penetration and the enemy's armour hardness
function EffectiveArmorPenetration(
    armorPenetration,
    armorHardness
) {
    // Armour penetrating damage is calculated with AP - AH + 1
    // Clamp Effective Armour Penetration between 0 and 1
    return Math.max(0, Math.min(1, armorPenetration - armorHardness + 1));
}

function ShotsToKill(
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
function WeaponShotsToKill(
    weaponName,
    enemyName,
    skills
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
        armorPenetrationBoost = 0;

    if (!weapon.ArmorPenetration) weapon.ArmorPenetration = 0;

    if (skills.includes('Edge')) damageMultiplier += 0.1;
    if (skills.includes('Cutting Shot')) armorPenetrationBoost += 0.1;
    if (skills.includes('Coup de Grâce')) damageMultiplier += 0.1;
    if (skills.includes('High Grain')) damageMultiplier += 0.2;
    if (skills.includes('Combat Marking')) damageMultiplier += 0.2;
    
    const effectiveArmorPenetration = EffectiveArmorPenetration(
            weapon.ArmorPenetration + armorPenetrationBoost,
            enemy.ArmorHardness
          );

    let shotsAtDistances = {},
        previous = {};

    distanceArray.forEach(distance => {
        const damage = (weapon.DamageDistanceArray.find(i => i.Distance >= distance) ??
                  weapon.DamageDistanceArray.slice(-1)[0]).Damage;
        
        let multiplier = (weapon.CriticalDamageMultiplierDistanceArray.find(i => i.Distance >= distance) ??
                weapon.CriticalDamageMultiplierDistanceArray.slice(-1)[0]).Multiplier;
        
        if (!skills.includes('Headshots')) multiplier = 1;
        if (skills.includes('Headshots') && skills.includes('Long Shot'))
            multiplier = weapon.CriticalDamageMultiplierDistanceArray[0].Multiplier;
        if (distance <= 500 && skills.includes('Face to Face')) damageMultiplier += 0.1;

        const weaponShotsToKill = ShotsToKill(
            damage * damageMultiplier,
            multiplier,
            effectiveArmorPenetration,
            enemy.Health,
            // If headshots are enabled assume the dozer's face is unarmoured
            enemyName == 'Bulldozer' && skills.includes('Headshots') ?
                0 :
                enemy.Armor
        );

        // Calculation only includes headshots if headshots are enabled
        if (enemyName == 'Bulldozer' && skills.includes('Headshots')) {
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

function TimeToKill(
    shotsToKill,
    roundsPerMinute,
    pelletCount,
    magazineAmmo,
    reloadTime
) {
    if (!roundsPerMinute) roundsPerMinute = 600;
    if (!pelletCount) pelletCount = 1;
    else shotsToKill = Math.ceil(shotsToKill / pelletCount);

    let timeToKill = (shotsToKill - 1) / (roundsPerMinute / 60);
    if (reloadTime && magazineAmmo && shotsToKill > magazineAmmo)
        timeToKill += reloadTime * Math.floor(shotsToKill / magazineAmmo);

    return Math.round(timeToKill * 100) / 100;
}

function UpdateDamageChart(
    selectedWeapon,
    skills
) {
    damageChart.textContent = '';

    let currentCard = 0;

    for (const enemyName in enemyData) {
        const shotsAtDistances = WeaponShotsToKill(
                  selectedWeapon,
                  enemyName,
                  skills
              ),
              armorPenetration = weaponData[selectedWeapon].ArmorPenetration,
              effectiveArmorPenetration = EffectiveArmorPenetration(
                  armorPenetration,
                  enemyData[enemyName].ArmorHardness
              );

        let damageStats = document.createElement('div');
        damageStats.setAttribute('class', 'damage-stats-card card');
        damageChart.appendChild(damageStats);
    
        let statDisplay = document.createElement('div');
        statDisplay.setAttribute('class', 'damage-stats');
        damageStats.appendChild(statDisplay);

        // If the enemy is a dozer or a shield and headshots is enabled
        // display the shots required and TTK to break their visor
        if (
            (enemyName == 'Bulldozer' || enemyName == 'Shield') &&
            skills.includes('Headshots')
        ) {
            let visorDisplay = document.createElement('p');
            visorDisplay.setAttribute('class', 'visor-damage glass');
            
            let damage = weaponData[selectedWeapon].DamageDistanceArray[0].Damage,
                damageMultiplier = 1,
                distance = weaponData[selectedWeapon].DamageDistanceArray[0].Distance / 100;

            const visorArmorHardness = enemyData[enemyName].VisorArmorHardness;

            if (armorPenetration > visorArmorHardness - 1) {
                visorDisplay.innerHTML = `Rounds can penetrate visor`;
            } else {
                visorDisplay.setAttribute('class', 'visor-damage glass cracked');

                if (skills.includes('Edge')) damageMultiplier += 0.1;
                if (skills.includes('Face to Face')) {
                    damageMultiplier += 0.1;
                    distance = 5
                }
                if (skills.includes('High Grain')) damageMultiplier += 0.2;
                if (skills.includes('Combat Marking')) damageMultiplier += 0.2;
    
                let shotsToBreakVisor = Math.ceil(
                        enemyData[enemyName].VisorArmor / (damage * damageMultiplier)
                    ),
                    timeToBreakVisor = TimeToKill(
                        shotsToBreakVisor,
                        weaponData[selectedWeapon].RoundsPerMinute,
                        weaponData[selectedWeapon].ProjectilesPerFiredRound,
                        weaponData[selectedWeapon].AmmoLoaded ?? 10,
                        weaponData[selectedWeapon].ReloadEmptyNotifyTime
                    );

                
                if (weaponData[selectedWeapon].ProjectilesPerFiredRound > 1) {
                    shotsToBreakVisor = Math.ceil(shotsToBreakVisor / weaponData[selectedWeapon].ProjectilesPerFiredRound);
                }

                const reloadCount = Math.floor((shotsToBreakVisor - 1) / (weaponData[selectedWeapon].AmmoLoaded ?? 10));
    
                visorDisplay.textContent = `${shotsToBreakVisor} shots required to break visor at ${distance}m`;
                let visorDisplayTTK = document.createElement('span')
                visorDisplayTTK.setAttribute('class', 'time-to-kill');
                visorDisplayTTK.textContent += `${timeToBreakVisor} seconds, `
                visorDisplayTTK.textContent += `includes ${reloadCount} ${reloadCount != 1 ? 'reloads' : 'reload'}`
                visorDisplay.appendChild(visorDisplayTTK);
            }
            damageStats.appendChild(visorDisplay);
        }

        // Populate the damage chart with weapon name and equipped skills
        let damageStatsWeapon = document.createElement('div');
        damageStatsWeapon.setAttribute('class', 'damage-stats-weapon');

        let damageStatsWeaponName = document.createElement('h2');
        damageStatsWeaponName.setAttribute('class', 'weapon-name');
        damageStatsWeaponName.textContent = selectedWeapon;
        damageStatsWeapon.appendChild(damageStatsWeaponName);

        if (skills) {
            let damageStatsWeaponSkills = document.createElement('div');
            damageStatsWeaponSkills.setAttribute('class', 'weapon-skills');
            skills.forEach(skill => {
                let weaponSkillBadge = document.createElement('span');
                weaponSkillBadge.setAttribute('class', 'weapon-skill');
                weaponSkillBadge.setAttribute('aria-pressed', 'true');
    
                if ((!effectiveArmorPenetration ||
                    !enemyData[enemyName].ArmorHardness) &&
                    skill == 'Cutting Shot'
                ) weaponSkillBadge.setAttribute('disabled', '');
    
                if (enemyName == 'Dozer' &&
                    skill == 'Coup de Grâce'
                ) weaponSkillBadge.setAttribute('disabled', '');
    
                let weaponSkillIcon = document.createElement('img');
                weaponSkillIcon.setAttribute('src', './images/' + skill + '.png');
                weaponSkillIcon.setAttribute('alt', skill);
                weaponSkillBadge.appendChild(weaponSkillIcon);
    
                damageStatsWeaponSkills.appendChild(weaponSkillBadge);
            });
    
            damageStatsWeapon.appendChild(damageStatsWeaponSkills);
            statDisplay.appendChild(damageStatsWeapon);
        }

        let damageBracketContainer = document.createElement('div');
        damageBracketContainer.setAttribute('class', 'damage-bracket-container');
        statDisplay.appendChild(damageBracketContainer);

        // Populate the damage chart with shots to kill at different distances
        const damageBracketCount = 3;
        for (let i = 0; i < damageBracketCount; i++) {
            const distance = Object.keys(shotsAtDistances)[i];
            if (!distance) break;

            const timeToKill = TimeToKill(
                      shotsAtDistances[distance].totalShots,
                      weaponData[selectedWeapon].RoundsPerMinute,
                      weaponData[selectedWeapon].ProjectilesPerFiredRound,
                      weaponData[selectedWeapon].AmmoLoaded ?? 10,
                      weaponData[selectedWeapon].ReloadEmptyNotifyTime
                  ),
                  armoredCrits = shotsAtDistances[distance].armoredCrits,
                  armoredNonCrits = shotsAtDistances[distance].armoredNonCrits,
                  unarmoredCrits = shotsAtDistances[distance].unarmoredCrits,
                  unarmoredNonCrits = shotsAtDistances[distance].unarmoredNonCrits;
            
            let totalShotsToKill = shotsAtDistances[distance].totalShots;

            if (weaponData[selectedWeapon].ProjectilesPerFiredRound > 1) {
                totalShotsToKill = Math.ceil(shotsAtDistances[distance].totalShots / weaponData[selectedWeapon].ProjectilesPerFiredRound);
            }

            let damageBracket = document.createElement('div');
            damageBracket.setAttribute('class', 'damage-bracket');
            
            damageBracketContainer.appendChild(damageBracket);

            let damageBracketDistance = document.createElement('h2')
            damageBracketDistance.setAttribute('class', 'distance');
            damageBracketDistance.textContent = distance / 100 + " meters";
            damageBracket.appendChild(damageBracketDistance);

            let damageBracketShots = document.createElement('h1')
            damageBracketShots.setAttribute('class', 'shots-to-kill');
            damageBracketShots.textContent = totalShotsToKill + (totalShotsToKill != 1 ? ' shots' : ' shot');
            damageBracket.appendChild(damageBracketShots);

            if (armoredCrits || armoredNonCrits) {
                let damageBracketArmored = document.createElement('span');
                if (effectiveArmorPenetration) {
                    damageBracketArmored.setAttribute('class', 'enemy-armor penetrating-armored-shots');
                } else {
                    damageBracketArmored.setAttribute('class', 'enemy-armor');
                }

                let shotsText = [];
                if (armoredCrits) shotsText.push(armoredCrits + (armoredCrits != 1 ? ' crits' : ' crit'));
                if (armoredNonCrits) shotsText.push(armoredNonCrits + (armoredNonCrits != 1 ? ' shots' : ' shot'));
                damageBracketArmored.textContent = shotsText.join(' + ');
                damageBracket.appendChild(damageBracketArmored);
            }
            if (unarmoredCrits || unarmoredNonCrits) {
                let damageBracketUnarmored = document.createElement('span')
                damageBracketUnarmored.setAttribute('class', 'enemy-health');
                let shotsText = [];
                if (unarmoredCrits) shotsText.push(unarmoredCrits + (unarmoredCrits != 1 ? ' crits' : ' crit'));
                if (unarmoredNonCrits) shotsText.push(unarmoredNonCrits + (unarmoredNonCrits != 1 ? ' shots' : ' shot'));
                damageBracketUnarmored.textContent = shotsText.join(' + ');
                damageBracket.appendChild(damageBracketUnarmored);
            }

            let damageBracketTTK = document.createElement('span');
            damageBracketTTK.setAttribute('class', 'time-to-kill');
            damageBracketTTK.textContent = timeToKill + " seconds";
            damageBracket.appendChild(damageBracketTTK);

            const reloadCount = Math.floor((totalShotsToKill - 1) / (weaponData[selectedWeapon].AmmoLoaded ?? 10));
            if (reloadCount >= 1) {
                let damageBracketReloads = document.createElement('span');
                damageBracketReloads.setAttribute('class', 'time-to-kill');
                damageBracketReloads.textContent += `${reloadCount} ${reloadCount != 1 ? 'reloads' : 'reload'}`
                damageBracket.appendChild(damageBracketReloads);
            }
        }

        // Populate the damage chart with enemy name and stats
        let damageStatsEnemy = document.createElement('div');
        damageStatsEnemy.setAttribute('class', 'damage-stats-enemy');

        let damageStatsEnemyName = document.createElement('h2');
        damageStatsEnemyName.setAttribute('class', 'enemy-name');
        damageStatsEnemyName.textContent = enemyName;
        damageStatsEnemy.appendChild(damageStatsEnemyName);

        let damageStatsEnemyArmor = document.createElement('span');
        damageStatsEnemyArmor.setAttribute('class', 'enemy-armor');
        damageStatsEnemyArmor.textContent = enemyData[enemyName].Armor + " Armor";
        damageStatsEnemy.appendChild(damageStatsEnemyArmor);

        let damageStatsEnemyHealth = document.createElement('span');
        damageStatsEnemyHealth.setAttribute('class', 'enemy-health');
        damageStatsEnemyHealth.textContent = enemyData[enemyName].Health + " Health";
        damageStatsEnemy.appendChild(damageStatsEnemyHealth);

        if (enemyData[enemyName].ArmorHardness) {
            let damageStatsEnemyHardness = document.createElement('span');
            damageStatsEnemyHardness.setAttribute('class', 'enemy-armor-hardness');
            damageStatsEnemyHardness.textContent = enemyData[enemyName].ArmorHardness + " Hardness";
            damageStatsEnemy.appendChild(damageStatsEnemyHardness);
        }

        statDisplay.appendChild(damageStatsEnemy);

        // Set CSS variables for weapon and enemy background images
        damageStats.style.setProperty('--weapon-image', `url("images/weapons/${selectedWeapon}.jpg")`);
        damageStats.style.setProperty('--enemy-image', `url("images/enemies/${enemyName}.jpg")`);

        damageStats.appendChild(statDisplay)

        damageStats.style.transitionDelay = (currentCard++ * 0.03) + 's';
        damageStats.style.transform = 'scale(0.95)';
        setTimeout(() => {
            damageStats.style.transform = 'scale(1)';
        });
    }

    console.log(selectedWeapon);

    document.querySelector('#weapon')
        .style.setProperty('--weapon-image', `url("images/weapons/${selectedWeapon}.jpg")`);
}

function UpdateWeaponStats(
    selectedWeapon
) {
    const weapon = weaponData[selectedWeapon];

    weaponStats.innerHTML = '';

    // Damage distance array
    let weaponDamage = document.createElement('div');
    weaponDamage.setAttribute('class', 'weapon-stat-multiple');

    let weaponDamageTitle = document.createElement('span');
    weaponDamageTitle.setAttribute('class', 'weapon-stat-title');

    let weaponDamageDistances = weapon.DamageDistanceArray.map(i => i.Distance / 100 + "m");
    weaponDamageTitle.textContent = `Damage // ${weaponDamageDistances.join(', ')}`;
    weaponDamage.appendChild(weaponDamageTitle);

    let weaponDamageAtDistances = document.createElement('div');
    weapon.DamageDistanceArray.forEach(distance => {
        let weaponDamageStat = document.createElement('span');
        weaponDamageStat.setAttribute('class', 'weapon-stat');
        weaponDamageStat.textContent = Math.round(distance.Damage * 10) / 10;
        if (weapon.ProjectilesPerFiredRound && weapon.ProjectilesPerFiredRound > 1) {
            let weaponPelletCount = document.createElement('span');
            weaponPelletCount.setAttribute('class', 'weapon-pellet-count');
            weaponPelletCount.textContent += `×${weapon.ProjectilesPerFiredRound}`
            weaponDamageStat.appendChild(weaponPelletCount);
        }
        weaponDamageAtDistances.appendChild(weaponDamageStat);
    });

    weaponDamage.appendChild(weaponDamageAtDistances);
    weaponStats.appendChild(weaponDamage);

    // Crit multiplier distance array
    let weaponCrit = document.createElement('div');
    weaponCrit.setAttribute('class', 'weapon-stat-multiple');

    let weaponCritTitle = document.createElement('span');
    weaponCritTitle.setAttribute('class', 'weapon-stat-title');

    let weaponCritDistances = weapon.CriticalDamageMultiplierDistanceArray.map(i => i.Distance / 100 + "m");
    weaponCritTitle.textContent = `Crit Multiplier // ${weaponCritDistances.join(', ')}`;
    weaponCrit.appendChild(weaponCritTitle);

    let weaponCritAtDistances = document.createElement('div');
    weapon.CriticalDamageMultiplierDistanceArray.forEach(distance => {
        let weaponCritStat = document.createElement('span');
        weaponCritStat.setAttribute('class', 'weapon-stat');
        weaponCritStat.textContent = distance.Multiplier + "×";
        weaponCritAtDistances.appendChild(weaponCritStat);
    });

    weaponCrit.appendChild(weaponCritAtDistances);
    weaponStats.appendChild(weaponCrit);

    // RPM
    let weaponRPM = document.createElement('div');

    let weaponRPMTitle = document.createElement('span');
    weaponRPMTitle.setAttribute('class', 'weapon-stat-title');
    weaponRPMTitle.textContent = 'RPM';
    weaponRPM.appendChild(weaponRPMTitle);

    let weaponRPMStat = document.createElement('span');
    weaponRPMStat.setAttribute('class', 'weapon-stat');
    weaponRPMStat.textContent = weapon.RoundsPerMinute ?? 600;

    weaponRPM.appendChild(weaponRPMStat);
    weaponStats.appendChild(weaponRPM);

    // Armour Penetration
    let weaponAP = document.createElement('div');

    let weaponAPTitle = document.createElement('span');
    weaponAPTitle.setAttribute('class', 'weapon-stat-title');
    weaponAPTitle.textContent = 'AP';
    weaponAP.appendChild(weaponAPTitle);

    let weaponAPStat = document.createElement('span');
    weaponAPStat.setAttribute('class', 'weapon-stat');
    weaponAPStat.textContent = weapon.ArmorPenetration;

    weaponAP.appendChild(weaponAPStat);
    weaponStats.appendChild(weaponAP);

    // Mag Size
    let weaponAmmoLoaded = document.createElement('div');

    let weaponAmmoLoadedTitle = document.createElement('span');
    weaponAmmoLoadedTitle.setAttribute('class', 'weapon-stat-title');
    weaponAmmoLoadedTitle.textContent = 'Mag';
    weaponAmmoLoaded.appendChild(weaponAmmoLoadedTitle);

    let weaponAmmoLoadedStat = document.createElement('span');
    weaponAmmoLoadedStat.setAttribute('class', 'weapon-stat');
    weaponAmmoLoadedStat.textContent = weapon.AmmoLoaded ?? 10;

    weaponAmmoLoaded.appendChild(weaponAmmoLoadedStat);
    weaponStats.appendChild(weaponAmmoLoaded);

    // Ammo Pickup
    let weaponAmmoPickup = document.createElement('div');

    let weaponAmmoPickupTitle = document.createElement('span');
    weaponAmmoPickupTitle.setAttribute('class', 'weapon-stat-title');
    weaponAmmoPickupTitle.textContent = 'Ammo Pickup';
    weaponAmmoPickup.appendChild(weaponAmmoPickupTitle);

    let weaponAmmoPickupStat = document.createElement('span');
    weaponAmmoPickupStat.setAttribute('class', 'weapon-stat');

    if (weapon.AmmoPickup.Min == weapon.AmmoPickup.Max)
        weaponAmmoPickupStat.textContent = weapon.AmmoPickup.Max;
    else
        weaponAmmoPickupStat.textContent = `${weapon.AmmoPickup.Min ?? 0}-${weapon.AmmoPickup.Max ?? 10}`;

    weaponAmmoPickup.appendChild(weaponAmmoPickupStat);
    weaponStats.appendChild(weaponAmmoPickup);
}

const weaponStats = document.querySelector('#weapon-stats');
const weaponSelector = document.querySelector('#weapon-selector select');
const skillButtons = document.querySelectorAll('#weapon-skills button');
const edgeSkillButtons = Array.from(skillButtons).filter(i => {
    return (
        i.title == 'Cutting Shot' ||
        i.title == 'Long Shot' ||
        i.title == 'Face to Face' ||
        i.title == 'Coup de Grâce'
    );
});
const damageChart = document.querySelector('#damage-info');

// Create a list of weapons organised by their class
let weaponList = {};
for (const weapon in weaponData) {
    const weaponClass = weaponData[weapon].Class
    weaponList[weaponClass] = weaponList[weaponClass] || [];
    weaponList[weaponClass].push(weapon)
}

// Populate the weapon selector separated by class
for (const weaponClass in weaponList) {
    let weaponSelectorGroup = document.createElement('optgroup');
    weaponSelectorGroup.setAttribute('label', weaponClass);
    weaponSelector.appendChild(weaponSelectorGroup);

    weaponList[weaponClass].forEach((weapon) => {
        let weaponSelectorOption = document.createElement('option');
        weaponSelectorOption.setAttribute('value', weapon);
        weaponSelectorOption.textContent = weapon;
        weaponSelector.appendChild(weaponSelectorOption);
    });
}

// Initialise the damage chart with defaults
let selectedWeapon = weaponSelector.options[weaponSelector.selectedIndex].value,
    skills = [];

UpdateDamageChart(selectedWeapon, skills);
UpdateWeaponStats(selectedWeapon);

// Add event listeners for weapon selector and buttons to update damage chart

weaponSelector.addEventListener("change", (event) => {
    selectedWeapon = event.target.options[event.target.selectedIndex].value;
    UpdateDamageChart(selectedWeapon, skills);
    UpdateWeaponStats(selectedWeapon);
});

weaponSelector.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
});

for (const button of skillButtons) {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();

        if (event.target.disabled) return;
        
        if (event.target.getAttribute('aria-pressed') == 'false') {
            event.target.setAttribute('aria-pressed', 'true');
        }
        else {
            event.target.setAttribute('aria-pressed', 'false');
        }

        if (event.target.title == 'Edge') {
            if (event.target.getAttribute('aria-pressed') == 'true') {
                for (const edgeSkill of edgeSkillButtons) {
                    edgeSkill.removeAttribute('disabled');
                }
            }
            else {
                for (const edgeSkill of edgeSkillButtons) {
                    edgeSkill.setAttribute('disabled', '');
                    edgeSkill.setAttribute('aria-pressed', 'false');
                }
            }
        }

        const pressedButtons = Array.from(skillButtons)
            .filter(i => i.getAttribute('aria-pressed') == 'true')
            .map(i => i = i.title);
        skills = pressedButtons;

        UpdateDamageChart(selectedWeapon, skills);
    });

    if (button.title == 'Edge' && button.getAttribute('aria-pressed') == 'false') {
        for (const edgeSkill of edgeSkillButtons) {
            edgeSkill.setAttribute('disabled', '');
        }
    }
}