// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
        //super calls the Employee objects for name, ID, and email to use them in this constructor
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github
    }
}

module.exports = Engineer;