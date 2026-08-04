import React from "react";
import { BookOpen, PlusCircle, Edit3, Trash2, Library } from "lucide-react";

function Header({ onOpenAdd, onOpenEdit, onOpenDelete }) {
  return (
    <header className="sticky top-0 z-30 glass-nav shadow-lg border-b border-[#5C3A21]/30 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D9B99B] to-[#A67B5B] flex items-center justify-center text-[#3D2817] shadow-md group-hover:scale-105 transition-transform duration-300">
            <BookOpen className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight text-[#FFF8F0]">
                Book Management System
              </h1>
              <span className="bg-[#D9B99B]/20 text-[#D9B99B] border border-[#D9B99B]/30 text-xs px-2.5 py-0.5 rounded-full font-medium hidden sm:inline-block">
                Pro
              </span>
            </div>
            <p className="text-xs text-[#D9B99B] font-medium tracking-wide flex items-center gap-1">
              <Library className="w-3 h-3" /> Digital Library Control Center
            </p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3 w-full md:w-auto justify-stretch sm:justify-end">
          <button
            onClick={onOpenAdd}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#D9B99B] hover:bg-[#E8D0B8] text-[#3D2817] font-semibold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm active:scale-95"
            title="Add a new book to database"
          >
            <PlusCircle className="w-4 h-4 stroke-[2.5]" />
            <span>Add Book</span>
          </button>

          <button
            onClick={onOpenEdit}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#8B5E3C] hover:bg-[#9C6B46] text-[#FFF8F0] font-semibold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg border border-[#A67B5B]/40 transition-all duration-200 text-sm active:scale-95"
            title="Update existing book by ID"
          >
            <Edit3 className="w-4 h-4 stroke-[2.5]" />
            <span>Edit Book</span>
          </button>

          <button
            onClick={onOpenDelete}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#9E4738] hover:bg-[#B25241] text-white font-semibold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm active:scale-95"
            title="Delete book by ID"
          >
            <Trash2 className="w-4 h-4 stroke-[2.5]" />
            <span>Delete Book</span>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;