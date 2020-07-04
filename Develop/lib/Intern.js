// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Intern = require("./Intern");
class Intern extends Employee {
  constructor(name, id, email, school){
    super(name, id, email);
    this.school = school;
  }
  getSchool(){
    return this.github;
  }
  //overrides employee role to return 'Engineer'
  getRole() {
    return this.constructor.name
  }
}

module.exports = Intern;