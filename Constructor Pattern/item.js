const Item = function (name, cost) {
    this.name = name;
    this.cost = cost || 0;
}

Item.prototype.sell = function () {
    console.log(`Selling ${this.name} for ${this.cost}`);
}

Item.prototype.buy = function () {
    console.log(`Buying ${this.name} for ${this.cost}`);
}

module.exports = Item;