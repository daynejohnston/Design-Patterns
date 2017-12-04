const repository = function () {

    const get = function (id) {
        console.log(`Getting task ${id}`);
        return {
            name: 'Torch',
            cost: 1                
        };
    }

    const save = function (item) {
        console.log(`Saving ${item.name} to the db`);
    }

    return {
        get: get,
        save: save

    }
}

module.exports = repository();