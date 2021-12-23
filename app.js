const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name, github);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'whats your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'whats your github name?'
        },
        {
            type: 'input',
            name: 'about',
            message: 'why are you like this?'
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
                message: 'Provide a discription of the project (Required'
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
                message: 'Enter the Github link to your project. (Required)'
            },
            {
                type: 'input',
                name: 'link',
                message: 'enter the gihub link to your project. (Required)'
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
        console.log(portfoloData);
    });





// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw new err ;

//     console.log('portfolio complete!!! Check out index.html to see the output')
// });


