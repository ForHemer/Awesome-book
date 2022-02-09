/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

/* ==========Add and remove books========== */
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(elem) {
    const books = Store.getBooks();
    if (books.length === 1) {
      books.pop();
    } else {
      books.splice(parseInt(elem.id, 2), 1);
    }

    localStorage.setItem('books', JSON.stringify(books));
  }
}

/* ==========Display books========== */
class displayBook {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => displayBook.addBookToList(book));
  }

  static addBookToList(book) {
    const newBook = document.querySelector('.table-item');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
            <td>"${book.title}"</td>
            <td> by ${book.author}</td>
            <td><button type="button" class="btn-remove">Remove</button></td>  
        `;
    newBook.appendChild(newRow);
  }

  static deleteBook(el) {
    if (el.classList.contains('btn-remove')) {
      el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

/* ==========Event: Display Books========== */
document.addEventListener('DOMContentLoaded', displayBook.displayBooks);

/* ==========Event: Add a Book========== */
document.querySelector('#formid').addEventListener('submit', (e) => {
  /* ==========Prevent actual submit========== */
  e.preventDefault();
  /* ==========Get form values========== */
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  /* ==========Validate========== */
  if (title === '' || author === '') {
    alert('Please fill in all fields');
  } else {
    /* ==========Instantiate book========== */
    const book = new Book(title, author);

    /* ==========Add Book to displayBook========== */
    displayBook.addBookToList(book);

    /* ==========Add book to store========== */
    Store.addBook(book);

    /* ==========Clear fields========== */
    displayBook.clearFields();
  }
});

/* ==========Event: Remove a Book========== */
document.querySelector('.table-item').addEventListener('click', (e) => {
/* ==========Remove book from displayBook ========== */
  displayBook.deleteBook(e.target);

  /* ==========Remove book from store========== */
  Store.removeBook(e.target);
});
