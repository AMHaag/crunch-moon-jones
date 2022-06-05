const Employee = require("./Employee");

function Intern(name = "", id = 0, email = "", school = "") {
  this.name = name;
  this.id = id;
  this.email = email;
  this.school = school;
}

Intern.prototype = Object.create(Employee.prototype);
Intern.prototype.getRole = function () {
  return "Intern";
};
Intern.prototype.getSchool = function () {
  return this.school;
};
// let test = new Intern("a", 9, "b","a");
// console.log(test);

module.exports = Intern;
