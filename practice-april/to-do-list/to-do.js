const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function () {
  let x = document.getElementById("input").value;
  console.log(x)
  const newTodo = document.createElement('li');
  newTodo.innerHTML = `<b>${x}</b>`;
  const myList = document.getElementById('myList');
  myList.appendChild(newTodo);
//   myList.append(newTodo);
});
