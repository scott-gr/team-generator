//Dependencies
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const questions = require('./lib/questions');
const render = require('./lib/htmlRenderer');
//output to html
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team-output.html');


//empty array to be filled with generated employee objects
const employees = [];

const outputHtml = (path, data) => {
  fs.writeFile(path, render(data), (error) => {
    if (error) throw error;
    else console.log('Output HTML success');
  });
};

const askPrompt = () => {
  inquirer.prompt(questions.roleQuestion).then((data) => {
    switch (data.role) {
      /// test first with manager

      case 'manager':
        inquirer.prompt(questions.managerQuestions).then((data) => {
          if (
            data.mgrName === '' ||
            data.mgrId === '' ||
            data.mgrEmail === '' ||
            data.mgrOfficeNum === ''
          ) {
            console.log('Please enter a value for each prompt!');
            askPrompt();
          } else {
            let manager = new Manager(
              data.mgrName,
              data.mgrId,
              data.mgrEmail,
              data.mgrOfficeNum
            );
            employees.push(manager);
            if (data.confirm) {
              askPrompt();
            } else {
              outputHtml(outputPath, employees);
            }
          }
        });
        break;
      case 'engineer':
        inquirer.prompt(questions.engineerQuestions).then((data) => {
          if (
            data.engName === '' ||
            data.engId === '' ||
            data.engEmail === '' ||
            data.engGithub === ''
          ) {
            console.log('Please enter a value for each prompt!');
            askPrompt();
          } else {
            let engineer = new Engineer(
              data.engName,
              data.engId,
              data.engEmail,
              data.engGithub
            );
            employees.push(engineer);
            if (data.confirm) {
              askPrompt();
            } else {
              outputHtml(outputPath, employees);
            }
          }
        });
        break;
      case 'intern':
        inquirer.prompt(questions.internQuestions).then((data) => {
          if (
            data.intName === '' ||
            data.intId === '' ||
            data.intEmail === '' ||
            data.intSchool === ''
          ) {
            console.log('Please enter a value for each prompt!');
            askPrompt();
          } else {
            let intern = new Intern(
              data.intName,
              data.intId,
              data.intEmail,
              data.intSchool
            );
            employees.push(intern);
            if (data.confirm) {
              askPrompt();
            } else {
              outputHtml(outputPath, employees);
              r;
            }
          }
        });
        break;
    }
  });
};
askPrompt()