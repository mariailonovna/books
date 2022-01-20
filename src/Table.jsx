import React, { useState } from 'react';

const Table = ({ bookList, deleteBook, saveBook }) => {

  const [edit, setEdit] = useState(null);

  const [newAuthor, setNewAuthor] = useState('');
  const [newTitle, setNewTitle] = useState('');

  function editBook(id, author, title) {
    setEdit(id);
    setNewAuthor(author);
    setNewTitle(title);
  }

  return (<table className="table mb-5 table-striped">
      <thead>
        <tr>
          {/* <th>
            Обложка книги
          </th> */}
          <th>
            Автор книги
          </th>
          <th>
            Название книги
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {bookList.map((item, id) => (
          <tr key={id.toString()}>
            {/* <td></td> */}
            <td> {
              edit === id ? <input className="form-control" type="text" value={newAuthor} onChange={e => {setNewAuthor(e.target.value)}} /> : <span>{item.author}</span>
            }
            </td>
            <td> {
              edit === id ? <input className="form-control" type="text" value={newTitle} onChange={e => { setNewTitle(e.target.value) }} /> : <span>{item.title}</span>
            }
            </td>
            <td>
              <button className="btn btn-danger" onClick={() => {deleteBook(id)}}>Удалить</button>
            </td>
            <td>
              {
                edit === id ? <button className="btn btn-success" onClick={() => {
                  saveBook(id, newAuthor, newTitle)
                  setEdit(null)
                }}>Сохранить</button> :
                <button className="btn btn-warning" onClick={() => {
                  editBook(id, item.author, item.title)
                }}>Редактировать</button>
              }

            </td>
          </tr>
        ))}
    </tbody>
  </table>)
}

export default Table
