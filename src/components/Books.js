import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';
import { addBook } from '../redux/books/booksSlice';
/* eslint-disable react/jsx-props-no-spreading */
const Books = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const addBookHandler = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };
  return (
    <>
      <div className="booksList">
        <h5>Book&apos;s List:</h5>
        {books.map((element) => (
          <BookItem key={element.item_id} {...element} />
        ))}
      </div>
      <form action="submit">
        <h5>Add new Book:</h5>
        <input type="text" placeholder="Book Title..." onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <button
          type="button"
          className="addBtn"
          onClick={addBookHandler}
        >
          Add Book
        </button>
      </form>
    </>
  );
};
export default Books;
