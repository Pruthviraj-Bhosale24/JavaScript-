import React, { useState, useEffect } from "react";
import { X, PlusCircle, Edit3, Trash2, Search, AlertTriangle, CheckCircle2, Loader2 } from "lucide-react";

function BookModal({
  isOpen,
  mode, // 'add' | 'edit' | 'delete'
  onClose,
  onSubmitAdd,
  onSubmitEdit,
  onSubmitDelete,
  books = [],
  initialBookId = "",
}) {
  const [formData, setFormData] = useState({
    _id: "",
    bookName: "",
    bookAuthor: "",
    bookPrice: "",
    publishDate: "",
    image: "",
  });

  const [deleteId, setDeleteId] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [loadedSuccess, setLoadedSuccess] = useState(false);

  // Initialize or reset form when modal opens or mode/initialBookId changes
  useEffect(() => {
    if (!isOpen) return;

    setLoadError("");
    setLoadedSuccess(false);

    if (mode === "add") {
      setFormData({
        _id: "",
        bookName: "",
        bookAuthor: "",
        bookPrice: "",
        publishDate: "",
        image: "",
      });
    } else if (mode === "edit") {
      if (initialBookId) {
        // Pre-fill if editing from card
        const found = books.find((b) => b._id === initialBookId);
        if (found) {
          setFormData({
            _id: found._id || "",
            bookName: found.bookName || "",
            bookAuthor: found.bookAuthor || "",
            bookPrice: found.bookPrice || "",
            publishDate: found.publishDate || "",
            image: found.image || "",
          });
          setLoadedSuccess(true);
        } else {
          setFormData({
            _id: initialBookId,
            bookName: "",
            bookAuthor: "",
            bookPrice: "",
            publishDate: "",
            image: "",
          });
        }
      } else {
        setFormData({
          _id: "",
          bookName: "",
          bookAuthor: "",
          bookPrice: "",
          publishDate: "",
          image: "",
        });
      }
    } else if (mode === "delete") {
      setDeleteId(initialBookId || "");
    }
  }, [isOpen, mode, initialBookId, books]);

  if (!isOpen) return null;

  // Handler to load book details by ID for editing
  const handleLoadBookDetails = () => {
    setLoadError("");
    setLoadedSuccess(false);

    if (!formData._id.trim()) {
      setLoadError("Please enter a valid Book ID first.");
      return;
    }

    const found = books.find((b) => b._id.trim() === formData._id.trim());
    if (found) {
      setFormData({
        _id: found._id,
        bookName: found.bookName || "",
        bookAuthor: found.bookAuthor || "",
        bookPrice: found.bookPrice || "",
        publishDate: found.publishDate || "",
        image: found.image || "",
      });
      setLoadedSuccess(true);
    } else {
      setLoadError("No book found with this ID in local catalog.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "add") {
        await onSubmitAdd({
          bookName: formData.bookName,
          bookAuthor: formData.bookAuthor,
          bookPrice: formData.bookPrice,
          publishDate: formData.publishDate,
          image: formData.image,
        });
      } else if (mode === "edit") {
        await onSubmitEdit({
          _id: formData._id,
          bookName: formData.bookName,
          bookAuthor: formData.bookAuthor,
          bookPrice: formData.bookPrice,
          publishDate: formData.publishDate,
          image: formData.image,
        });
      } else if (mode === "delete") {
        await onSubmitDelete(deleteId);
      }
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getTitle = () => {
    if (mode === "add") return "Add New Book";
    if (mode === "edit") return "Update Existing Book";
    if (mode === "delete") return "Delete Book";
    return "";
  };

  const getIcon = () => {
    if (mode === "add") return <PlusCircle className="w-6 h-6 text-[#6F4E37]" />;
    if (mode === "edit") return <Edit3 className="w-6 h-6 text-[#8B5E3C]" />;
    if (mode === "delete") return <Trash2 className="w-6 h-6 text-[#9E4738]" />;
    return null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="bg-[#FFF8F0] border border-[#E8DCCB] w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col transform transition-all duration-300 scale-100">
        
        {/* Modal Header */}
        <div className="bg-[#F5E6D3] px-6 py-4 border-b border-[#E8DCCB] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#6F4E37]/10">
              {getIcon()}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#3D2817]">
                {getTitle()}
              </h2>
              <p className="text-xs text-[#8B5E3C] font-medium">
                {mode === "add" && "Fill in details to add to catalog"}
                {mode === "edit" && "Provide ID and modify book information"}
                {mode === "delete" && "Remove record permanently"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-500 hover:text-gray-800 hover:bg-[#E8DCCB]/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* ================= DELETE MODE ================= */}
          {mode === "delete" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6F4E37] mb-1">
                  Book ID
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter MongoDB Book ID (e.g., 60d5ec...)"
                  value={deleteId}
                  onChange={(e) => setDeleteId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D9B99B] bg-white text-[#3D2817] focus:outline-none focus:ring-2 focus:ring-[#6F4E37] text-sm"
                />
              </div>

              {/* Confirmation Popup Warning */}
              <div className="bg-[#9E4738]/10 border border-[#9E4738]/30 rounded-2xl p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#9E4738] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#9E4738]">
                    Are you sure you want to delete this book?
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    This operation cannot be undone. The entry will be permanently removed from MongoDB database.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ================= EDIT MODE ID LOAD SECTION ================= */}
          {mode === "edit" && (
            <div className="bg-[#F8F4EF] p-3.5 rounded-2xl border border-[#D9B99B]/50 space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#6F4E37]">
                Enter Book ID to Edit
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Paste Book ID here..."
                  value={formData._id}
                  onChange={(e) => setFormData({ ...formData, _id: e.target.value })}
                  className="flex-1 px-3 py-2 rounded-xl border border-[#D9B99B] bg-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
                />
                <button
                  type="button"
                  onClick={handleLoadBookDetails}
                  className="bg-[#8B5E3C] hover:bg-[#6F4E37] text-white px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Load Data</span>
                </button>
              </div>

              {loadError && (
                <p className="text-xs text-[#9E4738] font-medium flex items-center gap-1 mt-1">
                  <AlertTriangle className="w-3 h-3" /> {loadError}
                </p>
              )}

              {loadedSuccess && (
                <p className="text-xs text-emerald-700 font-medium flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Book data loaded into form below!
                </p>
              )}
            </div>
          )}

          {/* ================= ADD & EDIT FORM FIELDS ================= */}
          {(mode === "add" || mode === "edit") && (
            <>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6F4E37] mb-1">
                  Book Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Clean Code"
                  value={formData.bookName}
                  onChange={(e) => setFormData({ ...formData, bookName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D9B99B] bg-white text-[#3D2817] focus:outline-none focus:ring-2 focus:ring-[#6F4E37] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6F4E37] mb-1">
                  Author Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Robert C. Martin"
                  value={formData.bookAuthor}
                  onChange={(e) => setFormData({ ...formData, bookAuthor: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D9B99B] bg-white text-[#3D2817] focus:outline-none focus:ring-2 focus:ring-[#6F4E37] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6F4E37] mb-1">
                  Book Cover Image URL
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/cover.jpg"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D9B99B] bg-white text-[#3D2817] focus:outline-none focus:ring-2 focus:ring-[#6F4E37] text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#6F4E37] mb-1">
                    Price (₹) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="e.g. 499"
                    value={formData.bookPrice}
                    onChange={(e) => setFormData({ ...formData, bookPrice: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9B99B] bg-white text-[#3D2817] focus:outline-none focus:ring-2 focus:ring-[#6F4E37] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#6F4E37] mb-1">
                    Publish Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2024-05-15"
                    value={formData.publishDate}
                    onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9B99B] bg-white text-[#3D2817] focus:outline-none focus:ring-2 focus:ring-[#6F4E37] text-sm"
                  />
                </div>
              </div>
            </>
          )}

          {/* Modal Action Buttons */}
          <div className="flex items-center gap-3 pt-3 border-t border-[#E8DCCB]">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2.5 rounded-xl font-semibold text-sm transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className={`flex-1 text-white py-2.5 rounded-xl font-semibold text-sm shadow-md flex items-center justify-center gap-2 transition-all ${
                mode === "delete"
                  ? "bg-[#9E4738] hover:bg-[#B25241]"
                  : "bg-[#6F4E37] hover:bg-[#5C3A21]"
              } disabled:opacity-50`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>
                  {mode === "add" && "Save Book"}
                  {mode === "edit" && "Update Book"}
                  {mode === "delete" && "Confirm Delete"}
                </span>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default BookModal;