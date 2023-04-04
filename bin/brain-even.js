/* eslint-disable no-alert, no-console */
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';




const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
isEven();

const firstmessage =
  'Answer "yes" if the number is even, otherwise answer "no".';

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

const even = () => {
  const name = greeting();
  console.log(firstmessage);
  for (let roundPosition = 1; roundPosition <= 3; roundPosition += 1) {
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
      roundPosition
    );
    if (result === false) {
      break;
    }
  }
};
even();

export default even;