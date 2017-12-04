const Repo = require('./itemRepository')

const Item = function (item) {
    this.name = item.name;
    this.cost = item.cost || 0;
}

Item.prototype.sell = function () {
    console.log(`Selling ${this.name} for ${this.cost}`);
}

Item.prototype.buy = function () {
    console.log(`Buying ${this.name} for ${this.cost}`);
}

Item.prototype.save = function () {
    Repo.save(this);
}

module.exports = Item;