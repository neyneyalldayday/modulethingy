 const fs = require('fs');

 const writeFile = fileContent => {
     return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html' , fileContent, err =>{
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
 };

 const copyFile = styleCss => {
     return new Promise((resolve, reject) => {
         fs.copyFile('./src/style.css', './dist/style.css', styleCss, err => {
             if(err) {
                 reject(err);
                 return;
             }
             resolve({
                 ok: true,
                 message: 'file created'
             });
         });
     });
 };

 module.exports = {
     writeFile,
     copyFile
 };