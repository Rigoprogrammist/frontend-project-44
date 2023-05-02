#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const firstmessage = "Find the greatest common divisor of given numbers.";

const isCheckRound = (theAnswer, enteredResponse, name, roundtimer) => {
  let result = true;
  if (roundtimer >= 3 && theAnswer === enteredResponse) {
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

const LogicGcd = (num1, num2) => {
  if (num2 > num1) {
    return LogicGcd(num2, num1);
  }

  if (!num2) {
    return num1;
  }
  return LogicGcd(num2, num1 % num2);
};

const GCdivisor = () => {
  const name = greeting();
  console.log(firstmessage);
  for (let roundtimer = 1; roundtimer <= 3; roundtimer += 1) {
    const RandomNum1 = Math.floor(Math.random() * 100);
    const RandomNum2 = Math.floor(Math.random() * 100);
    const task = `${RandomNum1} ${RandomNum2}`;
    const response = `${LogicGcd(RandomNum1, RandomNum2)}`;
    const theAnswer = response;
    const enteredResponse = readlineSync.question(`Question: ${task}\n`);
    const result = isCheckRound(theAnswer, enteredResponse, name, roundtimer);
    if (result === false) {
      break;
    }
  }
};

export default GCdivisor;
