const Manager = require("../lib/Manager");

test("creates an Manager object", () => {
  const manager = new Manager("a", 0, "b",1);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.getName()).toBe("a");
  expect(manager.getRole()).toBe("Manager");
  expect(manager.getEmail()).toBe("b");
});
