const Employee = require("./Employee");

function Manager(name = "", id = 0, email = "", officenum = 0) {
  this.name = name;

  this.id = id;

  this.email = email;

  this.officeNumber = officenum;
}

Manager.prototype.child = Object.create(Employee.prototype);

Manager.prototype.getRole = function () {
  return "Manager";
};


module.exports = Manager;
