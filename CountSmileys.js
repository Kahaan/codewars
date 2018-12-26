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
