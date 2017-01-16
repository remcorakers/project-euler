// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

console.time('duration');

function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  if (number < 2) {
    return false;
  }
  return true;
}

let sum = 0;
for (let i = 2; i < 2000000; i += 1) {
  if (isPrime(i)) {
    sum += i;
  }
}

console.log(`answer: ${sum}`);
console.timeEnd('duration');
