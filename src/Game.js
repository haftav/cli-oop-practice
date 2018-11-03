const Area = require('./Area');
const { prompter } = require('../utils');
const gameData = require('../data/testGame.json');

function Game() {
    this.currentArea = {};
}

Game.prototype.play = async function(gameData) {
    console.log(this.currentArea.description, "\n")

    let direction = await prompter.chooseDirection();
    this.currentArea = this.currentArea.goDirection(gameData, direction)
    this.play(gameData)
}

Game.prototype.initialize = function(gameData) {
    //logic here to determine which game map to use, can be implemented later
    console.log("\n")
    console.log("---------------- Welcome to a Game of OOP ----------------\n");
    this.currentArea = new Area(gameData.room1);
    this.play(gameData)
}

let newGame = new Game();
newGame.initialize(gameData);