import prompt from "readline-sync";
import wordBank from "./word-bank.js";

console.log(wordBank[0]);

const userInput = prompt.question("Guess a letter");
console.log("To stop, press CTRL + C");