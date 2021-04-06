/* eslint-disable no-alert */
function helloFromJsFile() {
  alert('You clicked From Js File');
}

const button3 = document.getElementById('btn3');

button3.onclick = helloFromJsFile;
// button3.onclick = eventListener;

const button4 = document.querySelector('.button4');

// 1. function
button4.addEventListener('click', eventListener); //, { once: true });

function eventListener(event) {
  // alert('You clicked Event Listener');
  console.log('You clicked Event Listener');
  event.stopImmediatePropagation();
  // button4.removeEventListener('click', eventListener);
}

// 2. function
button4.addEventListener('click', function () {
  // alert('This is second function');
  console.log('This is second');
});

button4.addEventListener('mouseover', () => (button4.textContent = 'Over Me!'));

button4.addEventListener(
  'mouseout',
  () => (button4.textContent = 'Event Listener')
);

const div = document.querySelector('div');

div.addEventListener('dblclick', changeColor);

function changeColor() {
  const r = Math.trunc(Math.random() * 255);
  const g = Math.trunc(Math.random() * 255);
  const b = Math.trunc(Math.random() * 255);

  div.style.backgroundColor = `rgb(${r},${g},${b})`;
}

const input = document.getElementById('input');
input.addEventListener('keydown', (event) => {
  console.log(event.key);
  // console.log(event);

  if (event.key.length === 1) {
    event.preventDefault();
    event.target.value += event.key.toLocaleUpperCase();
  }
});

const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', function (event) {
  // alert('Form Submitted');
  event.preventDefault();
  const username = document.getElementsByName('username')[0].value;
  const comment = document.getElementsByName('comment')[0].value;
  console.log(username, comment);

  const newComment = document.createElement('li');
  newComment.innerHTML = `<b>${username}</b> - ${comment}`;

  const comments = document.getElementById('comments');
  comments.appendChild(newComment);
  // comments.append(`${username} - ${comment}`);
});


