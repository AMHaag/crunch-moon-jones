const inquirer = require("inquirer");
const global = require("../lib/global");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const pageBuilder = require("../dist/page-builder");

const managerPrompts = [
  {
    prefix: "Manager:",
    type: "input",
    name: "mng_name",
    message: "What is the team manager's name?",
  },
  {
    prefix: "Manager:",
    type: "number",
    name: "mng_id",
    message: "What is the team manager's employee ID?",
  },
  {
    prefix: "Manager:",
    type: "input",
    name: "mng_email",
    message: "What is the team manager's email address?",
  },
  {
    prefix: "Manager:",
    type: "number",
    name: "mng_office",
    message: "What is the team managers office number?",
  },
];

const engineerPrompts = [
  {
    prefix: "Engineer",
    name: "eng_name",
    type: "input",
    message: "What is their name?",
  },
  {
    prefix: "Engineer",
    name: "eng_id",
    type: "input",
    message: "What is their employee ID?",
  },
  {
    prefix: "Engineer",
    name: "eng_email",
    type: "input",
    message: "What is their email address?",
  },
  {
    prefix: "Engineer",
    name: "eng_GitHub",
    type: "input",
    message: "What is their GitHub username?",
  },
];

const internPrompts = [
  {
    prefix: "Intern",
    name: "int_name",
    type: "input",
    message: "What is their name?",
  },
  {
    prefix: "Intern",
    name: "int_id",
    type: "input",
    message: "What is their employee ID?",
  },
  {
    prefix: "Intern",
    name: "int_email",
    type: "input",
    message: "What is their email address?",
  },
  {
    prefix: "Intern",
    name: "int_school",
    type: "input",
    message: "What school did they attend?",
  },
];

const forkPrompt = {
  type: "list",
  name: "fork",
  message: "What would you like to do?",
  choices: [
    "Add an engineer to my team",
    "Add an intern to my team",
    "Finish building team",
  ],
  default: "Finish building team",
  filter(val) {
    let valParse = val.split(" ");
    if (valParse[2] === "engineer") {
      return "engineer";
    }
    if (valParse[2] === "intern") {
      return "intern";
    } else {
      return "finish";
    }
  },
};

//* module variables to store answers formatted as objects
let teamLeader = global.manager;
const engineerArray = global.engineers;
const internArray = global.interns;

//* these three functions asks questions and write their answers to global objects/arrays
const ask = function () {
  inquirer
    .prompt(managerPrompts)
    .then((a) => {
      const tl = new Manager(a.mng_name, a.mng_id, a.mng_email, a.mng_office);
      teamLeader = tl;
      console.log(`Manager: ${teamLeader.name} has been added.`);
      return "";
    })
    .then((arg) => {
      fork();
    });
};
const addEngineer = function () {
  inquirer.prompt(engineerPrompts).then((a) => {
    const eng = new Engineer(
      a.eng_name,
      a.eng_id,
      a.eng_email,
      a.eng_GitHub
    );
    engineerArray.push(eng);
    console.log("Engineer ${eng.name} has been added.");
    fork();
  });
};
const addIntern = function () {
  inquirer.prompt(internPrompts).then((a) => {
    const intern = new Intern(
      a.int_name,
      a.int_id,
      a.int_email,
      a.int_school
    );
    internArray.push(intern);
    console.log(`Intern ${intern.name} has been added.`);
    fork();
  });
};
const fork = function () {
  inquirer.prompt(forkPrompt).then((a) => {
    // console.log(a.fork)
    if (a.fork === "engineer") {
      addEngineer();
      return;
    } else if (a.fork === "intern") {
      addIntern();
    } else {
      pageBuilder.buildPage(teamLeader, engineerArray, internArray);
    }
  });
};
module.exports = {
  ask,
  addEngineer,
  addIntern,
  fork,
  teamLeader,
  engineerArray,
  internArray,
};

//TODO Remove undefined guard statements in page-builder
//TODO figure out make better? probably
