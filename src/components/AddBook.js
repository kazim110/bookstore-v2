import React from 'react';
import PropTypes from 'prop-types';

const AddBook = ({
  title, author, category, onClick,
}) => (
  <button
    type="button"
    className="addBtn"
    onClick={() => onClick(title, author, category)}
  >
    Add Book
  </button>
);

AddBook.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default AddBook;
