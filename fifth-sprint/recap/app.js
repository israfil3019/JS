class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class Ui {
  addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    // row.innerHTML = `<td>${book.title}<td><td>${book.author}<td><td>${book.isbn}<td>`;

    for (let item of Object.keys(book)) {
      const td = document.createElement("td");
      td.innerHTML = book[item];
      row.appendChild(td);
    }

    const td = document.createElement("td");
    td.innerHTML = `<a href="#" class="delete">X</a>`;
    row.appendChild(td);

    list.appendChild(row);
  }

}



document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  const book = new Book(title, author, isbn);

  const ui = new Ui();

  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Fields can not be empty!", "error");
  } else {
    ui.addBookToList(book);
  }
});
