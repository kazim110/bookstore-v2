import React from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ onClick }) => (
  <button
    type="button"
    className="addBtn"
    onClick={onClick}
  >
    Add Book
  </button>
);

AddBook.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddBook;
