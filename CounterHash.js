// The main idea is to count all the occuring characters(UTF-8) in string.
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
//
// What if the string is empty ? Then the result should be empty object literal { }

function count(string) {
  let hsh = {};
  if (string === "") return {};
  string.split("").forEach(el => {
    hsh[el] >= 1 ? hsh[el]++ : (hsh[el] = 1);
  });

  return hsh;
}
