'use strict';

class Item {
    constructor(name, cost = 0) {
        this.name = name;
        this.cost = cost;
    };

    sell() {
        console.log(`Selling ${this.name} for ${this.cost}`);
    }

    buy() {
        console.log(`Buying ${this.name} for ${this.cost}`);
    }
}

module.exports = Item;