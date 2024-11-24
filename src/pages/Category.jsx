import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Category = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Roman" },
    { id: 2, name: "Bilim Kurgu" },
    { id: 3, name: "Tarih" },
    { id: 4, name: "Felsefe" },
    { id: 5, name: "Çocuk Kitapları" },
  ]);

  const [newCategory, setNewCategory] = useState("");

  const addCategory = () => {
    if (newCategory.trim() === "") {
      toast.error("Kategori adı boş olamaz!");
      return;
    }
    const newId = categories.length ? categories[categories.length - 1].id + 1 : 1;
    setCategories([...categories, { id: newId, name: newCategory }]);
    setNewCategory("");
    toast.success("Kategori başarıyla eklendi!");
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
    toast.info("Kategori başarıyla silindi!");
  };

  const updateCategory = (id) => {
    const updatedName = prompt("Yeni Kategori Adını Girin:");
    if (updatedName) {
      setCategories(
        categories.map((category) =>
          category.id === id ? { ...category, name: updatedName } : category
        )
      );
      toast.success("Kategori başarıyla güncellendi!");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Kategori Yönetimi</h1>
      <ToastContainer />

      <div style={styles.listContainer}>
        {categories.map((category) => (
          <div key={category.id} style={styles.listItem}>
            <span>{category.name}</span>
            <div style={styles.buttonGroup}>
              <button style={styles.button} onClick={() => updateCategory(category.id)}>
                Güncelle
              </button>
              <button style={styles.deleteButton} onClick={() => deleteCategory(category.id)}>
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.formContainer}>
        <input
          type="text"
          value={newCategory}
          placeholder="Yeni Kategori Adı"
          onChange={(e) => setNewCategory(e.target.value)}
          style={styles.input}
        />
        <button style={styles.addButton} onClick={addCategory}>
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

export default Category;
