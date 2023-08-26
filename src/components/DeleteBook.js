import React from 'react';
import PropTypes from 'prop-types';

const DeleteBook = ({ id, onDelete }) => (
  <button
    type="button"
    className="delete"
    onClick={() => {
      onDelete(id);
    }}
  >
    Delete
  </button>
);

DeleteBook.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.string.isRequired,
};

export default DeleteBook;
