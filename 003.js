// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

console.time('duration');

let number = 600851475143;
let i = 2;
while (i < number) {
  if (number % i === 0) {
    number /= i;
  }
  i += 1;
}

console.log(`answer: ${number}`);
console.timeEnd('duration');
