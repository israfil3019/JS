
function fibonacci(myNumber){
  let arr = [0, 1]
  for(let i=2; i<=myNumber+1; i++){
    arr.push(arr[i-1]+ arr[i-2])

  }
  return arr[arr.length - 1]
}

let myNumber = parseInt(prompt("Type a number: "))
let fibonacciNumber= fibonacci(myNumber)
console.log(fibonacciNumber)
