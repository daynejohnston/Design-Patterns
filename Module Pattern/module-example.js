const Repo = require('./itemRepository')
const Item = require('./item')

module.exports = function () {
    let item = new Item(Repo.get(1));
    item.buy();
    item.save();
}