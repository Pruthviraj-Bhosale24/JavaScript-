import BookCard from "./BookCard";

function BookList({ books, onEdit }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard
          key={book._id || book.id}
          book={book}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default BookList;