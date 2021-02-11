'use strict'

module.exports = function PetSkinChanger(mod) {
    let selectPet;
    let pets = {
        1: { id:80007000, zone: 1023 }, //Chat
        2: { id:80011000, zone: 1023 }, //Mouton
        3: { id:80022000, zone: 1023 }, //Grenouille
        4: { id:80033000, zone: 1023 }, //Truc sur une toupille
        5: { id:80034000, zone: 1023 }, //Machin feuillut
        6: { id:80035000, zone: 1023 }, //Draka Rouge
        7: { id:80038000, zone: 1023 }, //Chat tous mignion
        8: { id:80039000, zone: 1023 }, //Marmote fantome
        9: { id:80045000, zone: 1023 }, //Cochon en or
        10: { id:80046000, zone: 1023 }, //Champi Mimi
        11: { id:80047000, zone: 1023 }, //Blob vert
        12: { id:80048000, zone: 1023 }, //Cochon helokity
        13: { id:80049000, zone: 1023 }, //Arbre rose
        14: { id:80050000, zone: 1023 }, //Chat tabi brun je crois
        15: { id:80051000, zone: 1023 }, //Chat tabi gris je crois
        16: { id:80052000, zone: 1023 }, //Dkurion
        17: { id:80053000, zone: 1023 }, //Pet de base
        18: { id:80054000, zone: 1023 }, //Pet de base
        19: { id:80055000, zone: 1023 }, //Pet de base
        20: { id:80056000, zone: 1023 }, //RK9
        21: { id:80057000, zone: 1023 }, //Boule
        22: { id:80058000, zone: 1023 }, //Ello (Base)
        23: { id:80059000, zone: 1023 }, //Riko
        24: { id:80062000, zone: 1023 }, //Chauve souris
        25: { id:80063000, zone: 1023 }, //Ourson
        26: { id:80064000, zone: 1023 }, //Chat comme ourson
        27: { id:80065000, zone: 1023 }, //Panda comme ourson
        28: { id:80066000, zone: 1023 }, //Lapin Rose comme ourson
        29: { id:80067000, zone: 1023 }, //Raton laveur comme ourson
        30: { id:80068000, zone: 1023 }, //Truc rouge avec petite feuille
        30: { id:80069000, zone: 1023 }, //Truc bleu avec petite feuille
        31: { id:80070000, zone: 1023 }, //Draka Orange
        32: { id:80071000, zone: 1023 }, //Draka Noir
        33: { id:80072000, zone: 1023 }, //Draka Bleu
        34: { id:80073000, zone: 1023 }, //Ourson noir
        35: { id:80074000, zone: 1023 }, //Cochon d'inde
        36: { id:80075000, zone: 1023 }, //Lezard
        37: { id:80076000, zone: 1023 }, //Lezard2
        38: { id:80077000, zone: 1023 }, //Petit loup
        39: { id:80080000, zone: 1023 }, //Requin volant bleu
        40: { id:80081000, zone: 1023 }, //Requin volant rose
        41: { id:80082000, zone: 1023 }, //Duble corbeau
        42: { id:80083000, zone: 1023 }, //Fantome qui pleure
        43: { id:80084000, zone: 1023 }, //Drakon Arena
        44: { id:80085000, zone: 1023 }, //Fenrir (Loup noir)
        45: { id:80092000, zone: 1023 }, //Blob rose de noel

        100: { id:1000, zone: 3026 }, //Kelsaik
        101: { id:1001, zone: 3026 }, //MiniKelsaikFeu 'enfin mini gros'
        102: { id:1002, zone: 3026 }, //MiniKelsaikGlace 'enfin mini gros'
        103: { id:2000, zone: 444 }, //Bahaar
        104: { id:1000, zone: 3104 }, //Rukmia
        105: { id:1000, zone: 3204 }, //Rukmia
        106: { id:1000, zone: 1023 }, //Petit Kuma
    };

    mod.command.add(['psc', 'petskinchanger'], (y, z) => {
        switch (y) {
            case "enable":
                mod.settings.enabled = !mod.settings.enabled
                command.message('Set mod enabled to : ' + mod.settings.enabled);
                break;
            default:
                if (pets[y]) {
                    selectPet = pets[y];
                }
                else selectPet = { id: y, zone: ((z) ? z : 1023) };
                break;
        }
    });

    mod.hook('S_REQUEST_SPAWN_SERVANT', 4, (event) => {
        if (event.ownerId != mod.game.me.gameId || !selectPet || !mod.settings.enabled) return;

        selectPet = pets[mod.settings.selectPetId];

        event.linkedNpcTemplateId =  selectPet.id;
        event.linkedNpcHuntingZoneId =  selectPet.zone;    

        return true
    });
}