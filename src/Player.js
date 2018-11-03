class Player {
    constructor(location, name) {
        this.name = name;
        this.inventory = [];
    }

    addToInventory(object) {
        this.inventory.push(object);
    }

    listInventory() {
        for (let i = 0; i < this.inventory.length; i++) {
            console.log(this.inventory[i], "\n");
        }
    }

}
