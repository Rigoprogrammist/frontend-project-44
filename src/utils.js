#!/usr/bin/env node
export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const calculator = (randomNum1, operand, randomNum2) => {
  if (operand === '+') return randomNum1 + randomNum2;
  if (operand === '-') return randomNum1 - randomNum2;
  if (operand === '*') return randomNum1 * randomNum2;
  return new Error(`Unknown mathematical operation: '${operand}'!`);
};
export const isPrime = (number) => {
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

export const LogicGcd = (num1, num2) => {
  if (num2 > num1) {
    return LogicGcd(num2, num1);
  }

  if (!num2) {
    return num1;
  }
  return LogicGcd(num2, num1 % num2);
};
export const makeProgression = () => {
  const ourProgressionArr = [];
  const startPoint = randomNum(1, 10);
  const step = randomNum(1, 10);
  const length = randomNum(5, 10);
  for (let i = 0; i < length; i += 1) {
    ourProgressionArr.push(startPoint + step * i);
  }
  return ourProgressionArr;
};
