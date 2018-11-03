const Area = require('./Area');
const Player = require('./Player');
const { prompter } = require('../utils');
const gameData = require('../data/testGame.json');

function Game(player) {
    this.player = player;
    this.currentArea = {};
}

Game.prototype.initialize = function(gameData) {
    //logic here to determine which game map to use, can be implemented later
    console.log("\n")
    console.log("---------------- Welcome to a Game of OOP ----------------\n");
    this.currentArea = new Area(gameData.room1);
    this.play(gameData);
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
    let action = await prompter.chooseAction();
    if (action === 'move') {
        let direction = await prompter.chooseDirection();
        let newArea = this.currentArea.goDirection(gameData, direction);
        if (newArea !== this.currentArea) {
            this.currentArea = newArea;
            this.play(gameData);
        } else {
            this.loop(gameData);
        }
    }
    //add logic if action is 'take'
}

Game.prototype.win = function() {
    console.log("Congratulations, you've reached the end of the map!");
}

let player = new Player('Tav');
let newGame = new Game(player);
newGame.initialize(gameData);