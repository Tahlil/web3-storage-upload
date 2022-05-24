const { exec } = require("child_process");
//requiring path and fs modules
const path = require('path');
const fs = require('fs');

const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, './.env') });
const API_KEY = process.env.API_KEY || '';

//joining path of directory 
const directoryPath = path.join(__dirname, 'files');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    console.log("File names:");
    //listing all files using forEach
    files.forEach(function (file) {
        console.log(file); 
    });
});
// exec("ls -la", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });