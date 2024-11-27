import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router bileşenlerini içe aktarır
import Home from "./pages/Home"; // Ana sayfa bileşenini içe aktarır
import Publisher from "./pages/Publisher"; // Yayımcı yönetimi bileşenini içe aktarır
import Category from "./pages/Category"; // Kategori yönetimi bileşenini içe aktarır
import Book from "./pages/Book"; // Kitap yönetimi bileşenini içe aktarır
import Author from "./pages/Author"; // Yazar yönetimi bileşenini içe aktarır
import Borrow from "./pages/Borrow"; // Kitap ödünç alma yönetimi bileşenini içe aktarır

const App = () => {
  return (
    <Router> {/* Tüm yönlendirme işlemlerini sağlayan Router bileşeni */}
      <div>
        <Routes> {/* Tüm sayfa yollarını ve bileşenlerini tanımlayan Routes bileşeni */}
          {/* Ana sayfa */}
          <Route path="/" element={<Home />} />
          {/* Yayımcı yönetim sayfası */}
          <Route path="/publisher" element={<Publisher />} />
          {/* Kategori yönetim sayfası */}
          <Route path="/category" element={<Category />} />
          {/* Kitap yönetim sayfası */}
          <Route path="/book" element={<Book />} />
          {/* Yazar yönetim sayfası */}
          <Route path="/author" element={<Author />} />
          {/* Kitap ödünç alma yönetim sayfası */}
          <Route path="/borrow" element={<Borrow />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; // App bileşenini dışa aktarır
