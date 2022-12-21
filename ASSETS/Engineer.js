// Engineer employee page
// Once agai reference the employee page

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super (name, id, email);
        this.gitHub = gitHub
    };
    retrieveGitHub (){
        return this.gitHub;
    };
    getRole(){
        return 'Engineer';
    };
};

module.exports = Engineer;
