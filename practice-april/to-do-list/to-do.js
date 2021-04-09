const myList = document.getElementById("myList");
const todoInput = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const delTodos = document.getElementsByClassName("todos")[0];
const btnCheck = document.getElementsByClassName("deleteBtn")[0];
const clearBtn = document.getElementById("clear");

events();

function events() {
  submitBtn.addEventListener("click", addTodo);
  delTodos.addEventListener("click", deleteTodo);
  clearBtn.addEventListener("click", clearAllTodos);
  todoInput.addEventListener("keydown", enterBtn);
}

submitBtn.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addToDoList();
  }
});

function addTodo(e) {
  const newTodo = todoInput.value;

  if (newTodo === "") {
    alert("Bir Todo Girin!");
  } else {
    addTodoToUl(newTodo);
  }
  e.preventDefault();
}

function addTodoToUl(newTodo) {
  const listItem = document.createElement("li");
  listItem.className = "myList__Item";

  const btn1 = document.createElement("button");
  btn1.className = "checkBtn";
  btn1.innerHTML = '<i class="fa fa-square-o" aria-hidden="true"></i>';

  const btn2 = document.createElement("button");
  btn2.className = "deleteBtn";
  btn2.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

  listItem.appendChild(btn1);
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(btn2);

  myList.appendChild(listItem);
  todoInput.value = "";
}

function deleteTodo(e) {
  if (e.target.className == "fa fa-times") {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.className == "fa fa-square-o") {
    e.target.className = "fa fa-check-square-o";
    e.target.parentElement.parentElement.className = "myList__Item-second"
  } else if (e.target.className == "fa fa-check-square-o") {
    e.target.className = "fa fa-square-o";
    e.target.parentElement.parentElement.className = "myList__Item"
  }
}

function clearAllTodos(e){
  myList.innerHTML = "";
}
function enterBtn(e){
  if(e.keyCode == 13){
   addTodo(e);
  }
};