import React, { useState } from "react";
import Swal from "sweetalert2"; // Kullanıcıya bildirimler ve onay mesajları göstermek için kullanılan kütüphane
import withReactContent from "sweetalert2-react-content"; // SweetAlert2'yi React ile uyumlu hale getiren modül

const MySwal = withReactContent(Swal); // SweetAlert2'yi React ile entegre ediyoruz

const Category = () => {
  // Kategori listesi state'i, başlangıç değerinde bazı kategoriler mevcut
  const [categories, setCategories] = useState([
    { id: 1, name: "Roman" }, // Roman kategorisi
    { id: 2, name: "Bilim Kurgu" }, // Bilim kurgu kategorisi
    { id: 3, name: "Tarih" }, // Tarih kategorisi
    { id: 4, name: "Felsefe" }, // Felsefe kategorisi
    { id: 5, name: "Çocuk Kitapları" }, // Çocuk kitapları kategorisi
  ]);

  // Yeni kategori bilgisini saklamak için kullanılan state
  const [newCategory, setNewCategory] = useState("");

  // Yeni kategori ekleme fonksiyonu
  const addCategory = () => {
    // Eğer yeni kategori adı boşsa hata mesajı göster
    if (newCategory.trim() === "") {
      MySwal.fire({
        icon: "error", // Hata simgesi
        title: "Hata!", // Hata başlığı
        text: "Kategori adı boş olamaz!", // Hata mesajı
      });
      return;
    }

    // Yeni kategori için benzersiz bir ID oluştur
    const newId = categories.length ? categories[categories.length - 1].id + 1 : 1;

    // Yeni kategoriyi mevcut kategori listesine ekle
    setCategories([...categories, { id: newId, name: newCategory }]);

    // Giriş kutusunu temizle
    setNewCategory("");

    // Başarılı ekleme bildirimi göster
    MySwal.fire({
      icon: "success", // Başarı simgesi
      title: "Başarılı!", // Başlık
      text: "Kategori başarıyla eklendi!", // Başarı mesajı
    });
  };

  // Kategori silme fonksiyonu
  const deleteCategory = (id) => {
    // Kullanıcıdan silme işlemi için onay iste
    MySwal.fire({
      title: "Emin misiniz?", // Kullanıcıya işlem onayı sorusu
      text: "Bu işlem geri alınamaz!", // İşlemin geri döndürülemeyeceğini bildir
      icon: "warning", // Uyarı simgesi
      showCancelButton: true, // İptal butonu göster
      confirmButtonColor: "#d33", // Onay butonunun rengi (kırmızı)
      cancelButtonColor: "#3085d6", // İptal butonunun rengi (mavi)
      confirmButtonText: "Evet, sil!", // Onay butonu metni
      cancelButtonText: "Hayır, iptal!", // İptal butonu metni
    }).then((result) => {
      if (result.isConfirmed) {
        // Kullanıcı onay verdiyse kategoriyi sil
        setCategories(categories.filter((category) => category.id !== id));
        // Başarılı silme bildirimi göster
        MySwal.fire("Silindi!", "Kategori başarıyla silindi.", "success");
      }
    });
  };

  // Kategori güncelleme fonksiyonu
  const updateCategory = (id) => {
    // Kullanıcıdan yeni kategori adını almak için bir giriş kutusu göster
    MySwal.fire({
      title: "Yeni Kategori Adını Girin", // Giriş kutusunun başlığı
      input: "text", // Giriş türü metin
      inputPlaceholder: "Yeni Kategori Adı", // Giriş kutusunun açıklama metni
      showCancelButton: true, // İptal butonu göster
      confirmButtonText: "Kaydet", // Onay butonu metni
      cancelButtonText: "İptal", // İptal butonu metni
    }).then((result) => {
      if (result.isConfirmed && result.value.trim() !== "") {
        // Eğer kullanıcı onay verdi ve giriş yaptıysa, kategoriyi güncelle
        setCategories(
          categories.map((category) =>
            category.id === id ? { ...category, name: result.value } : category
          )
        );
        // Başarılı güncelleme bildirimi göster
        MySwal.fire("Başarılı!", "Kategori başarıyla güncellendi.", "success");
      }
    });
  };

  return (
    <div style={styles.container}>
      {/* Başlık */}
      <h1 style={styles.title}>Kategori Yönetimi</h1>

      {/* Kategorilerin listelendiği alan */}
      <div style={styles.listContainer}>
        {categories.map((category) => (
          <div key={category.id} style={styles.listItem}>
            {/* Kategori adı */}
            <span>{category.name}</span>
            <div style={styles.buttonGroup}>
              {/* Güncelleme butonu */}
              <button style={styles.button} onClick={() => updateCategory(category.id)}>
                Güncelle
              </button>
              {/* Silme butonu */}
              <button style={styles.deleteButton} onClick={() => deleteCategory(category.id)}>
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Yeni kategori ekleme formu */}
      <div style={styles.formContainer}>
        {/* Yeni kategori adı için giriş kutusu */}
        <input
          type="text"
          value={newCategory} // Giriş alanı değeri
          placeholder="Yeni Kategori Adı" // Giriş kutusu için ipucu metni
          onChange={(e) => setNewCategory(e.target.value)} // Kullanıcı giriş yaptığında state'i günceller
          style={styles.input}
        />
        {/* Ekleme butonu */}
        <button style={styles.addButton} onClick={addCategory}>
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
    display: "flex", // Elemanları yatay hizalar
    justifyContent: "space-between", // Elemanlar arasında boşluk bırakır
    alignItems: "center", // Elemanları dikey eksende ortalar
    backgroundColor: "#F8FAFC", // Arka plan rengini açık gri yapar
    padding: "10px 15px", // İç boşluk
    borderRadius: "5px", // Köşeleri yuvarlar
    marginBottom: "10px", // Alt boşluk ekler
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Hafif gölge efekti
  },
  buttonGroup: { display: "flex", gap: "10px" }, // Butonlar arasına boşluk ekler
  button: {
    backgroundColor: "#3B82F6", // Butonun arka plan rengini mavi yapar
    color: "#fff", // Yazı rengini beyaz yapar
    border: "none", // Kenarlık yok
    borderRadius: "5px", // Köşeleri yuvarlar
    padding: "5px 10px", // Buton iç boşluğu
    cursor: "pointer", // Fare imlecini gösterir
    fontSize: "14px", // Yazı boyutu
    transition: "background-color 0.3s", // Arka plan rengi değişimi animasyonu
  },
  deleteButton: {
    backgroundColor: "#EF4444", // Kırmızı arka plan rengi
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
  },
  formContainer: {
    display: "flex", // Form elemanlarını yatay hizalar
    justifyContent: "center", // Ortalar
    alignItems: "center", // Dikey eksende ortalar
    gap: "10px", // Elemanlar arasına boşluk bırakır
  },
  input: {
    padding: "10px", // İç boşluk
    width: "300px", // Genişlik
    borderRadius: "5px", // Köşeleri yuvarlar
    border: "1px solid #CBD5E1", // Gri kenarlık
    fontSize: "14px", // Yazı boyutu
  },
  addButton: {
    backgroundColor: "#10B981", // Yeşil arka plan rengi
    color: "#fff", // Yazı rengini beyaz yapar
    border: "none", // Kenarlık yok
    borderRadius: "5px", // Köşeleri yuvarlar
    padding: "10px 20px", // İç boşluk
    cursor: "pointer", // Fare imlecini gösterir
    fontSize: "16px", // Yazı boyutu
    transition: "background-color 0.3s", // Arka plan rengi değişimi animasyonu
  },
};

export default Category; // Category bileşenini dışa aktarır
