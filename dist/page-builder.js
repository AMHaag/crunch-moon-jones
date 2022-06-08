
const fs = require("fs");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const questions = require("../src/questions");
const global = require("../lib/global");

const headHTML = global.head;
const tailHTML = global.tail;
const page = global.page;
let tl;
const engList = global.engineers;
const intList = global.interns;

const buildPage = function (manager, engineers, interns) {
  page.push(headHTML);
  let buildManager = function (m) {
    let tl = m;
    console.log(tl);
    let managerDiv = `<div class="card">
        <div class="top-edge">${
          m.name
        } <br><span class="title">${m.getRole()}</span></div>
        <div class="detail">
            <div class="detail-item" id="email"><a href="mailto:${m.email}">${
      m.email
    }</a></div><br>
            <div class="detail-item" id="empId">ID: ${m.id}</div><br>
            <div class="detail-item" id="special">Office Number:${
              m.officeNumber
            }</div><br>
        </div></div>`;
    console.log(managerDiv);
    page.push(managerDiv);
  };

  buildManager(manager);

  let buildEngineers = function (e) {
    for (i = 0; i < e.length; i++) {
      let engDiv = `<div class="card">
<div class="top-edge">${e[i].name} <br><span class="title">${e[
        i
      ].getRole()}</span></div>
<div class="detail">
    <div class="detail-item" id="email"><a href="mailto:${e[i].email}">${
        e[i].email
      }</a></div><br>
    <div class="detail-item" id="empId">ID:${e[i].id}</div><br>
    <div class="detail-item" id="special"><a href='${e[
      i
    ].getGithub()}'    } >GitHub</a></div><br>
</div></div></div>
`;
      page.push(engDiv);
    }
  };
  buildEngineers(engineers);

  let buildInterns = function (intern) {
    for (i = 0; i < intern.length; i++) {
      let internDiv = `
<div class="card">
<div class="top-edge">${intern[i].name} <br><span class="title">${intern[
        i
      ].getRole()}</span></div>
<div class="detail">
    <div class="detail-item" id="email"><a href="mailto:${intern[i].email}">${
        intern[i].email
      }</a></div><br>
    <div class="detail-item" id="empId">ID:${intern[i].id}</div><br>
    <div class="detail-item" id="special">School:${intern[
      i
    ].getSchool()}</div><br>
</div></div></div>
`;
      page.push(internDiv);
    }
  };
  buildInterns(interns);

  page.push(tailHTML);
  console.log("Building Page");

  fs.writeFile("./index.html", page.toString(), (err) => {
    if (err) throw new Error(err);
    console.log("File Created!");
  });
};


module.exports = { buildPage };
