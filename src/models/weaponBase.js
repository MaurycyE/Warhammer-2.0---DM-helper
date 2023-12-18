
export class weaponBase {

    constructor(weaponCategory, OpponentStrenght) {

        this.OpponentStrenght = OpponentStrenght;
        this.weaponCategory = weaponCategory;
        //console.log(OpponentStrenght);

        this.oneHeandedWeapons = [

            {
                id: 1,
                name: "broń improwizowana",
                weaponStrenght: this.OpponentStrenght - 4,
                features: "",
            },

            {
                id: 2,
                name: "miecz jednoręczny",
                weaponStrenght: this.OpponentStrenght,
                features: "",

            },

            {
                id: 3,
                name: "topór jednoręczny",
                weaponStrenght: this.OpponentStrenght,
                features: "",
            },

            {
                id: 4,
                name: "sztylet",
                weaponStrenght: this.OpponentStrenght - 3,
                features: "",
            },

            {
                id: 5,
                name: "sztylet i tarcza",
                weaponStrenght: this.OpponentStrenght - 3,
                features: "parująca",
            },

            {
                id: 6,
                name: "miecz i tarcza",
                weaponStrenght: this.OpponentStrenght,
                features: "parująca",

            },

            {
                id: 7,
                name: "topór i tarcza",
                weaponStrenght: this.OpponentStrenght,
                features: "parująca",

            },

            {
                id: 8,
                name: "morgensztern",
                weaponStrenght: this.OpponentStrenght,
                features: "ciężki, druzgoczący",

            },

            {
                id: 9,
                name: "rapier",
                weaponStrenght: this.OpponentStrenght - 1,
                features: "szybki",

            },

            {
                id: 10,
                name: "włócznia",
                weaponStrenght: this.OpponentStrenght,
                features: "szybki",

            },

            {
                id: 11,
                name: "włócznia i tarcza",
                weaponStrenght: this.OpponentStrenght,
                features: "szybki, parujący",

            },

            {
                id: 12,
                name: "rapier i puklerz",
                weaponStrenght: this.OpponentStrenght - 1,
                features: "szybki, parujący",

            }

        ];

        this.twoHeandedWeapons = [

            {
                id: 1,
                name: "miecz dwuręczny",
                weaponStrenght: this.OpponentStrenght,
                features: "powolny, druzgocząca",
            },

            {
                id: 2,
                name: "topór dwuręczny",
                weaponStrenght: this.OpponentStrenght,
                features: "powolny, druzgocząca",
            },

            {
                id: 3,
                name: "halabarda",
                weaponStrenght: this.OpponentStrenght,
                features: "szybki / powolny, druzgocząca",
            },

            {
                id: 4,
                name: "korbacz",
                weaponStrenght: this.OpponentStrenght + 1,
                features: "ciężki, druzgocząca",
            },

            {
                id: 5,
                name: "długi miecz",
                weaponStrenght: this.OpponentStrenght + 1,
                features: "",
            },
        ];

        this.range = [

            {
                id: 1,
                name: "długi łuk",
                weaponStrenght: 3,
                features: "przebijający zbroję",
            },

            {
                id: 2,
                name: "krótki łuk",
                weaponStrenght: 3,
                features: "",
            },

            {
                id: 3,
                name: "kusza",
                weaponStrenght: 4,
                features: "",
            },

            {
                id: 4,
                name: "łuk",
                weaponStrenght: 3,
                features: "",
            },

            {
                id: 5,
                name: "oszczep",
                weaponStrenght: this.OpponentStrenght - 1,
                features: "",
            },

            {
                id: 6,
                name: "pistolet",
                weaponStrenght: 4,
                features: "druzgoczący, zawodny",
            },
        ];

    }

    opponentWeapon = {};

    chooseWeapon() {

        let tableLength = 0;
        let randomIndex = 0;
        let foundWeapon = {};

        switch (this.weaponCategory) {

            case "one_heanded":
                tableLength = this.oneHeandedWeapons.length;
                randomIndex = Math.floor(Math.random() * tableLength + 1);
                foundWeapon = this.oneHeandedWeapons.find((weapon) => weapon.id === randomIndex);

                //console.log(foundWeapon.name);

                this.opponentWeapon = {

                    name: foundWeapon.name,
                    weaponStrenght: foundWeapon.weaponStrenght,
                    features: foundWeapon.features,
                };
                break;

            case "two_heanded":

                tableLength = this.twoHeandedWeapons.length;
                randomIndex = Math.floor(Math.random() * tableLength + 1);
                foundWeapon = this.twoHeandedWeapons.find((weapon) => weapon.id === randomIndex);

                this.opponentWeapon = {

                    name: foundWeapon.name,
                    weaponStrenght: foundWeapon.weaponStrenght,
                    features: foundWeapon.features,
                };
                break;

            case "range":

                tableLength = this.range.length;
                randomIndex = Math.floor(Math.random() * tableLength + 1);
                foundWeapon = this.range.find((weapon) => weapon.id === randomIndex);


                this.opponentWeapon = {

                    name: foundWeapon.name,
                    weaponStrenght: foundWeapon.weaponStrenght,
                    features: foundWeapon.features,
                };
                break;

        }

        return JSON.stringify(this.opponentWeapon);
    }


}