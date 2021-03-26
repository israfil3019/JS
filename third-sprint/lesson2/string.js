//STRING METHODS AND PROPERTIES
// as we talked before we have a built in length method that returns a number to variable
// var a = 'avsa'; 
// var b = a.length; // b is 4 
//indexOf() method
//we use this method to find string in a string, if passed inside the paranthesis exist inside the string it will return the first occurrence of it
// if it doesn't exist it will return -1
// var k = "Please locate where 'locate' occurs!";
// var pos = str.indexOf ("locate") // it will return a numeric value don't forget that
//lastIndexOf() method
//this method is pretty simillar to indexof method but it returns the last occurens of a specified text in the string
// var k = "Please locate where 'locate' occurs!";
// var pos = str.lastIndexOf ("locate") // it will return a numeric value don't forget that
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