<div align="center">

<img src="https://img.shields.io/badge/Astro-6.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />

# 🌹 Kudus Florist

**Toko bunga premium online berbasis web untuk kota Kudus, Jawa Tengah.**  
Dibangun dengan Astro 6, React, dan Tailwind CSS v4.

[🌐 Demo](#) &nbsp;•&nbsp; [📦 Fitur](#-fitur) &nbsp;•&nbsp; [🚀 Cara Menjalankan](#-cara-menjalankan) &nbsp;•&nbsp; [📁 Struktur Proyek](#-struktur-proyek)

</div>

---

## ✨ Fitur

### 🛍️ Sistem Pemesanan
- **Keranjang Belanja** — Tambah/hapus/update jumlah item secara real-time
- **Cart Drawer** — Sidebar keranjang yang muncul dari kanan dengan animasi halus
- **Badge Keranjang** — Menampilkan jumlah item di ikon navbar
- **Halaman Checkout** — Form pengiriman lengkap dengan validasi
- **Metode Pembayaran Dummy** — Transfer Bank, COD, E-Wallet (GoPay/OVO)
- **Modal Konfirmasi** — Popup sukses setelah pesanan dikonfirmasi

### 📄 Halaman
| Halaman | URL | Deskripsi |
|---|---|---|
| Beranda | `/` | Landing page utama dengan hero, koleksi unggulan, dan alur pemesanan |
| Koleksi | `/koleksi` | Katalog 16+ produk bunga dengan filter 6 kategori |
| Tentang Kami | `/tentang-kami` | Sejarah toko, keunggulan, dan profil tim |
| Kontak | `/kontak` | Form kontak, info toko, dan embed Google Maps |
| Checkout | `/checkout` | Proses checkout dengan ringkasan pesanan |

### 📱 Responsive & Interaktif
- **Hamburger Menu** — Navigasi mobile dengan slide-in drawer (via React Portal)
- **Responsive Design** — Tampil optimal di semua ukuran layar
- **Hover & Micro-animations** — Efek hover pada kartu produk, tombol, dan link
- **Filter Kategori** — Filter produk interaktif di halaman Koleksi

---

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|---|---|
| [Astro 6](https://astro.build) | Framework utama, routing, dan SSG |
| [React 19](https://react.dev) | Komponen interaktif (cart, menu, form) |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [Nanostores](https://github.com/nanostores/nanostores) | State management keranjang belanja |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Google Fonts](https://fonts.google.com) | EB Garamond + Be Vietnam Pro |
| [Material Symbols](https://fonts.google.com/icons) | Icon set |

---

## 🚀 Cara Menjalankan

### Prasyarat
- Node.js >= 22.12.0
- npm

### Instalasi

```bash
# Clone repositori ini
git clone https://github.com/username/florist-web.git
cd florist-web

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:4321](http://localhost:4321) di browser.

### Build Produksi

```bash
npm run build
npm run preview
```

---

## 📁 Struktur Proyek

```
florist-web/
├── public/                     # Aset statis (favicon, dll.)
├── src/
│   ├── components/             # Komponen UI
│   │   ├── TopNavBar.astro     # Navigasi header utama
│   │   ├── Hero.astro          # Hero section beranda
│   │   ├── AboutUs.astro       # Section tentang kami (beranda)
│   │   ├── FeaturedCollections.astro  # Grid produk unggulan
│   │   ├── OrderSteps.astro    # Alur pemesanan
│   │   ├── Footer.astro        # Footer
│   │   ├── FloatingChat.astro  # Tombol chat melayang
│   │   ├── CartButton.tsx      # Ikon keranjang dengan badge (React)
│   │   ├── CartDrawer.tsx      # Sidebar keranjang (React)
│   │   ├── AddToCartButton.tsx # Tombol tambah ke keranjang (React)
│   │   ├── MobileMenu.tsx      # Menu hamburger mobile (React Portal)
│   │   ├── CheckoutForm.tsx    # Form checkout lengkap (React)
│   │   ├── KoleksiGrid.tsx     # Grid produk dengan filter (React)
│   │   └── ContactForm.tsx     # Form kontak (React)
│   ├── layouts/
│   │   └── Layout.astro        # Layout utama (HTML shell)
│   ├── pages/
│   │   ├── index.astro         # Beranda
│   │   ├── koleksi.astro       # Halaman koleksi produk
│   │   ├── tentang-kami.astro  # Halaman tentang kami
│   │   ├── kontak.astro        # Halaman kontak
│   │   └── checkout.astro      # Halaman checkout
│   ├── store/
│   │   └── cartStore.ts        # State management keranjang (Nanostores)
│   └── styles/
│       └── global.css          # Global styles & Tailwind v4 config
├── tailwind.config.mjs         # Konfigurasi warna & tipografi kustom
├── astro.config.mjs            # Konfigurasi Astro
└── DESIGN.md                   # Panduan design system
```

---

## 🎨 Design System

Mengikuti panduan desain **Floral Editorial** yang didefinisikan di [`DESIGN.md`](./DESIGN.md):

- **Palet Warna:** Spektrum "Deep Rose" (Crimson `#95002a`, Maroon `#aa304f`)
- **Tipografi:** EB Garamond (heading) + Be Vietnam Pro (body)
- **Radius:** Rounded untuk mencerminkan lekukan organik kelopak bunga
- **Bayangan:** Ambient soft shadow dengan tint warna marun hangat
- **Spacing:** Increments 8px dengan whitespace yang generous

---

## 📝 Catatan

> **Sistem Pembayaran:** Saat ini menggunakan data dummy (placeholder). Integrasi dengan payment gateway nyata (Midtrans, Xendit, dll.) dapat ditambahkan pada file `src/components/CheckoutForm.tsx`.

---

<div align="center">

Dibuat dengan ❤️ untuk Kudus Florist  
© 2024 Kudus Florist — Seni Merangkai Keindahan

</div>
