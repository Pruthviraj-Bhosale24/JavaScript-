function Stats({ books }) {
  const categories = new Set(
    books.map((book) => book.category)
  ).size;

  return (
    <div className="grid md:grid-cols-3 gap-5">
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-3xl font-bold">
          {books.length}
        </h3>
        <p>Total Books</p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-3xl font-bold">
          {categories}
        </h3>
        <p>Categories</p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-3xl font-bold">
          {books.length}
        </h3>
        <p>Available Books</p>
      </div>
    </div>
  );
}

export default Stats;