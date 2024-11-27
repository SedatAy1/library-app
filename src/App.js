import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router kullanımı için gerekli bileşenler
import Navbar from "./components/Navbar"; // Uygulamanın üst navigasyon barı
import Footer from "./components/Footer"; // Uygulamanın alt bilgi bileşeni
import Home from "./pages/Home"; // Ana sayfa bileşeni
import Publisher from "./pages/Publisher"; // Yayımcı yönetim sayfası bileşeni
import Category from "./pages/Category"; // Kategori yönetim sayfası bileşeni
import Book from "./pages/Book"; // Kitap yönetim sayfası bileşeni
import Author from "./pages/Author"; // Yazar yönetim sayfası bileşeni
import Borrow from "./pages/Borrow"; // Kitap ödünç alma yönetim sayfası bileşeni

const App = () => {
  return (
    <Router> {/* Uygulama genelinde yönlendirme sağlayan Router bileşeni */}
      <div>
        <Navbar /> {/* Tüm sayfalarda gösterilen üst menü */}
        <Routes> {/* Tüm sayfaların yollarını ve bileşenlerini tanımlayan Routes */}
          <Route path="/" element={<Home />} /> {/* Ana sayfa */}
          <Route path="/publisher" element={<Publisher />} /> {/* Yayımcı yönetim sayfası */}
          <Route path="/category" element={<Category />} /> {/* Kategori yönetim sayfası */}
          <Route path="/book" element={<Book />} /> {/* Kitap yönetim sayfası */}
          <Route path="/author" element={<Author />} /> {/* Yazar yönetim sayfası */}
          <Route path="/borrow" element={<Borrow />} /> {/* Kitap ödünç alma yönetim sayfası */}
        </Routes>
        <Footer /> {/* Tüm sayfalarda gösterilen alt bilgi */}
      </div>
    </Router>
  );
};

export default App; // App bileşenini dışa aktarır
