import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getBooks, deleteBook } from '../redux/books/booksSlice';
import DeleteBook from './DeleteBook';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id))
      .then(() => dispatch(getBooks()));
  };

  const randomNumber = (min, max) => (
    Math.floor(Math.random() * (max + 1 - min)) + min
  );

  return (
    <>
      <div className="Lesson-Panel" key={book.id}>
        <div className="book-info">
          <h3 className="School-of">{book.category}</h3>
          <h3 className="Title Text-Style-5">{book.title}</h3>
          <h3 className="Author Text-Style-8">{book.author}</h3>
          <div className="book-opt">
            <span>Comments</span>
            <div className="Line-2" />
            <DeleteBook id={book.id} onDelete={() => handleDelete(book.id)} />
            <div className="Line-2" />
            <span>Edit</span>
          </div>
        </div>
        <div className="progress-ctr">
          <div className="progress">
            <div className="progress-circle" />
            <div className="percentage-ctr">
              <span className="percentage">
                {randomNumber(0, 100)}
                %
              </span>
              <span className="completed">
                Completed
              </span>
            </div>
          </div>
          <div className="progress-line" />
          <div className="chapter-ctr">
            <span className="current-chapter">Current Chapter</span>
            <span className="chapter-name">
              Chapter
              {' '}
              {randomNumber(1, 20)}
            </span>
            <button type="button">Update Progress</button>
          </div>
        </div>
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
