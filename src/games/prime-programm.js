#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const firstmessage =
  'Answer "yes" if given numberber is prime. Otherwise answer "no".';

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
    const enteredResponse = readlineSync.question(
      `Question: ${Randomnumber}\n`
    );
    const result = isCheckRound(theAnswer, enteredResponse, name, roundtimer);
    if (result === false) {
      break;
    }
  }
};

export default primeGame;


    