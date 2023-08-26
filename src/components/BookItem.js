import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/booksSlice';

const BookItem = ({
  id, title, author,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bookState" key={id}>
        <div>
          <h3>{title}</h3>
          <h4>{author}</h4>
        </div>
        <button
          type="button"
          className="delete"
          onClick={() => {
            dispatch(deleteBook(id));
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
