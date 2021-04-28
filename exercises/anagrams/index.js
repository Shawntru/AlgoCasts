// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// The best solution:
function anagrams(stringA, stringB) {
  cleanStr = (str) => {
    return str.replace(/[\^w]/g, '').toLowerCase().split('').sort().join('');
  };
  return cleanStr(stringA) === cleanStr(stringB);
}

// Video Solution:
// function anagrams(stringA, stringB) {
//   function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g).toLowerCase()) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
//   }

//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// ORIGINAL solution:
//
// function anagrams(stringA, stringB) {
//   createCharMap = (str) => {
//     const mapped = str
//       .replace(/[^\w]/g, '')
//       .toLowerCase()
//       .split('')
//       .reduce((map, letter) => {
//         !map[letter] ? (map[letter] = 1) : map[letter]++;
//         return map;
//       }, {});
//     const sorted = Object.keys(mapped)
//       .sort()
//       .reduce((res, key) => ((res[key] = mapped[key]), res), {});
//     return sorted;
//   };
//   return (
//     JSON.stringify(createCharMap(stringA)) ===
//     JSON.stringify(createCharMap(stringB))
//   );
// }

module.exports = anagrams;
