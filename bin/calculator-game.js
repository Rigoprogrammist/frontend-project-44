#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const firstmessage =
'What is the result of the expression?';


const isCheckRound = (theAnswer, enteredResponse, name, roundPosition) => {
    let result = true;
    if (roundPosition >= 3 && theAnswer === enteredResponse) {
      console.log("Correct!");
      console.log(`Congratulations, ${name}!`);
      return result;
    }
    if (theAnswer === enteredResponse) {
      console.log("Correct!");
      return result;
    }
    result = false;
    console.log(
      `'${enteredResponse}' is wrong answer ;(. Correct answer was '${theAnswer}'.`
    );
    console.log(`Let's try again, ${name}!`);
    return result;
  };
  

const calculator = (operand, RandomNum1, RandomNum2) => {
    const operands = ['+', '-', '*'];
    if (operand === operands[1]) {
      return String(RandomNum1 - RandomNum2);
    }
    if (operand === operands[2]) {
      return String(RandomNum1 * RandomNum2);
    }
    return String(RandomNum1 + RandomNum2);
  };


  const calculatorGame = () => {
    const name = greeting();
    console.log(firstmessage);
    const operands = ['+', '-', '*'];
    for (let roundPosition = 1; roundPosition <= 3; roundPosition += 1) {
        const RandomNum1 = Math.floor(Math.random() * 100);
        const RandomNum2 = Math.floor(Math.random() * 100);
      const operand = operands[Math.floor(Math.random() * 3)];
      const task = `${RandomNum1} ${operand} ${RandomNum2}`;
      const response = calculator(operand, RandomNum1, RandomNum2);
      const theAnswer = response;
      const enteredResponse = readlineSync.question(`Question: ${task}\n`);
      const result = isCheckRound(
        theAnswer,
        enteredResponse,
        name,
        roundPosition
      );
      if (result === false) {
        break;
      }
    }
  };
  calculatorGame()
  export default calculatorGame;

