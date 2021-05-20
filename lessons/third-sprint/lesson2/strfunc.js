// ! charAt()

// var str = new String('Just Awesome');
// console.log('str.charAt(0) is:' + str.charAt(0));
// console.log('str.charAt(1) is:' + str.charAt(1));
// console.log('str.charAt(2) is:' + str.charAt(2));
// console.log('str.charAt(3) is:' + str.charAt(3));
// console.log('str.charAt(4) is:' + str.charAt(4));
// console.log('str.charAt(5) is:' + str.charAt(5));

// ! charCodeAt()

// var str = new String('Just Awesome');
// console.log('str.charAt(0) is:' + str.charCodeAt(0));
// console.log('str.charAt(1) is:' + str.charCodeAt(1));
// console.log('str.charAt(2) is:' + str.charCodeAt(2));
// console.log('str.charAt(3) is:' + str.charCodeAt(3));
// console.log('str.charAt(4) is:' + str.charCodeAt(4));
// console.log('str.charAt(5) is:' + str.charCodeAt(5));

// ! concat()

// var str1 = new String( "The Full-Stack Path" ); // note that not primitive
// var str2 = new String( "is awesome" );
// var str3 = str1.concat( str2 );
// // outputs: str1 + str2 : The Full-Stack Pathis awesome
// console.log("str1 + str2 : "+str3);
// // str1 and str2 remains unchanged
// console.log(str1, str2);

// ! indexOf()

// var str1 = new String( "Full-Stack is awesome" );
// var index = str1.indexOf( "awesome" );
// console.log("indexOf found String :" + index );
// var index = str1.indexOf( "Stack" );
// console.log("indexOf found String :" + index );

// ! lastIndexOf()

// var str1 = new String(
//   'Clarusway is awesome and will always be awesome hopefully'
// );
// var index = str1.lastIndexOf('awesome');
// console.log('lastIndexOf found String :' + index);
// index = str1.lastIndexOf('way');
// console.log('lastIndexOf found String :' + index);

// ! localeCompare

// console.log('ı' > 'i'); // true
// -1 meaning that letter ı comes before i in Turkish
// console.log('ı'.localeCompare('i', 'tr'));

// ! replace

// var re = /front/gi;
// var str =
//   'Front-End is hard to learn, and front-end developers earn more than the average.';
// var newstr = str.replace(re, 'back');
// console.log(newstr);

// var re = /(\w+)\s(\w+)/;
// var str = 'Dunn Matthew';
// var newstr = str.replace(re, '$2, $1');
// output: Matthew, Dunn
// console.log(newstr);
// output: Dunn Matthew
// console.log(str);

// ! search()

// var re = /easily/gi;
// var str = 'Full-Stack is awesome,\
// and students will easily get a job.';
// if (str.search(re) == -1) {
//   console.log('Does not contain easily');
// } else {
//   console.log('Contains easily and the index is', str.search(re));
// }
// output: Contains easily and the index is 40

// ! slice()

// var str = 'Full-Stack: awesome future is coming!';
// var sliced = str.slice(12, -11);
// console.log(sliced);
// output: awesome future

// ! split()

// var str =
//   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit earum vero, qui repellendus nam laudantium.';
// var splitted = str.split(' ', 5);
// console.log(splitted);
// output: ["Lorem", "ipsum", "dolor,", "sit", "amet"]

// ! substr()

// var str = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
// console.log('(1,2): ' + str.substr(1, 2));
// console.log('(-2,2): ' + str.substr(-2, 2));
// console.log('(1): ' + str.substr(1));
// console.log('(-20, 2): ' + str.substr(-20, 2));
// console.log('(13, 3): ' + str.substr(13, 4));

// ! substring()

// var str = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
// console.log('(1,2): ' + str.substring(1, 2));
// console.log('(0,10): ' + str.substring(0, 10));
// console.log('(5): ' + str.substring(5));

// ! toLowerCase etc

// var pangram = 'PİJAMALI HASTA YAĞIZ ŞOFÖRE ÇABUCAK GÜVENDİ.';
// var strLower = pangram.toLocaleLowerCase();
// console.log(strLower);
// var strUpper = strLower.toLocaleUpperCase('tr');
// console.log(strUpper);
// console.log(pangram.toLowerCase());
// console.log(strLower.toUpperCase());

// ! toString valueOf

// const strObj = new String('Clarusway');
// console.log(strObj);
// output: String { "Clarusway" }
// console.log(strObj.toString());
// output: "Clarusway"
// console.log(strObj.valueOf());
// output: "Clarusway"

// ! trim

// var greeting = ' \t\t  Hello world!   \n\nWelcome\tHome\n\n';
// console.log(greeting);
// console.log('-----');
// console.log(greeting.trim());

// ! startsWith()

// var str = 'hello world!!!';
// console.log(str.startsWith('hello')); // true

// ! endsWith()

// var str = 'Hello World !!! ';
// console.log(str.endsWith('Hello')); // false
// console.log(str.endsWith('Hello', 5)); // true

// ! includes

// var str = 'Hello World';
// console.log(str.includes('hell')); // false
// console.log(str.includes('Hell')); // true
// console.log(str.includes('or'));   // true
// console.log(str.includes('or',8))  // false

// ! repeat

// var str = 'Clarusway ';
// console.log(str.repeat());   // no output
// console.log(str.repeat(1));  // 1 time
// console.log(str.repeat(20)); // 20 times

// ! reverse string

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// reverseString('Clarusway'); // "yawsuralC"
// reverseString('JavaScript-tpircSavaJ 🎯 sF'); // oops

// ! detect string

// var aString = 'my string';
// var anInt = 5;
// var anObj = {};
// typeof aString === 'string'; // true
// typeof anInt === 'string'; // false
// typeof anObj === 'string'; // false
// var strObj = new String('Trouble comes!');
// typeof strObj === 'string'; // false

// ! more robust way

// var isString = function (value) {
//   return typeof value === 'string' || value instanceof String;
// };
// var aString = 'Primitive String';
// var aStringObj = new String('String Object');
// isString(aString); // true
// isString(aStringObj); // true
// isString({}); // false
// isString(5); // false
