#! /usr/bin/env node
// shebang 
import inquirer from 'inquirer';


//decleard a constant and assingn 
const answers:{
    Sentence:string

} = await inquirer.prompt([
    {
        name:"Sentence",
        type:"input",
        message:"Enter your sentence to count the word "


    }
])
//print the words in arrays form
const words = answers.Sentence.trim().split(" ")
console.log(words)
//print the word count
console.log(`your sentence word count is ${words.length}`);