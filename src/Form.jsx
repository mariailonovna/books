import React, { useState } from 'react';

const Form = ({ saveBook }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  return (
    <form className="border p-3"
    onSubmit={e => {
      e.preventDefault();
      saveBook(author, title);
      setAuthor('');
      setTitle('');
    }}>
      <h3>Добавить новую книгу</h3>
      <div className="form-group">
        <label htmlFor="BookAuthor">Автор книги</label>
        <input className="form-control" type="text" id="BookAuthor" value={author} onChange={e => { setAuthor(e.target.value) }} />
      </div>
      <div className="form-group">
        <label htmlFor="BookTitle">Название книги</label>
        <input className="form-control" type="text" id="BookTitle" value={title} onChange={e => { setTitle(e.target.value) }} />
      </div>
      <button className="btn btn-primary" type="submit">Добавить</button>
    </form>
  )
}

export default Form;
