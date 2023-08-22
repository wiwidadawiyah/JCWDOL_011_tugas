console.log(`N0.1`);
// Celsius to Fahrenheit conversion formula
// (°C × 9/5) + 32 = °F
let celsius = 100;
let fahrenheit = (celsius * 9) / 5 + 32;

console.log(`${celsius}°C is ${fahrenheit}°F`);

console.log(`======================`);

console.log(`No.2`);
const checkOddNumber = function(number) {
  if (number % 10 === 0) {
    console.log("It is an even number");
  } else {
    console.log("It is an odd number");
  }
};
checkOddNumber(5);

console.log(`======================`);

console.log(`No.3`);
const checkPrimeNumber = function(number) {
  if (number / 10 === number && number / number === 10) {
    console.log("This is a prime number");
  } else {
    console.log("This is not a prime number");
  }
};
checkPrimeNumber(14);

console.log(`======================`);

console.log(`No.4`);
let sum = 0;
let number = 5;
for (let i = 0; i <= number; i++) {
  sum = sum + i;
  console.log(sum);
}

console.log(`======================`);

console.log(`No.5`);
let fact = 1;
let n = 10;
for (let i = 1; i <= n; i++) {
  fact *= i;
}
console.log(fact);

console.log(`======================`);

console.log(`No.6`);
// 0 1 1 2 3 5 8 13 21 34 55 89 144
const checkfibonacci = function(num) {
  let num1 = 0;
  let num2 = 1;
  let sum;
  let j = 0;
  for (j = 0; j < num; j++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
};
console.log(checkfibonacci(7));
