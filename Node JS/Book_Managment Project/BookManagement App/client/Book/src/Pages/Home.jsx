import { useState } from "react";
import Header from "../components/Header";
import Stats from "../components/Stats";
import BookList from "../components/BookList";
import BookModal from "../components/BookModal";

function Home() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Help",
      price: 499,
    },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Finance",
      price: 399,
    },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(
      books.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
    setEditingBook(null);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100">
      <Header
        setShowModal={setShowModal}
      />

      <div className="max-w-7xl mx-auto p-6">
        <Stats books={books} />

        <input
          type="text"
          placeholder="Search books..."
          className="w-full p-3 rounded-xl border bg-white my-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <BookList
          books={filteredBooks}
          onDelete={deleteBook}
          onEdit={(book) => {
            setEditingBook(book);
            setShowModal(true);
          }}
        />
      </div>

      {showModal && (
        <BookModal
          addBook={addBook}
          updateBook={updateBook}
          editingBook={editingBook}
          closeModal={() => {
            setShowModal(false);
            setEditingBook(null);
          }}
        />
      )}
    </div>
  );
}

export default Home;