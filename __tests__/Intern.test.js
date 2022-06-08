const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern("a", 0, "b", "c"); //args are name,id,email,school


  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.getSchool()).toBe("c");
  expect(intern.getRole()).toBe("Intern");
});
