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
    // Name of developer
    {
        type: 'input',
        name: 'email',
        message: '(Required) Enter your email address:',
    },
    // Name of developer
    {
        type: 'input',
        name: 'github',
        message: '(Required) Enter your github username:',
    },
    // Project Title
    {
      type: 'input',
      name: 'title',
      message: '(Required) Enter the project\'s title:',
    },
    // Table of contents
    {
        type: 'confirm',
        name: 'tableContents',
        message: '(Required) Would you like to include a table of contents?',
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
            return (answers.installation2.toLowerCase()!= "skip")
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
            return (answers.credits1Name.toLowerCase()!= "skip")
        },
        message: '(Required) Enter the github url of your first collaborator:'
      },
    {
        type: 'input',
        name: 'credits2Name',
        when(answers){
            return (answers.credits1Name.toLowerCase()!= "skip")
        },
        message: 'Enter the name of your second collaborator. Or enter skip to skip this question.'
    },
    {
        type: 'input',
        name: 'credits2Git',
        when(answers){
            return (answers.credits2Name.toLowerCase()!= "skip")
        },
        message: '(Required) Enter the girhub url of your second collaborator.'
    },
    {
        type: 'input',
        name: 'credits3Name',
        when(answers){
            return (answers.credits2Name.toLowerCase()!= "skip")
        },
        message: 'Enter the name of your third collaborator. Or enter skip to skip this question.'
    },
    {
        type: 'input',
        name: 'credits3Git',
        when(answers){
            return (answers.credits2Name.toLowerCase()!= "skip" && answers.credits3Name.toLowerCase()!= "skip")
        },
        message: '(Required) Enter the girhub url of your third collaborator:'
    },
    // License
    {
        type: 'list',
        name: 'license',
        message: '(Required) Choose a license:',
        choices:['MIT','GNU GPLv3', 'Mozilla Public', 'Apache 2.0', 'The Unlicense']
      },
    // Features
      {
        type: 'input',
        name: 'feature1Title',
        message: '(Required) Enter a concise title for the first feature:'
      },
      {
          type: 'input',
          name: 'feature1Desc',
          message: '(Required) Enter a description for the first feature:'
        },
      {
          type: 'input',
          name: 'feature2Title',
          message: 'Enter a concise title for the second feature. Or enter skip to skip this question.'
      },
      {
          type: 'input',
          name: 'feature2Desc',
          when(answers){
              return (answers.feature2Title.toLowerCase()!= "skip")
          },
          message: '(Required) Enter a description for the second feature:'
      },
      {
          type: 'input',
          name: 'feature3Title',
          when(answers){
              return (answers.feature2Title.toLowerCase()!= "skip")
          },
          message: 'Enter a concise title for the third feature. Or enter skip to skip this question.'
      },
      {
          type: 'input',
          name: 'feature3Desc',
          when(answers){
              return (answers.feature2Title.toLowerCase()!= "skip" && answers.feature3Title.toLowerCase()!= "skip")
          },
          message: '(Required) Enter a description for the third feature:'
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
      message: '(Required) Enter intructions/guidelines for contributions:',
    },
    // Tests
      {
        type: 'input',
        name: 'test1',
        message: '(Required) Enter first test for the project:'
      },   
      {
        type: 'input',
        name: 'test2',
        message: 'Enter second test for the project. Or enter skip to skip this question.'
      },   
      {
        type: 'input',
        name: 'test3',
        when(answers){
            return (answers.test2.toLowerCase() != 'skip')
            },
        message: 'Enter third test for the project. Or enter skip to skip this question.'
      },   
         
  ];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        console.log(answers)

    const formattedAnswer = {
        name: answers.name,
        title: answers.title,
        github: answers.github,
        email: answers.email,
        description: answers.description,
        badge: ()=>{
            switch(answers.license){
                case 'MIT': 
                    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
                case 'GNU GPLv3' : 
                    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
                case 'Mozilla Public':
                    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
                case 'Apache 2.0':
                    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
                case 'The Unlicense':
                    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;

            }
            
        },
        installation1: answers.installation1,
        installation2: ()=>{
            if(answers.installation2 && answers.installation2.toLowerCase()!='skip'){
                return `2. ${answers.installation2}`
            }
            else{
                return " "
            }
        },
        installation3: ()=>{
            if(answers.installation3 && answers.installation3.toLowerCase()!='skip'){
                return `3. ${answers.installation3}`
            }
            else{
                return " "
            }
        },
        usage: answers.usage,
        credits1: ()=>{
            if(answers.credits1Name && answers.credits1Name.toLowerCase()!='skip'){
                let credits1 = 
`## Credits
* ${answers.credits1Name}, [Github](${answers.credits1Git})`

            return credits1
            }
            else{
                return " "
            }
        },
        credits2: ()=>{
            if(answers.credits2Name && answers.credits2Name.toLowerCase()!='skip'){
                let credits2 = 
`* ${answers.credits2Name}, [Github](${answers.credits2Git})`
            return credits2
            }
            else{
                return " "
            }
        },
        credits3: ()=>{
            if(answers.credits3Name && answers.credits3Name.toLowerCase()!='skip'){
                let credits3 = 
`* ${answers.credits3Name}, [Github](${answers.credits3Git})`
            return credits3
            }
            else{
                return " "
            }
        },
        license: answers.license,
        feature1: 
`### ${answers.feature1Title} 
${answers.feature1Desc}`,

        feature2: ()=>{
            if(answers.feature2Title && answers.feature2Title.toLowerCase()!='skip'){
                let feature2 = 
`### ${answers.feature2Title} 
${answers.feature2Desc}`

                return feature2
            }
            else{
                return " "
            }
        },
        feature3: ()=>{
            if(answers.feature3Title && answers.feature3Title.toLowerCase()!='skip'){
                let feature3 = 
`### ${answers.feature3Title} 
${answers.feature3Desc}`

                return feature3
            }
            else{
                return " "
            }
        },
        contribution: ()=>{
            if(answers.contributionConfirm && answers.contributionSteps){
                let contribution = 
`## Contributing
${answers.contributionSteps}`

                return contribution
            }
            else{
                return " "
            }
        },
        test1: answers.test1,
        test2: ()=>{
            if(answers.test2 && answers.test2.toLowerCase()!='skip'){
                let test2 =
`### Test2
${answers.test2}`
                return test2
            }
            else{
                return " "
            }
        },
        test3: ()=>{
            if(answers.test3 && answers.test3.toLowerCase()!='skip'){
                let test3 =
`### Test3
${answers.test3}`
                return test3
            }
            else{
                return " "
            }
        },
        tableContents: ()=>{
            if(answers.tableContents){
                let table = 
`## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Tests](#tests)
* [Contacts](#questions)`
                
                return table
            }
            else{
                return " "
            }
        },
      }

    const readmeContent = 
`# ${formattedAnswer.title} ${formattedAnswer.badge()}

## Description 
    
${formattedAnswer.description}

${formattedAnswer.tableContents()}
    
## Installation
    
1. ${formattedAnswer.installation1}

${formattedAnswer.installation2()}

${formattedAnswer.installation3()}
    
## Usage 
    
${formattedAnswer.usage}
    
${formattedAnswer.credits1()}
${formattedAnswer.credits2()}
${formattedAnswer.credits3()}

## License
    
This project is licensed by ${formattedAnswer.license}.
    
## Features

${formattedAnswer.feature1}

${formattedAnswer.feature2()}

${formattedAnswer.feature3()}

${formattedAnswer.contribution()}
    
## Tests
    
### Test 1
${formattedAnswer.test1}

${formattedAnswer.test2()}

${formattedAnswer.test3()}

## Questions

You can reach me (${formattedAnswer.name}) at:
Email: [Link](${formattedAnswer.email})
Github: [Link](https://github.com/${formattedAnswer.github})
`
    
    let fileName = formattedAnswer.title+"_README.md"
     // TODO: Create a function to write README file
    fs.writeFile(fileName, readmeContent, (err) =>
    err ? console.error(err) : console.log('File Created')
    )

})}



// Function call to initialize app
init();
