const weaponData = {
    "A114": {
        "DisplayName": "SA A144",
        "TypeClassText": "Marksman",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 256,
                "Y": 128
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 50,
                    "Distance": 3500
                },
                {
                    "Damage": 31,
                    "Distance": 7000
                },
                {
                    "Damage": 25,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 12,
            "AmmoInventoryMax": 60,
            "AmmoInventory": 36,
            "AmmoPickup": {
                "Min": 2,
                "Max": 3
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 2000
                },
                {
                    "Multiplier": 3,
                    "Distance": 4000
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "ArmorPenetration": 1.3,
            "RoundsPerMinute": 450
        },
        "ModularConfiguration": {
            "Barrel": {
                "DefaultPart": "A114_Barrel_Default",
                "UniqueModParts": [
                    "A114_Barrel_Ranged",
                    "A114_Barrel_CQC"
                ]
            },
            "Bolt": {
                "DefaultPart": "A114_Bolt_Default",
                "UniqueModParts": []
            },
            "UpperReceiver": {
                "DefaultPart": "A114_Body_UpperReceiver",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "A114_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "A114_FrontSight_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "A114_Mag_Default",
                "UniqueModParts": [
                    "A114_Mag_Extended",
                    "A114_Mag_Quick"
                ]
            },
            "RearSight": {
                "DefaultPart": "A114_RearSight_Default",
                "UniqueModParts": []
            },
            "BarrelExtension": {
                "DefaultPart": "A114_BarrelExt_Default",
                "UniqueModParts": [
                    "BarrelExt_Torque",
                    "BarrelExt_Ridged",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp"
                ]
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Fluted",
                    "Sight_Primed"
                ]
            },
            "Ammo": {
                "DefaultPart": "A114_Ammo_Default",
                "UniqueModParts": []
            },
            "SightMount": {
                "DefaultPart": "A114_SightMount_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "A114_Body_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "A114_Grip_Default",
                "UniqueModParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "Stock": {
                "DefaultPart": "A114_Stock_Default",
                "UniqueModParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "StockMount": {
                "DefaultPart": "A114_StockMount_Default",
                "UniqueModParts": []
            },
            "Trigger": {
                "DefaultPart": "A114_Trigger_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.3333335,
        "ReloadEmptyNotifyTime": 2.6666665
    },
    "ATK7": {
        "DisplayName": "ATK-7",
        "TypeClassText": "SMG",
        "DLC": "2",
        "DisplayIcon": {
            "SourceUV": {
                "X": 0,
                "Y": 0
            },
            "SourceTexture": "SS_UI_WeaponsPrimary_00010-DLCHEIST0002.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 31.3,
                    "Distance": 500
                },
                {
                    "Damage": 30,
                    "Distance": 1500
                },
                {
                    "Damage": 25.8,
                    "Distance": 2000
                },
                {
                    "Damage": 23,
                    "Distance": 2500
                },
                {
                    "Damage": 19,
                    "Distance": 5000
                },
                {
                    "Damage": 12,
                    "Distance": 1000000
                }
            ],
            "AmmoLoaded": 30,
            "AmmoInventoryMax": 300,
            "AmmoInventory": 120,
            "AmmoPickup": {
                "Min": 7,
                "Max": 9
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 3,
                    "Distance": 1500
                },
                {
                    "Multiplier": 2.5,
                    "Distance": 3000
                },
                {
                    "Multiplier": 2,
                    "Distance": 5000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 1.1,
            "RoundsPerMinute": 800
        },
        "ModularConfiguration": {
            "BarrelExtension": {
                "DefaultPart": "ATK7_BarrelExt_Default",
                "UniqueModParts": [
                    "BarrelExt_WhisperWrap",
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "Barrel": {
                "DefaultPart": "ATK7_Barrel_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "ATK7_Body_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "ATK7_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "ATK7_Mag_Default",
                "UniqueModParts": [
                    "ATK7_Mag_Extended",
                    "ATK7_Mag_Quick",
                    "ATK7_Mag_Compact"
                ]
            },
            "Stock": {
                "DefaultPart": "ATK7_Stock_Default",
                "UniqueModParts": [
                    "ATK7_Stock_HollowFrame",
                    "ATK7_Stock_RubberFramed"
                ]
            },
            "RearSight": {
                "DefaultPart": "ATK7_RearSight_Default",
                "UniqueModParts": []
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "Ammo": {
                "DefaultPart": "Ammo_9mm",
                "UniqueModParts": []
            },
            "Bolt": {
                "DefaultPart": "ATK7_Bolt",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "ATK7_Grip_Default",
                "UniqueModParts": [
                    "ATK7_Grip_Contoured",
                    "ATK7_Grip_Tac",
                    "ATK7_Grip_SmoothFluted"
                ]
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection"
                ]
            },
            "ForeGrip": {
                "DefaultPart": "ATK7_ForeGrip_Default",
                "UniqueModParts": []
            },
            "SightMount": {
                "DefaultPart": "ATK7_SightMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.1666665,
        "ReloadEmptyNotifyTime": 2.3333335
    },
    "Bison": {
        "DisplayName": "Sforza Bison",
        "TypeClassText": "Revolver",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 512,
                "Y": 256
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 65,
                    "Distance": 1500
                },
                {
                    "Damage": 30,
                    "Distance": 2500
                },
                {
                    "Damage": 25,
                    "Distance": 4500
                },
                {
                    "Damage": 18.5,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 6,
            "AmmoInventoryMax": 36,
            "AmmoInventory": 24,
            "AmmoPickup": {
                "Min": 2,
                "Max": 3
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 3,
                    "Distance": 4500
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "ArmorPenetration": 1.25,
            "RoundsPerMinute": 400
        },
        "ModularConfiguration": {
            "Barrel": {
                "DefaultPart": "Bison_Barrel_Default",
                "UniqueModParts": [
                    "Bison_Barrel_Ranged",
                    "Bison_Barrel_CQC"
                ]
            },
            "Bolt": {
                "DefaultPart": "Bison_Bolt_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "Bison_Body_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "Bison_FrontSight_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "Bison_Mag_Default",
                "UniqueModParts": []
            },
            "RearSight": {
                "DefaultPart": "Bison_RearSight_Default",
                "UniqueModParts": []
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            },
            "Ammo": {
                "DefaultPart": "Ammo_357magnum",
                "UniqueModParts": []
            },
            "Firepin": {
                "DefaultPart": "Bison_FirePin_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "Bison_Grip_Default",
                "UniqueModParts": [
                    "Bison_Grip_Tac",
                    "Bison_Grip_Hardwood",
                    "Bison_Grip_Biofit"
                ]
            },
            "MagRelease": {
                "DefaultPart": "Bison_MagRelease_Default",
                "UniqueModParts": []
            },
            "SightMount": {
                "DefaultPart": "Bison_SightMount_Default",
                "UniqueModParts": []
            },
            "Speedloader": {
                "DefaultPart": "Bison_Speedloader_Default",
                "UniqueModParts": []
            },
            "BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            }
        },
        "ReloadNotifyTime": 3.1666665,
        "ReloadEmptyNotifyTime": 3.1666665
    },
    "Bullkick500": {
        "DisplayName": "Bullkick 500",
        "TypeClassText": "Revolver",
        "DLC": "2",
        "DisplayIcon": {
            "SourceUV": {
                "X": 0,
                "Y": 128
            },
            "SourceTexture": "SS_UI_WeaponsPrimary_00010-DLCHEIST0002.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 150,
                    "Distance": 2500
                },
                {
                    "Damage": 100,
                    "Distance": 5000
                },
                {
                    "Damage": 50,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 5,
            "AmmoInventoryMax": 35,
            "AmmoInventory": 25,
            "AmmoPickup": {
                "Min": 0.5,
                "Max": 1
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 3,
                    "Distance": 4000
                },
                {
                    "Multiplier": 2,
                    "Distance": 10000
                }
            ],
            "ArmorPenetration": 2,
            "RoundsPerMinute": 75
        },
        "ModularConfiguration": {
            "Barrel": {
                "DefaultPart": "Bullkick500_Barrel_Default",
                "UniqueModParts": [
                    "Bullkick500_Barrel_Ranged",
                    "Bullkick500_Barrel_CQC",
                    "Bullkick500_Barrel_Tactical"
                ]
            },
            "Bolt": {
                "DefaultPart": "Bullkick500_Bolt_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "Bullkick500_Body_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "Bullkick500_FrontSight_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "Bullkick500_Mag_Default",
                "UniqueModParts": [
                    "Bullkick500_Mag_Unfluted"
                ]
            },
            "RearSight": {
                "DefaultPart": "Bullkick500_RearSight_Default",
                "UniqueModParts": []
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_Box",
                    "Sight_Snapshot",
                    "Sight_Tactical"
                ]
            },
            "Ammo": {
                "DefaultPart": "Ammo_500Magnum",
                "UniqueModParts": []
            },
            "Speedloader": {
                "DefaultPart": "Bullkick500_Speedloader_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "Bullkick500_Grip_Default",
                "UniqueModParts": [
                    "Bullkick500_Grip_Biofit",
                    "Bullkick500_Grip_Tac",
                    "Bullkick500_Grip_Hardwood"
                ]
            },
            "BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "SightMount": {
                "DefaultPart": "Bullkick500_SightMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.8333333,
        "ReloadEmptyNotifyTime": 2.8333333
    },
    "CAR4": {
        "DisplayName": "CAR-4",
        "TypeClassText": "Assault Rifle",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 0,
                "Y": 0
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 30.4,
                    "Distance": 3000
                },
                {
                    "Damage": 25,
                    "Distance": 5000
                },
                {
                    "Damage": 16.7,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 30,
            "AmmoInventoryMax": 300,
            "AmmoInventory": 120,
            "AmmoPickup": {
                "Min": 3,
                "Max": 5
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 0.92,
            "RoundsPerMinute": 720
        },
        "ModularConfiguration": {
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection",
                    "Sight_Tactical",
                    "Sight_Sheath"
                ]
            },
            "BarrelExtension": {
                "DefaultPart": "CAR4_BarrelExt_Default",
                "UniqueModParts": [
                    "BarrelExt_BeveledSilencer",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_CylindricSilencer",
                    "BarrelExt_PipedSilencer"
                ]
            },
            "Barrel": {
                "DefaultPart": "CAR4_Barrel_Default",
                "UniqueModParts": [
                    "CAR4_Barrel_CQC",
                    "CAR4_Barrel_Ranged"
                ]
            },
            "Body": {
                "DefaultPart": "CAR4_Body_Default",
                "UniqueModParts": []
            },
            "Bolt": {
                "DefaultPart": "CAR4_Bolt_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "CAR4_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "ForeGrip": {
                "DefaultPart": "CAR4_Foregrip_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "CAR4_Grip_Default",
                "UniqueModParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "Mag": {
                "DefaultPart": "CAR4_Mag_Default",
                "UniqueModParts": [
                    "CAR4_Mag_Quick",
                    "CAR4_Mag_Extended",
                    "CAR4_Mag_Compact"
                ]
            },
            "Stock": {
                "DefaultPart": "CAR4_Stock_Default",
                "UniqueModParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "RearSight": {
                "DefaultPart": "CAR4_RearSight_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "CAR4_FrontSight_Default",
                "UniqueModParts": []
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "Ammo": {
                "DefaultPart": "CAR4_Ammo_Default",
                "UniqueModParts": []
            },
            "StockMount": {
                "DefaultPart": "CAR4_StockMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.3333333,
        "ReloadEmptyNotifyTime": 2.6666667
    },
    "Castigo44": {
        "DisplayName": "J&M Castigo 44",
        "TypeClassText": "Revolver",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 256,
                "Y": 384
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 90,
                    "Distance": 1500
                },
                {
                    "Damage": 48,
                    "Distance": 3000
                },
                {
                    "Damage": 33.300003,
                    "Distance": 4500
                },
                {
                    "Damage": 20,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 6,
            "AmmoInventoryMax": 36,
            "AmmoInventory": 24,
            "AmmoPickup": {
                "Min": 2,
                "Max": 3
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 3,
                    "Distance": 4500
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "ArmorPenetration": 1,
            "RoundsPerMinute": 300
        },
        "ModularConfiguration": {
            "Barrel": {
                "DefaultPart": "Castigo44_Barrel_Default",
                "UniqueModParts": [
                    "Castigo44_Barrel_Ranged",
                    "Castigo44_Barrel_CQC",
                    "Castigo44_Barrel_Tac"
                ]
            },
            "Bolt": {
                "DefaultPart": "Castigo44_Bolt_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "Castigo44_Body_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "Castigo44_FrontSight_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "Castigo44_Mag_Default",
                "UniqueModParts": []
            },
            "RearSight": {
                "DefaultPart": "Castigo44_RearSight_Default",
                "UniqueModParts": []
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            },
            "Ammo": {
                "DefaultPart": "Ammo_44magnum",
                "UniqueModParts": []
            },
            "Speedloader": {
                "DefaultPart": "Castigo44_Speedloader_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "Castigo44_Grip_Default",
                "UniqueModParts": [
                    "Castigo44_Grip_Biofit",
                    "Castigo44_Grip_Tac",
                    "Castigo44_Grip_Hardwood"
                ]
            },
            "BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "SightMount": {
                "DefaultPart": "Castigo44_SightMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.4999998,
        "ReloadEmptyNotifyTime": 2.4999998
    },
    "Commando": {
        "DisplayName": "Ziv Commando",
        "TypeClassText": "SMG",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 512,
                "Y": 384
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 42,
                    "Distance": 500
                },
                {
                    "Damage": 35,
                    "Distance": 1000
                },
                {
                    "Damage": 25,
                    "Distance": 1500
                },
                {
                    "Damage": 22,
                    "Distance": 2000
                },
                {
                    "Damage": 16,
                    "Distance": 3000
                },
                {
                    "Damage": 12,
                    "Distance": 5000
                },
                {
                    "Damage": 10,
                    "Distance": 1000000
                }
            ],
            "AmmoLoaded": 25,
            "AmmoInventoryMax": 200,
            "AmmoPickup": {
                "Min": 9,
                "Max": 12
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 2,
                    "Distance": 3500
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 6000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 0.5,
            "RoundsPerMinute": 1100
        },
        "ModularConfiguration": {
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            },
            "BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "Barrel": {
                "DefaultPart": "Commando_Barrel_Default",
                "UniqueModParts": []
            },
            "LowerReceiver": {
                "DefaultPart": "Commando_Body_LowerReceiver_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "Commando_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "UpperReceiver": {
                "DefaultPart": "Commando_Body_UpperReceiver_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "Commando_Mag_Default",
                "UniqueModParts": [
                    "Commando_Mag_Extended",
                    "Commando_Mag_Compact",
                    "Commando_Mag_Quick"
                ]
            },
            "Stock": {
                "DefaultPart": "Commando_Stock_Default",
                "UniqueModParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_HQ",
                    "Stock_LightFrame"
                ]
            },
            "RearSight": {
                "DefaultPart": "Commando_RearSight_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "Commando_FrontSight_Default",
                "UniqueModParts": []
            },
            "SightMount": {
                "DefaultPart": "Commando_SightMount_Default",
                "UniqueModParts": []
            },
            "StockMount": {
                "DefaultPart": "Commando_StockMount_Default",
                "UniqueModParts": []
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub"
                ]
            },
            "Ammo": {
                "DefaultPart": "Commando_Ammo_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 1.5000001,
        "ReloadEmptyNotifyTime": 1.8333334
    },
    "Compact7": {
        "DisplayName": "SG Compact-7",
        "TypeClassText": "SMG",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 768,
                "Y": 0
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 24,
                    "Distance": 2500
                },
                {
                    "Damage": 22,
                    "Distance": 4000
                },
                {
                    "Damage": 20,
                    "Distance": 5000
                },
                {
                    "Damage": 14,
                    "Distance": 10000
                },
                {
                    "Damage": 10,
                    "Distance": 1000000
                }
            ],
            "AmmoLoaded": 30,
            "AmmoInventoryMax": 200,
            "AmmoPickup": {
                "Min": 8
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 2,
                    "Distance": 3500
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 6000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 1.25,
            "RoundsPerMinute": 960
        },
        "ModularConfiguration": {
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            },
            "BarrelExtension": {
                "DefaultPart": "Compact7_BarrelExt_Default",
                "UniqueModParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "Barrel": {
                "DefaultPart": "Compact7_Barrel_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "Compact7_Body_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "Compact7_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "ForeGrip": {
                "DefaultPart": "Compact7_Foregrip_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "Compact7_Mag_Default",
                "UniqueModParts": [
                    "Compact7_Mag_Extended",
                    "Compact7_Mag_Quick",
                    "Compact7_Mag_Compact"
                ]
            },
            "Stock": {
                "DefaultPart": "Compact7_Stock_Default",
                "UniqueModParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "RearSight": {
                "DefaultPart": "Compact7_RearSight_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "Compact7_FrontSight_Default",
                "UniqueModParts": []
            },
            "StockMount": {
                "DefaultPart": "Compact7_StockMount_Default",
                "UniqueModParts": []
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Stub",
                    "VerticalGrip_AngledGhost"
                ]
            },
            "Ammo": {
                "DefaultPart": "Compact7_Ammo_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 1.9000001,
        "ReloadEmptyNotifyTime": 1.9945579
    },
    "FIK22": {
        "DisplayName": "FIK 22 TLR",
        "TypeClassText": "Marksman",
        "DLC": "1",
        "DisplayIcon": {
            "SourceUV": {
                "X": 0,
                "Y": 896
            },
            "SourceTexture": "SS_UI_Weapon_Presets.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 25,
                    "Distance": 3500
                },
                {
                    "Damage": 18.5,
                    "Distance": 7000
                },
                {
                    "Damage": 14.3,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 25,
            "AmmoInventoryMax": 250,
            "AmmoPickup": {
                "Min": 7,
                "Max": 9
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 2000
                },
                {
                    "Multiplier": 3,
                    "Distance": 4000
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "ArmorPenetration": 1.3,
            "RoundsPerMinute": 900
        },
        "ModularConfiguration": {
            "Barrel": {
                "DefaultPart": "FIK22_Barrel_Default",
                "UniqueModParts": [
                    "FIK22_Barrel_Ranged",
                    "FIK22_Barrel_CQC"
                ]
            },
            "Body": {
                "DefaultPart": "FIK22_Body_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "FIK22_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "FIK22_FrontSight_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "FIK22_Mag_Default",
                "UniqueModParts": [
                    "FIK22_Mag_Extended",
                    "FIK22_Mag_Compact",
                    "FIK22_Mag_Quick"
                ]
            },
            "RearSight": {
                "DefaultPart": "FIK22_RearSight_Default",
                "UniqueModParts": []
            },
            "BarrelExtension": {
                "DefaultPart": "FIK22_BarrelExt_MuzzleBreak",
                "UniqueModParts": [
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "Ammo": {
                "DefaultPart": "FIK22_Ammo_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "FIK22_Grip_Default",
                "UniqueModParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "ForeGrip": {
                "DefaultPart": "FIK22_ForeGrip_Default",
                "UniqueModParts": []
            },
            "Stock": {
                "DefaultPart": "FIK22_Stock_Default",
                "UniqueModParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "StockMount": {
                "DefaultPart": "FIK22_StockMount_Default",
                "UniqueModParts": []
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_Sheath",
                    "Sight_Tactical",
                    "Sight_Lined",
                    "Sight_LightHolographic"
                ]
            }
        },
        "ReloadNotifyTime": 2.333333,
        "ReloadEmptyNotifyTime": 2.666667
    },
    "FSA12": {
        "DisplayName": "FSA-12G",
        "TypeClassText": "Shotgun",
        "DLC": "1",
        "DisplayIcon": {
            "SourceUV": {
                "X": 512,
                "Y": 768
            },
            "SourceTexture": "SS_UI_Weapon_Presets.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 20,
                    "Distance": 1500
                },
                {
                    "Damage": 8,
                    "Distance": 2500
                },
                {
                    "Damage": 5,
                    "Distance": 3500
                },
                {
                    "Damage": 3.7,
                    "Distance": 5000
                },
                {
                    "Damage": 2.6,
                    "Distance": 10000
                }
            ],
            "AmmoInventory": 40,
            "AmmoPickup": {
                "Min": 3,
                "Max": 4
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1500
                },
                {
                    "Multiplier": 3,
                    "Distance": 2500
                },
                {
                    "Multiplier": 1,
                    "Distance": 10000
                }
            ],
            "ProjectilesPerFiredRound": 7,
            "RoundsPerMinute": 300
        },
        "ModularConfiguration": {
            "Barrel": {
                "DefaultPart": "FSA12_Barrel_Default",
                "UniqueModParts": [
                    "FSA12_Barrel_CQC",
                    "FSA12_Barrel_Ranged"
                ]
            },
            "RearSight": {
                "DefaultPart": "FSA12_RearSight_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "FSA12_Body_Default",
                "UniqueModParts": []
            },
            "ForeGrip": {
                "DefaultPart": "FSA12_Foregrip_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "FSA12_FrontSight_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "FSA12_Mag_Default",
                "UniqueModParts": [
                    "FSA12_Mag_Extended",
                    "FSA12_Mag_Compact",
                    "FSA12_Mag_Quick"
                ]
            },
            "Stock": {
                "DefaultPart": "FSA12_Stock_Default",
                "UniqueModParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "StockMount": {
                "DefaultPart": "FSA12_StockMount_Default",
                "UniqueModParts": []
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_Projection",
                    "Sight_Sheath",
                    "Sight_Tagged"
                ]
            },
            "Ammo": {
                "DefaultPart": "FSA12_Ammo_Default",
                "UniqueModParts": []
            },
            "BarrelExtension": {
                "DefaultPart": "FSA12_BarrelExt_Default",
                "UniqueModParts": [
                    "BarrelExt_12GObelisk",
                    "BarrelExt_SedimentChoke",
                    "BarrelExt_12GVentComp",
                    "BarrelExt_JawChoke"
                ]
            },
            "ChargingHandle": {
                "DefaultPart": "FSA12_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "FSA12_Grip_Default",
                "UniqueModParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold",
                    "VerticalGrip_FlatSide"
                ]
            }
        },
        "ReloadNotifyTime": 1.9999999,
        "ReloadEmptyNotifyTime": 2.3333335
    },
    "KU59": {
        "DisplayName": "KU-59",
        "TypeClassText": "Assault Rifle",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 512,
                "Y": 128
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 40.2,
                    "Distance": 1500
                },
                {
                    "Damage": 36.4,
                    "Distance": 3000
                },
                {
                    "Damage": 30.3,
                    "Distance": 5000
                },
                {
                    "Damage": 20,
                    "Distance": 10000
                },
                {
                    "Damage": 16.7,
                    "Distance": 1000000
                }
            ],
            "AmmoLoaded": 30,
            "AmmoInventoryMax": 300,
            "AmmoInventory": 120,
            "AmmoPickup": {
                "Min": 3,
                "Max": 4
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 2000
                },
                {
                    "Multiplier": 3,
                    "Distance": 4000
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 0.9
        },
        "ModularConfiguration": {
            "BarrelExtension": {
                "DefaultPart": "KU59_BarrelExt_Default",
                "UniqueModParts": [
                    "BarrelExt_BeveledSilencer",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_CylindricSilencer",
                    "BarrelExt_PipedSilencer"
                ]
            },
            "Barrel": {
                "DefaultPart": "KU59_Barrel_Default",
                "UniqueModParts": [
                    "KU59_Barrel_Rail",
                    "KU59_Barrel_TradGrip"
                ]
            },
            "Body": {
                "DefaultPart": "KU59_Body_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "KU59_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "StockMount": {
                "DefaultPart": "KU59_StockMount_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "KU59_Grip_Default",
                "UniqueModParts": [
                    "KU59_Grip_Biofit",
                    "KU59_Grip_Tac",
                    "KU59_Grip_Perforated"
                ]
            },
            "Mag": {
                "DefaultPart": "KU59_Mag_Default",
                "UniqueModParts": [
                    "KU59_Mag_Quick",
                    "KU59_Mag_Extended",
                    "KU59_Mag_Compact"
                ]
            },
            "Stock": {
                "DefaultPart": "KU59_Stock_Default",
                "UniqueModParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "RearSight": {
                "DefaultPart": "KU59_RearSight_Default",
                "UniqueModParts": []
            },
            "SightMount": {
                "DefaultPart": "KU59_SightMount_Default",
                "UniqueModParts": []
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection",
                    "Sight_Tactical",
                    "Sight_Sheath"
                ]
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "Ammo": {
                "DefaultPart": "KU59_Ammo_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.3333335,
        "ReloadEmptyNotifyTime": 2.8350124
    },
    "MX63": {
        "DisplayName": "Blyspruta MX63",
        "TypeClassText": "LMG",
        "DLC": "2",
        "DisplayIcon": {
            "SourceUV": {
                "X": 256,
                "Y": 128
            },
            "SourceTexture": "SS_UI_WeaponsPrimary_00010-DLCHEIST0002.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 28,
                    "Distance": 2500
                },
                {
                    "Damage": 24,
                    "Distance": 4500
                },
                {
                    "Damage": 19,
                    "Distance": 1000000
                }
            ],
            "AmmoLoaded": 100,
            "AmmoInventoryMax": 400,
            "AmmoInventory": 200,
            "AmmoPickup": {
                "Min": 8
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 1,
            "RoundsPerMinute": 720
        },
        "ModularConfiguration": {
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection",
                    "Sight_Tactical",
                    "Sight_Sheath"
                ]
            },
            "BarrelExtension": {
                "DefaultPart": "MX63_BarrelExt_Default",
                "UniqueModParts": [
                    "BarrelExt_BeveledSilencer",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_CylindricSilencer",
                    "BarrelExt_PipedSilencer"
                ]
            },
            "Barrel": {
                "DefaultPart": "MX63_Barrel_Default",
                "UniqueModParts": [
                    "MX63_Barrel_CQC",
                    "MX63_Barrel_Ranged"
                ]
            },
            "Body": {
                "DefaultPart": "MX63_Body_Default",
                "UniqueModParts": []
            },
            "Bolt": {
                "DefaultPart": "MX63_Bolt_Default",
                "UniqueModParts": []
            },
            "ForeGrip": {
                "DefaultPart": "MX63_Foregrip_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "MX63_Grip_Default",
                "UniqueModParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "Mag": {
                "DefaultPart": "MX63_Mag_Default",
                "UniqueModParts": []
            },
            "Stock": {
                "DefaultPart": "MX63_stock_Default",
                "UniqueModParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "RearSight": {
                "DefaultPart": "MX63_RearSight_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "MX63_FrontSight_Default",
                "UniqueModParts": []
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "Ammo": {
                "DefaultPart": "MX63_Ammo_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "MX63_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "StockMount": {
                "DefaultPart": "MX63_StockMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.6666665,
        "ReloadEmptyNotifyTime": 2.8333333
    },
    "Mosconi12C": {
        "DisplayName": "Mosconi 12 Classic",
        "TypeClassText": "Shotgun",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 768,
                "Y": 128
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 50,
                    "Distance": 1000
                },
                {
                    "Damage": 32.5,
                    "Distance": 2000
                },
                {
                    "Damage": 12.5,
                    "Distance": 3000
                },
                {
                    "Damage": 4,
                    "Distance": 4000
                },
                {
                    "Damage": 2,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 2,
            "AmmoInventoryMax": 36,
            "AmmoInventory": 24,
            "AmmoPickup": {
                "Min": 1,
                "Max": 2
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "ProjectilesPerFiredRound": 7,
            "ArmorPenetration": 0.5,
            "RoundsPerMinute": 200
        },
        "ModularConfiguration": {
            "Barrel": {
                "DefaultPart": "Mosconi12C_Barrel_Default",
                "UniqueModParts": [
                    "Mosconi12C_Barrel_CQC",
                    "Mosconi12C_Barrel_Ranged"
                ]
            },
            "ForeGrip": {
                "DefaultPart": "Mosconi12C_Foregrip_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "Mosconi12C_Body_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "Mosconi12C_FrontSight_Default",
                "UniqueModParts": []
            },
            "MagRelease": {
                "DefaultPart": "Mosconi12C_MagRelease_Default",
                "UniqueModParts": []
            },
            "RearSight": {
                "DefaultPart": "Mosconi12C_RearSight_Default",
                "UniqueModParts": []
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_Tagged"
                ]
            },
            "Ammo": {
                "DefaultPart": "Ammo_12gauge",
                "UniqueModParts": []
            },
            "SightMount": {
                "DefaultPart": "Mosconi12C_SightMount_Rail",
                "UniqueModParts": []
            },
            "Stock": {
                "DefaultPart": "Mosconi12C_Stock_Default",
                "UniqueModParts": [
                    "Mosconi12C_Stock_CQC",
                    "Mosconi12C_Stock_Padded",
                    "Mosconi12C_Stock_Fortified"
                ]
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            }
        },
        "ReloadNotifyTime": 1.3333333,
        "ReloadEmptyNotifyTime": 1.9999999
    },
    "NWB9": {
        "DisplayName": "Northwest B-9",
        "TypeClassText": "Assault Rifle",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 768,
                "Y": 384
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 28,
                    "Distance": 2500
                },
                {
                    "Damage": 24,
                    "Distance": 4500
                },
                {
                    "Damage": 14,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 30,
            "AmmoInventoryMax": 300,
            "AmmoInventory": 120,
            "AmmoPickup": {
                "Max": 7
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 0.75,
            "RoundsPerMinute": 750
        },
        "ModularConfiguration": {
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection",
                    "Sight_Tactical",
                    "Sight_Sheath"
                ]
            },
            "BarrelExtension": {
                "DefaultPart": "NWB9_BarrelExt_Default",
                "UniqueModParts": [
                    "BarrelExt_BeveledSilencer",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_CylindricSilencer",
                    "BarrelExt_PipedSilencer"
                ]
            },
            "Barrel": {
                "DefaultPart": "NWB9_Barrel_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "NWB9_Body_Default",
                "UniqueModParts": []
            },
            "Bolt": {
                "DefaultPart": "NWB9_Bolt_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "NWB9_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "ForeGrip": {
                "DefaultPart": "NWB9_Foregrip_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "NWB9_Grip_Default",
                "UniqueModParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "Mag": {
                "DefaultPart": "NWB9_Mag_Default",
                "UniqueModParts": [
                    "NWB9_Mag_Quick",
                    "NWB9_Mag_Extended",
                    "NWB9_Mag_Compact"
                ]
            },
            "Stock": {
                "DefaultPart": "NWB9_Stock_Default",
                "UniqueModParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "RearSight": {
                "DefaultPart": "NWB9_RearSight_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "NWB9_FrontSight_Default",
                "UniqueModParts": []
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "Ammo": {
                "DefaultPart": "NWB9_Ammo_Default",
                "UniqueModParts": []
            },
            "StockMount": {
                "DefaultPart": "NWB9_StockMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 1.8333334,
        "ReloadEmptyNotifyTime": 2.1666665
    },
    "PC9": {
        "DisplayName": "FIK PC9",
        "TypeClassText": "SMG",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 768,
                "Y": 256
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 32.5,
                    "Distance": 1500
                },
                {
                    "Damage": 25,
                    "Distance": 3000
                },
                {
                    "Damage": 22,
                    "Distance": 5000
                },
                {
                    "Damage": 13,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 30,
            "AmmoInventoryMax": 200,
            "AmmoPickup": {
                "Min": 7
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 2,
                    "Distance": 3500
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 6000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 0.75,
            "RoundsPerMinute": 860
        },
        "ModularConfiguration": {
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection"
                ]
            },
            "BarrelExtension": {
                "DefaultPart": "PC9_BarrelExt_Default",
                "UniqueModParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "Barrel": {
                "DefaultPart": "PC9_Barrel_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "PC9_Body_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "PC9_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "ForeGrip": {
                "DefaultPart": "PC9_Foregrip_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "PC9_Mag_Default",
                "UniqueModParts": [
                    "PC9_Mag_Extended",
                    "PC9_Mag_Compact",
                    "PC9_Mag_Quick"
                ]
            },
            "Stock": {
                "DefaultPart": "PC9_Stock_Default",
                "UniqueModParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_HQ",
                    "Stock_LightFrame"
                ]
            },
            "RearSight": {
                "DefaultPart": "PC9_RearSight_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "PC9_FrontSight_Default",
                "UniqueModParts": []
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold",
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost"
                ]
            },
            "Grip": {
                "DefaultPart": "PC9_Grip_Default",
                "UniqueModParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "Ammo": {
                "DefaultPart": "PC9_Ammo_Default",
                "UniqueModParts": []
            },
            "StockMount": {
                "DefaultPart": "PC9_StockMount_Default",
                "UniqueModParts": []
            },
            "Bolt": {
                "DefaultPart": "PC9_Bolt_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 1.8333334,
        "ReloadEmptyNotifyTime": 2.1666667
    },
    "R880": {
        "DisplayName": "Reinfeld 880",
        "TypeClassText": "Shotgun",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 256,
                "Y": 0
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 25,
                    "Distance": 1500
                },
                {
                    "Damage": 10,
                    "Distance": 2500
                },
                {
                    "Damage": 6.7,
                    "Distance": 3500
                },
                {
                    "Damage": 4,
                    "Distance": 5000
                },
                {
                    "Damage": 2.9,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 7,
            "AmmoInventoryMax": 48,
            "AmmoInventory": 32,
            "AmmoPickup": {
                "Min": 1,
                "Max": 1
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1500
                },
                {
                    "Multiplier": 3,
                    "Distance": 2500
                },
                {
                    "Multiplier": 1,
                    "Distance": 10000
                }
            ],
            "FireType": "ESBZFireType::Pump",
            "ProjectilesPerFiredRound": 7,
            "RoundsPerMinute": 75
        },
        "ModularConfiguration": {
            "Barrel": {
                "DefaultPart": "R880_Barrel_Default",
                "UniqueModParts": [
                    "R880_Barrel_CQC",
                    "R880_Barrel_Ranged",
                    "R880_Barrel_Comp"
                ]
            },
            "Bolt": {
                "DefaultPart": "R880_Bolt_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "R880_Body_Default",
                "UniqueModParts": []
            },
            "ForeGrip": {
                "DefaultPart": "R880_Foregrip_Default",
                "UniqueModParts": [
                    "R880_Foregrip_Biofit",
                    "R880_Foregrip_Tactical"
                ]
            },
            "FrontSight": {
                "DefaultPart": "R880_FrontSight_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "R880_Mag_Default",
                "UniqueModParts": []
            },
            "Stock": {
                "DefaultPart": "R880_Stock_Default",
                "UniqueModParts": [
                    "R880_Stock_CQC",
                    "R880_Stock_Padded",
                    "R880_Stock_Fortified"
                ]
            },
            "SightMount": {
                "DefaultPart": "R880_SightMount_Rail",
                "UniqueModParts": []
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_Projection",
                    "Sight_Sheath",
                    "Sight_Tagged"
                ]
            },
            "Ammo": {
                "DefaultPart": "R880_Ammo_Default",
                "UniqueModParts": []
            },
            "BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "BarrelExt_12GObelisk",
                    "BarrelExt_SedimentChoke",
                    "BarrelExt_12GVentComp",
                    "BarrelExt_JawChoke"
                ]
            }
        },
        "ReloadNotifyTime": 1.3666668,
        "ReloadEmptyNotifyTime": 1.8333334
    },
    "R900S": {
        "DisplayName": "Reinfeld 900S",
        "TypeClassText": "Marksman",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 512,
                "Y": 0
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 160,
                    "Distance": 4000
                },
                {
                    "Damage": 77,
                    "Distance": 6000
                },
                {
                    "Damage": 51.3,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 5,
            "AmmoInventoryMax": 50,
            "AmmoInventory": 25,
            "AmmoPickup": {
                "Min": 0,
                "Max": 2
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 3,
                    "Distance": 4000
                },
                {
                    "Multiplier": 2,
                    "Distance": 10000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 15000
                }
            ],
            "FireType": "ESBZFireType::Bolt",
            "MaximumPenetrationCount": 1,
            "ArmorPenetration": 2,
            "RoundsPerMinute": 50
        },
        "ModularConfiguration": {
            "Sight": {
                "DefaultPart": "Sight_Long6X",
                "UniqueModParts": [
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Fluted",
                    "Sight_Primed"
                ]
            },
            "Barrel": {
                "DefaultPart": "R900S_Barrel_Default",
                "UniqueModParts": [
                    "R900S_Barrel_Ranged",
                    "R900S_Barrel_CQC"
                ]
            },
            "Body": {
                "DefaultPart": "R900S_Body_Default",
                "UniqueModParts": []
            },
            "Bolt": {
                "DefaultPart": "R900S_Bolt_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "R900S_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "Firepin": {
                "DefaultPart": "R900S_FirePin_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "R900S_Mag_Default",
                "UniqueModParts": [
                    "R900S_Mag_Extended"
                ]
            },
            "MagRelease": {
                "DefaultPart": "R900S_MagRelease_Default",
                "UniqueModParts": []
            },
            "SightMount": {
                "DefaultPart": "R900S_SightMount_Rail",
                "UniqueModParts": []
            },
            "Stock": {
                "DefaultPart": "R900S_Stock_Default",
                "UniqueModParts": [
                    "R900S_Stock_HardWood",
                    "R900S_Stock_Lightweight"
                ]
            },
            "Ammo": {
                "DefaultPart": "R900S_Ammo_Default",
                "UniqueModParts": []
            },
            "BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_Torque",
                    "BarrelExt_Ridged"
                ]
            }
        },
        "ReloadNotifyTime": 2.4999998,
        "ReloadEmptyNotifyTime": 2.9999998
    },
    "RG5": {
        "DisplayName": "Adelig RG5",
        "TypeClassText": "Assault Rifle",
        "DLC": "2",
        "DisplayIcon": {
            "SourceUV": {
                "X": 256,
                "Y": 0
            },
            "SourceTexture": "SS_UI_WeaponsPrimary_00010-DLCHEIST0002.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 42,
                    "Distance": 500
                },
                {
                    "Damage": 39,
                    "Distance": 3000
                },
                {
                    "Damage": 27,
                    "Distance": 4000
                },
                {
                    "Damage": 20.7,
                    "Distance": 5000
                },
                {
                    "Damage": 17.1,
                    "Distance": 1000000
                }
            ],
            "AmmoLoaded": 20,
            "AmmoInventoryMax": 200,
            "AmmoInventory": 80,
            "AmmoPickup": {
                "Max": 7
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1500
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 1.2
        },
        "ModularConfiguration": {
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection",
                    "Sight_Tactical",
                    "Sight_Sheath"
                ]
            },
            "BarrelExtension": {
                "DefaultPart": "RG5_BarrelExt_Default",
                "UniqueModParts": [
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_CylindricSilencer",
                    "BarrelExt_PipedSilencer"
                ]
            },
            "Barrel": {
                "DefaultPart": "RG5_Barrel_Default",
                "UniqueModParts": [
                    "RG5_Barrel_CQC",
                    "RG5_Barrel_Ranged"
                ]
            },
            "Body": {
                "DefaultPart": "RG5_Body_Default",
                "UniqueModParts": []
            },
            "Bolt": {
                "DefaultPart": "RG5_Bolt_Default",
                "UniqueModParts": []
            },
            "ForeGrip": {
                "DefaultPart": "RG5_Foregrip_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "RG5_Grip_Default",
                "UniqueModParts": [
                    "RG5_Grip_Contoured",
                    "RG5_Grip_SmoothFluted",
                    "RG5_Grip_Tac"
                ]
            },
            "Mag": {
                "DefaultPart": "RG5_Mag_Default",
                "UniqueModParts": [
                    "RG5_Mag_Quick",
                    "RG5_Mag_Extended",
                    "RG5_Mag_Compact"
                ]
            },
            "Stock": {
                "DefaultPart": "RG5_Stock_Default",
                "UniqueModParts": [
                    "RG5_Stock_Light",
                    "RG5_Stock_HQ",
                    "RG5_Stock_TQ"
                ]
            },
            "RearSight": {
                "DefaultPart": "RG5_RearSight_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "RG5_FrontSight_Default",
                "UniqueModParts": []
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold",
                    "VerticalGrip_RiggerHandstop"
                ]
            },
            "Ammo": {
                "DefaultPart": "RG5_Ammo_Default",
                "UniqueModParts": []
            },
            "StockMount": {
                "DefaultPart": "RG5_StockMount_Default",
                "UniqueModParts": []
            },
            "SightMount": {
                "DefaultPart": "RG5_SightMount_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "RG5_ChargingHandle_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.6666665,
        "ReloadEmptyNotifyTime": 2.8333333
    },
    "S40": {
        "DisplayName": "Signature 40",
        "TypeClassText": "Pistol",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 0,
                "Y": 384
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 50,
                    "Distance": 1000
                },
                {
                    "Damage": 27,
                    "Distance": 2500
                },
                {
                    "Damage": 16.7,
                    "Distance": 4000
                },
                {
                    "Damage": 14.3,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 12,
            "AmmoInventoryMax": 60,
            "AmmoInventory": 48,
            "AmmoPickup": {
                "Min": 2,
                "Max": 3
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 4,
                    "Distance": 1500
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "RoundsPerMinute": 450
        },
        "ModularConfiguration": {
            "Barrel": {
                "DefaultPart": "S40_Barrel_Default",
                "UniqueModParts": []
            },
            "Bolt": {
                "DefaultPart": "S40_Bolt_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "S40_Body_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "S40_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "S40_FrontSight_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "S40_Mag_Default",
                "UniqueModParts": [
                    "S40_Mag_Extended",
                    "S40_Mag_Quick"
                ]
            },
            "RearSight": {
                "DefaultPart": "S40_RearSight_Default",
                "UniqueModParts": []
            },
            "BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_Slate",
                    "Sight_LED",
                    "Sight_Box"
                ]
            },
            "Ammo": {
                "DefaultPart": "S40_Ammo_Default",
                "UniqueModParts": []
            },
            "SightMount": {
                "DefaultPart": "S40_SightMount_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "S40_Grip_Default",
                "UniqueModParts": [
                    "S40_Grip_Hardwood",
                    "S40_Grip_Embossed",
                    "S40_Grip_Tac"
                ]
            }
        },
        "ReloadNotifyTime": 1.3333333,
        "ReloadEmptyNotifyTime": 1.8333333
    },
    "S403": {
        "DisplayName": "Signature 403",
        "TypeClassText": "Pistol",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 512,
                "Y": 512
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 50,
                    "Distance": 1000
                },
                {
                    "Damage": 35,
                    "Distance": 2500
                },
                {
                    "Damage": 20,
                    "Distance": 4500
                },
                {
                    "Damage": 14.3,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 17,
            "AmmoInventoryMax": 60,
            "AmmoInventory": 48,
            "AmmoPickup": {
                "Min": 2,
                "Max": 3
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 4,
                    "Distance": 1500
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "RoundsPerMinute": 375
        },
        "ModularConfiguration": {
            "Barrel": {
                "DefaultPart": "S403_Barrel_Default",
                "UniqueModParts": []
            },
            "Bolt": {
                "DefaultPart": null,
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "S403_Body_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "S403_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "S403_FrontSight_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "S403_Mag_Default",
                "UniqueModParts": [
                    "S403_Mag_Extended",
                    "S403_Mag_Quick"
                ]
            },
            "RearSight": {
                "DefaultPart": "S403_RearSight_Default",
                "UniqueModParts": []
            },
            "BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            },
            "Ammo": {
                "DefaultPart": "S403_Ammo_Default",
                "UniqueModParts": []
            },
            "SightMount": {
                "DefaultPart": "S403_SightMount_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "S403_Grip_Friction",
                    "S403_Grip_Ribbed",
                    "S403_Grip_Grained"
                ]
            }
        },
        "ReloadNotifyTime": 1.3333334,
        "ReloadEmptyNotifyTime": 1.8333334
    },
    "SPM11": {
        "DisplayName": "SP Model 11",
        "TypeClassText": "Pistol",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 0,
                "Y": 512
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 80,
                    "Distance": 1000
                },
                {
                    "Damage": 42.6,
                    "Distance": 2500
                },
                {
                    "Damage": 21.5,
                    "Distance": 4500
                },
                {
                    "Damage": 17,
                    "Distance": 10000
                }
            ],
            "AmmoInventoryMax": 60,
            "AmmoInventory": 48,
            "AmmoPickup": {
                "Min": 2,
                "Max": 3
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 4,
                    "Distance": 1500
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "ArmorPenetration": 0.5,
            "RoundsPerMinute": 300
        },
        "ModularConfiguration": {
            "Barrel": {
                "DefaultPart": "SPM11_Barrel_Default",
                "UniqueModParts": []
            },
            "Bolt": {
                "DefaultPart": "SPM11_Bolt_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "SPM11_Body_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "SPM11_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "SPM11_FrontSight_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "SPM11_Mag_Default",
                "UniqueModParts": [
                    "SPM11_Mag_Extended",
                    "SPM11_Mag_Quick"
                ]
            },
            "RearSight": {
                "DefaultPart": "SPM11_RearSight_Default",
                "UniqueModParts": []
            },
            "BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            },
            "Ammo": {
                "DefaultPart": "SPM11_Ammo_Default",
                "UniqueModParts": []
            },
            "SightMount": {
                "DefaultPart": "SPM11_SightMount_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "SPM11_Grip_Default",
                "UniqueModParts": [
                    "SPM11_Grip_Checkered",
                    "SPM11_Grip_Embossed",
                    "SPM11_Grip_Tac"
                ]
            }
        },
        "ReloadNotifyTime": 1.6666667,
        "ReloadEmptyNotifyTime": 2.1666667
    },
    "Stryk7": {
        "DisplayName": "Stryk 7",
        "TypeClassText": "Pistol",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 256,
                "Y": 256
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 44,
                    "Distance": 1000
                },
                {
                    "Damage": 25,
                    "Distance": 2000
                },
                {
                    "Damage": 14.3,
                    "Distance": 4000
                },
                {
                    "Damage": 12.5,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 17,
            "AmmoInventoryMax": 85,
            "AmmoInventory": 68,
            "AmmoPickup": {
                "Min": 4,
                "Max": 5
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "RoundsPerMinute": 450
        },
        "ModularConfiguration": {
            "Barrel": {
                "DefaultPart": "Stryk7_Barrel_Default",
                "UniqueModParts": []
            },
            "Bolt": {
                "DefaultPart": "Stryk7_Bolt_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "Stryk7_Body_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "Stryk7_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "Stryk7_FrontSight_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "Stryk7_Mag_Default",
                "UniqueModParts": [
                    "Stryk7_Mag_Extended",
                    "Stryk7_Mag_Quick"
                ]
            },
            "RearSight": {
                "DefaultPart": "Stryk7_RearSight_Default",
                "UniqueModParts": []
            },
            "BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_Slate",
                    "Sight_LED",
                    "Sight_Box"
                ]
            },
            "Ammo": {
                "DefaultPart": "Stryk7_Ammo_Default",
                "UniqueModParts": []
            },
            "SightMount": {
                "DefaultPart": "Stryk7_SightMount_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Stryk7_Grip_Ribbed",
                    "Stryk7_Grip_Friction",
                    "Stryk7_Grip_Grained"
                ]
            }
        },
        "ReloadNotifyTime": 1.3333335,
        "ReloadEmptyNotifyTime": 1.5333333
    },
    "VF7S": {
        "DisplayName": "VF-7S",
        "TypeClassText": "Assault Rifle",
        "DLC": null,
        "DisplayIcon": {
            "SourceUV": {
                "X": 256,
                "Y": 512
            },
            "SourceTexture": "SS_UI_WeaponsPrimary.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 36.4,
                    "Distance": 2000
                },
                {
                    "Damage": 33.333336,
                    "Distance": 4000
                },
                {
                    "Damage": 27,
                    "Distance": 7000
                },
                {
                    "Damage": 22.2,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 20,
            "AmmoInventoryMax": 200,
            "AmmoInventory": 80,
            "AmmoPickup": {
                "Min": 2,
                "Max": 4
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1500
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 1.25,
            "RoundsPerMinute": 550
        },
        "ModularConfiguration": {
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection",
                    "Sight_Tactical",
                    "Sight_Sheath"
                ]
            },
            "BarrelExtension": {
                "DefaultPart": "VF7S_BarrelExt_Default",
                "UniqueModParts": [
                    "BarrelExt_BeveledSilencer",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_CylindricSilencer",
                    "BarrelExt_PipedSilencer"
                ]
            },
            "Barrel": {
                "DefaultPart": "VF7S_Barrel_Default",
                "UniqueModParts": [
                    "VF7S_Barrel_CQC",
                    "VF7S_Barrel_Ranged"
                ]
            },
            "Body": {
                "DefaultPart": "VF7S_Body_Default",
                "UniqueModParts": []
            },
            "Bolt": {
                "DefaultPart": "VF7S_Bolt_Default",
                "UniqueModParts": []
            },
            "ForeGrip": {
                "DefaultPart": "VF7S_Foregrip_Default",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "VF7S_Grip_Default",
                "UniqueModParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "Mag": {
                "DefaultPart": "VF7S_Mag_Default",
                "UniqueModParts": [
                    "VF7S_Mag_Quick",
                    "VF7S_Mag_Extended",
                    "VF7S_Mag_Compact"
                ]
            },
            "Stock": {
                "DefaultPart": "VF7S_Stock_Default",
                "UniqueModParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "RearSight": {
                "DefaultPart": "VF7S_RearSight_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "VF7S_FrontSight_Default",
                "UniqueModParts": []
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "Ammo": {
                "DefaultPart": "VF7S_Ammo_Default",
                "UniqueModParts": []
            },
            "StockMount": {
                "DefaultPart": "VF7S_StockMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.8333335,
        "ReloadEmptyNotifyTime": 3.1666665
    },
    "WAR45": {
        "DisplayName": "WAR-45",
        "TypeClassText": "SMG",
        "DLC": "1",
        "DisplayIcon": {
            "SourceUV": {
                "X": 768,
                "Y": 768
            },
            "SourceTexture": "SS_UI_Weapon_Presets.png"
        },
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 35,
                    "Distance": 1000
                },
                {
                    "Damage": 30,
                    "Distance": 2500
                },
                {
                    "Damage": 25,
                    "Distance": 4500
                },
                {
                    "Damage": 18.5,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 25,
            "AmmoInventoryMax": 250,
            "AmmoPickup": {
                "Max": 7
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 2,
                    "Distance": 3500
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 6000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 1.25,
            "RoundsPerMinute": 650
        },
        "ModularConfiguration": {
            "BarrelExtension": {
                "DefaultPart": "WAR45_BarrelExt_Default",
                "UniqueModParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "Barrel": {
                "DefaultPart": "WAR45_Barrel_Default",
                "UniqueModParts": []
            },
            "Body": {
                "DefaultPart": "WAR45_Body_Default",
                "UniqueModParts": []
            },
            "ChargingHandle": {
                "DefaultPart": "WAR45_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "Mag": {
                "DefaultPart": "WAR45_Mag_Default",
                "UniqueModParts": [
                    "WAR45_Mag_Extended",
                    "WAR45_Mag_Quick",
                    "WAR45_Mag_Compact"
                ]
            },
            "Stock": {
                "DefaultPart": "WAR45_Stock_Default",
                "UniqueModParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ",
                    "Stock_Minimized"
                ]
            },
            "RearSight": {
                "DefaultPart": "WAR45_RearSight_Default",
                "UniqueModParts": []
            },
            "FrontSight": {
                "DefaultPart": "WAR45_FrontSight_Default",
                "UniqueModParts": []
            },
            "StockMount": {
                "DefaultPart": "WAR45_StockMount_Default",
                "UniqueModParts": []
            },
            "VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "Ammo": {
                "DefaultPart": "WAR45_Ammo_Default",
                "UniqueModParts": []
            },
            "Bolt": {
                "DefaultPart": "WAR45_Bolt",
                "UniqueModParts": []
            },
            "Grip": {
                "DefaultPart": "WAR45_Grip_Default",
                "UniqueModParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection"
                ]
            }
        },
        "ReloadNotifyTime": 2.1666667,
        "ReloadEmptyNotifyTime": 2.5000002
    }
}