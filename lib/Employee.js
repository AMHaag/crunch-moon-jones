function Employee(name = "", id = 0, email = "") {
  this.name = name;
  this.id = id;
  this.email = email;
}
Employee.prototype.getName = function () {
  return this.name;
};
Employee.prototype.getEmail = function () {
  return this.email;
};
Employee.prototype.getRole = function () {
  return "Employee";
};
Employee.prototype.getId = function () {
  return this.id;
};

module.exports = Employee;
