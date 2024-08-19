#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// shebang 
const inquirer_1 = __importDefault(require("inquirer"));
//decleard a constant and assingn 
const answers = await inquirer_1.default.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word "
    }
]);
//print the words in arrays form
const words = answers.Sentence.trim().split(" ");
console.log(words);
//print the word count
console.log(`your sentence word count is ${words.length}`);
