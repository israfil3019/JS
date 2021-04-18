//Switch cases

//The switch statement is used to perform different actions based on different conditions.


//Use the switch statement to select one of many code blocks to be executed.


switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
//This is how it works:

//The switch expression is evaluated once.
//The value of the expression is compared with the values of each case.
//If there is a match, the associated block of code is executed.
//If there is no match, the default code block is executed.



//The getDay() method returns the weekday as a number between 0 and 6.

//(Sunday=0, Monday=1, Tuesday=2 ..)

//This example uses the weekday number to calculate the weekday name:

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
//The result of day will be: Friday 


//The break Keyword
//When JavaScript reaches a break keyword, it breaks out of the switch block.

//This will stop the execution inside the switch block.

//It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

//If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

//The default Keyword
//The default keyword specifies the code to run if there is no case match


//The getDay() method returns the weekday as a number between 0 and 6.

//If today is neither Saturday (6) nor Sunday (0), write a default message:

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

//The result of text will be: Today is Saturday

//The default case does not have to be the last case in a switch block

switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}

//If default is not the last case in the switch block, remember to end the default case with a break.

//Common Code Blocks

//Sometimes you will want different switch cases to use the same code.

//In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
//Strict Comparison
//Switch cases use strict comparison (===).

//The values must be of the same type to match.

//A strict comparison can only be true if the operands are of the same type.


var x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}


//result is no value found because of the strict comparing, string is not equal to number


//Javascript  Loops

// So basically we use loops to execute a code for multiple times

//Loops are one of the main basics of programming and they are really handy 
// since they save you from writing same thing over and over again 
//For example 
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";

//instead of that we can use this 
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

// like other c types we have multiple type of loop kinds in javascript

//for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while condition is true but the difference is, block of code gets executed at least once no matter what

// The for loop 
// the for loop has the following syntax
// for (statement 1; statement 2; statement 3) {
  // code block to be executed
// }

// statement 1 is executed (one time) before the execution of block
// statement 2 is defining the condition for executing the block
// statement 3 is executed every time after the code block has been executed

for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}


//so when we look at the example above
// we can see that statement 1 declares a variable before loop starts (var i = 0)
// statement 2 defines a condition for the loop to run(i must be less than 5)
// statement 3 increases the value (i++) each time the code block in the loop has been executed

//Statement 1

//Normally we use statement 1 to initialize the variable used in the loop
// But this is not always the case, JAVASCRIPT DOES NOT CARE, statement 1 is optional
// You can initiate many values in statement 1 you just need to seperate them by comma

for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}

// you can even leave it alone, and you can use your previously declared values
var i = 2;
var len = cars.length;
var text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}


//Statement 2
// We oftenly use statement 2 for our condition of the initial variable
// This is not always the case, JAVASCRIPT DOES NOT CARE, Statement 2 is also optional
// If statement 2 retunrs true,the loop will start over again,if it is false it will end the loop

// if you omit your statement 2, you must provide a break loop inside otherwise you have an endless loop which will crash your browser


// Statement 3

// So we usually use our statement 3 to increment the value of the initial variable
// this is not always the case, as you know JAVASCRIPT DOES NOT CARE, and statement 3 is optional
// Statement 3 can do anything like, it can do negative increment (i--), positive increment (i++) (i += 15), or anything else
// statement 3 can also be omitted, you can increment your values inside the loop
var i = 0;
var len = cars.length;
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}

// For in loops 

// WE use For/in loop for looping through the properities of object
// here is the syntax

for(key in object) {
  //block of code to be executed
}

// an example 
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}

// so explanation of this is basically
// we declared an object called person
// and we declared 2 variables
// we used x variable to iterate over the person object 
// X CARRIES THE KEYS OF THE OBJECT WHICH IS FNAME LNAME AGE
// WE USE THE X TO ACCESS ITS VALUES
// THE VALUE OF THE KEY IS person[x]

// Using for in over arrays

//syntax
for(variable in array) {
  //code
}

//example=
var numbers = [45, 4, 9, 16, 25];

var txt = "";
var x;
for (x in numbers) {
  txt += numbers[x]
}

// explanation 
// we declared an array called numbers
// we declared a variable called txt and x 
// we used x as our variable in our loop
// X IS CARRYING INDEXES
// WE REACH EVERY ELEMENT OF OUR ARRAY BY USING numbers[x] (indexing basically)


//Do not use for in over an Array if the index order is important.

//The index order is implementation-dependent, and array values may not be accessed in the order you expect.

//It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.


//Array.forEach()
//The forEach() method calls a function (a callback function) once for each array element.

//syntax
// Array.foreach(functionname)

//Example
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value;
}

//VALUE PARAMETER CARRIES THE ELEMENT VALUE
// INDEX PARAMETER CARRIES THE INDEX
// ARRAY CARRIES THE ARRAY IT SELF

// the example only uses the value parameter at the top so example could be written as
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value;
}

//For of loop 
//The javascript for of statement loops through the values of an iterable object
//it lets you loop over iterable data structures such as arrays,strings,maps,nodelists,and more

//syntax
for(variable of iterable) {
  //code
}

//variable - for every iteration the value of the next property is assigned to the variable
// variable can be declared with const let or var

// iterable - an object that has iterable properties

//Looping over an array
let games = ["csgo", "valorant", "loldurlegender"]
let txt = ""

for(let x of games) {
  text += x;
}


// Looping over string

let languge = "Javascript"
let text = ""

for(let x of language){
  text += x
}

// While loop
// This loop type is getting executed as long as specified condition is true


//Syntax
while (condition) {
  //block of code to be executed
}

//Example
while (i < 10) {
  text += "The number is " + i;
  i++;
}

// in the example, code will be exectued as long as variable i is less than 10

// IF YOU FORGET TO INCREASE YOUR VARIABLE IN CONDITION, YOU HAVE ENDLESS LOOP WHICH IS BAD



// Do while loop
//The do/while loop is a variant of the while loop. 
//This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true

//Syntax
do {
  //block of code
}
while(condition);

//Example

do{
  text += "The number is " + i;
  i++;
}
while (i < 10);

// Javascript Break and continue 

//The break statement "jumps out" of a loop.

//The continue statement "jumps over" one iteration in the loop.

// you have already seen the break statement in switch case, we can use break to get out of the loop as well

//example
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i;
}
//the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3

//The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop

//Example
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
//this example skips the value of 3

//JAVASCRIPT TYPE CONVERSION TABLE 

//typeconvention table.png


//JAVASCRIPT BITWISE
//Javascript uses 32 bits bitwise operands
//00000000000000000000000000000101 (5) like this 

//Bitwise AND

//When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.

//One bit example:

//0 & 0	 => 0
//0 & 1	 => 0
//1 & 0	 => 0
//1 & 1	 => 1


//4 bit example:

//1111 & 0000	=> 0000
//1111 & 0001	=> 0001
//1111 & 0010	=> 0010
//1111 & 0100	=> 0100



//Bitwise OR
//When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits are 1:

//One bit example:

//0 | 0	=> 0
//0 | 1	=> 1 
//1 | 0	=> 1
//1 | 1	=> 1

// 4 bit example:
//1111 | 0000	=> 1111
//1111 | 0001	=> 1111
//1111 | 0010	=> 1111
//1111 | 0100	=> 1111

//Bitwise XOR
//When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different:

//One bit example:
//0 ^ 0	=> 0
//0 ^ 1	=> 1 
//1 ^ 0	=> 1
//1 ^ 1	=> 0 

//4 bit example:
//1111 ^ 0000	=> 1111
//1111 ^ 0001	=> 1110
//1111 ^ 0010	=> 1101
//1111 ^ 0100	=> 1011

// actual examples

//JavaScript Bitwise AND (&)
//BOTH BITS HAVE TO BE 1 TO RETURN 1

//5	 => 00000000000000000000000000000101
//1	 => 00000000000000000000000000000001
//5 & 1	 => 00000000000000000000000000000001 (1)

var a = 5 & 1 // is 1


//JavaScript Bitwise OR (|)
//Bitwise OR returns 1 if one of the bits are 1:

//5	=> 00000000000000000000000000000101
//1	=> 00000000000000000000000000000001
//5 & 1	=> 00000000000000000000000000000001 (1)

var a = 5 | 1 // is 1 


//JavaScript Bitwise XOR (^)
//Bitwise XOR returns 1 if the bits are different:

//5	=> 00000000000000000000000000000101
//1	=> 00000000000000000000000000000001
//5 ^ 1	=> 00000000000000000000000000000100 (4)

var a = 5 ^ 1 // is 4

//JavaScript Bitwise NOT (~)
// flips its bits
//5	=> 00000000000000000000000000000101
//~5	=> 11111111111111111111111111111010 (-6)

var a = ~5 //is -6 

//JavaScript (Zero Fill) Bitwise Left Shift (<<)
//This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:

//5	=> 00000000000000000000000000000101
//5 << 1	=> 00000000000000000000000000001010 (10)

var a  = 5 << 1 // is 10

//JavaScript (Sign Preserving) Bitwise Right Shift (>>)
//This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off:
//-5	=> 11111111111111111111111111111011
//-5 >> 1	=> 11111111111111111111111111111101 (-3)

var a = -5 >> 1  //is -3

//JavaScript (Zero Fill) Right Shift (>>>)
//This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:

//5	=> 00000000000000000000000000000101
//5 >>> 1	=> 00000000000000000000000000000010 (2)

var a = 5 >>> 1 //is 2

//Binary Numbers
//Binary numbers with only one bit set is easy to understand:
//00000000000000000000000000000001 =>	1
//00000000000000000000000000000010	=> 2
//00000000000000000000000000000100	=> 4
//00000000000000000000000000001000	=> 8
//00000000000000000000000000010000	=> 16
//00000000000000000000000000100000	=> 32
//00000000000000000000000001000000	=> 64



//Setting a few more bits reveals the binary pattern:
//00000000000000000000000000000101	=> 5 (4 + 1)
//00000000000000000000000000001101	=> 13 (8 + 4 + 1)
//00000000000000000000000000101101	=> 45 (32 + 8 + 4 + 1)


//Converting Decimal to Binary
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

//Converting Binary to Decimal
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}



//Javascript ERRORS - throw and try to catch XD

//The try statement lets you test a block of code for errors.

//The catch statement lets you handle the error.

//The throw statement lets you create custom errors.

//The finally statement lets you execute code, after try and catch, regardless of the result.



//ERRORS WILL HAPPEN AND HAVE TO HAPPEN OTHERWISE YOU ARE DOING SOMETHING WRONG

//When executing Javascript code, different errors can occur
//Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things

//Example syntax
try {
  adddlert("Welcome guest!");
}
catch(err) {
    console.log(err.message)
}

// i mistyped the alert to get an error. JavaScript catches adddlert as an error, and executes the catch code to handle it.


//syntax
try{
  //block of code to try
}
catch(err){
  //block of code to handle it
}

//Javascript throws errors
// When an error occurs, Javascript will normaly stop and generate an error message
// The technical term for this is: Javascript will throw an exception

//Javascript will actually create an error object with two properities: name and message

//The throw statement

//The threow statement allows you to create a custom error
// technically you can throw an exception
// the exception can be a String , number, boolean or an object

throw "Too big" //throw a text
throw 500 //throw a number

// if you use throw together with try and catch you can control program flow and generate custom error messages

// lets give an input validation example

function myFunction() {
  var message, x;
  message = ""
  x = value;
  try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    console.log("Input is " + err)
  }
}
// err is our throw message so like if you give higher than 10 as input it will return Input is too high


//Finally statement
//The finally statement lets you execute code, after try and catch, regardless of the result:
//syntax
try {
  //Block of code to try
}
catch(err) {
  //Block of code to handle errors
}
finally {
  //Block of code to be executed regardless of the try / catch result
}


//example
function myFunction() {
  var message, x;
  message = ""
  x = value;
  try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    console.log("Input is " + err)
  }
  finally{
    value = ""
  }

}
// ERROR OBJECT

//JavaScript has a built in error object that provides error information when an error occurs.

//The error object provides two useful properties: name and message.

//NAME sets or returns an error name
//Message sets or returns an error message(a string)

//ERROR NAME VALUES

//EvalError	An error has occurred in the eval() function
//RangeError	A number "out of range" has occurred
//ReferenceError	An illegal reference has occurred
//SyntaxError	A syntax error has occurred
//TypeError	A type error has occurred
//URIError	An error in encodeURI() has occurred

// newer version of javascript doesn't throw evalerror, uses syntax error instead





//Javascript scopes 

// SCOPES DETERMINES THE ACCESSIBILITY (VISIBILITY) OF VARIABLES 

//Javascript function scope
// in javascript there are 2 scopes

//Local scope
//Global scope

// Javascript has function scopes and each function creates new scopes
// Scope determines the accessibility of these variables

//VARIABLES THAT DEFINED INSIDE THE FUNCTION ARE NOT ACCESSABLE FROM OUTSIDE THE FUNCTION

//Local Javascript Variables

//Variables declared within a javascript function is local to that function
// local variables have function scope which means they are only be accessed from within the function


//Example

// code here can NOT use carName

//function myFunction() {
//  var carName = "Volvo";

  // code here CAN use carName

//}



//Since local variables are only recognized inside their functions, variablees with the same na me can be used in different functions

// Local variables are created when a function starts,and deleted when the function is completed


//Global Javascript variables

//A variable declared outside of a function becomes global
// and they are available to use from anywhere of the cod

var carName = "Volvo";

// code here can use carName

function myFunction() {

  // code here can also use carName

}



// if you assign a value to a variable that has not been declared, it will automatially become global variable

myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}


//Do NOT create global variables unless you intend to.

//Your global variables (or functions) can overwrite window variables (or functions).
//Any function, including the window object, can overwrite your global variables and functions.


///The Lifetime of JavaScript Variables
//The lifetime of a JavaScript variable starts when it is declared.

//Local variables are deleted when the function is completed.

//In a web browser, global variables are deleted when you close the browser window (or tab).



// Function Arguments
// Function arguments (parameters) work as local variables inside functions



//Javascript Hoisting


//Hoisting is javascripts default behavior of moving declarations to top

// thanks to execution context

//JAVASCRIPT DECLARATIONS ARE HOISTED

//In JavaScript, a variable can be declared after it has been used.

//In other words; a variable can be used before it has been declared.

// Because Javascript reads the whole code before executing so that allows it to recognize the variables before declarations
//thats what we call execution context

//But when it comes to let and const keyword, yes they are hoisted as well
//BUT THEY ARE NOT INITIALIZED
//  THEY ARE IN TEMPORAL DEAD ZONE FROM THE START OF THE BLOCK UNTIL DECLARED


//UNTIL THE INTERPRETER REACHES THE VARIABLE (NO MATTER WHICHONE IT IS)
// IT WILL BE UNDEFINED

//ONLY DECLARATIONS ARE HOISTED NOT THE VALUES SO THEY BE UNDEFINED

// SO DECLARE YOUR VARIABLES AT TOP, IT WILL SAVE YOU SO MUCH TIME