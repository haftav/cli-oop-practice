module.exports = class GameObject {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    describeObject() {
        console.log(this.description);
    }
}