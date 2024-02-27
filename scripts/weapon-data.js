const weaponData = {
  "CAR-4": {
    Class: "Assault Rifle",
    DamageDistanceArray: [
      {
        Damage: 30.4,
        Distance: 3000.0,
      },
      {
        Damage: 25.0,
        Distance: 5000.0,
      },
      {
        Damage: 16.7,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 5.0,
        Distance: 1000.0,
      },
      {
        Multiplier: 3.0,
        Distance: 3500.0,
      },
      {
        Multiplier: 2.0,
        Distance: 6000.0,
      },
      {
        Multiplier: 1.5,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 30,
    AmmoInventoryMax: 300,
    AmmoInventory: 120,
    AmmoPickup: {
      Min: 3.0,
      Max: 5.0,
    },
    ArmorPenetration: 0.92,
    RoundsPerMinute: 720.0,
    GraphDisplacementList: {
      Points: [
        {
          X: -0.05,
          Y: 0.2,
        },
        {
          X: 0.1,
          Y: 0.7,
        },
        {
          X: 0.05,
          Y: 1.3,
        },
        {
          X: 0.2,
          Y: 1.8,
        },
        {
          X: -0.15,
          Y: 2.1,
        },
        {
          X: 0.05,
          Y: 2.7,
        },
        {
          X: -0.35,
          Y: 2.8,
        },
        {
          X: -0.55,
          Y: 3.2,
        },
        {
          X: -0.85,
          Y: 2.9,
        },
        {
          X: -1.1,
          Y: 3.4,
        },
        {
          X: -1.5,
          Y: 3.5,
        },
        {
          X: -1.3,
          Y: 4.0,
        },
        {
          X: -1.55,
          Y: 4.4,
        },
        {
          X: -1.7,
          Y: 4.9,
        },
        {
          X: -1.45,
          Y: 5.3,
        },
        {
          X: -1.7,
          Y: 5.7,
        },
        {
          X: -2.0,
          Y: 5.8,
        },
        {
          X: -1.85,
          Y: 6.4,
        },
        {
          X: -2.2,
          Y: 6.7,
        },
        {
          X: -2.05,
          Y: 7.3,
        },
      ],
    },
    DisplacementResetTime: 0.25,
    DisplacementGraphLoopStart: 13,
    DisplacementHipFireMultiplier: 2.2,
    FireSpreadStart: 0.2,
    FireSpreadIncrease: 0.35,
    FireSpreadCap: 3.0,
    SpreadStanceMultipliers: {
      Stand: {
        Start: 4.0,
        Cap: 2.0,
      },
      StandMove: {
        Spread: 1.5,
        Start: 4.0,
        Cap: 3.0,
      },
      Crouch: {
        Spread: 0.5,
        Start: 0.33,
      },
      CrouchMove: {
        Start: 0.33,
      },
      Target: {
        Spread: 0.0,
        Start: 0.33,
      },
      TargetMove: {
        Spread: 0.15,
        Start: 0.33,
      },
    },
    DeviationHipFireMultiplier: 1.0,
    TargetingTransitionTime: 0.35,
    EquipNotifyTime: 0.40000004,
    UnequipNotifyTime: 0.53333336,
    SprintExitNotifyTime: 0.2521767,
    ReloadEmptyNotifyTime: 2.6666667,
    ReloadNotifyTime: 2.3333333,
  },
  "KU-59": {
    Class: "Assault Rifle",
    DamageDistanceArray: [
      {
        Damage: 40.2,
        Distance: 1500.0,
      },
      {
        Damage: 36.4,
        Distance: 3000.0,
      },
      {
        Damage: 30.3,
        Distance: 5000.0,
      },
      {
        Damage: 20.0,
        Distance: 10000.0,
      },
      {
        Damage: 16.7,
        Distance: 1000000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 5.0,
        Distance: 2000.0,
      },
      {
        Multiplier: 3.0,
        Distance: 4000.0,
      },
      {
        Multiplier: 2.0,
        Distance: 6000.0,
      },
      {
        Multiplier: 1.5,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 30,
    AmmoInventoryMax: 300,
    AmmoInventory: 120,
    AmmoPickup: {
      Min: 3.0,
      Max: 4.0,
    },
    ArmorPenetration: 0.9,
    GraphDisplacementList: {
      Points: [
        {
          X: -0.1,
          Y: 0.2,
        },
        {
          X: -0.3,
          Y: 0.7,
        },
        {
          X: -0.2,
          Y: 1.25,
        },
        {
          X: 0.05,
          Y: 2.2,
        },
        {
          X: 0.4,
          Y: 2.8,
        },
        {
          X: 1.0,
          Y: 3.3,
        },
        {
          X: 0.8,
          Y: 4.0,
        },
        {
          X: 1.15,
          Y: 4.7,
        },
        {
          X: 1.5,
          Y: 5.2,
        },
        {
          X: 1.0,
          Y: 5.7,
        },
        {
          X: 1.4,
          Y: 6.2,
        },
        {
          X: 0.85,
          Y: 6.6,
        },
        {
          X: 1.2,
          Y: 7.4,
        },
        {
          X: 1.5,
          Y: 6.9,
        },
        {
          X: 2.0,
          Y: 7.1,
        },
        {
          X: 1.8,
          Y: 8.0,
        },
        {
          X: 2.3,
          Y: 7.5,
        },
        {
          X: 2.4,
          Y: 8.5,
        },
        {
          X: 2.9,
          Y: 7.9,
        },
        {
          X: 3.1,
          Y: 9.1,
        },
        {
          X: 3.5,
          Y: 9.2,
        },
      ],
    },
    DisplacementResetTime: 0.35,
    DisplacementGraphLoopStart: 14,
    DisplacementHipFireMultiplier: 1.7,
    FireSpreadStart: 0.25,
    FireSpreadResetTime: 0.45,
    FireSpreadDecayRate: 0.45,
    FireSpreadCap: 3.5,
    SpreadStanceMultipliers: {
      Stand: {
        Spread: 1.15,
        Start: 4.0,
        Cap: 2.0,
        Increment: 1.2,
      },
      StandMove: {
        Spread: 1.35,
        Start: 3.5,
        Cap: 3.0,
        Increment: 1.2,
      },
      Crouch: {
        Spread: 0.65,
        Start: 0.33,
      },
      CrouchMove: {
        Spread: 1.15,
        Start: 0.33,
      },
      Target: {
        Spread: 0.0,
        Start: 0.33,
      },
      TargetMove: {
        Spread: 0.2,
        Start: 0.33,
      },
    },
    DeviationHipFireMultiplier: 1.0,
    TargetingTransitionTime: 0.4,
    EquipNotifyTime: 0.40000004,
    UnequipNotifyTime: 0.53333336,
    SprintExitNotifyTime: 0.3333333,
    ReloadEmptyNotifyTime: 2.8350124,
    ReloadNotifyTime: 2.3333335,
  },
  "Northwest B-9": {
    Class: "Assault Rifle",
    DamageDistanceArray: [
      {
        Damage: 28.0,
        Distance: 2500.0,
      },
      {
        Damage: 24.0,
        Distance: 4500.0,
      },
      {
        Damage: 14.0,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 5.0,
        Distance: 1000.0,
      },
      {
        Multiplier: 3.0,
        Distance: 3500.0,
      },
      {
        Multiplier: 2.0,
        Distance: 6000.0,
      },
      {
        Multiplier: 1.5,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 30,
    AmmoInventoryMax: 300,
    AmmoInventory: 120,
    AmmoPickup: {
      Max: 7.0,
    },
    ArmorPenetration: 0.75,
    RoundsPerMinute: 750.0,
    GraphDisplacementList: {
      Points: [
        {
          X: 0.0,
          Y: 0.2,
        },
        {
          X: 0.1,
          Y: 0.5,
        },
        {
          X: 0.0,
          Y: 0.8,
        },
        {
          X: -0.1,
          Y: 1.3,
        },
        {
          X: -0.25,
          Y: 1.6,
        },
        {
          X: -0.45,
          Y: 1.96,
        },
        {
          X: -0.6,
          Y: 2.32,
        },
        {
          X: -0.9,
          Y: 2.68,
        },
        {
          X: -1.1,
          Y: 3.04,
        },
        {
          X: -0.8,
          Y: 3.4,
        },
        {
          X: -1.1,
          Y: 3.76,
        },
        {
          X: -0.8,
          Y: 4.12,
        },
        {
          X: -1.0,
          Y: 4.48,
        },
        {
          X: -0.8,
          Y: 4.84,
        },
        {
          X: -0.5,
          Y: 5.2,
        },
        {
          X: -0.7,
          Y: 5.56,
        },
        {
          X: -0.5,
          Y: 5.92,
        },
        {
          X: -0.25,
          Y: 6.28,
        },
        {
          X: -0.5,
          Y: 6.64,
        },
        {
          X: -0.2,
          Y: 7.0,
        },
      ],
    },
    DisplacementResetTime: 0.25,
    DisplacementGraphLoopStart: 11,
    DisplacementHipFireMultiplier: 2.2,
    FireSpreadStart: 0.2,
    FireSpreadIncrease: 0.25,
    FireSpreadResetTime: 0.35,
    FireSpreadCap: 3.0,
    SpreadStanceMultipliers: {
      Stand: {
        Start: 4.0,
        Cap: 2.0,
        Increment: 1.5,
      },
      StandMove: {
        Spread: 1.5,
        Start: 4.0,
        Cap: 3.0,
        Increment: 1.5,
      },
      Crouch: {
        Spread: 0.5,
        Start: 0.33,
      },
      CrouchMove: {
        Start: 0.33,
      },
      Target: {
        Spread: 0.0,
        Start: 0.33,
      },
      TargetMove: {
        Spread: 0.25,
        Start: 0.33,
      },
    },
    DeviationHipFireMultiplier: 1.0,
    TargetingTransitionTime: 0.3,
    EquipNotifyTime: 0.26666665,
    UnequipNotifyTime: 0.43333334,
    SprintExitNotifyTime: 0.2521767,
    ReloadEmptyNotifyTime: 2.1666665,
    ReloadNotifyTime: 1.8333334,
  },
  "VF-7S": {
    Class: "Assault Rifle",
    DamageDistanceArray: [
      {
        Damage: 36.4,
        Distance: 2000.0,
      },
      {
        Damage: 33.333336,
        Distance: 4000.0,
      },
      {
        Damage: 27.0,
        Distance: 7000.0,
      },
      {
        Damage: 22.2,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 5.0,
        Distance: 1500.0,
      },
      {
        Multiplier: 3.0,
        Distance: 3500.0,
      },
      {
        Multiplier: 2.0,
        Distance: 6000.0,
      },
      {
        Multiplier: 1.5,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 20,
    AmmoInventoryMax: 200,
    AmmoInventory: 80,
    AmmoPickup: {
      Min: 2.0,
      Max: 4.0,
    },
    ArmorPenetration: 1.25,
    RoundsPerMinute: 550.0,
    GraphDisplacementList: {
      Points: [
        {
          X: 0.5,
          Y: 0.4,
        },
        {
          X: 0.8,
          Y: 1.1,
        },
        {
          X: 1.4,
          Y: 1.9,
        },
        {
          X: 2.2,
          Y: 2.0,
        },
        {
          X: 2.5,
          Y: 3.2,
        },
        {
          X: 3.2,
          Y: 3.4,
        },
        {
          X: 2.8,
          Y: 4.6,
        },
        {
          X: 3.6,
          Y: 5.1,
        },
        {
          X: 3.2,
          Y: 6.0,
        },
        {
          X: 2.75,
          Y: 6.75,
        },
        {
          X: 2.05,
          Y: 7.0,
        },
        {
          X: 1.6,
          Y: 7.8,
        },
        {
          X: 2.4,
          Y: 8.2,
        },
        {
          X: 1.9,
          Y: 9.0,
        },
        {
          X: 2.1,
          Y: 10.0,
        },
        {
          X: 1.4,
          Y: 10.3,
        },
        {
          X: 1.9,
          Y: 11.0,
        },
        {
          X: 2.45,
          Y: 11.6,
        },
        {
          X: 2.6,
          Y: 12.7,
        },
        {
          X: 1.9,
          Y: 13.0,
        },
        {
          X: 2.4,
          Y: 14.0,
        },
      ],
    },
    DisplacementResetTime: 0.25,
    DisplacementGraphLoopStart: 12,
    DisplacementHipFireMultiplier: 2.1,
    FireSpreadStart: 0.3,
    FireSpreadIncrease: 0.45,
    FireSpreadResetTime: 0.5,
    FireSpreadDecayRate: 0.5,
    FireSpreadCap: 2.0,
    SpreadStanceMultipliers: {
      Stand: {
        Spread: 1.25,
        Start: 3.5,
        Cap: 2.1,
        Increment: 1.3,
      },
      StandMove: {
        Spread: 1.45,
        Start: 3.75,
        Cap: 3.0,
        Increment: 1.3,
      },
      Crouch: {
        Spread: 0.75,
        Start: 0.33,
      },
      CrouchMove: {
        Spread: 1.25,
        Start: 0.33,
      },
      Target: {
        Spread: 0.0,
        Start: 0.33,
      },
      TargetMove: {
        Spread: 0.3,
        Start: 0.33,
      },
    },
    DeviationHipFireMultiplier: 1.0,
    TargetingTransitionTime: 0.5,
    EquipNotifyTime: 0.46666664,
    UnequipNotifyTime: 0.6666667,
    SprintExitNotifyTime: 0.4666667,
    ReloadEmptyNotifyTime: 3.1666665,
    ReloadNotifyTime: 2.8333335,
  },
  "SA A144": {
    Class: "Marksman Rifle",
    DamageDistanceArray: [
      {
        Damage: 50.0,
        Distance: 3500.0,
      },
      {
        Damage: 31.0,
        Distance: 7000.0,
      },
      {
        Damage: 25.0,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 5.0,
        Distance: 2000.0,
      },
      {
        Multiplier: 3.0,
        Distance: 4000.0,
      },
      {
        Multiplier: 2.0,
        Distance: 6000.0,
      },
      {
        Multiplier: 1.5,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 12,
    AmmoInventoryMax: 60,
    AmmoInventory: 36,
    AmmoPickup: {
      Min: 2.0,
      Max: 3.0,
    },
    ArmorPenetration: 1.3,
    RoundsPerMinute: 450.0,
    GraphDisplacementList: {
      Points: [
        {
          X: 0.1,
          Y: 0.43,
        },
        {
          X: 0.2,
          Y: 1.2,
        },
        {
          X: -0.1,
          Y: 2.3,
        },
        {
          X: 0.3,
          Y: 3.2,
        },
        {
          X: 0.7,
          Y: 3.61,
        },
        {
          X: 0.8,
          Y: 4.9,
        },
        {
          X: 1.1,
          Y: 5.8,
        },
        {
          X: 0.8,
          Y: 6.5,
        },
        {
          X: 1.05,
          Y: 7.3,
        },
        {
          X: 0.75,
          Y: 7.9,
        },
        {
          X: 0.85,
          Y: 8.9,
        },
        {
          X: 0.5,
          Y: 9.2,
        },
        {
          X: 0.3,
          Y: 10.3,
        },
        {
          X: -0.05,
          Y: 10.0,
        },
        {
          X: -0.25,
          Y: 10.8,
        },
        {
          X: -0.55,
          Y: 10.7,
        },
        {
          X: -0.55,
          Y: 11.9,
        },
        {
          X: -0.9,
          Y: 12.0,
        },
        {
          X: -0.9,
          Y: 12.7,
        },
        {
          X: -1.1,
          Y: 13.7,
        },
      ],
    },
    DisplacementResetTime: 0.25,
    DisplacementGraphLoopStart: 10,
    DisplacementGraphInitialNum: 0,
    DisplacementHipFireMultiplier: 1.5,
    FireSpreadStart: 0.1,
    FireSpreadIncrease: 0.6,
    FireSpreadDecayRate: 12.0,
    FireSpreadCap: 2.5,
    SpreadRecoveryMode: "ESBZWeaponSpreadRecoveryMode::DecayRate",
    SpreadStanceMultipliers: {
      Stand: {
        Spread: 4.0,
        Start: 2.0,
      },
      StandMove: {
        Spread: 6.0,
        Start: 4.0,
      },
      Crouch: {
        Spread: 2.0,
        Start: 2.0,
      },
      CrouchMove: {
        Spread: 4.0,
        Start: 4.0,
      },
      Target: {
        Spread: 0.25,
      },
      TargetMove: {
        Spread: 0.5,
      },
    },
    TargetingTransitionTime: 0.4,
    EquipNotifyTime: 0.40000004,
    UnequipNotifyTime: 0.53333336,
    SprintExitNotifyTime: 0.3333333,
    ReloadEmptyNotifyTime: 2.6666665,
    ReloadNotifyTime: 2.3333335,
  },
  "Reinfeld 900S": {
    Class: "Marksman Rifle",
    DamageDistanceArray: [
      {
        Damage: 129.9,
        Distance: 4000.0,
      },
      {
        Damage: 62.5,
        Distance: 6000.0,
      },
      {
        Damage: 41.7,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 3.0,
        Distance: 4000.0,
      },
      {
        Multiplier: 2.0,
        Distance: 10000.0,
      },
      {
        Multiplier: 1.5,
        Distance: 15000.0,
      },
    ],
    AmmoLoaded: 5,
    AmmoInventoryMax: 50,
    AmmoInventory: 25,
    AmmoPickup: {
      Min: 0.0,
      Max: 2.0,
    },
    ArmorPenetration: 1.3,
    RoundsPerMinute: 50.0,
    GraphDisplacementList: {
      Points: [
        {
          X: 1.0,
          Y: 2.5,
        },
      ],
    },
    DisplacementResetTime: 0.3,
    DisplacementHipFireMultiplier: 1.6,
    FireSpreadStart: 3.0,
    FireSpreadIncrease: 2.0,
    FireSpreadResetTime: 1.2,
    FireSpreadCap: 10.0,
    SpreadStanceMultipliers: {
      Stand: {
        Spread: 1.5,
      },
      StandMove: {
        Spread: 2.0,
      },
      Crouch: {
        Spread: 0.5,
      },
      Target: {
        Spread: 0.0,
      },
      TargetMove: {
        Spread: 0.05,
      },
    },
    TargetingTransitionTime: 0.5,
    EquipNotifyTime: 0.46666664,
    UnequipNotifyTime: 0.6666667,
    SprintExitNotifyTime: 0.4666667,
    ReloadEmptyNotifyTime: 2.9999998,
    ReloadNotifyTime: 2.4999998,
  },
  "Mosconi 12 Classic": {
    Class: "Shotgun",
    DamageDistanceArray: [
      {
        Damage: 50.0,
        Distance: 1000.0,
      },
      {
        Damage: 32.5,
        Distance: 2000.0,
      },
      {
        Damage: 12.5,
        Distance: 3000.0,
      },
      {
        Damage: 4.0,
        Distance: 4000.0,
      },
      {
        Damage: 2.0,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 5.0,
        Distance: 1000.0,
      },
      {
        Multiplier: 3.0,
        Distance: 3500.0,
      },
      {
        Multiplier: 1.5,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 2,
    AmmoInventoryMax: 36,
    AmmoInventory: 24,
    AmmoPickup: {
      Min: 1.0,
      Max: 2.0,
    },
    ProjectilesPerFiredRound: 7,
    ArmorPenetration: 0.5,
    RoundsPerMinute: 200.0,
    GraphDisplacementList: {
      Points: [
        {
          X: 2.0,
          Y: 3.0,
        },
        {
          X: 1.5,
          Y: 5.0,
        },
        {
          X: -0.5,
          Y: 7.0,
        },
        {
          X: 0.3,
          Y: 9.0,
        },
      ],
    },
    DisplacementResetTime: 0.3,
    DisplacementGraphLoopStart: 1,
    DisplacementGraphInitialNum: 1,
    DisplacementHipFireMultiplier: 1.8,
    FireSpreadStart: 0.5,
    FireSpreadIncrease: 0.0,
    FireSpreadResetTime: 1.1,
    FireSpreadDecayRate: 0.0,
    FireSpreadCap: 3.0,
    SpreadStanceMultipliers: {
      StandMove: {
        Spread: 1.5,
      },
      Crouch: {
        Spread: 0.5,
      },
      Target: {
        Spread: 0.25,
        Start: 0.6,
        Cap: 0.7,
        Increment: 0.7,
      },
      TargetMove: {
        Spread: 0.5,
        Start: 0.6,
        Cap: 0.7,
        Increment: 0.7,
      },
    },
    DeviationHipFireMultiplier: 0.4,
    DeviationTargetingFireMultiplier: 0.1,
    TargetingTransitionTime: 0.5,
    EquipNotifyTime: 0.46666664,
    UnequipNotifyTime: 0.6666667,
    SprintExitNotifyTime: 0.4666667,
    ReloadEmptyNotifyTime: 1.9999999,
    ReloadNotifyTime: 1.3333333,
  },
  "Reinfeld 880": {
    Class: "Shotgun",
    DamageDistanceArray: [
      {
        Damage: 25.0,
        Distance: 1500.0,
      },
      {
        Damage: 10.0,
        Distance: 2500.0,
      },
      {
        Damage: 6.7,
        Distance: 3500.0,
      },
      {
        Damage: 4.0,
        Distance: 5000.0,
      },
      {
        Damage: 2.9,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 5.0,
        Distance: 1500.0,
      },
      {
        Multiplier: 3.0,
        Distance: 2500.0,
      },
      {
        Multiplier: 1.0,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 7,
    AmmoInventoryMax: 48,
    AmmoInventory: 32,
    AmmoPickup: {
      Min: 1.0,
      Max: 1.0,
    },
    ProjectilesPerFiredRound: 7,
    RoundsPerMinute: 75.0,
    GraphDisplacementList: {
      Points: [
        {
          X: 0.0,
          Y: 4.0,
        },
        {
          X: 2.0,
          Y: 8.0,
        },
        {
          X: 0.5,
          Y: 12.0,
        },
        {
          X: -1.0,
          Y: 16.0,
        },
        {
          X: 0.0,
          Y: 20.0,
        },
        {
          X: -1.5,
          Y: 22.0,
        },
        {
          X: 0.0,
          Y: 24.0,
        },
        {
          X: 2.0,
          Y: 26.0,
        },
        {
          X: 4.0,
          Y: 28.0,
        },
      ],
    },
    DisplacementResetTime: 25.0,
    DisplacementGraphLoopStart: 5,
    FireSpreadIncrease: 0.2,
    FireSpreadResetTime: 1.1,
    FireSpreadDecayRate: 0.0,
    FireSpreadCap: 3.0,
    SpreadStanceMultipliers: {
      Crouch: {
        Spread: 0.5,
      },
      Target: {
        Spread: 0.75,
        Start: 0.6,
        Cap: 0.7,
        Increment: 0.7,
      },
      TargetMove: {
        Start: 0.6,
        Cap: 0.7,
        Increment: 0.7,
      },
    },
    TargetingTransitionTime: 0.45,
    EquipNotifyTime: 0.40000004,
    UnequipNotifyTime: 0.53333336,
    SprintExitNotifyTime: 0.3333333,
    ReloadEmptyNotifyTime: 1.8333334,
    ReloadNotifyTime: 1.3666668,
  },
  "Ziv Commando": {
    Class: "SMG",
    DamageDistanceArray: [
      {
        Damage: 30.0,
        Distance: 1000.0,
      },
      {
        Damage: 22.0,
        Distance: 3000.0,
      },
      {
        Damage: 14.3,
        Distance: 5000.0,
      },
      {
        Damage: 10.0,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 2.0,
        Distance: 3500.0,
      },
      {
        Multiplier: 1.5,
        Distance: 6000.0,
      },
    ],
    AmmoLoaded: 25,
    AmmoInventoryMax: 250,
    AmmoInventory: 125,
    AmmoPickup: {
      Min: 8.0,
      Max: 11.0,
    },
    RoundsPerMinute: 1100.0,
    GraphDisplacementList: {
      Points: [
        {
          X: -0.1,
          Y: 0.1,
        },
        {
          X: 0.0,
          Y: 0.43,
        },
        {
          X: -0.25,
          Y: 0.55,
        },
        {
          X: -0.35,
          Y: 0.91,
        },
        {
          X: -0.65,
          Y: 1.0,
        },
        {
          X: -0.5,
          Y: 1.39,
        },
        {
          X: -0.2,
          Y: 1.5,
        },
        {
          X: -0.1,
          Y: 1.9,
        },
        {
          X: 0.15,
          Y: 2.4,
        },
        {
          X: 0.45,
          Y: 2.25,
        },
        {
          X: 0.55,
          Y: 2.59,
        },
        {
          X: 0.8,
          Y: 2.8,
        },
        {
          X: 0.65,
          Y: 3.3,
        },
        {
          X: 0.55,
          Y: 3.7,
        },
        {
          X: 0.3,
          Y: 3.6,
        },
        {
          X: 0.25,
          Y: 4.0,
        },
        {
          X: 0.05,
          Y: 4.2,
        },
        {
          X: 0.2,
          Y: 4.4,
        },
        {
          X: 0.0,
          Y: 4.7,
        },
        {
          X: 0.1,
          Y: 5.0,
        },
      ],
    },
    DisplacementResetTime: 0.15,
    DisplacementGraphLoopStart: 14,
    DisplacementHipFireMultiplier: 1.7,
    FireSpreadStart: 0.2,
    FireSpreadIncrease: 0.15,
    FireSpreadResetTime: 0.2,
    FireSpreadCap: 1.5,
    SpreadStanceMultipliers: {
      Stand: {
        Start: 4.0,
        Cap: 2.0,
        Increment: 1.5,
      },
      StandMove: {
        Spread: 1.5,
        Start: 4.0,
        Cap: 3.0,
        Increment: 1.5,
      },
      Crouch: {
        Spread: 0.5,
        Start: 0.33,
      },
      CrouchMove: {
        Start: 0.33,
      },
      Target: {
        Spread: 0.0,
        Start: 0.33,
      },
      TargetMove: {
        Spread: 0.25,
        Start: 0.33,
      },
    },
    EquipNotifyTime: 0.16666666,
    UnequipNotifyTime: 0.33333334,
    SprintExitNotifyTime: 0.16666667,
    ReloadEmptyNotifyTime: 1.8333334,
    ReloadNotifyTime: 1.5000001,
  },
  "SG Compact-7": {
    Class: "SMG",
    DamageDistanceArray: [
      {
        Damage: 24.0,
        Distance: 2500.0,
      },
      {
        Damage: 22.0,
        Distance: 4000.0,
      },
      {
        Damage: 20.0,
        Distance: 5000.0,
      },
      {
        Damage: 14.0,
        Distance: 10000.0,
      },
      {
        Damage: 10.0,
        Distance: 1000000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 2.0,
        Distance: 3500.0,
      },
      {
        Multiplier: 1.5,
        Distance: 6000.0,
      },
    ],
    AmmoLoaded: 20,
    AmmoInventoryMax: 200,
    AmmoPickup: {
      Min: 7.0,
    },
    ArmorPenetration: 1.25,
    RoundsPerMinute: 960.0,
    GraphDisplacementList: {
      Points: [
        {
          X: 0.1,
          Y: 0.1,
        },
        {
          X: 0.3,
          Y: 0.389,
        },
        {
          X: 0.25,
          Y: 0.8,
        },
        {
          X: 0.5,
          Y: 1.1,
        },
        {
          X: 0.65,
          Y: 1.6,
        },
        {
          X: 1.0,
          Y: 1.6,
        },
        {
          X: 1.1,
          Y: 2.1,
        },
        {
          X: 1.35,
          Y: 2.4,
        },
        {
          X: 1.05,
          Y: 2.7,
        },
        {
          X: 1.2,
          Y: 3.1,
        },
        {
          X: 0.9,
          Y: 3.25,
        },
        {
          X: 0.6,
          Y: 3.6,
        },
        {
          X: 0.6,
          Y: 4.0,
        },
        {
          X: 0.8,
          Y: 4.3,
        },
        {
          X: 0.7,
          Y: 4.7,
        },
        {
          X: 1.05,
          Y: 5.0,
        },
        {
          X: 1.35,
          Y: 5.4,
        },
        {
          X: 1.1,
          Y: 5.8,
        },
        {
          X: 1.4,
          Y: 6.2,
        },
        {
          X: 1.2,
          Y: 6.7,
        },
      ],
    },
    DisplacementResetTime: 0.25,
    DisplacementGraphLoopStart: 12,
    DisplacementHipFireMultiplier: 1.5,
    FireSpreadStart: 0.25,
    FireSpreadIncrease: 0.35,
    FireSpreadResetTime: 0.3,
    FireSpreadDecayRate: 0.3,
    FireSpreadCap: 3.0,
    SpreadStanceMultipliers: {
      Stand: {
        TasedSpread: 4.0,
        Start: 3.0,
        Cap: 2.0,
        Increment: 1.5,
      },
      StandMove: {
        Spread: 1.45,
        TasedSpread: 4.0,
        Start: 3.0,
        Cap: 3.0,
        Increment: 1.5,
      },
      Crouch: {
        Spread: 0.45,
        TasedSpread: 4.0,
        Start: 0.3,
        Cap: 2.0,
      },
      CrouchMove: {
        Spread: 0.95,
        TasedSpread: 4.0,
        Start: 0.3,
        Cap: 2.0,
      },
      Target: {
        Spread: 0.0,
        TasedSpread: 4.0,
        Start: 0.33,
      },
      TargetMove: {
        Spread: 0.25,
        TasedSpread: 4.0,
        Start: 0.33,
      },
    },
    TargetingTransitionTime: 0.3,
    EquipNotifyTime: 0.26666665,
    UnequipNotifyTime: 0.43333334,
    SprintExitNotifyTime: 0.28018987,
    ReloadEmptyNotifyTime: 1.9945579,
    ReloadNotifyTime: 1.9000001,
  },
  "FIK PC9": {
    Class: "SMG",
    DamageDistanceArray: [
      {
        Damage: 32.5,
        Distance: 1500.0,
      },
      {
        Damage: 25.0,
        Distance: 3000.0,
      },
      {
        Damage: 22.0,
        Distance: 5000.0,
      },
      {
        Damage: 13.0,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 2.0,
        Distance: 3500.0,
      },
      {
        Multiplier: 1.5,
        Distance: 6000.0,
      },
    ],
    AmmoLoaded: 35,
    AmmoInventoryMax: 200,
    AmmoPickup: {
      Min: 6.0,
      Max: 9.0,
    },
    ArmorPenetration: 0.75,
    RoundsPerMinute: 860.0,
    GraphDisplacementList: {
      Points: [
        {
          X: 0.05,
          Y: 0.1,
        },
        {
          X: -0.1,
          Y: 0.6,
        },
        {
          X: 0.1,
          Y: 0.8,
        },
        {
          X: -0.1,
          Y: 1.0,
        },
        {
          X: -0.15,
          Y: 1.3,
        },
        {
          X: -0.05,
          Y: 1.6,
        },
        {
          X: -0.3,
          Y: 1.75,
        },
        {
          X: -0.6,
          Y: 2.1,
        },
        {
          X: -0.9,
          Y: 2.0,
        },
        {
          X: -1.25,
          Y: 2.3,
        },
        {
          X: -0.95,
          Y: 2.6,
        },
        {
          X: -1.1,
          Y: 3.05,
        },
        {
          X: -0.8,
          Y: 3.25,
        },
        {
          X: -0.5,
          Y: 3.6,
        },
        {
          X: -0.75,
          Y: 3.85,
        },
        {
          X: -0.7,
          Y: 4.3,
        },
        {
          X: -0.95,
          Y: 4.4,
        },
        {
          X: -1.2,
          Y: 4.8,
        },
        {
          X: -1.0,
          Y: 5.0,
        },
        {
          X: -1.3,
          Y: 5.4,
        },
      ],
    },
    DisplacementResetTime: 0.3,
    DisplacementGraphLoopStart: 13,
    DisplacementHipFireMultiplier: 1.5,
    FireSpreadStart: 0.15,
    FireSpreadIncrease: 0.2,
    FireSpreadResetTime: 0.2,
    FireSpreadDecayRate: 0.3,
    FireSpreadCap: 2.0,
    SpreadStanceMultipliers: {
      Stand: {
        TasedSpread: 4.0,
        Start: 3.0,
        Cap: 2.0,
        Increment: 1.25,
      },
      StandMove: {
        Spread: 1.35,
        TasedSpread: 4.0,
        Start: 3.0,
        Cap: 2.0,
        Increment: 1.25,
      },
      Crouch: {
        Spread: 0.35,
        TasedSpread: 4.0,
        Start: 0.3,
        Cap: 2.0,
        Increment: 1.25,
      },
      CrouchMove: {
        Spread: 0.85,
        TasedSpread: 4.0,
        Start: 0.3,
        Cap: 2.0,
        Increment: 1.25,
      },
      Target: {
        Spread: 0.0,
        TasedSpread: 4.0,
        Start: 0.33,
      },
      TargetMove: {
        Spread: 0.15,
        TasedSpread: 4.0,
        Start: 0.33,
      },
    },
    TargetingTransitionTime: 0.25,
    EquipNotifyTime: 0.26666665,
    UnequipNotifyTime: 0.43333334,
    SprintExitNotifyTime: 0.26666665,
    ReloadEmptyNotifyTime: 2.1666667,
    ReloadNotifyTime: 1.8333334,
  },
  "Signature 40": {
    Class: "Pistol",
    DamageDistanceArray: [
      {
        Damage: 50.0,
        Distance: 1000.0,
      },
      {
        Damage: 27.0,
        Distance: 2500.0,
      },
      {
        Damage: 16.7,
        Distance: 4000.0,
      },
      {
        Damage: 14.3,
        Distance: 10000.0,
      },
      {
        Damage: 10.0,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 5.0,
        Distance: 1000.0,
      },
      {
        Multiplier: 4.0,
        Distance: 1500.0,
      },
      {
        Multiplier: 3.0,
        Distance: 3500.0,
      },
      {
        Multiplier: 2.0,
        Distance: 6000.0,
      },
      {
        Multiplier: 1.5,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 12,
    AmmoInventoryMax: 60,
    AmmoInventory: 48,
    AmmoPickup: {
      Min: 2.0,
      Max: 3.0,
    },
    RoundsPerMinute: 450.0,
    GraphDisplacementList: {
      Points: [
        {
          X: 0.33,
          Y: 0.3,
        },
        {
          X: 0.25,
          Y: 0.8,
        },
        {
          X: 0.1,
          Y: 1.97,
        },
        {
          X: -0.35,
          Y: 3.0,
        },
        {
          X: -0.02,
          Y: 4.0,
        },
        {
          X: 0.49,
          Y: 5.14,
        },
        {
          X: 0.38,
          Y: 6.38,
        },
        {
          X: 0.15,
          Y: 7.2,
        },
        {
          X: -0.46,
          Y: 8.0,
        },
        {
          X: -0.16,
          Y: 8.96,
        },
        {
          X: 0.09,
          Y: 9.84,
        },
        {
          X: -0.15,
          Y: 10.84,
        },
        {
          X: -0.03,
          Y: 11.89,
        },
        {
          X: 0.14,
          Y: 12.9,
        },
        {
          X: -0.04,
          Y: 13.71,
        },
        {
          X: -0.21,
          Y: 14.54,
        },
        {
          X: 0.15,
          Y: 15.52,
        },
        {
          X: 0.43,
          Y: 16.33,
        },
        {
          X: -0.17,
          Y: 17.58,
        },
        {
          X: -0.05,
          Y: 18.47,
        },
      ],
    },
    DisplacementResetTime: 0.4,
    DisplacementHipFireMultiplier: 1.5,
    FireSpreadStart: 0.2,
    FireSpreadResetTime: 0.5,
    FireSpreadDecayRate: 0.0,
    FireSpreadCap: 5.0,
    SpreadStanceMultipliers: {
      Stand: {
        Spread: 1.5,
        DecayRate: 1.5,
      },
      StandMove: {
        Spread: 2.0,
        DecayRate: 1.5,
      },
      Crouch: {
        Spread: 1.25,
        DecayRate: 1.5,
      },
      CrouchMove: {
        Spread: 1.75,
        DecayRate: 1.5,
      },
      Target: {
        Spread: 0.5,
        DecayRate: 1.5,
      },
    },
    EquipNotifyTime: 0.26666665,
    UnequipNotifyTime: 0.4,
    SprintExitNotifyTime: 0.26666668,
    ReloadEmptyNotifyTime: 1.8333333,
    ReloadNotifyTime: 1.3333333,
  },
  "Signature 403": {
    Class: "Pistol",
    DamageDistanceArray: [
      {
        Damage: 50.0,
        Distance: 1000.0,
      },
      {
        Damage: 35.0,
        Distance: 2500.0,
      },
      {
        Damage: 20.0,
        Distance: 4500.0,
      },
      {
        Damage: 14.3,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 5.0,
        Distance: 1000.0,
      },
      {
        Multiplier: 4.0,
        Distance: 1500.0,
      },
      {
        Multiplier: 3.0,
        Distance: 3500.0,
      },
      {
        Multiplier: 2.0,
        Distance: 6000.0,
      },
      {
        Multiplier: 1.5,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 17,
    AmmoInventoryMax: 60,
    AmmoInventory: 48,
    AmmoPickup: {
      Min: 2.0,
      Max: 3.0,
    },
    RoundsPerMinute: 375.0,
    GraphDisplacementList: {
      Points: [
        {
          X: -0.05,
          Y: 0.1,
        },
        {
          X: -0.2,
          Y: 0.8,
        },
        {
          X: -0.4,
          Y: 1.6,
        },
        {
          X: 0.0,
          Y: 2.3,
        },
        {
          X: 0.3,
          Y: 3.0,
        },
        {
          X: 0.5,
          Y: 4.14,
        },
        {
          X: 0.55,
          Y: 5.38,
        },
        {
          X: 0.4,
          Y: 6.2,
        },
        {
          X: 0.1,
          Y: 7.0,
        },
        {
          X: 0.0,
          Y: 7.96,
        },
        {
          X: -0.2,
          Y: 9.0,
        },
        {
          X: 0.4,
          Y: 9.8,
        },
        {
          X: 0.35,
          Y: 10.89,
        },
        {
          X: 0.2,
          Y: 11.9,
        },
        {
          X: 0.0,
          Y: 12.71,
        },
        {
          X: -0.2,
          Y: 13.54,
        },
        {
          X: -0.25,
          Y: 14.52,
        },
        {
          X: -0.3,
          Y: 15.33,
        },
        {
          X: -0.25,
          Y: 16.58,
        },
        {
          X: -0.1,
          Y: 17.47,
        },
      ],
    },
    DisplacementResetTime: 0.2,
    DisplacementGraphInitialNum: 2,
    DisplacementHipFireMultiplier: 1.5,
    FireSpreadStart: 0.25,
    FireSpreadIncrease: 0.5,
    FireSpreadDecayRate: 0.0,
    FireSpreadCap: 4.0,
    SpreadStanceMultipliers: {
      Stand: {
        Spread: 1.5,
        DecayRate: 1.5,
      },
      StandMove: {
        Spread: 2.0,
        DecayRate: 1.5,
      },
      Crouch: {
        Spread: 1.25,
        DecayRate: 1.5,
      },
      CrouchMove: {
        Spread: 1.75,
        DecayRate: 1.5,
      },
      Target: {
        Spread: 0.5,
        DecayRate: 1.5,
      },
    },
    TargetingTransitionTime: 0.3,
    EquipNotifyTime: 0.26666665,
    UnequipNotifyTime: 0.4,
    SprintExitNotifyTime: 0.23333332,
    ReloadEmptyNotifyTime: 1.8333334,
    ReloadNotifyTime: 1.3333334,
  },
  "SP Model 11": {
    Class: "Pistol",
    DamageDistanceArray: [
      {
        Damage: 80.0,
        Distance: 1000.0,
      },
      {
        Damage: 42.6,
        Distance: 2500.0,
      },
      {
        Damage: 21.5,
        Distance: 4500.0,
      },
      {
        Damage: 17.0,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 5.0,
        Distance: 1000.0,
      },
      {
        Multiplier: 4.0,
        Distance: 1500.0,
      },
      {
        Multiplier: 3.0,
        Distance: 3500.0,
      },
      {
        Multiplier: 2.0,
        Distance: 6000.0,
      },
      {
        Multiplier: 1.5,
        Distance: 10000.0,
      },
    ],
    AmmoInventoryMax: 60,
    AmmoInventory: 48,
    AmmoPickup: {
      Min: 2.0,
      Max: 3.0,
    },
    ArmorPenetration: 0.5,
    RoundsPerMinute: 300.0,
    GraphDisplacementList: {
      Points: [
        {
          X: -0.1,
          Y: 1.4,
        },
        {
          X: -0.3,
          Y: 3.6,
        },
        {
          X: -0.6,
          Y: 3.7,
        },
        {
          X: -1.0,
          Y: 5.5,
        },
        {
          X: -0.7,
          Y: 6.2,
        },
        {
          X: -1.3,
          Y: 7.6,
        },
        {
          X: -1.0,
          Y: 9.0,
        },
        {
          X: -1.2,
          Y: 10.4,
        },
        {
          X: -0.95,
          Y: 11.8,
        },
        {
          X: -1.4,
          Y: 12.9,
        },
        {
          X: -1.4,
          Y: 14.5,
        },
        {
          X: -1.2,
          Y: 15.5,
        },
        {
          X: -1.6,
          Y: 17.2,
        },
        {
          X: -1.2,
          Y: 18.6,
        },
        {
          X: -1.4,
          Y: 20.0,
        },
        {
          X: -1.0,
          Y: 21.2,
        },
        {
          X: -1.4,
          Y: 22.6,
        },
        {
          X: -1.15,
          Y: 24.4,
        },
      ],
    },
    DisplacementResetTime: 0.3,
    DisplacementGraphLoopStart: 6,
    DisplacementGraphInitialNum: 2,
    DisplacementHipFireMultiplier: 1.3,
    FireSpreadStart: 0.35,
    FireSpreadIncrease: 0.55,
    FireSpreadResetTime: 0.5,
    FireSpreadDecayRate: 0.0,
    FireSpreadCap: 5.0,
    SpreadStanceMultipliers: {
      Stand: {
        Spread: 1.5,
        DecayRate: 1.5,
      },
      StandMove: {
        Spread: 2.0,
        DecayRate: 1.5,
      },
      Crouch: {
        Spread: 1.25,
        DecayRate: 1.5,
      },
      CrouchMove: {
        Spread: 1.75,
        DecayRate: 1.5,
      },
      Target: {
        Spread: 0.0,
        DecayRate: 1.5,
      },
      TargetMove: {
        Spread: 0.2,
      },
    },
    TargetingTransitionTime: 0.35,
    EquipNotifyTime: 0.39999998,
    UnequipNotifyTime: 0.56666666,
    SprintExitNotifyTime: 0.40000004,
    ReloadEmptyNotifyTime: 2.1666667,
    ReloadNotifyTime: 1.6666667,
  },
  "Stryk 7": {
    Class: "Pistol",
    DamageDistanceArray: [
      {
        Damage: 44.0,
        Distance: 1000.0,
      },
      {
        Damage: 25.0,
        Distance: 2000.0,
      },
      {
        Damage: 14.3,
        Distance: 4000.0,
      },
      {
        Damage: 12.5,
        Distance: 10000.0,
      },
      {
        Damage: 10.0,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 5.0,
        Distance: 1000.0,
      },
      {
        Multiplier: 3.0,
        Distance: 3500.0,
      },
      {
        Multiplier: 2.0,
        Distance: 6000.0,
      },
      {
        Multiplier: 1.5,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 17,
    AmmoInventoryMax: 85,
    AmmoInventory: 68,
    AmmoPickup: {
      Min: 4.0,
      Max: 5.0,
    },
    RoundsPerMinute: 450.0,
    GraphDisplacementList: {
      Points: [
        {
          X: 0.2,
          Y: 0.05,
        },
        {
          X: 0.36,
          Y: 0.52,
        },
        {
          X: 0.46,
          Y: 1.34,
        },
        {
          X: 0.41,
          Y: 2.63,
        },
        {
          X: 0.2,
          Y: 3.24,
        },
        {
          X: -0.07,
          Y: 4.24,
        },
        {
          X: 0.17,
          Y: 4.95,
        },
        {
          X: 0.5,
          Y: 6.0,
        },
        {
          X: 0.52,
          Y: 7.18,
        },
        {
          X: 0.42,
          Y: 8.03,
        },
        {
          X: 0.17,
          Y: 8.47,
        },
        {
          X: -0.1,
          Y: 9.63,
        },
        {
          X: 0.34,
          Y: 10.21,
        },
        {
          X: 0.24,
          Y: 11.24,
        },
        {
          X: 0.0,
          Y: 12.0,
        },
        {
          X: -0.32,
          Y: 13.24,
        },
        {
          X: -0.13,
          Y: 14.74,
        },
      ],
    },
    DisplacementResetTime: 0.25,
    DisplacementHipFireMultiplier: 1.5,
    FireSpreadStart: 0.15,
    FireSpreadIncrease: 0.3,
    FireSpreadDecayRate: 0.0,
    FireSpreadCap: 3.0,
    SpreadStanceMultipliers: {
      Stand: {
        Spread: 1.5,
        DecayRate: 1.5,
      },
      StandMove: {
        Spread: 2.0,
        DecayRate: 1.5,
      },
      Crouch: {
        Spread: 1.25,
        DecayRate: 1.5,
      },
      CrouchMove: {
        Spread: 1.75,
        DecayRate: 1.5,
      },
      Target: {
        Spread: 0.5,
        DecayRate: 1.5,
      },
    },
    TargetingTransitionTime: 0.25,
    EquipNotifyTime: 0.16666666,
    UnequipNotifyTime: 0.3,
    SprintExitNotifyTime: 0.16666667,
    ReloadEmptyNotifyTime: 1.5333333,
    ReloadNotifyTime: 1.3333335,
  },
  "Sforza Bison": {
    Class: "Revolver",
    DamageDistanceArray: [
      {
        Damage: 65.0,
        Distance: 1500.0,
      },
      {
        Damage: 30.0,
        Distance: 2500.0,
      },
      {
        Damage: 25.0,
        Distance: 4500.0,
      },
      {
        Damage: 18.5,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 3.0,
        Distance: 4500.0,
      },
      {
        Multiplier: 1.5,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 6,
    AmmoInventoryMax: 36,
    AmmoInventory: 24,
    AmmoPickup: {
      Min: 2.0,
      Max: 3.0,
    },
    ArmorPenetration: 1.25,
    RoundsPerMinute: 400.0,
    GraphDisplacementList: {
      Points: [
        {
          X: -0.3,
          Y: 1.2,
        },
        {
          X: 1.0,
          Y: 2.5,
        },
        {
          X: -0.6,
          Y: 4.5,
        },
        {
          X: 0.3,
          Y: 5.8,
        },
        {
          X: -2.4,
          Y: 7.2,
        },
        {
          X: -1.5,
          Y: 9.6,
        },
        {
          X: -3.0,
          Y: 10.4,
        },
        {
          X: -1.5,
          Y: 11.8,
        },
        {
          X: -2.3,
          Y: 13.832,
        },
      ],
    },
    DisplacementResetTime: 0.14,
    DisplacementGraphLoopStart: 6,
    DisplacementGraphInitialNum: 0,
    DisplacementHipFireMultiplier: 1.5,
    FireSpreadStart: 0.1,
    FireSpreadIncrease: 0.6,
    FireSpreadDecayRate: 0.0,
    FireSpreadCap: 3.0,
    SpreadStanceMultipliers: {
      Stand: {
        Cap: 1.25,
      },
      StandMove: {
        Spread: 1.5,
        Start: 1.25,
      },
      Crouch: {
        Spread: 0.5,
      },
      Target: {
        Spread: 0.25,
      },
      TargetMove: {
        Spread: 0.5,
      },
    },
    TargetingTransitionTime: 0.45,
    EquipNotifyTime: 0.5,
    UnequipNotifyTime: 0.6666667,
    SprintExitNotifyTime: 0.49999997,
    ReloadEmptyNotifyTime: 3.1666667,
    ReloadNotifyTime: 3.1666667,
  },
  "J&M Castigo 44": {
    Class: "Revolver",
    DamageDistanceArray: [
      {
        Damage: 90.0,
        Distance: 1500.0,
      },
      {
        Damage: 48.0,
        Distance: 3000.0,
      },
      {
        Damage: 33.300003,
        Distance: 4500.0,
      },
      {
        Damage: 20.0,
        Distance: 10000.0,
      },
    ],
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 3.0,
        Distance: 4500.0,
      },
      {
        Multiplier: 1.5,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 6,
    AmmoInventoryMax: 36,
    AmmoInventory: 24,
    AmmoPickup: {
      Min: 2.0,
      Max: 3.0,
    },
    ArmorPenetration: 1.0,
    RoundsPerMinute: 300.0,
    GraphDisplacementList: {
      Points: [
        {
          X: 0.6264844,
          Y: 0.56953126,
        },
        {
          X: 0.47460938,
          Y: 1.5187501,
        },
        {
          X: 0.18984376,
          Y: 3.7399216,
        },
        {
          X: -0.6644531,
          Y: 5.6953125,
        },
        {
          X: -0.037968747,
          Y: 7.59375,
        },
        {
          X: 0.9302343,
          Y: 9.757969,
        },
        {
          X: 0.7214063,
          Y: 12.11203,
        },
        {
          X: 0.28476563,
          Y: 13.668749,
        },
        {
          X: -0.8732813,
          Y: 15.1875,
        },
        {
          X: -0.30374998,
          Y: 17.01,
        },
        {
          X: 0.1708594,
          Y: 18.680624,
        },
        {
          X: -0.28476563,
          Y: 20.579062,
        },
        {
          X: -0.05695312,
          Y: 22.572424,
        },
        {
          X: 0.26578125,
          Y: 24.489841,
        },
        {
          X: -0.075937495,
          Y: 26.027578,
        },
        {
          X: -0.39867187,
          Y: 27.603281,
        },
        {
          X: 0.28476563,
          Y: 29.463753,
        },
        {
          X: 0.81632805,
          Y: 31.001484,
        },
        {
          X: -0.3227344,
          Y: 33.37453,
        },
        {
          X: -0.09492188,
          Y: 35.064137,
        },
      ],
    },
    DisplacementResetTime: 0.25,
    DisplacementHipFireMultiplier: 1.5,
    FireSpreadStart: 0.1,
    FireSpreadIncrease: 0.3,
    FireSpreadDecayRate: 0.0,
    FireSpreadCap: 3.0,
    SpreadStanceMultipliers: {
      StandMove: {
        Spread: 1.5,
      },
      Crouch: {
        Spread: 0.5,
      },
      Target: {
        Spread: 0.25,
      },
      TargetMove: {
        Spread: 0.5,
      },
    },
    TargetingTransitionTime: 0.45,
    EquipNotifyTime: 0.466667,
    UnequipNotifyTime: 0.56666666,
    SprintExitNotifyTime: 0.26666668,
    ReloadEmptyNotifyTime: 2.4999998,
    ReloadNotifyTime: 2.4999998,
  },
  // Syntax Error
  "FIK 22 TLR": {
    Class: "Marksman Rifle",
    DamageDistanceArray: [
      {
        Damage: 25.0,
        Distance: 3500.0,
      },
      {
        Damage: 18.5,
        Distance: 7000.0,
      },
      {
        Damage: 14.3,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 25,
    AmmoInventoryMax: 125,
    AmmoInventory: 75,
    AmmoPickup: {
      Min: 2.0,
      Max: 3.0,
    },
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 5.0,
        Distance: 2000.0,
      },
      {
        Multiplier: 3.0,
        Distance: 4000.0,
      },
      {
        Multiplier: 2.0,
        Distance: 6000.0,
      },
      {
        Multiplier: 1.5,
        Distance: 10000.0,
      },
    ],
    ArmorPenetration: 1.3,
    RoundsPerMinute: 900,
    GraphDisplacementList: {
      Points: [
        {
          X: 0.05544,
          Y: 0.238392,
        },
        {
          X: 0.11088,
          Y: 0.66528,
        },
        {
          X: 0.05544,
          Y: 1.27512,
        },
        {
          X: 0.16632,
          Y: 1.77408,
        },
        {
          X: 0.38808,
          Y: 2.001384,
        },
        {
          X: 0.44352,
          Y: 2.71656,
        },
        {
          X: 0.50984,
          Y: 3.21552,
        },
        {
          X: 0.44352,
          Y: 3.6036,
        },
        {
          X: 0.50212,
          Y: 4.047121,
        },
        {
          X: 0.4158,
          Y: 4.37976,
        },
        {
          X: 0.35124,
          Y: 4.93416,
        },
        {
          X: 0.2772,
          Y: 5.100481,
        },
        {
          X: 0.16632,
          Y: 5.710321,
        },
        {
          X: -0.02772,
          Y: 5.544,
        },
        {
          X: -0.1386,
          Y: 5.98752,
        },
        {
          X: -0.30492,
          Y: 5.93208,
        },
        {
          X: -0.35492,
          Y: 6.3736,
        },
        {
          X: -0.49896,
          Y: 6.6528,
        },
        {
          X: -0.49896,
          Y: 7.04088,
        },
        {
          X: -0.60984,
          Y: 7.595281,
        },
      ],
    },
    DisplacementResetTime: 0.25,
    DisplacementGraphLoopStart: 10,
    DisplacementGraphInitialNum: 0,
    DisplacementHipFireMultiplier: 1.5,
    FireSpreadStart: 0.1,
    FireSpreadIncrease: 0.3,
    FireSpreadDecayRate: 12.0,
    FireSpreadCap: 2.5,
    SpreadRecoveryMode: "ESBZWeaponSpreadRecoveryMode::DecayRate",
    SpreadStanceMultipliers: {
      Stand: {
        Spread: 3.0,
        Start: 2.0,
      },
      StandMove: {
        Spread: 5.0,
        Start: 4.0,
      },
      Crouch: {
        Spread: 2.0,
        Start: 2.0,
      },
      CrouchMove: {
        Spread: 3.0,
        Start: 4.0,
      },
      Target: {
        Spread: 0.25,
      },
      TargetMove: {
        Spread: 0.5,
      },
    },
    DeviationHipFireMultiplier: 1.2,
    TargetingTransitionTime: 0.4,
    EquipNotifyTime: 0.40000004,
    UnequipNotifyTime: 0.53333336,
    SprintExitNotifyTime: 0.3333333,
    ReloadEmptyNotifyTime: 2.6666665,
    ReloadNotifyTime: 2.3333335,
  },
  "FSA-12G": {
    Class: "Shotgun",
    DamageDistanceArray: [
      {
        Damage: 20.0,
        Distance: 1500.0,
      },
      {
        Damage: 8.0,
        Distance: 2500.0,
      },
      {
        Damage: 5.0,
        Distance: 3500.0,
      },
      {
        Damage: 3.7,
        Distance: 5000.0,
      },
      {
        Damage: 2.6,
        Distance: 10000.0,
      },
    ],
    AmmoInventoryMax: 50,
    AmmoInventory: 30,
    AmmoPickup: {
      Min: 1.0,
      Max: 1.0,
    },
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 5.0,
        Distance: 1500.0,
      },
      {
        Multiplier: 3.0,
        Distance: 2500.0,
      },
      {
        Multiplier: 1.0,
        Distance: 10000.0,
      },
    ],
    ProjectilesPerFiredRound: 7,
    RoundsPerMinute: 300.0,
    GraphDisplacementList: {
      Points: [
        {
          X: 0.0,
          Y: 2.0,
        },
        {
          X: 1.0,
          Y: 4.0,
        },
        {
          X: 0.25,
          Y: 6.0,
        },
        {
          X: -0.5,
          Y: 8.0,
        },
        {
          X: 0.0,
          Y: 10.0,
        },
        {
          X: -0.75,
          Y: 11.0,
        },
        {
          X: 0.0,
          Y: 12.0,
        },
        {
          X: 1.0,
          Y: 13.0,
        },
        {
          X: 2.0,
          Y: 14.0,
        },
      ],
    },
    DisplacementResetTime: 25.0,
    DisplacementGraphLoopStart: 5,
    DisplacementGraphInitialNum: 0,
    DisplacementHipFireMultiplier: 1.2,
    FireSpreadIncrease: 0.2,
    FireSpreadResetTime: 0.3,
    FireSpreadDecayRate: 0.0,
    FireSpreadCap: 3.0,
    SpreadStanceMultipliers: {
      Stand: {
        Spread: 1.5,
      },
      StandMove: {
        Spread: 1.5,
        Cap: 1.5,
        Increment: 1.2,
      },
      CrouchMove: {
        Cap: 1.25,
        Increment: 1.1,
      },
      Target: {
        Start: 0.6,
        Cap: 0.7,
        Increment: 0.7,
      },
      TargetMove: {
        Start: 0.6,
        Cap: 0.7,
        Increment: 0.7,
      },
    },
    TargetingTransitionTime: 0.45,
    EquipNotifyTime: 0.40000004,
    UnequipNotifyTime: 0.53333336,
    SprintExitNotifyTime: 0.3333333,
    ReloadEmptyNotifyTime: 1.8333334,
    ReloadNotifyTime: 1.3666668,
  },
  "WAR-45": {
    Class: "SMG",
    DamageDistanceArray: [
      {
        Damage: 35.0,
        Distance: 1000.0,
      },
      {
        Damage: 30.0,
        Distance: 2500.0,
      },
      {
        Damage: 25.0,
        Distance: 4500.0,
      },
      {
        Damage: 18.5,
        Distance: 10000.0,
      },
    ],
    AmmoLoaded: 25,
    AmmoInventoryMax: 175,
    AmmoPickup: {
      Min: 7.0,
    },
    CriticalDamageMultiplierDistanceArray: [
      {
        Multiplier: 2.0,
        Distance: 3500.0,
      },
      {
        Multiplier: 1.5,
        Distance: 6000.0,
      },
    ],
    ArmorPenetration: 1.25,
    AmmoLoadedMax: 25,
    AmmoPerReload: 25,
    RoundsPerMinute: 650.0,
    GraphDisplacementList: {
      Points: [
        {
          X: 0.12,
          Y: 0.12,
        },
        {
          X: 0.25,
          Y: 0.4668,
        },
        {
          X: 0.3,
          Y: 0.96,
        },
        {
          X: 0.6,
          Y: 1.32,
        },
        {
          X: 0.78,
          Y: 1.92,
        },
        {
          X: 1.2,
          Y: 1.92,
        },
        {
          X: 1.32,
          Y: 2.52,
        },
        {
          X: 1.42,
          Y: 2.88,
        },
        {
          X: 1.26,
          Y: 3.24,
        },
        {
          X: 1.2,
          Y: 3.72,
        },
        {
          X: 1.08,
          Y: 3.9,
        },
        {
          X: 0.72,
          Y: 4.32,
        },
        {
          X: 0.72,
          Y: 4.8,
        },
        {
          X: 0.8,
          Y: 5.16,
        },
        {
          X: 0.84,
          Y: 5.64,
        },
        {
          X: 1.26,
          Y: 6.0,
        },
      ],
    },
    DisplacementResetTime: 0.25,
    DisplacementGraphLoopStart: 8,
    DisplacementGraphInitialNum: 2,
    DisplacementHipFireMultiplier: 1.5,
    FireSpreadStart: 0.25,
    FireSpreadIncrease: 0.25,
    FireSpreadResetTime: 0.3,
    FireSpreadDecayRate: 0.3,
    FireSpreadCap: 3.0,
    SpreadStanceMultipliers: {
      Stand: {
        TasedSpread: 4.0,
        Start: 3.0,
        Cap: 2.0,
        Increment: 1.5,
      },
      StandMove: {
        Spread: 1.45,
        TasedSpread: 4.0,
        Start: 3.0,
        Cap: 3.0,
        Increment: 1.5,
      },
      Crouch: {
        Spread: 0.45,
        TasedSpread: 4.0,
        Start: 0.3,
        Cap: 2.0,
      },
      CrouchMove: {
        Spread: 0.95,
        TasedSpread: 4.0,
        Start: 0.3,
        Cap: 2.0,
      },
      Target: {
        Spread: 0.0,
        TasedSpread: 4.0,
        Start: 0.33,
      },
      TargetMove: {
        Spread: 0.25,
        TasedSpread: 4.0,
        Start: 0.33,
      },
    },
    TargetingTransitionTime: 0.5,
    EquipNotifyTime: 0.26666665,
    UnequipNotifyTime: 0.43333334,
    SprintExitNotifyTime: 0.28018987,
    ReloadEmptyNotifyTime: 1.9945579,
    ReloadNotifyTime: 1.9000001,
  },
};
