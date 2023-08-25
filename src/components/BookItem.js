import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
/*eslint-disable*/
const BookItem = ({
  item_id, title, author, category,
}) => {
    const dispatch = useDispatch();

  return (
    <>
      <div className="bookState" key={item_id}>
        <div>
          <h3>{title}</h3>
          <h4>{author}</h4>
        </div>
        <button type="button" className="delete"
        onClick={()=>{
            dispatch(deleteBook(item_id));
        }}>Delete</button>
      </div>
    </>
  );
};

export default BookItem;
