// Javascript Functions
// functions are code blocks that designed to do a particular task
// functions are executed when something invokes it which is basically calls it 

//function myfunc(p1,p2) {
    //return p1 * p2  // will return the product of p1 and p2
//}

// syntax
// function keyword to define the function and functions name follows it up which is myfunc in the example at top
// then followed by paranthesis (you can pass parameters if needed, if its more than one seperate them by commas)
// since javascript is a c type language, we define our code blocks by using curly braces "{}"
// and write everything inside it

//function example(parameter1,parameter2,parameter3){
    // code to be executed
//}

// we pass values to our defined parameters when we are calling the function, for example lets call the example function
//example(2,3,'john') in this case  parameter1 will be 2, parameter2 will be 3, and parameter3 will be "john"
// parameters behave as local variables, which is you can only use them inside the function
//you can pass declared variables to functions as well 

//function can be invoked over an event
// it can be invoked in code
// or it can be self invoked which is automatically


//when javascript reaches a return statement, function will stop executing
// if the function is invoked from a variable, javascript will return its result to the variable as value
// var x = myfunc(2,3)

// in human words, return is basically returns the value to the caller which is name of our function

//var x = myfunction(4,3)

//function myfunction(a,b){
    //return a + b  //returns the result of the operation to the caller
//}
// x will be 7 

// so why do we use functions?
// it adds reusability to our code so we don't need to do the same code over and over again
// we can use the function we defined over different parameters
// lets think of an temp calculator, 

// function toCelsius(fahrenheit) {
    //return (5/9) * (fahrenheit - 32)
//}

// we can basically call this code over and over agin to calculate different tempratures

// the () operator invokes the function
// we can not execute a function without using paranthesis
// lets use the example at the top
// toCelcius //returns function
// toCelcius(5) //it will execute the function
// you have to use paranthesis regardless if you have parameters or not

// you can use your functions return of your functions in your variables as well 
// var text = "the tempreture is " + toCelsius(77) + " Celcius"

//THE VARIABLES DECLARED INSIDE FUNCTION, BECOMES A LOCAL VARIABLE REGARDLESS OF KEYWORD
// code here can NOT use carName

//function myFunction() {
    //var carName = "Volvo";
    // code here CAN use carName
 // }
  
  // code here can NOT use carName

// variables created in functions are created when function starts and deleted when function is completed
//The Arguments Object

//JavaScript functions have a built-in object called the arguments object.

//The argument object contains an array of the arguments used when the function was called (invoked).

//This way you can simply use a function to find (for instance) the highest value in a list of numbers:

//Example
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

// when you console.log the argument object you see an object that indexes as keys and values as passed in arguments. 
// but the .length property returns the number of arguments passed in

// JAVASCRIPT OBJECTS 
//Lets give an example of objects in real life
// Cars are good example of objects
//A car has properities like weight,color, and methods like start and stop

// Objects are variables too but they contain multiple values assigned to keys
var car = {type:"Fiat", model:"a2", color:"white"};

// the values are written in name:value pairs or you can call key value pairs
//name and value seperated by colon like in example

//How do we add new values to our object?
// lets say you have an object like
var obj = {key1: value1, key2: value2};
//and you wanna insert values and there are 2 ways of it
//1. dot notation
obj.key3 = "value3";
// or you can use square bracket notation
obj["key3"] = "value3";

//space and line breaks are not important
//var car = {
//   type:"Fiat", 
//model:"a2", 
//color:"white"\
//};

//Object Properties
//Each name value pair called Property 

//Accessing object properities
// so this has 2 ways you can either use objectname.propertyname
//or you can use objectname['propertyname']

//car.type
//car['type']

//this keyword, 
//in a function definition, this keyword refers to owner of the function
// this.color means the color property of this object

// you can add functions to your objects 
//var person = {
    //firstName: "John",
    //lastName : "Doe",
    //id       : 5566,
    //fullName : function() {
    //  return this.firstName + " " + this.lastName;
    //}
// };
// and you can access them simply with same syntax and putting paranthesis at the end of it
// person.fullname()
// if you don't pass paranthesis, you will get the full value which is whole function syntax in this case

// do not declare strings numbers and booleans as objects with 'new' keyword
//when javascript variable is declared with a keyword "new", the variable is created as object
//var x = new String();        // Declares x as a String object
//var y = new Number();        // Declares y as a Number object
//var z = new Boolean();       // Declares z as a Boolean object

// avoid using this because it will complicate your code and slow down your execution speed


//How do we add a method to our existing object ?
person.name = function () {
  return this.firstName + " " + this.lastName;
};
// same way with adding normal property
//Displaying objects
//there are 4 ways of it 
//Displaying the Object Properties by name
var person = {name:"John", age:30, city:"New York"};

document.getElementById("demo").innerHTML =
person.name + "," + person.age + "," + person.city;

//Displaying in a loop
var x, txt = "";
var person = {name:"John", age:30, city:"New York"};

for (x in person) {
txt += person[x] + " ";
};

document.getElementById("demo").innerHTML = txt;

// Using Object.values()
var person = {name:"John", age:50, city:"New York"};

var myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;

//Using JSON.stringfy():
//Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
//Returns in JSON notation
var person = {name:"John", age:30, city: "New York"};

var myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;

//{"name":"John","age":50,"city":"New York"}


//SETTERS AND GETTERS

//JavaScript Getter (The get Keyword)
//This example uses a lang property to get the value of the language property.
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "en",
  get lang() {
    return this.language;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;

//JavaScript Setter (The set Keyword)
//This example uses a lang property to set the value of the language property.

Example
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;

//Why Using Getters and Setters?
//It gives simpler syntax
//It allows equal syntax for properties and methods
//It can secure better data quality
//It is useful for doing things behind-the-scenes

//Object.defineProperty()
//The Object.defineProperty() method can also be used to add Getters and Setters:

//Example
// Define object
var obj = {counter : 0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

