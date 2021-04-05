//Javascript JSON 

//JSON is a format for storing and transfering data

//JSON is often used when data is sent from a server to a web page

//What is this JSON thing and format

//JSON stands for JavaScript Object Notation

//JSON is a lightweight data interchange format

//JSON is language independent which means many languages support json format

// JSON is "self-describing" and pretty easy to understand


//The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.


//So this JSON syntax defines an employees object: an array of 3 employee records inside objects


//JSON format evaluates to javascript objects
//since the format is syntactically identical to the code for js objects as you can see
// as a result of this similarity, javascript program can easily convert json data into native js objects


//JSON SYNTAX RULES

//DATA IS IN NAME VALUE PAIRS
// DATA IS SEPERATED BY COMMAS
// CURLY BRACES HOLD OBJECTS
//SQUARE BRACKETS HOLD ARRAYS

//JSON DATA - A NAME AND A VALUE

//JSON data is written in name value pairs, just like js object properties 

//A name value pair consists of a field name(in double quotes), followed by a colon, followed by a value
// "firstName":"John"

//JSON NAMES REQUIRE DOUBLE QUOTES 

//JSON Objects
//JSON objects are written inside curly braces.

//Just like in JavaScript, objects can contain multiple name/value pairs:

// {"firstName":"John", "lastName":"Doe"}

//JSON Arrays
//JSON arrays are written inside square brackets.

//Just like in JavaScript, an array can contain objects:

// "employees":[
//   {"firstName":"John", "lastName":"Doe"},
//   {"firstName":"Anna", "lastName":"Smith"},
//   {"firstName":"Peter", "lastName":"Jones"}
// ]

//Converting a JSON Text to a JavaScript Object

//A common use of JSON is to read data from a web server, and display the data in a web page.

//For simplicity, this can be demonstrated using a string as input.

//First, create a JavaScript string containing JSON syntax:

// var text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:

var obj = JSON.parse(text);

//Finally, use the new JavaScript object in your page like this
document.getElementById("").innerHTML =
(obj.employees[1].firstName + " " + obj.employees[1].lastName );