const numbersArray = [0, 1, 2, 3, 4]

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let numbersSum = 0;
  for(let i = 0; i < numbers.length; i++){
    numbersSum += numbers[i];
  }
  return numbersSum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  let numbersSum = 0;
    for(let i = 0; i < numbers.length; i++){
      numbersSum += numbers[i];
    }
  const numbersMean = numbersSum / numbers.length;
  return numbersMean;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  let numbersMin = 0;
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < numbersMin){
      numbersMin = numbers[i];
    }
  }
  return numbersMin;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let numbersMax = 0;
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > numbersMax){
      numbersMax = numbers[i];
    }
  }
  return numbersMax;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  const numbersRange = getMax(numbers) - getMin(numbers);
  return numbersRange;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  let evenNumbers = [];
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  let oddNumbers = [];
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0){
      oddNumbers.push(numbers[i]);
    }
  }
  return oddNumbers;
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
