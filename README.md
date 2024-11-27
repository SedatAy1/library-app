Kütüphane Uygulaması (Library Application)


Proje Canlı Linki  -->  https://singular-druid-829d13.netlify.app




Açıklama
Bu proje, React ile geliştirilmiş bir kütüphane uygulamasıdır. Kullanıcılar kitap, yazar, kategori ve yayımları yönetebilir ve kitap alma işlemlerini gerçekleştirebilir. CRUD işlemleri her sayfada uygulanabilir şekilde tasarlanmıştır. Uygulama, modern bir tasarım ve kullanıcı dostu bir arayüz sunar. Backend ve veritabanı, Docker kullanılarak entegre edilmiştir.

Özellikler


React Router kullanılarak tek sayfa uygulaması (SPA) tasarımı.
CRUD İşlemleri:

Yayımcı Yönetimi

Kategori Yönetimi

Kitap Yönetimi

Yazar Yönetimi

Kitap Alma İşlemleri

Hata durumlarında kullanıcı dostu bilgilendirme mesajları (alert dışında modern yöntemler).
Tasarım Teknolojileri: CSS, Tailwind, Material veya Bootstrap.
Backend Entegrasyonu: Canlı veritabanı ile iletişim kurar.
Teknolojiler

Frontend: React, React Router

Backend: Node.js

Veritabanı: Canlı veritabanı

Araçlar: Docker, Docker Compose, Postman
HTTP İstemcisi: Axios veya Fetch API

Kurulum ve Kullanım

Depoyu Klonlayın:

git clone <repository-url>

cd library-app

Bağımlılıkları Yükleyin:

npm install

Backend ve Veritabanını Başlatın:

Docker kullanarak backend'i ve veritabanını çalıştırın:

docker-compose up -d

Frontend'i Başlatın:

npm start

Uygulamayı Açın:

Tarayıcınızda http://localhost:3000 adresini ziyaret edin.

Sayfalar ve Kullanım

Giriş Sayfası: Kullanıcıyı karşılayan ana sayfa.

Yayımcı Yönetimi: Yayımcı ekleme, düzenleme, listeleme ve silme işlemleri.

Kategori Yönetimi: Yeni kategoriler oluşturma ve mevcutları düzenleme.

Kitap Yönetimi: Kitap ekleme, düzenleme, listeleme ve silme işlemleri.

Yazar Yönetimi: Yazarlar üzerinde CRUD işlemleri yapma.

Kitap Alma İşlemleri: Kitap ödünç alma ve iade işlemlerini yönetme.

Örnek Veri

Her bir CRUD işlemini test etmek için başlangıçta her sayfada 5 örnek veri bulunmaktadır.

Geliştirici Notları

Proje responsive olmayacak şekilde tasarlanmıştır.

Backend localhost:3100 portunda, veritabanı ise localhost:5100 portunda çalışmaktadır.

CRUD işlemleri için kullanıcı geri bildirimleri modern yöntemlerle yapılmaktadır.





Library Application

Description

This project is a library application developed with React. Users can manage books, authors, categories, and publishers and perform book borrowing operations. CRUD operations are implemented on each page. The application provides a modern design and a user-friendly interface. The backend and database are integrated using Docker.

Features

Single Page Application (SPA) design using React Router.

CRUD Operations:

Publisher Management

Category Management

Book Management

Author Management

Book Borrowing Operations

User-friendly error handling (using modern methods instead of alerts).

Styling Options: CSS, Tailwind, Material, or Bootstrap.

Backend Integration: Connected to a live database.

Technologies

Frontend: React, React Router

Backend: Node.js

Database: Live database

Tools: Docker, Docker Compose, Postman

HTTP Client: Axios or Fetch API

Setup and Usage

Clone the Repository:

git clone <repository-url>

cd library-app

Install Dependencies:

npm install

Start Backend and Database:

Run the backend and database using Docker:

docker-compose up -d

Start Frontend:

npm start

Open the Application:

Visit http://localhost:3000 in your browser.

Pages and Usage

Home Page: A welcome page for the users.

Publisher Management: Add, edit, list, and delete publishers.

Category Management: Create and manage categories.

Book Management: Add, edit, list, and delete books.

Author Management: Perform CRUD operations for authors.

Book Borrowing: Manage book borrowing and returning operations.

Sample Data

Each page contains 5 example records initially for testing CRUD operations.


Developer Notes


The project is designed to be non-responsive.

The backend runs on localhost:3100 and the database on localhost:5100.

CRUD operations include user-friendly feedback using modern methods.
