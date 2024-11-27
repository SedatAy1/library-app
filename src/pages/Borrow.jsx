import React, { useState } from "react";
import Swal from "sweetalert2"; // SweetAlert2 kütüphanesi pop-up mesajlar için kullanılıyor
import withReactContent from "sweetalert2-react-content"; // SweetAlert2'yi React ile entegre etmek için

const MySwal = withReactContent(Swal); // SweetAlert2 React uyumlu sürümünü kullanıma alıyoruz

const Borrow = () => {
  // Ödünç alma işlemlerini ve yeni ödünç alma bilgilerini yönetmek için state tanımlamaları
  const [borrows, setBorrows] = useState([
    {
      id: 1,
      book: "1984",
      user: "Ali Yılmaz",
      borrowDate: "2024-11-01", // Ödünç alım tarihi
      returnDate: "2024-11-10", // İade tarihi
    },
    {
      id: 2,
      book: "Savaş ve Barış",
      user: "Ayşe Kaya",
      borrowDate: "2024-11-05",
      returnDate: "2024-11-15",
    },
    { id: 3, book: "Suç ve Ceza", user: "Mert Aydın", borrowDate: "2024-11-10", returnDate: "2024-11-25" },
    { id: 4, book: "Hayvan Çiftliği", user: "Zeynep Koç", borrowDate: "2024-11-12", returnDate: "2024-11-26" },
    { id: 5, book: "Körlük", user: "Ahmet Şen", borrowDate: "2024-11-15", returnDate: "2024-11-30" }, 
  ]);

  const [newBorrow, setNewBorrow] = useState({
    book: "", // Yeni ödünç alınan kitap adı
    user: "", // Ödünç alan kullanıcının adı
    borrowDate: "", // Alım tarihi
    returnDate: "", // İade tarihi
  });

  // Yeni bir ödünç alma işlemi ekleme fonksiyonu
  const addBorrow = () => {
    // Formdaki tüm alanlar doldurulmuş mu kontrolü
    if (
      newBorrow.book.trim() === "" ||
      newBorrow.user.trim() === "" ||
      newBorrow.borrowDate.trim() === "" ||
      newBorrow.returnDate.trim() === ""
    ) {
      MySwal.fire({
        icon: "error", // Hata simgesi göster
        title: "Hata!", // Başlık
        text: "Tüm alanları doldurmanız gerekiyor!", // Kullanıcıya bilgi mesajı
      });
      return;
    }

    // Yeni ödünç işlemi için ID belirleme (mevcut en son ID + 1)
    const newId = borrows.length ? borrows[borrows.length - 1].id + 1 : 1;

    // Yeni ödünç işlemini mevcut listeye ekleme
    setBorrows([...borrows, { id: newId, ...newBorrow }]);

    // Formdaki alanları temizleme
    setNewBorrow({ book: "", user: "", borrowDate: "", returnDate: "" });

    // Başarı mesajı gösterme
    MySwal.fire({
      icon: "success", // Başarı simgesi
      title: "Başarılı!", // Başlık
      text: "Kitap başarıyla ödünç alındı!", // Kullanıcıya başarı mesajı
    });
  };

  // Ödünç alma işlemini silme fonksiyonu
  const deleteBorrow = (id) => {
    MySwal.fire({
      title: "Emin misiniz?", // Kullanıcıdan onay almak için başlık
      text: "Bu işlem geri alınamaz!", // İşlemin geri döndürülemeyeceğini belirtir
      icon: "warning", // Uyarı simgesi
      showCancelButton: true, // İptal butonu göster
      confirmButtonColor: "#d33", // Onay butonu rengi (kırmızı)
      cancelButtonColor: "#3085d6", // İptal butonu rengi (mavi)
      confirmButtonText: "Evet, sil!", // Onay butonu yazısı
      cancelButtonText: "Hayır, iptal!", // İptal butonu yazısı
    }).then((result) => {
      if (result.isConfirmed) { // Eğer kullanıcı onay verdiyse
        setBorrows(borrows.filter((borrow) => borrow.id !== id)); // İlgili işlemi listeden çıkar
        MySwal.fire("Silindi!", "Ödünç alma işlemi silindi.", "success"); // Silme işlemi başarılı mesajı
      }
    });
  };

  // Ödünç alma işlemini güncelleme fonksiyonu
  const updateBorrow = (id) => {
    // Güncellenecek ödünç alma işlemine ulaşma
    const currentBorrow = borrows.find((borrow) => borrow.id === id);

    // Kitap adı güncelleme formu
    MySwal.fire({
      title: "Yeni Kitap Adını Girin", // Kullanıcıya bilgi mesajı
      input: "text", // Giriş alanı tipi metin
      inputValue: currentBorrow.book, // Varsayılan olarak mevcut kitap adı
      inputPlaceholder: "Kitap Adı", // Giriş alanı için ipucu metin
      showCancelButton: true, // İptal butonu göster
      confirmButtonText: "Kaydet", // Kaydet butonu yazısı
      cancelButtonText: "İptal", // İptal butonu yazısı
    }).then((resultBook) => {
      if (resultBook.isConfirmed && resultBook.value.trim() !== "") { // Kullanıcı giriş yaptı ve onayladıysa
        // Kullanıcı adı güncelleme formu
        MySwal.fire({
          title: "Yeni Kullanıcı Adını Girin",
          input: "text",
          inputValue: currentBorrow.user,
          inputPlaceholder: "Kullanıcı Adı",
          showCancelButton: true,
          confirmButtonText: "Kaydet",
          cancelButtonText: "İptal",
        }).then((resultUser) => {
          if (resultUser.isConfirmed && resultUser.value.trim() !== "") {
            // Alım tarihi güncelleme formu
            MySwal.fire({
              title: "Yeni Alım Tarihini Girin",
              input: "date",
              inputValue: currentBorrow.borrowDate,
              showCancelButton: true,
              confirmButtonText: "Kaydet",
              cancelButtonText: "İptal",
            }).then((resultBorrowDate) => {
              if (resultBorrowDate.isConfirmed && resultBorrowDate.value.trim() !== "") {
                // İade tarihi güncelleme formu
                MySwal.fire({
                  title: "Yeni İade Tarihini Girin",
                  input: "date",
                  inputValue: currentBorrow.returnDate,
                  showCancelButton: true,
                  confirmButtonText: "Kaydet",
                  cancelButtonText: "İptal",
                }).then((resultReturnDate) => {
                  if (resultReturnDate.isConfirmed && resultReturnDate.value.trim() !== "") {
                    // Güncellenmiş bilgileri listeye kaydet
                    setBorrows(
                      borrows.map((borrow) =>
                        borrow.id === id
                          ? {
                              ...borrow,
                              book: resultBook.value,
                              user: resultUser.value,
                              borrowDate: resultBorrowDate.value,
                              returnDate: resultReturnDate.value,
                            }
                          : borrow
                      )
                    );
                    MySwal.fire("Başarılı!", "Ödünç alma işlemi güncellendi.", "success");
                  }
                });
              }
            });
          }
        });
      }
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Kitap Alma Yönetimi</h1>

      {/* Mevcut ödünç alma işlemlerini listeleme */}
      <div style={styles.listContainer}>
        {borrows.map((borrow) => (
          <div key={borrow.id} style={styles.listItem}>
            {/* Her bir ödünç alma işlemi için detaylar */}
            <span>
              {borrow.book} - {borrow.user} | Alım: {borrow.borrowDate} | İade: {borrow.returnDate}
            </span>
            <div style={styles.buttonGroup}>
              {/* Güncelleme ve silme butonları */}
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

      {/* Yeni ödünç alma formu */}
      <div style={styles.formContainer}>
        {/* Kitap adı giriş alanı */}
        <input
          type="text"
          value={newBorrow.book}
          placeholder="Kitap Adı"
          onChange={(e) => setNewBorrow({ ...newBorrow, book: e.target.value })}
          style={styles.input}
        />
        {/* Kullanıcı adı giriş alanı */}
        <input
          type="text"
          value={newBorrow.user}
          placeholder="Kullanıcı Adı"
          onChange={(e) => setNewBorrow({ ...newBorrow, user: e.target.value })}
          style={styles.input}
        />
        {/* Ödünç alım tarihi giriş alanı */}
        <input
          type="date"
          value={newBorrow.borrowDate}
          onChange={(e) => setNewBorrow({ ...newBorrow, borrowDate: e.target.value })}
          style={styles.input}
        />
        {/* İade tarihi giriş alanı */}
        <input
          type="date"
          value={newBorrow.returnDate}
          onChange={(e) => setNewBorrow({ ...newBorrow, returnDate: e.target.value })}
          style={styles.input}
        />
        {/* Yeni ödünç alma ekleme butonu */}
        <button style={styles.addButton} onClick={addBorrow}>
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
    width: "200px",
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

export default Borrow; // Borrow bileşenini dışa aktarır
