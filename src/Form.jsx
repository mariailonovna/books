import React, { useState } from 'react';

const Form = ({ saveBook }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  // const [img, setImg] = useState('');

  // function readFile(input) {
  //   let file = input.files[0];
  //   let reader = new FileReader();

  //   reader.readAsDataURL(file);

  //   reader.onloadend = function() {
  //     let imgUrl = reader.result

  //     setImg(imgUrl)
  //     console.log(url);
  //   }
  // }

  return (
    <form className="border p-3"
    onSubmit={e => {
      e.preventDefault();
      saveBook(author, title);
      setAuthor('');
      setTitle('');
      // setImg('');
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
      {/* <div className="form-group">
        <label htmlFor="BookImg">Обложка книги (145x205px)</label>
        <input className="form-control-file border p-1 rounded" type="file" id="BookImg" value={img} onChange={e => {
          const imgUrl = readFile(e.target);
          readFile(e.target);
          setImg(imgUrl)
          }} />
      </div> */}
      <button className="btn btn-primary" type="submit">Добавить</button>
    </form>
  )
}

export default Form;
