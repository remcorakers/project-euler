// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

console.time('duration');

function reverse(s) {
  return s.split('').reverse().join('');
}

const largestNumber = 999;

let maxPalindrome = 0;
let number1 = largestNumber;

while (number1 >= 1) {
  let number2 = largestNumber;

  while (number2 >= largestNumber - number1) {
    const factor = `${number1 * number2}`;
    const halfLength = factor.length % 2 === 0 ? factor.length / 2 : (factor.length - 1) / 2;

    if (factor.substring(0, halfLength) === reverse(factor.substring(halfLength))) {
      if (maxPalindrome < factor) {
        maxPalindrome = factor;
      }
    }
    number2 -= 1;
  }
  number1 -= 1;
}

console.log(`answer: ${maxPalindrome}`);
console.timeEnd('duration');
