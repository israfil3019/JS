// const dogs = ['Bulldog', 'Beagle', 'Rottweiler'];
// const cats = ['Ragdoll', 'Sphynx', 'Birman'];
// const pets = cats.concat(dogs);
// console.log(dogs);
// console.log(pets);

// const names = ['John', 'James', 'Walter', 'Edward'];
// names.sort();
// console.log(names);

// const numbers = [45, 16, 78, 8, 25];
// numbers.sort();
// console.log(numbers);

// const sortingFunc = function (a, b) {
//   return a - b;
// };

// // numbers.sort(sortingFunc);
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// const names = ['John', 'James', 'Aaron', 'Walter', 'Edward'];
// names.push('McCarthy', 'Barry');
// console.log(names);

// const deleted = names.pop(); // Removes last element from names
// console.log(names);
// console.log(deleted);

// const names = ['John', 'James', 'Aaron', 'Walter'];
// const shiftedName = names.shift();
// console.log(shiftedName);
// console.log(names);

// const newLength = names.unshift('John');
// console.log(newLength);
// console.log(names);
// const names = ['James', 'Aaron', 'Walter'];
// const deleted = names.splice(1, 0, 'John', 'Edward');
// console.log(names);
// console.log(deleted);

// const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// const citrus = fruits.slice(1, -1);
// console.log(citrus);
// console.log(fruits);

// let colors = ['Red', 'Yellow', 'Green', 'Blue', 'Pink', 'Green'];
// let x = colors.indexOf('Barry'); // -1 if not found

// console.log(x);
// console.log(
//   colors.indexOf('Green') === -1
//     ? 'Not Found'
//     : `is found at position ${colors.indexOf('Green')}`
// );

// let colors = ['Red', 'Yellow', 'Green'];
// // colors += 2;
// console.log(typeof colors);
// console.log(colors.reverse());

// const x = 5;
// x = 10;

// const colors = ['Red', 'Yellow', 'Green'];
// colors.push('White');
// console.log(colors);
// colors = [1, 2, 3];

// function test1(testData) {
//   console.log(`inside function before operation ${testData}`);
//   testData = 10;
//   console.log(`inside function after operation ${testData}`);
// }
// const x = 5;
// test1(x);
// console.log(`outside function after operation ${x}`);

// function test2(testData) {
//   console.log(`inside function before operation ${testData}`);
//   // testData = [2, 4, 6, 8];
//   testData.push(8);
//   console.log(`inside function after operation ${testData}`);
// }
// let arr = [1, 2, 3, 4];
// test2(arr);
// console.log(`outside function after operation ${arr}`);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1;
// arr2.push(8);
// console.log(arr2);
// console.log(arr1);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const a = arr[0];
// const b = arr[1];
// // const c = arr[2];

// const [x = 1, , z = 1, ...others] = arr;
// console.log(x, z, others);

// let x = 5;
// let y = 10;
// // let temp = x;
// // x = y;
// // y = temp;
// [x, y] = [y, x];
// console.log(x, y);

const payments = [1000, -200, 100, -500, 750, -80, 800, -400];
// for (let i = 0; i < payments.length; i++) {
//   payments[i] > 0
//     ? console.log(`You received ${payments[i]} USD`)
//     : console.log(`You paid ${Math.abs(payments[i])} USD`);
// }

for (item of payments) {
  item > 0
    ? console.log(`You received ${item} USD`)
    : console.log(`You paid ${Math.abs(item)} USD`);
}

for (let [i, item] of payments.entries()) {
  item > 0
    ? console.log(i + 1, `You received ${item} USD`)
    : console.log(i + 1, `You paid ${Math.abs(item)} USD`);
}
