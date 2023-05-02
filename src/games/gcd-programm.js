#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { isCheckRound } from '../module.js';

const firstmessage = "Find the greatest common divisor of given numbers.";



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
