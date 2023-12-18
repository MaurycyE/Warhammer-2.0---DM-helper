import express from "express";
import bodyParser from "body-parser";
//import axios from "axios";
import { humanOpponent } from "./humanOpponentClass.js";

const app = express();
const port = 3000;
let savedOpponent = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {

    res.render("createFighter.ejs");
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

app.listen(port, () => {

    console.log(`Running server on port: ${port}`);
})


