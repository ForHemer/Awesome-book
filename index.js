class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

/* Add Book */
const addBook = () => {
  let books;
  const bookTitle = document.querySelector('#title').value;
  const booKAuthor = document.querySelector('#author').value;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  const bookObj = {
    title: bookTitle,
    author: booKAuthor,
  };
  books.push(bookObj);

  localStorage.setItem('books', JSON.stringify(books));
};

/* Display Book */
const displayBook = () => {
  const newBook = document.querySelector('.table-item');

  while (newBook.hasChildNodes()) {
    newBook.removeChild(newBook.lastChild);
  }

  const books = JSON.parse(localStorage.getItem('books'));

  books.forEach((book, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
              <td>"${book.title}"</td>
              <td> by ${book.author}</td>
              <td><button type="button" class="btn-remove" id=${index}>Remove</button></td>  
          `;
    newBook.appendChild(newRow);
  });
};

/* Submit */
document.querySelector('.btn-submit').addEventListener('click', (e) => {
  e.preventDefault();
  addBook();
  displayBook();
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
});

/* Remove Book */
const deleteBook = (elem) => {
  const books = JSON.parse(localStorage.getItem('books'));
  if (books.length === 1) {
    books.pop();
  } else {
    books.splice(parseInt(elem.id, 2), 1);
  }

  localStorage.setItem('books', JSON.stringify(books));
};

const removeBook = (elem) => {
  elem.parentNode.parentNode.parentNode.removeChild(elem.parentNode.parentNode);
};

document.querySelector('.table-item').addEventListener('click', (e) => {
  e.preventDefault();
  removeBook(e.target);
  deleteBook(e.target);
});
