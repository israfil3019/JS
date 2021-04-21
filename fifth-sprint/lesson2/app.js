/* eslint-disable max-classes-per-file */
// 'use strict';
// // creating objects
// const person = {
//   firstName: 'Barry',
//   lastName: 'Mitchell',
//   birthYear: 1977,
//   skills: ['JS', 'AWS', 'Dockers', 'Python'],
//   employed: true,

//   2021: 'Clarusway FS',
//   true: 'is it working',
// };

// const teacher = {};

// teacher.fullName = 'Barry Mitchell';
// teacher.age = 44;

// accessing values
// console.log(person.firstName);
// console.log(person.birthYear);

// console.log(teacher.fullName);

// console.log(person['2021']);
// console.log(person.true);

// const year = 2021;
// console.log(person[year]);
// console.log(person.year);

// const keyTag = 'Name';
// console.log(person['first' + keyTag]);

// modifing objects
// updating values;
// console.log(person.birthYear);
// person.birthYear = 1978;
// console.log(person.birthYear);

// adding property
// console.log(person.midName);
// person.midName = 'Alexis';
// console.log(person.midName);

// // be carefull for typos
// person.lasName = 'Brown';
// console.log(person);

// deleting
// console.log(person.lastName);
// delete person.lastName;
// console.log(person.lastName);

// looping on objects
// for (let item of Object.values(person)) {
//   console.log(item);
// }

// object methods
const person = {
  firstName: 'Barry',
  lastName: 'Mitchell',
  birthYear: 1977,
  skills: ['JS', 'AWS', 'Dockers', 'Python'],

  calcAgeBad: function (bYear) {
    return 2021 - bYear;
  },

  calcAge: function () {
    console.log(this);
    return 2021 - this.birthYear;
  },
};

console.log(person.calcAgeBad(1977));

console.log(person.calcAge());

// understaning this

console.log(this);

const calcAge = function (birthYear) {
  console.log('Regular Function in Global Scope');
  console.log(this);
  return 2021 - birthYear;
};

calcAge(1977);

const calcAgeArrow = (birthYear) => {
  console.log('Regular Function in Global Scope');
  console.log(this);
  return 2021 - birthYear;
};

calcAgeArrow();

const person = {
  firstName: 'Barry',
  lastName: 'Mitchell',
  birthYear: 1977,
  skills: ['JS', 'AWS', 'Dockers', 'Python'],

  calcAge: function () {
    console.log('Regular Function Method in Object');
    console.log(this);
    return 2021 - this.birthYear;
  },

  calcAgeArrow: () => {
    console.log('Arrow Function Method in Object');
    console.log(this);
    return 2021 - this.birthYear;
  },
};

person.calcAge();
person.calcAgeArrow();

const baby = {
  nickname: 'Tina',
  birthYear: 2019,
};

baby.calcAge = person.calcAge;
console.log(baby.calcAge());

const newPerson = person;
newPerson.firstName = 'Alexis';
console.log(newPerson.firstName);
console.log(person.firstName);

