const Employee = require("./Employee");

function Engineer(name = "", id = 0, email = "", github = "") {
  this.name = name;
  this.id = id;
  this.email = email;
  this.github = github;
}

Engineer.prototype.child = Object.create(Employee.prototype);
Engineer.prototype.getRole = function () {
  return "Engineer";
};
Engineer.prototype.getGithub = function () {
  return "https://github.com/" + this.github;
};
module.exports = Engineer;
