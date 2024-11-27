import React from "react";

// Footer bileşenini oluşturuyoruz
const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Footer içinde gösterilecek metin */}
      <p style={styles.text}>Tüm Hakları Saklıdır - Kütüphane Uygulaması</p>
    </footer>
  );
};

// Stil objesi
const styles = {
  footer: {
    position: "fixed", // Footer'u sayfanın altında sabitlemek için
    bottom: 0, // Footer'u sayfanın en altına yerleştirir
    left: 0, // Footer'un sol hizasını belirler
    width: "100%", // Footer'un genişliğini tam sayfa yapar
    backgroundColor: "#1E293B", // Footer'un arka plan rengini koyu mavi tonunda yapar
    color: "#ffffff", // Yazı rengini beyaz yapar
    textAlign: "center", // Metni ortalar
    padding: "10px 0", // Üst ve alt boşluk ekler
  },
  text: {
    margin: 0, // Paragrafın dış boşluğunu sıfırlar
    fontSize: "14px", // Yazı boyutunu 14 piksel yapar
  },
};

export default Footer; // Footer bileşenini dışa aktarır
