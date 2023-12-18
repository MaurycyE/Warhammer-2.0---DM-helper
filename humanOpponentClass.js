import { armorBase } from "./src/models/armorBase.js";
import { weaponBase } from "./src/models/weaponBase.js";

export class humanOpponent {

    constructor(race, difficulty, weapon) {

        this.difficulty = difficulty;
        this.race = race;
        this.weapon = weapon;

        //console.log(opponentDifficulty);
    }

    WW = this.throwAdice(10, 2, 20);
    US = this.throwAdice(10, 2, 20);
    Krzepa = this.throwAdice(10, 2, 20);
    Odp = this.throwAdice(10, 2, 20);
    Zr = this.throwAdice(10, 2, 20);
    Int = this.throwAdice(10, 2, 20);
    SW = this.throwAdice(10, 2, 20);
    Ogd = this.throwAdice(10, 2, 20);
    Szyb = 4;
    Atak = 1;
    fightingBonus = 0;
    strenghtBonus = 0;
    Zyw = 0;
    Sila = 0;
    wytrzymalosc = 0;
    ini = 0;

    throwAdice(dice, howManyDice, modificator) {

        let diceRoll = Math.floor(Math.random() * dice + 1);

        return howManyDice * diceRoll + modificator;
    }

    basicAtributs() {

        let lifePointDiceThrow = this.throwAdice(10, 1, 0);

        if (lifePointDiceThrow < 4) this.Zyw = 10;

        else if (lifePointDiceThrow > 3 && lifePointDiceThrow < 7)
            this.Zyw = 11;

        else if (lifePointDiceThrow > 6 && lifePointDiceThrow < 10) this.Zyw = 12;

        else
            this.Zyw = 13;

        switch (this.difficulty) {

            case "private":
                this.fightingBonus = this.throwAdice(10, 1, 0);
                break;

            case "warrior":
                this.fightingBonus = this.throwAdice(20, 1, 8);
                this.strenghtBonus = this.throwAdice(10, 1, 0);
                if (this.throwAdice(10, 1, 0) > 5) {
                    this.Atak = 2;
                }
                this.Zyw = this.Zyw + this.throwAdice(3, 1, 0);
                break;

            case "leader":
                this.fightingBonus = this.throwAdice(20, 1, 15);
                this.strenghtBonus = this.throwAdice(10, 1, 5);
                this.Atak = 2;
                this.Zyw = this.Zyw + this.throwAdice(5, 1, 0);
                break;
        }


        this.WW = this.WW + this.fightingBonus;
        this.US = this.US + this.fightingBonus;
        this.Krzepa = this.Krzepa + this.strenghtBonus;
        this.Odp = this.Odp + this.strenghtBonus;
        this.Zr = this.Zr + this.fightingBonus;
        this.SW = this.SW + this.strenghtBonus;
        this.Ogd = this.Ogd + this.strenghtBonus;
        this.Sila = Math.floor(this.Krzepa / 10);
        this.wytrzymalosc = Math.floor(this.Odp / 10);

        this.ini = this.throwAdice(10, 1, this.Zr);


    }

    generateHumanOpponent() {

        this.basicAtributs();

        const armorBaseInstance = new armorBase(this.difficulty);
        const weaponBaseInstance = new weaponBase(this.weapon, this.Sila);

        let armour = JSON.parse(armorBaseInstance.giveOpponentArmour());
        let weapon = JSON.parse(weaponBaseInstance.chooseWeapon());

        let opponent = {

            OpponentName: "Bezimienny",
            WW: this.WW,
            US: this.US,
            K: this.Krzepa,
            Odp: this.Odp,
            Zr: this.Zr,
            Int: this.Int,
            SW: this.SW,
            Ogd: this.Ogd,
            A: this.Atak,
            Zyw: this.Zyw,
            S: this.Sila,
            Wt: this.wytrzymalosc,
            Szyb: this.Szyb,
            Ini: this.ini,
            GLO: armour.Glowa,
            KO: armour.Korpus,
            RECE: armour.Rece,
            NOGI: armour.Nogi,

            Bron: weapon.name,
            Obr: `1k10+ ${weapon.weaponStrenght}`,
            Cechy: weapon.features

        };

        return JSON.stringify(opponent);
    }


}

