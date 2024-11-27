import React from "react";
import logo from "../assets/library-logo.png"; // Kütüphane logosunun dosya yolundan alınması

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Kütüphane logosunun ekranda gösterilmesi */}
      <img src={logo} alt="Library Logo" style={styles.logo} />
      {/* Hoş geldiniz başlığı */}
      <h1 style={styles.title}>Hoş Geldiniz!</h1>
      {/* Kütüphane tanıtım açıklaması */}
      <p style={styles.description}>
        Kütüphane dünyasına hoş geldiniz! Üst menüyü keşfederek bilgiye açılan kapıları
        aralayabilir, kitaplarla dolu bir yolculuğa çıkabilirsiniz. Hadi, keşfetmeye
        başlayın!
      </p>
    </div>
  );
};

const styles = {
  // Ana kapsayıcı stil
  container: {
    display: "flex", // Elemanları yatay ya da dikey hizalar
    flexDirection: "column", // Elemanların dikey olarak sıralanması
    alignItems: "center", // Elemanların yatay eksende ortalanması
    justifyContent: "center", // Elemanların dikey eksende ortalanması
    height: "100vh", // Tam ekran yüksekliği
    background: "linear-gradient(135deg, #1E293B, #3B82F6)", // Arka plan için degrade renk
    color: "#fff", // Yazı renginin beyaz olması
    textAlign: "center", // Yazıların ortalanması
  },
  // Logo stili
  logo: {
    width: "200px", // Logonun genişliği
    marginBottom: "20px", // Alt boşluk
  },
  // Başlık stili
  title: {
    fontSize: "36px", // Yazı boyutu
    fontWeight: "bold", // Kalın yazı stili
    marginBottom: "10px", // Başlık ve açıklama arasındaki boşluk
  },
  // Açıklama metni stili
  description: {
    fontSize: "18px", // Yazı boyutu
    maxWidth: "600px", // Yazının maksimum genişliği
    lineHeight: "1.5", // Satır aralığı
  },
};

export default Home; // Home bileşenini dışa aktarır
