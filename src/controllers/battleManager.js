import { config } from "../config.js";

export class battleManager {

    configInstance = new config();


    findFighterAtributes(opponentData, fighterList, currentIndex) {



        return opponentData;
    }


    reverseNumber(number) {

        let reverseNumber = 0;
        let location = "";

        if (number === "100") {

            reverseNumber = 1;
        }

        if (number === "1") {

            reverseNumber = 100;
        }
        else {

            let dozens = Math.floor(number / 10);
            let unity = number - dozens * 10;
            reverseNumber = unity * 10 + dozens;
        }


        if (reverseNumber >= "1" && reverseNumber <= "15") {

            location = "GŁOWA";
        }
        else if (reverseNumber >= "16" && reverseNumber <= "35") {

            location = "PRAWA RĘKA";
        }
        else if (reverseNumber >= "36" && reverseNumber <= "55") {

            location = "LEWA RĘKA";
        }
        else if (reverseNumber >= "56" && reverseNumber <= "80") {

            location = "KORPUS";
        }
        else if (reverseNumber >= "81" && reverseNumber <= "90") {

            location = "PRAWA NOGA";
        }

        else if (reverseNumber >= "91" && reverseNumber <= "100") {

            location = "LEWA NOGA";
        }

        return location;
    }

    changeFighter() {

        let d100 = Math.floor(Math.random() * 100) + 1;
        let d10 = Math.floor(Math.random() * 10) + 1;

        //document.getElementById(fightersNumber).classList.remove("highlight");

        if (currentFighterIndex != 1) {

            document.getElementById(currentFighterIndex - 1).classList.remove("highlight");
        }

        document.getElementById(currentFighterIndex).classList.add("highlight");
        currentFighterIndex++;

        if (currentFighterIndex == fightersNumber + 1) {

            currentFighterIndex = 1;
        }

        d100throw.textContent = d100;
        d10throw.textContent = d10;
        hitAttemptDiceResult.value = parseInt(d100);
        hitLocation.textContent = reverseNumber(d100);

    }
}