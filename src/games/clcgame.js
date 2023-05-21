#!/usr/bin/env node

import startbraingame from '../module.js';
import { randomNum, calculator } from '../utils.js';

const startCalcgame = () => {
  let result = [];
  const operands = ['+', '-', '*'];
  const operand = operands[Math.floor(Math.random() * 3)];
  const randomNum1 = randomNum(1, 50);
  const randomNum2 = randomNum(1, 50);
  const question = `${randomNum1} ${operand} ${randomNum2}`;
  const response = String(calculator(randomNum1, operand, randomNum2));

  const thecorrectAnswer = response;
  result = [question, thecorrectAnswer];
  return result;
};

const gametype = () => {
  const typegame = startCalcgame();
  return typegame;
};
const runCalcGame = () => {
  const firstmessage = 'What is the result of the expression?';
  return startbraingame(firstmessage, gametype);
};
export default runCalcGame;
