#!/usr/bin/env node
/* eslint-disable no-alert, no-console */
import readlineSync from 'readline-sync';
import greeting from '../cli.js';


const firstmessage =
'What number is missing in the progression?';

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

const Progression = () => {
  const ourProgressionArr = [];
  const RandomNum1 = Math.floor(Math.random() * 10);
  const startPoint = RandomNum1;
  const step = RandomNum1;
  const length = Math.floor(Math.random() * (10 - 5 + 1) + 5);
  for (let i = 0; i < length; i += 1) {
    ourProgressionArr.push(startPoint + step * i);
  }
  return ourProgressionArr;
};




const progressionGame = () => {
  const name = greeting();
  console.log(firstmessage);
  for (let roundtimer = 1; roundtimer <= 3; roundtimer += 1) {
    const startprogression = Progression();
      const max = startprogression.length - 1;
    const hiddenElement = Math.floor(Math.random() * (max - 0 + 1) + 0);
    const response = startprogression[hiddenElement];
 const theAnswer = response;
    startprogression[hiddenElement] = '..';
    const task = startprogression.join(' ');
    const enteredResponse = readlineSync.question(`Question: ${task}\n`);
  const result = isCheckRound(theAnswer, +enteredResponse, name, roundtimer);
    if (result === false) {
      break;
    }
  }
};

export default progressionGame

  


  