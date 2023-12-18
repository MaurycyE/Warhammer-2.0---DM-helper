
export class armorBase {

    constructor(OpponentDifficulty) {

        this.OpponentDifficulty = OpponentDifficulty;
    }

    glowa = 0;
    korpus = 0;
    rece = 0;
    nogi = 0;

    getRandomNumber(max) {

        return Math.floor(Math.random() * max);
    }

    generateAmor() {

        switch (this.OpponentDifficulty) {

            case "private":
                this.glowa = this.getRandomNumber(2);
                this.korpus = 1;
                this.rece = 1;
                this.nogi = this.getRandomNumber(2);
                break;

            case "warrior":
                this.glowa = this.getRandomNumber(3);
                this.korpus = 3;
                this.rece = this.getRandomNumber(3);
                this.nogi = this.getRandomNumber(3);
                break;

            case "leader":
                this.glowa = this.getRandomNumber(3) + 2;
                this.korpus = 5;
                this.rece = 3;
                this.nogi = this.getRandomNumber(3);
                break;

        }
    }

    giveOpponentArmour() {

        this.generateAmor();

        let opponentArmour = {

            Glowa: this.glowa,
            Korpus: this.korpus,
            Rece: this.rece,
            Nogi: this.nogi,
        };

        return JSON.stringify(opponentArmour);
    }
}