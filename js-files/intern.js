const Intern = require("../js-files/Intern.js");
module.exports = class Intern extends Employee {
    constructor (name, id, email, office){
        super(name, id, email, office)
    }
}