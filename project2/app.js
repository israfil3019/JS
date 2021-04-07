const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ // tüm event listenerlar buraya
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOmContentLoaded", loadAllTodosToUI)
    secondCardBody.addEventListener("click", deleteTodo);
    clearButton.addEventListener("click", clearAllTodos);
}
function clearAllTodos(e){
    todoList.innerHTML = "";
}
function deleteTodo(e){
    if(e.target.className === "fa fa-remove"){

        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    }
}
function deleteTodoFromStorage(todo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        if (todo === deleteTodo){
            todos.splice(index,1); // arrayden değeri sildik

        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));

}

function loadAllTodosToUI(){
    let todos = getTodosFromStorage();
    todos.forEach(element => {
        addTodoToUI(todo);
        
    });
}
function addTodo(e){
    const newTodo = todoInput.value;

    if(newTodo === ""){
        alert("bir todo girin");
    }else{
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    }
    e.preventDefault();
}
function getTodosFromStorage(){ //storage dan todoları alma
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newTodo){
   let todos = getTodosFromStorage();
   todos.push(newTodo);
   localStorage.setItem("todos", JSON.stringify(todos));
}
function addTodoToUI(newTodo){ //li yapısını kuracaz sonra ekleyecez
    //list item oluşturduk
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";
    //link oluşturduk
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    // text node ekleme

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // todo liste listitem ekleme

    todoList.appendChild(listItem);

    todoInput.value = "";
}

