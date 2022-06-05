const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
  const engineer = new Engineer("a", 0, "b", "c"); //args are name,id,email,github username

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.getName()).toBe("a");
  expect(engineer.getRole()).toBe("Engineer");
  expect(engineer.getEmail()).toBe("b");
  expect(engineer.getGithub()).toEqual(expect.any(String));
});
