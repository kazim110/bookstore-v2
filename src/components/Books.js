import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';
import AddBook from './AddBook';
import { addBook, getBooks } from '../redux/books/booksSlice';

const Books = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const booksList = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

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
        {booksList.map((book) => (
          <BookItem
            book={book}
            key={book.id}
          />
        ))}
      </div>
      <form action="submit">
        <h5>Add new Book:</h5>
        <input type="text" placeholder="Book Title..." onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <AddBook onClick={addBookHandler} />
      </form>
    </>
  );
};
export default Books;
