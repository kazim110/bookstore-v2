import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/booksSlice';
import DeleteBook from './DeleteBook';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <>
      <div className="bookState" key={book.id}>
        <div>
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
          <h4>{book.category}</h4>
        </div>
        <DeleteBook id={book.id} onDelete={handleDelete} />
      </div>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
