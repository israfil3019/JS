function reverse(userInput){
  let reversed = ""
  let leftIndex = 0;
  let rightIndex = userInput.length -1;
  while (rightIndex >= leftIndex){
    reversed += userInput[rightIndex]
    rightIndex--
  }
return reversed
}

let userInput = prompt("Type a word: ")
let reversedUserInput = reverse(userInput)
console.log("Reversed String: ", reversedUserInput)
