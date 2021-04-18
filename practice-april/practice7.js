
//javascript Dates

//by default javascript will use browser's time zone and display a date as a full text string 
//Creating date objects
// there are 4 ways of creating date object

new Date()
new Date(year,month,day,hour,minutes,seconds,milliseconds)
new Date(milliseconds)
new Date(date, string)

//new Date()
// this thing creates an object with the current date and time
var d = new Date();

//Date objects are static the computer time is ticking but date objects are not


//new Date(year,month,day,hour,minutes,seconds,milliseconds)
//this object creates a new date object with SPECIFIED DATE AND TIME 
//7 numbers specify year,month,day,hour,minutes,seconds,milliseconds (in this order)

var d = new Date(2021,3,27,1,9,33,0);

// JAVASCRIPT COUNTS MONTHS FROM 0 TO 11, SO JANUARY IS 0 DECEMBER IS 11

//YOU CAN EDIT IT BY REDUCING THE SPECIFICATION FROM RIGHT

//Previous centtury
//One and two digit years will be interpreted as 19xx
var d = new Date(99,11,24); //1999 december friday

var d = new Date(9,11,24); // 1909 december friday


//new Date(date string)
//you can write your date in date format as well 

var d = new Date("March 27, 2021 01:14:00");


//you can write the dates as milliseconds as well like 100 billion milliseconds is approximetly october 31 1966


// some date methods

//toUTCString()
var d = new Date()
d.toUTCString(); // will display it like this => Sat, 27 Mar 2021 05:17:47 GMT

//toDateString()
var d = new Date();
d.toDateString(); // will display it like this => Sat Mar 27 2021

//toISOString()
var d = new Date();
d.toISOString(); //will display it like this => 2021-03-27T05:19:49.696Z

// you can parse your dates with Date.parse()
// it will return you the milliseconds of it 

var msec = Date.parse("March 21, 2012");


//getTime()

// it will return you number of milliseconds since january 1,1970

var d = new Date();
d.getTime(); // returned 1616822579290


//getFullYear()
// returns you the year of date as four digits of number
var d = new Date();
d.getFullYear(); // returns 2021

//getMonth()
// returns the month as number 0 - 11 
var d = new Date();
d.getMonth(); // will return 2

//weird thing is you can use array of names to return the month name by simply indexing
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
months[d.getMonth()]; // will retunr march because of index 2

//getDate()
// returns the day of date as a number
var d = new Date();
d.getDate(); 

//getHours()
// will return the hours of a date as number 0-23
var d = new Date();
d.getHours()

//getMinutes
// returns minutes
var d = new Date();
d.getMinutes();

//getSeconds
//will return seconds
var d = new Date()
d.getSeconds();

//getMilliseconds
//will return milliseconds 0-999
var d = new Date();
d.getMilliseconds();

//getDay
//returns the day 0-6
var d = new Date()
d.getDay();

//getUTCDate()	Same as getDate(), but returns the UTC date

//getUTCDay()	Same as getDay(), but returns the UTC day

//getUTCFullYear()	Same as getFullYear(), but returns the UTC year

//getUTCHours()	Same as getHours(), but returns the UTC hour

//getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds

//getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes

//getUTCMonth()	Same as getMonth(), but returns the UTC month

//getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds


//Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

//setDate()	Set the day as a number (1-31)

//setFullYear()	Set the year (optionally month and day)

//setHours()	Set the hour (0-23)

//setMilliseconds()	Set the milliseconds (0-999)

//setMinutes()	Set the minutes (0-59)

//setMonth()	Set the month (0-11)

//setSeconds()	Set the seconds (0-59)

//setTime()	Set the time (milliseconds since January 1, 1970)





//Math Object 

//Unlike other objects, the Math object has no constructor.

//The Math object is static.

//All methods and properties can be used without creating a Math object first.

//The syntax for any Math property is : Math.property.


Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E


// they can not be changed, they are for you to use whenever you need them, they are not editable, they are static

//Math methods

//Math.round()
// this method rounds the number to nearest integer
Math.round(4.9);    // returns 5
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
Math.round(4.2);    // returns 4
Math.round(-4.2);    // returns -4


//Math.ceil()
// this method returns the rounded up integer of given value
Math.ceil(4.9);     // returns 5
Math.ceil(4.7);     // returns 5
Math.ceil(4.4);     // returns 5
Math.ceil(4.2);     // returns 5
Math.ceil(-4.2);     // returns -4
Math.ceil(-3.9);     //returns -3


//Math.floor()

// this method returns the rounded down integer of given value

Math.floor(4.9);    // returns 4
Math.floor(4.7);    // returns 4
Math.floor(4.4);    // returns 4
Math.floor(4.2);    // returns 4
Math.floor(-4.2);    // returns -5


//Math.trunc()

// takes the integer part of the given value 

Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns -4


//Math.sign()

// takes an integer and returns -1 or 0 or 1 depends on if number positive or null or negative
// if the number is negative it will return -1
// if the number is 0 or null it will return 0
// if the number is positive it will return 1

Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1



//Math.pow()

//Math.pow(x, y) will take the y power of x

Math.pow(8, 2);      // returns 64


//Math.sqrt()

//Math.sqrt(x) will return the square root of x

Math.sqrt(64);      // returns 8


//Math.abs()
//Math.abs(x) returns the positive value of x

Math.abs(-4.7);     // returns 4.7


//Math.sin()
//Math.sin(x) is to calculate the sinus of the angle x(given in radians)
//If you want to use degrees instead of radians, you have to convert degrees to radians:

//Angle in radians = Angle in degrees x PI / 180.

Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)

// Math.cos()
//Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

//If you want to use degrees instead of radians, you have to convert degrees to radians:

//Angle in radians = Angle in degrees x PI / 180.

Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)



//Math.min() and Math.max()

//Math.min and Math.max is used to find the lowest and highest elements in a list of arguments

Math.min(0, 150, 30, 20, -8, -200);  // returns -200

Math.max(0, 150, 30, 20, -8, -200);  // returns 150


//Math.random()
//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

Math.random();     // returns a random number


//Math,log()
//Math.log(x) returns the natural logarithm of x:
Math.log(1);    // returns 0

//The natural logarithm returns the time needed to reach a certain level of growth.

//Math.E and Math.log() are twins.

//How many times must we multiply Math.E to get 10?

Math.log(10);    // returns 2.302585092994046

//Math.log2()
//Math.log 2 returns the base 2 logarithm of x
// How many times must we apply 2 to get 8

Math.log2(8);    // returns 3


//Math.log10() Method
//Math.log10(x) returns the base 10 logarithm of x.

//How many times must we multiply 10 to get 1000?

Math.log10(1000);    // returns 3





//Complete list of math methods


//abs(x)	Returns the absolute value of x


//acos(x)	Returns the arccosine of x, in radians


//acosh(x)	Returns the hyperbolic arccosine of x


//asin(x)	Returns the arcsine of x, in radians


//asinh(x)	Returns the hyperbolic arcsine of x


//atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians


//atan2(y, x)	Returns the arctangent of the quotient of its arguments


//atanh(x)	Returns the hyperbolic arctangent of x


//cbrt(x)	Returns the cubic root of x


//ceil(x)	Returns x, rounded upwards to the nearest integer


//clz32(x)	Returns the number of leading zeros in a 32-bit binary representation of x


//cos(x)	Returns the cosine of x (x is in radians)


//cosh(x)	Returns the hyperbolic cosine of x


//exp(x)	Returns the value of Ex


//expm1(x)	Returns the value of Ex minus 1


//floor(x)	Returns x, rounded downwards to the nearest integer


//fround(x)	Returns the nearest (32-bit single precision) float representation of a number


//log(x)	Returns the natural logarithmof x


//log10(x)	Returns the base-10 logarithm of x


//log1p(x)	Returns the natural logarithm of 1 + x


//log2(x)	Returns the base-2 logarithm of x


//max(x, y, z, ..., n)	Returns the number with the highest value


//min(x, y, z, ..., n)	Returns the number with the lowest value


//pow(x, y)	Returns the value of x to the power of y


//random()	Returns a random number between 0 and 1


//round(x)	Rounds x to the nearest integer


//sign(x)	Returns the sign of a number (checks whether it is positive, negative or zero)


//sin(x)	Returns the sine of x (x is in radians)


//sinh(x)	Returns the hyperbolic sine of x


//sqrt(x)	Returns the square root of x


//tan(x)	Returns the tangent of an angle


//tanh(x)	Returns the hyperbolic tangent of a number


//trunc(x)	Returns the integer part of a number (x)

//Javascript Randoms


//Math.random()
// as i mentioned in math sectio, it returns a random number between 0 to 1
// it always return a number lower than 1

Math.random();              // returns a random number

// so how can we get bigger random integers??????

// if you use Math.floor and Math.random inside it, it is possible
Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9

Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10

Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99

Math.floor(Math.random() * 101);     // returns a random integer from 0 to 100

Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100


// A propper funtion for random 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
getRndInteger(0,10) // will return 0 to 9


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

getRndInteger(1,10) // so if you convert it to mat its like this
// (x * (10-1 +1))+1 => (x * 10) + 1, so it will return at least 1 and at most 10


//Javascript booleans with bit of details


//Boolean Values

//Very often, in programming, you will need a data type that can only have one of two values, like

//YES / NO
//ON / OFF
//TRUE / FALSE

//For this, JavaScript has a Boolean data type. It can only take the values true or false.

//Boolean() function


//You can use the Boolean() function to find out if an expression (or a variable) is true:
Boolean(10 > 9)        // returns true

//Or even easier
(10 > 9)              // also returns true
10 > 9                // also returns true

//Comparisons
//==	equal to	//if (day == "Monday")
//>	greater than	//if (salary > 9000)
//<	less than	if //(age < 18)


//EVERYTHING WITH A VALUE IS TRUE
//100

//3.14

//-15

//"Hello"

//"false"

//7 + 1 + 3.14


//EVERYTHING WITHOUT VALUE IS FALSE

//The Boolean value of 0 (zero) is false:

var x = 0;
Boolean(x);       // returns false


//The Boolean value of -0 (minus zero) is false:

var x = -0;
Boolean(x);       // returns false

//The Boolean value of "" (empty string) is false:

var x = "";
Boolean(x);       // returns false

//The Boolean value of undefined is false:

var x;
Boolean(x);       // returns false

//The Boolean value of null is false:

var x = null;
Boolean(x);       // returns false

//The Boolean value of NaN is false:

var x = 10 / "H";
Boolean(x);       // returns false



//You can define your boolean as object with new keyword but i don't recommend

var x = false;
var y = new Boolean(false);

// typeof x returns boolean
// typeof y returns object


//When using the == operator, equal booleans are equal:

var x = false;             
var y = new Boolean(false);

// (x == y) is true because x and y have equal values

//When using the === operator, equal booleans are not equal, 
//because the === operator expects equality in both type and value.


var x = false;             
var y = new Boolean(false);

// (x === y) is false because x and y have different types


//Or even worse. Objects cannot be compared:

var x = new Boolean(false);             
var y = new Boolean(false);

// (x == y) is false because objects cannot be compared


//Note the difference between (x==y) and (x===y).
//Comparing two JavaScript objects will always return false.

//Javascript Comparison and Logical Operators

//Comparison and Logical operators are used to test for true or false.

//Comparison operators are used in logical statements to determine equality or difference between variables or values.

//Given that x = 5, the table below explains the comparison operators:

var x = 5

//==	equal to	x == 8	false	

//x == 5	true	

//x == "5"	true	

//===	equal value and equal type	x === 5	true	

//x === "5"	false	

//!=	not equal	x != 8	true	

//!==	not equal value or not equal type	x !== 5	false	

//x !== "5"	true	

//x !== 8	true	

//>	greater than	x > 8	false	

//<	less than	x < 8	true	

//>=	greater than or equal to	x >= 8	false

//<=	less than or equal to	x <= 8	true


//How Can it be Used
//Comparison operators can be used in conditional statements to compare values and take action depending on the result:

if (age < 18) text = "Too young to buy alcohol";


//Logical operators are used to determine the logic between variables or values.

//Given that x = 6 and y = 3, the table below explains the logical operators:

//&&	and	(x < 10 && y > 1) is true	
//||	or	(x == 5 || y == 5) is false	
//!	not	!(x == y) is true


//Conditional (Ternary) Operator


//JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.


//variablename = (condition) ? value1:value2 

var voteable = (age < 18) ? "Too young":"Old enough";



//Comparing Different Types


//Comparing data of different types may give unexpected results.

//When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.


2 < 12	//true	
2 < "12"	//true	
2 < "John"	//false	
2 > "John"	//false	
2 == "John"	//false	
"2" < "12"	//false	
"2" > "12"	//true	
"2" == "12"	//false

//When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.

//To secure a proper result, variables should be converted to the proper type before comparison:

age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
