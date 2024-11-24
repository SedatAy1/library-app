import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Borrow = () => {
  const [borrows, setBorrows] = useState([
    { id: 1, book: "1984", user: "Ali Yılmaz" },
    { id: 2, book: "Savaş ve Barış", user: "Ayşe Kaya" },
  ]);

  const [newBorrow, setNewBorrow] = useState({ book: "", user: "" });

  const addBorrow = () => {
    if (newBorrow.book.trim() === "" || newBorrow.user.trim() === "") {
      toast.error("Kitap ve kullanıcı adı boş olamaz!");
      return;
    }
    const newId = borrows.length ? borrows[borrows.length - 1].id + 1 : 1;
    setBorrows([...borrows, { id: newId, ...newBorrow }]);
    setNewBorrow({ book: "", user: "" });
    toast.success("Kitap başarıyla ödünç alındı!");
  };

  const deleteBorrow = (id) => {
    setBorrows(borrows.filter((borrow) => borrow.id !== id));
    toast.info("Ödünç alma işlemi silindi!");
  };

  const updateBorrow = (id) => {
    const updatedBook = prompt("Yeni Kitap Adını Girin:");
    const updatedUser = prompt("Yeni Kullanıcı Adını Girin:");
    if (updatedBook && updatedUser) {
      setBorrows(
        borrows.map((borrow) =>
          borrow.id === id ? { ...borrow, book: updatedBook, user: updatedUser } : borrow
        )
      );
      toast.success("Ödünç alma işlemi güncellendi!");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Kitap Alma Yönetimi</h1>
      <ToastContainer />

      <div style={styles.listContainer}>
        {borrows.map((borrow) => (
          <div key={borrow.id} style={styles.listItem}>
            <span>
              {borrow.book} - {borrow.user}
            </span>
            <div style={styles.buttonGroup}>
              <button style={styles.button} onClick={() => updateBorrow(borrow.id)}>
                Güncelle
              </button>
              <button style={styles.deleteButton} onClick={() => deleteBorrow(borrow.id)}>
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.formContainer}>
        <input
          type="text"
          value={newBorrow.book}
          placeholder="Kitap Adı"
          onChange={(e) => setNewBorrow({ ...newBorrow, book: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          value={newBorrow.user}
          placeholder="Kullanıcı Adı"
          onChange={(e) => setNewBorrow({ ...newBorrow, user: e.target.value })}
          style={styles.input}
        />
        <button style={styles.addButton} onClick={addBorrow}>
          Ekle
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: "800px", margin: "0 auto", padding: "20px", textAlign: "center" },
  title: { fontSize: "32px", color: "#1E293B", marginBottom: "20px" },
  listContainer: { marginBottom: "20px" },
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
  buttonGroup: { display: "flex", gap: "10px" },
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
  formContainer: { display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" },
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

export default Borrow;
