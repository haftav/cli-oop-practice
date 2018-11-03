const GameObject = require('./GameObject');

module.exports = class Area {
    constructor({ areaName, description, exits, winArea, objects }) {
        this.areaName = areaName;
        this.description = description;
        this.north = exits.north;
        this.south = exits.south;
        this.east = exits.east;
        this.west = exits.west;

        this.winArea = winArea ? winArea : null;

        if (objects) {
            this.objects = objects.reduce((accum, {name, description}) => {
                let object = new GameObject(name, description);
                accum.push(object);
                return accum;
            }, []);
        } else {
            this.objects = [];
        }
    }

    alertInvalidExit() {
        console.log("\nYou can't go in this direction.\n");
    }

    describeMovement(direction) {
        console.log(`You head ${direction}\n`)
    }

    goDirection(gameData, direction) {
        if (this[direction]) {
            this.describeMovement(direction);
            return new Area(gameData[this[direction]]);
        } else {
            this.alertInvalidExit();
            return this;
        }
    }
}