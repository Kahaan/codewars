// Write a function that returns whther a given integer is a prime number

function isPrime(num) {
  if (num === 1 || num === 0 || num < 0) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Write a function, persistence, that takes in a positive parameter num and
// returns its multiplicative persistence, which is the number of times you must
// multiply the digits in num until you reach a single digit.

function abc(num) {
  let digits = num.toString();

  digits = digits.split("").map(num => parseInt(num));
  digits = digits.reduce(function(acc, el) {
    return acc * el;
  });

  return digits;
}

function persistence(num) {
  let count = 0;
  while (true) {
    if (num > 9) {
      count++;
      num = abc(num);
    } else {
      return count;
    }
  }
}
