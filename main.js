#!  /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\t Welcome to \ Ali Akbar Brohi\ Word counter\n"));
console.log("=".repeat(50));
let answers = await inquirer.prompt([{
        message: "Select a sentence",
        name: "sentence",
        type: "input"
    }]);
let words = answers.sentence.trim().split(" ");
console.log(chalk.yellow("\n\t-sentence words\n"));
console.log(words);
console.log(chalk.blue.bold(`\n\tword count: ${words.length}\n`));
