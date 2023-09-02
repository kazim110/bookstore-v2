import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import BookItem from './BookItem';
import AddBook from './AddBook';
import { addBook, getBooks } from '../redux/books/booksSlice';

const Books = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const booksList = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const addBookHandler = (title, author, category) => {
    if (title && author && category) {
      const newBook = {
        title,
        author,
        category,
      };
      dispatch(addBook(newBook))
        .then(() => dispatch(getBooks()));
      setAuthor('');
      setTitle('');
    }
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
        <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
        <AddBook title={title} author={author} category={category} onClick={addBookHandler} />
      </form>
    </>
  );
};
export default Books;
