// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let strValues = str.split('').reduce((strCounts, char) => {
    if (!strCounts[char]) {
      strCounts[char] = 0;
    }
    strCounts[char]++;
    return strCounts;
  }, {});
  return Object.keys(strValues).reduce((a, b) =>
    strValues[a] > strValues[b] ? a : b
  );
}

module.exports = maxChar;
