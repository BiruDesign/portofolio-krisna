"use client";

import React, { useState, useEffect, useRef } from "react";

interface ProjectCaseStudy {
  id: string;
  number: string;
  category: string;
  status: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  livePreviewTitle: string;
  liveMetrics: { label: string; value: string; statusColor?: string }[];
  tags: string[];
  overview: string;
  specsTitle: string;
  specs: { label: string; detail: string }[];
  dataFlow: string[];
  logicTitle: string;
  logicPoints: string[];
  challenge: string;
  solution: string;
  benchmarks: { metric: string; result: string }[];
  links: { label: string; url: string }[];
}

const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: "webcaprice",
    number: "01",
    category: "WEB & IOT HYBRID PORTAL",
    status: "LIVE PROJECT",
    title: "WebCaprice 26 — Class Portal & IoT Hub",
    subtitle:
      "Menggantikan pengelolaan manual ruang kelas X RPL 1 dengan portal terpusat & telemetri real-time.",
    shortDesc:
      "Portal terpadu untuk direktori siswa, jadwal adaptif berbasis jam aktif, serta pemantauan suhu dan kualitas udara ruang kelas secara langsung dari sensor mikrokontroler.",
    livePreviewTitle: "LIVE CLASSROOM TELEMETRY PREVIEW",
    liveMetrics: [
      { label: "Kelas Aktif", value: "X RPL 1 (Caprice 26)" },
      { label: "Suhu & Udara", value: "27.4°C | Good (DHT22 + MQ135)", statusColor: "text-emerald-500" },
      { label: "Sinkronisasi", value: "< 2 Detik Interval", statusColor: "text-orange-500" },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "ESP32 Telemetry"],
    overview:
      "Dirancang khusus untuk kebutuhan Kelas X RPL 1 (Caprice Team 26) di SMKN 1 Probolinggo. Sistem ini menyatukan administrasi kelas dengan dashboard monitoring kondisi fisik ruang belajar.",
    specsTitle: "Arsitektur Sistem & Spesifikasi",
    specs: [
      { label: "Frontend Engine", detail: "Next.js App Router, React, Tailwind CSS" },
      { label: "Backend & Data", detail: "Node.js REST API, JSON State Caching & MySQL Integration" },
      { label: "Sensing Node", detail: "ESP32 Dual-Core + DHT22 + MQ-135" },
      { label: "Protokol Data", detail: "HTTP REST JSON Payload dengan interval pengiriman 5 detik" },
    ],
    dataFlow: [
      "Node Sensor Kelas (ESP32 + DHT22/MQ-135)",
      "Transmisi Wi-Fi (HTTP POST / JSON Payload tiap 5 detik)",
      "Backend API Service (Validasi & Sanitasi Data)",
      "Next.js Client Dashboard (Visualisasi Real-Time & Jadwal Kelas)",
    ],
    logicTitle: "Fitur Inti & Rekayasa Sistem",
    logicPoints: [
      "Dynamic Roster Engine: Pencarian instan profil anggota kelas dan struktur organisasi.",
      "Smart Schedule Matrix: Menyorot otomatis mata pelajaran yang sedang berlangsung.",
      "Environmental Alert: Indikator warna otomatis jika suhu kelas melewati batas nyaman (>30°C).",
    ],
    challenge:
      "Koneksi jaringan Wi-Fi di lingkungan sekolah kadang mengalami fluktuasi sehingga pengiriman paket data dari ESP32 rawan terputus (timeout).",
    solution:
      "Menerapkan mekanisme auto-reconnect dan exponential backoff retry pada firmware ESP32 serta caching data di server.",
    benchmarks: [
      { metric: "Kapasitas Direktori", result: "30+ Profil Siswa & Jadwal Penuh" },
      { metric: "Latensi Update UI", result: "< 1.5 Detik End-to-End" },
      { metric: "Uptime Sistem", result: "99.2% Selama Jam Sekolah" },
    ],
    links: [
      { label: "Kunjungi Portal Demo", url: "#" },
      { label: "Repositori GitHub", url: "https://github.com" },
    ],
  },
  {
    id: "sipanas",
    number: "02",
    category: "EMBEDDED IOT & AGRICULTURAL AUTOMATION",
    status: "PROTOTYPE SYSTEM",
    title: "SIPANAS-IoT — Smart Irrigation System",
    subtitle:
      "Sistem otomasi penyiraman presisi berbasis kelembapan tanah aktual dan pemantauan multi-platform.",
    shortDesc:
      "Otomasi pompa air menggunakan mikrokontroler ESP32, sensor kelembapan tanah, dan modul relay dengan kontrol jarak jauh via dashboard web serta aplikasi mobile Flutter.",
    livePreviewTitle: "SOIL & ACTUATOR TELEMETRY WIDGET",
    liveMetrics: [
      { label: "Kelembapan Tanah", value: "72% (Kapasitas Optimal)", statusColor: "text-emerald-500" },
      { label: "Status Pompa Relay", value: "STANDBY / AUTO-OFF", statusColor: "text-zinc-400" },
      { label: "Mikrokontroler", value: "ESP32 NodeMCU-32S" },
    ],
    tags: ["ESP32", "C/C++", "Soil Moisture Sensor", "Relay Actuator", "Flutter", "Web Dashboard"],
    overview:
      "Menyelesaikan masalah penyiraman tanaman yang tidak efisien dengan membaca tingkat kekeringan media tanam secara langsung. Sistem bekerja mandiri mengeksekusi pompa air sekaligus mengirim telemetri ke aplikasi pantau.",
    specsTitle: "Spesifikasi Hardware & Pinout",
    specs: [
      { label: "Microcontroller", detail: "ESP32 NodeMCU-32S (Xtensa Dual-Core 32-bit LX6)" },
      { label: "Sensor Input", detail: "Soil Moisture Sensor (ADC Pin) & DHT22" },
      { label: "Actuator Control", detail: "Modul Relay 5V Optocoupler terhubung ke Pompa Air DC" },
      { label: "Client Apps", detail: "Custom Flutter Mobile Application & Web Monitoring Dashboard" },
    ],
    dataFlow: [
      "Sensor Kelembapan Tanah (Pembacaan Nilai Analog ADC)",
      "ESP32 Core (Kalibrasi Persentase & Evaluasi Threshold)",
      "Eksekusi Fisik (Trigger Relay Pompa ON/OFF Otomatis)",
      "Sinkronisasi Cloud API -> Tampil di Aplikasi Flutter & Web",
    ],
    logicTitle: "Logika Kontrol Embedded & Keamanan",
    logicPoints: [
      "Hysteresis Threshold: Pompa menyala saat kelembapan < 40% dan berhenti tepat di 75%.",
      "Pump Failsafe Cutoff: Auto-shutdown jika pompa aktif lebih dari 120 detik tanpa kenaikan air.",
      "Manual Override: Sakelar darurat melalui aplikasi Flutter.",
    ],
    challenge:
      "Pembacaan nilai analog ADC pada ESP32 sering mengalami noise elektrikal sehingga persentase kelembapan melompat.",
    solution:
      "Menerapkan algoritma Moving Average Filter (rata-rata 10 sampel) di firmware C++ sebelum mengambil keputusan relay.",
    benchmarks: [
      { metric: "Akurasi Kalibrasi ADC", result: "±2.5% Deviasi Pembacaan" },
      { metric: "Respon Eksekusi Relay", result: "< 500 ms Saat Threshold Tercapai" },
      { metric: "Efisiensi Air", result: "Hemat ~35% Dibanding Manual" },
    ],
    links: [
      { label: "Lihat Source Firmware", url: "https://github.com" },
      { label: "Dokumentasi Sistem", url: "#" },
    ],
  },
  {
    id: "rfid-attendance",
    number: "03",
    category: "HARDWARE DATA LOGGER & AUTOMATION",
    status: "FINAL PROJECT",
    title: "RFID Student Attendance & Logger System",
    subtitle:
      "Modernisasi pencatatan kehadiran fisik siswa menjadi sistem rekap database otomatis bebas antrean.",
    shortDesc:
      "Sistem presensi berbasis frekuensi RFID 13.56 MHz menggunakan Arduino Uno, layar LCD 20x4 I2C, dan integrasi output serial langsung ke lembar database Excel via PLX-DAQ.",
    livePreviewTitle: "SERIAL LOGGER SIMULATION",
    liveMetrics: [
      { label: "Frekuensi Modul", value: "13.56 MHz (MFRC522 SPI)" },
      { label: "Kecepatan Verifikasi", value: "< 1.8 Detik / Kartu", statusColor: "text-emerald-500" },
      { label: "Output Log", value: "Direct Serial CSV to Excel" },
    ],
    tags: ["Arduino Uno", "C/C++", "RFID RC522", "LCD 20x4 I2C", "PLX-DAQ Excel"],
    overview:
      "Dibangun sebagai proyek akhir MTs Negeri Probolinggo untuk menggantikan absensi manual kertas dengan sistem tap kartu RFID yang mencatat Nama, UID, dan Jam Masuk ke lembar Excel otomatis.",
    specsTitle: "Konfigurasi Komponen & Wiring",
    specs: [
      { label: "Microcontroller", detail: "Arduino Uno R3 (ATmega328P 16MHz)" },
      { label: "RFID Reader", detail: "Modul RC522 SPI Interface (D9 - D13)" },
      { label: "Display & Audio", detail: "LCD 20x4 I2C (A4, A5) + Buzzer PWM" },
      { label: "Data Bridge", detail: "Komunikasi Serial USB (Baud 9600) ke makro PLX-DAQ Excel" },
    ],
    dataFlow: [
      "Tap Kartu RFID Siswa (Induksi Elektromagnetik 13.56 MHz)",
      "Modul RC522 -> Arduino Uno (Ekstraksi Kode Hex UID)",
      "Pencocokan Database Array & Tampil Nama di LCD 20x4",
      "Kirim Format String CSV via USB Serial -> Baris Baru di Excel",
    ],
    logicTitle: "Aturan Verifikasi & Anti-Duplikasi",
    logicPoints: [
      "Anti-Double Tap Cooldown: Mencegah kartu tercatat dua kali berturut-turut dalam durasi singkat.",
      "Visual & Audio Feedback: Buzzer berbunyi 1x pendek (sukses) disertai nama di LCD 20x4.",
      "Zero-Typing Logging: Seluruh entri jam masuk dan tanggal terisi otomatis tanpa ketik manual.",
    ],
    challenge:
      "Keterbatasan memori SRAM pada Arduino Uno (hanya 2 KB) saat menyimpan database string nama siswa.",
    solution:
      "Mengoptimalkan penyimpanan nama statis menggunakan PROGMEM (Flash Memory) sehingga memori kerja SRAM tetap aman.",
    benchmarks: [
      { metric: "Kecepatan Transaksi", result: "< 2 Detik dari Tap ke Excel" },
      { metric: "Tingkat Baca Kartu", result: "99.8% Akurat pada Jarak 1–3 cm" },
      { metric: "Konsumsi Memori SRAM", result: "Hemat 45% dengan PROGMEM" },
    ],
    links: [
      { label: "Source Code Arduino (.ino)", url: "https://github.com" },
    ],
  },
];

// Komponen Pembungkus Scroll Reveal
function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentElem = domRef.current;
    if (currentElem) observer.observe(currentElem);

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function PortfolioPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isDark = theme === "dark";

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("krisna.dev@example.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const bgMain = isDark ? "#09090b" : "#f8fafc";
  const textMain = isDark ? "#f4f4f5" : "#09090b";
  const bgCard = isDark ? "#18181b" : "#ffffff";
  const borderCol = isDark ? "#27272a" : "#e2e8f0";
  const textMuted = isDark ? "#a1a1aa" : "#64748b";
  const navBg = isDark ? "rgba(9, 9, 11, 0.85)" : "rgba(255, 255, 255, 0.85)";
  const boxInner = isDark ? "#0d0d10" : "#f1f5f9";

  return (
    <div
      style={{
        backgroundColor: bgMain,
        color: textMain,
        minHeight: "100vh",
      }}
      className="font-sans overflow-x-hidden selection:bg-orange-500 selection:text-white transition-colors duration-300"
    >
      {/* AMBIENT GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          style={{
            backgroundColor: isDark ? "rgba(234, 88, 12, 0.12)" : "rgba(251, 146, 60, 0.25)",
          }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[140px] pointer-events-none transition-colors duration-500"
        />
        <div
          style={{
            backgroundColor: isDark ? "rgba(220, 38, 38, 0.08)" : "rgba(252, 211, 77, 0.2)",
          }}
          className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] rounded-full blur-[160px] pointer-events-none transition-colors duration-500"
        />
      </div>

      {/* NAVBAR */}
      <header
        style={{
          backgroundColor: navBg,
          borderColor: borderCol,
        }}
        className="sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center font-bold text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
              K
            </div>
            <span style={{ color: textMain }} className="font-bold tracking-tight">
              KRISNA<span className="text-orange-500">.DEV</span>
            </span>
          </a>

          <nav
            style={{ color: textMuted }}
            className="hidden md:flex items-center gap-7 text-sm font-medium"
          >
            <a href="#tentang" className="hover:text-orange-500 transition-colors duration-200">Tentang</a>
            <a href="#proyek" className="hover:text-orange-500 transition-colors duration-200">Proyek</a>
            <a href="#keahlian" className="hover:text-orange-500 transition-colors duration-200">Tech Stack</a>
            <a href="#riwayat" className="hover:text-orange-500 transition-colors duration-200">Riwayat</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* SWITCH THEME BUTTON */}
            <button
              type="button"
              onClick={handleToggle}
              style={{
                backgroundColor: isDark ? "#27272a" : "#f1f5f9",
                borderColor: isDark ? "#3f3f46" : "#cbd5e1",
                color: isDark ? "#facc15" : "#0f172a",
              }}
              className="px-3.5 py-1.5 rounded-xl border text-xs sm:text-sm font-bold cursor-pointer select-none active:scale-90 hover:scale-105 transition-all duration-200 shadow-sm"
            >
              {isDark ? "☀️ Light" : "🌙 Dark"}
            </button>

            <a
              href="#kontak"
              className="px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-orange-500 to-red-600 text-white hover:opacity-95 hover:shadow-orange-600/30 active:scale-95 transition-all duration-200 shadow-md shadow-orange-600/20"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-24 space-y-28">
        {/* HERO SECTION */}
        <RevealSection>
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
            <div className="lg:col-span-7 space-y-6">
              <div
                style={{
                  backgroundColor: bgCard,
                  borderColor: borderCol,
                  color: textMuted,
                }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-medium shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Tech Projects & Collaboration
              </div>

              <div className="space-y-3">
                <p className="text-orange-500 font-mono text-sm uppercase tracking-widest font-semibold">
                  Software & Embedded Systems Builder
                </p>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
                  Hello, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                    Krisna
                  </span>
                </h1>
                <h2 style={{ color: textMain }} className="text-2xl sm:text-3xl font-bold">
                  Web Developer & IoT Enthusiast Based in Probolinggo
                </h2>
              </div>

              <p style={{ color: textMuted }} className="text-base sm:text-lg leading-relaxed max-w-2xl">
                Siswa rekayasa perangkat lunak (<span className="font-semibold text-orange-500">PPLG — Class X RPL 1</span>) di{" "}
                <span className="font-semibold">SMKN 1 Probolinggo</span>. Berfokus merancang aplikasi web modern
                berperforma tinggi dengan Next.js serta mengintegrasikan sistem mikrokontroler cerdas (ESP32 & Arduino).
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#proyek"
                  className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-orange-500 to-red-600 text-white hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-orange-600/25 flex items-center gap-2"
                >
                  Lihat Studi Kasus Proyek <span>↗</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    backgroundColor: bgCard,
                    borderColor: borderCol,
                    color: textMain,
                  }}
                  className="px-5 py-3 rounded-xl font-medium text-sm border shadow-sm cursor-pointer hover:border-orange-500 active:scale-95 transition-all duration-200"
                >
                  {copied ? "✓ Email Tersalin!" : "Salin Kontak Email"}
                </button>
              </div>
            </div>

            {/* FOTO PROFIL */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-80">
                <div className="absolute -inset-2 bg-gradient-to-tr from-red-600 via-orange-500 to-amber-400 rounded-3xl blur-2xl opacity-40 animate-pulse pointer-events-none" />

                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: "#f97316",
                  }}
                  className="relative rounded-3xl p-2 border-2 shadow-2xl transition-all duration-300 hover:shadow-orange-500/20"
                >
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-900 flex items-center justify-center">
                    {!imgError ? (
                      <>
                        <img
                          src="/profile.jpg"
                          alt="Krisna Profile"
                          onError={() => setImgError(true)}
                          className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-500 hover:scale-108"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 pointer-events-none" />
                      </>
                    ) : (
                      <div className="relative z-10 text-center p-6 space-y-2">
                        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-3xl font-extrabold text-white shadow-lg">
                          K
                        </div>
                        <p className="text-sm font-semibold text-zinc-200">Krisna</p>
                        <p className="text-xs text-zinc-400">
                          Foto <code className="text-orange-400">public/profile.jpg</code> belum terbaca.
                        </p>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-4 right-4 z-10">
                      <p className="text-xs font-mono font-semibold text-orange-400">KRISNA // PPLG</p>
                      <p className="text-sm font-bold text-white drop-shadow-md">Software & IoT Engineer</p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: borderCol,
                  }}
                  className="absolute -top-3 -right-3 z-20 px-3.5 py-1.5 rounded-xl border shadow-lg hover:scale-105 transition-transform duration-200"
                >
                  <p className="text-[10px] font-mono uppercase text-zinc-400">COMPLETED (2025)</p>
                  <p className="text-xs font-bold text-emerald-500">D-1 IT Cert (4.00)</p>
                </div>

                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: borderCol,
                  }}
                  className="absolute -bottom-4 -left-4 z-20 px-4 py-2.5 rounded-2xl border shadow-xl hover:scale-105 transition-transform duration-200"
                >
                  <p className="text-[10px] font-mono uppercase tracking-wider text-orange-500 font-semibold">
                    ⚡ SMKN 1 PROBOLINGGO
                  </p>
                  <p className="text-xs font-bold">Class X RPL 1 • Caprice 26</p>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* STATISTIK & KARTU SOSIAL */}
        <RevealSection>
          <section className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { num: "10+", title: "Proyek Web & IoT", desc: "Eksperimen software & mikrokontroler" },
                { num: "4.00", title: "IPK Cum Laude (2025)", desc: "Sertifikasi D-1 IT LPAK UMM" },
                { num: "Top 20", title: "Walikota Cup Robotik", desc: "Kompetisi Robotika Tahun 2025" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: bgCard,
                    borderColor: borderCol,
                  }}
                  className="p-6 rounded-2xl border flex items-center gap-4 shadow-sm hover:border-orange-500/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    {stat.num}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{stat.title}</p>
                    <p style={{ color: textMuted }} className="text-xs">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "GitHub", sub: "Lihat Repositori", href: "https://github.com", badge: "GH" },
                { name: "LinkedIn", sub: "Jaringan Karir", href: "https://linkedin.com", badge: "IN" },
                { name: "Instagram", sub: "Aktivitas Harian", href: "https://instagram.com", badge: "IG" },
                { name: "Email Direct", sub: "Diskusi & Tanya", href: "#kontak", badge: "EM" },
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target={soc.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{
                    backgroundColor: bgCard,
                    borderColor: borderCol,
                  }}
                  className="group p-3.5 rounded-xl border flex items-center gap-3 shadow-sm hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    style={{ backgroundColor: boxInner }}
                    className="w-9 h-9 rounded-lg flex items-center justify-center font-mono text-xs font-bold text-orange-500 group-hover:scale-110 transition-transform duration-200"
                  >
                    {soc.badge}
                  </div>
                  <div>
                    <p className="text-xs font-semibold">{soc.name}</p>
                    <p style={{ color: textMuted }} className="text-[11px]">{soc.sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </RevealSection>

        {/* TENTANG SAYA */}
        <RevealSection>
          <section id="tentang" className="space-y-8 scroll-mt-24">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-orange-500 font-semibold">
                01 // ABOUT & SERVICES
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Menggabungkan Antarmuka Web Modern dengan Komputasi Fisik
              </h2>
            </div>

            <div
              style={{
                backgroundColor: bgCard,
                borderColor: borderCol,
                color: textMain,
              }}
              className="p-6 sm:p-8 rounded-2xl border space-y-4 leading-relaxed shadow-sm hover:border-orange-500/40 transition-colors duration-300"
            >
              <p>
                Saya memulai eksplorasi di dunia teknologi sejak jenjang MTs di Kota Probolinggo, menyelesaikan
                program sertifikasi aplikasi komputer setara D-1 dari{" "}
                <span className="font-semibold text-orange-500">
                  LPAK Universitas Muhammadiyah Malang (UMM)
                </span>{" "}
                dengan predikat Cum Laude (IPK 4.00) pada tahun 2025, serta menembus babak 20 besar dalam kompetisi robotika tingkat kota.
              </p>
              <p style={{ color: textMuted }}>
                Saat ini di jurusan Pengembangan Perangkat Lunak dan Gim (PPLG), fokus utama saya adalah membangun aplikasi web full-stack menggunakan{" "}
                <span className="text-orange-500 font-medium">Next.js, TypeScript, dan Tailwind CSS</span> yang terhubung
                dengan mikrokontroler <span className="text-orange-500 font-medium">ESP32 dan Arduino</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  no: "01",
                  title: "Modern Web Development",
                  desc: "Pembuatan website cepat dan responsif menggunakan Next.js App Router, React, TypeScript, dan Tailwind CSS.",
                },
                {
                  no: "02",
                  title: "IoT & Embedded Systems",
                  desc: "Perancangan sistem sensor (RFID, DHT22, MQ-135, Soil Moisture) dengan mikrokontroler ESP32 & Arduino.",
                },
                {
                  no: "03",
                  title: "System & Database Integration",
                  desc: "Pengelolaan database MySQL (Laragon), pencatatan data otomatis (Serial Data Logging), serta workflow Git.",
                },
              ].map((srv, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: bgCard,
                    borderColor: borderCol,
                  }}
                  className="p-6 rounded-2xl border space-y-3 shadow-sm hover:border-orange-500 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 font-mono font-bold">
                    {srv.no}
                  </div>
                  <h3 className="text-base font-bold">{srv.title}</h3>
                  <p style={{ color: textMuted }} className="text-sm leading-relaxed">{srv.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </RevealSection>

        {/* PROYEK UNGGULAN & STUDI KASUS */}
        <RevealSection>
          <section id="proyek" className="space-y-8 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-widest text-orange-500 font-semibold">
                  02 // ENGINEERING SHOWCASE
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Proyek Pilihan & Studi Kasus Teknis
                </h2>
              </div>
              <p style={{ color: textMuted }} className="text-xs">
                Klik kartu untuk melihat detail arsitektur, tantangan rekayasa, dan solusinya.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {PROJECTS_DATA.map((project, index) => (
                <div
                  key={project.id}
                  style={{
                    backgroundColor: bgCard,
                    borderColor: borderCol,
                  }}
                  className={`rounded-2xl border p-6 flex flex-col justify-between space-y-6 shadow-sm hover:border-orange-500/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    index === 2 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono text-orange-500 font-semibold tracking-wider">
                        PROJECT {project.number} // {project.category}
                      </span>
                      <span
                        style={{
                          backgroundColor: boxInner,
                          color: textMuted,
                        }}
                        className="px-2.5 py-0.5 text-[11px] font-mono rounded-full border border-orange-500/20"
                      >
                        {project.status}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p style={{ color: textMuted }} className="text-sm leading-relaxed">
                        {project.shortDesc}
                      </p>
                    </div>

                    <div
                      style={{
                        backgroundColor: boxInner,
                        borderColor: borderCol,
                      }}
                      className="p-4 rounded-xl border space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                          {project.livePreviewTitle}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                        {project.liveMetrics.map((m, idx) => (
                          <div
                            key={idx}
                            style={{
                              backgroundColor: bgCard,
                              borderColor: borderCol,
                            }}
                            className="px-3 py-2 rounded-lg border"
                          >
                            <p className="text-[10px] text-zinc-400">{m.label}</p>
                            <p className={`text-xs font-mono font-semibold ${m.statusColor || ""}`}>
                              {m.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            backgroundColor: boxInner,
                            color: textMuted,
                          }}
                          className="px-2.5 py-1 text-xs font-mono rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{ borderColor: borderCol }}
                      className="pt-3 border-t flex items-center justify-between"
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveProject(project);
                        }}
                        className="cursor-pointer inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-orange-500 text-white shadow-md active:scale-95 hover:bg-orange-600 hover:shadow-orange-500/25 transition-all duration-200"
                      >
                        📖 Buka Detail Studi Kasus
                      </button>
                      <span style={{ color: textMuted }} className="text-xs font-mono">
                        Detail teknis →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </RevealSection>

        {/* TECH STACK MATRIX */}
        <RevealSection>
          <section id="keahlian" className="space-y-8 scroll-mt-24">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-orange-500 font-semibold">
                03 // TECHNICAL ARSENAL
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Perangkat Lunak, Hardware & Lingkungan Kerja
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Frontend & Web",
                  items: ["Next.js (App Router)", "React 19", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
                },
                {
                  title: "Backend & Database",
                  items: ["Node.js", "RESTful API", "MySQL Database", "Laragon Environment", "Flutter (Mobile UI)", "PLX-DAQ Serial"],
                },
                {
                  title: "Hardware & IoT Sensors",
                  items: ["ESP32 Dual-Core", "Arduino Uno", "mBot2 Robotics", "RFID RC522 & PN532", "DHT11/22 & MQ-135", "HC-SR04, Load Cell, Servo"],
                },
                {
                  title: "Workflow & OS",
                  items: ["VS Code + PlatformIO", "Arduino IDE & Thonny", "Wokwi Simulator", "Git & GitHub", "Linux Mint XFCE", "Windows 11/10"],
                },
              ].map((group, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: bgCard,
                    borderColor: borderCol,
                  }}
                  className="p-5 rounded-2xl border space-y-4 shadow-sm hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-xs font-mono uppercase tracking-wider text-orange-500 font-semibold">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: boxInner,
                          color: textMain,
                        }}
                        className="px-2.5 py-1 text-xs rounded-lg hover:border-orange-500/40 border border-transparent transition-all duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </RevealSection>

        {/* TIMELINE RIWAYAT */}
        <RevealSection>
          <section id="riwayat" className="space-y-8 scroll-mt-24">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-orange-500 font-semibold">
                04 // MILESTONES & EDUCATION
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Perjalanan Akademik & Pencapaian Kompetisi
              </h2>
            </div>

            <div
              style={{ borderColor: borderCol }}
              className="relative pl-6 sm:pl-8 border-l space-y-10"
            >
              {[
                {
                  year: "2026 — Sekarang",
                  title: "Siswa PPLG (Kelas X RPL 1 — Caprice Team 26)",
                  org: "SMKN 1 Probolinggo",
                  desc: "Mendalami rekayasa perangkat lunak modern, Next.js, serta memimpin inisiatif pembuatan portal kelas WebCaprice 26 dan proyek SIPANAS-IoT.",
                  highlight: "Active Student",
                },
                {
                  year: "2026",
                  title: "Lulus Pendidikan Menengah & Proyek Akhir RFID",
                  org: "MTs Negeri Probolinggo",
                  desc: "Menyelesaikan pendidikan menengah dan merancang proyek akhir sistem presensi siswa otomatis berbasis RFID RC522 terintegrasi database Excel.",
                  highlight: "Graduated",
                },
                {
                  year: "2025",
                  title: "Sertifikasi Program Keahlian Komputer IT (Setara D-1)",
                  org: "LPAK FKIP Universitas Muhammadiyah Malang (UMM)",
                  desc: "Menyelesaikan program keahlian aplikasi komputer IT dengan raihan Indeks Prestasi Kumulatif (IPK) sempurna 4.00 (Cum Laude).",
                  highlight: "IPK 4.00 Cum Laude",
                },
                {
                  year: "2025",
                  title: "Top 20 Finalis Walikota Cup Robotics Competition",
                  org: "Kompetisi Robotika Tingkat Kota",
                  desc: "Berhasil menembus jajaran 20 besar dalam kejuaraan rancang bangun hardware dan pemrograman logika robotika Walikota Cup.",
                  highlight: "Top 20 Placement",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div
                    style={{ backgroundColor: bgMain }}
                    className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-orange-500 transition-transform group-hover:scale-125"
                  />
                  <div
                    style={{
                      backgroundColor: bgCard,
                      borderColor: borderCol,
                    }}
                    className="p-5 rounded-2xl border space-y-2 shadow-sm hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold text-orange-500">{item.year}</span>
                      <span className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-orange-500/10 text-orange-600 border border-orange-500/20">
                        {item.highlight}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p style={{ color: textMuted }} className="text-xs font-medium">{item.org}</p>
                    <p style={{ color: textMuted }} className="text-sm leading-relaxed pt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </RevealSection>

        {/* FOOTER & KONTAK */}
        <RevealSection>
          <footer id="kontak" style={{ borderColor: borderCol }} className="pt-12 border-t scroll-mt-24">
            <div
              style={{
                backgroundColor: bgCard,
                borderColor: borderCol,
              }}
              className="p-8 sm:p-10 rounded-3xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm hover:border-orange-500/40 transition-colors duration-300"
            >
              <div className="space-y-2 max-w-xl">
                <p className="text-xs font-mono uppercase tracking-widest text-orange-500 font-semibold">
                  READY TO COLLABORATE?
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Punya Ide Proyek Web atau Eksperimen IoT?
                </h2>
                <p style={{ color: textMuted }} className="text-sm">
                  Terbuka untuk diskusi proyek sekolah, kolaborasi tim rekayasa perangkat lunak, maupun pengembangan sistem mikrokontroler.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-orange-500 to-red-600 text-white hover:opacity-95 hover:scale-105 transition-all duration-200 shadow-lg shadow-orange-600/20 cursor-pointer active:scale-95"
                >
                  {copied ? "✓ Email Disalin!" : "Hubungi via Email"}
                </button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: boxInner,
                    color: textMain,
                  }}
                  className="px-5 py-3 rounded-xl font-semibold text-sm hover:border-orange-500 border border-transparent active:scale-95 transition-all duration-200"
                >
                  Kunjungi GitHub ↗
                </a>
              </div>
            </div>

            <div
              style={{ color: textMuted }}
              className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
            >
              <p>© 2026 Krisna • Kecamatan Kanigaran, Kota Probolinggo, Jawa Timur.</p>
              <p>Dibangun dengan Next.js, TypeScript & Tailwind CSS.</p>
            </div>
          </footer>
        </RevealSection>
      </main>

      {/* POP-UP MODAL STUDI KASUS DENGAN ANIMASI */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setActiveProject(null)}
        >
          <div
            style={{
              backgroundColor: isDark ? "#09090b" : "#ffffff",
              borderColor: borderCol,
              color: textMain,
            }}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 space-y-6 shadow-2xl animate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div style={{ borderColor: borderCol }} className="flex items-start justify-between border-b pb-4">
              <div>
                <span className="text-xs font-mono text-orange-500 uppercase tracking-wider font-semibold">
                  STUDI KASUS TEKNIS // PROJECT {activeProject.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                style={{
                  backgroundColor: boxInner,
                  color: textMuted,
                }}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer hover:bg-orange-500 hover:text-white active:scale-90 transition-all duration-200"
              >
                ✕ TUTUP
              </button>
            </div>

            {/* 1. Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-orange-500 font-semibold">
                [1] OVERVIEW & LATAR BELAKANG
              </h4>
              <p style={{ color: textMain }} className="text-sm leading-relaxed">
                {activeProject.overview}
              </p>
            </div>

            {/* 2. Specs */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-orange-500 font-semibold">
                [2] {activeProject.specsTitle.toUpperCase()}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeProject.specs.map((spec, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: boxInner,
                      borderColor: borderCol,
                    }}
                    className="p-3.5 rounded-xl border hover:border-orange-500/40 transition-colors duration-200"
                  >
                    <p className="text-xs font-mono text-zinc-400">{spec.label}</p>
                    <p className="text-xs font-medium mt-1 leading-relaxed">{spec.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Alur Data */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-orange-500 font-semibold">
                [3] SKEMA ALUR DATA
              </h4>
              <div
                style={{
                  backgroundColor: boxInner,
                  borderColor: borderCol,
                }}
                className="p-4 rounded-xl border space-y-2"
              >
                {activeProject.dataFlow.map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-mono">
                    <span className="w-6 h-6 rounded bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Logika Sistem */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-orange-500 font-semibold">
                [4] {activeProject.logicTitle.toUpperCase()}
              </h4>
              <ul style={{ color: textMain }} className="space-y-2 text-sm list-disc list-inside leading-relaxed">
                {activeProject.logicPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>

            {/* 5. Masalah & Solusi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 space-y-1.5">
                <p className="text-xs font-mono uppercase text-red-500 font-semibold">
                  ⚠️ Tantangan Teknis (Masalah)
                </p>
                <p style={{ color: isDark ? "#fca5a5" : "#b91c1c" }} className="text-xs leading-relaxed">
                  {activeProject.challenge}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1.5">
                <p className="text-xs font-mono uppercase text-emerald-500 font-semibold">
                  ✓ Solusi Rekayasa (Implementasi)
                </p>
                <p style={{ color: isDark ? "#86efac" : "#15803d" }} className="text-xs leading-relaxed">
                  {activeProject.solution}
                </p>
              </div>
            </div>

            {/* 6. Benchmarks */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-orange-500 font-semibold">
                [5] METRIK PENGUJIAN & BENCHMARK
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeProject.benchmarks.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: boxInner,
                      borderColor: borderCol,
                    }}
                    className="p-3 rounded-xl border hover:border-orange-500/40 transition-colors duration-200"
                  >
                    <p className="text-[11px] text-zinc-400">{b.metric}</p>
                    <p className="text-xs font-mono font-bold text-emerald-500 mt-1">{b.result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Modal */}
            <div style={{ borderColor: borderCol }} className="pt-4 border-t flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {activeProject.links.map((lnk, i) => (
                  <a
                    key={i}
                    href={lnk.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-orange-500 text-white hover:bg-orange-600 active:scale-95 transition-all duration-200"
                  >
                    {lnk.label} ↗
                  </a>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                style={{
                  backgroundColor: boxInner,
                  color: textMuted,
                }}
                className="px-4 py-2 rounded-lg text-xs font-medium cursor-pointer hover:bg-zinc-700 active:scale-95 transition-all duration-200"
              >
                Selesai Membaca
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}