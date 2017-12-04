const Item = require('./item')
const ItemClass = require('./itemClass')

const items = function () {

}

module.exports = function () {

    let items = [
        new Item('Bedroll', 1),
        new Item('Blanket', 5),
        new ItemClass('Bedroll', 1),
        new ItemClass('Blanket', 5)
    ]

    items.forEach(i => console.log(i));

    items.forEach(i => i.buy());

}