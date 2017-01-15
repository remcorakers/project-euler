// 2520 is the smallest number that can be divided by each of the numbers from
// 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?

console.time('duration');

let number = 21;
while (true) {
  let success = true;
  for (let i = 20; i > 1; i -= 1) {
    if (number % i !== 0) {
      number += 1;
      success = false;
      break;
    }
  }
  if (success) {
    console.log(`answer: ${number}`);
    console.timeEnd('duration');
    process.exit();
  }
}
