# SkinCheck AI  
Aplikasi Deteksi Penyakit Kulit Berbasis Artificial Intelligence

SkinCheck AI merupakan aplikasi berbasis Artificial Intelligence (AI) yang digunakan untuk mendeteksi penyakit kulit berdasarkan citra/gambar kulit. Aplikasi ini memanfaatkan model Deep Learning berbasis Convolutional Neural Network (CNN) untuk melakukan klasifikasi penyakit kulit dan menampilkan tiga hasil prediksi teratas (Top-3 Prediction) beserta tingkat kepercayaannya (confidence score).

Aplikasi dikembangkan dalam bentuk web application dengan arsitektur client-server, menggunakan FastAPI sebagai backend dan React sebagai frontend.

---

## Tujuan Pengembangan
Tujuan dari pengembangan aplikasi SkinCheck AI adalah:
1. Mengimplementasikan konsep Deep Learning dalam bidang kesehatan, khususnya dermatologi.
2. Membangun sistem klasifikasi penyakit kulit berbasis citra digital.
3. Mengintegrasikan model AI dengan aplikasi web menggunakan REST API.
4. Menyajikan hasil prediksi AI secara informatif dan mudah dipahami oleh pengguna.

---

## 1. Project Introduction
### Profil Proyek
- **Nama Proyek:** SkinCheck AI  
- **Jenis Proyek:** Machine Learning & Web Application  
- **Bidang:** Artificial Intelligence – Healthcare  
- **Tujuan Utama:**  
  Mengembangkan sistem skrining awal penyakit kulit berbasis citra menggunakan Deep Learning sebagai decision support system.

---

## 2. Project Scope Management
### Ruang Lingkup Proyek
**Termasuk dalam ruang lingkup:**
- Pengumpulan dan persiapan dataset citra kulit
- Pengembangan model CNN untuk klasifikasi penyakit kulit
- Pengembangan backend FastAPI
- Pengembangan frontend React
- Integrasi model AI ke sistem web
- Pengujian dan deployment sistem

**Di luar ruang lingkup:**
- Diagnosis medis klinis
- Validasi dokter spesialis
- Aplikasi mobile native
- Maintenance jangka panjang

---

## 3. Project Time / Schedule Management
### Manajemen Waktu
- Metode penjadwalan menggunakan **Gantt Chart**
- Tools: Gantt Project
- Fase utama:
  1. Initiation & Requirement
  2. Data Preparation
  3. Model Development
  4. Web Development & Integration
  5. Testing & Deployment
- Durasi proyek ± 5–6 minggu

---

## 4. Project Cost Management
### Estimasi Biaya Proyek
- **Total Anggaran:** ± Rp3.000.000
- Komponen biaya:
  - Komputasi GPU & cloud storage
  - Hosting & domain
  - Internet dan kebutuhan operasional
- Tidak ada biaya tenaga kerja (proyek akademik)
- Pengendalian biaya menggunakan pendekatan **Earned Value Management (EVM)**

---

## 5. Project Stakeholder Management
### Stakeholder Utama
- **Project Sponsor:** Dosen Pembimbing
- **Project Manager:** Mahasiswa
- **Project Team:** Tim Pengembang
- **User:** Pengguna uji coba aplikasi

Strategi pengelolaan stakeholder dilakukan melalui komunikasi rutin dan evaluasi berkala.

---

## 6. Project Quality Management
### Standar Kualitas

| Proses | Kriteria Penerimaan | Waktu Penilaian |
|------|-------------------|----------------|
| Training Model | Akurasi sesuai target | Setelah training |
| Sistem Web | Fitur berjalan normal | Functional testing |
| UI/UX | Mudah digunakan | Usability testing |
| Deployment | Sistem stabil | Pasca deployment |

---

## 7. Project Human Resource Management
### Struktur Tim
- Project Manager (1 orang)
- Data Scientist / ML Engineer (2 orang)
- Web Developer (1 orang)

Pembagian peran mengikuti prinsip RACI untuk memastikan tanggung jawab jelas.

---

## 8. Project Communication Management
### Jalur Komunikasi
- Internal Tim: WhatsApp / Discord (harian)
- Meeting Formal: Google Meet (mingguan)
- Dokumentasi: GitHub & Google Drive
- PIC Komunikasi: Project Manager

---

## 9. Project Risk Management
### Identifikasi Risiko
| Risiko | Dampak | Mitigasi |
|------|-------|---------|
| Dataset tidak seimbang | Model bias | Data augmentation |
| Training lama | Keterlambatan | Optimasi model |
| Bug integrasi | Sistem gagal | Testing bertahap |

---

## 10. Project Procurement Management
### Pengadaan
- Cloud GPU (jika diperlukan)
- Hosting & domain
- Seluruh pengadaan berskala kecil dan non-outsourcing

---

## Ruang Lingkup Aplikasi
Ruang lingkup aplikasi SkinCheck AI meliputi:
- Input berupa gambar kulit dalam format JPG atau PNG.
- Proses prediksi penyakit kulit menggunakan model CNN.
- Output berupa tiga kelas penyakit kulit dengan probabilitas tertinggi.
- Aplikasi bersifat pendukung (decision support) dan tidak menggantikan diagnosis medis profesional.

---

## Arsitektur Sistem
Aplikasi SkinCheck AI menggunakan arsitektur client-server. Pengguna mengunggah gambar melalui frontend React, kemudian gambar dikirim ke backend FastAPI untuk dilakukan preprocessing dan inferensi model CNN. Backend akan mengembalikan hasil prediksi ke frontend dalam format JSON.

### Alur Kerja Sistem
1. User mengunggah gambar melalui frontend.
2. Frontend mengirim gambar ke backend menggunakan metode POST.
3. Backend melakukan preprocessing citra.
4. Backend menjalankan inferensi model CNN.
5. Backend mengembalikan Top-3 hasil prediksi.
6. Frontend menampilkan hasil prediksi kepada user.

---

## Model Artificial Intelligence
Model yang digunakan adalah Convolutional Neural Network (CNN) yang dilatih menggunakan dataset citra penyakit kulit. Model ini menghasilkan probabilitas untuk setiap kelas penyakit dan menampilkan tiga prediksi teratas berdasarkan confidence score.

---

## Teknologi yang Digunakan
- Backend: FastAPI, Python
- Frontend: React, JavaScript
- AI/ML: CNN (TensorFlow / PyTorch)
- Deployment: Local / Cloud
- Tools: GitHub, Google Colab

---

## Catatan Penting
Aplikasi SkinCheck AI dikembangkan untuk keperluan akademik dan penelitian. Hasil prediksi bersifat informatif dan tidak dimaksudkan sebagai pengganti diagnosis medis profesional.

---

## Tim Pengembang
- Project Manager: Febycandra Carmelinda Ximenes  
- Team Members:
  - Asyifa Izayani Safari
  - M Pandu Prapyusta
  - Fadiya Zahra Qatranada
  - Febycandra Carmelinda Ximenes
