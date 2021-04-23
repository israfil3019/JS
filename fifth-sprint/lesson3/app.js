// function foo1(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//     // alert(array[i]);
//     // console.log(array[i]);
//   }
//   return sum;
// }

// // console.log(foo1([2, 4, 6, 8]));

// function foo2(array, callback) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//     callback(array[i]);
//     // alert(array[i]);
//     // console.log(array[i]);
//   }
//   return sum;
// }

// foo2([2, 4, 6, 8], alert);
// foo2([2, 4, 6, 8], (x) => console.log(x));

// // forEach

// const payments = [100, 300, -200, 500, -400, 225, 1000, -700];

// // for ([i, item] of payments.entries()) {
// //   item > 0
// //     ? console.log(i, `You received ${item} USD`)
// //     : console.log(i, `You paid ${Math.abs(item)} USD`);
// // }

// payments.forEach(function (item, i, arr) {
//   item > 0
//     ? console.log(i, `You received ${item} USD`)
//     : console.log(i, `You paid ${Math.abs(item)} USD`);
//   // console.log(arr);
// });

// map()

// const array1 = [1, 4, 9, 16];

// const map1 = array1.map((item) => item * 2);

// console.log(map1);

// // Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

// const str = 'The Quick Brown Fox';
// const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// console.log(
//   str
//     .split('')
//     .map((letter) =>
//       UPPER.indexOf(letter) !== -1 ? letter.toLowerCase() : letter.toUpperCase()
//     )
//     .join('')
// );
// const swapCase = function(letters){
//     let newLetters = "";
//     for(let i = 0; i<letters.length; i++){
//         if(letters[i] === letters[i].toLowerCase()){
//             newLetters += letters[i].toUpperCase();
//         }else {
//             newLetters += letters[i].toLowerCase();
//         }
//     }
//     console.log(newLetters);
//     return newLetters;
// }

// const text = 'So, today we have REALLY good day';

// const swappedText = swapCase(text); 

// console.log(text.replace(/\w{1}/g, val =>
//     val === val.toLowerCase() ? val.toUpperCase() : val.toLowerCase()));

// console.log(text.split("").map(l=>l==l.toLowerCase()?l.toUpperCase():l.toLowerCase()).join(""));

// console.log(str.split("").map(i => i==i.toLowerCase() ? i.toUpperCase() : i.toLowerCase()).join(""))


filter ()

const words = [
  'sprayyyyyyy',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const result = words.map((word) => (word.length > 6 ? word : 'shorter'));

const result1 = words.filter((word) => word.length > 6);
console.log(result1);

// reduce ()

const arr1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(arr1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(arr1.reduce(reducer, 5));

let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
let unique = myArray.reduce(function (acc, item) {
  if (acc.indexOf(item) === -1) {
    acc.push(item);
  }
  return acc;
}, []);

console.log(unique);
