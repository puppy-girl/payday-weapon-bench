const weaponData = {
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
            "SLOT_Barrel": {
                "DefaultPart": "WPD_Mosconi12C_Barrel_Default",
                "UniqueModParts": [
                    "WPD_Mosconi12C_Barrel_CQC",
                    "WPD_Mosconi12C_Barrel_Ranged"
                ]
            },
            "SLOT_ForeGrip": {
                "DefaultPart": "WPD_Mosconi12C_Foregrip_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_Mosconi12C_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_Mosconi12C_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_MagRelease": {
                "DefaultPart": "WPD_Mosconi12C_MagRelease_Default",
                "UniqueModParts": []
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_Mosconi12C_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ClassicRDS",
                    "WPD_Sight_Compact",
                    "WPD_Sight_Tagged"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_Ammo_12gauge",
                "UniqueModParts": []
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_Mosconi12C_SightMount_Rail",
                "UniqueModParts": []
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_Mosconi12C_Stock_Default",
                "UniqueModParts": [
                    "WPD_Mosconi12C_Stock_CQC",
                    "WPD_Mosconi12C_Stock_Padded",
                    "WPD_Mosconi12C_Stock_Fortified"
                ]
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Cylinder",
                    "WPD_VerticalGrip_AngledGhost",
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_QuickHold"
                ]
            }
        },
        "ReloadNotifyTime": 1.3333333,
        "ReloadEmptyNotifyTime": 1.9999999
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
            "SLOT_Barrel": {
                "DefaultPart": "WPD_R880_Barrel_Default",
                "UniqueModParts": [
                    "WPD_R880_Barrel_CQC",
                    "WPD_R880_Barrel_Ranged",
                    "WPD_R880_Barrel_Comp"
                ]
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_R880_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_R880_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_ForeGrip": {
                "DefaultPart": "WPD_R880_Foregrip_Default",
                "UniqueModParts": [
                    "WPD_R880_Foregrip_Biofit",
                    "WPD_R880_Foregrip_Tactical"
                ]
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_R880_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_R880_Mag_Default",
                "UniqueModParts": []
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_R880_Stock_Default",
                "UniqueModParts": [
                    "WPD_R880_Stock_CQC",
                    "WPD_R880_Stock_Padded",
                    "WPD_R880_Stock_Fortified"
                ]
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_R880_SightMount_Rail",
                "UniqueModParts": []
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ClassicRDS",
                    "WPD_Sight_Compact",
                    "WPD_Sight_Projection",
                    "WPD_Sight_Sheath",
                    "WPD_Sight_Tagged"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_R880_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_BarrelExt_12GObelisk",
                    "WPD_BarrelExt_SedimentChoke",
                    "WPD_BarrelExt_12GVentComp",
                    "WPD_BarrelExt_JawChoke"
                ]
            }
        },
        "ReloadNotifyTime": 1.3666668,
        "ReloadEmptyNotifyTime": 1.8333334
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
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_Slate",
                    "WPD_Sight_Box",
                    "WPD_Sight_LED"
                ]
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_BarrelExt_ObeliskSilencer",
                    "WPD_BarrelExt_SnubSilencer",
                    "WPD_BarrelExt_CompactComp",
                    "WPD_BarrelExt_SkeletonizedComp",
                    "WPD_BarrelExt_PartedComp"
                ]
            },
            "SLOT_Barrel": {
                "DefaultPart": "WPD_Commando_Barrel_Default",
                "UniqueModParts": []
            },
            "SLOT_LowerReceiver": {
                "DefaultPart": "WPD_Commando_Body_LowerReceiver_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_Commando_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_UpperReceiver": {
                "DefaultPart": "WPD_Commando_Body_UpperReceiver_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_Commando_Mag_Default",
                "UniqueModParts": [
                    "WPD_Commando_Mag_Extended",
                    "WPD_Commando_Mag_Compact",
                    "WPD_Commando_Mag_Quick"
                ]
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_Commando_Stock_Default",
                "UniqueModParts": [
                    "WPD_Stock_PaddedTube",
                    "WPD_Stock_TQ",
                    "WPD_Stock_HQ",
                    "WPD_Stock_LightFrame"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_Commando_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_Commando_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_Commando_SightMount_Default",
                "UniqueModParts": []
            },
            "SLOT_StockMount": {
                "DefaultPart": "WPD_Commando_StockMount_Default",
                "UniqueModParts": []
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_AngledGhost",
                    "WPD_VerticalGrip_Stub"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_Commando_Ammo_Default",
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
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_Slate",
                    "WPD_Sight_Box",
                    "WPD_Sight_LED"
                ]
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": "WPD_Compact7_BarrelExt_Default",
                "UniqueModParts": [
                    "WPD_BarrelExt_ObeliskSilencer",
                    "WPD_BarrelExt_SnubSilencer",
                    "WPD_BarrelExt_CompactComp",
                    "WPD_BarrelExt_SkeletonizedComp",
                    "WPD_BarrelExt_PartedComp"
                ]
            },
            "SLOT_Barrel": {
                "DefaultPart": "WPD_Compact7_Barrel_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_Compact7_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_Compact7_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_ForeGrip": {
                "DefaultPart": "WPD_Compact7_Foregrip_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_Compact7_Mag_Default",
                "UniqueModParts": [
                    "WPD_Compact7_Mag_Extended",
                    "WPD_Compact7_Mag_Quick",
                    "WPD_Compact7_Mag_Compact"
                ]
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_Compact7_Stock_Default",
                "UniqueModParts": [
                    "WPD_Stock_PaddedTube",
                    "WPD_Stock_TQ",
                    "WPD_Stock_LightFrame",
                    "WPD_Stock_HQ"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_Compact7_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_Compact7_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_StockMount": {
                "DefaultPart": "WPD_Compact7_StockMount_Default",
                "UniqueModParts": []
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_AngledGhost"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_Compact7_Ammo_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 1.9000001,
        "ReloadEmptyNotifyTime": 1.9945579
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
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ClassicRDS",
                    "WPD_Sight_Compact",
                    "WPD_Sight_ViewPoint",
                    "WPD_Sight_Lined",
                    "WPD_Sight_Projection"
                ]
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": "WPD_PC9_BarrelExt_Default",
                "UniqueModParts": [
                    "WPD_BarrelExt_ObeliskSilencer",
                    "WPD_BarrelExt_SnubSilencer",
                    "WPD_BarrelExt_CompactComp",
                    "WPD_BarrelExt_SkeletonizedComp",
                    "WPD_BarrelExt_PartedComp"
                ]
            },
            "SLOT_Barrel": {
                "DefaultPart": "WPD_PC9_Barrel_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_PC9_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_PC9_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_ForeGrip": {
                "DefaultPart": "WPD_PC9_Foregrip_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_PC9_Mag_Default",
                "UniqueModParts": [
                    "WPD_PC9_Mag_Extended",
                    "WPD_PC9_Mag_Compact",
                    "WPD_PC9_Mag_Quick"
                ]
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_PC9_Stock_Default",
                "UniqueModParts": [
                    "WPD_Stock_PaddedTube",
                    "WPD_Stock_TQ",
                    "WPD_Stock_HQ",
                    "WPD_Stock_LightFrame"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_PC9_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_PC9_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_QuickHold",
                    "WPD_VerticalGrip_Cylinder",
                    "WPD_VerticalGrip_AngledGhost"
                ]
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_PC9_Grip_Default",
                "UniqueModParts": [
                    "WPD_Grip_Biofit",
                    "WPD_Grip_Tac",
                    "WPD_Grip_Perforated"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_PC9_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_StockMount": {
                "DefaultPart": "WPD_PC9_StockMount_Default",
                "UniqueModParts": []
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_PC9_Bolt_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 1.8333334,
        "ReloadEmptyNotifyTime": 2.1666667
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
            "SLOT_Barrel": {
                "DefaultPart": "WPD_Bison_Barrel_Default",
                "UniqueModParts": [
                    "WPD_Bison_Barrel_Ranged",
                    "WPD_Bison_Barrel_CQC"
                ]
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_Bison_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_Bison_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_Bison_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_Bison_Mag_Default",
                "UniqueModParts": []
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_Bison_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_Slate",
                    "WPD_Sight_Box",
                    "WPD_Sight_LED"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_Ammo_357magnum",
                "UniqueModParts": []
            },
            "SLOT_Firepin": {
                "DefaultPart": "WPD_Bison_FirePin_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_Bison_Grip_Default",
                "UniqueModParts": [
                    "WPD_Bison_Grip_Tac",
                    "WPD_Bison_Grip_Hardwood",
                    "WPD_Bison_Grip_Biofit"
                ]
            },
            "SLOT_MagRelease": {
                "DefaultPart": "WPD_Bison_MagRelease_Default",
                "UniqueModParts": []
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_Bison_SightMount_Default",
                "UniqueModParts": []
            },
            "SLOT_Speedloader": {
                "DefaultPart": "WPD_Bison_Speedloader_Default",
                "UniqueModParts": []
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_BarrelExt_CompactComp",
                    "WPD_BarrelExt_SkeletonizedComp",
                    "WPD_BarrelExt_PartedComp"
                ]
            }
        },
        "ReloadNotifyTime": 3.1666665,
        "ReloadEmptyNotifyTime": 3.1666665
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
            "SLOT_Barrel": {
                "DefaultPart": "WPD_Castigo44_Barrel_Default",
                "UniqueModParts": [
                    "WPD_Castigo44_Barrel_Ranged",
                    "WPD_Castigo44_Barrel_CQC",
                    "WPD_Castigo44_Barrel_Tac"
                ]
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_Castigo44_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_Castigo44_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_Castigo44_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_Castigo44_Mag_Default",
                "UniqueModParts": []
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_Castigo44_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_Slate",
                    "WPD_Sight_Box",
                    "WPD_Sight_LED"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_Ammo_44magnum",
                "UniqueModParts": []
            },
            "SLOT_Speedloader": {
                "DefaultPart": "WPD_Castigo44_Speedloader_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_Castigo44_Grip_Default",
                "UniqueModParts": [
                    "WPD_Castigo44_Grip_Biofit",
                    "WPD_Castigo44_Grip_Tac",
                    "WPD_Castigo44_Grip_Hardwood"
                ]
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_BarrelExt_CompactComp",
                    "WPD_BarrelExt_SkeletonizedComp",
                    "WPD_BarrelExt_PartedComp"
                ]
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_Castigo44_SightMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.4999998,
        "ReloadEmptyNotifyTime": 2.4999998
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
            "SLOT_Barrel": {
                "DefaultPart": "WPD_S40_Barrel_Default",
                "UniqueModParts": []
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_S40_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_S40_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_S40_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_S40_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_S40_Mag_Default",
                "UniqueModParts": [
                    "WPD_S40_Mag_Extended",
                    "WPD_S40_Mag_Quick"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_S40_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_BarrelExt_ObeliskSilencer",
                    "WPD_BarrelExt_SnubSilencer",
                    "WPD_BarrelExt_CompactComp",
                    "WPD_BarrelExt_SkeletonizedComp",
                    "WPD_BarrelExt_PartedComp"
                ]
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_Slate",
                    "WPD_Sight_LED",
                    "WPD_Sight_Box"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_S40_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_S40_SightMount_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_S40_Grip_Default",
                "UniqueModParts": [
                    "WPD_S40_Grip_Hardwood",
                    "WPD_S40_Grip_Embossed",
                    "WPD_S40_Grip_Tac"
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
            "SLOT_Barrel": {
                "DefaultPart": "WPD_S403_Barrel_Default",
                "UniqueModParts": []
            },
            "SLOT_Bolt": {
                "DefaultPart": null,
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_S403_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_S403_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_S403_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_S403_Mag_Default",
                "UniqueModParts": [
                    "WPD_S403_Mag_Extended",
                    "WPD_S403_Mag_Quick"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_S403_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_BarrelExt_ObeliskSilencer",
                    "WPD_BarrelExt_SnubSilencer",
                    "WPD_BarrelExt_CompactComp",
                    "WPD_BarrelExt_SkeletonizedComp",
                    "WPD_BarrelExt_PartedComp"
                ]
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_Slate",
                    "WPD_Sight_Box",
                    "WPD_Sight_LED"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_S403_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_S403_SightMount_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_S403_Grip_Friction",
                    "WPD_S403_Grip_Ribbed",
                    "WPD_S403_Grip_Grained"
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
            "SLOT_Barrel": {
                "DefaultPart": "WPD_SPM11_Barrel_Default",
                "UniqueModParts": []
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_SPM11_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_SPM11_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_SPM11_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_SPM11_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_SPM11_Mag_Default",
                "UniqueModParts": [
                    "WPD_SPM11_Mag_Extended",
                    "WPD_SPM11_Mag_Quick"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_SPM11_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_BarrelExt_ObeliskSilencer",
                    "WPD_BarrelExt_SnubSilencer",
                    "WPD_BarrelExt_CompactComp",
                    "WPD_BarrelExt_SkeletonizedComp",
                    "WPD_BarrelExt_PartedComp"
                ]
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_Slate",
                    "WPD_Sight_Box",
                    "WPD_Sight_LED"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_SPM11_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_SPM11_SightMount_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_SPM11_Grip_Default",
                "UniqueModParts": [
                    "WPD_SPM11_Grip_Checkered",
                    "WPD_SPM11_Grip_Embossed",
                    "WPD_SPM11_Grip_Tac"
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
            "SLOT_Barrel": {
                "DefaultPart": "WPD_Stryk7_Barrel_Default",
                "UniqueModParts": []
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_Stryk7_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_Stryk7_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_Stryk7_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_Stryk7_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_Stryk7_Mag_Default",
                "UniqueModParts": [
                    "WPD_Stryk7_Mag_Extended",
                    "WPD_Stryk7_Mag_Quick"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_Stryk7_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_BarrelExt_ObeliskSilencer",
                    "WPD_BarrelExt_SnubSilencer",
                    "WPD_BarrelExt_CompactComp",
                    "WPD_BarrelExt_SkeletonizedComp",
                    "WPD_BarrelExt_PartedComp"
                ]
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_Slate",
                    "WPD_Sight_LED",
                    "WPD_Sight_Box"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_Stryk7_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_Stryk7_SightMount_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Stryk7_Grip_Ribbed",
                    "WPD_Stryk7_Grip_Friction",
                    "WPD_Stryk7_Grip_Grained"
                ]
            }
        },
        "ReloadNotifyTime": 1.3333335,
        "ReloadEmptyNotifyTime": 1.5333333
    },
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
            "SLOT_Barrel": {
                "DefaultPart": "WPD_A114_Barrel_Default",
                "UniqueModParts": [
                    "WPD_A114_Barrel_Ranged",
                    "WPD_A114_Barrel_CQC"
                ]
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_A114_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_UpperReceiver": {
                "DefaultPart": "WPD_A114_Body_UpperReceiver",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_A114_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_A114_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_A114_Mag_Default",
                "UniqueModParts": [
                    "WPD_A114_Mag_Extended",
                    "WPD_A114_Mag_Quick"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_A114_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": "WPD_A114_BarrelExt_Default",
                "UniqueModParts": [
                    "WPD_BarrelExt_Torque",
                    "WPD_BarrelExt_Ridged",
                    "WPD_BarrelExt_Express",
                    "WPD_BarrelExt_HybridMB",
                    "WPD_BarrelExt_IndentComp"
                ]
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ViewPoint",
                    "WPD_Sight_Lined",
                    "WPD_Sight_Fluted",
                    "WPD_Sight_Primed"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_A114_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_A114_SightMount_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_A114_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_A114_Grip_Default",
                "UniqueModParts": [
                    "WPD_Grip_Biofit",
                    "WPD_Grip_Tac",
                    "WPD_Grip_Perforated"
                ]
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Cylinder",
                    "WPD_VerticalGrip_AngledGhost",
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_QuickHold"
                ]
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_A114_Stock_Default",
                "UniqueModParts": [
                    "WPD_Stock_PaddedTube",
                    "WPD_Stock_TQ",
                    "WPD_Stock_LightFrame",
                    "WPD_Stock_HQ"
                ]
            },
            "SLOT_StockMount": {
                "DefaultPart": "WPD_A114_StockMount_Default",
                "UniqueModParts": []
            },
            "SLOT_Trigger": {
                "DefaultPart": "WPD_A114_Trigger_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.3333335,
        "ReloadEmptyNotifyTime": 2.6666665
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
            "SLOT_Sight": {
                "DefaultPart": "WPD_Sight_Long6X",
                "UniqueModParts": [
                    "WPD_Sight_ViewPoint",
                    "WPD_Sight_Lined",
                    "WPD_Sight_Fluted",
                    "WPD_Sight_Primed"
                ]
            },
            "SLOT_Barrel": {
                "DefaultPart": "WPD_R900S_Barrel_Default",
                "UniqueModParts": [
                    "WPD_R900S_Barrel_Ranged",
                    "WPD_R900S_Barrel_CQC"
                ]
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_R900S_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_R900S_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_R900S_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_Firepin": {
                "DefaultPart": "WPD_R900S_FirePin_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_R900S_Mag_Default",
                "UniqueModParts": [
                    "WPD_R900S_Mag_Extended"
                ]
            },
            "SLOT_MagRelease": {
                "DefaultPart": "WPD_R900S_MagRelease_Default",
                "UniqueModParts": []
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_R900S_SightMount_Rail",
                "UniqueModParts": []
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_R900S_Stock_Default",
                "UniqueModParts": [
                    "WPD_R900S_Stock_HardWood",
                    "WPD_R900S_Stock_Lightweight"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_R900S_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_BarrelExt_Express",
                    "WPD_BarrelExt_HybridMB",
                    "WPD_BarrelExt_IndentComp",
                    "WPD_BarrelExt_Torque",
                    "WPD_BarrelExt_Ridged"
                ]
            }
        },
        "ReloadNotifyTime": 2.4999998,
        "ReloadEmptyNotifyTime": 2.9999998
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
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ClassicRDS",
                    "WPD_Sight_Compact",
                    "WPD_Sight_ViewPoint",
                    "WPD_Sight_Lined",
                    "WPD_Sight_Projection",
                    "WPD_Sight_Tactical",
                    "WPD_Sight_Sheath"
                ]
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": "WPD_CAR4_BarrelExt_Default",
                "UniqueModParts": [
                    "WPD_BarrelExt_BeveledSilencer",
                    "WPD_BarrelExt_Express",
                    "WPD_BarrelExt_HybridMB",
                    "WPD_BarrelExt_IndentComp",
                    "WPD_BarrelExt_CylindricSilencer",
                    "WPD_BarrelExt_PipedSilencer"
                ]
            },
            "SLOT_Barrel": {
                "DefaultPart": "WPD_CAR4_Barrel_Default",
                "UniqueModParts": [
                    "WPD_CAR4_Barrel_CQC",
                    "WPD_CAR4_Barrel_Ranged"
                ]
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_CAR4_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_CAR4_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_CAR4_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_ForeGrip": {
                "DefaultPart": "WPD_CAR4_Foregrip_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_CAR4_Grip_Default",
                "UniqueModParts": [
                    "WPD_Grip_Biofit",
                    "WPD_Grip_Tac",
                    "WPD_Grip_Perforated"
                ]
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_CAR4_Mag_Default",
                "UniqueModParts": [
                    "WPD_CAR4_Mag_Quick",
                    "WPD_CAR4_Mag_Extended",
                    "WPD_CAR4_Mag_Compact"
                ]
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_CAR4_Stock_Default",
                "UniqueModParts": [
                    "WPD_Stock_PaddedTube",
                    "WPD_Stock_TQ",
                    "WPD_Stock_LightFrame",
                    "WPD_Stock_HQ"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_CAR4_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_CAR4_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Cylinder",
                    "WPD_VerticalGrip_AngledGhost",
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_QuickHold"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_CAR4_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_StockMount": {
                "DefaultPart": "WPD_CAR4_StockMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.3333333,
        "ReloadEmptyNotifyTime": 2.6666667
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
            "SLOT_BarrelExtension": {
                "DefaultPart": "WPD_KU59_BarrelExt_Default",
                "UniqueModParts": [
                    "WPD_BarrelExt_BeveledSilencer",
                    "WPD_BarrelExt_Express",
                    "WPD_BarrelExt_HybridMB",
                    "WPD_BarrelExt_IndentComp",
                    "WPD_BarrelExt_CylindricSilencer",
                    "WPD_BarrelExt_PipedSilencer"
                ]
            },
            "SLOT_Barrel": {
                "DefaultPart": "WPD_KU59_Barrel_Default",
                "UniqueModParts": [
                    "WPD_KU59_Barrel_Rail",
                    "WPD_KU59_Barrel_TradGrip"
                ]
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_KU59_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_KU59_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_StockMount": {
                "DefaultPart": "WPD_KU59_StockMount_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_KU59_Grip_Default",
                "UniqueModParts": [
                    "WPD_KU59_Grip_Biofit",
                    "WPD_KU59_Grip_Tac",
                    "WPD_KU59_Grip_Perforated"
                ]
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_KU59_Mag_Default",
                "UniqueModParts": [
                    "WPD_KU59_Mag_Quick",
                    "WPD_KU59_Mag_Extended",
                    "WPD_KU59_Mag_Compact"
                ]
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_KU59_Stock_Default",
                "UniqueModParts": [
                    "WPD_Stock_PaddedTube",
                    "WPD_Stock_TQ",
                    "WPD_Stock_LightFrame",
                    "WPD_Stock_HQ"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_KU59_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_KU59_SightMount_Default",
                "UniqueModParts": []
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ClassicRDS",
                    "WPD_Sight_Compact",
                    "WPD_Sight_ViewPoint",
                    "WPD_Sight_Lined",
                    "WPD_Sight_Projection",
                    "WPD_Sight_Tactical",
                    "WPD_Sight_Sheath"
                ]
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Cylinder",
                    "WPD_VerticalGrip_AngledGhost",
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_QuickHold"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_KU59_Ammo_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.3333335,
        "ReloadEmptyNotifyTime": 2.8350124
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
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ClassicRDS",
                    "WPD_Sight_Compact",
                    "WPD_Sight_ViewPoint",
                    "WPD_Sight_Lined",
                    "WPD_Sight_Projection",
                    "WPD_Sight_Tactical",
                    "WPD_Sight_Sheath"
                ]
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": "WPD_NWB9_BarrelExt_Default",
                "UniqueModParts": [
                    "WPD_BarrelExt_BeveledSilencer",
                    "WPD_BarrelExt_Express",
                    "WPD_BarrelExt_HybridMB",
                    "WPD_BarrelExt_IndentComp",
                    "WPD_BarrelExt_CylindricSilencer",
                    "WPD_BarrelExt_PipedSilencer"
                ]
            },
            "SLOT_Barrel": {
                "DefaultPart": "WPD_NWB9_Barrel_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_NWB9_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_NWB9_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_NWB9_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_ForeGrip": {
                "DefaultPart": "WPD_NWB9_Foregrip_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_NWB9_Grip_Default",
                "UniqueModParts": [
                    "WPD_Grip_Biofit",
                    "WPD_Grip_Tac",
                    "WPD_Grip_Perforated"
                ]
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_NWB9_Mag_Default",
                "UniqueModParts": [
                    "WPD_NWB9_Mag_Quick",
                    "WPD_NWB9_Mag_Extended",
                    "WPD_NWB9_Mag_Compact"
                ]
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_NWB9_Stock_Default",
                "UniqueModParts": [
                    "WPD_Stock_PaddedTube",
                    "WPD_Stock_TQ",
                    "WPD_Stock_LightFrame",
                    "WPD_Stock_HQ"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_NWB9_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_NWB9_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Cylinder",
                    "WPD_VerticalGrip_AngledGhost",
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_QuickHold"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_NWB9_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_StockMount": {
                "DefaultPart": "WPD_NWB9_StockMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 1.8333334,
        "ReloadEmptyNotifyTime": 2.1666665
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
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ClassicRDS",
                    "WPD_Sight_Compact",
                    "WPD_Sight_ViewPoint",
                    "WPD_Sight_Lined",
                    "WPD_Sight_Projection",
                    "WPD_Sight_Tactical",
                    "WPD_Sight_Sheath"
                ]
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": "WPD_VF7S_BarrelExt_Default",
                "UniqueModParts": [
                    "WPD_BarrelExt_BeveledSilencer",
                    "WPD_BarrelExt_Express",
                    "WPD_BarrelExt_HybridMB",
                    "WPD_BarrelExt_IndentComp",
                    "WPD_BarrelExt_CylindricSilencer",
                    "WPD_BarrelExt_PipedSilencer"
                ]
            },
            "SLOT_Barrel": {
                "DefaultPart": "WPD_VF7S_Barrel_Default",
                "UniqueModParts": [
                    "WPD_VF7S_Barrel_CQC",
                    "WPD_VF7S_Barrel_Ranged"
                ]
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_VF7S_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_VF7S_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_ForeGrip": {
                "DefaultPart": "WPD_VF7S_Foregrip_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_VF7S_Grip_Default",
                "UniqueModParts": [
                    "WPD_Grip_Biofit",
                    "WPD_Grip_Tac",
                    "WPD_Grip_Perforated"
                ]
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_VF7S_Mag_Default",
                "UniqueModParts": [
                    "WPD_VF7S_Mag_Quick",
                    "WPD_VF7S_Mag_Extended",
                    "WPD_VF7S_Mag_Compact"
                ]
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_VF7S_Stock_Default",
                "UniqueModParts": [
                    "WPD_Stock_PaddedTube",
                    "WPD_Stock_TQ",
                    "WPD_Stock_LightFrame",
                    "WPD_Stock_HQ"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_VF7S_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_VF7S_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Cylinder",
                    "WPD_VerticalGrip_AngledGhost",
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_QuickHold"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_VF7S_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_StockMount": {
                "DefaultPart": "WPD_VF7S_StockMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.8333335,
        "ReloadEmptyNotifyTime": 3.1666665
    },
    "ATK7": {
        "DisplayName": "SG ATK-7",
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
            "SLOT_BarrelExtension": {
                "DefaultPart": "WPD_ATK7_BarrelExt_Default",
                "UniqueModParts": [
                    "WPD_BarrelExt_WhisperWrap",
                    "WPD_BarrelExt_ObeliskSilencer",
                    "WPD_BarrelExt_CompactComp",
                    "WPD_BarrelExt_SkeletonizedComp",
                    "WPD_BarrelExt_PartedComp"
                ]
            },
            "SLOT_Barrel": {
                "DefaultPart": "WPD_ATK7_Barrel_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_ATK7_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_ATK7_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_ATK7_Mag_Default",
                "UniqueModParts": [
                    "WPD_ATK7_Mag_Extended",
                    "WPD_ATK7_Mag_Quick",
                    "WPD_ATK7_Mag_Compact"
                ]
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_ATK7_Stock_Default",
                "UniqueModParts": [
                    "WPD_ATK7_Stock_HollowFrame",
                    "WPD_ATK7_Stock_RubberFramed"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_ATK7_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Cylinder",
                    "WPD_VerticalGrip_AngledGhost",
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_QuickHold"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_Ammo_9mm",
                "UniqueModParts": []
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_ATK7_Bolt",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_ATK7_Grip_Default",
                "UniqueModParts": [
                    "WPD_ATK7_Grip_Contoured",
                    "WPD_ATK7_Grip_Tac",
                    "WPD_ATK7_Grip_SmoothFluted"
                ]
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ClassicRDS",
                    "WPD_Sight_Compact",
                    "WPD_Sight_ViewPoint",
                    "WPD_Sight_Lined",
                    "WPD_Sight_Projection"
                ]
            },
            "SLOT_ForeGrip": {
                "DefaultPart": "WPD_ATK7_ForeGrip_Default",
                "UniqueModParts": []
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_ATK7_SightMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.1666665,
        "ReloadEmptyNotifyTime": 2.3333335
    },
    "Bullkick500": {
        "DisplayName": "J&M Bullkick 500",
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
            "SLOT_Barrel": {
                "DefaultPart": "WPD_Bullkick500_Barrel_Default",
                "UniqueModParts": [
                    "WPD_Bullkick500_Barrel_Ranged",
                    "WPD_Bullkick500_Barrel_CQC",
                    "WPD_Bullkick500_Barrel_Tactical"
                ]
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_Bullkick500_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_Bullkick500_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_Bullkick500_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_Bullkick500_Mag_Default",
                "UniqueModParts": [
                    "WPD_Bullkick500_Mag_Unfluted"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_Bullkick500_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_Box",
                    "WPD_Sight_Snapshot",
                    "WPD_Sight_Tactical"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_Ammo_500Magnum",
                "UniqueModParts": []
            },
            "SLOT_Speedloader": {
                "DefaultPart": "WPD_Bullkick500_Speedloader_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_Bullkick500_Grip_Default",
                "UniqueModParts": [
                    "WPD_Bullkick500_Grip_Biofit",
                    "WPD_Bullkick500_Grip_Tac",
                    "WPD_Bullkick500_Grip_Hardwood"
                ]
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_BarrelExt_CompactComp",
                    "WPD_BarrelExt_SkeletonizedComp",
                    "WPD_BarrelExt_PartedComp"
                ]
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_Bullkick500_SightMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.8333333,
        "ReloadEmptyNotifyTime": 2.8333333
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
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ClassicRDS",
                    "WPD_Sight_Compact",
                    "WPD_Sight_ViewPoint",
                    "WPD_Sight_Lined",
                    "WPD_Sight_Projection",
                    "WPD_Sight_Tactical",
                    "WPD_Sight_Sheath"
                ]
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": "WPD_MX63_BarrelExt_Default",
                "UniqueModParts": [
                    "WPD_BarrelExt_BeveledSilencer",
                    "WPD_BarrelExt_Express",
                    "WPD_BarrelExt_HybridMB",
                    "WPD_BarrelExt_IndentComp",
                    "WPD_BarrelExt_CylindricSilencer",
                    "WPD_BarrelExt_PipedSilencer"
                ]
            },
            "SLOT_Barrel": {
                "DefaultPart": "WPD_MX63_Barrel_Default",
                "UniqueModParts": [
                    "WPD_MX63_Barrel_CQC",
                    "WPD_MX63_Barrel_Ranged"
                ]
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_MX63_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_MX63_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_ForeGrip": {
                "DefaultPart": "WPD_MX63_Foregrip_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_MX63_Grip_Default",
                "UniqueModParts": [
                    "WPD_Grip_Biofit",
                    "WPD_Grip_Tac",
                    "WPD_Grip_Perforated"
                ]
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_MX63_Mag_Default",
                "UniqueModParts": []
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_MX63_stock_Default",
                "UniqueModParts": [
                    "WPD_Stock_PaddedTube",
                    "WPD_Stock_TQ",
                    "WPD_Stock_LightFrame",
                    "WPD_Stock_HQ"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_MX63_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_MX63_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Cylinder",
                    "WPD_VerticalGrip_AngledGhost",
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_QuickHold"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_MX63_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_MX63_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_StockMount": {
                "DefaultPart": "WPD_MX63_StockMount_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.6666665,
        "ReloadEmptyNotifyTime": 2.8333333
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
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ClassicRDS",
                    "WPD_Sight_Compact",
                    "WPD_Sight_ViewPoint",
                    "WPD_Sight_Lined",
                    "WPD_Sight_Projection",
                    "WPD_Sight_Tactical",
                    "WPD_Sight_Sheath"
                ]
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": "WPD_RG5_BarrelExt_Default",
                "UniqueModParts": [
                    "WPD_BarrelExt_Express",
                    "WPD_BarrelExt_HybridMB",
                    "WPD_BarrelExt_IndentComp",
                    "WPD_BarrelExt_CylindricSilencer",
                    "WPD_BarrelExt_PipedSilencer"
                ]
            },
            "SLOT_Barrel": {
                "DefaultPart": "WPD_RG5_Barrel_Default",
                "UniqueModParts": [
                    "WPD_RG5_Barrel_CQC",
                    "WPD_RG5_Barrel_Ranged"
                ]
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_RG5_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_RG5_Bolt_Default",
                "UniqueModParts": []
            },
            "SLOT_ForeGrip": {
                "DefaultPart": "WPD_RG5_Foregrip_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_RG5_Grip_Default",
                "UniqueModParts": [
                    "WPD_RG5_Grip_Contoured",
                    "WPD_RG5_Grip_SmoothFluted",
                    "WPD_RG5_Grip_Tac"
                ]
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_RG5_Mag_Default",
                "UniqueModParts": [
                    "WPD_RG5_Mag_Quick",
                    "WPD_RG5_Mag_Extended",
                    "WPD_RG5_Mag_Compact"
                ]
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_RG5_Stock_Default",
                "UniqueModParts": [
                    "WPD_RG5_Stock_Light",
                    "WPD_RG5_Stock_HQ",
                    "WPD_RG5_Stock_TQ"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_RG5_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_RG5_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Cylinder",
                    "WPD_VerticalGrip_AngledGhost",
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_QuickHold",
                    "WPD_VerticalGrip_RiggerHandstop"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_RG5_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_StockMount": {
                "DefaultPart": "WPD_RG5_StockMount_Default",
                "UniqueModParts": []
            },
            "SLOT_SightMount": {
                "DefaultPart": "WPD_RG5_SightMount_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_RG5_ChargingHandle_Default",
                "UniqueModParts": []
            }
        },
        "ReloadNotifyTime": 2.6666665,
        "ReloadEmptyNotifyTime": 2.8333333
    },
    "FSA12": {
        "DisplayName": "Rebel Tactics FSA-12G",
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
            "SLOT_Barrel": {
                "DefaultPart": "WPD_FSA12_Barrel_Default",
                "UniqueModParts": [
                    "WPD_FSA12_Barrel_CQC",
                    "WPD_FSA12_Barrel_Ranged"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_FSA12_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_FSA12_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_ForeGrip": {
                "DefaultPart": "WPD_FSA12_Foregrip_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_FSA12_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_FSA12_Mag_Default",
                "UniqueModParts": [
                    "WPD_FSA12_Mag_Extended",
                    "WPD_FSA12_Mag_Compact",
                    "WPD_FSA12_Mag_Quick"
                ]
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_FSA12_Stock_Default",
                "UniqueModParts": [
                    "WPD_Stock_PaddedTube",
                    "WPD_Stock_TQ",
                    "WPD_Stock_LightFrame",
                    "WPD_Stock_HQ"
                ]
            },
            "SLOT_StockMount": {
                "DefaultPart": "WPD_FSA12_StockMount_Default",
                "UniqueModParts": []
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ClassicRDS",
                    "WPD_Sight_Compact",
                    "WPD_Sight_Projection",
                    "WPD_Sight_Sheath",
                    "WPD_Sight_Tagged"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_FSA12_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": "WPD_FSA12_BarrelExt_Default",
                "UniqueModParts": [
                    "WPD_BarrelExt_12GObelisk",
                    "WPD_BarrelExt_SedimentChoke",
                    "WPD_BarrelExt_12GVentComp",
                    "WPD_BarrelExt_JawChoke"
                ]
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_FSA12_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_FSA12_Grip_Default",
                "UniqueModParts": [
                    "WPD_Grip_Biofit",
                    "WPD_Grip_Tac",
                    "WPD_Grip_Perforated"
                ]
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Cylinder",
                    "WPD_VerticalGrip_AngledGhost",
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_QuickHold",
                    "WPD_VerticalGrip_FlatSide"
                ]
            }
        },
        "ReloadNotifyTime": 1.9999999,
        "ReloadEmptyNotifyTime": 2.3333335
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
            "SLOT_BarrelExtension": {
                "DefaultPart": "WPD_WAR45_BarrelExt_Default",
                "UniqueModParts": [
                    "WPD_BarrelExt_ObeliskSilencer",
                    "WPD_BarrelExt_SnubSilencer",
                    "WPD_BarrelExt_CompactComp",
                    "WPD_BarrelExt_SkeletonizedComp",
                    "WPD_BarrelExt_PartedComp"
                ]
            },
            "SLOT_Barrel": {
                "DefaultPart": "WPD_WAR45_Barrel_Default",
                "UniqueModParts": []
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_WAR45_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_WAR45_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_WAR45_Mag_Default",
                "UniqueModParts": [
                    "WPD_WAR45_Mag_Extended",
                    "WPD_WAR45_Mag_Quick",
                    "WPD_WAR45_Mag_Compact"
                ]
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_WAR45_Stock_Default",
                "UniqueModParts": [
                    "WPD_Stock_PaddedTube",
                    "WPD_Stock_TQ",
                    "WPD_Stock_LightFrame",
                    "WPD_Stock_HQ",
                    "WPD_Stock_Minimized"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_WAR45_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_WAR45_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_StockMount": {
                "DefaultPart": "WPD_WAR45_StockMount_Default",
                "UniqueModParts": []
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Cylinder",
                    "WPD_VerticalGrip_AngledGhost",
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_QuickHold"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_WAR45_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_Bolt": {
                "DefaultPart": "WPD_WAR45_Bolt",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_WAR45_Grip_Default",
                "UniqueModParts": [
                    "WPD_Grip_Biofit",
                    "WPD_Grip_Tac",
                    "WPD_Grip_Perforated"
                ]
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ClassicRDS",
                    "WPD_Sight_Compact",
                    "WPD_Sight_ViewPoint",
                    "WPD_Sight_Lined",
                    "WPD_Sight_Projection"
                ]
            }
        },
        "ReloadNotifyTime": 2.1666667,
        "ReloadEmptyNotifyTime": 2.5000002
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
            "SLOT_Barrel": {
                "DefaultPart": "WPD_FIK22_Barrel_Default",
                "UniqueModParts": [
                    "WPD_FIK22_Barrel_Ranged",
                    "WPD_FIK22_Barrel_CQC"
                ]
            },
            "SLOT_Body": {
                "DefaultPart": "WPD_FIK22_Body_Default",
                "UniqueModParts": []
            },
            "SLOT_ChargingHandle": {
                "DefaultPart": "WPD_FIK22_ChargingHandle_Default",
                "UniqueModParts": []
            },
            "SLOT_FrontSight": {
                "DefaultPart": "WPD_FIK22_FrontSight_Default",
                "UniqueModParts": []
            },
            "SLOT_Mag": {
                "DefaultPart": "WPD_FIK22_Mag_Default",
                "UniqueModParts": [
                    "WPD_FIK22_Mag_Extended",
                    "WPD_FIK22_Mag_Compact",
                    "WPD_FIK22_Mag_Quick"
                ]
            },
            "SLOT_RearSight": {
                "DefaultPart": "WPD_FIK22_RearSight_Default",
                "UniqueModParts": []
            },
            "SLOT_BarrelExtension": {
                "DefaultPart": "WPD_FIK22_BarrelExt_MuzzleBreak",
                "UniqueModParts": [
                    "WPD_BarrelExt_SnubSilencer",
                    "WPD_BarrelExt_ObeliskSilencer",
                    "WPD_BarrelExt_CompactComp",
                    "WPD_BarrelExt_SkeletonizedComp",
                    "WPD_BarrelExt_PartedComp"
                ]
            },
            "SLOT_Ammo": {
                "DefaultPart": "WPD_FIK22_Ammo_Default",
                "UniqueModParts": []
            },
            "SLOT_Grip": {
                "DefaultPart": "WPD_FIK22_Grip_Default",
                "UniqueModParts": [
                    "WPD_Grip_Biofit",
                    "WPD_Grip_Tac",
                    "WPD_Grip_Perforated"
                ]
            },
            "SLOT_ForeGrip": {
                "DefaultPart": "WPD_FIK22_ForeGrip_Default",
                "UniqueModParts": []
            },
            "SLOT_Stock": {
                "DefaultPart": "WPD_FIK22_Stock_Default",
                "UniqueModParts": [
                    "WPD_Stock_PaddedTube",
                    "WPD_Stock_TQ",
                    "WPD_Stock_LightFrame",
                    "WPD_Stock_HQ"
                ]
            },
            "SLOT_StockMount": {
                "DefaultPart": "WPD_FIK22_StockMount_Default",
                "UniqueModParts": []
            },
            "SLOT_VerticalGrip": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_VerticalGrip_Cylinder",
                    "WPD_VerticalGrip_AngledGhost",
                    "WPD_VerticalGrip_Stub",
                    "WPD_VerticalGrip_QuickHold"
                ]
            },
            "SLOT_Sight": {
                "DefaultPart": null,
                "UniqueModParts": [
                    "WPD_Sight_ClassicRDS",
                    "WPD_Sight_Compact",
                    "WPD_Sight_Sheath",
                    "WPD_Sight_Tactical",
                    "WPD_Sight_Lined",
                    "WPD_Sight_LightHolographic"
                ]
            }
        },
        "ReloadNotifyTime": 2.333333,
        "ReloadEmptyNotifyTime": 2.666667
    }
}