import sayHi from "./module.js";
console.log(sayHi('Matthew'))

import { inc, getCounter } from "./module.js";

console.log(getCounter());
inc();
inc();
inc();
console.log(getCounter());
