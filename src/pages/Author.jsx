import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Author = () => {
  const [authors, setAuthors] = useState([
    { id: 1, name: "Lev Tolstoy" },
    { id: 2, name: "Fyodor Dostoyevski" },
    { id: 3, name: "George Orwell" },
    { id: 4, name: "Virginia Woolf" },
    { id: 5, name: "Jose Saramago" },
  ]);

  const [newAuthor, setNewAuthor] = useState("");

  const addAuthor = () => {
    if (newAuthor.trim() === "") {
      toast.error("Yazar adı boş olamaz!");
      return;
    }
    const newId = authors.length ? authors[authors.length - 1].id + 1 : 1;
    setAuthors([...authors, { id: newId, name: newAuthor }]);
    setNewAuthor("");
    toast.success("Yazar başarıyla eklendi!");
  };

  const deleteAuthor = (id) => {
    setAuthors(authors.filter((author) => author.id !== id));
    toast.info("Yazar başarıyla silindi!");
  };

  const updateAuthor = (id) => {
    const updatedName = prompt("Yeni Yazar Adını Girin:");
    if (updatedName) {
      setAuthors(
        authors.map((author) =>
          author.id === id ? { ...author, name: updatedName } : author
        )
      );
      toast.success("Yazar başarıyla güncellendi!");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Yazar Yönetimi</h1>
      <ToastContainer />

      <div style={styles.listContainer}>
        {authors.map((author) => (
          <div key={author.id} style={styles.listItem}>
            <span>{author.name}</span>
            <div style={styles.buttonGroup}>
              <button style={styles.button} onClick={() => updateAuthor(author.id)}>
                Güncelle
              </button>
              <button style={styles.deleteButton} onClick={() => deleteAuthor(author.id)}>
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.formContainer}>
        <input
          type="text"
          value={newAuthor}
          placeholder="Yeni Yazar Adı"
          onChange={(e) => setNewAuthor(e.target.value)}
          style={styles.input}
        />
        <button style={styles.addButton} onClick={addAuthor}>
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

export default Author;
