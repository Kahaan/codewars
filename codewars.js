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

// You are going to be given an array of integers. Your job is to take that
// array and find an index N where the sum of the integers to the left of N is
// equal to the sum of the integers to the right of N. If there is no index that
//  would make this happen, return -1.

function findEvenIndex(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    let startSum = arr.slice(0, i).reduce((acc, el) => acc + el);
    let endSum = arr.slice(i + 1, arr.length).reduce((acc, el) => acc + el);
    if (startSum === endSum) {
      return i;
    }
  }
  return -1;
}

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution
// so that it returns the sum of all the multiples of 3 or 5 below the number
// passed in. Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  if (number <= 0) return 0;
  let arr = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, el) => acc + el);
}

//
// Pete likes to bake some cakes. He has some recipes and ingredients.
// Unfortunately he is not good in maths. Can you help him to find out,
// how many cakes he could bake considering his recipes?
//
// Write a function cakes(), which takes the recipe (object) and the available
// ingredients (also an object) and returns the maximum number of cakes Pete
// can bake (integer). For simplicity there are no units for
// the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.

//
// Examples:
//
// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

function cakes(recipe, available) {
  let recIng = Object.keys(recipe);
  let availIng = Object.keys(available);

  for (let i = 0; i < recIng.length; i++) {
    if (
      recipe[recIng[i]] > available[recIng[i]] ||
      available[recIng[i]] === undefined
    )
      return 0;
  }

  return (bottleneck = recIng
    .map(el => {
      available[el] / recipe[el];
    })
    .min());
}

// Given an array (arr) as an argument complete the function countSmileys
// that should return the total number of smiling faces.
//
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
//
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

function countSmileys(arr) {
  let count = 0;

  let eyes = ":;";
  let nose = "-~";
  let mouth = ")D";

  arr.forEach(el => {
    if (el.length === 2) {
      if (eyes.includes(el[0]) && mouth.includes(el[1])) {
        count++;
      }
    } else if (el.length === 3) {
      if (
        eyes.includes(el[0]) &&
        nose.includes(el[1]) &&
        mouth.includes(el[2])
      ) {
        count++;
      }
    }
  });
  return count;
}

// Polycarpus works as a DJ in the best Berland nightclub, and he often uses
// dubstep music in his performance. Recently, he has decided to take a couple
// of old songs and make dubstep remixes from them.

// Let's assume that a song consists of some number of words. To make the
// dubstep remix of this song, Polycarpus inserts a certain number of words
// "WUB" before the first word of the song (the number may be zero), after the
// last word (the number may be zero), and between words (at least one between
// any pair of neighbouring words), and then the boy glues together all the words,
// including "WUB", in one string and plays the song at the club.

// For example, a song with words "I AM X" can transform into a dubstep remix
// as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

// Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't
// into modern music, he decided to find out what was the initial song that
// Polycarpus remixed. Help Jonny restore the original song.
//
// Input
// The input consists of a single non-empty string, consisting only of
// uppercase English letters, the string's length doesn't exceed 200 characters
//
// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb
// remix. Separate the words with a space.
//
// Examples
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// =>  WE ARE THE CHAMPIONS MY FRIEND

// function songDecoder(song) {
//   return (song = song
//     .split("WUB")
//     .filter(Boolean)
//     .join(" "));
// }
