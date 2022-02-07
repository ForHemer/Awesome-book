/* Create a collection of books */
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
    },
    {
        tittle: 'Book 4',
        author: 'Author 4',
    },
    {
        tittle: 'Book 5',
        author: 'Author 5',
    }
];

/* Display all books save in the collection */
const listbooks = document.querySelector('#list-books');
const container = document.createElement('table');
container.classList.add('table-item');
books.forEach((book) => {
    const container2 = document.createElement('tr');
    container2.innerHTML= `
        <td>"${book.tittle}"</td>
        <td> by ${book.author}</td>
        <td><button type="button" class="btn-remove">Remove</button></td>  
    `;
    container.appendChild(container2);
    listbooks.appendChild(container);
});