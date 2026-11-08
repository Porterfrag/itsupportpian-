# IT Support PIAN! — Website

Website satu halaman untuk jasa **IT Support PIAN!** (Banjarmasin).
Dibangun dengan [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).
Tanpa server, tanpa database — hasil akhirnya file statis yang bisa di-hosting gratis.

---

## 1. Cara menjalankan di komputer

```bash
cd website-pian
npm install      # sekali saja
npm run dev      # buka http://localhost:4321
```

Perintah lain:

```bash
npm run build    # menghasilkan folder dist/ (siap upload)
npm run preview  # cek hasil build secara lokal
```

---

## 2. Cara mengubah isi website

Hampir **semua teks, nomor WA, dan daftar layanan** ada di satu file:

```
src/data/site.ts
```

Di situ kamu bisa mengubah:

| Bagian | Keterangan |
| --- | --- |
| `site.waNumber` | Nomor WhatsApp format internasional, contoh `6281528493028` |
| `site.email`, `site.instagram` | Kontak lain |
| `site.area`, `site.hours` | Area layanan & jam buka |
| `site.url` | Domain final (untuk SEO). Sekarang: `https://itsupportpian.my.id` |
| `services` | 4 kartu layanan + template pesan WhatsApp-nya |
| `reasons` | Alasan "kenapa PIAN!" |
| `steps` | Langkah cara kerja |
| `portfolio` | Contoh hasil kerja |
| `testimonials` | Testimoni pelanggan |
| `faqs` | Pertanyaan yang sering ditanya |

### Halaman layanan (landing page SEO)

Halaman per kata kunci ada di file terpisah:

```
src/data/layanan.ts
```

Satu objek = satu halaman di `/layanan/<slug>/`. Tambah objek baru di situ, halaman
dan sitemap ikut terbuat otomatis. Setiap halaman punya judul, deskripsi, gejala,
lingkup pengerjaan, area, dan FAQ sendiri — plus schema `Service` + `FAQPage`
supaya bisa muncul sebagai hasil kaya di Google.

Saat ini ada 4 halaman:

- `/layanan/servis-komputer-laptop-banjarmasin/`
- `/layanan/aplikasi-kustom-banjarmasin/`
- `/layanan/undangan-digital-banjarmasin/`
- `/layanan/instalasi-jaringan-wifi-banjarmasin/`

Daftar semua layanan ada di `/layanan/`.

Setelah mengubah, simpan file — kalau `npm run dev` sedang jalan, halaman langsung ter-update.

### Mengubah warna aksen

Buka `src/styles/global.css`, cari baris:

```css
--color-accent: #c6f432;      /* hijau lime */
--color-accent-dark: #4d7c0f; /* versi gelap untuk teks kecil */
```

Ganti dengan warna lain, contoh biru elektrik `#2563eb` (dan versi gelapnya `#1d4ed8`).

### Mengubah font

Font dimuat dari Google Fonts di `src/layouts/Layout.astro`:
`Anton` untuk judul, `Plus Jakarta Sans` untuk teks isi.

---

## 3. Mengganti foto / gambar

Semua gambar ada di folder `public/`:

| File | Dipakai di |
| --- | --- |
| `logo-lockup.png` | Logo di header (versi hitam) |
| `logo-lockup-white.png` | Logo di footer (versi putih) |
| `og.jpg` | Gambar preview saat link dibagikan di WhatsApp/Facebook |
| `favicon.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | Ikon tab browser & HP |
| `flyer.jpg` | Flyer asli (tidak dipakai di halaman, simpan saja) |

Cukup ganti file dengan nama yang sama, ukuran otomatis menyesuaikan.

---

## 4. Cara publish

Website ini sudah online di **<https://itsupportpian.my.id>**
(deploy: Cloudflare Workers, fallback `itsupportpian.porterfrag.workers.dev`).

### Deploy satu perintah (Cloudflare Workers)

```bash
npm run deploy      # build + upload ke Cloudflare
```

Pertama kali saja, login dulu:

```bash
npx wrangler login
```

Konfigurasi deploy ada di `wrangler.jsonc` (nama worker `itsupportpian`,
asset dari folder `dist/`, domain `itsupportpian.my.id`).

> Catatan: workflow GitHub Pages bawaan template sudah dihapus. Deploy hanya
> lewat Cloudflare, supaya tidak ada situs duplikat yang membingungkan Google.

### Cloudflare Pages (alternatif, upload manual)

1. Buat akun gratis di <https://pages.cloudflare.com>
2. Upload folder `dist/` lewat menu **Create project → Direct upload**
   (jalankan `npm run build` dulu)
3. Domain `itsupportpian.my.id` dihubungkan di menu **Custom domains**

### Vercel

1. Buat akun di <https://vercel.com>
2. Import folder project ini (atau upload `dist/`)
3. Framework: **Astro**, build command `npm run build`, output `dist`

### Netlify

Drag & drop folder `dist/` ke <https://app.netlify.com/drop>

---

## 5. Setelah website online (penting untuk ditemukan pelanggan)

1. **Google Business Profile** — daftarkan "IT Support PIAN!" di
   <https://business.google.com> dengan nomor WA yang sama. Ini yang bikin muncul
   di Google Maps saat orang cari "servis komputer Banjarmasin".
2. **Google Search Console** — daftarkan domain, submit `sitemap-index.xml`.
3. **`site.url`** di `src/data/site.ts`, `site` di `astro.config.mjs`, dan `public/robots.txt`
   sudah diset ke `https://itsupportpian.my.id`. Sitemap dibuat otomatis oleh
   `@astrojs/sitemap` setiap kali `npm run build`.
4. **Update bio Instagram** — taruh link website di bio @itsupportpian0.

---

## 6. Struktur file

```
website-pian/
├─ public/                 # gambar, favicon, robots.txt
├─ src/
│  ├─ components/          # bagian-bagian halaman
│  │  ├─ Header.astro
│  │  ├─ Hero.astro
│  │  ├─ Marquee.astro
│  │  ├─ Services.astro
│  │  ├─ Why.astro
│  │  ├─ Steps.astro
│  │  ├─ Portfolio.astro
│  │  ├─ Quote.astro
│  │  ├─ Testimonials.astro
│  │  ├─ Faq.astro
│  │  ├─ Cta.astro
│  │  ├─ Footer.astro
│  │  └─ Icon.astro
│  ├─ data/site.ts         # ← semua isi website ada di sini
│  ├─ layouts/Layout.astro # head, SEO, animasi
│  ├─ pages/index.astro    # urutan bagian halaman
│  └─ styles/global.css    # warna, font, animasi
├─ astro.config.mjs
└─ package.json
```

---

## 7. Catatan

- Tombol WhatsApp memakai format `https://wa.me/62...?text=...` sehingga pesan
  otomatis terisi sesuai layanan yang diklik.
- Form kontak tidak ada (memang tidak perlu) — semua diarahkan ke WhatsApp agar
  tidak ada pesan yang terlewat.
- Bagian **Testimoni** disembunyikan otomatis kalau daftar testimoni masih kosong.
  Isi `testimonials` di `src/data/site.ts` kalau sudah ada pelanggan yang mau kasih ulasan.
