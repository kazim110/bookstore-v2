import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/booksSlice';
import DeleteBook from './DeleteBook';

const BookItem = ({
  id, title, author,
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteBook(id));
  };

  return (
    <>
      <div className="bookState" key={id}>
        <div>
          <h3>{title}</h3>
          <h4>{author}</h4>
        </div>
        <DeleteBook id={id} onDelete={handleDelete} />
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
