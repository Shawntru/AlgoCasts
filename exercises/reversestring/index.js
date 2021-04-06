// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse().join('');
}

//WITHOUT reverse method:
// const reverse = (str) => {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// };

module.exports = reverse;
