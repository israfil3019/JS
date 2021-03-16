'use strict';
/**
 *
 *
 * @param {number} num1
 * @param {number} [num2=2]
 * @return {number}
 */
/* function sum(num1, num2 = 2) {
  return num1 + num2;
}

console.log(sum(5, 5));
console.log(sum(5));
 */
Object.defineProperty(globalThis, 'variable1', {
  value: 10,
  configurable: true,
});
Object.defineProperty(globalThis, 'variable2', {
  value: 20,
  configurable: true,
});

console.log(variable1);
// SyntaxError in strict mode.
// console.log(delete variable1); // true
console.log(delete globalThis.variable1);
//console.log(variable1);

// SyntaxError in strict mode.
// console.log(delete variable2); // false
console.log(variable2);
console.log(delete globalThis['variable2']);
console.log(variable2);
