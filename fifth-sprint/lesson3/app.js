function foo1(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    // alert(array[i]);
    // console.log(array[i]);
  }
  return sum;
}

// console.log(foo1([2, 4, 6, 8]));

function foo2(array, callback) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    callback(array[i]);
    // alert(array[i]);
    // console.log(array[i]);
  }
  return sum;
}

foo2([2, 4, 6, 8], alert);
foo2([2, 4, 6, 8], (x) => console.log(x));

// forEach

const payments = [100, 300, -200, 500, -400, 225, 1000, -700];

// for ([i, item] of payments.entries()) {
//   item > 0
//     ? console.log(i, `You received ${item} USD`)
//     : console.log(i, `You paid ${Math.abs(item)} USD`);
// }

payments.forEach(function (item, i, arr) {
  item > 0
    ? console.log(i, `You received ${item} USD`)
    : console.log(i, `You paid ${Math.abs(item)} USD`);
  // console.log(arr);
});

