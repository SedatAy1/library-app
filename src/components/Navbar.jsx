import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/library-logo.png"; // Logonun doğru yolda olduğundan emin olun

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <Link to="/" style={styles.logoLink}>
          <img src={logo} alt="Library Logo" style={styles.logo} />
          <h2 style={styles.logoText}>Library App</h2>
        </Link>
      </div>
      <ul style={styles.navList}>
        <li>
          <Link to="/" style={styles.navLink}>
            Ana Sayfa
          </Link>
        </li>
        <li>
          <Link to="/publisher" style={styles.navLink}>
            Yayımcı
          </Link>
        </li>
        <li>
          <Link to="/category" style={styles.navLink}>
            Kategori
          </Link>
        </li>
        <li>
          <Link to="/book" style={styles.navLink}>
            Kitap
          </Link>
        </li>
        <li>
          <Link to="/author" style={styles.navLink}>
            Yazar
          </Link>
        </li>
        <li>
          <Link to="/borrow" style={styles.navLink}>
            Kitap Alma
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#1E293B",
    color: "#fff",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none", // Link alt çizgisini kaldırır
    color: "#fff", // Yazı rengi
  },
  logo: {
    height: "50px",
    marginRight: "10px",
  },
  logoText: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    gap: "15px",
  },
  navLink: {
    textDecoration: "none",
    color: "#61DAFB",
    fontSize: "18px",
    transition: "color 0.3s",
  },
  navLinkHover: {
    color: "#FFD700",
  },
};

export default Navbar;
