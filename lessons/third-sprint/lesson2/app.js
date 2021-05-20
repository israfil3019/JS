console.log(typeof 'some text');
console.log(typeof String('some text'));
console.log(typeof new String('some text'));
console.log(typeof new String('some text').valueOf());

// question: if string is primitive type, how can "message".length returns a value?

// ! because it is coerced for a tiny moment. let's see

String.prototype.returnSelf = function () {
  return this;
};

var msg = 'new message';
var msg2 = msg.returnSelf();
var msg3 = msg;

console.log({ msg }, typeof msg);
console.log({ msg2 }, typeof msg2);
console.log({ msg3 }, typeof msg3);

/*
 * except null and undefined 5 other primitive types have object equivalents:
 * String, Number, BigInt, Boolean, Symbol
 */

// ! another example
Number.prototype.toString = function () {
  return typeof this;
};
console.log((42).toString());

// ? what about reverse case
// * can these objects also be coerced to primitives? let's see.

var fourtyTwo = new Number(42);
var fourtyFive = fourtyTwo + 3;
console.log(fourtyFive, typeof fourtyFive);
console.log(fourtyTwo, typeof fourtyTwo);
var c = new String('Clarus');
console.log(c + 'Way', typeof c, typeof c + 'Way', typeof (c + 'Way'));
console.log('-----');
if (new Boolean(false)) {
  console.log("it's value is true");
} else {
  console.log("it's value is false");
}
var a = '';
console.log(new Boolean(a).valueOf()); //false

var a = Boolean('');
console.log(a, typeof a); //false

var a = '';
console.log(typeof !!a); //false

/* var month = 'january';
var m2 = month.returnSelf();
m2.length = 3;
console.log(m2.length);
month.vowels = 3;
console.log(month.vowels);
var month = 'january';
console.log(month.length);
month.length = 3;
console.log(month.length); */
