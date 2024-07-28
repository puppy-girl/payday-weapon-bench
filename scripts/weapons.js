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
        "SpreadData": {
            "FireSpreadStart": 0.1,
            "FireSpreadIncrease": 0.6,
            "FireSpreadDecayRate": 12,
            "FireSpreadCap": 2.5,
            "SpreadRecoveryMode": "ESBZWeaponSpreadRecoveryMode::DecayRate",
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Spread": 4,
                    "Start": 2
                },
                "StandMove": {
                    "Spread": 6,
                    "Start": 4
                },
                "Crouch": {
                    "Spread": 2,
                    "Start": 2
                },
                "CrouchMove": {
                    "Spread": 4,
                    "Start": 4
                },
                "Target": {
                    "Spread": 0.25
                },
                "TargetMove": {
                    "Spread": 0.5
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 25,
                "SpeedRecover": 15,
                "RecoverWaitTime": 0.12,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0.0141,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.0141,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 1,
                                "ArriveTangent": 0.003058,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.003039,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.8,
                                "Value": 0.7,
                                "ArriveTangent": -0.064537,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.064537,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8.198006,
                                "Value": 0.5,
                                "ArriveTangent": 0.017092,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058858,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0.12527719,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.12527719,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.79823,
                                "Value": 0.3,
                                "ArriveTangent": 0.176986,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.176983,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.0937185,
                                "Value": 0.882828,
                                "ArriveTangent": 1.301766,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.301765,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.9230132,
                                "Value": 1.2375119,
                                "ArriveTangent": -0.07384885,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.07384885,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0.1,
                            "Y": 0.43
                        },
                        {
                            "X": 0.2,
                            "Y": 1.2
                        },
                        {
                            "X": -0.1,
                            "Y": 2.3
                        },
                        {
                            "X": 0.3,
                            "Y": 3.2
                        },
                        {
                            "X": 0.7,
                            "Y": 3.61
                        },
                        {
                            "X": 0.8,
                            "Y": 4.9
                        },
                        {
                            "X": 1.1,
                            "Y": 5.8
                        },
                        {
                            "X": 0.8,
                            "Y": 6.5
                        },
                        {
                            "X": 1.05,
                            "Y": 7.3
                        },
                        {
                            "X": 0.75,
                            "Y": 7.9
                        },
                        {
                            "X": 0.85,
                            "Y": 8.9
                        },
                        {
                            "X": 0.5,
                            "Y": 9.2
                        },
                        {
                            "X": 0.3,
                            "Y": 10.3
                        },
                        {
                            "X": -0.05,
                            "Y": 10
                        },
                        {
                            "X": -0.25,
                            "Y": 10.8
                        },
                        {
                            "X": -0.55,
                            "Y": 10.7
                        },
                        {
                            "X": -0.55,
                            "Y": 11.9
                        },
                        {
                            "X": -0.9,
                            "Y": 12
                        },
                        {
                            "X": -0.9,
                            "Y": 12.7
                        },
                        {
                            "X": -1.1,
                            "Y": 13.7
                        }
                    ]
                },
                "DisplacementResetTime": 0.25,
                "DisplacementGraphLoopStart": 10,
                "DisplacementGraphInitialNum": 0,
                "DisplacementHipFireMultiplier": 1.5
            },
            "ViewKickBack": {
                "SpeedDeflect": 15,
                "SpeedRecover": 5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 0.4,
                "MaxDistance": 4.5
            },
            "GunKickXY": {
                "SpeedDeflect": 40,
                "SpeedRecover": 25,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.016153,
                                "Value": 0.923087,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.212118,
                                "Value": 0.923087,
                                "ArriveTangent": 1.848622,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.848622,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.964013,
                                "Value": 2.675322,
                                "ArriveTangent": 0.6907,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.6907,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.987456,
                                "Value": 4.221411,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 1.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.1,
                    "Max": 0.4
                },
                "VerticalBottom": {
                    "Max": 0.1
                },
                "HorizontalRight": {
                    "Min": 0.3,
                    "Max": 0.6
                },
                "HorizontalLeft": {
                    "Min": 0.3,
                    "Max": 0.6
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 60,
                "SpeedRecover": 20,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 2.4,
                                "ArriveTangent": 0.40875977,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.40875918,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2.5,
                "MaxDistance": 4
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 60,
                "SpeedRecover": 20,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 2.4,
                                "ArriveTangent": 0.40876,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.408759,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2.5,
                "MaxDistance": 4
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.25,
            "FireSpreadIncrease": 0.2,
            "FireSpreadResetTime": 0.3,
            "FireSpreadDecayRate": 0,
            "FireSpreadCap": 4,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "TasedSpread": 4
                },
                "StandMove": {
                    "TasedSpread": 4,
                    "Start": 3,
                    "Cap": 3,
                    "Increment": 3
                },
                "Crouch": {
                    "TasedSpread": 4,
                    "Start": 0.25,
                    "Cap": 0.5,
                    "Increment": 0.5
                },
                "CrouchMove": {
                    "TasedSpread": 4,
                    "Start": 0.5,
                    "Cap": 0.75,
                    "Increment": 0.75
                },
                "Target": {
                    "Spread": 0,
                    "TasedSpread": 4
                },
                "TargetMove": {
                    "Spread": 0.5,
                    "TasedSpread": 4
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 40,
                "SpeedRecover": 35,
                "RecoverWaitTime": 0.05,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.031268597,
                                "Value": 1.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5446911,
                                "Value": 1.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.752279,
                                "Value": 0.890962,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.280459,
                                "Value": 0.367716,
                                "ArriveTangent": -0.96767735,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.93321157,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.757439,
                                "Value": 0.186427,
                                "ArriveTangent": 0.81695795,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.81695795,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.0938375,
                                "Value": 1.032212,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.9638565,
                                "Value": 1.6584123,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.008968,
                                "Value": 0.237833,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.066324,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.959029,
                                "Value": 0.429528,
                                "ArriveTangent": 0.204268,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058875,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6.562953,
                                "Value": 1.3020033,
                                "ArriveTangent": 0.34040722,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 9.079855,
                                "Value": 1.589234,
                                "ArriveTangent": 0.114120744,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.114120744,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0.089999996,
                            "Y": 0.089999996
                        },
                        {
                            "X": 0.1875,
                            "Y": 0.3501
                        },
                        {
                            "X": 0.22500001,
                            "Y": 0.71999997
                        },
                        {
                            "X": 0.45000002,
                            "Y": 0.99
                        },
                        {
                            "X": 0.585,
                            "Y": 1.4399999
                        },
                        {
                            "X": 0.90000004,
                            "Y": 1.4399999
                        },
                        {
                            "X": 0.99,
                            "Y": 1.89
                        },
                        {
                            "X": 1.0649999,
                            "Y": 2.16
                        },
                        {
                            "X": 0.945,
                            "Y": 2.43
                        },
                        {
                            "X": 0.90000004,
                            "Y": 2.79
                        },
                        {
                            "X": 0.81000006,
                            "Y": 2.9250002
                        },
                        {
                            "X": 0.54,
                            "Y": 3.2400002
                        },
                        {
                            "X": 0.54,
                            "Y": 3.6000001
                        },
                        {
                            "X": 0.6,
                            "Y": 3.87
                        },
                        {
                            "X": 0.63,
                            "Y": 4.23
                        },
                        {
                            "X": 0.945,
                            "Y": 4.5
                        }
                    ]
                },
                "DisplacementResetTime": 0.25,
                "DisplacementGraphLoopStart": 8,
                "DisplacementGraphInitialNum": 2,
                "DisplacementHipFireMultiplier": 1.5
            },
            "ViewKickBack": {
                "SpeedDeflect": 65,
                "SpeedRecover": 34,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 4,
                "MaxDistance": 6
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 65,
                "SpeedRecover": 35,
                "Distance": 4,
                "MaxDistance": 6
            },
            "GunKickXY": {
                "SpeedDeflect": 15,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.212118,
                                "Value": 1.2,
                                "ArriveTangent": 2.049062,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.049062,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.964013,
                                "Value": 2.675322,
                                "ArriveTangent": 0.632712,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.632712,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.987456,
                                "Value": 4.221411,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 1.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 2.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.1,
                    "Max": 0.3
                },
                "VerticalBottom": {
                    "Min": 0.1,
                    "Max": 0.3
                },
                "VerticalMultiplier": {
                    "Start": 0.4,
                    "Increment": 0.15
                },
                "HorizontalRight": {
                    "Min": 0.1,
                    "Max": 0.3
                },
                "HorizontalLeft": {
                    "Min": 0.1,
                    "Max": 0.3
                },
                "HorizontalMultiplier": {
                    "Start": 0.25,
                    "Increment": 0.2,
                    "Max": 1.5,
                    "Threshold": 1.2
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 45,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.009777218,
                                "Value": 0.2429018,
                                "ArriveTangent": 0.048585337,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.048585337,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.5487418,
                                "Value": 0.4148436,
                                "ArriveTangent": 0.19999999,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.19999999,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0.6151395,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.6151395,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": -0.28114763,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.28114763,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.207201,
                                "Value": 0.37945068,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2,
                "MaxDistance": 3.5
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 40,
                "SpeedRecover": 5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.01853776,
                                "Value": 0.56483895,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2757343,
                                "Value": 0.57722634,
                                "ArriveTangent": 0.160285,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.00053537695,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0.4906866,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.49068764,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.003401637,
                                "Value": 0.7845484,
                                "ArriveTangent": 0.013747798,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.16352001,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5.9991074,
                                "Value": 0.2,
                                "ArriveTangent": 0.019803932,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.019804236,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2.2,
                "MaxDistance": 3.5
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.1,
            "FireSpreadIncrease": 0.6,
            "FireSpreadDecayRate": 0,
            "FireSpreadCap": 3,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Cap": 1.25
                },
                "StandMove": {
                    "Spread": 1.5,
                    "Start": 1.25
                },
                "Crouch": {
                    "Spread": 0.5
                },
                "Target": {
                    "Spread": 0.25
                },
                "TargetMove": {
                    "Spread": 0.5
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 25,
                "SpeedRecover": 17,
                "RecoverWaitTime": 0.3,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0.0141,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.0141,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 1,
                                "ArriveTangent": 0.003058,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.003039,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.8,
                                "Value": 0.7,
                                "ArriveTangent": -0.064537,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.064537,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8.198006,
                                "Value": 0.5,
                                "ArriveTangent": 0.017092,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058858,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.006135553,
                                "Value": 0.6824764,
                                "ArriveTangent": -0.08426535,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.08426535,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.1962019,
                                "Value": 0.58219504,
                                "ArriveTangent": 1.2963533,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.2963505,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.2554498,
                                "Value": 2.1192927,
                                "ArriveTangent": 1.301766,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.301765,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.226139,
                                "Value": 2.477985,
                                "ArriveTangent": 2.206815,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.206819,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": -0.3,
                            "Y": 1.2
                        },
                        {
                            "X": 1,
                            "Y": 2.5
                        },
                        {
                            "X": -0.6,
                            "Y": 4.5
                        },
                        {
                            "X": 0.3,
                            "Y": 5.8
                        },
                        {
                            "X": -2.4,
                            "Y": 7.2
                        },
                        {
                            "X": -1.5,
                            "Y": 9.6
                        },
                        {
                            "X": -3,
                            "Y": 10.4
                        },
                        {
                            "X": -1.5,
                            "Y": 11.8
                        },
                        {
                            "X": -2.3,
                            "Y": 13.832
                        }
                    ]
                },
                "DisplacementResetTime": 0.14,
                "DisplacementGraphLoopStart": 6,
                "DisplacementGraphInitialNum": 0,
                "DisplacementHipFireMultiplier": 1.5
            },
            "ViewKickBack": {
                "SpeedDeflect": 250,
                "SpeedRecover": 100,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 4,
                "MaxDistance": 10
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 250,
                "SpeedRecover": 100,
                "Distance": 4,
                "MaxDistance": 10
            },
            "GunKickXY": {
                "SpeedDeflect": 100,
                "SpeedRecover": 50,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.8,
                                "Value": 5,
                                "ArriveTangent": -1.3333334,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.3333334,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 3,
                                "ArriveTangent": -0.952381,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.952381,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 4,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Max": 0.3
                },
                "HorizontalRight": {
                    "Min": 0.2,
                    "Max": 0.5
                },
                "HorizontalLeft": {
                    "Min": 0.2,
                    "Max": 0.5
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 150,
                "SpeedRecover": 10,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 2.4,
                                "ArriveTangent": 0.40875977,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.40875918,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 3,
                "MaxDistance": 6
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 150,
                "SpeedRecover": 70,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 2.4,
                                "ArriveTangent": 0.40876,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.408759,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 3,
                "MaxDistance": 6
            }
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
        "SpreadData": {
            "FireSpreadStart": 2,
            "FireSpreadIncrease": 2,
            "FireSpreadResetTime": 0.65,
            "FireSpreadDecayRate": 0,
            "FireSpreadCap": 5,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Spread": 1.2,
                    "Cap": 4,
                    "Increment": 0.85,
                    "ResetTime": 1.5
                },
                "StandMove": {
                    "Spread": 2,
                    "Cap": 5,
                    "ResetTime": 1.7
                },
                "Crouch": {
                    "Cap": 3.5,
                    "Increment": 0.6,
                    "ResetTime": 1.4
                },
                "CrouchMove": {
                    "Spread": 1.4,
                    "Cap": 4,
                    "Increment": 0.7,
                    "ResetTime": 1.6
                },
                "Target": {
                    "Spread": 0
                },
                "TargetMove": {
                    "Spread": 0.25
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedRecover": 12,
                "RecoverWaitTime": 0.3,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.09939194,
                                "Value": 1.3640139,
                                "ArriveTangent": 0.0141,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.046893563,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.4673748,
                                "Value": 1.2540164,
                                "ArriveTangent": 0.003058,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.003039,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5.34832,
                                "Value": 1.0914962,
                                "ArriveTangent": -0.064537,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.064537,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 7.1497993,
                                "Value": 0.8445311,
                                "ArriveTangent": 0.017092,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058858,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.058109224,
                                "Value": 0.8055282,
                                "ArriveTangent": 0.08013562,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.08013562,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.666524,
                                "Value": 1.1748264,
                                "ArriveTangent": 0.10948321,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.10948186,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 7.042056,
                                "Value": 1.4047443,
                                "ArriveTangent": 0.088778056,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.08877747,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": -1.125,
                            "Y": 4.5
                        },
                        {
                            "X": 1.6500001,
                            "Y": 9.375
                        },
                        {
                            "X": -0.75,
                            "Y": 16.875
                        },
                        {
                            "X": 2.25,
                            "Y": 21.75
                        },
                        {
                            "X": -1.2,
                            "Y": 27
                        },
                        {
                            "X": 1.5,
                            "Y": 36
                        },
                        {
                            "X": 0,
                            "Y": 39
                        }
                    ]
                },
                "DisplacementResetTime": 1.3,
                "DisplacementGraphLoopStart": 4,
                "DisplacementGraphInitialNum": 0,
                "DisplacementHipFireMultiplier": 1.1
            },
            "ViewKickBack": {
                "SpeedDeflect": 100,
                "SpeedRecover": 70,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 15,
                "MaxDistance": 15
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 100,
                "SpeedRecover": 25,
                "Distance": 15,
                "MaxDistance": 15
            },
            "GunKickXY": {
                "SpeedDeflect": 100,
                "SpeedRecover": 50,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.8,
                                "Value": 5,
                                "ArriveTangent": -1.3333334,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.3333334,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 3,
                                "ArriveTangent": -0.952381,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.952381,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.16615368,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.46615368,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.9661537,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.1288617,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Max": 1
                },
                "HorizontalRight": {
                    "Min": 0.2,
                    "Max": 0.8
                },
                "HorizontalLeft": {
                    "Min": 0.2,
                    "Max": 0.8
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 60,
                "SpeedRecover": 50,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": -1.1,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.1,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": -1.1,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.1,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                }
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 60,
                "SpeedRecover": 50,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": -1.1,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.1,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": -1.1,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.1,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                }
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.2,
            "FireSpreadIncrease": 0.35,
            "FireSpreadCap": 3,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Start": 4,
                    "Cap": 2
                },
                "StandMove": {
                    "Spread": 1.5,
                    "Start": 4,
                    "Cap": 3
                },
                "Crouch": {
                    "Spread": 0.5,
                    "Start": 0.33
                },
                "CrouchMove": {
                    "Start": 0.33
                },
                "Target": {
                    "Spread": 0,
                    "Start": 0.33
                },
                "TargetMove": {
                    "Spread": 0.15,
                    "Start": 0.33
                }
            },
            "DeviationHipFireMultiplier": 1
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 30,
                "SpeedRecover": 20,
                "RecoverWaitTime": 0.075,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.03367424,
                                "Value": 0.37078428,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.1379519,
                                "Value": 0.34125137,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.192338,
                                "Value": 1.6111753,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.008968353,
                                "Value": 0.23783255,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.066324,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.9590287,
                                "Value": 0.42952847,
                                "ArriveTangent": 0.204268,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058875,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.9962525,
                                "Value": 1.5797037,
                                "ArriveTangent": 0.910426,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 9.079855,
                                "Value": 1.589234,
                                "ArriveTangent": 0.001874715,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.001874715,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": -0.05,
                            "Y": 0.2
                        },
                        {
                            "X": 0.1,
                            "Y": 0.7
                        },
                        {
                            "X": 0.05,
                            "Y": 1.3
                        },
                        {
                            "X": 0.2,
                            "Y": 1.8
                        },
                        {
                            "X": -0.15,
                            "Y": 2.1
                        },
                        {
                            "X": 0.05,
                            "Y": 2.7
                        },
                        {
                            "X": -0.35,
                            "Y": 2.8
                        },
                        {
                            "X": -0.55,
                            "Y": 3.2
                        },
                        {
                            "X": -0.85,
                            "Y": 2.9
                        },
                        {
                            "X": -1.1,
                            "Y": 3.4
                        },
                        {
                            "X": -1.5,
                            "Y": 3.5
                        },
                        {
                            "X": -1.3,
                            "Y": 4
                        },
                        {
                            "X": -1.55,
                            "Y": 4.4
                        },
                        {
                            "X": -1.7,
                            "Y": 4.9
                        },
                        {
                            "X": -1.45,
                            "Y": 5.3
                        },
                        {
                            "X": -1.7,
                            "Y": 5.7
                        },
                        {
                            "X": -2,
                            "Y": 5.8
                        },
                        {
                            "X": -1.85,
                            "Y": 6.4
                        },
                        {
                            "X": -2.2,
                            "Y": 6.7
                        },
                        {
                            "X": -2.05,
                            "Y": 7.3
                        }
                    ]
                },
                "DisplacementResetTime": 0.25,
                "DisplacementGraphLoopStart": 13,
                "DisplacementHipFireMultiplier": 2.2
            },
            "ViewKickBack": {
                "SpeedDeflect": 100,
                "SpeedRecover": 45,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 4,
                "MaxDistance": 8
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 100,
                "SpeedRecover": 65,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 4,
                "MaxDistance": 8
            },
            "GunKickXY": {
                "SpeedDeflect": 8.5,
                "SpeedRecover": 6,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.212118,
                                "Value": 1.2,
                                "ArriveTangent": 2.049062,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.049062,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.964013,
                                "Value": 2.675322,
                                "ArriveTangent": 0.632712,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.632712,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.987456,
                                "Value": 4.221411,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 1.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 2.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.04,
                    "Max": 0.3
                },
                "VerticalBottom": {
                    "Min": 0.04,
                    "Max": 0.1
                },
                "VerticalMultiplier": {
                    "Start": 0.4,
                    "Increment": 0.15
                },
                "HorizontalRight": {
                    "Min": 0.2,
                    "Max": 0.5
                },
                "HorizontalLeft": {
                    "Min": 0.2,
                    "Max": 0.5
                },
                "HorizontalMultiplier": {
                    "Start": 0.45,
                    "Increment": 0.12,
                    "Max": 1.5,
                    "Threshold": 1.2
                }
            },
            "GunKickBackAlpha": 0.75,
            "GunKickBack": {
                "SpeedDeflect": 40,
                "SpeedRecover": 5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.1,
                                "ArriveTangent": 0.118719,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.76846,
                                "Value": 0.3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.238401,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.30887,
                                "Value": 0.513362,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2.5,
                "MaxDistance": 4
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 30,
                "SpeedRecover": 5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.0019390583,
                                "Value": 0.08728254,
                                "ArriveTangent": 0.056842294,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.056842294,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.4414382,
                                "Value": 0.2261697,
                                "ArriveTangent": 0.24520373,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.24520373,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.0144625,
                                "Value": 1.0721191,
                                "ArriveTangent": 0.53778535,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.53778535,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.0032818317,
                                "Value": 1.0193218,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.4866493,
                                "Value": 0.2042619,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.000743,
                                "Value": 0.2387011,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 1.8,
                "MaxDistance": 4
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.1,
            "FireSpreadIncrease": 0.3,
            "FireSpreadDecayRate": 0,
            "FireSpreadCap": 3,
            "SpreadStanceMultipliers": {
                "StandMove": {
                    "Spread": 1.5
                },
                "Crouch": {
                    "Spread": 0.5
                },
                "Target": {
                    "Spread": 0.25
                },
                "TargetMove": {
                    "Spread": 0.5
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 20,
                "SpeedRecover": 15,
                "RecoverWaitTime": 0.2,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0.0141,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.0141,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 1,
                                "ArriveTangent": 0.003058,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.003039,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.8,
                                "Value": 0.7,
                                "ArriveTangent": -0.064537,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.064537,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8.198006,
                                "Value": 0.5,
                                "ArriveTangent": 0.017092,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058858,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.0045078993,
                                "Value": 0.11225875,
                                "ArriveTangent": 0.12527719,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.12527719,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.7937221,
                                "Value": 0.21225876,
                                "ArriveTangent": 0.176986,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.176983,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5212044,
                                "Value": 0.8172591,
                                "ArriveTangent": 1.301766,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.301765,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.4964023,
                                "Value": 1.2636924,
                                "ArriveTangent": 2.206815,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.206819,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0.6264844,
                            "Y": 0.56953126
                        },
                        {
                            "X": 0.47460938,
                            "Y": 1.5187501
                        },
                        {
                            "X": 0.18984376,
                            "Y": 3.7399216
                        },
                        {
                            "X": -0.6644531,
                            "Y": 5.6953125
                        },
                        {
                            "X": -0.037968747,
                            "Y": 7.59375
                        },
                        {
                            "X": 0.9302343,
                            "Y": 9.757969
                        },
                        {
                            "X": 0.7214063,
                            "Y": 12.11203
                        },
                        {
                            "X": 0.28476563,
                            "Y": 13.668749
                        },
                        {
                            "X": -0.8732813,
                            "Y": 15.1875
                        },
                        {
                            "X": -0.30374998,
                            "Y": 17.01
                        },
                        {
                            "X": 0.1708594,
                            "Y": 18.680624
                        },
                        {
                            "X": -0.28476563,
                            "Y": 20.579062
                        },
                        {
                            "X": -0.05695312,
                            "Y": 22.572424
                        },
                        {
                            "X": 0.26578125,
                            "Y": 24.489841
                        },
                        {
                            "X": -0.075937495,
                            "Y": 26.027578
                        },
                        {
                            "X": -0.39867187,
                            "Y": 27.603281
                        },
                        {
                            "X": 0.28476563,
                            "Y": 29.463753
                        },
                        {
                            "X": 0.81632805,
                            "Y": 31.001484
                        },
                        {
                            "X": -0.3227344,
                            "Y": 33.37453
                        },
                        {
                            "X": -0.09492188,
                            "Y": 35.064137
                        }
                    ]
                },
                "DisplacementResetTime": 0.25,
                "DisplacementHipFireMultiplier": 1.5
            },
            "ViewKickBack": {
                "SpeedDeflect": 140,
                "SpeedRecover": 10,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 4,
                "MaxDistance": 9
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 140,
                "SpeedRecover": 10,
                "Distance": 4,
                "MaxDistance": 9
            },
            "GunKickXY": {
                "SpeedDeflect": 50,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.8,
                                "Value": 5,
                                "ArriveTangent": -1.3333334,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.3333334,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 3,
                                "ArriveTangent": -0.952381,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.952381,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 4,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Max": 0.3
                },
                "HorizontalRight": {
                    "Min": 0.2,
                    "Max": 0.8
                },
                "HorizontalLeft": {
                    "Min": 0.2,
                    "Max": 0.8
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 60,
                "SpeedRecover": 10,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 2.4,
                                "ArriveTangent": 0.40875977,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.40875918,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 3,
                "MaxDistance": 9
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 60,
                "SpeedRecover": 10,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 2.4,
                                "ArriveTangent": 0.40876,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.408759,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 3,
                "MaxDistance": 9
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.2,
            "FireSpreadIncrease": 0.1,
            "FireSpreadResetTime": 0.2,
            "FireSpreadCap": 1,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Start": 4,
                    "Cap": 2,
                    "Increment": 1.5
                },
                "StandMove": {
                    "Spread": 1.5,
                    "Start": 4,
                    "Cap": 3,
                    "Increment": 1.5
                },
                "Crouch": {
                    "Spread": 0.5,
                    "Start": 0.33
                },
                "CrouchMove": {
                    "Start": 0.33
                },
                "Target": {
                    "Spread": 0,
                    "Start": 0.33
                },
                "TargetMove": {
                    "Spread": 0.25,
                    "Start": 0.33
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 35,
                "SpeedRecover": 25,
                "RecoverWaitTime": 0.075,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.889147,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.280459,
                                "Value": 0.367716,
                                "ArriveTangent": 0.950421,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.757439,
                                "Value": 0.186427,
                                "ArriveTangent": -0.380077,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.380077,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.856363,
                                "Value": 0.186427,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.008968,
                                "Value": 0.237833,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.066324,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.959029,
                                "Value": 0.429528,
                                "ArriveTangent": 0.204268,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058875,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.996253,
                                "Value": 1.579704,
                                "ArriveTangent": 0.910426,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 9.079855,
                                "Value": 1.589234,
                                "ArriveTangent": 0.001875,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.001875,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": -0.1,
                            "Y": 0.1
                        },
                        {
                            "X": 0,
                            "Y": 0.43
                        },
                        {
                            "X": -0.25,
                            "Y": 0.55
                        },
                        {
                            "X": -0.35,
                            "Y": 0.91
                        },
                        {
                            "X": -0.65,
                            "Y": 1
                        },
                        {
                            "X": -0.5,
                            "Y": 1.39
                        },
                        {
                            "X": -0.2,
                            "Y": 1.5
                        },
                        {
                            "X": -0.1,
                            "Y": 1.9
                        },
                        {
                            "X": 0.15,
                            "Y": 2.4
                        },
                        {
                            "X": 0.45,
                            "Y": 2.25
                        },
                        {
                            "X": 0.55,
                            "Y": 2.59
                        },
                        {
                            "X": 0.8,
                            "Y": 2.8
                        },
                        {
                            "X": 0.65,
                            "Y": 3.3
                        },
                        {
                            "X": 0.55,
                            "Y": 3.7
                        },
                        {
                            "X": 0.3,
                            "Y": 3.6
                        },
                        {
                            "X": 0.25,
                            "Y": 4
                        },
                        {
                            "X": 0.05,
                            "Y": 4.2
                        },
                        {
                            "X": 0.2,
                            "Y": 4.4
                        },
                        {
                            "X": 0,
                            "Y": 4.7
                        },
                        {
                            "X": 0.1,
                            "Y": 5
                        }
                    ]
                },
                "DisplacementResetTime": 0.15,
                "DisplacementGraphLoopStart": 14,
                "DisplacementHipFireMultiplier": 1.7
            },
            "ViewKickBack": {
                "SpeedDeflect": 55,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2,
                "MaxDistance": 6
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 55,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2,
                "MaxDistance": 6
            },
            "GunKickXY": {
                "SpeedDeflect": 12,
                "SpeedRecover": 8,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.212118,
                                "Value": 1.2,
                                "ArriveTangent": 2.049062,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.049062,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.964013,
                                "Value": 2.675322,
                                "ArriveTangent": 0.705589,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.705589,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.154039,
                                "Value": 3.981377,
                                "ArriveTangent": -0.151616,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.151616,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6.471089,
                                "Value": 1.84036,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 1.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 2.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.06,
                    "Max": 0.3
                },
                "VerticalBottom": {
                    "Min": 0.06,
                    "Max": 0.3
                },
                "VerticalMultiplier": {
                    "Start": 0.4,
                    "Increment": 0.15
                },
                "HorizontalRight": {
                    "Min": 0.3,
                    "Max": 0.6
                },
                "HorizontalLeft": {
                    "Min": 0.3,
                    "Max": 0.6
                },
                "HorizontalMultiplier": {
                    "Start": 0.12,
                    "Increment": 0.24,
                    "Max": 1.5,
                    "Threshold": 1.2
                }
            },
            "GunKickBackAlpha": 0.75,
            "GunKickBack": {
                "SpeedDeflect": 40,
                "SpeedRecover": 7,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.5,
                                "ArriveTangent": 0.053072073,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.053072073,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.76846,
                                "Value": 0.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0.4100938,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.4100938,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.30887,
                                "Value": 0.513362,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 3,
                "MaxDistance": 5
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 40,
                "SpeedRecover": 5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.018538,
                                "Value": 0.564839,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.275734,
                                "Value": 0.577226,
                                "ArriveTangent": 0.160285,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.000535,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0.490687,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.490688,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.003402,
                                "Value": 0.784548,
                                "ArriveTangent": 0.013748,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.16352,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5.999107,
                                "Value": 0.2,
                                "ArriveTangent": 0.019804,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.019804,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2,
                "MaxDistance": 4
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.25,
            "FireSpreadIncrease": 0.35,
            "FireSpreadResetTime": 0.3,
            "FireSpreadDecayRate": 0.3,
            "FireSpreadCap": 3,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "TasedSpread": 4,
                    "Start": 3,
                    "Cap": 2,
                    "Increment": 1.5
                },
                "StandMove": {
                    "Spread": 1.45,
                    "TasedSpread": 4,
                    "Start": 3,
                    "Cap": 3,
                    "Increment": 1.5
                },
                "Crouch": {
                    "Spread": 0.45,
                    "TasedSpread": 4,
                    "Start": 0.3,
                    "Cap": 2
                },
                "CrouchMove": {
                    "Spread": 0.95,
                    "TasedSpread": 4,
                    "Start": 0.3,
                    "Cap": 2
                },
                "Target": {
                    "Spread": 0,
                    "TasedSpread": 4,
                    "Start": 0.33
                },
                "TargetMove": {
                    "Spread": 0.25,
                    "TasedSpread": 4,
                    "Start": 0.33
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 20,
                "SpeedRecover": 5,
                "RecoverWaitTime": 0.075,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.031268597,
                                "Value": 1.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5446911,
                                "Value": 1.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.752279,
                                "Value": 0.890962,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.280459,
                                "Value": 0.367716,
                                "ArriveTangent": -0.96767735,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.93321157,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.757439,
                                "Value": 0.186427,
                                "ArriveTangent": 0.81695795,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.81695795,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.0938375,
                                "Value": 1.032212,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.9638565,
                                "Value": 1.6584123,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.008968,
                                "Value": 0.237833,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.066324,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.959029,
                                "Value": 0.429528,
                                "ArriveTangent": 0.204268,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058875,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.866273,
                                "Value": 1.4446285,
                                "ArriveTangent": 0.910426,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 9.079855,
                                "Value": 1.589234,
                                "ArriveTangent": 0.034318905,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.034318905,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0.1,
                            "Y": 0.1
                        },
                        {
                            "X": 0.3,
                            "Y": 0.389
                        },
                        {
                            "X": 0.25,
                            "Y": 0.8
                        },
                        {
                            "X": 0.5,
                            "Y": 1.1
                        },
                        {
                            "X": 0.65,
                            "Y": 1.6
                        },
                        {
                            "X": 1,
                            "Y": 1.6
                        },
                        {
                            "X": 1.1,
                            "Y": 2.1
                        },
                        {
                            "X": 1.35,
                            "Y": 2.4
                        },
                        {
                            "X": 1.05,
                            "Y": 2.7
                        },
                        {
                            "X": 1.2,
                            "Y": 3.1
                        },
                        {
                            "X": 0.9,
                            "Y": 3.25
                        },
                        {
                            "X": 0.6,
                            "Y": 3.6
                        },
                        {
                            "X": 0.6,
                            "Y": 4
                        },
                        {
                            "X": 0.8,
                            "Y": 4.3
                        },
                        {
                            "X": 0.7,
                            "Y": 4.7
                        },
                        {
                            "X": 1.05,
                            "Y": 5
                        },
                        {
                            "X": 1.35,
                            "Y": 5.4
                        },
                        {
                            "X": 1.1,
                            "Y": 5.8
                        },
                        {
                            "X": 1.4,
                            "Y": 6.2
                        },
                        {
                            "X": 1.2,
                            "Y": 6.7
                        }
                    ]
                },
                "DisplacementResetTime": 0.25,
                "DisplacementGraphLoopStart": 12,
                "DisplacementHipFireMultiplier": 1.5
            },
            "ViewKickBack": {
                "SpeedDeflect": 65,
                "SpeedRecover": 34,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 4,
                "MaxDistance": 6
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 65,
                "SpeedRecover": 35,
                "Distance": 4,
                "MaxDistance": 6
            },
            "GunKickXY": {
                "SpeedRecover": 7,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.212118,
                                "Value": 1.2,
                                "ArriveTangent": 2.049062,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.049062,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.964013,
                                "Value": 2.675322,
                                "ArriveTangent": 0.632712,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.632712,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.987456,
                                "Value": 4.221411,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 1.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 2.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.06,
                    "Max": 0.45
                },
                "VerticalBottom": {
                    "Min": 0.04,
                    "Max": 0.1
                },
                "VerticalMultiplier": {
                    "Start": 0.4,
                    "Increment": 0.15
                },
                "HorizontalRight": {
                    "Min": 0.2,
                    "Max": 0.5
                },
                "HorizontalLeft": {
                    "Min": 0.2,
                    "Max": 0.5
                },
                "HorizontalMultiplier": {
                    "Start": 0.25,
                    "Increment": 0.2,
                    "Max": 1.5,
                    "Threshold": 1.2
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 40,
                "SpeedRecover": 7,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.009777218,
                                "Value": 0.2429018,
                                "ArriveTangent": 0.048585337,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.048585337,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.5487418,
                                "Value": 0.4148436,
                                "ArriveTangent": 0.19999999,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.19999999,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0.6151395,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.6151395,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": -0.28114763,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.28114763,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.207201,
                                "Value": 0.37945068,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2,
                "MaxDistance": 3.5
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 40,
                "SpeedRecover": 5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.01853776,
                                "Value": 0.56483895,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2757343,
                                "Value": 0.57722634,
                                "ArriveTangent": 0.160285,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.00053537695,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0.4906866,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.49068764,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.003401637,
                                "Value": 0.7845484,
                                "ArriveTangent": 0.013747798,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.16352001,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5.9991074,
                                "Value": 0.2,
                                "ArriveTangent": 0.019803932,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.019804236,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2.2,
                "MaxDistance": 3.5
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.1,
            "FireSpreadIncrease": 0.3,
            "FireSpreadDecayRate": 12,
            "FireSpreadCap": 2.5,
            "SpreadRecoveryMode": "ESBZWeaponSpreadRecoveryMode::DecayRate",
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Spread": 3,
                    "Start": 2
                },
                "StandMove": {
                    "Spread": 5,
                    "Start": 4
                },
                "Crouch": {
                    "Spread": 2,
                    "Start": 2
                },
                "CrouchMove": {
                    "Spread": 3,
                    "Start": 4
                },
                "Target": {
                    "Spread": 0.25
                },
                "TargetMove": {
                    "Spread": 0.5
                }
            },
            "DeviationHipFireMultiplier": 1.2
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 25,
                "SpeedRecover": 25,
                "RecoverWaitTime": 0.12,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0.0141,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.0141,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 1,
                                "ArriveTangent": 0.003058,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.003039,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.8,
                                "Value": 0.7,
                                "ArriveTangent": -0.064537,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.064537,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8.198006,
                                "Value": 0.5,
                                "ArriveTangent": 0.017092,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058858,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0.12527719,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.12527719,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.79823,
                                "Value": 0.3,
                                "ArriveTangent": 0.176986,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.176983,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.0937185,
                                "Value": 0.882828,
                                "ArriveTangent": 1.301766,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.301765,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.9230132,
                                "Value": 1.2375119,
                                "ArriveTangent": -0.07384885,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.07384885,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0.05544,
                            "Y": 0.238392
                        },
                        {
                            "X": 0.11088,
                            "Y": 0.66528
                        },
                        {
                            "X": 0.05544,
                            "Y": 1.27512
                        },
                        {
                            "X": 0.16632,
                            "Y": 1.77408
                        },
                        {
                            "X": 0.38808,
                            "Y": 2.001384
                        },
                        {
                            "X": 0.44352,
                            "Y": 2.71656
                        },
                        {
                            "X": 0.50984,
                            "Y": 3.21552
                        },
                        {
                            "X": 0.44352,
                            "Y": 3.6036
                        },
                        {
                            "X": 0.50212,
                            "Y": 4.047121
                        },
                        {
                            "X": 0.4158,
                            "Y": 4.37976
                        },
                        {
                            "X": 0.35124,
                            "Y": 4.93416
                        },
                        {
                            "X": 0.2772,
                            "Y": 5.100481
                        },
                        {
                            "X": 0.16632,
                            "Y": 5.710321
                        },
                        {
                            "X": -0.02772,
                            "Y": 5.544
                        },
                        {
                            "X": -0.1386,
                            "Y": 5.98752
                        },
                        {
                            "X": -0.30492,
                            "Y": 5.93208
                        },
                        {
                            "X": -0.35492,
                            "Y": 6.3736
                        },
                        {
                            "X": -0.49896,
                            "Y": 6.6528
                        },
                        {
                            "X": -0.49896,
                            "Y": 7.04088
                        },
                        {
                            "X": -0.60984,
                            "Y": 7.595281
                        }
                    ]
                },
                "DisplacementResetTime": 0.25,
                "DisplacementGraphLoopStart": 10,
                "DisplacementGraphInitialNum": 0,
                "DisplacementHipFireMultiplier": 1.5
            },
            "ViewKickBack": {
                "SpeedDeflect": 15,
                "SpeedRecover": 5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 0.4,
                "MaxDistance": 4.5
            },
            "GunKickXY": {
                "SpeedDeflect": 40,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.016153,
                                "Value": 0.923087,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.212118,
                                "Value": 0.923087,
                                "ArriveTangent": 1.848622,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.848622,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.964013,
                                "Value": 2.675322,
                                "ArriveTangent": 0.6907,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.6907,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.987456,
                                "Value": 4.221411,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 1.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.1,
                    "Max": 0.2
                },
                "VerticalBottom": {
                    "Max": 0.1
                },
                "HorizontalRight": {
                    "Min": 0.3,
                    "Max": 0.6
                },
                "HorizontalLeft": {
                    "Min": 0.3,
                    "Max": 0.6
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 60,
                "SpeedRecover": 30,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": -1.8103251,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.8103251,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.9222137,
                                "Value": 1.3304935,
                                "ArriveTangent": 0.40875977,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.40875918,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": -0.4922065,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.4922065,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 1.5,
                "MaxDistance": 3
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 60,
                "SpeedRecover": 45,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": -1.8979994,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.8979994,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.9306154,
                                "Value": 1.2336925,
                                "ArriveTangent": 0.40876,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.408759,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": -0.40555337,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.40555337,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 1.5,
                "MaxDistance": 2
            }
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
        "SpreadData": {
            "InnerClusterSpreadMultiplier": 1,
            "FireSpreadIncrease": 0.2,
            "FireSpreadResetTime": 0.3,
            "FireSpreadDecayRate": 0,
            "FireSpreadCap": 3,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Spread": 1.5
                },
                "StandMove": {
                    "Spread": 1.5,
                    "Cap": 1.5,
                    "Increment": 1.2
                },
                "CrouchMove": {
                    "Cap": 1.25,
                    "Increment": 1.1
                },
                "Target": {
                    "Start": 0.6,
                    "Cap": 0.7,
                    "Increment": 0.7
                },
                "TargetMove": {
                    "Start": 0.6,
                    "Cap": 0.7,
                    "Increment": 0.7
                }
            },
            "ShotgunPatterns": [
                {
                    "PelletSpreadAngles": [
                        {
                            "X": 0.2,
                            "Y": -0.9
                        },
                        {
                            "X": -1.5,
                            "Y": 0.9
                        },
                        {
                            "X": 0.1,
                            "Y": 0.5
                        },
                        {
                            "X": 1.6,
                            "Y": -1
                        },
                        {
                            "X": -2,
                            "Y": -1.5
                        },
                        {
                            "X": -1,
                            "Y": -0.4
                        },
                        {
                            "X": 1.4,
                            "Y": 1
                        }
                    ]
                },
                {
                    "PelletSpreadAngles": [
                        {
                            "X": 0.3,
                            "Y": -1.2
                        },
                        {
                            "X": -1.3,
                            "Y": 0.6
                        },
                        {
                            "X": 0.3,
                            "Y": 0.3
                        },
                        {
                            "X": 1.4,
                            "Y": -0.7
                        },
                        {
                            "X": -1.7,
                            "Y": -1.3
                        },
                        {
                            "X": -0.6,
                            "Y": -0.6
                        },
                        {
                            "X": 0.9,
                            "Y": 0.8
                        }
                    ]
                }
            ],
            "DeviationHipFireMultiplier": 0.4,
            "DeviationTargetingFireMultiplier": 0.2
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 35,
                "SpeedRecover": 35,
                "RecoverWaitTime": 0.25,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.7070618,
                                "Value": 1.7086337,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 25.446053,
                                "Value": 0,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.9,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.9960003,
                                "Value": 0.7,
                                "ArriveTangent": -0.0625,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.07592319,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8.336462,
                                "Value": 0.49824005,
                                "ArriveTangent": 0.0000031984857,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.0006279469,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 12.336462,
                                "Value": 0.49824005,
                                "ArriveTangent": -0.0053985533,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.0048140506,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 26.779083,
                                "Value": 0.3163734,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0,
                            "Y": 2
                        },
                        {
                            "X": 1,
                            "Y": 4
                        },
                        {
                            "X": 0.25,
                            "Y": 6
                        },
                        {
                            "X": -0.5,
                            "Y": 8
                        },
                        {
                            "X": 0,
                            "Y": 10
                        },
                        {
                            "X": -0.75,
                            "Y": 11
                        },
                        {
                            "X": 0,
                            "Y": 12
                        },
                        {
                            "X": 1,
                            "Y": 13
                        },
                        {
                            "X": 2,
                            "Y": 14
                        }
                    ]
                },
                "DisplacementResetTime": 25,
                "DisplacementGraphLoopStart": 5,
                "DisplacementGraphInitialNum": 0,
                "DisplacementHipFireMultiplier": 1.2
            },
            "ViewKickBack": {
                "SpeedDeflect": 200,
                "SpeedRecover": 50,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 6,
                "MaxDistance": 10
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 200,
                "SpeedRecover": 50,
                "Distance": 6,
                "MaxDistance": 10
            },
            "GunKickXY": {
                "SpeedDeflect": 50,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.8,
                                "Value": 5,
                                "ArriveTangent": -1.3333334,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.3333334,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 3,
                                "ArriveTangent": -0.952381,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.952381,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 4,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.1,
                    "Max": 0.3
                },
                "VerticalBottom": {
                    "Min": 0.1,
                    "Max": 0.2
                },
                "HorizontalRight": {
                    "Min": 0.2,
                    "Max": 0.3
                },
                "HorizontalLeft": {
                    "Min": 0.2,
                    "Max": 0.3
                }
            },
            "GunKickBackAlpha": 1,
            "GunKickBack": {
                "SpeedDeflect": 95,
                "SpeedRecover": 2.5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0,
                                "ArriveTangent": 0.03547334,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.035473924,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4,
                                "Value": 0.7853372,
                                "ArriveTangent": 0.9742559,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.7424519,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5.8796515,
                                "Value": 1.0418255,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.94929665,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8,
                                "Value": 2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -3.5701387,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 0.4,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4,
                                "Value": 0.4,
                                "ArriveTangent": -0.1768142,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.5660455,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8.041909,
                                "Value": 0.073456526,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 1,
                "MaxDistance": 2
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 95,
                "SpeedRecover": 2.5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0,
                                "ArriveTangent": 0.035473,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.035474,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4,
                                "Value": 0.785337,
                                "ArriveTangent": 0.974256,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.742452,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5.879652,
                                "Value": 1.041826,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.949297,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8,
                                "Value": 2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -3.570139,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 0.4,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4,
                                "Value": 0.4,
                                "ArriveTangent": -0.176814,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.566046,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8.041909,
                                "Value": 0.073457,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 5,
                "MaxDistance": 8
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.25,
            "FireSpreadResetTime": 0.45,
            "FireSpreadDecayRate": 0.45,
            "FireSpreadCap": 3.5,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Spread": 1.15,
                    "Start": 4,
                    "Cap": 2,
                    "Increment": 1.2
                },
                "StandMove": {
                    "Spread": 1.35,
                    "Start": 3.5,
                    "Cap": 3,
                    "Increment": 1.2
                },
                "Crouch": {
                    "Spread": 0.65,
                    "Start": 0.33
                },
                "CrouchMove": {
                    "Spread": 1.15,
                    "Start": 0.33
                },
                "Target": {
                    "Spread": 0,
                    "Start": 0.33
                },
                "TargetMove": {
                    "Spread": 0.2,
                    "Start": 0.33
                }
            },
            "DeviationHipFireMultiplier": 1
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 45,
                "SpeedRecover": 17,
                "RecoverWaitTime": 0.075,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.015420675,
                                "Value": 0.9596847,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.3214996,
                                "Value": 0.56782335,
                                "ArriveTangent": -0.3191943,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.49365512,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.8354464,
                                "Value": 0.22100353,
                                "ArriveTangent": -0.40051532,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.028036147,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6.039893,
                                "Value": 0.9247358,
                                "ArriveTangent": 0.7323292,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.73232627,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.015253782,
                                "Value": 0.37921357,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.06632396,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.984137,
                                "Value": 0.4762547,
                                "ArriveTangent": 0.20426764,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.05887528,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5.930632,
                                "Value": 1.6320412,
                                "ArriveTangent": 0.91042584,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 9.079855,
                                "Value": 1.5892344,
                                "ArriveTangent": -0.013592834,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.013592834,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": -0.1,
                            "Y": 0.2
                        },
                        {
                            "X": -0.3,
                            "Y": 0.7
                        },
                        {
                            "X": -0.2,
                            "Y": 1.25
                        },
                        {
                            "X": 0.05,
                            "Y": 2.2
                        },
                        {
                            "X": 0.4,
                            "Y": 2.8
                        },
                        {
                            "X": 1,
                            "Y": 3.3
                        },
                        {
                            "X": 0.8,
                            "Y": 4
                        },
                        {
                            "X": 1.15,
                            "Y": 4.7
                        },
                        {
                            "X": 1.5,
                            "Y": 5.2
                        },
                        {
                            "X": 1,
                            "Y": 5.7
                        },
                        {
                            "X": 1.4,
                            "Y": 6.2
                        },
                        {
                            "X": 0.85,
                            "Y": 6.6
                        },
                        {
                            "X": 1.2,
                            "Y": 7.4
                        },
                        {
                            "X": 1.5,
                            "Y": 6.9
                        },
                        {
                            "X": 2,
                            "Y": 7.1
                        },
                        {
                            "X": 1.8,
                            "Y": 8
                        },
                        {
                            "X": 2.3,
                            "Y": 7.5
                        },
                        {
                            "X": 2.4,
                            "Y": 8.5
                        },
                        {
                            "X": 2.9,
                            "Y": 7.9
                        },
                        {
                            "X": 3.1,
                            "Y": 9.1
                        },
                        {
                            "X": 3.5,
                            "Y": 9.2
                        }
                    ]
                },
                "DisplacementResetTime": 0.35,
                "DisplacementGraphLoopStart": 14,
                "DisplacementHipFireMultiplier": 1.7
            },
            "ViewKickBack": {
                "SpeedDeflect": 100,
                "SpeedRecover": 45,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 5,
                "MaxDistance": 10
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 100,
                "SpeedRecover": 45,
                "Distance": 5,
                "MaxDistance": 10
            },
            "GunKickXY": {
                "SpeedDeflect": 12,
                "SpeedRecover": 6,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.212118,
                                "Value": 1.2,
                                "ArriveTangent": 2.049062,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.049062,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.964013,
                                "Value": 2.675322,
                                "ArriveTangent": 0.632712,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.632712,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.987456,
                                "Value": 4.221411,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 1.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 2.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.06,
                    "Max": 0.4
                },
                "VerticalBottom": {
                    "Min": 0.04,
                    "Max": 0.1
                },
                "VerticalMultiplier": {
                    "Start": 0.6,
                    "Increment": 0.15,
                    "Max": 1.2,
                    "Threshold": 1.2
                },
                "HorizontalRight": {
                    "Min": 0.3,
                    "Max": 0.6
                },
                "HorizontalLeft": {
                    "Min": 0.3,
                    "Max": 0.6
                },
                "HorizontalMultiplier": {
                    "Start": 0.55,
                    "Increment": 0.24,
                    "Max": 1.75,
                    "Threshold": 1.5
                }
            },
            "GunKickBackAlpha": 0.75,
            "GunKickBack": {
                "SpeedDeflect": 40,
                "SpeedRecover": 5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.1,
                                "ArriveTangent": 0.31406593,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.31406593,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.5613086,
                                "Value": 0.90441984,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0.04930138,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.04930138,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": -0.32229695,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.32229695,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.0020206,
                                "Value": 0.35475487,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 3,
                "MaxDistance": 5
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 40,
                "SpeedRecover": 15,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.018788576,
                                "Value": 0.37020898,
                                "ArriveTangent": 0.13568804,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.13568804,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.1862826,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.00939846,
                                "Value": 1,
                                "ArriveTangent": -0.056360703,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.056360703,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.9921906,
                                "Value": 0.77446765,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5.9797935,
                                "Value": 0.77446765,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2.2,
                "MaxDistance": 5
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.5,
            "FireSpreadIncrease": 0.45,
            "FireSpreadResetTime": 0.2,
            "FireSpreadCap": 5,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "TasedSpread": 4
                },
                "StandMove": {
                    "TasedSpread": 4,
                    "Start": 1.5,
                    "Cap": 1.5,
                    "Increment": 1.5
                },
                "Crouch": {
                    "TasedSpread": 4,
                    "Start": 0.5,
                    "Cap": 0.5,
                    "Increment": 0.5
                },
                "CrouchMove": {
                    "TasedSpread": 4,
                    "Start": 0.75,
                    "Cap": 0.75,
                    "Increment": 0.75
                },
                "Target": {
                    "Spread": 0
                },
                "TargetMove": {
                    "TasedSpread": 4,
                    "Start": 0.25,
                    "Cap": 0.25,
                    "Increment": 0.25
                }
            },
            "DeviationHipFireMultiplier": 1
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 50,
                "SpeedRecover": 30,
                "RecoverWaitTime": 0.075,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.033674,
                                "Value": 0.370784,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.137952,
                                "Value": 0.341251,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.748889,
                                "Value": 1.8099401,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.008968,
                                "Value": 0.237833,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.066324,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.959029,
                                "Value": 0.429528,
                                "ArriveTangent": 0.204268,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058875,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.996253,
                                "Value": 1.579704,
                                "ArriveTangent": 0.910426,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 9.079855,
                                "Value": 1.589234,
                                "ArriveTangent": 0.001875,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.001875,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0.017638408,
                            "Y": 0.3746248
                        },
                        {
                            "X": -0.42788485,
                            "Y": 1.0628983
                        },
                        {
                            "X": -0.7816825,
                            "Y": 1.6746969
                        },
                        {
                            "X": -0.9127189,
                            "Y": 2.4776826
                        },
                        {
                            "X": -1.0044441,
                            "Y": 3.1787019
                        },
                        {
                            "X": -1.0961697,
                            "Y": 4.0964
                        },
                        {
                            "X": -1.1485841,
                            "Y": 4.9886084
                        },
                        {
                            "X": -1.1092734,
                            "Y": 5.651391
                        },
                        {
                            "X": -0.9520299,
                            "Y": 6.479869
                        },
                        {
                            "X": -0.7947879,
                            "Y": 7.1426525
                        },
                        {
                            "X": -0.689959,
                            "Y": 7.8819113
                        },
                        {
                            "X": -0.5458191,
                            "Y": 8.366253
                        },
                        {
                            "X": -0.24443582,
                            "Y": 8.799611
                        },
                        {
                            "X": 0.05694749,
                            "Y": 9.334938
                        },
                        {
                            "X": 0.410745,
                            "Y": 9.832027
                        },
                        {
                            "X": 0.7645427,
                            "Y": 10.329114
                        },
                        {
                            "X": 1.0528224,
                            "Y": 11.030134
                        },
                        {
                            "X": 1.1445477,
                            "Y": 11.769394
                        },
                        {
                            "X": 1.1707546,
                            "Y": 12.534145
                        },
                        {
                            "X": 1.07903,
                            "Y": 13.477344
                        },
                        {
                            "X": 0.93489015,
                            "Y": 14.573484
                        },
                        {
                            "X": 0.77764696,
                            "Y": 15.529424
                        },
                        {
                            "X": 0.47626358,
                            "Y": 16.204952
                        },
                        {
                            "X": 0.04384396,
                            "Y": 16.867737
                        },
                        {
                            "X": -0.13960646,
                            "Y": 17.581507
                        },
                        {
                            "X": -0.4540934,
                            "Y": 18.2188
                        },
                        {
                            "X": -0.5720255,
                            "Y": 19.047283
                        },
                        {
                            "X": -0.42788553,
                            "Y": 19.595352
                        },
                        {
                            "X": -0.15270948,
                            "Y": 20.181662
                        },
                        {
                            "X": 0.25350296,
                            "Y": 20.780714
                        },
                        {
                            "X": 0.5155755,
                            "Y": 21.418005
                        },
                        {
                            "X": 0.5602629,
                            "Y": 22.505444
                        },
                        {
                            "X": 0.07551156,
                            "Y": 23.681309
                        },
                        {
                            "X": 0.10016039,
                            "Y": 24.975986
                        },
                        {
                            "X": -0.047730982,
                            "Y": 26.078865
                        },
                        {
                            "X": -0.04773058,
                            "Y": 27.253675
                        },
                        {
                            "X": -0.09702784,
                            "Y": 28.380527
                        },
                        {
                            "X": 0.10016039,
                            "Y": 29.075817
                        },
                        {
                            "X": -0.14632389,
                            "Y": 29.938942
                        },
                        {
                            "X": 0.07551277,
                            "Y": 31.089771
                        }
                    ]
                },
                "DisplacementResetTime": 0.2,
                "DisplacementGraphLoopStart": 32,
                "DisplacementGraphInitialNum": 0,
                "DisplacementHipFireMultiplier": 1.5
            },
            "ViewKickBack": {
                "SpeedDeflect": 150,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 5,
                "MaxDistance": 10
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 100,
                "SpeedRecover": 45,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 5,
                "MaxDistance": 10
            },
            "GunKickXY": {
                "SpeedDeflect": 15,
                "SpeedRecover": 7.5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.008281708,
                                "Value": 1.0218939,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.55409825,
                                "Value": 1.2983181,
                                "ArriveTangent": 1.3242385,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.3242385,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.1112393,
                                "Value": 2.5044067,
                                "ArriveTangent": 1.3481096,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.64104724,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.4303321,
                                "Value": 3.7776928,
                                "ArriveTangent": 0.42535275,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.4253532,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 3.171802,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 3.171802,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.49603248,
                                "Value": 1.7733169,
                                "ArriveTangent": 2.5005236,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.5005236,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.9424007,
                                "Value": 2.8563905,
                                "ArriveTangent": 2.3156486,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.3156486,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2991395,
                                "Value": 3.6330304,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.1,
                    "Max": 0.4
                },
                "VerticalBottom": {
                    "Min": 0.1,
                    "Max": 0.4
                },
                "VerticalMultiplier": {
                    "Start": 0.3,
                    "Increment": 0.25,
                    "Max": 1.2,
                    "Threshold": 1.2
                },
                "HorizontalRight": {
                    "Min": 0.1,
                    "Max": 0.3
                },
                "HorizontalLeft": {
                    "Min": 0.1,
                    "Max": 0.3
                },
                "HorizontalMultiplier": {
                    "Start": 0.3,
                    "Increment": 0.36,
                    "Max": 1.2,
                    "Threshold": 1.2
                }
            },
            "GunKickBackAlpha": 1,
            "GunKickBack": {
                "SpeedDeflect": 40,
                "SpeedRecover": 8,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.1,
                                "ArriveTangent": 0.3261081,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.3261081,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.2607715,
                                "Value": 0.83725595,
                                "ArriveTangent": 0.19999999,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.19999999,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0.072678626,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.072678626,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": -0.2746576,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.2746576,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.5678601,
                                "Value": 0.29471767,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 3.5,
                "MaxDistance": 5
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 40,
                "SpeedRecover": 10,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.0047700405,
                                "Value": 0.11699188,
                                "ArriveTangent": 0.40916434,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.40916434,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.162847,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.00037670135,
                                "Value": 0.7555107,
                                "ArriveTangent": -0.21268481,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.21268481,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.4907727,
                                "Value": 0.22584128,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2.6,
                "MaxDistance": 5
            }
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
        "SpreadData": {
            "InnerClusterSpreadMultiplier": 1,
            "FireSpreadStart": 0.5,
            "FireSpreadIncrease": 0,
            "FireSpreadResetTime": 1.1,
            "FireSpreadDecayRate": 0,
            "FireSpreadCap": 3,
            "SpreadStanceMultipliers": {
                "StandMove": {
                    "Spread": 1.1
                },
                "Crouch": {
                    "Spread": 0.8
                },
                "CrouchMove": {
                    "Spread": 0.9
                },
                "Target": {
                    "Spread": 0.6,
                    "Start": 0.6,
                    "Cap": 0.7,
                    "Increment": 0.7
                },
                "TargetMove": {
                    "Spread": 0.7,
                    "Start": 0.6,
                    "Cap": 0.7,
                    "Increment": 0.7
                }
            },
            "SpreadRadiusMultipliers": {
                "X": 0.4,
                "Y": 0.4
            },
            "ShotgunPatterns": [
                {
                    "PelletSpreadAngles": [
                        {
                            "X": -0.25,
                            "Y": 0.25
                        },
                        {
                            "X": 7,
                            "Y": 3
                        },
                        {
                            "X": 2,
                            "Y": 5.5
                        },
                        {
                            "X": -8,
                            "Y": 4
                        },
                        {
                            "X": -5,
                            "Y": 1
                        },
                        {
                            "X": -6,
                            "Y": -5
                        },
                        {
                            "X": 4,
                            "Y": -4
                        }
                    ]
                },
                {
                    "PelletSpreadAngles": [
                        {
                            "X": 0.25,
                            "Y": -0.25
                        },
                        {
                            "X": 5,
                            "Y": -1
                        },
                        {
                            "X": 8,
                            "Y": -4
                        },
                        {
                            "X": 6,
                            "Y": 5
                        },
                        {
                            "X": -4,
                            "Y": 4
                        },
                        {
                            "X": -7,
                            "Y": -3
                        },
                        {
                            "X": -2,
                            "Y": -5.5
                        }
                    ]
                },
                {
                    "PelletSpreadAngles": [
                        {
                            "X": 1,
                            "Y": 1
                        },
                        {
                            "X": 2,
                            "Y": 6
                        },
                        {
                            "X": 3,
                            "Y": 3
                        },
                        {
                            "X": -3,
                            "Y": 4
                        },
                        {
                            "X": 3,
                            "Y": -4
                        },
                        {
                            "X": -3,
                            "Y": -3
                        },
                        {
                            "X": -2,
                            "Y": -6
                        }
                    ]
                }
            ],
            "DeviationHipFireMultiplier": 0.4,
            "DeviationTargetingFireMultiplier": 0.1
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 75,
                "SpeedRecover": 10,
                "RecoverWaitTime": 0.1,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.5,
                                "ArriveTangent": 0.583333,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.583333,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 4,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.01,
                                "ArriveTangent": 0.69,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.69,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 0.7,
                                "ArriveTangent": 0.345,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.345,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.7,
                                "ArriveTangent": 0.031285,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.031285,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.968138,
                                "Value": 0.792858,
                                "ArriveTangent": 0.318917,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.318917,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6.076293,
                                "Value": 2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 2,
                            "Y": 3
                        },
                        {
                            "X": 1.5,
                            "Y": 5
                        },
                        {
                            "X": -0.5,
                            "Y": 7
                        },
                        {
                            "X": 0.3,
                            "Y": 9
                        }
                    ]
                },
                "DisplacementResetTime": 0.3,
                "DisplacementGraphLoopStart": 1,
                "DisplacementGraphInitialNum": 1,
                "DisplacementHipFireMultiplier": 1.8
            },
            "ViewKickBack": {
                "SpeedDeflect": 250,
                "SpeedRecover": 100,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 8,
                "MaxDistance": 9
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 250,
                "SpeedRecover": 100,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 8,
                "MaxDistance": 9
            },
            "GunKickXY": {
                "SpeedDeflect": 50,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 10,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.8,
                                "Value": 10,
                                "ArriveTangent": -4.6666665,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -4.6666665,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 3,
                                "ArriveTangent": -2.1428573,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -2.1428573,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 4,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 1,
                    "Max": 1.5
                },
                "VerticalBottom": {
                    "Min": 0.02,
                    "Max": 0.1
                },
                "VerticalMultiplier": {
                    "Increment": 0.15
                },
                "HorizontalRight": {
                    "Min": 0.2,
                    "Max": 0.8
                },
                "HorizontalLeft": {
                    "Min": 0.2,
                    "Max": 0.8
                }
            },
            "GunKickBackAlpha": 1,
            "GunKickBack": {
                "SpeedDeflect": 1000,
                "SpeedRecover": 50,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 2.4,
                                "ArriveTangent": 0.40875977,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.40875918,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 4,
                "MaxDistance": 6
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 1000,
                "SpeedRecover": 50,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 2.4,
                                "ArriveTangent": 0.40876,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.408759,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 4,
                "MaxDistance": 6
            }
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
        "SpreadData": {
            "InnerClusterSpreadMultiplier": 1,
            "FireSpreadStart": 0.2,
            "FireSpreadIncrease": 0.25,
            "FireSpreadResetTime": 0.35,
            "FireSpreadCap": 3,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Start": 4,
                    "Cap": 2,
                    "Increment": 1.5
                },
                "StandMove": {
                    "Spread": 1.5,
                    "Start": 4,
                    "Cap": 3,
                    "Increment": 1.5
                },
                "Crouch": {
                    "Spread": 0.5,
                    "Start": 0.33
                },
                "CrouchMove": {
                    "Start": 0.33
                },
                "Target": {
                    "Spread": 0,
                    "Start": 0.33
                },
                "TargetMove": {
                    "Spread": 0.25,
                    "Start": 0.33
                }
            },
            "DeviationHipFireMultiplier": 1
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 25,
                "SpeedRecover": 15,
                "RecoverWaitTime": 0.075,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.8891473,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2804594,
                                "Value": 0.36771643,
                                "ArriveTangent": 0.95042104,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.7574391,
                                "Value": 0.18642747,
                                "ArriveTangent": -0.38007686,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.38007686,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.8563633,
                                "Value": 0.18642747,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2909166,
                                "Value": 0.9852743,
                                "ArriveTangent": 2.0229568,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0,
                            "Y": 0.2
                        },
                        {
                            "X": 0.1,
                            "Y": 0.5
                        },
                        {
                            "X": 0,
                            "Y": 0.8
                        },
                        {
                            "X": -0.1,
                            "Y": 1.3
                        },
                        {
                            "X": -0.25,
                            "Y": 1.6
                        },
                        {
                            "X": -0.45,
                            "Y": 1.96
                        },
                        {
                            "X": -0.6,
                            "Y": 2.32
                        },
                        {
                            "X": -0.9,
                            "Y": 2.68
                        },
                        {
                            "X": -1.1,
                            "Y": 3.04
                        },
                        {
                            "X": -0.8,
                            "Y": 3.4
                        },
                        {
                            "X": -1.1,
                            "Y": 3.76
                        },
                        {
                            "X": -0.8,
                            "Y": 4.12
                        },
                        {
                            "X": -1,
                            "Y": 4.48
                        },
                        {
                            "X": -0.8,
                            "Y": 4.84
                        },
                        {
                            "X": -0.5,
                            "Y": 5.2
                        },
                        {
                            "X": -0.7,
                            "Y": 5.56
                        },
                        {
                            "X": -0.5,
                            "Y": 5.92
                        },
                        {
                            "X": -0.25,
                            "Y": 6.28
                        },
                        {
                            "X": -0.5,
                            "Y": 6.64
                        },
                        {
                            "X": -0.2,
                            "Y": 7
                        }
                    ]
                },
                "DisplacementResetTime": 0.25,
                "DisplacementGraphLoopStart": 11,
                "DisplacementHipFireMultiplier": 2.2
            },
            "ViewKickBack": {
                "SpeedDeflect": 75,
                "SpeedRecover": 45,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 4,
                "MaxDistance": 6
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 75,
                "SpeedRecover": 45,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 4,
                "MaxDistance": 6
            },
            "GunKickXY": {
                "SpeedDeflect": 5,
                "SpeedRecover": 2,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.212118,
                                "Value": 1.2,
                                "ArriveTangent": 2.049062,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.049062,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.964013,
                                "Value": 2.675322,
                                "ArriveTangent": 0.632712,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.632712,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.987456,
                                "Value": 4.221411,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 1.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 2.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.2,
                    "Max": 0.5
                },
                "VerticalMultiplier": {
                    "Start": 0.4,
                    "Increment": 0.15
                },
                "HorizontalRight": {
                    "Min": 0.1,
                    "Max": 0.3
                },
                "HorizontalLeft": {
                    "Min": 0.1,
                    "Max": 0.3
                },
                "HorizontalMultiplier": {
                    "Start": 0.45,
                    "Increment": 0.12,
                    "Max": 1.5,
                    "Threshold": 1.2
                }
            },
            "GunKickBackAlpha": 0.75,
            "GunKickBack": {
                "SpeedDeflect": 30,
                "SpeedRecover": 15,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.1,
                                "ArriveTangent": 0.118719,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.76846,
                                "Value": 0.3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.238401,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.30887,
                                "Value": 0.513362,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2,
                "MaxDistance": 3.5
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 30,
                "SpeedRecover": 10,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.1,
                                "ArriveTangent": 0.055920348,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.055920348,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.3297007,
                                "Value": 0.28619802,
                                "ArriveTangent": 0.23036902,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.23036902,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0.6099311,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.6099311,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.003282,
                                "Value": 1.019322,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.486649,
                                "Value": 0.204262,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.000743,
                                "Value": 0.238701,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 1.1,
                "MaxDistance": 3
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.15,
            "FireSpreadIncrease": 0.2,
            "FireSpreadResetTime": 0.2,
            "FireSpreadDecayRate": 0.3,
            "FireSpreadCap": 2,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "TasedSpread": 4,
                    "Start": 3,
                    "Cap": 2,
                    "Increment": 1.25
                },
                "StandMove": {
                    "Spread": 1.35,
                    "TasedSpread": 4,
                    "Start": 3,
                    "Cap": 2,
                    "Increment": 1.25
                },
                "Crouch": {
                    "Spread": 0.35,
                    "TasedSpread": 4,
                    "Start": 0.3,
                    "Cap": 2,
                    "Increment": 1.25
                },
                "CrouchMove": {
                    "Spread": 0.85,
                    "TasedSpread": 4,
                    "Start": 0.3,
                    "Cap": 2,
                    "Increment": 1.25
                },
                "Target": {
                    "Spread": 0,
                    "TasedSpread": 4,
                    "Start": 0.33
                },
                "TargetMove": {
                    "Spread": 0.15,
                    "TasedSpread": 4,
                    "Start": 0.33
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 35,
                "SpeedRecover": 20,
                "RecoverWaitTime": 0.065,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.889147,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.49879843,
                                "Value": 0.5010804,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.1715168,
                                "Value": 0.3424285,
                                "ArriveTangent": 0.950421,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.4568213,
                                "Value": 0.22272724,
                                "ArriveTangent": 0.528259,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.528259,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.173654,
                                "Value": 0.8718165,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.2982035,
                                "Value": 0.14719701,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.008968,
                                "Value": 0.237833,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.066324,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.959029,
                                "Value": 0.429528,
                                "ArriveTangent": 0.204268,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058875,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.996253,
                                "Value": 1.579704,
                                "ArriveTangent": 0.910426,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 11.5966835,
                                "Value": 1.6000042,
                                "ArriveTangent": 0.0026709212,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.0026709212,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0.05,
                            "Y": 0.1
                        },
                        {
                            "X": -0.1,
                            "Y": 0.6
                        },
                        {
                            "X": 0.1,
                            "Y": 0.8
                        },
                        {
                            "X": -0.1,
                            "Y": 1
                        },
                        {
                            "X": -0.15,
                            "Y": 1.3
                        },
                        {
                            "X": -0.05,
                            "Y": 1.6
                        },
                        {
                            "X": -0.3,
                            "Y": 1.75
                        },
                        {
                            "X": -0.6,
                            "Y": 2.1
                        },
                        {
                            "X": -0.9,
                            "Y": 2
                        },
                        {
                            "X": -1.25,
                            "Y": 2.3
                        },
                        {
                            "X": -0.95,
                            "Y": 2.6
                        },
                        {
                            "X": -1.1,
                            "Y": 3.05
                        },
                        {
                            "X": -0.8,
                            "Y": 3.25
                        },
                        {
                            "X": -0.5,
                            "Y": 3.6
                        },
                        {
                            "X": -0.75,
                            "Y": 3.85
                        },
                        {
                            "X": -0.7,
                            "Y": 4.3
                        },
                        {
                            "X": -0.95,
                            "Y": 4.4
                        },
                        {
                            "X": -1.2,
                            "Y": 4.8
                        },
                        {
                            "X": -1,
                            "Y": 5
                        },
                        {
                            "X": -1.3,
                            "Y": 5.4
                        }
                    ]
                },
                "DisplacementResetTime": 0.3,
                "DisplacementGraphLoopStart": 13,
                "DisplacementHipFireMultiplier": 1.5
            },
            "ViewKickBack": {
                "SpeedDeflect": 55,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 3,
                "MaxDistance": 6
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 65,
                "SpeedRecover": 35,
                "Distance": 3,
                "MaxDistance": 6
            },
            "GunKickXY": {
                "SpeedDeflect": 12,
                "SpeedRecover": 8,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.007218182,
                                "Value": 1.489894,
                                "ArriveTangent": 3.8974771,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 3.8974771,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.18216187,
                                "Value": 1.9967674,
                                "ArriveTangent": 0.0835564,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.10783987,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.8204063,
                                "Value": 1.9003279,
                                "ArriveTangent": -0.6492248,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.6492248,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5204905,
                                "Value": 0.54908156,
                                "ArriveTangent": -0.13853027,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.0033712,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.49905697,
                                "Value": 1.0853567,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.99905694,
                                "Value": 1.5853567,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.199057,
                                "Value": 4.385357,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.03,
                    "Max": 0.3
                },
                "VerticalBottom": {
                    "Min": 0.03,
                    "Max": 0.1
                },
                "VerticalMultiplier": {
                    "Start": 0.4,
                    "Increment": 0.15
                },
                "HorizontalRight": {
                    "Min": 0.25,
                    "Max": 0.55
                },
                "HorizontalLeft": {
                    "Min": 0.25,
                    "Max": 0.55
                },
                "HorizontalMultiplier": {
                    "Start": 0.25,
                    "Increment": 0.2,
                    "Max": 1.5,
                    "Threshold": 1.2
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 40,
                "SpeedRecover": 5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.1,
                                "ArriveTangent": 0.118719,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.76846,
                                "Value": 0.3,
                                "ArriveTangent": 0.2516755,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.2516757,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.238401,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.30887,
                                "Value": 0.513362,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2,
                "MaxDistance": 5
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 40,
                "SpeedRecover": 10,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.033414364,
                                "Value": 0.2840736,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.6105824,
                                "Value": 0.3,
                                "ArriveTangent": 0.16028494,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.16028494,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": -1.6666666,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.47717586,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.3,
                                "Value": 0.5,
                                "ArriveTangent": -0.14999999,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.14999999,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 1.2,
                "MaxDistance": 3.5
            }
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
        "SpreadData": {
            "InnerClusterSpreadMultiplier": 1,
            "FireSpreadIncrease": 0.2,
            "FireSpreadResetTime": 1.1,
            "FireSpreadDecayRate": 0,
            "FireSpreadCap": 3,
            "SpreadStanceMultipliers": {
                "Crouch": {
                    "Spread": 0.5
                },
                "Target": {
                    "Spread": 0.75,
                    "Start": 0.6,
                    "Cap": 0.7,
                    "Increment": 0.7
                },
                "TargetMove": {
                    "Start": 0.6,
                    "Cap": 0.7,
                    "Increment": 0.7
                }
            },
            "SpreadRadiusMultipliers": {
                "X": 0.7,
                "Y": 0.7
            },
            "ShotgunPatterns": [
                {
                    "PelletSpreadAngles": [
                        {
                            "X": 0.2,
                            "Y": -0.9
                        },
                        {
                            "X": -1.5,
                            "Y": 0.9
                        },
                        {
                            "X": 0.1,
                            "Y": 0.5
                        },
                        {
                            "X": 1.6,
                            "Y": -1
                        },
                        {
                            "X": -2,
                            "Y": -1.5
                        },
                        {
                            "X": -1,
                            "Y": -0.4
                        },
                        {
                            "X": 1.4,
                            "Y": 1
                        }
                    ]
                },
                {
                    "PelletSpreadAngles": [
                        {
                            "X": 0.3,
                            "Y": -1.2
                        },
                        {
                            "X": -1.3,
                            "Y": 0.6
                        },
                        {
                            "X": 0.3,
                            "Y": 0.3
                        },
                        {
                            "X": 1.4,
                            "Y": -0.7
                        },
                        {
                            "X": -1.7,
                            "Y": -1.3
                        },
                        {
                            "X": -0.6,
                            "Y": -0.6
                        },
                        {
                            "X": 0.9,
                            "Y": 0.8
                        }
                    ]
                }
            ],
            "DeviationHipFireMultiplier": 0.4,
            "DeviationTargetingFireMultiplier": 0.2
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 45,
                "SpeedRecover": 9,
                "RecoverWaitTime": 0.25,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.7070618,
                                "Value": 1.7086337,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 25.446053,
                                "Value": 0,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.9,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.9960003,
                                "Value": 0.7,
                                "ArriveTangent": -0.0625,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.07592319,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8,
                                "Value": 0.6,
                                "ArriveTangent": 0.0000031984857,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.0006279469,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 12,
                                "Value": 0.6,
                                "ArriveTangent": -0.0053985533,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.0048140506,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 27,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0,
                            "Y": 4
                        },
                        {
                            "X": 2,
                            "Y": 8
                        },
                        {
                            "X": 0.5,
                            "Y": 12
                        },
                        {
                            "X": -1,
                            "Y": 16
                        },
                        {
                            "X": 0,
                            "Y": 20
                        },
                        {
                            "X": -1.5,
                            "Y": 22
                        },
                        {
                            "X": 0,
                            "Y": 24
                        },
                        {
                            "X": 2,
                            "Y": 26
                        },
                        {
                            "X": 4,
                            "Y": 28
                        }
                    ]
                },
                "DisplacementResetTime": 25,
                "DisplacementGraphLoopStart": 5,
                "DisplacementGraphInitialNum": 0
            },
            "ViewKickBack": {
                "SpeedDeflect": 200,
                "SpeedRecover": 50,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 6,
                "MaxDistance": 10
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 200,
                "SpeedRecover": 50,
                "Distance": 6,
                "MaxDistance": 10
            },
            "GunKickXY": {
                "SpeedDeflect": 50,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.8,
                                "Value": 5,
                                "ArriveTangent": -1.3333334,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.3333334,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 3,
                                "ArriveTangent": -0.952381,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.952381,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 4,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.1,
                    "Max": 0.3
                },
                "VerticalBottom": {
                    "Min": 0.1,
                    "Max": 0.2
                },
                "HorizontalRight": {
                    "Min": 0.2,
                    "Max": 0.3
                },
                "HorizontalLeft": {
                    "Min": 0.2,
                    "Max": 0.3
                }
            },
            "GunKickBackAlpha": 1,
            "GunKickBack": {
                "SpeedDeflect": 95,
                "SpeedRecover": 2.5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0,
                                "ArriveTangent": 0.03547334,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.035473924,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4,
                                "Value": 0.7853372,
                                "ArriveTangent": 0.9742559,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.7424519,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5.8796515,
                                "Value": 1.0418255,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.94929665,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8,
                                "Value": 2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -3.5701387,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 0.4,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4,
                                "Value": 0.4,
                                "ArriveTangent": -0.1768142,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.5660455,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8.041909,
                                "Value": 0.073456526,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 5,
                "MaxDistance": 8
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 95,
                "SpeedRecover": 2.5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0,
                                "ArriveTangent": 0.035473,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.035474,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4,
                                "Value": 0.785337,
                                "ArriveTangent": 0.974256,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.742452,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5.879652,
                                "Value": 1.041826,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.949297,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8,
                                "Value": 2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -3.570139,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 0.4,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4,
                                "Value": 0.4,
                                "ArriveTangent": -0.176814,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.566046,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8.041909,
                                "Value": 0.073457,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 5,
                "MaxDistance": 8
            }
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
        "SpreadData": {
            "InnerClusterSpreadMultiplier": 0,
            "FireSpreadStart": 3,
            "FireSpreadIncrease": 2,
            "FireSpreadResetTime": 1.2,
            "FireSpreadCap": 10,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Spread": 1.5
                },
                "StandMove": {
                    "Spread": 2
                },
                "Crouch": {
                    "Spread": 0.5
                },
                "Target": {
                    "Spread": 0
                },
                "TargetMove": {
                    "Spread": 0.05
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 35,
                "SpeedRecover": 12,
                "RecoverWaitTime": 0.15,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.15,
                                "Value": 1,
                                "ArriveTangent": 0.356577,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.356577,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.25,
                                "Value": 0.264258,
                                "ArriveTangent": 0.356577,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.356577,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.560888,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 1,
                                "ArriveTangent": 2.436266,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 1,
                            "Y": 2.5
                        }
                    ]
                },
                "DisplacementResetTime": 0.3,
                "DisplacementHipFireMultiplier": 1.6
            },
            "ViewKickBack": {
                "SpeedDeflect": 40,
                "SpeedRecover": 16,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.000020325184,
                                "Value": 2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3,
                                "Value": 2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4,
                                "Value": 1,
                                "ArriveTangent": -0.33427495,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.3342744,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 0.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5,
                                "Value": 1,
                                "ArriveTangent": 0.2662664,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.2662664,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 8,
                "MaxDistance": 15
            },
            "GunKickXY": {
                "SpeedDeflect": 5,
                "SpeedRecover": 4,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.15,
                                "Value": 0.5,
                                "ArriveTangent": 0.8583439,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.06573004,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.35,
                                "Value": 0.4313151,
                                "ArriveTangent": -0.66715616,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.90257376,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 0.3,
                                "ArriveTangent": -0.1770192,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.31193244,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.3,
                                "ArriveTangent": 0.067764625,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.06776457,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3,
                                "Value": 0.5,
                                "ArriveTangent": -0.040000003,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.040000003,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalMultiplier": {
                    "Start": 0.4,
                    "Increment": 0.15,
                    "Threshold": 2
                },
                "HorizontalMultiplier": {
                    "Start": 0.4,
                    "Increment": 0.15,
                    "Threshold": 2
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 40,
                "SpeedRecover": 5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.1,
                                "ArriveTangent": 0.118719,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.76846,
                                "Value": 0.3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.238401,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.30887,
                                "Value": 0.513362,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2.3,
                "MaxDistance": 4.2
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.5,
            "FireSpreadIncrease": 0.45,
            "FireSpreadResetTime": 0.2,
            "FireSpreadCap": 5,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "TasedSpread": 4
                },
                "StandMove": {
                    "TasedSpread": 4,
                    "Start": 1.5,
                    "Cap": 1.5,
                    "Increment": 1.5
                },
                "Crouch": {
                    "TasedSpread": 4,
                    "Start": 0.5,
                    "Cap": 0.5,
                    "Increment": 0.5
                },
                "CrouchMove": {
                    "TasedSpread": 4,
                    "Start": 0.75,
                    "Cap": 0.75,
                    "Increment": 0.75
                },
                "Target": {
                    "Spread": 0
                },
                "TargetMove": {
                    "TasedSpread": 4,
                    "Start": 0.25,
                    "Cap": 0.25,
                    "Increment": 0.25
                }
            },
            "DeviationHipFireMultiplier": 1
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 50,
                "SpeedRecover": 30,
                "RecoverWaitTime": 0.075,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.033674,
                                "Value": 0.370784,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.137952,
                                "Value": 0.341251,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.748889,
                                "Value": 1.8099401,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.008968,
                                "Value": 0.237833,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.066324,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.959029,
                                "Value": 0.429528,
                                "ArriveTangent": 0.204268,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058875,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.996253,
                                "Value": 1.579704,
                                "ArriveTangent": 0.910426,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 9.079855,
                                "Value": 1.589234,
                                "ArriveTangent": 0.001875,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.001875,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": -0.0375,
                            "Y": 0.075
                        },
                        {
                            "X": 0.075,
                            "Y": 0.2625
                        },
                        {
                            "X": 0.0375,
                            "Y": 0.4875
                        },
                        {
                            "X": 0.15,
                            "Y": 0.675
                        },
                        {
                            "X": -0.112500004,
                            "Y": 0.7875
                        },
                        {
                            "X": 0.0375,
                            "Y": 1.0125
                        },
                        {
                            "X": -0.2625,
                            "Y": 1.5
                        },
                        {
                            "X": -0.41250002,
                            "Y": 2
                        },
                        {
                            "X": -0.63750005,
                            "Y": 2.33
                        },
                        {
                            "X": -0.82500005,
                            "Y": 2.55
                        },
                        {
                            "X": -1.125,
                            "Y": 3.0625
                        },
                        {
                            "X": -0.97499996,
                            "Y": 4.375
                        },
                        {
                            "X": -1.1624999,
                            "Y": 4.8125
                        },
                        {
                            "X": -1.2750001,
                            "Y": 5.359375
                        },
                        {
                            "X": -1.0875001,
                            "Y": 6.625
                        },
                        {
                            "X": -1.2750001,
                            "Y": 7.125166
                        },
                        {
                            "X": -1.5,
                            "Y": 8.7
                        },
                        {
                            "X": -1.3875,
                            "Y": 9.6
                        },
                        {
                            "X": -1.6500001,
                            "Y": 10.05
                        },
                        {
                            "X": -1.5374999,
                            "Y": 10.95
                        }
                    ]
                },
                "DisplacementResetTime": 0.2,
                "DisplacementGraphLoopStart": 12,
                "DisplacementGraphInitialNum": 0,
                "DisplacementHipFireMultiplier": 1.5
            },
            "ViewKickBack": {
                "SpeedDeflect": 150,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 5,
                "MaxDistance": 10
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 100,
                "SpeedRecover": 45,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 5,
                "MaxDistance": 10
            },
            "GunKickXY": {
                "SpeedDeflect": 15,
                "SpeedRecover": 7.5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.008281708,
                                "Value": 1.0218939,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.55409825,
                                "Value": 1.2983181,
                                "ArriveTangent": 1.3242385,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.3242385,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.1112393,
                                "Value": 2.5044067,
                                "ArriveTangent": 1.3481096,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.64104724,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.4303321,
                                "Value": 3.7776928,
                                "ArriveTangent": 0.42535275,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.4253532,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 3.171802,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 3.171802,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.49603248,
                                "Value": 1.7733169,
                                "ArriveTangent": 2.5005236,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.5005236,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.9424007,
                                "Value": 2.8563905,
                                "ArriveTangent": 2.3156486,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.3156486,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2991395,
                                "Value": 3.6330304,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.1,
                    "Max": 0.4
                },
                "VerticalBottom": {
                    "Min": 0.1,
                    "Max": 0.4
                },
                "VerticalMultiplier": {
                    "Start": 0.3,
                    "Increment": 0.25,
                    "Max": 1.2,
                    "Threshold": 1.2
                },
                "HorizontalRight": {
                    "Min": 0.1,
                    "Max": 0.3
                },
                "HorizontalLeft": {
                    "Min": 0.1,
                    "Max": 0.3
                },
                "HorizontalMultiplier": {
                    "Start": 0.3,
                    "Increment": 0.36,
                    "Max": 1.2,
                    "Threshold": 1.2
                }
            },
            "GunKickBackAlpha": 1,
            "GunKickBack": {
                "SpeedDeflect": 40,
                "SpeedRecover": 8,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.1,
                                "ArriveTangent": 0.3261081,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.3261081,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.2607715,
                                "Value": 0.83725595,
                                "ArriveTangent": 0.19999999,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.19999999,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0.072678626,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.072678626,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": -0.2746576,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.2746576,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.5678601,
                                "Value": 0.29471767,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 3.5,
                "MaxDistance": 5
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 40,
                "SpeedRecover": 10,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.0047700405,
                                "Value": 0.11699188,
                                "ArriveTangent": 0.40916434,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.40916434,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.162847,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.00037670135,
                                "Value": 0.7555107,
                                "ArriveTangent": -0.21268481,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.21268481,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.4907727,
                                "Value": 0.22584128,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2.6,
                "MaxDistance": 5
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.2,
            "FireSpreadResetTime": 0.5,
            "FireSpreadDecayRate": 0,
            "FireSpreadCap": 5,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Spread": 1.5,
                    "DecayRate": 1.5
                },
                "StandMove": {
                    "Spread": 2,
                    "DecayRate": 1.5
                },
                "Crouch": {
                    "Spread": 1.25,
                    "DecayRate": 1.5
                },
                "CrouchMove": {
                    "Spread": 1.75,
                    "DecayRate": 1.5
                },
                "Target": {
                    "Spread": 0.5,
                    "DecayRate": 1.5
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 20,
                "SpeedRecover": 17,
                "RecoverWaitTime": 0.12,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0.0141,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.0141,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 1,
                                "ArriveTangent": 0.003058,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.003039,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.8,
                                "Value": 0.7,
                                "ArriveTangent": -0.064537,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.064537,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8.198006,
                                "Value": 0.5,
                                "ArriveTangent": 0.017092,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058858,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.007599,
                                "Value": 0.05,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.1,
                                "Value": 0.05,
                                "ArriveTangent": 0.16948624,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.16948624,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.805829,
                                "Value": 0.185289,
                                "ArriveTangent": 0.176986,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.176983,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.869594,
                                "Value": 1.290095,
                                "ArriveTangent": 1.301766,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.301765,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.582024,
                                "Value": 1.499112,
                                "ArriveTangent": -0.053738,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.053739,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0.33,
                            "Y": 0.3
                        },
                        {
                            "X": 0.25,
                            "Y": 0.8
                        },
                        {
                            "X": 0.1,
                            "Y": 1.97
                        },
                        {
                            "X": -0.35,
                            "Y": 3
                        },
                        {
                            "X": -0.02,
                            "Y": 4
                        },
                        {
                            "X": 0.49,
                            "Y": 5.14
                        },
                        {
                            "X": 0.38,
                            "Y": 6.38
                        },
                        {
                            "X": 0.15,
                            "Y": 7.2
                        },
                        {
                            "X": -0.46,
                            "Y": 8
                        },
                        {
                            "X": -0.16,
                            "Y": 8.96
                        },
                        {
                            "X": 0.09,
                            "Y": 9.84
                        },
                        {
                            "X": -0.15,
                            "Y": 10.84
                        },
                        {
                            "X": -0.03,
                            "Y": 11.89
                        },
                        {
                            "X": 0.14,
                            "Y": 12.9
                        },
                        {
                            "X": -0.04,
                            "Y": 13.71
                        },
                        {
                            "X": -0.21,
                            "Y": 14.54
                        },
                        {
                            "X": 0.15,
                            "Y": 15.52
                        },
                        {
                            "X": 0.43,
                            "Y": 16.33
                        },
                        {
                            "X": -0.17,
                            "Y": 17.58
                        },
                        {
                            "X": -0.05,
                            "Y": 18.47
                        }
                    ]
                },
                "DisplacementResetTime": 0.4,
                "DisplacementHipFireMultiplier": 1.5
            },
            "ViewKickBack": {
                "SpeedDeflect": 35,
                "SpeedRecover": 15,
                "Distance": 3,
                "MaxDistance": 4
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 35,
                "SpeedRecover": 15,
                "Distance": 3,
                "MaxDistance": 4
            },
            "GunKickXY": {
                "SpeedDeflect": 9,
                "SpeedRecover": 5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.016153,
                                "Value": 0.923087,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.212118,
                                "Value": 0.923087,
                                "ArriveTangent": 1.203346,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.203346,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.596114,
                                "Value": 2.824327,
                                "ArriveTangent": 1.082843,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.082843,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.987456,
                                "Value": 4.221411,
                                "ArriveTangent": 0.74995,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.749949,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 1.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.643989,
                                "Value": 1.561232,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.172709,
                                "Value": 5.086766,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Max": 0.2
                },
                "HorizontalRight": {
                    "Min": 0.2,
                    "Max": 0.7
                },
                "HorizontalLeft": {
                    "Min": 0.2,
                    "Max": 0.7
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 30,
                "SpeedRecover": 10,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 2.4,
                                "ArriveTangent": 0.40875977,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.40875918,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 0.8,
                "MaxDistance": 10
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 30,
                "SpeedRecover": 10,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 2.4,
                                "ArriveTangent": 0.40876,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.408759,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 0.8,
                "MaxDistance": 10
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.25,
            "FireSpreadIncrease": 0.5,
            "FireSpreadDecayRate": 0,
            "FireSpreadCap": 4,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Spread": 1.5,
                    "DecayRate": 1.5
                },
                "StandMove": {
                    "Spread": 2,
                    "DecayRate": 1.5
                },
                "Crouch": {
                    "Spread": 1.25,
                    "DecayRate": 1.5
                },
                "CrouchMove": {
                    "Spread": 1.75,
                    "DecayRate": 1.5
                },
                "Target": {
                    "Spread": 0.5,
                    "DecayRate": 1.5
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 22,
                "SpeedRecover": 15,
                "RecoverWaitTime": 0.18,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.06372833,
                                "Value": 1.1468801,
                                "ArriveTangent": 0.0141,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.0141,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.9362717,
                                "Value": 1.1468801,
                                "ArriveTangent": 0.003058,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.003039,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.8,
                                "Value": 0.7,
                                "ArriveTangent": -0.064537,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.064537,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8.198006,
                                "Value": 0.5,
                                "ArriveTangent": 0.017092,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058858,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.0075994134,
                                "Value": 0.05,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.1,
                                "Value": 0.05,
                                "ArriveTangent": 0.16948642,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.16948642,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.8058294,
                                "Value": 0.18528914,
                                "ArriveTangent": 0.176986,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.176983,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.8695945,
                                "Value": 1.2900951,
                                "ArriveTangent": 1.301766,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.301765,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.5820243,
                                "Value": 1.4991125,
                                "ArriveTangent": -0.053737704,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.053739104,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": -0.05,
                            "Y": 0.1
                        },
                        {
                            "X": -0.2,
                            "Y": 0.8
                        },
                        {
                            "X": -0.4,
                            "Y": 1.6
                        },
                        {
                            "X": 0,
                            "Y": 2.3
                        },
                        {
                            "X": 0.3,
                            "Y": 3
                        },
                        {
                            "X": 0.5,
                            "Y": 4.14
                        },
                        {
                            "X": 0.55,
                            "Y": 5.38
                        },
                        {
                            "X": 0.4,
                            "Y": 6.2
                        },
                        {
                            "X": 0.1,
                            "Y": 7
                        },
                        {
                            "X": 0,
                            "Y": 7.96
                        },
                        {
                            "X": -0.2,
                            "Y": 9
                        },
                        {
                            "X": 0.4,
                            "Y": 9.8
                        },
                        {
                            "X": 0.35,
                            "Y": 10.89
                        },
                        {
                            "X": 0.2,
                            "Y": 11.9
                        },
                        {
                            "X": 0,
                            "Y": 12.71
                        },
                        {
                            "X": -0.2,
                            "Y": 13.54
                        },
                        {
                            "X": -0.25,
                            "Y": 14.52
                        },
                        {
                            "X": -0.3,
                            "Y": 15.33
                        },
                        {
                            "X": -0.25,
                            "Y": 16.58
                        },
                        {
                            "X": -0.1,
                            "Y": 17.47
                        }
                    ]
                },
                "DisplacementResetTime": 0.2,
                "DisplacementGraphInitialNum": 2,
                "DisplacementHipFireMultiplier": 1.5
            },
            "ViewKickBack": {
                "SpeedDeflect": 35,
                "SpeedRecover": 15,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2,
                "MaxDistance": 5
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 35,
                "SpeedRecover": 15,
                "Distance": 2,
                "MaxDistance": 5
            },
            "GunKickXY": {
                "SpeedDeflect": 9,
                "SpeedRecover": 5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.016153,
                                "Value": 0.923087,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.212118,
                                "Value": 0.923087,
                                "ArriveTangent": 1.2033461,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.2033461,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5961137,
                                "Value": 2.8243265,
                                "ArriveTangent": 1.0828434,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.0828428,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.987456,
                                "Value": 4.221411,
                                "ArriveTangent": 0.74995023,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.7499491,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 1.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.6439887,
                                "Value": 1.5612316,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.1727095,
                                "Value": 5.086766,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Max": 0.3
                },
                "HorizontalRight": {
                    "Min": 0.2,
                    "Max": 0.8
                },
                "HorizontalLeft": {
                    "Min": 0.2,
                    "Max": 0.8
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 45,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": -0.49986273,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.49986273,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.0160937,
                                "Value": 2.4920926,
                                "ArriveTangent": 0.40875977,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.40875918,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": -1.7197702,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.7197702,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2,
                "MaxDistance": 10
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 45,
                "SpeedRecover": 25,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": -0.499863,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.499863,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.016094,
                                "Value": 2.492093,
                                "ArriveTangent": 0.40876,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.408759,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": -1.71977,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -1.71977,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2.5,
                "MaxDistance": 10
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.35,
            "FireSpreadIncrease": 0.55,
            "FireSpreadResetTime": 0.5,
            "FireSpreadDecayRate": 0,
            "FireSpreadCap": 5,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Spread": 1.5,
                    "DecayRate": 1.5
                },
                "StandMove": {
                    "Spread": 2,
                    "DecayRate": 1.5
                },
                "Crouch": {
                    "Spread": 1.25,
                    "DecayRate": 1.5
                },
                "CrouchMove": {
                    "Spread": 1.75,
                    "DecayRate": 1.5
                },
                "Target": {
                    "Spread": 0,
                    "DecayRate": 1.5
                },
                "TargetMove": {
                    "Spread": 0.2
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 18,
                "SpeedRecover": 13,
                "RecoverWaitTime": 0.25,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0.014100224,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.014100224,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 1,
                                "ArriveTangent": 0.0030578955,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.003039441,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.8,
                                "Value": 0.7,
                                "ArriveTangent": -0.06453689,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.06453689,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8.198006,
                                "Value": 0.5,
                                "ArriveTangent": 0.017092189,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058858063,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0.12527712,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.12527712,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.7982304,
                                "Value": 0.3,
                                "ArriveTangent": 0.17698601,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.17698283,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 2,
                                "ArriveTangent": 1.3017662,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.3017651,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.5,
                                "Value": 2,
                                "ArriveTangent": 2.2068152,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.2068193,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": -0.1,
                            "Y": 1.4
                        },
                        {
                            "X": -0.3,
                            "Y": 3.6
                        },
                        {
                            "X": -0.6,
                            "Y": 3.7
                        },
                        {
                            "X": -1,
                            "Y": 5.5
                        },
                        {
                            "X": -0.7,
                            "Y": 6.2
                        },
                        {
                            "X": -1.3,
                            "Y": 7.6
                        },
                        {
                            "X": -1,
                            "Y": 9
                        },
                        {
                            "X": -1.2,
                            "Y": 10.4
                        },
                        {
                            "X": -0.95,
                            "Y": 11.8
                        },
                        {
                            "X": -1.4,
                            "Y": 12.9
                        },
                        {
                            "X": -1.4,
                            "Y": 14.5
                        },
                        {
                            "X": -1.2,
                            "Y": 15.5
                        },
                        {
                            "X": -1.6,
                            "Y": 17.2
                        },
                        {
                            "X": -1.2,
                            "Y": 18.6
                        },
                        {
                            "X": -1.4,
                            "Y": 20
                        },
                        {
                            "X": -1,
                            "Y": 21.2
                        },
                        {
                            "X": -1.4,
                            "Y": 22.6
                        },
                        {
                            "X": -1.15,
                            "Y": 24.4
                        }
                    ]
                },
                "DisplacementResetTime": 0.3,
                "DisplacementGraphLoopStart": 6,
                "DisplacementGraphInitialNum": 2,
                "DisplacementHipFireMultiplier": 1.3
            },
            "ViewKickBack": {
                "SpeedDeflect": 45,
                "SpeedRecover": 24,
                "Distance": 3,
                "MaxDistance": 6
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 45,
                "SpeedRecover": 24,
                "Distance": 3,
                "MaxDistance": 6
            },
            "GunKickXY": {
                "SpeedDeflect": 7,
                "SpeedRecover": 2.5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.01615332,
                                "Value": 0.92308664,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.21211767,
                                "Value": 0.92308664,
                                "ArriveTangent": 1.8486221,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.8486221,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.96401334,
                                "Value": 2.6753216,
                                "ArriveTangent": 0.69069964,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.69069964,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.9874563,
                                "Value": 4.221411,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 1.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.2,
                    "Max": 0.6
                },
                "VerticalBottom": {
                    "Min": 0.1,
                    "Max": 0.4
                },
                "HorizontalRight": {
                    "Min": 0.3,
                    "Max": 0.8
                },
                "HorizontalLeft": {
                    "Min": 0.3,
                    "Max": 0.8
                },
                "HorizontalMultiplier": {
                    "Increment": 0.2,
                    "Max": 1.5,
                    "Threshold": 1.2
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 120,
                "SpeedRecover": 40,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.1,
                                "ArriveTangent": 0.0014384426,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.06689281,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4,
                                "Value": 0.4,
                                "ArriveTangent": 0.3244473,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.2066585,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8,
                                "Value": 0.75,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": -0.55,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.55,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4,
                                "Value": 0.8,
                                "ArriveTangent": -0.55,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.55,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8,
                                "Value": 0.7827344,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 6,
                "MaxDistance": 14
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 120,
                "SpeedRecover": 40,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.1,
                                "ArriveTangent": 0.001438,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.066893,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4,
                                "Value": 0.4,
                                "ArriveTangent": 0.324447,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.206658,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8,
                                "Value": 0.75,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": -0.55,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.55,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4,
                                "Value": 0.8,
                                "ArriveTangent": -0.55,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.55,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8,
                                "Value": 0.782734,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 6,
                "MaxDistance": 14
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.15,
            "FireSpreadIncrease": 0.3,
            "FireSpreadDecayRate": 0,
            "FireSpreadCap": 3,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Spread": 1.5,
                    "DecayRate": 1.5
                },
                "StandMove": {
                    "Spread": 2,
                    "DecayRate": 1.5
                },
                "Crouch": {
                    "Spread": 1.25,
                    "DecayRate": 1.5
                },
                "CrouchMove": {
                    "Spread": 1.75,
                    "DecayRate": 1.5
                },
                "Target": {
                    "Spread": 0.5,
                    "DecayRate": 1.5
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 20,
                "SpeedRecover": 17,
                "RecoverWaitTime": 0.08,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0.0141,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.0141,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 1,
                                "ArriveTangent": 0.003058,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.003039,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.8,
                                "Value": 0.7,
                                "ArriveTangent": -0.064537,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.064537,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 8.198006,
                                "Value": 0.5,
                                "ArriveTangent": 0.017092,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058858,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.007599,
                                "Value": 0.05,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.1,
                                "Value": 0.05,
                                "ArriveTangent": 0.169486,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.169486,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.805829,
                                "Value": 0.185289,
                                "ArriveTangent": 0.176986,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.176983,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.869594,
                                "Value": 1.290095,
                                "ArriveTangent": 1.301766,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.301765,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.582024,
                                "Value": 1.499112,
                                "ArriveTangent": -0.053738,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.053739,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0.2,
                            "Y": 0.05
                        },
                        {
                            "X": 0.36,
                            "Y": 0.52
                        },
                        {
                            "X": 0.46,
                            "Y": 1.34
                        },
                        {
                            "X": 0.41,
                            "Y": 2.63
                        },
                        {
                            "X": 0.2,
                            "Y": 3.24
                        },
                        {
                            "X": -0.07,
                            "Y": 4.24
                        },
                        {
                            "X": 0.17,
                            "Y": 4.95
                        },
                        {
                            "X": 0.5,
                            "Y": 6
                        },
                        {
                            "X": 0.52,
                            "Y": 7.18
                        },
                        {
                            "X": 0.42,
                            "Y": 8.03
                        },
                        {
                            "X": 0.17,
                            "Y": 8.47
                        },
                        {
                            "X": -0.1,
                            "Y": 9.63
                        },
                        {
                            "X": 0.34,
                            "Y": 10.21
                        },
                        {
                            "X": 0.24,
                            "Y": 11.24
                        },
                        {
                            "X": 0,
                            "Y": 12
                        },
                        {
                            "X": -0.32,
                            "Y": 13.24
                        },
                        {
                            "X": -0.13,
                            "Y": 14.74
                        }
                    ]
                },
                "DisplacementResetTime": 0.25,
                "DisplacementHipFireMultiplier": 1.5
            },
            "ViewKickBack": {
                "SpeedDeflect": 35,
                "SpeedRecover": 15,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2,
                "MaxDistance": 5
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 35,
                "SpeedRecover": 15,
                "Distance": 2,
                "MaxDistance": 5
            },
            "GunKickXY": {
                "SpeedDeflect": 7,
                "SpeedRecover": 3,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.016153,
                                "Value": 0.923087,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.212118,
                                "Value": 0.923087,
                                "ArriveTangent": 1.848622,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 1.848622,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.964013,
                                "Value": 2.675322,
                                "ArriveTangent": 0.6907,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.6907,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.987456,
                                "Value": 4.221411,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 1.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Max": 0.3
                },
                "HorizontalRight": {
                    "Min": 0.2,
                    "Max": 0.6
                },
                "HorizontalLeft": {
                    "Min": 0.2,
                    "Max": 0.6
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 30,
                "SpeedRecover": 10,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 2.4,
                                "ArriveTangent": 0.40875977,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.40875918,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 0.8,
                "MaxDistance": 10
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 30,
                "SpeedRecover": 10,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 10,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 3,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.5,
                                "Value": 2.4,
                                "ArriveTangent": 0.40876,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.408759,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2,
                                "Value": 0.8,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 0.8,
                "MaxDistance": 10
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.3,
            "FireSpreadIncrease": 0.45,
            "FireSpreadResetTime": 0.5,
            "FireSpreadDecayRate": 0.5,
            "FireSpreadCap": 2,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "Spread": 1.25,
                    "Start": 3.5,
                    "Cap": 2.1,
                    "Increment": 1.3
                },
                "StandMove": {
                    "Spread": 1.45,
                    "Start": 3.75,
                    "Cap": 3,
                    "Increment": 1.3
                },
                "Crouch": {
                    "Spread": 0.75,
                    "Start": 0.33
                },
                "CrouchMove": {
                    "Spread": 1.25,
                    "Start": 0.33
                },
                "Target": {
                    "Spread": 0,
                    "Start": 0.33
                },
                "TargetMove": {
                    "Spread": 0.3,
                    "Start": 0.33
                }
            },
            "DeviationHipFireMultiplier": 1
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 50,
                "SpeedRecover": 10,
                "RecoverWaitTime": 0.075,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.033674,
                                "Value": 0.370784,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.137952,
                                "Value": 0.341251,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.192338,
                                "Value": 1.611175,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.008968,
                                "Value": 0.237833,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.066324,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.959029,
                                "Value": 0.429528,
                                "ArriveTangent": 0.204268,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058875,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.996253,
                                "Value": 1.579704,
                                "ArriveTangent": 0.910426,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 9.079855,
                                "Value": 1.589234,
                                "ArriveTangent": 0.001875,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.001875,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0.5,
                            "Y": 0.4
                        },
                        {
                            "X": 0.8,
                            "Y": 1.1
                        },
                        {
                            "X": 1.4,
                            "Y": 1.9
                        },
                        {
                            "X": 2.2,
                            "Y": 2
                        },
                        {
                            "X": 2.5,
                            "Y": 3.2
                        },
                        {
                            "X": 3.2,
                            "Y": 3.4
                        },
                        {
                            "X": 2.8,
                            "Y": 4.6
                        },
                        {
                            "X": 3.6,
                            "Y": 5.1
                        },
                        {
                            "X": 3.2,
                            "Y": 6
                        },
                        {
                            "X": 2.75,
                            "Y": 6.75
                        },
                        {
                            "X": 2.05,
                            "Y": 7
                        },
                        {
                            "X": 1.6,
                            "Y": 7.8
                        },
                        {
                            "X": 2.4,
                            "Y": 8.2
                        },
                        {
                            "X": 1.9,
                            "Y": 9
                        },
                        {
                            "X": 2.1,
                            "Y": 10
                        },
                        {
                            "X": 1.4,
                            "Y": 10.3
                        },
                        {
                            "X": 1.9,
                            "Y": 11
                        },
                        {
                            "X": 2.45,
                            "Y": 11.6
                        },
                        {
                            "X": 2.6,
                            "Y": 12.7
                        },
                        {
                            "X": 1.9,
                            "Y": 13
                        },
                        {
                            "X": 2.4,
                            "Y": 14
                        }
                    ]
                },
                "DisplacementResetTime": 0.25,
                "DisplacementGraphLoopStart": 12,
                "DisplacementHipFireMultiplier": 2.1
            },
            "ViewKickBack": {
                "SpeedDeflect": 150,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 5,
                "MaxDistance": 10
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 100,
                "SpeedRecover": 45,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 5,
                "MaxDistance": 10
            },
            "GunKickXY": {
                "SpeedDeflect": 15,
                "SpeedRecover": 7.5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.10037029,
                                "Value": 2.3742414,
                                "ArriveTangent": 2.3139226,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.3139226,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.86910254,
                                "Value": 3.2486143,
                                "ArriveTangent": 0.37796962,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.37796962,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.987456,
                                "Value": 4.221411,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 3.171802,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 3.171802,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.49603248,
                                "Value": 1.7733169,
                                "ArriveTangent": 2.5005236,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.5005236,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.9424007,
                                "Value": 2.8563905,
                                "ArriveTangent": 2.3156486,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.3156486,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2991395,
                                "Value": 3.6330304,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.12,
                    "Max": 0.6
                },
                "VerticalBottom": {
                    "Min": 0.08,
                    "Max": 0.2
                },
                "VerticalMultiplier": {
                    "Start": 0.3,
                    "Increment": 0.25,
                    "Max": 1.2,
                    "Threshold": 1.2
                },
                "HorizontalRight": {
                    "Min": 0.4,
                    "Max": 0.8
                },
                "HorizontalLeft": {
                    "Min": 0.4,
                    "Max": 0.8
                },
                "HorizontalMultiplier": {
                    "Start": 0.3,
                    "Increment": 0.36,
                    "Max": 2.25,
                    "Threshold": 1.6
                }
            },
            "GunKickBackAlpha": 0.75,
            "GunKickBack": {
                "SpeedDeflect": 40,
                "SpeedRecover": 8,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.1,
                                "ArriveTangent": 0.3261081,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.3261081,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.2607715,
                                "Value": 0.83725595,
                                "ArriveTangent": 0.19999999,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.19999999,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0.072678626,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.072678626,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": -0.2746576,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.2746576,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.5678601,
                                "Value": 0.29471767,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 3.5,
                "MaxDistance": 5
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 40,
                "SpeedRecover": 10,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.0047700405,
                                "Value": 0.11699188,
                                "ArriveTangent": 0.40916434,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.40916434,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.162847,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.00037670135,
                                "Value": 0.7555107,
                                "ArriveTangent": -0.21268481,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.21268481,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.4907727,
                                "Value": 0.22584128,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2.6,
                "MaxDistance": 5
            }
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
        "SpreadData": {
            "FireSpreadStart": 0.25,
            "FireSpreadIncrease": 0.25,
            "FireSpreadResetTime": 0.3,
            "FireSpreadDecayRate": 0.3,
            "FireSpreadCap": 3,
            "SpreadStanceMultipliers": {
                "Stand": {
                    "TasedSpread": 4,
                    "Start": 3,
                    "Cap": 2,
                    "Increment": 1.5
                },
                "StandMove": {
                    "Spread": 1.45,
                    "TasedSpread": 4,
                    "Start": 3,
                    "Cap": 3,
                    "Increment": 1.5
                },
                "Crouch": {
                    "Spread": 0.45,
                    "TasedSpread": 4,
                    "Start": 0.3,
                    "Cap": 2
                },
                "CrouchMove": {
                    "Spread": 0.95,
                    "TasedSpread": 4,
                    "Start": 0.3,
                    "Cap": 2
                },
                "Target": {
                    "Spread": 0,
                    "TasedSpread": 4,
                    "Start": 0.33
                },
                "TargetMove": {
                    "Spread": 0.25,
                    "TasedSpread": 4,
                    "Start": 0.33
                }
            }
        },
        "RecoilData": {
            "ViewKick": {
                "SpeedDeflect": 40,
                "SpeedRecover": 35,
                "RecoverWaitTime": 0.05,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.031268597,
                                "Value": 1.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5446911,
                                "Value": 1.5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.752279,
                                "Value": 0.890962,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.280459,
                                "Value": 0.367716,
                                "ArriveTangent": -0.96767735,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.93321157,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.757439,
                                "Value": 0.186427,
                                "ArriveTangent": 0.81695795,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.81695795,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.0938375,
                                "Value": 1.032212,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.9638565,
                                "Value": 1.6584123,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.008968,
                                "Value": 0.237833,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.066324,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.959029,
                                "Value": 0.429528,
                                "ArriveTangent": 0.204268,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.058875,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6.562953,
                                "Value": 1.3020033,
                                "ArriveTangent": 0.34040722,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 9.079855,
                                "Value": 1.589234,
                                "ArriveTangent": 0.114120744,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.114120744,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "GraphDisplacementList": {
                    "Points": [
                        {
                            "X": 0.12,
                            "Y": 0.12
                        },
                        {
                            "X": 0.25,
                            "Y": 0.4668
                        },
                        {
                            "X": 0.3,
                            "Y": 0.96
                        },
                        {
                            "X": 0.6,
                            "Y": 1.32
                        },
                        {
                            "X": 0.78,
                            "Y": 1.92
                        },
                        {
                            "X": 1.2,
                            "Y": 1.92
                        },
                        {
                            "X": 1.32,
                            "Y": 2.52
                        },
                        {
                            "X": 1.42,
                            "Y": 2.88
                        },
                        {
                            "X": 1.26,
                            "Y": 3.24
                        },
                        {
                            "X": 1.2,
                            "Y": 3.72
                        },
                        {
                            "X": 1.08,
                            "Y": 3.9
                        },
                        {
                            "X": 0.72,
                            "Y": 4.32
                        },
                        {
                            "X": 0.72,
                            "Y": 4.8
                        },
                        {
                            "X": 0.8,
                            "Y": 5.16
                        },
                        {
                            "X": 0.84,
                            "Y": 5.64
                        },
                        {
                            "X": 1.26,
                            "Y": 6
                        }
                    ]
                },
                "DisplacementResetTime": 0.25,
                "DisplacementGraphLoopStart": 8,
                "DisplacementGraphInitialNum": 2,
                "DisplacementHipFireMultiplier": 1.5
            },
            "ViewKickBack": {
                "SpeedDeflect": 65,
                "SpeedRecover": 34,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 4,
                "MaxDistance": 6
            },
            "ViewKickBackTargeting": {
                "SpeedDeflect": 65,
                "SpeedRecover": 35,
                "Distance": 4,
                "MaxDistance": 6
            },
            "GunKickXY": {
                "SpeedDeflect": 15,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.212118,
                                "Value": 1.2,
                                "ArriveTangent": 2.049062,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 2.049062,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.964013,
                                "Value": 2.675322,
                                "ArriveTangent": 0.632712,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.632712,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.987456,
                                "Value": 4.221411,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 0.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.2,
                                "Value": 1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.5,
                                "Value": 1.7,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1,
                                "Value": 2.2,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2,
                                "Value": 5,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "VerticalTop": {
                    "Min": 0.06,
                    "Max": 0.45
                },
                "VerticalBottom": {
                    "Min": 0.04,
                    "Max": 0.1
                },
                "VerticalMultiplier": {
                    "Start": 0.4,
                    "Increment": 0.15
                },
                "HorizontalRight": {
                    "Min": 0.2,
                    "Max": 0.5
                },
                "HorizontalLeft": {
                    "Min": 0.2,
                    "Max": 0.5
                },
                "HorizontalMultiplier": {
                    "Start": 0.25,
                    "Increment": 0.2,
                    "Max": 1.5,
                    "Threshold": 1.2
                }
            },
            "GunKickBack": {
                "SpeedDeflect": 45,
                "SpeedRecover": 35,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.009777218,
                                "Value": 0.2429018,
                                "ArriveTangent": 0.048585337,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.048585337,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 3.5487418,
                                "Value": 0.4148436,
                                "ArriveTangent": 0.19999999,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.19999999,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0.6151395,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.6151395,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0,
                                "Value": 1,
                                "ArriveTangent": -0.28114763,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.28114763,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 2.207201,
                                "Value": 0.37945068,
                                "ArriveTangent": -0.243474,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.243473,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 6,
                                "Value": 0.1,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2,
                "MaxDistance": 3.5
            },
            "GunKickBackTargeting": {
                "SpeedDeflect": 40,
                "SpeedRecover": 5,
                "DeflectCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Linear",
                                "TangentMode": "RCTM_Auto",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 0.01853776,
                                "Value": 0.56483895,
                                "ArriveTangent": 0,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 1.2757343,
                                "Value": 0.57722634,
                                "ArriveTangent": 0.160285,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.00053537695,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 4.5,
                                "Value": 1,
                                "ArriveTangent": 0.4906866,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.49068764,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "RecoverCurve": {
                    "EditorCurveData": {
                        "Keys": [
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_Break",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": -0.003401637,
                                "Value": 0.7845484,
                                "ArriveTangent": 0.013747798,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": -0.16352001,
                                "LeaveTangentWeight": 0
                            },
                            {
                                "InterpMode": "RCIM_Cubic",
                                "TangentMode": "RCTM_User",
                                "TangentWeightMode": "RCTWM_WeightedNone",
                                "Time": 5.9991074,
                                "Value": 0.2,
                                "ArriveTangent": 0.019803932,
                                "ArriveTangentWeight": 0,
                                "LeaveTangent": 0.019804236,
                                "LeaveTangentWeight": 0
                            }
                        ]
                    }
                },
                "Distance": 2.2,
                "MaxDistance": 3.5
            }
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