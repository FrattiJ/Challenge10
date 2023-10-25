// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        // on future update add question to ask if they want a deplaoyble link or not made
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'GNU'],
            default: ["MIT"],
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'What does the user need to know about contributing to the repo?'
        },
        {
            type: 'input',
            name: 'test', 
            message: 'What command should be run to run tests?',
            default: 'npm test'
        }
    ]);
    };

// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('ReadMe.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('ReadMe created. This message will now self destruct.')
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then (answers =>{
            return generate(answers);
        })
        .then (data => {
            return writeFile(data);
        })
        .catch (err => {
            return console.log(err);
        })
};

// Function call to initialize app
init();
