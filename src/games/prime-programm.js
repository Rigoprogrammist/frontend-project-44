#!/usr/bin/env node
import startbraingame from '../module.js';
import { randomNum, isPrime } from '../utils.js';

const starPrimegame = () => {
  let result = [];
  const question = randomNum(1, 11);
  const thecorrectAnswer = isPrime(question) ? 'yes' : 'no';
  result = [question, thecorrectAnswer];
  return result;
};

const gametype = () => {
  const typegame = starPrimegame();
  return typegame;
};

const runPrimeGame = () => {
  const firstmessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return startbraingame(firstmessage, gametype);
};
export default runPrimeGame;
