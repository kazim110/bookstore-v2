const Books = () => {
  const bookList = [
    {
      id: 1,
      title: 'The Loard',
    },
    {
      id: 2,
      title: 'Be Yourself!',
    },
    {
      id: 3,
      title: 'God and Human',
    },
  ];

  return (
    <>
      <div className="booksList">
        <h5>Book&apos;s List:</h5>
        {bookList.map((element) => (
          <div className="bookState" key={element.id}>
            <h3>{element.title}</h3>
            <button type="button" className="delete">Delete</button>
          </div>
        ))}
      </div>
      <form action="submit">
        <h5>Add new Book:</h5>
        <input type="text" placeholder="Book Title..." />
        <input type="text" placeholder="Category" />
        <button type="button" className="addBtn">Add Book</button>
      </form>
    </>
  );
};
export default Books;
