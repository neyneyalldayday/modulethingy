const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name, github);


inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'whats your name?'
        }
    ])
    .then(answers => console.log(answers));

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw new err ;

//     console.log('portfolio complete!!! Check out index.html to see the output')
// });


