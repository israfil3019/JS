//javascript Dates
​
//by default javascript will use browser's time zone and display a date as a full text string 
//Creating date objects
// there are 4 ways of creating date object
​
new Date()
new Date(year,month,day,hour,minutes,seconds,milliseconds)
new Date(milliseconds)
new Date(date, string)
​
//new Date()
// this thing creates an object with the current date and time
var d = new Date();
​
//Date objects are static the computer time is ticking but date objects are not
​
​
//new Date(year,month,day,hour,minutes,seconds,milliseconds)
//this object creates a new date object with SPECIFIED DATE AND TIME 
//7 numbers specify year,month,day,hour,minutes,seconds,milliseconds (in this order)
​
var d = new Date(2021,3,27,1,9,33,0);
​
// JAVASCRIPT COUNTS MONTHS FROM 0 TO 11, SO JANUARY IS 0 DECEMBER IS 11
​
//YOU CAN EDIT IT BY REDUCING THE SPECIFICATION FROM RIGHT
​
//Previous centtury
//One and two digit years will be interpreted as 19xx
var d = new Date(99,11,24); //1999 december friday
​
var d = new Date(9,11,24); // 1909 december friday
​
​
//new Date(date string)
//you can write your date in date format as well 
​
var d = new Date("March 27, 2021 01:14:00");
​
​
//you can write the dates as milliseconds as well like 100 billion milliseconds is approximetly october 31 1966
​
​
// some date methods
​
//toUTCString()
var d = new Date()
d.toUTCString(); // will display it like this => Sat, 27 Mar 2021 05:17:47 GMT
​
//toDateString()
var d = new Date();
d.toDateString(); // will display it like this => Sat Mar 27 2021
​
//toISOString()
var d = new Date();
d.toISOString(); //will display it like this => 2021-03-27T05:19:49.696Z
​
// you can parse your dates with Date.parse()
// it will return you the milliseconds of it 
​
var msec = Date.parse("March 21, 2012");
​
​
//getTime()
​
// it will return you number of milliseconds since january 1,1970
​
var d = new Date();
d.getTime(); // returned 1616822579290
​
​
//getFullYear()
// returns you the year of date as four digits of number
var d = new Date();
d.getFullYear(); // returns 2021
​
//getMonth()
// returns the month as number 0 - 11 
var d = new Date();
d.getMonth(); // will return 2
​
//weird thing is you can use array of names to return the month name by simply indexing
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
months[d.getMonth()]; // will retunr march because of index 2
​
//getDate()
// returns the day of date as a number
var d = new Date();
d.getDate(); 
​
//getHours()
// will return the hours of a date as number 0-23
var d = new Date();
d.getHours()
​
//getMinutes
// returns minutes
var d = new Date();
d.getMinutes();
​
//getSeconds
//will return seconds
var d = new Date()
d.getSeconds();
​
//getMilliseconds
//will return milliseconds 0-999
var d = new Date();
d.getMilliseconds();
​
//getDay
//returns the day 0-6
var d = new Date()
d.getDay();
​
//getUTCDate()	Same as getDate(), but returns the UTC date
​
//getUTCDay()	Same as getDay(), but returns the UTC day
​
//getUTCFullYear()	Same as getFullYear(), but returns the UTC year
​
//getUTCHours()	Same as getHours(), but returns the UTC hour
​
//getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
​
//getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes
​
//getUTCMonth()	Same as getMonth(), but returns the UTC month
​
//getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds
​
​
//Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.
​
//setDate()	Set the day as a number (1-31)
​
//setFullYear()	Set the year (optionally month and day)
​
//setHours()	Set the hour (0-23)
​
//setMilliseconds()	Set the milliseconds (0-999)
​
//setMinutes()	Set the minutes (0-59)
​
//setMonth()	Set the month (0-11)
​
//setSeconds()	Set the seconds (0-59)
​
//setTime()	Set the time (milliseconds since January 1, 1970)
​
//Math Object 