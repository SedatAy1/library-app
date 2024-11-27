import React, { useState } from "react";
import Swal from "sweetalert2"; // SweetAlert2 kütüphanesini içe aktarır
import withReactContent from "sweetalert2-react-content"; // React içerikli modülünü içe aktarır

const MySwal = withReactContent(Swal); // SweetAlert2'yi React ile uyumlu hale getirir

const Author = () => {
  // Yazar listesini ve yeni yazar bilgisini yönetmek için state'ler tanımlanıyor
  const [authors, setAuthors] = useState([
    { id: 1, name: "Lev Tolstoy" },
    { id: 2, name: "Fyodor Dostoyevski" },
    { id: 3, name: "George Orwell" },
    { id: 4, name: "Virginia Woolf" },
    { id: 5, name: "Jose Saramago" },
  ]);

  const [newAuthor, setNewAuthor] = useState(""); // Yeni eklenecek yazarın adını tutar

  // Yeni yazar ekleme fonksiyonu
  const addAuthor = () => {
    if (newAuthor.trim() === "") { // Eğer yeni yazar adı boşsa hata mesajı gösterir
      MySwal.fire({
        icon: "error",
        title: "Hata!",
        text: "Yazar adı boş olamaz!",
      });
      return;
    }

    const newId = authors.length ? authors[authors.length - 1].id + 1 : 1; // Yeni yazar için ID oluşturur
    setAuthors([...authors, { id: newId, name: newAuthor }]); // Yeni yazarı listeye ekler
    setNewAuthor(""); // Giriş kutusunu temizler

    MySwal.fire({
      icon: "success",
      title: "Başarılı!",
      text: "Yazar başarıyla eklendi!",
    });
  };

  // Yazar silme fonksiyonu
  const deleteAuthor = (id) => {
    MySwal.fire({
      title: "Emin misiniz?", // Kullanıcıdan onay alır
      text: "Bu işlem geri alınamaz!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Evet, sil!",
      cancelButtonText: "Hayır, iptal!",
    }).then((result) => {
      if (result.isConfirmed) { // Onay verilirse yazarı siler
        setAuthors(authors.filter((author) => author.id !== id));
        MySwal.fire("Silindi!", "Yazar başarıyla silindi.", "success");
      }
    });
  };

  // Yazar güncelleme fonksiyonu
  const updateAuthor = (id) => {
    MySwal.fire({
      title: "Yeni Yazar Adını Girin",
      input: "text", // Kullanıcıdan yeni yazar adını alır
      inputPlaceholder: "Yeni Yazar Adı",
      showCancelButton: true,
      confirmButtonText: "Kaydet",
      cancelButtonText: "İptal",
    }).then((result) => {
      if (result.isConfirmed && result.value.trim() !== "") { // Yeni ad onaylanırsa yazarı günceller
        setAuthors(
          authors.map((author) =>
            author.id === id ? { ...author, name: result.value } : author
          )
        );
        MySwal.fire("Başarılı!", "Yazar başarıyla güncellendi.", "success");
      }
    });
  };

  return (
    <div style={styles.container}> {/* Yazar yönetimi ana konteyneri */}
      <h1 style={styles.title}>Yazar Yönetimi</h1>

      {/* Yazarların listelendiği alan */}
      <div style={styles.listContainer}>
        {authors.map((author) => (
          <div key={author.id} style={styles.listItem}>
            <span>{author.name}</span> {/* Yazar adı */}
            <div style={styles.buttonGroup}>
              {/* Güncelleme butonu */}
              <button style={styles.button} onClick={() => updateAuthor(author.id)}>
                Güncelle
              </button>
              {/* Silme butonu */}
              <button style={styles.deleteButton} onClick={() => deleteAuthor(author.id)}>
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Yeni yazar ekleme formu */}
      <div style={styles.formContainer}>
        <input
          type="text"
          value={newAuthor}
          placeholder="Yeni Yazar Adı" // Kullanıcıdan yeni yazar adı alır
          onChange={(e) => setNewAuthor(e.target.value)} // Girdi değişiminde state'i günceller
          style={styles.input}
        />
        <button style={styles.addButton} onClick={addAuthor}> {/* Yeni yazar ekleme butonu */}
          Ekle
        </button>
      </div>
    </div>
  );
};

// CSS stilleri
const styles = {
  container: { maxWidth: "800px", margin: "0 auto", padding: "20px", textAlign: "center" },
  title: { fontSize: "32px", color: "#1E293B", marginBottom: "20px" },
  listContainer: { marginBottom: "20px" },
  listItem: {
    display: "flex", // Yazar bilgilerini yatay hizalar
    justifyContent: "space-between", // Elemanlar arasına boşluk bırakır
    alignItems: "center", // Dikey hizalamayı ortalar
    backgroundColor: "#F8FAFC", // Arka plan rengini açık gri yapar
    padding: "10px 15px", // Elemanlar için iç boşluk
    borderRadius: "5px", // Köşeleri yuvarlar
    marginBottom: "10px", // Alt boşluk ekler
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Hafif gölge ekler
  },
  buttonGroup: { display: "flex", gap: "10px" }, // Butonlar arasına boşluk ekler
  button: {
    backgroundColor: "#3B82F6", // Butonun arka plan rengini mavi yapar
    color: "#fff", // Yazı rengini beyaz yapar
    border: "none", // Kenarlık kaldırılır
    borderRadius: "5px", // Köşeleri yuvarlar
    padding: "5px 10px", // İç boşluk ekler
    cursor: "pointer", // Butona fare işaretçisi ekler
    fontSize: "14px", // Yazı boyutunu belirler
    transition: "background-color 0.3s", // Arka plan rengi geçiş animasyonu
  },
  deleteButton: {
    backgroundColor: "#EF4444", // Silme butonunun rengini kırmızı yapar
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
  },
  formContainer: {
    display: "flex", // Formu yatay hizalar
    justifyContent: "center",
    alignItems: "center",
    gap: "10px", // Elemanlar arasına boşluk ekler
  },
  input: {
    padding: "10px", // Girdiye iç boşluk ekler
    width: "300px", // Girdinin genişliğini belirler
    borderRadius: "5px", // Köşeleri yuvarlar
    border: "1px solid #CBD5E1", // Kenarlık rengi belirler
    fontSize: "14px",
  },
  addButton: {
    backgroundColor: "#10B981", // Buton rengini yeşil yapar
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
};

export default Author; // Author bileşenini dışa aktarır
