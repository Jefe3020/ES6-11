const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "please write a comment about user",
  },

  // {questions is going to be an array of Objects}
  //
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
  });
}

// function call to initialize program
init();
