import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Stats from "../components/Stats";
import BookCard from "../components/BookCard";
import BookModal from "../components/BookModal";
import { baseBookURL } from "../axiosInstance";
import { Search, X, Loader2, BookX, Sparkles, RefreshCw, CheckCircle, AlertCircle } from "lucide-react";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Modal control state
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: "add", // 'add' | 'edit' | 'delete'
    bookId: "",
  });

  // Notification Toast state
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 3500);
  };

  // ================= 1. GET BOOKS =================
  const getBookList = async () => {
    setLoading(true);
    try {
      const response = await baseBookURL.get("/getBook");
      // Handle both { booklist: [...] } and direct array [...] responses
      if (response.data && response.data.booklist) {
        setBooks(response.data.booklist);
      } else if (Array.isArray(response.data)) {
        setBooks(response.data);
      } else {
        setBooks([]);
      }
    } catch (err) {
      console.error("Error fetching books:", err);
      showToast("Failed to fetch books from backend server.", "error");
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookList();
  }, []);

  // ================= 2. ADD BOOK =================
  const handleAddBook = async (bookData) => {
    try {
      await baseBookURL.post("/addBook", bookData);
      showToast("Book added successfully!", "success");
      await getBookList();
    } catch (err) {
      console.error("Error adding book:", err);
      showToast("Failed to add book. Please try again.", "error");
      throw err;
    }
  };

  // ================= 3. UPDATE BOOK =================
  const handleUpdateBook = async (bookData) => {
    try {
      await baseBookURL.put("/updatedBook", bookData);
      showToast("Book updated successfully!", "success");
      await getBookList();
    } catch (err) {
      console.error("Error updating book:", err);
      showToast("Failed to update book. Check ID and server status.", "error");
      throw err;
    }
  };

  // ================= 4. DELETE BOOK =================
  const handleDeleteBook = async (bookId) => {
    try {
      await baseBookURL.delete("/deleteBook", {
        data: {
          _id: bookId,
        },
      });
      showToast("Book deleted successfully!", "success");
      await getBookList();
    } catch (err) {
      console.error("Error deleting book:", err);
      showToast("Failed to delete book. Verify Book ID.", "error");
      throw err;
    }
  };

  // Modal opening helper shortcuts
  const handleOpenAdd = () => {
    setModalState({ isOpen: true, mode: "add", bookId: "" });
  };

  const handleOpenEdit = (bookId = "") => {
    setModalState({ isOpen: true, mode: "edit", bookId });
  };

  const handleOpenDelete = (bookId = "") => {
    setModalState({ isOpen: true, mode: "delete", bookId });
  };

  // Filter books by search query (Book Name or Author)
  const filteredBooks = books.filter((book) => {
    const query = search.toLowerCase().trim();
    if (!query) return true;
    const nameMatch = book.bookName?.toLowerCase().includes(query);
    const authorMatch = book.bookAuthor?.toLowerCase().includes(query);
    return nameMatch || authorMatch;
  });

  return (
    <div className="min-h-screen bg-[#F8F4EF] text-[#4A3525] flex flex-col font-sans selection:bg-[#D9B99B]/50 selection:text-[#3D2817]">
      
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div
            className={`px-5 py-3.5 rounded-2xl shadow-xl border flex items-center gap-3 backdrop-blur-md text-sm font-semibold ${
              toast.type === "error"
                ? "bg-[#9E4738] text-white border-red-800"
                : "bg-[#6F4E37] text-[#FFF8F0] border-[#D9B99B]"
            }`}
          >
            {toast.type === "error" ? (
              <AlertCircle className="w-5 h-5 text-red-200 shrink-0" />
            ) : (
              <CheckCircle className="w-5 h-5 text-[#D9B99B] shrink-0" />
            )}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Main Header Component */}
      <Header
        onOpenAdd={handleOpenAdd}
        onOpenEdit={() => handleOpenEdit()}
        onOpenDelete={() => handleOpenDelete()}
      />

      {/* Main Container */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        
        {/* Dashboard Welcome & Stats */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-[#3D2817] tracking-tight flex items-center gap-2">
              Catalog Dashboard <Sparkles className="w-6 h-6 text-[#A67B5B]" />
            </h2>
            <p className="text-sm text-[#8B5E3C] mt-1 font-medium">
              Manage your collection, monitor statistics, and search titles seamlessly.
            </p>
          </div>

          <button
            onClick={getBookList}
            disabled={loading}
            className="self-start sm:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFF8F0] border border-[#E8DCCB] text-[#6F4E37] font-semibold text-xs shadow-sm hover:bg-[#F5E6D3] transition-colors disabled:opacity-50"
            title="Refresh Catalog from Server"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Sync Data</span>
          </button>
        </div>

        {/* Stats Component */}
        <Stats books={books} />

        {/* Search Bar Section */}
        <div className="my-6 relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-[#8B5E3C] absolute left-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by Book Name or Author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 rounded-2xl border border-[#E8DCCB] bg-[#FFF8F0] text-[#3D2817] placeholder-[#A67B5B]/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6F4E37] focus:bg-white transition-all text-sm font-medium"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 p-1 rounded-full text-gray-400 hover:text-[#3D2817] hover:bg-gray-200 transition-colors"
                title="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {search && (
            <div className="mt-2 text-xs text-[#8B5E3C] font-medium flex items-center justify-between px-2">
              <span>Showing results for "<strong className="text-[#3D2817]">{search}</strong>"</span>
              <span>{filteredBooks.length} book(s) found</span>
            </div>
          )}
        </div>

        {/* Loading Spinner State */}
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#6F4E37]/10 flex items-center justify-center mb-4 border border-[#D9B99B]/40">
              <Loader2 className="w-8 h-8 text-[#6F4E37] animate-spin" />
            </div>
            <h3 className="text-lg font-bold text-[#3D2817]">Fetching Book Collection...</h3>
            <p className="text-xs text-[#8B5E3C] mt-1">Connecting with API endpoint GET /getBook</p>
          </div>
        ) : filteredBooks.length === 0 ? (
          /* Empty State Screen */
          <div className="py-16 px-4 my-6 bg-[#FFF8F0] border border-dashed border-[#D9B99B] rounded-3xl text-center flex flex-col items-center justify-center max-w-lg mx-auto shadow-sm">
            <div className="w-20 h-20 rounded-full bg-[#F5E6D3] flex items-center justify-center text-[#8B5E3C] mb-4">
              <BookX className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-[#3D2817]">
              {search ? "No Matching Books Found" : "Your Library is Currently Empty"}
            </h3>
            <p className="text-sm text-[#8B5E3C] mt-2 max-w-xs">
              {search
                ? `No books found matching "${search}". Try searching for a different title or author name.`
                : "Get started by adding your first book to the collection using the button below."}
            </p>
            <button
              onClick={search ? () => setSearch("") : handleOpenAdd}
              className="mt-6 bg-[#6F4E37] hover:bg-[#5C3A21] text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              {search ? "Clear Search Filter" : "Add Your First Book"}
            </button>
          </div>
        ) : (
          /* Responsive Book Card Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {filteredBooks.map((book, index) => (
              <BookCard
                key={book._id || index}
                book={book}
                onSelectEdit={(b) => handleOpenEdit(b._id)}
                onSelectDelete={(b) => handleOpenDelete(b._id)}
              />
            ))}
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-[#6F4E37]/10 border-t border-[#E8DCCB] py-6 text-center text-xs text-[#8B5E3C] mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Frontend Book Management System • Powered by React JS, Tailwind CSS & Axios</p>
        </div>
      </footer>

      {/* Book Operational Modal */}
      <BookModal
        isOpen={modalState.isOpen}
        mode={modalState.mode}
        initialBookId={modalState.bookId}
        books={books}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        onSubmitAdd={handleAddBook}
        onSubmitEdit={handleUpdateBook}
        onSubmitDelete={handleDeleteBook}
      />

    </div>
  );
}

export default Home;