const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

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

//* module variables to store answers formatted as objects
const teamLeader = {};
const engineerArray = [];
const internArray = [];

const askTeamLeader = function () {
  inquirer
    .prompt(managerPrompts)
    .then((a) => {
        // const x = new Manager(a.mng_name,a.mng_id,a.mng_email,a.mng_office);
        // let teamleader = x;
      teamLeader.name = a.mng_name;
      teamLeader.id = a.mng_id;
      teamLeader.email = a.mng_email;
      teamLeader.officeNumber = a.mng_office
    })}


const addEngineer = function () {
  inquirer.prompt(engineerPrompts).then((a) => {
    const eng = new Engineer(a.eng_name,a.eng_id,a.eng_email,a.eng_GitHub);
    engineerArray.push(eng);
  });
};

const addIntern = function(){
    inquirer.prompt()
}

// askTeamLeader();
newEngineer()

let x = () => {
  console.log(teamLeader);
  console.log(engineerArray);
  console.log(internArray);
};
setTimeout(newEngineer,5000)
setTimeout(x, 10000);
module.exports = askTeamLeader;
module.exports = engineerArray;
module.exports = internArray;
