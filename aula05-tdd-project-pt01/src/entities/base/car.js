const Base = require('./base/base');

class Car extends Base {
    constructor({id, name, realeaseYear, avaible, gasAvailable}){
        super({id, name})
        this. realeaseYear = realeaseYear;
        this. avaible = avaible;
        this. gasAvailable = gasAvailable; 
    }
}

module.exports = Car