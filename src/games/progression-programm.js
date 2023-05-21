#!/usr/bin/env node
/* eslint-disable no-alert, no-console */
import startbraingame from '../module.js';
import { randomNum, makeProgression } from '../utils.js';

const startProgressiongame = () => {
  let result = [];
  const startprogression = makeProgression();
  const hiddenElement = randomNum(0, startprogression.length - 1);
  const response = String(startprogression[hiddenElement]);
  const thecorrectAnswer = response;
  startprogression[hiddenElement] = '..';
  const question = startprogression.join(' ');

  result = [question, thecorrectAnswer];
  return result;
};

const gametype = () => {
  const typegame = startProgressiongame();
  return typegame;
};

const runProgressiongame = () => {
  const firstmessage = 'What number is missing in the progression?';
  return startbraingame(firstmessage, gametype);
};
export default runProgressiongame;
