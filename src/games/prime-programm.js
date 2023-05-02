#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { isCheckRound } from '../module.js';

const firstmessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';




const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const name = greeting();
  console.log(firstmessage);
  for (let roundtimer = 1; roundtimer <= 3; roundtimer += 1) {
    const Randomnumber = Math.floor(Math.random() * 11);
    const theAnswer = isPrime(Randomnumber) ? "yes" : "no";
    console.log(`Question: ${Randomnumber}`);
    const enteredResponse = readlineSync.question(
      `Your answer: `
    );
    const result = isCheckRound(theAnswer, enteredResponse, name, roundtimer);
    if (result === false) {
      break;
    }
  }
};

export default primeGame;


    