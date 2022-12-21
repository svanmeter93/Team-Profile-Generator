// Define a manager class

// Reference employee.js page
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, office) {
        super (name , id, email);
        this.office = office
    };
        getOfficeNum() {
            return this.office;
    };
    getRole () {
        return "Manager";
    };
};

module.exports = Manager;