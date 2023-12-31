import express from "express";
import bodyParser from "body-parser";
import { humanOpponent } from "./humanOpponentClass.js";
import { battleManager } from "./src/controllers/battleManager.js";

const app = express();
const port = 3000;
const data = {

    mapFightIni: [],

};
let savedOpponent = {};
let fighterList = [];
let currentIndex = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {

    res.render("index.ejs", data);
})

app.post("/addFighter", (req, res) => {

    data.mapFightIni.push({ name: req.body.fighterName, ini: req.body.initiative });
    res.render("index.ejs", data);
});

app.post("/generate", (req, res) => {

    const humanOpponentInstance = new humanOpponent(req.body.race, req.body.difficulty, req.body.weapon);
    let createdOpponent = humanOpponentInstance.generateHumanOpponent();
    savedOpponent = JSON.parse(createdOpponent);

    //console.log(savedOpponent.OpponentName);

    res.locals = JSON.parse(createdOpponent);

    res.render("createFighter.ejs");

});

app.post("/giveName", async (req, res) => {

    const fighterName = req.body.fighterName;

    savedOpponent.OpponentName = fighterName;

    res.locals = savedOpponent;

    //console.log(res.locals);

    res.render("createFighter.ejs");

});

app.get("/reset", (req, res) => {

    data.mapFightIni = [];
    fighterList = [];

    res.render("index.ejs", data);
})

app.get("/sort", (req, res) => {

    data.mapFightIni.sort((a, b) => {
        return b.ini - a.ini;
    });

    //console.log(data.mapFightIni);
    res.render("index.ejs", data);
})

app.get("/createFighter", (req, res) => {

    res.render("createFighter.ejs");
})

app.get("/saveFighter", (req, res) => {

    data.mapFightIni.push({ name: savedOpponent.OpponentName, ini: savedOpponent.Ini });
    fighterList.push(savedOpponent);
    //res.locals = savedOpponent;

    //console.log(fighterList);

    res.render("index.ejs", data);
})

app.get("/next", async (req, res) => {

    try {
    const battleManagerInstance = new battleManager();

    if (currentIndex == data.mapFightIni.length) {

        currentIndex = 0;
    }
    let result = battleManagerInstance.findFighterAtributes(fighterList, data.mapFightIni, currentIndex);

    //console.log(result[0]);
    res.locals = result[0];

    currentIndex++;


    //res.render("index.ejs", data);

    } catch (error) {

        console.error(error);
        res.status(500).send("internal server error");
    }
});

app.listen(port, () => {

    console.log(`Running server on port: ${port}`);
})

