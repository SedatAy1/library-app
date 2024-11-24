import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>Tüm Hakları Saklıdır - Kütüphane Uygulaması</p>
    </footer>
  );
};

const styles = {
  footer: {
    position: "fixed", // Footer'u sabit bir konuma getirmek için
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#1E293B",
    color: "#ffffff",
    textAlign: "center",
    padding: "10px 0",
  },
  text: {
    margin: 0,
    fontSize: "14px",
  },
};

export default Footer;
