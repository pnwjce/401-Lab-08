'use strict';

const uuid = require('uuid/v4');

class Categories {

    constructor() {
        this.database = [];
    }

    get(_id) {
        let response = id ? this.database.filter((record) => record.id === id) : this.database;
        return Promise.resolve(response);
    }

    post(record) {
        entry.id = uuid();
        let record = this.sanitize(record);
        if(record.id) {this.database = }
    }

    put(_id, record)


    delete(_id) {
    }

}

module.exports = Categories;