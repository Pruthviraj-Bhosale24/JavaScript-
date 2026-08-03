import BookCard from "./BookCard";

function BookList({
  books,
  onDelete,
  onEdit,
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default BookList;