
        let hitLocation = document.getElementById("hitLocation");
        let nextFighterButton = document.getElementById("nextFighter");
        let fightersTable = document.getElementById("fighters");
        let d100throw = document.getElementById("d100throw");
        let d10throw = document.getElementById("d10throw");
        let hitAttemptDiceResult = document.getElementById("hitAttemptDiceResult");
        let fightersNumber = fightersTable.rows.length;
        let currentFighterIndex = 1;

        function reverseNumber(number) {

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

        function changeFighter() {

            let d100 = Math.floor(Math.random() * 100) + 1;
            let d10 = Math.floor(Math.random() * 10) + 1;

            document.getElementById("rzad"+fightersNumber).classList.remove("highlight");

            if (currentFighterIndex != 1) {

                let fighterIndexSubstractOne = currentFighterIndex-1;
                document.getElementById("rzad"+fighterIndexSubstractOne).classList.remove("highlight");
            }

            document.getElementById("rzad"+currentFighterIndex).classList.add("highlight");
            currentFighterIndex++;

            if (currentFighterIndex == fightersNumber + 1) {

                currentFighterIndex = 1;
            }

            d100throw.textContent = d100;
            d10throw.textContent = d10;
            hitAttemptDiceResult.value = parseInt(d100);
            hitLocation.textContent = reverseNumber(d100);

        }

        document.getElementById("hitAttemptDiceResult").addEventListener("change", (event) => {
            hitLocation.textContent = reverseNumber(event.target.value);

        });

        nextFighterButton.addEventListener("click", () => {
            changeFighter();

        })