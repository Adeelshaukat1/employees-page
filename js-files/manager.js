const Manager = require("../js-files/Manager.js");
module.exports = class Manager extends Employee{
    constructor (name, id, email, office){
        super(name, id, email, office)
    }
}
