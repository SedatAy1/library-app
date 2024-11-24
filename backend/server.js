const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// Express Uygulaması
const app = express();

// Middleware
app.use(cors()); // CORS izinleri
app.use(bodyParser.json()); // JSON verileri için body parser

// MongoDB Bağlantısı
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB bağlantısı başarılı!"))
  .catch((err) => {
    console.error("MongoDB bağlantı hatası:", err.message);
    process.exit(1); // Hata varsa uygulamayı durdur
  });

// Test Route
app.get("/", (req, res) => {
  res.send("API çalışıyor!");
});

// Kitap Rotaları
const bookRoutes = require("./routes/bookRoutes");
app.use("/api/books", bookRoutes);

// Hataları Yakalamak İçin Genel Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Bir şeyler ters gitti!");
});

// Sunucuyu Başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor`));
