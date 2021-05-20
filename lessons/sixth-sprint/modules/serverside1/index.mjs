import sayHi from "./module.mjs";
console.log(sayHi('Matthew'))

import { inc, getCounter } from "./module.mjs";

console.log(getCounter());
inc();
inc();
inc();
console.log(getCounter());
