// TODO: Include packages needed for this application
const util = require("util");
const inquirer = require("inquirer");
const createReadMe = require(".utils/createReadMe");

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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
