/**
 * ============================================================
 *  DATA BISNIS — ubah teks di sini, tampilan menyesuaikan sendiri.
 * ============================================================
 */

export const site = {
  name: 'IT Support PIAN!',
  shortName: 'PIAN!',
  tagline: 'Komputer pian lambat atawa error? Sini ulun anu akan!',
  description:
    'Jasa IT support di Banjarmasin: servis komputer & laptop, pembuatan aplikasi khusus, undangan digital, instalasi software dan jaringan. Ngobrol langsung pakai Bahasa Banjar.',
  url: 'https://itsupportpian.my.id',
  waNumber: '6281528493028', // format internasional, tanpa + dan tanpa spasi
  waDisplay: '0815 2849 3028',
  email: 'itsupportpian0@gmail.com',
  instagram: 'itsupportpian0',
  instagramUrl: 'https://instagram.com/itsupportpian0',
  area: 'Banjarmasin & sekitarnya',
  hours: 'Senin – Sabtu, 08.00 – 21.00 WITA',
  responseTime: 'biasanya dibalas dalam hitungan menit',
};

export const waLink = (message: string) =>
  `https://wa.me/${site.waNumber}?text=${encodeURIComponent(message)}`;

export const waDefault = waLink(
  'Halo PIAN! Ulun dapat info dari website. Ulun handak tanya-tanya dulu.',
);

export const nav = [
  { label: 'Layanan', href: '/layanan/' },
  { label: 'Cara Kerja', href: '/#cara-kerja' },
  { label: 'Hasil Kerja', href: '/#portofolio' },
  { label: 'FAQ', href: '/#faq' },
];

export const stats = [
  { value: 'Cepat', label: 'Respon via WhatsApp' },
  { value: 'On-site', label: 'Bisa datang ke lokasi' },
  { value: 'Garansi', label: 'Untuk setiap pengerjaan' },
];

export const services = [
  {
    id: 'servis',
    no: '01',
    icon: 'wrench',
    slug: 'servis-komputer-laptop-banjarmasin',
    title: 'Servis Komputer & Laptop',
    short: 'Lemot, mati sendiri, kena virus, atau layar bermasalah.',
    desc: 'Diagnosa dulu, baru dikerjakan. Bersihkan virus, install ulang, ganti part yang rusak, upgrade SSD/RAM, sampai perbaikan hardware.',
    points: ['Install ulang Windows & software', 'Upgrade SSD / RAM', 'Bersih virus & malware', 'Perbaikan hardware ringan'],
    wa: 'Halo PIAN! Ulun handak servis komputer/laptop. Gejalanya: ',
  },
  {
    id: 'aplikasi',
    no: '02',
    icon: 'code',
    slug: 'aplikasi-kustom-banjarmasin',
    title: 'Pembuatan Aplikasi Khusus',
    short: 'Aplikasi sesuai kebutuhan usaha pian, bukan template.',
    desc: 'Butuh aplikasi kasir, stok barang, absensi, atau pencatatan yang pas dengan cara kerja pian? Ulun beulah sesuai alur usaha pian.',
    points: ['Aplikasi kasir & stok', 'Absensi & data karyawan', 'Otomatisasi Excel & laporan', 'Web app sederhana'],
    wa: 'Halo PIAN! Ulun handak beulah aplikasi khusus. Kebutuhannya: ',
  },
  {
    id: 'undangan',
    no: '03',
    icon: 'envelope',
    slug: 'undangan-digital-banjarmasin',
    title: 'Undangan Digital',
    short: 'Undangan nikahan & acara, rapi dan mudah dibagikan.',
    desc: 'Link undangan dengan nama tamu, galeri foto, peta lokasi, RSVP, dan hitung mundur. Cocok gasan nikahan, aqiqah, atau acara keluarga.',
    points: ['Nama tamu otomatis', 'Galeri foto & musik', 'RSVP & ucapan tamu', 'Revisi sampai puas'],
    wa: 'Halo PIAN! Ulun handak beulah undangan digital. Acaranya: ',
  },
  {
    id: 'jaringan',
    no: '04',
    icon: 'network',
    slug: 'instalasi-jaringan-wifi-banjarmasin',
    title: 'Instalasi & Jaringan',
    short: 'Software, WiFi, printer sharing, dan konsultasi IT.',
    desc: 'Meatur WiFi supaya stabil, setting printer sharing, install software resmi, sampai benerin jaringan yang lemot di rumah atau kantor.',
    points: ['Instalasi software resmi', 'Setting WiFi & router', 'Printer & file sharing', 'Konsultasi IT usaha'],
    wa: 'Halo PIAN! Ulun butuh bantuan instalasi/jaringan. Masalahnya: ',
  },
];

export const reasons = [
  {
    icon: 'chat',
    title: 'Ngobrol pakai Bahasa Banjar',
    desc: 'Kada perlu takut salah istilah teknis. Ulun jelaskan pakai bahasa yang pian pahami.',
  },
  {
    icon: 'tag',
    title: 'Harga jelas di awal',
    desc: 'Diagnosa dulu, harga disepakati dulu, baru dikerjakan. Kada ada biaya yang muncul tiba-tiba.',
  },
  {
    icon: 'shield',
    title: 'Ada garansi',
    desc: 'Kalau masalah yang sama muncul lagi dalam masa garansi, ulun benerin lagi tanpa biaya.',
  },
  {
    icon: 'home',
    title: 'Bisa on-site',
    desc: 'Kada sempat bawa perangkatnya? Ulun bisa datang ke rumah atau tempat usaha pian.',
  },
  {
    icon: 'bolt',
    title: 'Respon cepat',
    desc: 'Chat dibalas di jam kerja. Masalah mendesak bisa langsung dijadwalkan hari itu.',
  },
  {
    icon: 'heart',
    title: 'Orang Banua, tanggung jawab jelas',
    desc: 'Usaha kecil lokal. Pian ngobrol langsung dengan yang mengerjakan, bukan call center.',
  },
];

export const steps = [
  {
    no: '01',
    title: 'Chat ulun',
    desc: 'Ceritakan masalahnya atau layanan yang pian butuhkan. Boleh kirim foto atau video gejalanya.',
  },
  {
    no: '02',
    title: 'Diagnosa & sepakat harga',
    desc: 'Ulun cek dulu, lalu kasih tahu apa yang rusak dan berapa biayanya. Baru pian putuskan.',
  },
  {
    no: '03',
    title: 'Dikerjakan & digaransi',
    desc: 'Setelah setuju, langsung dikerjakan. Selesai, ulun pastikan semuanya jalan normal.',
  },
];

export const portfolio = [
  {
    tag: 'Undangan Digital',
    title: 'Undangan Nikahan Digital',
    desc: 'Undangan online dengan nama tamu, galeri foto, RSVP, dan peta lokasi acara.',
    href: '/demo/undangan/',
  },
  {
    tag: 'Servis',
    title: 'Laptop Lemot Jadi Cepat',
    desc: 'Upgrade SSD + RAM, install ulang sistem, dan bersihkan virus. Booting dari 3 menit jadi 20 detik.',
  },
  {
    tag: 'Aplikasi Khusus',
    title: 'Aplikasi Kasir Warung',
    desc: 'Pencatatan penjualan harian dan stok barang, dibuat sesuai alur kerja pemilik usaha.',
  },
];

/**
 * Testimoni asli dari pelanggan.
 * Kalau daftar ini kosong, bagian testimoni otomatis tidak ditampilkan.
 *
 * Contoh cara mengisi:
 * {
 *   name: 'Rina',
 *   role: 'Pemilik warung, Banjarmasin',
 *   quote: 'Laptop ulun lambat banar, di-chat PIAN! langsung dibalas dan dua jam sudah beres.',
 * }
 */
export const testimonials: { name: string; role: string; quote: string }[] = [];

export const faqs = [  {
    q: 'Apakah harus bawa perangkat ke tempat PIAN!?',
    a: 'Kada harus. Gasan servis ringan biasanya cukup dibawa ke tempat ulun, tapi kalau pian sibuk atau perangkatnya berat (PC kantor), ulun bisa datang ke lokasi. Bisa diatur lewat chat.',
  },
  {
    q: 'Berapa lama pengerjaannya?',
    a: 'Tergantung jenis masalahnya. Install ulang atau bersih virus biasanya 1–3 jam. Kerusakan hardware atau pembuatan aplikasi butuh waktu lebih lama dan akan diinfokan di awal.',
  },
  {
    q: 'Apakah ada garansi?',
    a: 'Ada. Gasan servis, garansi berlaku kalau masalah yang sama muncul kembali dalam periode yang disepakati. Gasan aplikasi dan undangan digital, ada masa revisi.',
  },
  {
    q: 'Bisa konsultasi dulu tanpa langsung servis?',
    a: 'Bisa banar. Kirim foto atau video masalahnya lewat WhatsApp, ulun bantu diagnosa dari jauh dulu. Kalau ternyata bisa dibantu tanpa servis, kada perlu servis.',
  },
  {
    q: 'Harganya berapa?',
    a: 'Tergantung jenis kerusakan dan layanan. Ulun kasih penawaran setelah tahu masalahnya, dan harga disepakati dulu sebelum dikerjakan.',
  },
  {
    q: 'Area layanannya di mana saja?',
    a: 'Utamanya Banjarmasin dan sekitarnya. Gasan luar kota bisa diatur, silakan chat dulu. Layanan online (aplikasi, undangan digital) bisa dari mana saja.',
  },
];
