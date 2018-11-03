module.exports = class Area {
    constructor({ alias, description, exits, winArea }) {
        this.alias = alias;
        this.description = description;

        this.north = exits.north;
        this.south = exits.south;
        this.east = exits.east;
        this.west = exits.west;

        this.winArea = winArea ? winArea : null;
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