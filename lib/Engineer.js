// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name, id, email);
    this.github = github;
  }
  ///unique to Engineer
  getGithub(){
    return this.github;
  }
  //overrides employee role to return 'Engineer'
  getRole() {
    return this.constructor.name
  }
};

module.exports = Engineer;