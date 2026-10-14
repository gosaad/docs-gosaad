# Panduan Penggunaan GoSAAD

Proyek ini menyediakan dokumentasi cara menggunakan GoSAAD untuk pengguna aplikasi. Fokusnya adalah tampilan, navigasi, dan alur penggunaan (UI/UX).

## Sumber panduan

Proyek aplikasi GoSAAD berada di:

```text
/Users/ars313/Data/Go/Gin/projects/prodGoSAAD
```

Gunakan tampilan aplikasi sebagai sumber utama: halaman, label menu, tombol, formulir, pesan validasi, serta hasil dari tindakan pengguna. Kode antarmuka di `webadmin/` dapat diperiksa untuk memastikan label dan perilaku yang terlihat oleh pengguna.

## Ruang lingkup konten

- Jelaskan tujuan fitur, siapa yang dapat mengaksesnya jika sudah terverifikasi, dan langkah penggunaannya.
- Susun langkah berdasarkan tugas pengguna, dengan nama menu dan tombol sesuai tampilan aplikasi.
- Sertakan hasil yang diharapkan, pesan validasi, serta cara mengatasi kendala melalui UI.
- Gunakan tangkapan layar yang relevan dengan data contoh; samarkan data pribadi dan rahasia.
- Tulis dalam Bahasa Indonesia yang mudah dipahami pengguna nonteknis.

Arsitektur sistem, endpoint API, database, kode backend, deployment, dan konfigurasi infrastruktur berada di luar cakupan panduan pengguna. Jangan menyimpulkan alur atau hak akses yang belum diperiksa dari UI.

Halaman pengenalan GoSAAD sudah menjadi titik masuk panduan. Konten tutorial bawaan yang masih berada di `docs/tutorial-*` adalah sisa template dan tidak muncul di navigasi; jangan gunakan sebagai panduan penggunaan GoSAAD. Ganti atau hapus konten tersebut saat panduan fiturnya tersedia dan sudah diverifikasi dari UI.

## Menjalankan situs dokumentasi

Situs ini menggunakan Docusaurus dan membutuhkan Node.js versi 20 atau lebih baru.

```bash
npm install
npm start
```

Buka [http://localhost:4000](http://localhost:4000). Port default proyek adalah **4000**.

Untuk membuat dan melihat hasil build:

```bash
npm run build
npm run serve
```

Preview hasil build juga menggunakan [http://localhost:4000](http://localhost:4000). Jalankan development server dan preview secara bergantian karena keduanya memakai port yang sama.

Pemeriksaan TypeScript:

```bash
npm run typecheck
```
