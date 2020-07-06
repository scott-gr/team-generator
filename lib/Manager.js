const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  ///Unique to Manager
  getOfficeNumber(){
    return this.officeNumber;
  }
  //overrides employee role to return 'Engineer'
  getRole() {
    return this.constructor.name
  }
}

module.exports = Manager;