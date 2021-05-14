/* eslint-disable no-restricted-syntax */
// // MAP
// let map = new Map();

// map.set('1', 'string value');
// map.set(1, 'number 1');
// map.set(true, 'boolean');

// // console.log(map);
// // console.log(map.get('1'));
// // console.log(map.get(1));

// // wrong usage of map
// let wrongMap = new Map();
// wrongMap['bla'] = 'blaa';
// wrongMap['bla2'] = 'blaa2';

// // console.log(wrongMap);
// // console.log(wrongMap.has('bla'));
// // console.log(wrongMap['bla']);

// // console.log(map.size);
// // console.log(wrongMap.size);

// // console.log(typeof wrongMap);
// // console.log(typeof map);

// // for (key of map.keys()) {
// //   console.log(typeof key);
// // }

// // for (key of Object.keys(map)) {
// //   console.log(typeof key);
// // }

// // for (key of wrongMap.keys()) {
// //   console.log(key, typeof key);
// // }

// // for (key of Object.keys(wrongMap)) console.log(key, typeof key);

// map.set('add', function (x, y) {
//   return x + y;
// });

// const addition = map.get('add');
// // console.log(addition(3, 5));

// // for (let key of map.keys()) console.log(key);
// // for (let key of map.values()) console.log(key);
// // for (let [key, value] of map) console.log(key, value);

// map.forEach((value, key) => console.log(key, value));

// SET

const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2);

mySet.add("string");

const obj = { a: 1, b: 2 };
mySet.add(obj);

// console.log(mySet);

mySet.add({ a: 1, b: 2 });

// console.log(mySet.has(1));
mySet.delete(1);

// console.log(mySet.size);

for (let value of mySet) console.log(value);

mySet.forEach((value, i) => console.log(value, i));
