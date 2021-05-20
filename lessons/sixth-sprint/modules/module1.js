// ---- module1.js ----
export default function greet(user) {
    return `Welcome ${user}`;
    
}

// export default userName = "Barry";
// myVar = 5;

function f1() {
    return 1    
}
function f2() {
    return 2    
}
function f3() {
    return 3    
}

let counter = 0;

function inc() {
    counter++;
    //return ++counter;
}

function dec() {
    counter--;
    //return --counter;
    
}

function getCounter() {
    return counter;
    
}

export { f1, f2, f3,dec, inc, getCounter }

console.log("module 1 is loaded");
