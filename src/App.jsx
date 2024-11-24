import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Publisher from "./pages/Publisher";
import Category from "./pages/Category";
import Book from "./pages/Book";
import Author from "./pages/Author";
import Borrow from "./pages/Borrow";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publisher" element={<Publisher />} />
          <Route path="/category" element={<Category />} />
          <Route path="/book" element={<Book />} />
          <Route path="/author" element={<Author />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/publisher" element={<Publisher />} />
          <Route path="/category" element={<Category />} />
          <Route path="/book" element={<Book />} />
          <Route path="/author" element={<Author />} />
          <Route path="/borrow" element={<Borrow />} />




        </Routes>
      </div>
    </Router>
  );
};

export default App;
