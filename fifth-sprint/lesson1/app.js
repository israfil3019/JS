const score0Elm = document.querySelector('#score--0');
const score1Elm = document.querySelector('#score--1');
score0Elm.textContent = 0;
score1Elm.textContent = 0;

const diceElm = document.querySelector('.dice');
diceElm.classList.add('hidden');

const btnRoll = document.querySelector('.btn--roll');
btnRoll.addEventListener('click', clickRollDice);

let activePlayer = 0;
let currentScore = 0;
const currentScoreElm0 = document.getElementById('current--0');

// const currentScoreElms = [];
// for (let i = 0; i < 2; i++) {
//   currentScoreElms.push(document.getElementById(`current--${i}`));
// }
const currentScoreElms = document.querySelectorAll('.current-score');

const sectionPlayers = document.querySelectorAll('.player');

function clickRollDice() {
  diceElm.classList.remove('hidden');
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  // console.log(diceNumber);
  diceElm.src = `img/dice-${diceNumber}.png`;
  if (diceNumber === 1) {
    currentScore = 0;
    currentScoreElms[activePlayer].textContent = 0;
    activePlayer = 1 - activePlayer;
    sectionPlayers[0].classList.toggle('player--active');
    sectionPlayers[1].classList.toggle('player--active');
  } else {
    currentScore += diceNumber;
    // currentScoreElm0.textContent = currentScore;
    currentScoreElms[activePlayer].textContent = currentScore;
  }
}

const btnHold = document.querySelector('.btn--hold');
const playerScoresElms = document.querySelectorAll('.score');
const scores = [0, 0];

btnHold.addEventListener('click', clickHold);

function clickHold() {
  scores[activePlayer] += currentScore;
  playerScoresElms[activePlayer].textContent = scores[activePlayer];

  if (scores[activePlayer] >= 50) {
    sectionPlayers[activePlayer].classList.add('player--winner');
    btnHold.removeEventListener('click', clickHold);
    btnRoll.removeEventListener('click', clickRollDice);
  } else {
    currentScore = 0;
    currentScoreElms[activePlayer].textContent = 0;
    activePlayer = 1 - activePlayer;
    sectionPlayers[0].classList.toggle('player--active');
    sectionPlayers[1].classList.toggle('player--active');
  }
}

