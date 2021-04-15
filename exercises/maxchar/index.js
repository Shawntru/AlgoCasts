// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Optimal?

const maxChar = (str) => {
  let charMap = str.split('').reduce((charCount, char) => {
    charCount[char] = charCount[char] + 1 || 1;
    return charCount;
  }, {});
  return Object.keys(charMap).reduce((a, b) =>
    charMap[a] > charMap[b] ? a : b
  );
};

// Instructor:
// function maxChar(str) {
//   let charMap = {};
//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
// }

// Own solution:
// function maxChar(str) {
//   let strValues = str.split('').reduce((strCounts, char) => {
//     strCounts[char] ? strCounts[char]++ : (strCounts[char] = 1);
//     return strCounts;
//   }, {});
//   return Object.keys(strValues).reduce((a, b) =>
//     strValues[a] > strValues[b] ? a : b
//   );
// }

module.exports = maxChar;
