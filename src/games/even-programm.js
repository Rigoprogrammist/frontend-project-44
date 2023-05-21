#!/usr/bin/env node
import startbraingame from '../module.js';
import { randomNum } from '../utils.js';

const startevengame = () => {
  let result = [];
  const question = randomNum(1, 100);
  const isEven = (number) => number % 2 === 0;
  const thecorrectAnswer = isEven(question) ? 'yes' : 'no';
  result = [question, thecorrectAnswer];
  return result;
};

const gametype = () => {
  const typegame = startevengame();
  return typegame;
};

const runEvenGame = () => {
  const firstmessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  return startbraingame(firstmessage, gametype);
};
export default runEvenGame;
