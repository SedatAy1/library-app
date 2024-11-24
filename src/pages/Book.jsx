import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Book = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "Savaş ve Barış", author: "Lev Tolstoy" },
    { id: 3, title: "Suç ve Ceza", author: "Fyodor Dostoyevski" },
    { id: 4, title: "Körlük", author: "Jose Saramago" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const addBook = () => {
    if (newBook.title.trim() === "" || newBook.author.trim() === "") {
      toast.error("Kitap ve yazar adı boş olamaz!");
      return;
    }
    const newId = books.length ? books[books.length - 1].id + 1 : 1;
    setBooks([...books, { id: newId, ...newBook }]);
    setNewBook({ title: "", author: "" });
    toast.success("Kitap başarıyla eklendi!");
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
    toast.info("Kitap başarıyla silindi!");
  };

  const updateBook = (id) => {
    const updatedTitle = prompt("Yeni Kitap Adını Girin:");
    const updatedAuthor = prompt("Yeni Yazar Adını Girin:");
    if (updatedTitle && updatedAuthor) {
      setBooks(
        books.map((book) =>
          book.id === id ? { ...book, title: updatedTitle, author: updatedAuthor } : book
        )
      );
      toast.success("Kitap başarıyla güncellendi!");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Kitap Yönetimi</h1>
      <ToastContainer />

      <div style={styles.listContainer}>
        {books.map((book) => (
          <div key={book.id} style={styles.listItem}>
            <span>{book.title} - {book.author}</span>
            <div style={styles.buttonGroup}>
              <button style={styles.button} onClick={() => updateBook(book.id)}>
                Güncelle
              </button>
              <button style={styles.deleteButton} onClick={() => deleteBook(book.id)}>
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.formContainer}>
        <input
          type="text"
          value={newBook.title}
          placeholder="Kitap Adı"
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          value={newBook.author}
          placeholder="Yazar Adı"
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          style={styles.input}
        />
        <button style={styles.addButton} onClick={addBook}>
          Ekle
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    color: "#1E293B",
    marginBottom: "20px",
  },
  listContainer: {
    marginBottom: "20px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    padding: "10px 15px",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
  },
  button: {
    backgroundColor: "#3B82F6",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
  },
  deleteButton: {
    backgroundColor: "#EF4444",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#2563EB",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    width: "300px",
    borderRadius: "5px",
    border: "1px solid #CBD5E1",
    fontSize: "14px",
  },
  addButton: {
    backgroundColor: "#10B981",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
};

export default Book;
