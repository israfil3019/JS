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
// const person = {
//   firstName: 'Barry',
//   lastName: 'Mitchell',
//   birthYear: 1977,
//   skills: ['JS', 'AWS', 'Dockers', 'Python'],

//   calcAgeBad: function (bYear) {
//     return 2021 - bYear;
//   },

//   calcAge: function () {
//     console.log(this);
//     return 2021 - this.birthYear;
//   },
// };

// console.log(person.calcAgeBad(1977));

// console.log(person.calcAge());

// understaning this

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log('Regular Function in Global Scope');
//   console.log(this);
//   return 2021 - birthYear;
// };

// calcAge(1977);

// const calcAgeArrow = (birthYear) => {
//   console.log('Regular Function in Global Scope');
//   console.log(this);
//   return 2021 - birthYear;
// };

// calcAgeArrow();

// const person = {
//   firstName: 'Barry',
//   lastName: 'Mitchell',
//   birthYear: 1977,
//   skills: ['JS', 'AWS', 'Dockers', 'Python'],

//   calcAge: function () {
//     console.log('Regular Function Method in Object');
//     console.log(this);
//     return 2021 - this.birthYear;
//   },

//   calcAgeArrow: () => {
//     console.log('Arrow Function Method in Object');
//     console.log(this);
//     return 2021 - this.birthYear;
//   },
// };

// person.calcAge();
// person.calcAgeArrow();

// const baby = {
//   nickname: 'Tina',
//   birthYear: 2019,
// };

// baby.calcAge = person.calcAge;
// console.log(baby.calcAge());

// const newPerson = person;
// newPerson.firstName = 'Alexis';
// console.log(newPerson.firstName);
// console.log(person.firstName);

// const hotel = {
//   name: 'Hotel Clarusway',
//   categories: ['Spa', 'Swimming Pool', 'Resort'],
//   options: ['just stay', 'free breakfast', 'all inclusive'],
//   rooms: ['2-bed', '3-bed', '4-bed'],
//   receptionHours: {
//     mon: {
//       open: 8,
//       close: 22,
//     },
//     fri: {
//       open: 9,
//       close: 21,
//     },
//     sat: {
//       open: 10,
//       close: 20,
//     },
//   },
// };

// destructuring objects
// const arr = [1, 2, 3, 4, 6];

// let [x, , y, ...others] = arr;
// console.log(x, y, others);

// const { name, options, rooms, local = 'Paris' } = hotel;

// console.log(name, options, rooms, local);

// const { name: hotelName, rooms: hotelRooms, local2 = 'not available' } = hotel;

// console.log(hotelName, hotelRooms, local2);

// nested objects

// const { mon } = hotel.receptionHours;
// console.log(mon);

// const {
//   fri: { open, close },
// } = hotel.receptionHours;

// console.log(open, close);

// // short circuting
// const guests = hotel.numGuests || 50;
// console.log(guests);

// // nullish coalescing operator
// hotel.numGuests = 0;
// const guests2 = hotel.numGuests || 40;
// console.log(guests2);

// const guests3 = hotel.numGuests ?? 40;
// console.log(guests3);

// // chaining
// console.log(hotel.receptionHours.mon.open);
// console.log(hotel.receptionHours?.tue?.open);

// const arr = [2, 4, 6, 8];

// const person = {
//   firstName: 'Barry',
//   lastName: 'Mitchell',
//   birthYear: 1977,
//   skills: ['JS', 'AWS', 'Dockers', 'Python'],

//   calcAgeBad: function (bYear) {
//     return 2021 - bYear;
//   },

//   calcAge: function () {
//     console.log(this);
//     return 2021 - this.birthYear;
//   },
// };

// Array.prototype.push = function () {
//   console.log('this is new push mehthod');
// };

// const arr2 = [4, 5, 6, 7, 8];

// const div1 = document.getElementById('mydiv1');
// const div2 = document.getElementById('mydiv2');

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;

//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   };

//   color.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };

//   return color;
// }

// const firstColor = makeColor(55, 55, 55);
// console.log(firstColor);
// console.log(firstColor.rgb());
// console.log(firstColor.hex());

// div1.style.backgroundColor = firstColor.rgb();

// constructing functions
/*
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  this.test = function () {
    console.log('this is test function');
  };
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

console.log(Color(55, 55, 55));

const color1 = new Color(55, 55, 55);
console.log(color1);

const color2 = new Color(155, 155, 155);
console.log(color2);

div1.style.backgroundColor = color1.rgb();
div2.style.backgroundColor = color2.hex();

const color3 = new Color(0, 0, 0);

color1.test();

let arr = [1, 2, 3];
*/
/*
// Class declaration
class ColorClass {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  rgb() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }

  rgba(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  hex() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  // adding static method to Class, not available in instances
  static test() {
    console.log('This is static method');
  }
}

const red = new ColorClass(255, 67, 89, 'kırmızı');
const white = new ColorClass(255, 255, 255, 'beyaz');

div1.style.backgroundColor = red.rgba(0.8);
div2.style.backgroundColor = white.rgb();

// examples of static methods in Objects and Arrays

const arr = [1, 2, 3, 4];
// arr.from does not exist
// but we can use Array.from() because this method is static

const person = {
  name: 'Barry',
  age: 44,
};

for (let item of Object.keys(person)) console.log(item);
// Object.keys() is a static method
*/
/*
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    return `This pet's name is ${this.name} and it is ${this.age} years old.`;
  }
}

// const pet1 = new Pet('Karabaş', 5);
// console.log(pet1.info());

class Dog extends Pet {
  eat() {
    return `${this.name} eats meat.`;
  }
}

const karabas = new Dog('Karabaş', 5);
// console.log(karabas.eat());
// console.log(karabas.info());
// console.log(karabas.age);

class Cat extends Pet {
  constructor(name, age, eyes = 'black') {
    super(name, age);
    this.eyes = eyes;
  }

  eat() {
    return `${this.name} eats fish.`;
  }

  info() {
    return `This pet's name is ${this.name} and it is ${this.age} years old and it has ${this.eyes} eyes.`;
  }
}

const tekir = new Cat('Tekir', 3, 'blue');

console.log(tekir.eat());
console.log(tekir.info());
*/
/*
class Pet {
  // private properties
  #age;

  constructor(name, age) {
    this._name = name;
    this.#age = age;
  }

  info() {
    return `This pet's name is ${this._name} and it is ${this.age} years old.`;
  }

  #test() {
    return 'private method';
  }

  get petAge() {
    return this.#age;
  }

  set petAge(newAge) {
    // if required validation
    this.#age = newAge;
  }

  setPetAge(newAge) {
    // if required validation
    this.#age = newAge;
  }
}

const karabas = new Pet('Karbaş', 5);

console.log(karabas.petAge); // here getter works
karabas.petAge = 4; // here setter works
karabas.setPetAge(11);
console.log(karabas.petAge);
*/
