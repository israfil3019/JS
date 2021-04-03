//loop scope
// var in loop

// var i = 5
// for(var i = 0; i < 10, i++) {
    // Some statements
//}
// Here i is 10 because i will be incremented to 10 in the loop and it will keep its value because of var redeclaration

// let in loop
// let i = 5
//for(let i = 0; i < 10, i++) {
    //some statements
//}
// here i is 5 because even if i incremented to 10 in loop scope it kepts its value outside of scope because of let redeclaration

// you can not access let variable before its declarations but you can access var variable because of hoisting

// Javascript Const
// const declarations MUST BE assigned when they are declared, don't do it in multiple line like others

// Cons Declaration behaves pretty much like let declaration

// only difference between const and let is const can not be reassigned or changed

// we can't change when primative value is assigned to it but we can change its object properities
//const car = {type:"Fiat", model:"500", color:"white"};

//constant arrays can be changed as well 
//const cars = ["Saab", "Volvo", "BMW"];
//cars[0] = "Toyata"
//cars.push("Audi")


// But you can not reasign a constant array or object
//const cars = ["Saab", "Volvo", "BMW"];
//cars = ["Toyota", "Volvo", "Audi"];    // ERROR

//const car = {type:"Fiat", model:"500", color:"white"};
//car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR


// you can not redaclare const values in same scope, if its different scope you can still only redeclare by const
//const x = 2;       // Allowed
//const x = 3;       // Not allowed
//x = 3;             // Not allowed
//var x = 3;         // Not allowed
//let x = 3;         // Not allowed
//{
    //const x = 2;   // Allowed
    //const x = 3;   // Not allowed
    //x = 3;         // Not allowed
    //var x = 3;     // Not allowed
    //let x = 3;     // Not allowed 
//}


// Javascript arithmetic operators
// + for addition
// - for subtraction
// * for multiplication
// ** For taking the root
// % modulus
// ++ for increment
// -- for decrement

// Jaavascript Assignment Operators
// = ,  x = y
// += , x += y which is basically x = x + y
// -= , x -= y which basically means x = x - y
// *= , x *= y which basically means  x = x * y
// /= , x /= y which basically means x = x / y
// %= , x %= y which basically means x = x % y
// **= , x **= y which basically means x = x ** y

// strings adding with numbers

//var x = 5 + 5; // returns 10
//var y = "5" + 5; // returns 55
//var z = "Hello" + 5; // returns Hello5


//Javascript Comparison Operators
// == which means equal to (values being equal is enough to return true)
// === which means equal type equal value (type and value has to be equal otherwise returns false)
// != not equal (returns true if values are not equal)
// !== not equal value or not equal type (returns true if either value or type is not equal)
// > greater than 
// < less than
// >= greater or equal
// <= less than or equal
// ? ternary operator we use it in same line if statements like isMember ? '$2.00' : '$10.00' so if ismember is true it will return 2.00 if not it will return 10.00

// Javascript logical operators
// && logical and (both values have to be true)
// || logical or (either one of the values have to be true)
// ! logical not (if value is true, becomes false. if value is false, becomes true)

//Javascript type Operations
// typeof (returns the type of a variable)
// instanceof (returns true if an opject is an instance of an object type)


// Javascript Bitwise operators
// & AND, 5 % 1 -> 0101 & 0001 -> 0001 -> 1 so basically if both bits are true, bitstays true if not it filps to false
// | OR, 5 | 1 -> 0101 | 0001 -> 0101 -> 5 so basically if one of the bits true which is 1, returns true
// ~ NOT, ~5 -> ~0101 -> 1010 -> 10 so basically it flips all the bits to its opposite, if its 1 it equasl to 0 if its 0 it equals to 1
// ^ XOR. 5 ^ 1 -> 0101 ^ 0001 -> 0100 -> 4 if both equal to true, returns 0 if only one of them true, returns true
// << zero fill left shift, 5 << 1 -> 0101 << 1 1010 -> 10 if there is a 0 on left side, shifts it to right side
// >> signed right shift, 5 >> 1 -> 0101 >> 1 -> 0010 -> 2 adds a 0 to right side
// >>> zero fill right shift 

// Javascript Data Types

// var length = 16; // Number
// var LastName = "Johnson"; //String
// var x = {firstName:"John", lastName:"Doe"} //Object

//Javascript data types

//javascript variables can hold many data types such as numbers strings objects and more

// When you are adding a number to string, javascript will treat the number as a string
// var x = 16 + "Mark" will be equal to "16Mark"

// but that is only for when it comes to adding numbers and strings, for example:
// var x = 16 + 4 + "Mark" will come out as "20Mark"

// once you add the number and strings result will come out as string
// var x = "Mark" + 16 + 4 will come out as Mark164

// Javascript has dynamic types which means the same variable can hold different values without errors
//var x; //Undefined
// x = 5; // now x is a number;
// x = "ha"; // now x is a string;

// Javascript strings

//string is a data type that includes series of characters

//strings are written in quotes, you can either write with double or single quotes

// you can use quotes inside string as long as it doesn't match the surrounding string

// Javascript Numbers

//javascript has only one type of numeric data type
//Numbers can be written with decimals or without decimals

//extra large or extra small numbers can be written with scientific exponentials,
// var y = 123e5 will be equal to 12300000
// var z = 123e-5 will be equal to 0.00123

// Javascript booleans

// Booleans can hold have only 2 values, it can be true or it can be false
// var x = 5
// var y = 5
// var z = 6
//(x == y) will return true since they both same values
// (x == z) will return false since they both hold different values

// booleans are oftenly used in conditional testing with their operators

//Javascript arrays

// Arrays are written in square brackets "[]" and all items are separated by commas

// the array i will create under this line will declare an array called cars and it will contain three items
// var cars = ["Saab", "Volvo", "BMW"]

//Arrays are zero index based which means first items index will be 0 and second will be 1 and so on

//Javascript Objects

// Javascripts Objects are written with curly braces"{}"
// Object properitiees are written as name:value pairs, seperated by commas
// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//The person object has 4 properities: firstname lastname age eyecolor

//Typeof operator

//typeof operator is used to find the type of a javascript variable
//typeof operator returns the type of a variable or an expression:
//typeof "" // returns string
// typeof "John" // returns string
// typeof 0 //returns number
// typeof (3) // returns number
// typeof 3.14 // returns number
// typeof (3+14) // returns number
// typeof true // returnst boolean

//Undefined

// A variable without a value, as the value undefined, the type is also undefined
// var car; this variable is undefined

// any variable can be emptied by setting the value to undefined
// var a = 23 // number declaration 
// a = undefined // emtying the a variable, value equal  to undefined

//Empty values

// Empty value has nothing to do with undefined
//An empty string has both a legal value and a type
// var car = ""; // the value is "", the type of is string 

//Null
// In javascript null is "Nothing". It is supposed to be something that doesn't exist at all
// Unfortunately, In javascript, the data type of null is an object KEKW
// It is a bug that coming from the js interpreter, the typeof null supposed to be null
// you can empty an object by setting it to a null
// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//person = null; // now value is null but type is still an object LMAO

// as i mentioned before you can empty an object by using undefined as well
//var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// person = undefined; // Now both value and type is undefined

//The difference between undefined and null

//undefined and null are equal in value but different in type
//typeof undefined  will return undefined
//typeof null  will return object

// null === undefined //false
// null == undefined //true

//Primitive data types

// a primitive data value is a single simple data value with no additional properties and methods
//Using a string method doesn't mutate the string
//var bar = "baz";
//console.log(bar);               // baz
//bar.toUpperCase();
//console.log(bar);               // baz

//Assignment gives the primitive a new (not a mutated) value
//bar = bar.toUpperCase();       // BAZ

//A primitive can be replaced, but it can't be directly altered.

//Strings are primitive
// Numbers are primitive
// BigInt is primitive
// Boolean is primitive
// Undefined is primitive
// Symbol is primitive
// Null is primitive

// Complex data

// The typeof operator can return one of two complex types
// function
// object

// the typeof operator returns object for objects, arrays, and null(because of the bug yk)
// the type of operator does not return object for functions
//typeof {name:'John', age:34} // Returns "object"
//typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
//typeof null                  // Returns "object"
//typeof function myFunc(){}   // Returns "function"