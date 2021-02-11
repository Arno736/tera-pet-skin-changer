'use strict'

module.exports = function PetSkinChanger(mod) {
    let selectPet;
    let pets = require('./pets.js')

    mod.command.add(['psc', 'petskinchanger'], (y, z) => {
        switch (y) {
            case "enable":
                mod.settings.enabled = !mod.settings.enabled
                mod.command.message('Mod enabled : ' + mod.settings.enabled);
                break;
            default:
                if (pets[y]) {
                    selectPet = pets[y];
                    mod.settings.petReplaceId = y;
                }
                else selectPet = { id: y, zone: ((z) ? z : 1023) };
                break;
        }
    });

    mod.hook('S_LOGIN', 14, (event) => {
        selectPet = pets[mod.settings.petReplaceId];
    });

    mod.hook('S_REQUEST_SPAWN_SERVANT', 4, (event) => {
        if (event.ownerId != mod.game.me.gameId || !selectPet || !mod.settings.enabled) return;
        
        if (selectPet.styleId) {
            event.restyleId = selectPet.styleId;
        }
        else {
            event.linkedNpcTemplateId =  selectPet.id;
            event.linkedNpcHuntingZoneId =  selectPet.zone;
        }
        
        return true
    });
}