// console.log('Loops');
// let i = 0;
// let sum = 0;
// while (i < 3) {
//   sum += i;
//   i++;
// }
// console.log(`The total is : ${sum}`);
// let bests = ['Clarusway', 'Google', 'Amazon', 'Tesla'];

// //let len = bests.length;

// for (let i = 0; i < bests.length; i++) {
//   console.log(`${i + 1} : ${bests[i]}`);
// }
// let text = 'Clarusway';
// for (let i = 0, j = 10; i < j; i++, j--) {
//   console.log(text[i]);
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     document.write(`${i} x ${j} = ${i * j}<br>`);
//   }
//   document.write('<br>');
// }

// let text = 'Clarusway';
// for (let i = text.length - 1; i >= 0; i--) {
//   console.log(text[i]);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 7) break;
//   for (let j = 1; j <= 10; j++) {
//     if (j === 3) continue;
//     if (j === 5) break;
//     document.write(`${i} x ${j} = ${i * j}<br>`);
//   }
//   document.write('<br>');
//   if (i === 2) continue;
// }
// var x = 10;

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   // if (number % 2 === 0) sum += number;
//   sum += number % 2 === 0 ? number : 0;
// }
// // console.log(number);
// console.log(sum);

// const factNumber = 5;
// const factNumber = Number(prompt('Enter a number! '));
// let calcFactorial = 1;

// for (let i = factNumber; i > 0; i--) calcFactorial *= i;

// console.log(calcFactorial);
// let factNumber;
// let calcFactorial = 1;
// let message = 'Enter a number! ';
// while (true) {
//   factNumber = Number(prompt(message));
//   if (Number.isInteger(factNumber) && factNumber > 0) break;
//   message = 'Please enter a positive integer';
// }
// for (let i = factNumber; i > 0; i--) calcFactorial *= i;

// console.log(`${factNumber}! = ${calcFactorial}`);
/*
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(`${i}`);
  }
}
*/
// const x = 5;
// if (x % 2 === 0) {
//   console.log(`${x} is an even number.`);
// } else {
//   console.log(`${x} is an odd number.`);
// }

// console.log(`${x} is an ${(x % 2 === 0 && 'even') || 'odd'} number`);
/*
for (let i = 1; i <= 100; i++) {
  console.log(
    `${i} ${(i % 3 === 0 && 'Fizz') || ''}${(i % 5 === 0 && 'Buzz') || ''}`
  );
}
*/
/*
const text = 'Clarusway';
const char = 'a';
for (let i = 0; i < text.length; i++) {
  if (char === text[i]) {
    console.log(`${char} is at index ${i}`);
    break;
  }
}
*/

// let x = Math.trunc(Math.random() * 20) + 1;
// console.log(x);
/*
let randomNumber = 0;
let counter = 0;
while (randomNumber !== 6) {
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(`Random Number is ${randomNumber}`);
  if (randomNumber === 6) {
    console.log('Here comes 6, exiting...');
    continue;
  }
  if (randomNumber === 3) counter++;
  if (counter > 2) {
    console.log('Number 3 occured 3 times exiting ...');
    break;
  }
}
*/
/*
const age = 15;
console.log(age >= 18 ? 'Wellcome' : 'You are not allowed');
*/

const age = '18';
if (age === 18) console.log('You are allowed');
