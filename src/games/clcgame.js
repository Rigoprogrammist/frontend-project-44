#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { isCheckRound } from '../module.js';

const firstmessage = 'What is the result of the expression?';

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
  for (let roundtimer = 1; roundtimer <= 3; roundtimer += 1) {
    const RandomNum1 = Math.floor(Math.random() * 100);
    const RandomNum2 = Math.floor(Math.random() * 100);
    const operand = operands[Math.floor(Math.random() * 3)];
    const task = `${RandomNum1} ${operand} ${RandomNum2}`;
    const response = calculator(operand, RandomNum1, RandomNum2);
    const theAnswer = response;
    console.log(`Question: ${task}`);
    const enteredResponse = readlineSync.question('Your answer: ');
    const result = isCheckRound(
      theAnswer,
      enteredResponse,
      name,
      roundtimer,
    );
    if (result === false) {
      break;
    }
  }
};

export default calculatorGame;
