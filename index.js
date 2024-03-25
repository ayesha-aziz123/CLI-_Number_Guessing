#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//1: computer will generate random number
//2: user input guess number
//3: user input compare with computer generated number & show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.italic.yellow("Congratulations! you Guessed Right Number"));
}
else {
    console.log(chalk.italic.bgRed("Sorry! you guessed Wrong number"));
}
