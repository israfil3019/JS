var a = 3;
console.log(a);
var theQuickBrownFoxJumps = 0; //camelCase used in js
var b = "the-quick-brown-fox-jumps"; //kebab-case
var c = "the_quick_brown_fox_jumps"; //snake_case
var TheQuickBrownFoxJumps = 0; //Pascal Case

class ValidationError {
    SCREAMING_SNAKE_CASE// used in some important variables
}

const SPEED_LIMIT = 120; // const is not changeable

var d = 10;
{
    let dd = 5;
    console.log(dd);
}

console.log({a}); // curly brace is for see the variable in object format
// console.log(dd); // this will give an error "e is local variable"

func1();// we can use "function" before definition
        //we can also use "var" before def. but we cant "let"
function func1(){
    if(true){
        var e = 55;
        var e = 56; // you van use "var" for changing value
        let ee = 4;
        ee = 5; // you cant use "let" again while changing value
        console.log(e);
        console.log(ee);
    }
    console.log(e);
    //console.log(ee); // it will give an error
}

const ff = 7;
//ff = 8; //we cant reassign a const value
console.log(ff);

var g = 3;
console.log(typeof g);
g = "3";
console.log(typeof g)

var myName = 'israfil';
console.log('merhaba ${Myname}');

console.log(0.1 + 0.2)
console.log(Math.floor(0.1 + 0.2));

var x = 8 < 4;
console.log(x); // boolean

var y = null;
console.log(typeof y);// object

