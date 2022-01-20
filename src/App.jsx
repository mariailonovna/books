import React, { useState } from 'react';

import Form from './Form';
import Table from './Table';

let books = [];

let jsonList;

function saveLocalStorage() {
  jsonList = JSON.stringify(books);
  localStorage.setItem('BookList', jsonList)
}

if (localStorage.getItem('BookList')) {
  books = JSON.parse(localStorage.getItem('BookList'))
}

const App = () => {
  const [bookList, setBooks] = useState([]);

  return (
    <>
      <h1 className="mb-4">Список книг</h1>
      <Table
        bookList={books}
        deleteBook={bookId => {
          books.splice(bookId, 1);
          saveLocalStorage();
          const newBooks = bookList
            .filter((_, id) => id !== bookId);
            setBooks(newBooks);
        }}
        saveBook={(bookId, newAuthor, newTitle) => {
          books[bookId].author = newAuthor
          books[bookId].title = newTitle
          saveLocalStorage();
          const newBooks = bookList
            .filter((_, id) => id !== bookId);
            setBooks(newBooks);
        }}
      />
      <Form
        saveBook={(author, title) => {
          const newBook = { 'author': author, 'title': title };
          // console.log(img);
          setBooks([...bookList, newBook]);
          books.push(newBook)
          saveLocalStorage();
        }}
      />
    </>
  )
}

export default App;
