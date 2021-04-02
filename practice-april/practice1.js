// javascript statements

//A computer program is a list of "instructions" to be "executed" by a computer.In a programming language, these programming instructions are called statements.
//JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.

//try to remember putting semicolons at the end of your every executable statement
//var a, b, c; a = 5; b = 6; c = a + b;
// it is not required but highly recommended

//avoid exceeding 80 characters in a line and you can put spaces between your stuff to make it more readable
// code blocks are defined in curly braces since this is a c type language, and it means that they are defined to be executed together

//javascript statements oftenly start with keywords


/*****************************************************/

// javascript syntax

// There are 2 type of values fixed values and Variable values
// fixed values are called literals
// variable values are called variables

//javascript literals

//Numbers
//Numbers are written with or without decimals
//10.50 1001

//Strings
//Strings are text, written within double or single quotes
//"John Doe", 'John Doe'

//Arrays
//Array literals are basically for storing data, they are like python lists
// var a = [1, 'abc', true,]

//Booleans
// Boolean literals in javascript have 2 values, 
//true false

//Objects
//Object literals are collection of zero or more key-value pairs of a comma-seperated list
//var a = {name:'23213', Lastname: "12312412412", "age":214124124}


//Javascript variables

//In a programming language, variables are used to store data values
// javascript uses the var keyword to declare variables
// an equal sign is uesd to assign values to variables
// var x; x = 6;

// you can declare many variables in one line by:
// var person = "John Doe", carName = "Volvo", price = 200;

// if variable is undefined it means that there is nothing assigned to that variable

//if you re-declare a variable, it will not loose its value

//Javascript Operators

//Javascript uses arithmetic operators to compute values
// / * + - 

//uses an assignment operator to assign values to variables
// =

//Javascript expressions

//Expression is a combunation of values,variables, and operators, which computes to  a value
// 5 * 10 which will be equal to 50

//expressions can contain variable values
// lets use the x we declared at couple lines top
// x * 10 which is basically 6 * 10 

//The values can be of various types, such as numbers and strings
//"John"+ " " + "Doe" which will evaluate to "John Doe"

// If you add string with a number it will not do the math opperation it will add the stuff you trying to add to string
//var x = "5" + 2 + 3;
// "523"
// the way you write it matters, javascript has the operation presence;
// var x = 2 + 3 + "5"
// "55"
// Javascript identifiers

// For your variable names you have to pick them carefully for not causing confusion
// you should use names that related what you storing in that variable
// And there are syntax rules
// You can't use keywords as variable name, you can start with letters underscore and dollar sign but none other than that

// JAVASCRIPT IS CASE SENSITIVE

//Javascript and camel case

//Hyphens:
//first-name, last-name, master-card, inter-city.

//Underscore:
//first_name, last_name, master_card, inter_city.

//Upper Camel Case (Pascal Case):
//FirstName, LastName, MasterCard, InterCity.

//Lower Camel Case:
//firstName, lastName, masterCard, interCity.


//Javascript character case 
// Javascript uses unicode characterset, which means it includes almost everything exist in the world texting even emojis


// Javascript let

// Javascript works with scopes, if you declare a variable in global scope which means not inside any function or anything, it will be accessable from anywhere in code

// But if you declare a variable inside a scope of a function or anything it will not be accessable from any other place other than that scope, we call this local scope

//If you declare the variable with var keyword, it can be accessable from anywhere in code because var keyword cannot have global scope
//{var x = 2;}
// x CAN be used here

// if you declare a variable with let keyword, it will be only accessable in its scope; block scopes matter for let keyword
//{let x = 2;}
// x can NOT be used here

//redeclaring a variable with var keyword will also change the variable declared outside of its block which can impose some problems
// var x = 10;
// //Here x is 10
// {var x = 2; // Here x is 2}
//  //Here x is 2

//But if you redaclare a variable with let keyword, it will not affect the outside of the block like var does.
// var x = 10;
// //Here x is 10
// {let x = 2; // Here x is 2}
// //Here x is 10

/*********************************************************/
//introduction

// javascript getelement by id can change the sources(like image ect.)
//document.getElementById('myImage').src=

//javascript can change css content as well and it an be anything here is the syntax
//document.getElementById("demo").style.fontSize = "35px";

//html can hide elements which you can either display an image or hide a text or whatever whenever you want
//document.getElementById("demo").style.display = "none";

//or it can change the type of the element
//document.getElementById("demo").style.display = "block";

//in short words, you can do whatever you want with css html

/************************************************/

//display possibilities

//inner html attribute will change the content of the html and display it on your webpage
//document.getElementById("demo").innerHTML = 5 + 6;

// you can use document.write() for testing purposes
//document.write(5 + 6);
// be careful it will delete all existing html

//window.alert() will display an alert box with the data passed in
//window.alert(5 + 6);

//console.log() yk its basically displaying the data in browser console
//console.log(5 + 6);

//and there is window.print(), yes js doesn't have print function or anything but this is for just printing out the page, like a printer like saving as pdf
//<button onclick="window.print()">Print this page</button>

/**********************************************************************/