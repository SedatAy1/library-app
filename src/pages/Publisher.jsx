import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Publisher = () => {
  const [publishers, setPublishers] = useState([
    { id: 1, name: "Penguin Random House" },
    { id: 2, name: "HarperCollins" },
    { id: 3, name: "Simon & Schuster" },
    { id: 4, name: "Hachette Livre" },
    { id: 5, name: "Macmillan Publishers" },
  ]);

  const [newPublisher, setNewPublisher] = useState("");

  const addPublisher = () => {
    if (newPublisher.trim() === "") {
      toast.error("Yayımcı adı boş olamaz!");
      return;
    }
    const newId = publishers.length ? publishers[publishers.length - 1].id + 1 : 1;
    setPublishers([...publishers, { id: newId, name: newPublisher }]);
    setNewPublisher("");
    toast.success("Yayımcı başarıyla eklendi!");
  };

  const deletePublisher = (id) => {
    setPublishers(publishers.filter((publisher) => publisher.id !== id));
    toast.info("Yayımcı başarıyla silindi!");
  };

  const updatePublisher = (id) => {
    const updatedName = prompt("Yeni Yayımcı Adını Girin:");
    if (updatedName) {
      setPublishers(
        publishers.map((publisher) =>
          publisher.id === id ? { ...publisher, name: updatedName } : publisher
        )
      );
      toast.success("Yayımcı başarıyla güncellendi!");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Yayımcı Yönetimi</h1>
      <ToastContainer />

      {/* Yayımcı Listesi */}
      <div style={styles.listContainer}>
        {publishers.map((publisher) => (
          <div key={publisher.id} style={styles.listItem}>
            <span>{publisher.name}</span>
            <div style={styles.buttonGroup}>
              <button style={styles.button} onClick={() => updatePublisher(publisher.id)}>
                Güncelle
              </button>
              <button style={styles.deleteButton} onClick={() => deletePublisher(publisher.id)}>
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Yeni Yayımcı Ekleme */}
      <div style={styles.formContainer}>
        <input
          type="text"
          value={newPublisher}
          placeholder="Yeni Yayımcı Adı"
          onChange={(e) => setNewPublisher(e.target.value)}
          style={styles.input}
        />
        <button style={styles.addButton} onClick={addPublisher}>
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

export default Publisher;
