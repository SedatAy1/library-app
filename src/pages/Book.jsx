import React, { useState } from "react";
import Swal from "sweetalert2"; // SweetAlert2 kütüphanesini import ediyoruz

const Book = () => {
  // Kitap listesi ve yeni kitap bilgisi için state tanımlamaları
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "Savaş ve Barış", author: "Lev Tolstoy" },
    { id: 3, title: "Suç ve Ceza", author: "Fyodor Dostoyevski" },
    { id: 4, title: "Körlük", author: "Jose Saramago" },
    { id: 5, title: "Hayvan Çiftliği", author: "George Orwell" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" }); // Yeni kitap bilgilerini tutmak için

  // Kitap ekleme işlemi
  const addBook = () => {
    // Kitap adı veya yazar adı boşsa uyarı gösterir
    if (newBook.title.trim() === "" || newBook.author.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Hata!",
        text: "Kitap ve yazar adı boş olamaz!",
      });
      return;
    }

    // Yeni kitap için ID belirleme
    const newId = books.length ? books[books.length - 1].id + 1 : 1;

    // Kitap listesine yeni kitap ekleme
    setBooks([...books, { id: newId, ...newBook }]);

    // Giriş alanlarını temizleme
    setNewBook({ title: "", author: "" });

    // Başarı mesajı gösterme
    Swal.fire({
      icon: "success",
      title: "Başarılı!",
      text: "Kitap başarıyla eklendi!",
    });
  };

  // Kitap silme işlemi
  const deleteBook = (id) => {
    // Kullanıcıdan silme işlemi için onay alır
    Swal.fire({
      title: "Emin misiniz?",
      text: "Bu işlem geri alınamaz!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Evet, sil!",
      cancelButtonText: "Hayır, iptal!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Kitabı siler
        setBooks(books.filter((book) => book.id !== id));
        Swal.fire("Silindi!", "Kitap başarıyla silindi.", "success");
      }
    });
  };

  // Kitap güncelleme işlemi
  const updateBook = (id) => {
    // Yeni kitap adı almak için bir giriş penceresi açar
    Swal.fire({
      title: "Yeni Kitap Adını Girin",
      input: "text",
      inputPlaceholder: "Yeni Kitap Adı",
      showCancelButton: true,
      confirmButtonText: "Kaydet",
      cancelButtonText: "İptal",
    }).then((resultTitle) => {
      if (resultTitle.isConfirmed && resultTitle.value.trim() !== "") {
        // Yeni yazar adı almak için başka bir giriş penceresi açar
        Swal.fire({
          title: "Yeni Yazar Adını Girin",
          input: "text",
          inputPlaceholder: "Yeni Yazar Adı",
          showCancelButton: true,
          confirmButtonText: "Kaydet",
          cancelButtonText: "İptal",
        }).then((resultAuthor) => {
          if (resultAuthor.isConfirmed && resultAuthor.value.trim() !== "") {
            // Kitap bilgilerini günceller
            setBooks(
              books.map((book) =>
                book.id === id
                  ? { ...book, title: resultTitle.value, author: resultAuthor.value }
                  : book
              )
            );
            Swal.fire("Başarılı!", "Kitap başarıyla güncellendi.", "success");
          }
        });
      }
    });
  };

  return (
    <div style={styles.container}>
      {/* Başlık */}
      <h1 style={styles.title}>Kitap Yönetimi</h1>

      {/* Kitap listesi */}
      <div style={styles.listContainer}>
        {books.map((book) => (
          <div key={book.id} style={styles.listItem}>
            <span>
              {book.title} - {book.author} {/* Kitap adı ve yazar adı */}
            </span>
            <div style={styles.buttonGroup}>
              {/* Güncelleme butonu */}
              <button style={styles.button} onClick={() => updateBook(book.id)}>
                Güncelle
              </button>
              {/* Silme butonu */}
              <button style={styles.deleteButton} onClick={() => deleteBook(book.id)}>
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Yeni kitap ekleme formu */}
      <div style={styles.formContainer}>
        <input
          type="text"
          value={newBook.title} // Kitap adı state
          placeholder="Kitap Adı"
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          value={newBook.author} // Yazar adı state
          placeholder="Yazar Adı"
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          style={styles.input}
        />
        {/* Ekleme butonu */}
        <button style={styles.addButton} onClick={addBook}>
          Ekle
        </button>
      </div>
    </div>
  );
};

// CSS stilleri
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

export default Book; // Book bileşenini dışa aktarır
