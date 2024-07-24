const attachmentData = {
    "A114_Ammo_Default": {},
    "A114_BarrelExt_Default": {},
    "A114_Barrel_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "CQC Barrel"
    },
    "A114_Barrel_Default": {},
    "A114_Barrel_Ranged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Ranged Barrel"
    },
    "A114_Body_Default": {},
    "A114_Body_UpperReceiver": {},
    "A114_Bolt_Default": {},
    "A114_ChargingHandle_Default": {},
    "A114_FrontSight_Default": {},
    "A114_Grip_Default": {},
    "A114_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_A114_Mag_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 12,
                "AmmoLoaded": 12,
                "AmmoPerReload": 12,
                "AmmoInventoryMax": 60,
                "AmmoInventory": 36,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 3
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "A114_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_A114_Mag_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 20,
                "AmmoLoaded": 20,
                "AmmoPerReload": 20,
                "AmmoInventoryMax": 60,
                "AmmoInventory": 36,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 3
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "A114_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_A114_Mag_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 9,
                "AmmoLoaded": 9,
                "AmmoPerReload": 9,
                "AmmoInventoryMax": 60,
                "AmmoInventory": 36,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 3
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "A114_RearSight_Default": {},
    "A114_SightMount_Default": {},
    "A114_StockMount_Default": {},
    "A114_Stock_Default": {},
    "A114_Trigger_Default": {},
    "ATK7_BarrelExt_Default": {},
    "ATK7_Barrel_Default": {},
    "ATK7_Body_Default": {},
    "ATK7_Bolt": {},
    "ATK7_ChargingHandle_Default": {},
    "ATK7_ForeGrip_Default": {},
    "ATK7_Grip_Contoured": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Contoured Grip"
    },
    "ATK7_Grip_Default": {},
    "ATK7_Grip_SmoothFluted": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Smooth Fluted Grip"
    },
    "ATK7_Grip_Tac": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -5
            }
        ],
        "DisplayName": "Cut-Tac Grip"
    },
    "ATK7_Mag_Compact": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_ATK7_Compact",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 15,
                "AmmoLoaded": 15,
                "AmmoPerReload": 15,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 9,
                    "Max": 11
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Compact Magazine"
    },
    "ATK7_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_ATK7_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 30,
                "AmmoLoaded": 30,
                "AmmoPerReload": 30,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 7,
                    "Max": 9
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "ATK7_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_ATK7_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 40,
                "AmmoLoaded": 40,
                "AmmoPerReload": 40,
                "AmmoInventoryMax": 240,
                "AmmoInventory": 80,
                "AmmoPickup": {
                    "Min": 7,
                    "Max": 9
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Magazine"
    },
    "ATK7_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_ATK7_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 30,
                "AmmoLoaded": 30,
                "AmmoPerReload": 30,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 7,
                    "Max": 9
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Magazine"
    },
    "ATK7_RearSight_Default": {},
    "ATK7_SightMount_Default": {},
    "ATK7_Stock_Default": {},
    "ATK7_Stock_HollowFrame": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Hollow Frame"
    },
    "ATK7_Stock_RubberFramed": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": -10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -10
            }
        ],
        "DisplayName": "Rubber Framed Stock"
    },
    "Ammo_12gauge": {},
    "Ammo_357magnum": {},
    "Ammo_40mm": {},
    "Ammo_44magnum": {},
    "Ammo_500Magnum": {},
    "Ammo_9mm": {},
    "BarrelExt_12GObelisk": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            }
        ],
        "DisplayName": "12G Obelisk Silencer"
    },
    "BarrelExt_12GVentComp": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": -10
            }
        ],
        "DisplayName": "12G Vent Compensator"
    },
    "BarrelExt_BeveledSilencer": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            }
        ],
        "DisplayName": "Beveled Silencer"
    },
    "BarrelExt_CompactComp": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -10
            }
        ],
        "DisplayName": "Compact Compensator"
    },
    "BarrelExt_CylindricSilencer": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            }
        ],
        "DisplayName": "Cylindric Silencer"
    },
    "BarrelExt_Express": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::HorizontalGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            }
        ],
        "DisplayName": "Express Muzzle Break"
    },
    "BarrelExt_HybridMB": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            }
        ],
        "DisplayName": "Hybrid Muzzle Break"
    },
    "BarrelExt_IndentComp": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": 15
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            }
        ],
        "DisplayName": "Indent Compensator"
    },
    "BarrelExt_JawChoke": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalSpreadRadius",
                "Value": 15
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalSpreadRadius",
                "Value": -10
            }
        ],
        "DisplayName": "12G Jaw Choke"
    },
    "BarrelExt_ObeliskSilencer": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            }
        ],
        "DisplayName": "Obelisk Silencer"
    },
    "BarrelExt_PartedComp": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -10
            }
        ],
        "DisplayName": "Parted Compensator"
    },
    "BarrelExt_PipedSilencer": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -5
            }
        ],
        "DisplayName": "Piped Silencer"
    },
    "BarrelExt_Ridged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            }
        ],
        "DisplayName": "Edge Ridged Silencer"
    },
    "BarrelExt_SedimentChoke": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallPelletDeviation",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "12G Sediment Choke"
    },
    "BarrelExt_SkeletonizedComp": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": 15
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Skeletonized Compensator"
    },
    "BarrelExt_SnubSilencer": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Snub Silencer"
    },
    "BarrelExt_Torque": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": -5
            }
        ],
        "DisplayName": "Torque Silencer"
    },
    "BarrelExt_WhisperWrap": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 5
            }
        ],
        "DisplayName": "Whisper Wrap Silencer"
    },
    "Bison_Barrel_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            }
        ],
        "DisplayName": "CQC Barrel"
    },
    "Bison_Barrel_Default": {},
    "Bison_Barrel_Ranged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Ranged Barrel"
    },
    "Bison_Body_Default": {},
    "Bison_Bolt_Default": {},
    "Bison_FirePin_Default": {},
    "Bison_FrontSight_Default": {},
    "Bison_Grip_Biofit": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Biofit Grip"
    },
    "Bison_Grip_Default": {},
    "Bison_Grip_Hardwood": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Hardwood Grip"
    },
    "Bison_Grip_Tac": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -5
            }
        ],
        "DisplayName": "Tac Grip "
    },
    "Bison_MagRelease_Default": {},
    "Bison_Mag_Default": {},
    "Bison_RearSight_Default": {},
    "Bison_SightMount_Default": {},
    "Bison_Speedloader_Default": {},
    "Bullkick500_Barrel_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "CQC Barrel"
    },
    "Bullkick500_Barrel_Default": {},
    "Bullkick500_Barrel_Ranged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Ranged Barrel"
    },
    "Bullkick500_Barrel_Tactical": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Tactical Barrel"
    },
    "Bullkick500_Body_Default": {},
    "Bullkick500_Bolt_Default": {},
    "Bullkick500_FrontSight_Default": {},
    "Bullkick500_Grip_Biofit": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Biofit Grip"
    },
    "Bullkick500_Grip_Default": {},
    "Bullkick500_Grip_Hardwood": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Hardwood Grip"
    },
    "Bullkick500_Grip_Tac": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -5
            }
        ],
        "DisplayName": "Tactical Grip"
    },
    "Bullkick500_Mag_Default": {},
    "Bullkick500_Mag_Unfluted": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -5
            }
        ],
        "DisplayName": "Unfluted Cylinder"
    },
    "Bullkick500_RearSight_Default": {},
    "Bullkick500_SightMount_Default": {},
    "Bullkick500_Speedloader_Default": {},
    "CAR4_Ammo_Default": {},
    "CAR4_BarrelExt_Default": {},
    "CAR4_Barrel_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "CQC Barrel"
    },
    "CAR4_Barrel_Default": {},
    "CAR4_Barrel_Ranged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Ranged Barrel"
    },
    "CAR4_Body_Default": {},
    "CAR4_Bolt_Default": {},
    "CAR4_ChargingHandle_Default": {},
    "CAR4_Foregrip_Default": {},
    "CAR4_FrontSight_Default": {},
    "CAR4_Grip_Default": {},
    "CAR4_Mag_Compact": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_CAR4_Mag_Compact",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 20,
                "AmmoLoaded": 20,
                "AmmoPerReload": 20,
                "AmmoInventoryMax": 400,
                "AmmoInventory": 160,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Compact Mag"
    },
    "CAR4_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_CAR4_Mag_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 30,
                "AmmoLoaded": 30,
                "AmmoPerReload": 30,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "CAR4_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_CAR4_Mag_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 45,
                "AmmoLoaded": 45,
                "AmmoPerReload": 45,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "CAR4_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_CAR4_Mag_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 30,
                "AmmoLoaded": 30,
                "AmmoPerReload": 30,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "CAR4_RearSight_Default": {},
    "CAR4_StockMount_Default": {},
    "CAR4_stock_Default": {},
    "Castigo44_Barrel_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "CQC Barrel"
    },
    "Castigo44_Barrel_Default": {},
    "Castigo44_Barrel_Ranged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Ranged Barrel"
    },
    "Castigo44_Barrel_Tac": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Tac Barrel"
    },
    "Castigo44_Body_Default": {},
    "Castigo44_Bolt_Default": {},
    "Castigo44_FrontSight_Default": {},
    "Castigo44_Grip_Biofit": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Biofit Grip"
    },
    "Castigo44_Grip_Default": {},
    "Castigo44_Grip_Hardwood": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Hardwood Grip"
    },
    "Castigo44_Grip_Tac": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -5
            }
        ],
        "DisplayName": "Tac Grip"
    },
    "Castigo44_Mag_Default": {},
    "Castigo44_RearSight_Default": {},
    "Castigo44_SightMount_Default": {},
    "Castigo44_Speedloader_Default": {},
    "Commando_Ammo_Default": {},
    "Commando_Barrel_Default": {},
    "Commando_Body_LowerReceiver_Default": {},
    "Commando_Body_UpperReceiver_Default": {},
    "Commando_ChargingHandle_Default": {},
    "Commando_FrontSight_Default": {},
    "Commando_Mag_Compact": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_Commando_Compact",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 20,
                "AmmoLoaded": 20,
                "AmmoPerReload": 20,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 140,
                "AmmoPickup": {
                    "Min": 9,
                    "Max": 12
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Compact Mag"
    },
    "Commando_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_Commando_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 25,
                "AmmoLoaded": 25,
                "AmmoPerReload": 25,
                "AmmoInventoryMax": 200,
                "AmmoPickup": {
                    "Min": 9,
                    "Max": 12
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "Commando_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_Commando_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 32,
                "AmmoLoaded": 32,
                "AmmoPerReload": 32,
                "AmmoInventoryMax": 200,
                "AmmoPickup": {
                    "Min": 9,
                    "Max": 12
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "Commando_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_Commando_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 25,
                "AmmoLoaded": 25,
                "AmmoPerReload": 25,
                "AmmoInventoryMax": 200,
                "AmmoPickup": {
                    "Min": 6,
                    "Max": 9
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "Commando_RearSight_Default": {},
    "Commando_SightMount_Default": {},
    "Commando_StockMount_Default": {},
    "Commando_Stock_Default": {},
    "Compact7_Ammo_Default": {},
    "Compact7_BarrelExt_Default": {},
    "Compact7_Barrel_Default": {},
    "Compact7_Body_Default": {},
    "Compact7_ChargingHandle_Default": {},
    "Compact7_Foregrip_Default": {},
    "Compact7_FrontSight_Default": {},
    "Compact7_Mag_Compact": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_Compact7_Compact",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 20,
                "AmmoLoaded": 20,
                "AmmoPerReload": 20,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 140,
                "AmmoPickup": {
                    "Min": 8,
                    "Max": 10
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Compact Mag"
    },
    "Compact7_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_Compact7_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 30,
                "AmmoLoaded": 30,
                "AmmoPerReload": 30,
                "AmmoInventoryMax": 200,
                "AmmoPickup": {
                    "Min": 8,
                    "Max": 10
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "Compact7_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_Compact7_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 40,
                "AmmoLoaded": 40,
                "AmmoPerReload": 40,
                "AmmoInventoryMax": 200,
                "AmmoPickup": {
                    "Min": 8,
                    "Max": 10
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "Compact7_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_Compact7_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 30,
                "AmmoLoaded": 30,
                "AmmoPerReload": 30,
                "AmmoInventoryMax": 200,
                "AmmoPickup": {
                    "Min": 6,
                    "Max": 9
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "Compact7_RearSight_Default": {},
    "Compact7_StockMount_Default": {},
    "Compact7_Stock_Default": {},
    "FIK22_Ammo_Default": {},
    "FIK22_BarrelExt_MuzzleBreak": {},
    "FIK22_Barrel_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "CQC Barrel"
    },
    "FIK22_Barrel_Default": {},
    "FIK22_Barrel_Ranged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            }
        ],
        "DisplayName": "Ranged Barrel"
    },
    "FIK22_Body_Default": {},
    "FIK22_ChargingHandle_Default": {},
    "FIK22_ForeGrip_Default": {},
    "FIK22_FrontSight_Default": {},
    "FIK22_Grip_Default": {},
    "FIK22_Mag_Compact": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_FIK22_Mag_Compact",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 15,
                "AmmoLoaded": 15,
                "AmmoPerReload": 15,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 9,
                    "Max": 11
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Compact Mag"
    },
    "FIK22_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_FIK22_Mag_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 25,
                "AmmoLoaded": 25,
                "AmmoPerReload": 25,
                "AmmoInventoryMax": 250,
                "AmmoPickup": {
                    "Min": 7,
                    "Max": 9
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "FIK22_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_FIK22_Mag_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 35,
                "AmmoLoaded": 35,
                "AmmoPerReload": 35,
                "AmmoInventoryMax": 210,
                "AmmoInventory": 70,
                "AmmoPickup": {
                    "Min": 7,
                    "Max": 9
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "FIK22_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_FIK22_Mag_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 25,
                "AmmoLoaded": 25,
                "AmmoPerReload": 25,
                "AmmoInventoryMax": 250,
                "AmmoPickup": {
                    "Min": 7,
                    "Max": 9
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "FIK22_RearSight_Default": {},
    "FIK22_StockMount_Default": {},
    "FIK22_Stock_Default": {},
    "FSA12_Ammo_Default": {},
    "FSA12_BarrelExt_Default": {},
    "FSA12_Barrel_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::ViewKickRecoverySpeed",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "CQC Barrel"
    },
    "FSA12_Barrel_Default": {},
    "FSA12_Barrel_Ranged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -10
            }
        ],
        "DisplayName": "Ranged Barrel"
    },
    "FSA12_Body_Default": {},
    "FSA12_ChargingHandle_Default": {},
    "FSA12_Foregrip_Default": {},
    "FSA12_FrontSight_Default": {},
    "FSA12_Grip_Default": {},
    "FSA12_Mag_Compact": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_FSA12_Compact",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 5,
                "AmmoLoaded": 5,
                "AmmoPerReload": 5,
                "AmmoInventory": 40,
                "AmmoPickup": {
                    "Min": 4,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Compact Mag"
    },
    "FSA12_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_FSA12_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoInventory": 40,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 4
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "FSA12_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_FSA12_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 15,
                "AmmoLoaded": 15,
                "AmmoPerReload": 15,
                "AmmoInventoryMax": 90,
                "AmmoInventory": 30,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 4
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "FSA12_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_FSA12_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoInventory": 40,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 4
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "FSA12_RearSight_Default": {},
    "FSA12_StockMount_Default": {},
    "FSA12_Stock_Default": {},
    "Grip_Biofit": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Biofit Grip"
    },
    "Grip_Perforated": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Perforated Grip"
    },
    "Grip_Tac": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -5
            }
        ],
        "DisplayName": "Tac Grip"
    },
    "HET5_Ammo_Default": {},
    "HET5_BarrelExt_Default": {},
    "HET5_Barrel_Default": {},
    "HET5_Bipod_Default": {},
    "HET5_Body_LowerReceiver_Default": {},
    "HET5_Body_UpperReceiver": {},
    "HET5_Bolt_Default": {},
    "HET5_ChargingHandle_Default": {},
    "HET5_Foregrip_Default": {},
    "HET5_Grip_Default": {},
    "HET5_Mag_Default": {},
    "HET5_Sight_Default": {
        "TargetingData": {
            "TargetingMagnification": 2.3,
            "TargetingOnTopMagnification": 2.3
        }
    },
    "HET5_Stock_Default": {},
    "KU59_Ammo_Default": {},
    "KU59_BarrelExt_Default": {},
    "KU59_Barrel_Default": {},
    "KU59_Barrel_Rail": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Rail Barrel"
    },
    "KU59_Barrel_TradGrip": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": -5
            }
        ],
        "DisplayName": "Trad Grip Barrel"
    },
    "KU59_Body_Default": {},
    "KU59_ChargingHandle_Default": {},
    "KU59_Grip_Biofit": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Biofit Grip"
    },
    "KU59_Grip_Default": {},
    "KU59_Grip_Perforated": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Perforated Grip"
    },
    "KU59_Grip_Tac": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -5
            }
        ],
        "DisplayName": "Tac Grip"
    },
    "KU59_Mag_Compact": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_KU59_Mag_Compact",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 20,
                "AmmoLoaded": 20,
                "AmmoPerReload": 20,
                "AmmoInventoryMax": 400,
                "AmmoInventory": 160,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Compact Mag"
    },
    "KU59_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_KU59_Mag_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 30,
                "AmmoLoaded": 30,
                "AmmoPerReload": 30,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "KU59_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_KU59_Mag_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 45,
                "AmmoLoaded": 45,
                "AmmoPerReload": 45,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "KU59_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_KU59_Mag_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 30,
                "AmmoLoaded": 30,
                "AmmoPerReload": 30,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "KU59_RearSight_Default": {},
    "KU59_SightMount_Default": {},
    "KU59_StockMount_Default": {},
    "KU59_Stock_Default": {},
    "MX63_Ammo_Default": {},
    "MX63_BarrelExt_Default": {},
    "MX63_Barrel_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "CQC Barrel"
    },
    "MX63_Barrel_Default": {},
    "MX63_Barrel_Ranged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Ranged Barrel"
    },
    "MX63_Body_Default": {},
    "MX63_Bolt_Default": {},
    "MX63_ChargingHandle_Default": {},
    "MX63_Foregrip_Default": {},
    "MX63_FrontSight_Default": {},
    "MX63_Grip_Default": {},
    "MX63_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_MX63_Mag_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 100,
                "AmmoLoaded": 100,
                "AmmoPerReload": 100,
                "AmmoInventoryMax": 400,
                "AmmoInventory": 200,
                "AmmoPickup": {
                    "Min": 8,
                    "Max": 10
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Always"
            }
        }
    },
    "MX63_RearSight_Default": {},
    "MX63_StockMount_Default": {},
    "MX63_stock_Default": {},
    "Mamba_Barrel_Default": {},
    "Mamba_Body_Default": {},
    "Mamba_Bolt_Default": {},
    "Mamba_ChargingHandle_Default": {},
    "Mamba_Foregrip_Default": {},
    "Mamba_Grip_Default": {},
    "Mamba_MagRelease_Default": {},
    "Mamba_Mag_Default": {},
    "Mamba_SightMount_Rail": {},
    "Mamba_StockMount_Default": {},
    "Mamba_Stock_Default": {},
    "Mamba_Trigger_Default": {},
    "Mosconi12C_Barrel_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::ViewKickRecoverySpeed",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": -5
            }
        ],
        "DisplayName": "CQC Barrel"
    },
    "Mosconi12C_Barrel_Default": {},
    "Mosconi12C_Barrel_Ranged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -10
            }
        ],
        "DisplayName": "Ranged Barrel"
    },
    "Mosconi12C_Body_Default": {},
    "Mosconi12C_Foregrip_Default": {},
    "Mosconi12C_FrontSight_Default": {},
    "Mosconi12C_MagRelease_Default": {},
    "Mosconi12C_RearSight_Default": {},
    "Mosconi12C_SightMount_Rail": {},
    "Mosconi12C_Stock_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": 15
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -10
            }
        ],
        "DisplayName": "CQC"
    },
    "Mosconi12C_Stock_Default": {},
    "Mosconi12C_Stock_Fortified": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::ViewKickRecoverySpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": -5
            }
        ],
        "DisplayName": "Fortified"
    },
    "Mosconi12C_Stock_Padded": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::ViewKickRecoverySpeed",
                "Value": -5
            }
        ],
        "DisplayName": "Padded"
    },
    "NWB9_Ammo_Default": {},
    "NWB9_BarrelExt_Default": {},
    "NWB9_Barrel_Default": {},
    "NWB9_Body_Default": {},
    "NWB9_Bolt_Default": {},
    "NWB9_ChargingHandle_Default": {},
    "NWB9_Foregrip_Default": {},
    "NWB9_FrontSight_Default": {},
    "NWB9_Grip_Default": {},
    "NWB9_Mag_Compact": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_NWB9_Mag_Compact",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 20,
                "AmmoLoaded": 20,
                "AmmoPerReload": 20,
                "AmmoInventoryMax": 400,
                "AmmoInventory": 160,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Compact Mag"
    },
    "NWB9_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_NWB9_Mag_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 30,
                "AmmoLoaded": 30,
                "AmmoPerReload": 30,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "NWB9_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_NWB9_Mag_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 45,
                "AmmoLoaded": 45,
                "AmmoPerReload": 45,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "NWB9_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_NWB9_Mag_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 30,
                "AmmoLoaded": 30,
                "AmmoPerReload": 30,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 3,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "NWB9_RearSight_Default": {},
    "NWB9_StockMount_Default": {},
    "NWB9_stock_Default": {},
    "PC9_Ammo_Default": {},
    "PC9_BarrelExt_Default": {},
    "PC9_Barrel_Default": {},
    "PC9_Body_Default": {},
    "PC9_Bolt_Default": {},
    "PC9_ChargingHandle_Default": {},
    "PC9_Foregrip_Default": {},
    "PC9_FrontSight_Default": {},
    "PC9_Grip_Default": {},
    "PC9_Mag_Compact": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_PC9_Compact",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 20,
                "AmmoLoaded": 20,
                "AmmoPerReload": 20,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 150,
                "AmmoPickup": {
                    "Min": 7,
                    "Max": 10
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Compact Mag"
    },
    "PC9_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_PC9_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 30,
                "AmmoLoaded": 30,
                "AmmoPerReload": 30,
                "AmmoInventoryMax": 200,
                "AmmoPickup": {
                    "Min": 7,
                    "Max": 10
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "PC9_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_PC9_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 35,
                "AmmoLoaded": 35,
                "AmmoPerReload": 35,
                "AmmoInventoryMax": 200,
                "AmmoPickup": {
                    "Min": 7,
                    "Max": 10
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "PC9_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_PC9_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 30,
                "AmmoLoaded": 30,
                "AmmoPerReload": 30,
                "AmmoInventoryMax": 200,
                "AmmoPickup": {
                    "Min": 6,
                    "Max": 9
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "PC9_RearSight_Default": {},
    "PC9_StockMount_Default": {},
    "PC9_Stock_Default": {},
    "R880_Ammo_Default": {},
    "R880_Barrel_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::ViewKickRecoverySpeed",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": -5
            }
        ],
        "DisplayName": "CQC Barrel"
    },
    "R880_Barrel_Comp": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Comp Barrel"
    },
    "R880_Barrel_Default": {},
    "R880_Barrel_Ranged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -10
            }
        ],
        "DisplayName": "Ranged Barrel"
    },
    "R880_Body_Default": {},
    "R880_Bolt_Default": {},
    "R880_Foregrip_Biofit": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::EndCycleReloadPlayRate",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            }
        ],
        "DisplayName": "Biofit Fore-End"
    },
    "R880_Foregrip_Default": {},
    "R880_Foregrip_Tactical": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::EndCycleReloadPlayRate",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": -5
            }
        ],
        "DisplayName": "Tactical Fore-End"
    },
    "R880_FrontSight_Default": {},
    "R880_Mag_Default": {},
    "R880_SightMount_Rail": {},
    "R880_Stock_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": 15
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -10
            }
        ],
        "DisplayName": "CQC"
    },
    "R880_Stock_Default": {},
    "R880_Stock_Fortified": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::ViewKickRecoverySpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": -5
            }
        ],
        "DisplayName": "Fortified"
    },
    "R880_Stock_Padded": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::ViewKickRecoverySpeed",
                "Value": -5
            }
        ],
        "DisplayName": "Padded"
    },
    "R900S_Ammo_Default": {},
    "R900S_Barrel_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "CQC Barrel"
    },
    "R900S_Barrel_Default": {},
    "R900S_Barrel_Ranged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Ranged Barrel"
    },
    "R900S_Body_Default": {},
    "R900S_Bolt_Default": {},
    "R900S_ChargingHandle_Default": {},
    "R900S_FirePin_Default": {},
    "R900S_MagRelease_Default": {},
    "R900S_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_R900S_Mag_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 5,
                "AmmoLoaded": 5,
                "AmmoPerReload": 5,
                "AmmoInventoryMax": 50,
                "AmmoInventory": 25,
                "AmmoPickup": {
                    "Min": 1,
                    "Max": 2
                }
            }
        }
    },
    "R900S_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_R900S_Mag_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoInventoryMax": 50,
                "AmmoInventory": 25,
                "AmmoPickup": {
                    "Min": 1,
                    "Max": 2
                }
            }
        },
        "DisplayName": "Extended Mag"
    },
    "R900S_SightMount_Rail": {},
    "R900S_Stock_Default": {},
    "R900S_Stock_HardWood": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 15
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": -10
            }
        ],
        "DisplayName": "Hardwood"
    },
    "R900S_Stock_Lightweight": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -10
            }
        ],
        "DisplayName": "Lightweight"
    },
    "RG5_Ammo_Default": {},
    "RG5_BarrelExt_Default": {},
    "RG5_Barrel_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "CQC Barrel"
    },
    "RG5_Barrel_Default": {},
    "RG5_Barrel_Ranged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Ranged Barrel"
    },
    "RG5_Body_Default": {},
    "RG5_Bolt_Default": {},
    "RG5_ChargingHandle_Default": {},
    "RG5_Foregrip_Default": {},
    "RG5_FrontSight_Default": {},
    "RG5_Grip_Contoured": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Contoured Grip"
    },
    "RG5_Grip_Default": {},
    "RG5_Grip_SmoothFluted": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Smooth Fluted Grip"
    },
    "RG5_Grip_Tac": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -5
            }
        ],
        "DisplayName": "Cut-Tac Grip"
    },
    "RG5_Mag_Compact": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_RG5_Mag_Compact",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 15,
                "AmmoLoaded": 15,
                "AmmoPerReload": 15,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 7,
                    "Max": 9
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Compact Magazine"
    },
    "RG5_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_RG5_Mag_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 20,
                "AmmoLoaded": 20,
                "AmmoPerReload": 20,
                "AmmoInventoryMax": 200,
                "AmmoInventory": 80,
                "AmmoPickup": {
                    "Min": 5,
                    "Max": 7
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "RG5_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_RG5_Mag_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 35,
                "AmmoLoaded": 35,
                "AmmoPerReload": 35,
                "AmmoInventoryMax": 210,
                "AmmoInventory": 70,
                "AmmoPickup": {
                    "Min": 5,
                    "Max": 7
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Magazine"
    },
    "RG5_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_RG5_Mag_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 20,
                "AmmoLoaded": 20,
                "AmmoPerReload": 20,
                "AmmoInventoryMax": 200,
                "AmmoInventory": 80,
                "AmmoPickup": {
                    "Min": 5,
                    "Max": 7
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Magazine"
    },
    "RG5_RearSight_Default": {},
    "RG5_SightMount_Default": {},
    "RG5_StockMount_Default": {},
    "RG5_Stock_HQ": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": -5
            }
        ],
        "DisplayName": "HQ"
    },
    "RG5_Stock_Light": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Light Frame"
    },
    "RG5_Stock_TQ": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": -10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -10
            }
        ],
        "DisplayName": "TQ"
    },
    "RG5_stock_Default": {},
    "S403_Ammo_Default": {},
    "S403_Barrel_Default": {},
    "S403_Body_Default": {},
    "S403_ChargingHandle_Default": {},
    "S403_FrontSight_Default": {},
    "S403_Grip_Friction": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -5
            }
        ],
        "DisplayName": "Friction Grip"
    },
    "S403_Grip_Grained": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            }
        ],
        "DisplayName": "Grained Grip"
    },
    "S403_Grip_Ribbed": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Ribbed Grip"
    },
    "S403_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_S403_Mag_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 17,
                "AmmoLoaded": 17,
                "AmmoPerReload": 17,
                "AmmoInventoryMax": 60,
                "AmmoInventory": 48,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 3
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "S403_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_S403_Mag_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 21,
                "AmmoLoaded": 21,
                "AmmoPerReload": 21,
                "AmmoInventoryMax": 60,
                "AmmoInventory": 48,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 3
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "S403_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_S403_Mag_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 13,
                "AmmoLoaded": 13,
                "AmmoPerReload": 13,
                "AmmoInventoryMax": 60,
                "AmmoInventory": 48,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 3
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "S403_RearSight_Default": {},
    "S403_SightMount_Default": {},
    "S40_Ammo_Default": {},
    "S40_Barrel_Default": {},
    "S40_Body_Default": {},
    "S40_Bolt_Default": {},
    "S40_ChargingHandle_Default": {},
    "S40_FrontSight_Default": {},
    "S40_Grip_Default": {},
    "S40_Grip_Embossed": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            }
        ],
        "DisplayName": "Embossed Grip"
    },
    "S40_Grip_Hardwood": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Hardwood Grip"
    },
    "S40_Grip_Tac": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -5
            }
        ],
        "DisplayName": "Tac Grip"
    },
    "S40_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_S40_Mag_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 12,
                "AmmoLoaded": 12,
                "AmmoPerReload": 12,
                "AmmoInventoryMax": 60,
                "AmmoInventory": 48,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 3
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "S40_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_S40_Mag_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 20,
                "AmmoLoaded": 20,
                "AmmoPerReload": 20,
                "AmmoInventoryMax": 60,
                "AmmoInventory": 48,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 3
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "S40_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_S40_Mag_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 9,
                "AmmoLoaded": 9,
                "AmmoPerReload": 9,
                "AmmoInventoryMax": 60,
                "AmmoInventory": 48,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 3
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "S40_RearSight_Default": {},
    "S40_SightMount_Default": {},
    "SPM11_Ammo_Default": {},
    "SPM11_Barrel_Default": {},
    "SPM11_Body_Default": {},
    "SPM11_Bolt_Default": {},
    "SPM11_ChargingHandle_Default": {},
    "SPM11_FrontSight_Default": {},
    "SPM11_Grip_Checkered": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Checkered Grip"
    },
    "SPM11_Grip_Default": {},
    "SPM11_Grip_Embossed": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            }
        ],
        "DisplayName": "Embossed Grip"
    },
    "SPM11_Grip_Tac": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -5
            }
        ],
        "DisplayName": "Tac Grip"
    },
    "SPM11_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_SPM11_Mag_default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoInventoryMax": 60,
                "AmmoInventory": 48,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 3
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "SPM11_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_SPM11_Mag_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 18,
                "AmmoLoaded": 18,
                "AmmoPerReload": 18,
                "AmmoInventoryMax": 60,
                "AmmoInventory": 48,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 3
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "SPM11_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_SPM11_Mag_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 7,
                "AmmoLoaded": 7,
                "AmmoPerReload": 7,
                "AmmoInventoryMax": 60,
                "AmmoInventory": 48,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 3
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "SPM11_RearSight_Default": {},
    "SPM11_SightMount_Default": {},
    "Sight_Box": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -10
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 1.15
        },
        "DisplayName": "Box RDS"
    },
    "Sight_ClassicRDS": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": -5
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 1.15,
            "TargetingOnTopMagnification": 1.15
        },
        "DisplayName": "Classic RDS"
    },
    "Sight_Compact": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 1.15,
            "TargetingOnTopMagnification": 1.15
        },
        "DisplayName": "Compact RDS"
    },
    "Sight_Fluted": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": -10
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 5,
            "TargetingOnTopMagnification": 6
        },
        "DisplayName": "Fluted Marksman Scope"
    },
    "Sight_LED": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": -5
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 1.1
        },
        "DisplayName": "LED RDS"
    },
    "Sight_LightHolographic": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::InitialRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": -15
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 1.2,
            "TargetingOnTopMagnification": 1.2
        },
        "DisplayName": "Light Holographic Sight"
    },
    "Sight_Lined": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::ScreenShakeAmplitude",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 1.8,
            "TargetingOnTopMagnification": 1.15
        },
        "DisplayName": "Lined Sight"
    },
    "Sight_Long6X": {
        "TargetingData": {
            "TargetingMagnification": 5,
            "TargetingOnTopMagnification": 6
        }
    },
    "Sight_Primed": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -10
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 6,
            "TargetingOnTopMagnification": 7
        },
        "DisplayName": "Primed Marksman Scope"
    },
    "Sight_Projection": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::InitialRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": -5
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 1.2,
            "TargetingOnTopMagnification": 1.2
        },
        "DisplayName": "Projection RDS"
    },
    "Sight_Sheath": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": -5
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 1.15
        },
        "DisplayName": "Sheath RDS"
    },
    "Sight_Slate": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": -5
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 1.1
        },
        "DisplayName": "Slate RDS"
    },
    "Sight_Snapshot": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": -5
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 1.15,
            "TargetingOnTopMagnification": 1.15
        },
        "DisplayName": "Snapshot Clear-Tag"
    },
    "Sight_Tactical": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::ScreenShakeAmplitude",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -10
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": -5
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 2,
            "TargetingOnTopMagnification": 2
        },
        "DisplayName": "Tactical Sight"
    },
    "Sight_Tagged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": -5
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 1.15
        },
        "DisplayName": "Tagged Iron Sight"
    },
    "Sight_ViewPoint": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::ScreenShakeAmplitude",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": -5
            }
        ],
        "TargetingData": {
            "TargetingMagnification": 1.3,
            "TargetingOnTopMagnification": 1.3
        },
        "DisplayName": "Viewpoint Sight"
    },
    "Stock_HQ": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": -5
            }
        ],
        "DisplayName": "HQ"
    },
    "Stock_LightFrame": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Light Frame"
    },
    "Stock_Minimized": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 15
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": 15
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -15
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -10
            }
        ],
        "DisplayName": "Minimized Hook Stock"
    },
    "Stock_PaddedTube": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": 15
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -10
            }
        ],
        "DisplayName": "Padded Tube"
    },
    "Stock_TQ": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::SprintExitPlayRate",
                "Value": -10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -10
            }
        ],
        "DisplayName": "TQ"
    },
    "Stryk7_Ammo_Default": {},
    "Stryk7_Barrel_Default": {},
    "Stryk7_Body_Default": {},
    "Stryk7_Bolt_Default": {},
    "Stryk7_ChargingHandle_Default": {},
    "Stryk7_FrontSight_Default": {},
    "Stryk7_Grip_Friction": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": -5
            }
        ],
        "DisplayName": "Friction Grip"
    },
    "Stryk7_Grip_Grained": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            }
        ],
        "DisplayName": "Grained Grip"
    },
    "Stryk7_Grip_Ribbed": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalGunkick",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Ribbed Grip"
    },
    "Stryk7_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_Stryk7_Mag_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 17,
                "AmmoLoaded": 17,
                "AmmoPerReload": 17,
                "AmmoInventoryMax": 85,
                "AmmoInventory": 68,
                "AmmoPickup": {
                    "Min": 4,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "Stryk7_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_Stryk7_Mag_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 31,
                "AmmoLoaded": 31,
                "AmmoPerReload": 31,
                "AmmoInventoryMax": 85,
                "AmmoInventory": 68,
                "AmmoPickup": {
                    "Min": 4,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "Stryk7_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_Stryk7_Mag_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 13,
                "AmmoLoaded": 13,
                "AmmoPerReload": 13,
                "AmmoInventoryMax": 85,
                "AmmoInventory": 68,
                "AmmoPickup": {
                    "Min": 4,
                    "Max": 5
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "Stryk7_RearSight_Default": {},
    "Stryk7_SightMount_Default": {},
    "VF7S_Ammo_Default": {},
    "VF7S_BarrelExt_Default": {},
    "VF7S_Barrel_CQC": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "CQC Barrel"
    },
    "VF7S_Barrel_Default": {},
    "VF7S_Barrel_Ranged": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::DamageDistance",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::OverallGunkick",
                "Value": -5
            }
        ],
        "DisplayName": "Ranged Barrel"
    },
    "VF7S_Body_Default": {},
    "VF7S_Bolt_Default": {},
    "VF7S_Foregrip_Default": {},
    "VF7S_FrontSight_Default": {},
    "VF7S_Grip_Default": {},
    "VF7S_Mag_Compact": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_VF7S_Mag_Compact",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 4
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Compact Mag"
    },
    "VF7S_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_VF7S_Mag_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 20,
                "AmmoLoaded": 20,
                "AmmoPerReload": 20,
                "AmmoInventoryMax": 200,
                "AmmoInventory": 80,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 4
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "VF7S_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_VF7S_Mag_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 30,
                "AmmoLoaded": 30,
                "AmmoPerReload": 30,
                "AmmoInventoryMax": 200,
                "AmmoInventory": 80,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 4
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "VF7S_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_VF7S_Mag_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 20,
                "AmmoLoaded": 20,
                "AmmoPerReload": 20,
                "AmmoInventoryMax": 200,
                "AmmoInventory": 80,
                "AmmoPickup": {
                    "Min": 2,
                    "Max": 4
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "VF7S_RearSight_Default": {},
    "VF7S_StockMount_Default": {},
    "VF7S_stock_Default": {},
    "VerticalGrip_AngledGhost": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Angled Ghost Grip"
    },
    "VerticalGrip_Cylinder": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::OverallSwapSpeed",
                "Value": -10
            },
            {
                "Key": "ESBZWeaponAttribute::TargetingTransitionTime",
                "Value": -10
            }
        ],
        "DisplayName": "Cylinder Grip"
    },
    "VerticalGrip_FlatSide": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -15
            }
        ],
        "DisplayName": "Flat-Side STAB Grip"
    },
    "VerticalGrip_QuickHold": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::InitialRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Quick Hold Grip"
    },
    "VerticalGrip_RiggerHandstop": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 10
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -5
            },
            {
                "Key": "ESBZWeaponAttribute::InitialRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Rigger Handstop"
    },
    "VerticalGrip_Stub": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::HipfireSpread",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::VerticalRecoil",
                "Value": 5
            },
            {
                "Key": "ESBZWeaponAttribute::HorizontalRecoil",
                "Value": -5
            }
        ],
        "DisplayName": "Stub Grip"
    },
    "WAR45_Ammo_Default": {},
    "WAR45_BarrelExt_Default": {},
    "WAR45_Barrel_Default": {},
    "WAR45_Body_Default": {},
    "WAR45_Bolt": {},
    "WAR45_ChargingHandle_Default": {},
    "WAR45_FrontSight_Default": {},
    "WAR45_Grip_Default": {},
    "WAR45_Mag_Compact": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 5
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_WAR45_Compact",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 15,
                "AmmoLoaded": 15,
                "AmmoPerReload": 15,
                "AmmoInventoryMax": 300,
                "AmmoInventory": 120,
                "AmmoPickup": {
                    "Min": 7,
                    "Max": 9
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Compact Mag"
    },
    "WAR45_Mag_Default": {
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_WAR45_Default",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 25,
                "AmmoLoaded": 25,
                "AmmoPerReload": 25,
                "AmmoInventoryMax": 250,
                "AmmoPickup": {
                    "Min": 5,
                    "Max": 7
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        }
    },
    "WAR45_Mag_Extended": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": -10
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_WAR45_Extended",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 35,
                "AmmoLoaded": 35,
                "AmmoPerReload": 35,
                "AmmoInventoryMax": 210,
                "AmmoInventory": 70,
                "AmmoPickup": {
                    "Min": 5,
                    "Max": 7
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Extended Mag"
    },
    "WAR45_Mag_Quick": {
        "AttributeModifierMap": [
            {
                "Key": "ESBZWeaponAttribute::OverallReloadPlayRate",
                "Value": 15
            }
        ],
        "MagazineData": {
            "Type": "SBZWeaponMagazineData",
            "Name": "WMD_WAR45_Quick",
            "Class": "UScriptClass'SBZWeaponMagazineData'",
            "Properties": {
                "AmmoLoadedMax": 25,
                "AmmoLoaded": 25,
                "AmmoPerReload": 25,
                "AmmoInventoryMax": 250,
                "AmmoPickup": {
                    "Min": 5,
                    "Max": 7
                },
                "AmmoVisibilityType": "ESBZWeaponAmmoVisibilityType::Reload"
            }
        },
        "DisplayName": "Quick-Pull Mag"
    },
    "WAR45_RearSight_Default": {},
    "WAR45_StockMount_Default": {},
    "WAR45_Stock_Default": {}
}