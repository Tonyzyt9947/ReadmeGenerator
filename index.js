// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const { totalmem } = require('os');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Enter your name:',
    },
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project\'s title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter project installation steps:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter instructions for use',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
