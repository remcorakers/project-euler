// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.
// What is the 10.001st prime number?

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

const primes = [];
let number = 2;
while (primes.length < 10001) {
  if (isPrime(number)) {
    primes.push(number);
  }
  number += 1;
}

console.log(primes[10000]);
console.timeEnd('duration');
