/* Create collection of books */
const books = [
    {
        tittle: 'Book 1',
        author: 'Author 1',
    },
    {
        tittle: 'Book 2',
        author: 'Author 2',
    },
    {
        tittle: 'Book 3',
        author: 'Author 3',
    }
];

/* Display the collection of books on the top of the page*/
const listbooks= document.querySelector('#list-book');
const tableContainer= document.createElement('table');
tableContainer.classList.add('list-book-container');
books.forEach((book) => {
const trContainer= document.createElement('tr');
trContainer.innerHTML = `
<td>${book.tittle}</td>
<td>${book.author}</td>
<td><button class="btn-remove" type="button">Remove</button></td>
`;
tableContainer.appendChild(trContainer);
listbooks.appendChild(tableContainer);
});

