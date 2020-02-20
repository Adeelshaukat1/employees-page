const Employee = require("../js-files/employee.js");
module.exports = class Engineer extends Employee {
    constructor (name, id, email, office){
        super(name, id, email, office)
    }
}
