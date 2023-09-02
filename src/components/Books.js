import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import '../styles/books.scss';
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
    }
  };

  return (
    <>
      <div id="books-ctr">
        <div id="booklist">
          {booksList.map((book) => (
            <BookItem
              book={book}
              key={book.id}
            />
          ))}
        </div>
        <div id="line-1" />
        <div id="form-ctr">
          <h2>Add New Book:</h2>
          <form action="submit">
            <input id="title" type="text" placeholder="Book Title..." onChange={(e) => setTitle(e.target.value)} />
            <input id="author" type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
            <input id="category" type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
            <AddBook title={title} author={author} category={category} onClick={addBookHandler} />
          </form>
        </div>
      </div>
    </>
  );
};
export default Books;
