const y = Math.floor(Math.random() * 100 + 1);
console.log(y);

let guess = 1;

const newGuess = document.createElement("li");

const guessNumber = document.getElementsByClassName("ul")[0];
guessNumber.appendChild(newGuess);
let a = document.getElementsByClassName("ul")[1];

const button = document.getElementById("submit");
button.addEventListener("mouseover", () => (button.value = "Are you sure?"));
button.addEventListener("mouseout", () => (button.value = "Guess"));

const guessArea = document.getElementById("submit");
guessArea.addEventListener("click", function () {
  let x = document.getElementById("input");
  console.log(typeof x);
 
  if (x.value == y) {
    a.textContent = `congrats you found on your ${guess} try.`;
    setTimeout("location.reload(true);", 2000)
  } else if (x.value > y) {
    a.textContent ="Lower your number!";
    guess++;
    newGuess.textContent = `number of guess: ${guess - 1}`; 
    x.innerHTML = ""; 
  } else {
    a.textContent = "Upper your number!";
    guess++;
    newGuess.textContent = `number of guess: ${guess - 1}`;
    x.innerHTML = "";
  }
  

});
