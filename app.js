const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name, github);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'whats your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'whats your github profile name? (Required)',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('please enter your github name!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'would you like to enter  some information about yourself for an "about" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'why are you like this?',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);   

};

// promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {

    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    
        console.log(`
        =========================
        Add a New Project
        =========================    
        `);
        return inquirer.prompt([
    
            {
                type: 'input',
                name: 'name',
                message: 'what is the name of your project'
            },
            {
                type: 'input',
                name: 'discription',
                message: 'Provide a discription of the project (Required)',
                validate: projectDiscription => {
                    if (projectDiscription) {
                        return true;
                    } else {
                        console.log('enter a discription you sac of ass!!!')
                        return false;
                    }
                }
                
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: 'what did you build this project with? (check all that apply)',
                choices: ['javascript', 'HTML', 'CSS', 'es6', 'jQuery', 'Bootstrap', 'Node']
            },           
            {
                type: 'input',
                name: 'link',
                message: 'enter the gihub link to your project. (Required)',
                validate: gitHubLink => {
                    if (gitHubLink) {
                        return true;
                    } else {
                        console.log(' i think you forgot something ');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'feature',
                message: 'would you like to feature this project?',
                default: false
            },
            {
                type: 'confirm',
                name: 'confirmAddProject',
                message: 'would you like to enter another project?',
                default: false
            }
        ]).then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
              return portfolioData;
            }
        });
       
    };
    promptUser()
    .then(promptProject)
    .then(portfoloData => {
        const pageHTML = generatePage(portfoloData);

        fs.writeFile('./index.html' , pageHTML , err => {
            if (err) throw new Error(err);

            console.log('Page created! check out index.html in this directory to see it');
        });
      
        
    });







