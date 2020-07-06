const Employee = require("./Employee");
class Intern extends Employee {
  constructor(name, id, email, school){
    super(name, id, email);
    this.school = school;
  }
  /// Unique to Intern
  getSchool(){
    return this.school;
  }
  //overrides employee role to return 'Engineer'
  getRole() {
    return this.constructor.name
  }
}

module.exports = Intern;