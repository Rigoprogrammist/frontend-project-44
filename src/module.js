#!/usr/bin/env node

const isCheckRound = (theAnswer, enteredResponse, name, roundtimer) => {
  let result = true;
  if (roundtimer >= 3 && theAnswer === enteredResponse) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
    return result;
  }
  if (theAnswer === enteredResponse) {
    console.log('Correct!');
    return result;
  }
  result = false;
  console.log(
    `'${enteredResponse}' is wrong answer ;(. Correct answer was '${theAnswer}'.`,
  );
  console.log(`Let's try again, ${name}!`);
  return result;
};
export default isCheckRound;
