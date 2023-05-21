#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const isCheckRound = (thecorrectAnswer, enteredResponse, name, roundtimer) => {
  let boolean = true;
  if (roundtimer >= 3 && thecorrectAnswer === enteredResponse) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
    return boolean;
  }
  if (thecorrectAnswer === enteredResponse) {
    console.log('Correct!');
    return boolean;
  }
  boolean = false;
  console.log(
    `'${enteredResponse}' is wrong answer ;(. Correct answer was '${thecorrectAnswer}'.`,
  );
  console.log(`Let's try again, ${name}!`);
  return boolean;
};

const startbraingame = (firstmessage, gametype) => {
  let arraygamelogic;
  const name = greeting();
  console.log(firstmessage);
  for (let roundtimer = 1; roundtimer <= 3; roundtimer += 1) {
    arraygamelogic = gametype();
    console.log(`Question: ${arraygamelogic[0]}`);
    const thecorrectAnswer = arraygamelogic[1];
    const enteredResponse = readlineSync.question(
      'Your answer: ',
    );
    const boolean = isCheckRound(
      thecorrectAnswer,
      enteredResponse,
      name,
      roundtimer,
    );
    if (boolean === false) {
      break;
    }
  }
};
export default startbraingame;
