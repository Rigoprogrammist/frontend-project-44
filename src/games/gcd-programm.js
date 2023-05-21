#!/usr/bin/env node

import startbraingame from '../module.js';
import { randomNum, LogicGcd } from '../utils.js';

const startGCdivisor = () => {
  let result = [];
  const randomNum1 = randomNum(1, 50);
  const randomNum2 = randomNum(1, 50);
  const question = `${randomNum1} ${randomNum2}`;
  const response = `${LogicGcd(randomNum1, randomNum2)}`;

  const thecorrectAnswer = response;
  result = [question, thecorrectAnswer];
  return result;
};

const gametype = () => {
  const typegame = startGCdivisor();
  return typegame;
};

const runGCDGame = () => {
  const firstmessage = 'Find the greatest common divisor of given numbers.';
  return startbraingame(firstmessage, gametype);
};
runGCDGame();
