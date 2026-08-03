import { useState, useEffect } from "react";

function BookModal({
  addBook,
  updateBook,
  editingBook,
  closeModal,
}) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    if (editingBook) {
      setFormData(editingBook);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingBook) {
      updateBook({
        ...formData,
        id: editingBook.id,
      });
    } else {
      addBook(formData);
    }

    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white w-full max-w-md p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4">
          {editingBook
            ? "Update Book"
            : "Add Book"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <input
            type="text"
            placeholder="Title"
            className="w-full border p-3 rounded-lg"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
            required
          />

          <input
            type="text"
            placeholder="Author"
            className="w-full border p-3 rounded-lg"
            value={formData.author}
            onChange={(e) =>
              setFormData({
                ...formData,
                author: e.target.value,
              })
            }
            required
          />

          <input
            type="text"
            placeholder="Category"
            className="w-full border p-3 rounded-lg"
            value={formData.category}
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
            required
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full border p-3 rounded-lg"
            value={formData.price}
            onChange={(e) =>
              setFormData({
                ...formData,
                price: e.target.value,
              })
            }
            required
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg"
            >
              {editingBook
                ? "Update"
                : "Add"}
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="flex-1 bg-gray-300 py-3 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookModal;