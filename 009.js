// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

console.time('duration');

const sum = 1000;
for (let a = 0; a < sum - 3; a += 1) {
  for (let b = 0; b < sum - 3; b += 1) {
    if (a < b) {
      for (let c = 0; c < sum - 3; c += 1) {
        if (a < b && b < c && a + b + c === sum &&
          Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
          console.log(`answer: ${a * b * c} (${a} * ${b} * ${c})`);
          console.timeEnd('duration');
          process.exit();
        }
      }
    }
  }
}
