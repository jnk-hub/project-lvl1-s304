import gameplay from '..';
import {randomNumber} from '../utils';

const balance = (number) => {
  const digits = String(number)
    .split('')
    .map(Number);
  const countOfDigits = digits.length;
  const sumOfDigits = digits.reduce((a, b) => a + b);
  const average = sumOfDigits / countOfDigits;
  if (sumOfDigits % countOfDigits === 0) {
    const balancedDigits = Array(countOfDigits).fill(average);
    return balancedDigits.join('');
  }
  const fewerNumber = Math.floor(average);
  const greaterNumber = Math.ceil(average);
  const countOfFewerNumber = greaterNumber * countOfDigits - sumOfDigits;
  const countOfGreaterNumber = countOfDigits - countOfFewerNumber;
  const balancedDigits = [
    ...Array(countOfFewerNumber).fill(fewerNumber),
    ...Array(countOfGreaterNumber).fill(greaterNumber),
  ];
  return balancedDigits.join('');
};

const [upperLimitOfNumber, lowerLimitOfNumber] = [9999, 10];

const game = () => {
  const question = randomNumber(upperLimitOfNumber, lowerLimitOfNumber);
  return {
    question,
    answer: balance(question),
  };
};
game.rule = 'Balance the given number.';

export default () => gameplay(game);
