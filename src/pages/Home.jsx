import React from "react";
import logo from "../assets/library-logo.png";

const Home = () => {
  return (
    <div style={styles.container}>
      <img src={logo} alt="Library Logo" style={styles.logo} />
      <h1 style={styles.title}>Hoş Geldiniz!</h1>
      <p style={styles.description}>
      Kütüphane dünyasına hoş geldiniz! Üst menüyü keşfederek bilgiye açılan kapıları aralayabilir, kitaplarla dolu bir yolculuğa çıkabilirsiniz. Hadi, keşfetmeye başlayın!
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #1E293B, #3B82F6)",
    color: "#fff",
    textAlign: "center",
  },
  logo: {
    width: "200px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "18px",
    maxWidth: "600px",
    lineHeight: "1.5",
  },
};

export default Home;
