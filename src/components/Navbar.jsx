import React from "react";
import { Link } from "react-router-dom"; // Sayfalar arası yönlendirme için Link bileşeni
import logo from "../assets/library-logo.png"; // Logonun doğru bir yolda olduğundan emin olun

const Navbar = () => {
  return (
    <nav style={styles.nav}> {/* Navbar ana konteyneri */}
      <div style={styles.logoContainer}> {/* Logo ve başlık alanı */}
        <Link to="/" style={styles.logoLink}> {/* Ana sayfaya yönlendiren logo */}
          <img src={logo} alt="Library Logo" style={styles.logo} /> {/* Logonun görüntülendiği alan */}
          <h2 style={styles.logoText}>Library App</h2> {/* Uygulama başlığı */}
        </Link>
      </div>
      <ul style={styles.navList}> {/* Navigasyon bağlantılarının listesi */}
        <li>
          <Link to="/" style={styles.navLink}> {/* Ana sayfa linki */}
            Ana Sayfa
          </Link>
        </li>
        <li>
          <Link to="/publisher" style={styles.navLink}> {/* Yayımcı sayfasına yönlendiren link */}
            Yayımcı
          </Link>
        </li>
        <li>
          <Link to="/category" style={styles.navLink}> {/* Kategori sayfasına yönlendiren link */}
            Kategori
          </Link>
        </li>
        <li>
          <Link to="/book" style={styles.navLink}> {/* Kitap sayfasına yönlendiren link */}
            Kitap
          </Link>
        </li>
        <li>
          <Link to="/author" style={styles.navLink}> {/* Yazar sayfasına yönlendiren link */}
            Yazar
          </Link>
        </li>
        <li>
          <Link to="/borrow" style={styles.navLink}> {/* Kitap alma sayfasına yönlendiren link */}
            Kitap Alma
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// CSS stillerini içeren JavaScript objesi
const styles = {
  nav: {
    display: "flex", // Navbar içindeki elemanları yatay hizalar
    alignItems: "center", // Elemanları dikey eksende ortalar
    justifyContent: "space-between", // Elemanlar arasında boşluk bırakır
    padding: "10px 20px", // Navbar içeriğine iç boşluk ekler
    background: "#1E293B", // Arka plan rengini koyu mavi yapar
    color: "#fff", // Yazı rengini beyaz yapar
  },
  logoContainer: {
    display: "flex", // Logo ve başlığı yatay hizalar
    alignItems: "center", // Dikey eksende ortalar
  },
  logoLink: {
    display: "flex", // Link içeriğini yatay hizalar
    alignItems: "center", // Dikey eksende ortalar
    textDecoration: "none", // Linkin alt çizgisini kaldırır
    color: "#fff", // Yazı rengini beyaz yapar
  },
  logo: {
    height: "50px", // Logonun yüksekliğini belirler
    marginRight: "10px", // Logonun sağ tarafına boşluk bırakır
  },
  logoText: {
    fontSize: "24px", // Yazı boyutunu belirler
    fontWeight: "bold", // Yazıyı kalın yapar
  },
  navList: {
    listStyleType: "none", // Liste işaretlerini kaldırır
    display: "flex", // Liste elemanlarını yatay hizalar
    gap: "15px", // Liste elemanları arasına boşluk bırakır
  },
  navLink: {
    textDecoration: "none", // Linklerin alt çizgisini kaldırır
    color: "#61DAFB", // Yazı rengini açık mavi yapar
    fontSize: "18px", // Yazı boyutunu belirler
    transition: "color 0.3s", // Renk değişimi için geçiş animasyonu ekler
  },
  navLinkHover: {
    color: "#FFD700", // Hover sırasında yazı rengini altın sarısı yapar (uygulanmamış ama referans bırakılmış)
  },
};

export default Navbar; // Navbar bileşenini dışa aktarır
