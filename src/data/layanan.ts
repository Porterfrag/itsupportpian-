/**
 * ============================================================
 *  DATA HALAMAN LAYANAN (landing page per kata kunci)
 * ============================================================
 *  Satu objek = satu halaman di /layanan/<slug>/
 *  Tambah objek baru di sini, halaman & sitemap ikut otomatis.
 */

export interface LayananPage {
  slug: string;
  /** Judul tab browser & og:title */
  metaTitle: string;
  /** Meta description, maksimal ~155 karakter */
  metaDescription: string;
  /** Judul besar di halaman */
  h1: string;
  /** Kalimat pembuka di bawah judul */
  intro: string;
  icon: string;
  /** Kata kunci utama, dipakai untuk kicker */
  keyword: string;
  /** Pesan WhatsApp otomatis */
  waMessage: string;
  /** Gejala / masalah yang sering dialami pelanggan */
  symptoms: { title: string; desc: string }[];
  /** Yang termasuk dalam pengerjaan */
  scope: string[];
  /** Alasan memilih PIAN! khusus layanan ini */
  reasons: { title: string; desc: string }[];
  /** Area jangkauan */
  areas: string[];
  /** Pertanyaan yang sering diajukan */
  faqs: { q: string; a: string }[];
}

export const layananPages: LayananPage[] = [
  {
    slug: 'servis-komputer-laptop-banjarmasin',
    metaTitle: 'Servis Komputer & Laptop Banjarmasin — Bisa On-site | IT Support PIAN!',
    metaDescription:
      'Jasa servis komputer dan laptop di Banjarmasin. Lemot, mati sendiri, kena virus, layar rusak. Diagnosa dulu, harga disepakati dulu, ada garansi. Bisa datang ke lokasi.',
    h1: 'Servis Komputer & Laptop Banjarmasin',
    keyword: 'Servis Komputer & Laptop',
    intro:
      'Komputer lambat, mati sendiri, kena virus, atau layar bermasalah? Ulun diagnosa dulu, kasih tahu apa yang rusak dan berapa biayanya, baru dikerjakan. Kada ada biaya yang muncul tiba-tiba.',
    icon: 'wrench',
    waMessage:
      'Halo PIAN! Ulun handak servis komputer/laptop di Banjarmasin. Gejalanya: ',
    symptoms: [
      {
        title: 'Laptop lemot, booting lama',
        desc: 'Masuk Windows bisa 2–5 menit, buka aplikasi suka nge-hang. Biasanya karena hardisk sudah tua, RAM penuh, atau terlalu banyak program jalan di latar belakang.',
      },
      {
        title: 'Mati sendiri / panas berlebih',
        desc: 'Tiba-tiba mati saat dipakai, atau kipas bunyi kencang terus. Sering karena debu menumpuk di heatsink dan thermal paste sudah kering.',
      },
      {
        title: 'Kena virus, iklan muncul sendiri',
        desc: 'Browser tiba-tiba buka situs aneh, ada toolbar tidak dikenal, atau file berubah jadi shortcut. Bisa dibersihkan tanpa install ulang kalau data masih bisa diselamatkan.',
      },
      {
        title: 'Blue screen / error berulang',
        desc: 'Muncul layar biru dengan kode error, restart sendiri, atau "Windows failed to start". Perlu dicek apakah masalahnya di sistem, RAM, atau hardisk.',
      },
      {
        title: 'Tidak bisa menyala sama sekali',
        desc: 'Ditekan tombol power tidak ada reaksi, atau lampu nyala tapi layar gelap. Bisa dari adaptor, baterai, tombol power, atau komponen di motherboard.',
      },
      {
        title: 'Layar bergaris / pecah',
        desc: 'Ada garis vertikal, warna aneh, atau layar retak karena terjatuh. Bisa diganti dengan panel baru sesuai tipe laptop.',
      },
      {
        title: 'Keyboard atau touchpad tidak berfungsi',
        desc: 'Sebagian tombol tidak merespons, atau kursor bergerak sendiri. Kadang cukup dibersihkan, kadang harus ganti part.',
      },
      {
        title: 'Data hilang / tidak bisa dibuka',
        desc: 'Folder kosong, file tidak bisa dibuka, atau hardisk tidak terdeteksi. Selama media penyimpanannya masih terbaca, data masih ada peluang diselamatkan.',
      },
    ],
    scope: [
      'Diagnosa menyeluruh sebelum pengerjaan',
      'Install ulang Windows & software pendukung',
      'Upgrade SSD supaya booting jauh lebih cepat',
      'Tambah RAM sesuai kebutuhan',
      'Bersih virus, malware, dan adware',
      'Bersih debu & ganti thermal paste',
      'Ganti keyboard, layar, baterai, adaptor',
      'Recovery data dari hardisk yang masih terbaca',
      'Backup data sebelum install ulang',
      'Perbaikan ringan pada motherboard',
    ],
    reasons: [
      {
        title: 'Diagnosa dulu, bukan langsung ganti part',
        desc: 'Ulun cek dulu penyebab sebenarnya. Kada langsung bilang "harus ganti ini itu" tanpa bukti.',
      },
      {
        title: 'Harga disepakati sebelum dikerjakan',
        desc: 'Pian tahu berapa biayanya sebelum ulun mulai. Kalau pian tidak setuju, kada ada biaya yang ditagih.',
      },
      {
        title: 'Bisa datang ke lokasi',
        desc: 'PC kantor, komputer kasir, atau perangkat yang berat — ulun bisa datang ke rumah atau tempat usaha pian di Banjarmasin.',
      },
      {
        title: 'Ada garansi pengerjaan',
        desc: 'Kalau masalah yang sama muncul lagi dalam masa garansi, ulun benerin lagi tanpa biaya.',
      },
    ],
    areas: [
      'Banjarmasin Utara',
      'Banjarmasin Selatan',
      'Banjarmasin Tengah',
      'Banjarmasin Barat',
      'Banjarmasin Timur',
      'Banjarbaru',
      'Martapura',
      'Gambut',
      'Sungai Tabuk',
      'Kertak Hanyar',
    ],
    faqs: [
      {
        q: 'Apakah harus bawa laptop ke tempat PIAN!?',
        a: 'Kada harus. Gasan servis ringan biasanya cukup dibawa ke tempat ulun, tapi kalau pian sibuk atau perangkatnya berat (PC kantor), ulun bisa datang ke lokasi. Bisa diatur lewat chat.',
      },
      {
        q: 'Berapa lama servisnya?',
        a: 'Install ulang atau bersih virus biasanya 1–3 jam. Upgrade SSD sekitar 1 jam. Kerusakan hardware yang perlu pesan part bisa 1–3 hari tergantung ketersediaan part.',
      },
      {
        q: 'Apakah data ulun aman?',
        a: 'Sebelum install ulang, data penting ulun backup dulu kalau hardisknya masih bisa dibaca. Kalau hardisknya sudah rusak fisik, ulun infokan sejak awal apa yang masih bisa diselamatkan.',
      },
      {
        q: 'Berapa biayanya?',
        a: 'Tergantung jenis kerusakan dan part yang perlu diganti. Ulun kasih penawaran setelah diagnosa, dan pian putuskan dulu sebelum ulun mulai kerja.',
      },
      {
        q: 'Bisa servis di luar jam kerja?',
        a: 'Jadwal normal Senin–Sabtu 08.00–21.00 WITA. Gasan keadaan mendesak, chat dulu — kalau memungkinkan ulun atur.',
      },
    ],
  },
  {
    slug: 'aplikasi-kustom-banjarmasin',
    metaTitle: 'Jasa Pembuatan Aplikasi Kustom Banjarmasin | IT Support PIAN!',
    metaDescription:
      'Aplikasi kasir, stok barang, absensi, dan laporan otomatis untuk usaha di Banjarmasin. Dibuat sesuai alur kerja usaha pian, bukan template. Konsultasi gratis.',
    h1: 'Pembuatan Aplikasi Kustom Banjarmasin',
    keyword: 'Aplikasi Kustom',
    intro:
      'Butuh aplikasi kasir, stok barang, absensi, atau pencatatan yang pas dengan cara kerja usaha pian? Ulun beulah sesuai alur usaha pian — bukan template yang harus pian sesuaikan sendiri.',
    icon: 'code',
    waMessage:
      'Halo PIAN! Ulun handak beulah aplikasi kustom untuk usaha di Banjarmasin. Kebutuhannya: ',
    symptoms: [
      {
        title: 'Semua dicatat di buku, sering hilang',
        desc: 'Catatan penjualan atau stok hilang, sobek, atau tidak terbaca. Susah tahu untung-rugi sebulan berapa.',
      },
      {
        title: 'Rekap manual di Excel makan waktu',
        desc: 'Tiap malam harus hitung ulang dari nota. Kalau lupa satu hari, laporan bulanan jadi kacau.',
      },
      {
        title: 'Stok sering selisih',
        desc: 'Barang di gudang tidak cocok dengan catatan. Ada yang hilang, ada yang lupa dicatat keluar.',
      },
      {
        title: 'Absensi karyawan tidak jelas',
        desc: 'Rekap kehadiran manual, sering debat soal lembur dan potongan gaji.',
      },
      {
        title: 'Data usaha tercecer di banyak HP',
        desc: 'Admin pegang satu file, pemilik pegang satu file. Tidak ada satu sumber data yang bisa dipercaya.',
      },
      {
        title: 'Aplikasi jadi terlalu mahal & berlebihan',
        desc: 'Beli software besar dengan fitur yang tidak dipakai, dan tetap tidak cocok dengan alur kerja sendiri.',
      },
    ],
    scope: [
      'Aplikasi kasir (POS) untuk warung, toko, kafe',
      'Manajemen stok & peringatan stok menipis',
      'Absensi & data karyawan',
      'Pencatatan utang-piutang pelanggan',
      'Pembuatan invoice & nota otomatis',
      'Laporan harian, bulanan, dan laba-rugi',
      'Otomatisasi file Excel yang sudah dipakai',
      'Aplikasi web sederhana yang bisa dibuka dari HP',
      'Cetak struk ke printer thermal',
      'Pendampingan & pelatihan pemakaian',
    ],
    reasons: [
      {
        title: 'Dibuat dari alur kerja pian',
        desc: 'Ulun tanya dulu bagaimana usaha pian berjalan sehari-hari, baru desain aplikasinya. Bukan sebaliknya.',
      },
      {
        title: 'Mulai dari yang paling dibutuhkan',
        desc: 'Kada perlu langsung semua fitur. Ulun bantu pilih yang paling mendesak dulu, supaya biaya masuk akal.',
      },
      {
        title: 'Bisa dipakai dari HP',
        desc: 'Pemilik usaha bisa pantau penjualan dan stok dari mana saja, tanpa harus buka komputer.',
      },
      {
        title: 'Ada masa pendampingan',
        desc: 'Setelah aplikasi jadi, ulun bantu sampai karyawan pian terbiasa memakainya.',
      },
    ],
    areas: [
      'Banjarmasin',
      'Banjarbaru',
      'Martapura',
      'Kalimantan Selatan',
      'Seluruh Indonesia (online)',
    ],
    faqs: [
      {
        q: 'Berapa lama pembuatannya?',
        a: 'Aplikasi sederhana seperti kasir atau absensi biasanya 1–3 minggu. Yang lebih kompleks bisa lebih lama. Ulun kasih estimasi waktu di awal setelah tahu kebutuhannya.',
      },
      {
        q: 'Apakah harus bisa coding untuk memakainya?',
        a: 'Kada sama sekali. Aplikasi dibuat supaya bisa dipakai orang biasa — tombol jelas, alur singkat, dan ada pendampingan sampai pian dan karyawan terbiasa.',
      },
      {
        q: 'Bisa jalan tanpa internet?',
        a: 'Tergantung kebutuhan. Gasan warung dengan koneksi tidak stabil, ulun bisa rancang supaya tetap bisa mencatat transaksi walau internet mati, lalu tersinkron saat online.',
      },
      {
        q: 'Data ulun disimpan di mana?',
        a: 'Bisa di server yang ulun siapkan, atau di komputer pian sendiri. Ulun jelaskan pilihannya beserta risikonya sebelum mulai.',
      },
      {
        q: 'Kalau nanti butuh fitur tambahan?',
        a: 'Bisa ditambahkan bertahap. Karena aplikasinya dibuat khusus gasan pian, penambahan fitur tidak perlu bongkar ulang dari nol.',
      },
    ],
  },
  {
    slug: 'undangan-digital-banjarmasin',
    metaTitle: 'Jasa Undangan Digital Banjarmasin — Nikahan & Acara | IT Support PIAN!',
    metaDescription:
      'Undangan digital untuk nikahan, aqiqah, dan acara keluarga di Banjarmasin. Nama tamu otomatis, galeri foto, musik, RSVP, peta lokasi. Revisi sampai puas.',
    h1: 'Undangan Digital Banjarmasin',
    keyword: 'Undangan Digital',
    intro:
      'Undangan nikahan dan acara dalam bentuk link yang rapi dan mudah dibagikan lewat WhatsApp. Ada nama tamu otomatis, galeri foto, musik, RSVP, dan peta lokasi acara.',
    icon: 'envelope',
    waMessage:
      'Halo PIAN! Ulun handak beulah undangan digital. Acaranya: ',
    symptoms: [
      {
        title: 'Biaya cetak undangan mahal',
        desc: 'Cetak ratusan undangan kertas butuh biaya besar, belum lagi ongkos antar ke tamu.',
      },
      {
        title: 'Tamu tidak tahu lokasi acara',
        desc: 'Tamu terus bertanya alamat dan jam acara lewat chat. Bikin repot dan sering salah info.',
      },
      {
        title: 'Tidak tahu siapa yang akan datang',
        desc: 'Susah memperkirakan jumlah tamu, jadi katering sering kelebihan atau kekurangan.',
      },
      {
        title: 'Undangan kertas mudah hilang',
        desc: 'Tamu lupa menaruh undangan, atau tidak sempat membacanya sampai hari acara.',
      },
      {
        title: 'Ingin tampilan yang lebih personal',
        desc: 'Mau ada foto prewedding, musik pilihan sendiri, dan cerita singkat tentang pasangan.',
      },
      {
        title: 'Acara keluarga butuh undangan cepat',
        desc: 'Aqiqah, syukuran, atau acara keluarga yang persiapannya mepet.',
      },
    ],
    scope: [
      'Nama tamu otomatis di setiap link',
      'Galeri foto prewedding / acara',
      'Musik latar pilihan sendiri',
      'Hitung mundur ke hari acara',
      'Peta lokasi & tombol buka Google Maps',
      'RSVP — tamu konfirmasi kehadiran',
      'Kolom ucapan & doa dari tamu',
      'Cerita singkat pasangan / keluarga',
      'Informasi rekening & kado digital',
      'Revisi sampai pian puas',
    ],
    reasons: [
      {
        title: 'Bisa lihat contohnya dulu',
        desc: 'Ulun punya contoh undangan yang bisa pian buka langsung dari HP sebelum memutuskan.',
      },
      {
        title: 'Desain menyesuaikan tema acara',
        desc: 'Warna, foto, dan nuansa disesuaikan dengan tema nikahan atau acara pian.',
      },
      {
        title: 'Ringan dan cepat dibuka',
        desc: 'Banyak undangan digital berat dan lambat dibuka di sinyal lemah. Ulun pastikan tetap ringan.',
      },
      {
        title: 'Revisi sampai puas',
        desc: 'Ada masa revisi, jadi pian bisa minta penyesuaian sampai hasilnya pas.',
      },
    ],
    areas: [
      'Banjarmasin',
      'Banjarbaru',
      'Martapura',
      'Kalimantan Selatan',
      'Seluruh Indonesia (online)',
    ],
    faqs: [
      {
        q: 'Berapa lama pembuatan undangan digital?',
        a: 'Biasanya 2–5 hari kerja setelah foto dan data acara lengkap. Kalau acaranya mepet, chat dulu — ulun usahakan semampunya.',
      },
      {
        q: 'Bisa ganti nama tamu satu per satu?',
        a: 'Bisa. Setiap tamu dapat link sendiri dengan namanya sudah tercantum. Pian cukup kirim daftar tamunya.',
      },
      {
        q: 'Apakah bisa dibuka tanpa aplikasi?',
        a: 'Bisa. Undangan berbentuk link yang langsung terbuka di browser HP, tidak perlu install apa pun.',
      },
      {
        q: 'Berapa biayanya?',
        a: 'Tergantung fitur yang dipakai dan jumlah tamu. Ulun kasih penawaran setelah tahu kebutuhan acara pian.',
      },
      {
        q: 'Bisa lihat contoh dulu?',
        a: 'Bisa banar. Ada halaman contoh undangan di website ini yang bisa pian buka langsung dari HP.',
      },
    ],
  },
  {
    slug: 'instalasi-jaringan-wifi-banjarmasin',
    metaTitle: 'Instalasi Jaringan & WiFi Banjarmasin — Rumah & Kantor | IT Support PIAN!',
    metaDescription:
      'Setting WiFi, jaringan kantor, printer sharing, dan instalasi software di Banjarmasin. WiFi lemot atau sering putus? Ulun bantu atur supaya stabil.',
    h1: 'Instalasi Jaringan & WiFi Banjarmasin',
    keyword: 'Instalasi & Jaringan',
    intro:
      'WiFi lemot, sering putus, atau tidak sampai ke lantai atas? Ulun bantu atur jaringan rumah dan kantor supaya stabil, sekaligus setting printer sharing dan instalasi software resmi.',
    icon: 'network',
    waMessage:
      'Halo PIAN! Ulun butuh bantuan instalasi/jaringan di Banjarmasin. Masalahnya: ',
    symptoms: [
      {
        title: 'WiFi lemot padahal paket cepat',
        desc: 'Speed test di dekat router normal, tapi di kamar lambat. Biasanya masalah penempatan router atau sinyal yang terhalang.',
      },
      {
        title: 'Sinyal tidak sampai lantai atas',
        desc: 'Butuh titik akses tambahan atau mesh supaya seluruh rumah dapat sinyal merata.',
      },
      {
        title: 'Koneksi sering putus sendiri',
        desc: 'Internet tiba-tiba mati beberapa detik lalu nyambung lagi. Bisa dari router, kabel, atau gangguan penyedia.',
      },
      {
        title: 'Printer hanya bisa dipakai satu komputer',
        desc: 'Printer sharing belum diset, jadi harus pindah flashdisk tiap mau cetak.',
      },
      {
        title: 'File tidak bisa diakses antar komputer',
        desc: 'Komputer di kantor tidak bisa saling berbagi folder, padahal satu jaringan.',
      },
      {
        title: 'Software selalu pakai versi bajakan',
        desc: 'Berisiko kena malware dan tidak ada update keamanan. Ulun bantu instalasi versi resmi atau alternatif gratis yang legal.',
      },
      {
        title: 'Jaringan kantor tanpa pembatasan',
        desc: 'Semua orang bisa akses semua hal, termasuk WiFi tamu. Perlu dipisah supaya data usaha aman.',
      },
    ],
    scope: [
      'Setting WiFi & router (indihome, biznet, dll.)',
      'Perluasan sinyal dengan access point / mesh',
      'Penataan kabel jaringan kantor',
      'Printer & file sharing antar komputer',
      'Pemisahan WiFi tamu dan WiFi internal',
      'Ganti password & pengamanan router',
      'Instalasi software resmi & berlisensi',
      'Instalasi antivirus dan update sistem',
      'Setup jaringan untuk warung / kafe',
      'Konsultasi kebutuhan IT usaha',
    ],
    reasons: [
      {
        title: 'Dicek dulu sumber masalahnya',
        desc: 'Kada asal tambah alat. Ulun ukur dulu di mana sinyal lemah dan apa penyebabnya.',
      },
      {
        title: 'Rekomendasi alat yang masuk akal',
        desc: 'Ulun sarankan alat sesuai kebutuhan dan budget, bukan yang paling mahal.',
      },
      {
        title: 'Bisa on-site ke lokasi',
        desc: 'Gasan rumah, warung, atau kantor di Banjarmasin, ulun datang langsung.',
      },
      {
        title: 'Dijelaskan pakai bahasa sederhana',
        desc: 'Pian tahu apa yang dipasang, kenapa dipasang, dan bagaimana merawatnya.',
      },
    ],
    areas: [
      'Banjarmasin Utara',
      'Banjarmasin Selatan',
      'Banjarmasin Tengah',
      'Banjarmasin Barat',
      'Banjarmasin Timur',
      'Banjarbaru',
      'Martapura',
      'Gambut',
    ],
    faqs: [
      {
        q: 'Apakah termasuk alat (router/access point)?',
        a: 'Alat dibeli terpisah, tapi ulun bantu pilih yang sesuai kebutuhan dan budget pian. Kalau pian sudah punya alat, ulun optimalkan yang ada dulu.',
      },
      {
        q: 'Bisa bantu setting router yang sudah ada?',
        a: 'Bisa. Sering kali masalahnya bukan alat kurang, tapi penempatan dan konfigurasi yang belum pas.',
      },
      {
        q: 'Bisa untuk kantor dengan banyak komputer?',
        a: 'Bisa. Ulun atur jaringan kantor termasuk printer sharing, folder bersama, dan pemisahan akses.',
      },
      {
        q: 'Berapa biayanya?',
        a: 'Tergantung luas area, jumlah titik, dan alat yang dibutuhkan. Ulun survei atau tanya detail dulu, baru kasih penawaran.',
      },
      {
        q: 'Bisa datang di luar jam kerja?',
        a: 'Gasan kantor yang tidak bisa diganggu jam kerja, ulun bisa atur jadwal sore atau Sabtu.',
      },
    ],
  },
];

export const getLayanan = (slug: string) =>
  layananPages.find((page) => page.slug === slug);
