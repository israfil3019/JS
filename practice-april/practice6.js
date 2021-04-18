//JAVASCRIPT CLASSES

// we use class keyword to create a class
// Always add a method named constructor()

//Syntax

class className {
    constructor(){
        //somecode
    }
  };
  
  //Example
  
  class programming  {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  };
  
  // so we created a class called programming
  
  // and we initialized 2 properties called name and type
  
  //javascript class is not an object
  // it is a template for javascript objects
//SO HOW DO WE USE THESE CLASSES ???

//When you have a class, you can use the class to create objects

let language1 = new programming("Javascript", "C")
let language2 = new programming("Java", "C")

// what we did is we created 2 new objects in programming class
// constructor method is called automatically when a new object is created


//The constructor method
//The constructor method is a special method:
// it has to have exact name "constructor"
// it is executed automatically when a new object is created
// it is used to initialize object properties 

//If you do not define a constructor method, JavaScript will add an empty constructor method.

//Class methods

//Class methods are created with the same syntax as object methods

// use class keyword to create a class

// always add a constructor method

// then add any number of methods

// syntax
class ClassName {
  constructor() { }
  method_1() { }
  method_2() { }
  method_3() { }
}



//lets create a class called car and add a method named age that returns the age of the car
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);


// and you can call it with 
myCar.age() // returns 7 because of 2021 - 2014


// YOU CAN SEND PARAMETERS TO YOUR METHODS AS WELL 
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
myCar.age(year)

//Function constructors
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

//this is the way of creating an object creator, we can create our objects by calling this function with new keyword
let boy = new Person("Emir","Birlik", 18, "Blue")

// the way of declaring a default value in your objective is writing it to constructor, for example
function Default(value,name,id,key,phone){
  this.value = value;
  this.name = name
  this.id = id
  this.key = key;
  this.phone = phone;
  this.gender = "Male"
}
// so basically i don't need to pass in any value to my gender property its a default value. it will be added as gender propery automatically assigned with male 

//and if you want to add a property to your constructor, you have to go and add it. it has no other way

//and if you want to add a method to your constructor you have to go add it like,
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName; 
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}