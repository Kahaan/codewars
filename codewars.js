
// Write a function that returns whther a given integer is a prime number

function isPrime(num) {
  if(num === 1 || num === 0 || num < 0){
    return false
  }
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}

// Write a function, persistence, that takes in a positive parameter num and
// returns its multiplicative persistence, which is the number of times you must
// multiply the digits in num until you reach a single digit.



function abc(num) {

  let digits = num.toString()

    digits = digits.split("").map((num) => (parseInt(num)))
    digits = digits.reduce(function(acc,el){
        return acc * el
    })

    return digits

}

function persistence(num){
  let count = 0
  while(true){

    if(num > 9){
      count++
      num = abc(num)
    } else {
      return count
    }
  }
}

// You are going to be given an array of integers. Your job is to take that
// array and find an index N where the sum of the integers to the left of N is
// equal to the sum of the integers to the right of N. If there is no index that
//  would make this happen, return -1.


function findEvenIndex(arr) {


  for(let i = 1; i < arr.length -1; i++){

    let startSum = arr.slice(0,i).reduce((acc,el) => (acc + el))
    let endSum = arr.slice(i + 1,arr.length).reduce((acc,el) => (acc + el))
    if (startSum === endSum){
      return i
    }

  }
  return -1

}

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution
// so that it returns the sum of all the multiples of 3 or 5 below the number
// passed in. Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  if (number <= 0) return 0
  let arr = []
  for(let i = 0; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0){
       arr.push(i)
    }
  }
  return arr.reduce((acc,el) => (acc + el))
}
