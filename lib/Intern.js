const Employee = require("./Employee");

function Intern(name = "", id = 0, email = "", school = "") {
  this.name = name;
  this.id = id;
  this.email = email;
  this.school = school;
}

Intern.prototype.child = Object.create(Employee.prototype);
Intern.prototype.getRole = function () {
  return "Intern";
};
Intern.prototype.getSchool = function () {
  return this.school;
};
module.exports = Intern;
