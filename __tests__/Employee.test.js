const Employee = require("../lib/Employee");

test("creates a generic employee object", () => {
  const employee = new Employee("a", 0, "b");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.getName()).toBe("a");
  expect(employee.getRole()).toBe("Employee");
  expect(employee.getEmail()).toBe("b");
});
