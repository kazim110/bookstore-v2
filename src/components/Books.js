import { useSelector } from 'react-redux';
import { useState } from 'react';
import BookItem from './BookItem';
import AddBook from './AddBook';

const Books = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const { books } = useSelector((state) => state.books);

  return (
    <>
      <div className="booksList">
        <h5>Book&apos;s List:</h5>
        {books.map((element) => (
          <BookItem
            key={element.id}
            id={element.id}
            title={element.title}
            author={element.author}
          />
        ))}
      </div>
      <form action="submit">
        <h5>Add new Book:</h5>
        <input type="text" placeholder="Book Title..." onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <AddBook title={title} author={author} />
      </form>
    </>
  );
};
export default Books;
