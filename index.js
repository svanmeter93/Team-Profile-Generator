const inquirer = require("inquirer");
// const fs = require ('fs';)
const Manager = require("./ASSETS/Manager.js");
const Engineer = require("./ASSETS/Engineer.js");
const Intern = require("./ASSETS/Intern.js");
const fs = require('fs');
const team = [];
let htmlPageContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./ASSETS/style.css">
  <title>Document</title>
</head>`;

const generateHTML = (team) =>{
htmlPageContent += 
`<body>
    <header>
        <h1 class="header">My Team</h1>
    </header>`; 
    team.forEach((t)=>{
      if (t.getRole() === "Engineer"){
// contional checks for each type of employee
  htmlPageContent+=
    `<div id="card">
        <div class="card-body">
            <h5 class="name">${t.name}</h5>
            <h6 class="occupation">${t.getRole()}</h6>
            <p class="card-text">ID: ${t.ID}</p><br>
            <p class="card-text">Email: ${t.email}</p><br>
            <p class="card-text"> GitHub: ${t.gitHub}</p>
        </div>
    </div>`
  }else if (t.getRole() === 'Intern'){
    htmlPageContent+=
    `<div id="card">
        <div class="card-body">
            <h5 class="name">${t.name}</h5>
            <h6 class="occupation">${t.getRole()}</h6>
            <p class="card-text">ID: ${t.ID}</p><br>
            <p class="card-text">Email: ${t.email}</p><br>
            <p class="card-text"> School: ${t.school}</p>
        </div>
    </div>`
  }else {
    htmlPageContent+=
    `<div id="card">
        <div class="card-body">
            <h5 class="name">${t.name}</h5>
            <h6 class="occupation">${t.getRole()}</h6>
            <p class="card-text">ID: ${t.ID}</p><br>
            <p class="card-text">Email: ${t.email}</p><br>
            <p class="card-text"> Office: ${t.office}</p>
        </div>
    </div>`
  }});
  htmlPageContent+=
`</body>
</html>`
}

const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the manager's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
      },
      {
        type: "input",
        name: "office",
        message: "What is the manager's office number?",
      },
    ])
    .then(({ name, ID, email, office }) => {
      const manager = new Manager(name, ID, email, office);
      team.push(manager);
      main();
    });
};

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the Engineer's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub?",
      },
    ])
    .then(({ name, ID, email, github }) => {
      const engineer = new Engineer(name, ID, email, github);
      team.push(engineer);
      main();
    });
};

const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the Intern's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the Intern's school?",
      },
    ])
    .then(({ name, ID, email, school }) => {
      const intern = new Intern(name, ID, email, school);
      team.push(intern);
      main();
    });
};

const main = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "What kind of employee would you like to add?",
        choices: ["Intern", "Engineer", "Quit"],
      },
    ])
    .then(({ employeeType }) => {
      switch (employeeType) {
        case "Intern":
          addIntern();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Quit":
          quit();
          break;
        default:
          main();
      }
    });
};
const quit =()=>{
  generateHTML(team)
fs.writeFile('index.html', htmlPageContent, (err) =>
err ? console.log(err) : console.log('Successfully created index.html!')
)};

// How do I generate more questions off the answer of this question?

// TODO: Create if/else statement to create an API card for each occupation.

// How do I populate each care with individual answers?

// TODO: Repeat a function a certain number of times the number of employees
// let numOfEmployees = Answer to question one
// const loop = (numOfEmployees, callback) => {
// for (let i = 0; i < times; i++){callback(i);}
// } ;

// helper functions to create HTML
addManager();