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
