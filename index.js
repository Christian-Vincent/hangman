import prompt from "readline-sync";
import wordBank from "./word-bank.js";
let n = 0;
let userGuess = [];
let wrongCount = 0;
let answer = wordBank[Math.floor(Math.random()*wordBank.length)].toLowerCase();
let userInput;
const displayHangman = () => {
  const oneWrong = `
  _______
  |/    |
  |    
  |    
  |     
  |    
___|___
`;
  const twoWrong = `
  _______
  |/    |
  |     O
  |    
  |     
  |    
___|___
`;
  const threeWrong = `
  _______
  |/    |
  |     O
  |     | 
  |     
  |    
___|___
`;
  const fourWrong = `
  _______
  |/    |
  |     O
  |     | 
  |    /
  |    
___|___
`;
  const fiveWrong = `
  _______
  |/    |
  |     O
  |     | 
  |    / \
  |    
___|___
`;
  const sixWrong = `
  _______
  |/    |
  |     O/
  |     | 
  |    / \
  |    
___|___
`;
  const sevenWrong = `
  _______
  |/    |
  |    \O/
  |     | 
  |    / \
  |    
___|___
`;
  console.log('Wrong Count:', wrongCount);
  if (wrongCount === 1) {
    console.log(oneWrong);
  }
  if (wrongCount === 2) {
    console.log(twoWrong);
  }
  if (wrongCount === 3) {
    console.log(threeWrong);
  }
  if (wrongCount === 4) {
    console.log(fourWrong);
  }
  if (wrongCount === 5) {
    console.log(fiveWrong);
  }
  if (wrongCount === 6) {
    console.log(sixWrong);
  }
  if (wrongCount === 7) {
    console.log(sevenWrong);
  }
}
const guess = () => {
  if (answer.indexOf(userInput) !== -1) {
    console.log("You guess right.");
  } else {
    console.log("You guess wrong.");
    wrongCount++;
    displayHangman();
  }
}
const start = () => {
  while (n <= 7) {
    n++;
    userInput = prompt.question("Guess a letter: ").toLowerCase();
    userGuess.push(userInput);
    console.log("To stop, press CTRL + C");
    console.log('You guessed', userInput);
    guess();
  }
}
start();
const check = () => {
  if (n === 8) {
    console.log("You lost this round. The answer was " + answer);
    userInput = prompt.question("Do you want to play another round? Please type in Yes or No... ");
    if (userInput === "Yes") {
      n = 0;
      wrongCount = 0;
      start();
      return;
    } else {
      console.log("Thank you for playing.");
    }
  }
}
check(7);