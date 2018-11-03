const Area = require('./Area');
const { prompter } = require('../utils');
const gameData = require('../data/testGame.json');

function Game() {
    this.currentArea = {};
}

Game.prototype.initialize = function(gameData) {
    //logic here to determine which game map to use, can be implemented later
    console.log("\n")
    console.log("---------------- Welcome to a Game of OOP ----------------\n");
    this.currentArea = new Area(gameData.room1);
    this.play(gameData)
}

Game.prototype.play = function(gameData) {
    console.log(this.currentArea.description, "\n");

    if (this.currentArea.winArea) {
        this.win();
        return
    }

    this.loop(gameData);
}

Game.prototype.loop = async function(gameData) {
    let direction = await prompter.chooseDirection();
    let newArea = this.currentArea.goDirection(gameData, direction);
    if (newArea !== this.currentArea) {
        this.currentArea = newArea;
        this.play(gameData);
    } else {
        this.loop(gameData);
    }
}

Game.prototype.win = function() {
    console.log("Congratulations, you've reached the end of the map!");
}

let newGame = new Game();
newGame.initialize(gameData);