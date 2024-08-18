A supplementary tool for Payday 3's loadouts to view weapon details, mechanics, and damage stats

Still a work in progress! ૮ ・ﻌ・ა

### todo:
- build and style the main page
  - ~~scrollable weapon selector~~
  - weapon details
  - ~~skill selector~~
  - ~~attachment selector~~
  - ~~weapon stat info~~
  - ~~enemy damage info~~
- ~~update weapon stats with skill and attachment selection~~
- ~~update damage stats with skill and attachment selection~~
- add tooltips on hover to explain skills, attachments, and mechanics
  - implement tooltips
  - add tooltips for skills
  - add tooltips for attachments
  - add tooltips for mechanics
- write importer to automate creating stat files
  - ~~import weapon stats~~
  - ~~import weapon images~~
  - ~~import weapon attachments~~

### importing weapon data:
1. Open Payday 3's files in FModel
2. For all weapons to be imported, navigate to "Gameplay/Weapons," right click on the directory, and export as json
    - This is under PAYDAY3/Content/ for base game weapons and DLCs/DLC for DLC weapons
3. To import weapon images, navigate to "UI/Textures/InventoryIcons" for base game weapons and "DLCs/DLC/UI" for DLC, right click on the directories, and export as both json and png
4. To import attachments, navigate to "Gameplay/WeaponParts," right click on the directory, and export as json
5. Copy the PAYDAY3 folder from FModel's export directory to the importer directory
6. From the terminal run `node importer.mjs`