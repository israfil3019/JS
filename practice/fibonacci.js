var a = 1;
var b = 0;
var d = 1;
var c = prompt("bir sayı giriniz: ");
function fibonacci(c){
    while (c >= 0){
        d = a;
        a += b;
        b = d;
        c--
    }
    return d;
}

alert(`The ${c}'th fibonacci number is ${fibonacci(c)}`);