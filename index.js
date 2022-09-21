// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("utils.generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage credentials for your project:"
    },
    {
        type: "input",
        name: "instructions",
        message: "What are the test instructions?"
    },
    {
        type: "input",
        name: "username",
        message: "Enter GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email:"
    },
    {
        type: "list",
        name: "licenses",
        message: "Select your license",
        choices: ["MIT", "Apache", "ISC", "None"]
    }
    ;
};

// TODO: Create a function to write README file
// async function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//             return console.log(err)
//         } else return console.log("ReadMe created");
//     });
// };

// TODO: Create a function to initialize app

async function init() {
    try {
        const responses = await promptUser();
        const generateResponses = createReadMe(responses);
        await writeFileAsync("./gen/newREADME.md", generateResponses);
        console.log("README.md created");
    }   catch(err) {
        console.log(err)
    }
};

// Function call to initialize app
init();
