const operator = prompt('işlem giriniz\n+, -, * , /');
const num1 = prompt('sayi1 giriniz');
const num2 = prompt('sayi2 giriniz');
let result;
switch (operator) {
  case '+':
    result = parseFloat(num1) + parseFloat(num2);
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    console.log('invalid op');
}
alert(`The result of ${num1} ${operator} ${num2} = ${result}`);
