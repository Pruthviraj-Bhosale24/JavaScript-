import React, { useState } from "react";
import { Copy, Check, Edit2, Trash2, Calendar, Tag, User, Hash, Book } from "lucide-react";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1544947950-fa07a98d237f";

function BookCard({ book, onSelectEdit, onSelectDelete }) {
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    if (book._id) {
      navigator.clipboard.writeText(book._id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[#FFF8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8DCCB] flex flex-col group hover:-translate-y-1">
      
      {/* Book Cover Image Header */}
      <div className="relative h-52 overflow-hidden bg-[#5C3A21]">
        <img
          src={book.image || FALLBACK_IMAGE}
          alt={book.bookName || "Book Cover"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = FALLBACK_IMAGE;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D2817]/90 via-[#3D2817]/20 to-transparent" />

        {/* Floating Price Tag */}
        <div className="absolute top-3 right-3 bg-[#6F4E37]/90 backdrop-blur-md text-[#FFF8F0] px-3 py-1 rounded-full text-xs font-bold shadow-md border border-[#D9B99B]/40 flex items-center gap-1">
          <Tag className="w-3 h-3 text-[#D9B99B]" />
          <span>₹{book.bookPrice || "0"}</span>
        </div>

        {/* Quick Action Badges on Cover */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-[#D9B99B] font-medium bg-[#3D2817]/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
            <Calendar className="w-3 h-3" />
            <span>{book.publishDate || "N/A"}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {onSelectEdit && (
              <button
                onClick={() => onSelectEdit(book)}
                className="p-1.5 rounded-lg bg-[#8B5E3C]/80 hover:bg-[#8B5E3C] text-white shadow backdrop-blur-sm transition-transform active:scale-95"
                title="Edit Book"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
            )}
            {onSelectDelete && (
              <button
                onClick={() => onSelectDelete(book)}
                className="p-1.5 rounded-lg bg-[#9E4738]/80 hover:bg-[#9E4738] text-white shadow backdrop-blur-sm transition-transform active:scale-95"
                title="Delete Book"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h2 className="text-xl font-bold text-[#3D2817] line-clamp-1 group-hover:text-[#6F4E37] transition-colors" title={book.bookName}>
              {book.bookName || "Untitled Book"}
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#6F4E37] mb-3 font-medium">
            <User className="w-4 h-4 text-[#A67B5B]" />
            <span className="truncate">{book.bookAuthor || "Unknown Author"}</span>
          </div>
        </div>

        {/* MongoDB ID Section */}
        <div className="mt-4 pt-3 border-t border-[#E8DCCB]">
          <div className="bg-[#F5E6D3] p-2.5 rounded-xl border border-[#D9B99B]/40 flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5 min-w-0">
              <Hash className="w-3.5 h-3.5 text-[#8B5E3C] shrink-0" />
              <span className="font-semibold text-gray-700 shrink-0">ID:</span>
              <span className="font-mono text-[#5C3A21] truncate" title={book._id}>
                {book._id || "No ID"}
              </span>
            </div>
            <button
              onClick={handleCopyId}
              className="p-1 text-[#6F4E37] hover:text-[#3D2817] hover:bg-[#D9B99B]/40 rounded transition-colors shrink-0 flex items-center gap-1 text-[11px] font-medium"
              title="Copy MongoDB ID"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default BookCard;