import React, { useState } from "react";
import Swal from "sweetalert2"; // Kullanıcıya mesaj göstermek için kullanılan kütüphane
import withReactContent from "sweetalert2-react-content"; // SweetAlert2'yi React ile uyumlu hale getirir

const MySwal = withReactContent(Swal); // SweetAlert2'nin React versiyonunu kullanıyoruz

const Publisher = () => {
  // Yayımcı listesi state'i, başlangıç değerinde bazı yayımcılar mevcut
  const [publishers, setPublishers] = useState([
    { id: 1, name: "Penguin Books" }, // Penguin Books yayınevi
    { id: 2, name: "HarperCollins" }, // HarperCollins yayınevi
    { id: 3, name: "Random House" }, // Random House yayınevi
    { id: 4, name: "Simon & Schuster" }, // Simon & Schuster yayınevi
    { id: 5, name: "Macmillan Publishers" }, // Macmillan Publishers yayınevi
  ]);

  // Yeni yayınevi adını saklamak için kullanılan state
  const [newPublisher, setNewPublisher] = useState("");

  // Yeni yayınevi ekleme fonksiyonu
  const addPublisher = () => {
    // Eğer yeni yayınevi adı boşsa hata mesajı göster
    if (newPublisher.trim() === "") {
      MySwal.fire({
        icon: "error", // Hata simgesi
        title: "Hata!", // Hata başlığı
        text: "Yayımcı adı boş olamaz!", // Kullanıcıya hata mesajı
      });
      return;
    }

    // Yeni yayınevi için benzersiz bir ID oluştur
    const newId = publishers.length ? publishers[publishers.length - 1].id + 1 : 1;

    // Yeni yayınevini mevcut listeye ekle
    setPublishers([...publishers, { id: newId, name: newPublisher }]);

    // Giriş kutusunu temizle
    setNewPublisher("");

    // Başarılı ekleme bildirimi göster
    MySwal.fire({
      icon: "success", // Başarı simgesi
      title: "Başarılı!", // Başlık
      text: "Yayımcı başarıyla eklendi!", // Kullanıcıya başarı mesajı
    });
  };

  // Yayınevi silme fonksiyonu
  const deletePublisher = (id) => {
    // Kullanıcıdan silme işlemi için onay al
    MySwal.fire({
      title: "Emin misiniz?", // Onay başlığı
      text: "Bu işlem geri alınamaz!", // İşlemin geri döndürülemeyeceğini belirt
      icon: "warning", // Uyarı simgesi
      showCancelButton: true, // İptal butonu göster
      confirmButtonColor: "#d33", // Onay butonu rengi (kırmızı)
      cancelButtonColor: "#3085d6", // İptal butonu rengi (mavi)
      confirmButtonText: "Evet, sil!", // Onay butonu metni
      cancelButtonText: "Hayır, iptal!", // İptal butonu metni
    }).then((result) => {
      if (result.isConfirmed) {
        // Eğer kullanıcı onay verdiyse yayınevini listeden çıkar
        setPublishers(publishers.filter((publisher) => publisher.id !== id));
        // Başarılı silme bildirimi göster
        MySwal.fire("Silindi!", "Yayımcı başarıyla silindi.", "success");
      }
    });
  };

  // Yayınevi güncelleme fonksiyonu
  const updatePublisher = (id) => {
    // Kullanıcıdan yeni yayınevi adını almak için bir giriş kutusu göster
    MySwal.fire({
      title: "Yeni Yayımcı Adını Girin", // Giriş kutusunun başlığı
      input: "text", // Giriş türü metin
      inputPlaceholder: "Yeni Yayımcı Adı", // Giriş kutusunun açıklama metni
      showCancelButton: true, // İptal butonu göster
      confirmButtonText: "Kaydet", // Onay butonu metni
      cancelButtonText: "İptal", // İptal butonu metni
    }).then((result) => {
      if (result.isConfirmed && result.value.trim() !== "") {
        // Eğer kullanıcı onay verdi ve giriş yaptıysa, yayınevini güncelle
        setPublishers(
          publishers.map((publisher) =>
            publisher.id === id ? { ...publisher, name: result.value } : publisher
          )
        );
        // Başarılı güncelleme bildirimi göster
        MySwal.fire("Başarılı!", "Yayımcı başarıyla güncellendi.", "success");
      }
    });
  };

  return (
    <div style={styles.container}>
      {/* Başlık */}
      <h1 style={styles.title}>Yayımcı Yönetimi</h1>

      {/* Yayınevlerinin listelendiği alan */}
      <div style={styles.listContainer}>
        {publishers.map((publisher) => (
          <div key={publisher.id} style={styles.listItem}>
            {/* Yayınevi adı */}
            <span>{publisher.name}</span>
            <div style={styles.buttonGroup}>
              {/* Güncelleme butonu */}
              <button style={styles.button} onClick={() => updatePublisher(publisher.id)}>
                Güncelle
              </button>
              {/* Silme butonu */}
              <button style={styles.deleteButton} onClick={() => deletePublisher(publisher.id)}>
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Yeni yayınevi ekleme formu */}
      <div style={styles.formContainer}>
        {/* Yeni yayınevi adı için giriş kutusu */}
        <input
          type="text"
          value={newPublisher} // Giriş alanı değeri
          placeholder="Yeni Yayımcı Adı" // Giriş kutusu için ipucu metni
          onChange={(e) => setNewPublisher(e.target.value)} // Kullanıcı giriş yaptığında state'i günceller
          style={styles.input}
        />
        {/* Ekleme butonu */}
        <button style={styles.addButton} onClick={addPublisher}>
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

export default Publisher; // Publisher bileşenini dışa aktarır
