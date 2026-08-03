
function BookCard({ book, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <h2 className="text-xl font-semibold">
        {book.title}
      </h2>

      <p className="text-gray-600">
        {book.author}
      </p>

      <p className="mt-2">
        Category: {book.category}
      </p>

      <p className="font-bold text-blue-600 mt-2">
        ₹{book.price}
      </p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => onEdit(book)}
          className="flex-1 bg-amber-500 text-white py-2 rounded-lg"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(book.id)}
          className="flex-1 bg-red-500 text-white py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;