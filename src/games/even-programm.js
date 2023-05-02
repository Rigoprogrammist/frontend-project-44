#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { isCheckRound } from '../module.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};


const firstmessage =
  'Answer "yes" if the number is even, otherwise answer "no".';



const even = () => {
  const name = greeting();
  console.log(firstmessage);
  for (let roundtimer = 1; roundtimer <= 3; roundtimer += 1) {
    const RandomNum = Math.floor(Math.random() * 100);
    const QuestionNumber = RandomNum;

    const theAnswer = isEven(QuestionNumber) ? "yes" : "no";
    const enteredResponse = readlineSync.question(
      `Question: ${QuestionNumber}\n`
    );
    const result = isCheckRound(
      theAnswer,
      enteredResponse,
      name,
      roundtimer
    );
    if (result === false) {
      break;
    }
  }
};


export default even;

