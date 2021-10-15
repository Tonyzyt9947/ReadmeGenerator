// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const { totalmem } = require('os');
// TODO: Create an array of questions for user input
const questions = [
    // Name of developer
    {
      type: 'input',
      name: 'name',
      message: '(Required) Enter your name:',
    },
    // Project Title
    {
      type: 'input',
      name: 'title',
      message: '(Required) Enter the project\'s title:',
    },
    // Project description
    {
      type: 'input',
      name: 'description',
      message: '(Required) Enter description of project:',
    },
    // Installation guide steps
    {
      type: 'input',
      name: 'installation1',
      message: '(Required) Enter instruction for project installation (Step 1):',
    },
    {
        type: 'input',
        name: 'installation2',
        when(answers){
            return answers.installation1
        },
        message: 'Enter instruction for project installation (Step 2). Or enter skip to skip this question.',
    },
    {
        type: 'input',
        name: 'installation3',
        when(answers){
            return (answers.installation2!= "skip")
        },
        message: 'Enter instruction for project installation (Step 3).Or enter skip to skip this question.',
    },
    // Product Usage  
    {
      type: 'input',
      name: 'usage',
      message: '(Required) Enter instructions for use:',
    },
    // Credits
    {
      type: 'input',
      name: 'credits1Name',
      message: 'Enter the name of your first collaborator. Or enter skip to skip this question.'
    },
    {
        type: 'input',
        name: 'credits1Git',
        when(answers){
            return (answers.credits1Name!= "skip")
        },
        message: '(Required) Enter the github url of your first collaborator:'
      },
    {
        type: 'input',
        name: 'credits2Name',
        when(answers){
            return (answers.credits1Name!= "skip")
        },
        message: 'Enter the name of your second collaborator. Or enter skip to skip this question.'
    },
    {
        type: 'input',
        name: 'credits2Git',
        when(answers){
            return (answers.credits2Name!= "skip")
        },
        message: '(Required) Enter the girhub url of your second collaborator.'
    },
    {
        type: 'input',
        name: 'credits3Name',
        when(answers){
            return (answers.credits2Name!= "skip")
        },
        message: 'Enter the name of your third collaborator. Or enter skip to skip this question.'
    },
    {
        type: 'input',
        name: 'credits3Git',
        when(answers){
            return (answers.credits3Name!= "skip")
        },
        message: '(Required) Enter the girhub url of your third collaborator:'
    },
    // License
    {
        type: 'list',
        name: 'license',
        message: '(Required) Choose a license:',
        choices:['MIT','GNU GPLv3', 'Mozilla Public', 'Apache', 'The Unlicense']
      },
    // Features
      {
        type: 'input',
        name: 'feature1Title',
        message: '(Required) Enter a concise title for the first feature.'
      },
      {
          type: 'input',
          name: 'feature1Desc',
          message: '(Required) Enter a description for the first feature'
        },
      {
          type: 'input',
          name: 'feature2Title',
          message: 'Enter a concise title for the second feature. Or enter skip to skip this question'
      },
      {
          type: 'input',
          name: 'feature2Desc',
          when(answers){
              return (answers.feature2Title!= "skip")
          },
          message: '(Required) Enter a description for the second feature'
      },
      {
          type: 'input',
          name: 'feature3Title',
          when(answers){
              return (answers.feature2Title!= "skip")
          },
          message: 'Enter a concise title for the third feature. Or enter skip to skip this question'
      },
      {
          type: 'input',
          name: 'feature3Desc',
          when(answers){
              return (answers.feature2Title && answers.feature3Title!= "skip")
          },
          message: '(Required) Enter a description for the third feature'
      },
    // Contributions
      {
        type: 'confirm',
        name: 'contributionConfirm',
        message: '(Required) Would you like other developers to contribute to your project?',
      },
    {
      type: 'input',
      name: 'contributionSteps',
      when(answers){
        return (answers.contributionConfirm)
        },
      message: '(Required) Enter intructions/guidelines for contributions',
    },
    // Tests
      {
        type: 'input',
        name: 'tests',
        message: 'Enter tests for project'
      },    
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
