import React from "react";
import { BookOpen, Users, Sparkles, TrendingUp, Calendar } from "lucide-react";

function Stats({ books = [] }) {
  const totalBooks = books.length;
  
  // Calculate unique authors
  const uniqueAuthors = new Set(
    books.map((b) => b.bookAuthor?.trim().toLowerCase()).filter(Boolean)
  ).size;

  // Latest added book (the last item in the list)
  const latestBook = books.length > 0 ? books[books.length - 1] : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
      
      {/* Total Books Card */}
      <div className="bg-[#FFF8F0] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#E8DCCB] relative overflow-hidden group">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#6F4E37]/5 rounded-full group-hover:scale-125 transition-transform duration-500" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#A67B5B] mb-1">
              Catalog Volume
            </p>
            <h3 className="text-3xl font-extrabold text-[#3D2817]">
              {totalBooks}
            </h3>
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" /> Total Registered Books
            </p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-[#6F4E37]/10 flex items-center justify-center text-[#6F4E37] group-hover:bg-[#6F4E37] group-hover:text-white transition-colors duration-300">
            <BookOpen className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* Total Authors Card */}
      <div className="bg-[#FFF8F0] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#E8DCCB] relative overflow-hidden group">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#D9B99B]/15 rounded-full group-hover:scale-125 transition-transform duration-500" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#A67B5B] mb-1">
              Literary Minds
            </p>
            <h3 className="text-3xl font-extrabold text-[#3D2817]">
              {uniqueAuthors}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Distinct Authors Represented
            </p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-[#D9B99B]/25 flex items-center justify-center text-[#6F4E37] group-hover:bg-[#6F4E37] group-hover:text-white transition-colors duration-300">
            <Users className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* Latest Added Book Card */}
      <div className="bg-[#FFF8F0] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#E8DCCB] relative overflow-hidden group">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-500/10 rounded-full group-hover:scale-125 transition-transform duration-500" />
        <div className="flex items-center justify-between">
          <div className="pr-2 min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-wider text-[#A67B5B] mb-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" /> Latest Addition
            </p>
            <h3 className="text-lg font-bold text-[#3D2817] truncate" title={latestBook ? latestBook.bookName : "None"}>
              {latestBook ? latestBook.bookName : "No books yet"}
            </h3>
            <p className="text-xs text-gray-500 mt-1 truncate">
              {latestBook ? `By ${latestBook.bookAuthor}` : "Add your first book"}
            </p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-amber-500/15 flex items-center justify-center text-[#8B5E3C] group-hover:bg-[#6F4E37] group-hover:text-white transition-colors duration-300 shrink-0">
            <Calendar className="w-7 h-7" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Stats;