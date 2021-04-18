
//HTML EVENTS/ EVENT HANDLERS

// HTML events are things that happen to html elements LMAO
// when Javascript is used in html pages, Javascript can "react" on these events.

//An html event can be something the browser does, or Something a user does
//Here some examples of html events:
// An html web page has finished loading
// An html input field was changed
// An html button is clicked

//Often,When events happen, you may wanna do something

// Javascript lets tyou execute code when events are detected
// HTML allows Event handler attributes,with javascript code, to be added to html elements

//here is the synax
// <element event ='some JavaScript'>

// you can write inside double quotes as well
// <element event = "some Javascript"

//Lets give real life example,an onclick attribute with code is added to button element
// <button onclick="document.getElementById('demo').innerHTML = Date()"
// so what this code does is, when button is clicked the element with id demo is changed to the result of date function

//lets give another example but this time with using this keyword
// <button onclick = "this.innerHTML = Date()">
// so what this does is, when this button is clicked, it changes its own element to the result of the function passed in

//<button onclick="displayDate()">The time is?</button>


// List of Common html events
//onchange is for when html element is changed
//onclick is for when user clicks the html element
//onmouseover is for the user moves the mouse over an html element
//onmouseout is for when user moves the mouse away from an html element
//onkeydown is for when user pushes a keyboard key
//onload is for when browser has finished loading the page


//SO WHAT CAN JAVASCRIPT DO ? 

// event handlers can be used to handle andverify user input, user actions, and browser actions:
// Things that should be done when page is closed
// action that should be performed when a user clicks a button
// content that should be verified when a user inputs a data
//and many more

//many different methods can be used to let javascript work with events:
//html event attributes can execute javascript code directly 
// html event attributes can call javascript functions
// you can assign your event handler functions to html event
// you can prevent events from being sent or being handled
// and many more


//Back to js strings

//how to find the length of string??
// var txt = 'asdgausdgjaidgjasdigjasd' // is a string value
// var sln = txt.length; // sln variable holds the length of the string and its a number type data

//escape characters
// we use backslashes to avoid inside string bugs such as using same type of quote as declaration quotes
// var x = 'how's the weather today' // that is a bug because only how is inside the string 
// var x = 'how\'s the weather today' // this works because backslash avoids the bug

// \' is for single quote
// \" is for double quotes
// \\ is for backslash

// there are 6 other sequences valid in JavaScript 
// \b for backspace
// \f for form feed
// \n for new line 
// \r for carriage return
// \t for horizonntal tabulator
// \v for vertical tabulator

// these sequences are originally designed to control type writers, teletypes, and fax machines. they do not make any sense to html

// you can break libes with backslash or addition
//document.getElementById("demo").innerHTML = "Hello " +
//"Dolly!";
//document.getElementById("demo").innerHTML = \
//"Hello Dolly!";

//STRING METHODS AND PROPERTIES

// as we talked before we have a built in length method that returns a number to variable
// var a = 'avsa'; 
// var b = a.length; // b is 4 

//indexOf() method
//we use this method to find string in a string, if passed inside the paranthesis exist inside the string it will return the first occurrence of it
// if it doesn't exist it will return -1
// var k = "Please locate where 'locate' occurs!";
// var pos = k.indexOf ("locate") // it will return a numeric value don't forget that

//lastIndexOf() method
//this method is pretty simillar to indexof method but it returns the last occurens of a specified text in the string
// var k = "Please locate where 'locate' occurs!";
// var pos = k.lastIndexOf ("locate") // it will return a numeric value don't forget that
// this will return -1 if the passed in string doesn't exist 
// and lastIndexOf method searches backwards(from end to beginning)

// you can pass in a second parameter to declare where the search is going to start
//var str = "Please locate where 'locate' occurs!";
//var pos = str.indexOf("locate", 15);

// this basically starts the serch from the 15th index

//Search() method
// this method works almost same with the indexof method
// var str = "Please locate where 'locate' occurs!";
//var pos = str.search("locate"); returns number value

// but there is a difference
//The search() method cannot take a second start position argument.
//The indexOf() method cannot take powerful search values (regular expressions).


//extracting string parts
// there are 3 methods for extracting a part of a string:
// IM SO HAPPY THAT THERE IS SLICE METHOD :)))
// slice(start,end)
// substring(start, end)
// substr(start, length)

//slice() extracts a part of a string and returns extracted part in a new string
// it takes 2 parameters, start position, and end position(end not included)
//var str = "Apple, Banana, Kiwi";
//var res = str.slice(7, 13); // this will return Banana
// it slices the string from the position 7 to 12.

// if a parameter is negative, the position is counted from the end of the string 
//var str = "Apple, Banana, Kiwi";
//var res = str.slice(-12, -6); // this will return Banana as well

// if you don't pass in an end position it will return the rest of the string starting from the starting position passed in
//var res = str.slice(7);

// or you can count from the end 
//var res = str.slice(-12);

// substring() is similar to slice()
// The difference is that substring doesn't accept negative indexes
//var str = "Apple, Banana, Kiwi";
//var res = str.substring(7, 13); // will return Banana
// single parameter thing is accepted in substring, it can take out the rest of the string as well

// substr() is similar to slice() as well
// The difference is that the secont parameter specifies the length of the extracted part
//var str = "Apple, Banana, Kiwi";
//var res = str.substr(7, 6); // returns Banana

// if you don't pass in the length it will return the rest
//var str = "Apple, Banana, Kiwi";
//var res = str.substr(7); //Banana, Kiwi

// if the first parameter is negative it will cout from the negative and do the operation from there
//var str = "Apple, Banana, Kiwi";
//var res = str.substr(-4); //returns Kiwi

//Replacing String Content
// The replace() method replaces a specified value with another value in a string
//str = "Please visit Microsoft!";
//var n = str.replace("Microsoft", "Clarusway"); // will return Please visit Clarusway

// this method does not change the string its called on, it returns a new string

// IT REPLACES THE FIRST MATCH
//str = "Please visit Microsoft and Microsoft!";
//var n = str.replace("Microsoft", "Clarusway"); // it will return Please visit Clarusway and Microsoft

//Since Javascript is case sensitive, passing in unexisting value will not work
//str = "Please visit Microsoft!";
//var n = str.replace("MICROSOFT", "W3Schools"); // will not work and stays same

//To replace case insensitive, use a regular expression with an /i flag (insensitive)
//str = "Please visit Microsoft!";
//var n = str.replace(/MICROSOFT/i, "Clarusway");
// regular expressions written without quotes

//TO REPLACE ALL MATHCES, use a regular expression with a /g flag(global match)
//str = "Please visit Microsoft and Microsoft!";
//var n = str.replace(/Microsoft/g, "Clarusway");


//Converting to Upper and Lower Case
// to convert a string to upper case with toUpperCase():
//var text1 = "Hello World!";       // String
//var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

//to convert a string to lower case with toLowerCase():
//var text1 = 'Hello World';
//var text2 = text1.toLowerCase(); //text 2 is text 1's lower case version

//Concat() function
// concat() joins two or more strings:

//var text1 = 'Emir'
//var text2 = 'kim'
//var text3 = text1.concat(" ", text2)

// you can use plus operator to add strings as well, these two lines do the same
// var text1 = 'Emir' + ' ' + 'kim'
// var text2 = "Emir".concat(" ", "kim")

//ALL STRING METHODS RETURN NEW STRING,THEY DON'T MODIFY ORIGINAL STRING 

//Trim()
//This method removes the whitespaces from both sides of a string
//var str = "       Hello World!        ";
//alert(str.trim());

//Adding string padding
//ES2017 added two new string methods, padStart() and padEnd() to support oadding at the beginning and at the end of a string

//let str = "5";
//str = str.padStart(4,0);
// result is 0005

//let str = "5";
//str = str.padEnd(4,0);
// result is 5000

//Extracting string characters
// there are 3 methods for extracting string characters:
// charAt(position)
// charCodeAt(position)
// property access with []

//charAt() Method
// char at method returns the character at a specified index position in a a string 
//var str = "HELLO WORLD";
//str.charAt(0);            // returns H

// charCodeAt
// Returns the unicode of the character at the index passed in
//var str = "HELLO WORLD";

//str.charCodeAt(0);         // returns 72


// or you can access the character by simply doing:
//var str = "HELLO WORLD";
//str[0];                   // returns H

//If you want to work with a string as an array, you can convert it to an array.

//A string can be converted to an array with the split() method

//var txt = "a,b,c,d,e";   // String
//txt.split(",");          // Split on commas
//txt.split(" ");          // Split on spaces
//txt.split("|");          // Split on pipe

// or you can split a string to it characters
//var txt = "Hello";       // String
//txt.split("");           // Split in characters


//match()	
//Searches a string for a match against a regular expression, and returns the matches
//var str = "The rain in SPAIN stays mainly in the plain";
//var res = str.match(/ain/g);


//endsWith()	
//Checks whether a string ends with specified string/characters
//var str = "Hello world, welcome to the universe.";
//var n = str.endsWith("universe.");    

// if you multiply a string with numbers inside with another string with numbers inside 
// it will treat them as numbers and do the operation
//var x = "100";
//var y = "10";
//var z = x * y; // z will be 1000 


//Number methods
// toString() Method

// returns a number as a string
//var x = 123;
//x.toString();            // returns 123 from variable x
//(123).toString();        // returns 123 from literal 123
//(100 + 23).toString();   // returns 123 from expression 100 + 23

//toExponential()
//toExponential() returns a string, with a number rounded and written using exponential notation
//var x = 9.656;
//x.toExponential(2);     // returns 9.66e+0
//x.toExponential(4);     // returns 9.6560e+0
//x.toExponential(6);     // returns 9.656000e+0

//toFixed()
//toFixed() returns a string, with the number written with a specified number of decimals
//var x = 9.656;
//x.toFixed(0);           // returns 10
//x.toFixed(2);           // returns 9.66
//x.toFixed(4);           // returns 9.6560
//x.toFixed(6);           // returns 9.656000

//tofixed(2) works perfect for the money

//toPrecision() Method
//toPrecision() returns a string, with a number written with a specified length
//var x = 9.656;
//x.toPrecision();        // returns 9.656
//x.toPrecision(2);       // returns 9.7
//x.toPrecision(4);       // returns 9.656
//x.toPrecision(6);       // returns 9.65600

//the difference between this and to fixed is, to fixed starts the count from the start


//Converting variables to Numbers

//there are 3 methods you can use:

//Number() //Returns a number, converted from its argument.
//parseInt() //		Parses its argument and returns an integer
//parseFloat()  //Parses its argument and returns a floating point number

//these are not number methods, they are global javascript methods

//Number()
//examples:
//Number(true);          // returns 1
//Number(false);         // returns 0
//Number("10");          // returns 10
//Number("  10");        // returns 10
//Number("10  ");        // returns 10
//Number(" 10  ");       // returns 10
//Number("10.33");       // returns 10.33
//Number("10,33");       // returns NaN
//Number("10 33");       // returns NaN
//Number("John");        // returns NaN

//Number() method used on dates?

//number() can also convert a date to a number
// it will return milliseconds since 1.1.1970

//parseInt()
//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
//parseInt("10");         // returns 10
//parseInt("10.33");      // returns 10
//parseInt("10 20 30");   // returns 10
//parseInt("10 years");   // returns 10
//parseInt("years 10");   // returns NaN


//parseFloat()
//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
//parseFloat("10");        // returns 10
//parseFloat("10.33");     // returns 10.33
//parseFloat("10 20 30");  // returns 10
//parseFloat("10 years");  // returns 10
//parseFloat("years 10");  // returns NaN


//More Number methods

//isfinite() checks whether a value is a finite number
//isInteger() checks whether a value is an integer
//isNaN() Checks whether a value is not a number

//Arrays
// changing an element of array

// var c = ['saab',2, 32,true]
// c[2] = 'Emir'
// // now c is basically this = ['saab,2,'Emir',true]

// we can pass in objects to our arrays

//Array methods and properties
//var x = cars.length // will return the number of elements inside array
// var y = cars.sort() // puts the array in order which is sorting 


// you cn simply use cars[cars.length -1 to reach the last element of an array]

//Looping array elements
//var fruits, text, fLen, i;
//fruits = ["Banana", "Orange", "Apple", "Mango"];
//fLen = fruits.length;

//text = "<ul>";
//for (i = 0; i < fLen; i++) {
//  text += "<li>" + fruits[i] + "</li>";
//}
//text += "</ul>";

// or you can use array.foreach(). this is a built in function that returns each value of array one by one

//var fruits, text;
//fruits = ["Banana", "Orange", "Apple", "Mango"];

//text = "<ul>";
//fruits.forEach(myFunction);
//text += "</ul>";

//function myFunction(value) {
//  text += "<li>" + value + "</li>";
//}


// you can use push method to add an element to array
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.push("Lemon");    // adds a new element (Lemon) to fruits

//or you can use lenght function to do that as well
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits[fruits.length] = "Lemon";    // adds a new element (Lemon) to fruitsvar fruits = ["Banana", "Orange", "Apple", "Mango"];

// arrays have numbered indexes, objects have named indexes

// you can convert arrays to strings as comma separated with toString() 


//join method also joins all array elements into a string but you can specify a character that will be going between the elements
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//document.getElementById("demo").innerHTML = fruits.join(" * ");


// pop() method removes the last element from the array
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var x = fruits.pop();      // the value of x is "Mango"

//push() method adds an element to the end of the array
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits

//push method returns the new array length
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var x = fruits.push("Kiwi");   //  the value of x is 5

//shift() method
//removes the first element of the array and shifts other elements one back
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.shift();            // Removes the first element "Banana" from fruits

//shift() method returns the last element that was shifted out
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var x = fruits.shift();   // the value of x is "Banana"

//unshift() method
//unshift method adds an elemet to the beginning of the string and pushes other elements one index up
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits

//unshift method returns new length of array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Returns 5'


//you can access elements by their indexes 


//splice() methods
// we can add multiple elements to our array with this method 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// so here 2 is mentioning htat where elements should be added
// 0 is mentioning how many elements should be deleted

//this is how it goes when you do with delete 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

//Original Array:
//Banana,Orange,Apple,Mango

//New Array:
//Banana,Orange,Lemon,Kiwi

//Removed Items:
//Apple,Mango

//merging arrays
// we use concat method to add strings to each other

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys

// it does not change existing array, it returns new array

// you can do it with multiple arrays too

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3

// we can slice arrays as well with slice method
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

// it returns a new array


//list of all methods
//concat()	Joins two or more arrays, and returns a copy of the joined arrays
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);


//copyWithin()	Copies array elements within the array, to and from specified positions
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
//array.copyWithin(target, start, end)
//returns banana,orange,banana,orange


//entries()	Returns a key/value pair Array Iteration Object
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();

for (x of f) {
  document.getElementById("demo").innerHTML += x;
}
//[0, "Banana"]
//[1, "Orange"]
//[2, "Apple"]
//[3, "Mango"]

//every()	Checks if every element in an array pass a test
//The every() method checks if all elements in an array pass a test (provided as a function).
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAdult);
}

//array.every(function(currentValue, index, arr), thisValue)
// true if all passed

//fill()	Fill the elements in an array with a static value
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");

//returns kiwi,kiwi,kiwi,kiwi

//filter()	Creates a new array with every element in an array that pass a test
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

document.getElementById("demo").innerHTML = ages.filter(checkAdult);


//array.filter(function(currentValue, index, arr), thisValue)


//find()	Returns the value of the first element in an array that pass a test
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAdult);
}

//returns 18
//array.find(function(currentValue, index, arr),thisValue)


//findIndex()	Returns the index of the first element in an array that pass a test
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.findIndex(checkAdult);
}
//returns 2


//forEach()	Calls a function for each array 
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}
//forEach() method calls a function once for each element in an array, in order.

//from()	Creates an array from an object
var myArr = Array.from("ABCDEFG");
//returns [A,B,C,D,E,F,G] to myarr varriable


//includes()	Check if an array contains the specified element
// it either returns true or false if value exists its a true, if not it is a false
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");
// it is case sensitive

//indexOf()	Search the array for an element and returns its position
// we mentioned this function before
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
// returns 2
// it will return -1 if it doesn't exist


//isArray()	Checks whether an object is an array
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("demo");
  x.innerHTML = Array.isArray(fruits);
}

// returns true if the the passed in variable is an array
// which is true in this example

//join()	Joins all elements of an array into a string
//converts the array to a string, you can pass in something to split them with something you wish
// if you don't it will use comma as default
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();

//returns Banana,Orange,Apple,Mango



//keys()	Returns a Array Iteration Object, containing the keys of the original array
// it will create an iteration object from the array passed in and iteration object will contain the keys of array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fk = fruits.keys();

for (x of fk) {
  document.getElementById("demo").innerHTML += x + "<br>";
}

// it will return
//0
//1
//2
//3

//lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// it will still return the actual index of the element, only thing is that it starts the search from the end
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");

//which will return 2 here
// if you pass in Orange it will return 1 because that is the index of the orange
// if not found it will return -1



//map()	Creates a new array with the result of calling a function for each array element
// it will create new array with the results of called function for each element in array
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
document.getElementById("demo").innerHTML = x;

// this function basically returns squareroot of every element in that array
// it will return x = [2,3,4,5]

//pop()	Removes the last element of an array, and returns that element
//Removes the last element of the array and returns the removed element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
// fruits array will be ['Banana', 'Orange', 'Apple']

// pop function will return the "Mango"

//push()	Adds new elements to the end of an array, and returns the new length
// it adds an element to end of the array and it returns the new length of the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");


//reduce()	Reduce the values of an array to a single value (going left-to-right)
// so in a better definition, this reduce function takes the first element from the left and does what mentioned in function
var numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total + num;
}

// this will return 250 because it takes the 175 and adds 50 to it and after that it adds 25 to the result
// basically does whatever defined in function over the first value from the left

//reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// so since reduce takes from the left, this takes the first element from the right side of the string and does the same thing reduce does
// at the end both reduce and reduceRight will return single value to the array
var numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduceRight(myFunc);

function myFunc(total, num) {
  return total - num;
}
// this will return -200 because 25 - 50 and then - 175

//reverse()	Reverses the order of the elements in an array
// flips the array backwards on index
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
// is basically ["Mango","Apple","Orange","Banana"]


//shift()	Removes the first element of an array, and returns that element
// shift will remove the first value of the array and return the element that removed
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

//slice()	Selects a part of an array, and returns the new array
// you can slice your array from specific index to specific index
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
// don't forget that it does not include given end index

//some()	Checks if any of the elements in an array pass a test
// so this function will iterate over your array and will put it in a test which will be the one you defined in a function
// and if any of your elements passes the test it will return true, if not itwill return false
//and it will not check the remaning value once it finds the true 
// it does not change the original array

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.some(checkAdult);
}


//sort()	Sorts the elements of an array
// sorts your array in order, same as sort in any other language
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

//array.sort(compareFunction)
//The sort() method sorts the items of an array.

//The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

//By default, the sort() method sorts the values as strings in alphabetical and ascending order.

//This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

//Because of this, the sort() method will produce an incorrect result when sorting numbers.

//You can fix this by providing a "compare function"

//splice()	Adds/Removes elements from an array
// we can add multiple elements to our array with this method 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// so here 2 is mentioning htat where elements should be added
// 0 is mentioning how many elements should be deleted

//this is how it goes when you do with delete 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

//Original Array:
//Banana,Orange,Apple,Mango

//New Array:
//Banana,Orange,Lemon,Kiwi

//Removed Items:
//Apple,Mango


//toString()	Converts an array to a string, and returns the result
// one of the ways of converting array to string 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.toString();


//unshift()	Adds new elements to the beginning of an array, and returns the new length
// adds new element to beginnng of the array and returns the new length of the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
//array.unshift(item1, item2, ..., itemX)


//valueOf()	Returns the primitive value of an array
// it will return your array lol it has no huge deal
// it is the default method of the array object
