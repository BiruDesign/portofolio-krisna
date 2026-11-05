"use client";

import React, { useState, useEffect, useRef } from "react";

interface ProjectCaseStudy {
  id: string;
  number: string;
  category: string;
  status: string;
  accentColor: string;
  accentSoftBg: string;
  accentBorder: string;
  accentBadge: string;
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
    accentColor: "#818cf8", // Deep Indigo/Violet
    accentSoftBg: "rgba(99, 102, 241, 0.12)",
    accentBorder: "rgba(99, 102, 241, 0.35)",
    accentBadge: "#6366f1",
    title: "WebCaprice 26 — Class Portal & IoT Hub",
    subtitle:
      "Menggantikan pengelolaan manual ruang kelas X RPL 1 dengan portal terpusat & telemetri real-time.",
    shortDesc:
      "Portal terpadu untuk direktori siswa, jadwal adaptif berbasis jam aktif, serta pemantauan suhu dan kualitas udara ruang kelas secara langsung dari sensor mikrokontroler.",
    livePreviewTitle: "LIVE CLASSROOM TELEMETRY PREVIEW",
    liveMetrics: [
      { label: "Kelas Aktif", value: "X RPL 1 (Caprice 26)" },
      { label: "Suhu & Udara", value: "27.4°C | Good (DHT22 + MQ135)", statusColor: "text-teal-400" },
      { label: "Sinkronisasi", value: "< 2 Detik Interval", statusColor: "text-indigo-400" },
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
      { label: "Repositori GitHub", url: "https://github.com/BiruDesign" },
    ],
  },
  {
    id: "sipanas",
    number: "02",
    category: "EMBEDDED IOT & AGRICULTURAL AUTOMATION",
    status: "PROTOTYPE SYSTEM",
    accentColor: "#2dd4bf", // Deep Forest Teal
    accentSoftBg: "rgba(20, 184, 166, 0.12)",
    accentBorder: "rgba(20, 184, 166, 0.35)",
    accentBadge: "#0d9488",
    title: "SIPANAS-IoT — Smart Irrigation System",
    subtitle:
      "Sistem otomasi penyiraman presisi berbasis kelembapan tanah aktual dan pemantauan multi-platform.",
    shortDesc:
      "Otomasi pompa air menggunakan mikrokontroler ESP32, sensor kelembapan tanah, dan modul relay dengan kontrol jarak jauh via dashboard web serta aplikasi mobile Flutter.",
    livePreviewTitle: "SOIL & ACTUATOR TELEMETRY WIDGET",
    liveMetrics: [
      { label: "Kelembapan Tanah", value: "72% (Kapasitas Optimal)", statusColor: "text-teal-400" },
      { label: "Status Pompa Relay", value: "STANDBY / AUTO-OFF", statusColor: "text-amber-400" },
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
      { label: "Lihat Source Firmware", url: "https://github.com/BiruDesign" },
      { label: "Dokumentasi Sistem", url: "#" },
    ],
  },
  {
    id: "rfid-attendance",
    number: "03",
    category: "HARDWARE DATA LOGGER & AUTOMATION",
    status: "FINAL PROJECT",
    accentColor: "#fb7185", // Muted Crimson Rose & Amber
    accentSoftBg: "rgba(244, 63, 94, 0.12)",
    accentBorder: "rgba(244, 63, 94, 0.35)",
    accentBadge: "#e11d48",
    title: "RFID Student Attendance & Logger System",
    subtitle:
      "Modernisasi pencatatan kehadiran fisik siswa menjadi sistem rekap database otomatis bebas antrean.",
    shortDesc:
      "Sistem presensi berbasis frekuensi RFID 13.56 MHz menggunakan Arduino Uno, layar LCD 20x4 I2C, dan integrasi output serial langsung ke lembar database Excel via PLX-DAQ.",
    livePreviewTitle: "SERIAL LOGGER SIMULATION",
    liveMetrics: [
      { label: "Frekuensi Modul", value: "13.56 MHz (MFRC522 SPI)" },
      { label: "Kecepatan Verifikasi", value: "< 1.8 Detik / Kartu", statusColor: "text-rose-400" },
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
      { label: "Source Code Arduino (.ino)", url: "https://github.com/BiruDesign" },
    ],
  },
];

// Komponen Reveal bergaya Dinamik 21 (Bisa muncul berulang/re-animate saat scroll naik turun)
function DinamikReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (entry.boundingClientRect.top > 0) {
            // Reset saat elemen kembali berada di bawah layar agar efek scroll selalu hidup
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
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
      style={{ transitionDelay: `${delay}ms` }}
      className={`dinamik-reveal ${isVisible ? "is-visible" : ""} ${className}`}
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
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          setScrollY(currentScroll);
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          setScrollProgress(totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
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

  // Palet Dark Colorful (Obsidian + Deep Jewel Tones) & Warm Editorial Cream
  const bgMain = isDark ? "#0B0D13" : "#F4F1EA";
  const textMain = isDark ? "#ECEFF4" : "#18181B";
  const bgCard = isDark ? "rgba(21, 25, 36, 0.78)" : "rgba(255, 253, 249, 0.88)";
  const borderCol = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(24, 24, 27, 0.1)";
  const textMuted = isDark ? "#94A3B8" : "#57534E";
  const navBg = isDark ? "rgba(11, 13, 19, 0.8)" : "rgba(244, 241, 234, 0.82)";
  const boxInner = isDark ? "#10131C" : "#EAE5DC";

  // Kalkulasi Parallax Hero seperti Dinamik 21
  const heroScale = Math.max(0.92, 1 - scrollY * 0.00025);
  const heroTranslateY = Math.min(80, scrollY * 0.18);
  const photoParallaxY = Math.min(60, scrollY * -0.12);

  return (
    <div
      style={{
        backgroundColor: bgMain,
        color: textMain,
        minHeight: "100vh",
      }}
      className="bg-noise overflow-x-hidden selection:bg-indigo-500 selection:text-white"
    >
      {/* TOP SCROLL PROGRESS BAR (MULTI-COLOR) */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none">
        <div
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #6366f1, #ec4899, #14b8a6, #f59e0b)",
          }}
          className="h-full transition-none"
        />
      </div>

      {/* DEEP MULTI-COLOR AURORA MESH (Muted & Agak Dark, Tidak Neon) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          style={{
            transform: `translate3d(${scrollY * 0.04}px, ${scrollY * -0.05}px, 0)`,
            backgroundColor: isDark ? "rgba(79, 70, 229, 0.13)" : "rgba(99, 102, 241, 0.12)",
          }}
          className="absolute -top-32 -left-32 w-[30rem] h-[30rem] rounded-full blur-[150px]"
        />
        <div
          style={{
            transform: `translate3d(${scrollY * -0.03}px, ${scrollY * 0.04}px, 0)`,
            backgroundColor: isDark ? "rgba(190, 24, 93, 0.1)" : "rgba(244, 63, 94, 0.1)",
          }}
          className="absolute top-1/4 -right-32 w-[28rem] h-[28rem] rounded-full blur-[160px]"
        />
        <div
          style={{
            transform: `translate3d(0px, ${scrollY * -0.04}px, 0)`,
            backgroundColor: isDark ? "rgba(13, 148, 136, 0.1)" : "rgba(20, 184, 166, 0.1)",
          }}
          className="absolute bottom-10 left-1/4 w-[26rem] h-[26rem] rounded-full blur-[150px]"
        />
      </div>

      {/* FLOATING PILL NAVBAR ALA WEB EVENT */}
      <header className="sticky top-4 z-40 px-4 sm:px-6">
        <div
          style={{
            backgroundColor: navBg,
            borderColor: borderCol,
          }}
          className="max-w-5xl mx-auto px-5 h-14 rounded-2xl backdrop-blur-xl border flex items-center justify-between shadow-lg shadow-black/10"
        >
          <a href="#" className="flex items-center gap-2.5 group">
            <div
              style={{
                background: "linear-gradient(135deg, #4f46e5, #be185d, #0d9488)",
              }}
              className="w-8 h-8 rounded-xl flex items-center justify-center font-display font-extrabold text-white text-sm shadow-md group-hover:rotate-6 transition-transform"
            >
              K
            </div>
            <span className="font-display font-extrabold tracking-tight text-sm sm:text-base">
              KRISNA<span className="text-indigo-400">.</span>
              <span className="font-serif-accent italic font-normal text-lg text-rose-400">
                dev
              </span>
            </span>
          </a>

          <nav
            style={{ color: textMuted }}
            className="hidden md:flex items-center gap-7 text-xs font-mono-code uppercase tracking-wider"
          >
            <a href="#tentang" className="hover:text-indigo-400">01. Tentang</a>
            <a href="#proyek" className="hover:text-teal-400">02. Showcase</a>
            <a href="#keahlian" className="hover:text-rose-400">03. Arsenal</a>
            <a href="#riwayat" className="hover:text-amber-400">04. Riwayat</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleToggle}
              style={{
                backgroundColor: boxInner,
                borderColor: borderCol,
                color: isDark ? "#fcd34d" : "#312e81",
              }}
              className="px-3 py-1.5 rounded-xl border text-xs font-mono-code font-semibold cursor-pointer select-none active:scale-90 hover:scale-105 transition-transform"
            >
              {isDark ? "☀ CREAM" : "☾ MIDNIGHT"}
            </button>

            <a
              href="#kontak"
              style={{
                background: "linear-gradient(135deg, #4f46e5, #9333ea, #db2777)",
              }}
              className="px-4 py-1.5 rounded-xl text-xs font-semibold text-white hover:opacity-90 active:scale-95 transition-all shadow-md shadow-indigo-950/50"
            >
              Diskusi ↗
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-10 pb-24 space-y-24">
        {/* HERO SECTION DENGAN PARALLAX SCROLL */}
        <section
          style={{
            transform: `scale(${heroScale}) translateY(${heroTranslateY * 0.25}px)`,
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6 transition-transform duration-75 ease-out"
        >
          <div className="lg:col-span-7 space-y-6">
            <DinamikReveal delay={0}>
              <div
                style={{
                  backgroundColor: bgCard,
                  borderColor: borderCol,
                }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono-code backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-teal-400 -ml-4" />
                <span style={{ color: textMuted }}>
                  PPLG • SMKN 1 PROBOLINGGO // CAPRICE 26
                </span>
              </div>
            </DinamikReveal>

            <DinamikReveal delay={80}>
              <div className="space-y-3">
                <p className="font-mono-code text-xs uppercase tracking-[0.2em] text-indigo-400 font-semibold">
                  [ FULL-STACK WEB & EMBEDDED IOT BUILDER ]
                </p>
                <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08]">
                  Merakit{" "}
                  <span className="font-serif-accent italic font-normal text-5xl sm:text-7xl bg-gradient-to-r from-indigo-400 via-rose-400 to-teal-300 bg-clip-text text-transparent px-1">
                    Antarmuka
                  </span>{" "}
                  Web & Sistem Fisik.
                </h1>
                <h2
                  style={{ color: textMuted }}
                  className="text-lg sm:text-xl font-medium pt-1"
                >
                  Halo, saya <strong style={{ color: textMain }}>Krisna</strong> — pengembang perangkat lunak & mikrokontroler dari Kota Probolinggo.
                </h2>
              </div>
            </DinamikReveal>

            <DinamikReveal delay={160}>
              <p
                style={{ color: textMuted }}
                className="text-sm sm:text-base leading-relaxed max-w-2xl"
              >
                Siswa rekayasa perangkat lunak (<span className="text-indigo-400 font-semibold">Kelas X RPL 1</span>) yang memadukan ekosistem web modern (<span className="text-rose-400 font-medium">Next.js, TypeScript, Tailwind CSS</span>) dengan otomasi perangkat keras cerdas (<span className="text-teal-400 font-medium">ESP32 & Arduino</span>).
              </p>
            </DinamikReveal>

            <DinamikReveal delay={240}>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#proyek"
                  style={{
                    background: "linear-gradient(135deg, #4338ca, #7e22ce, #be185d)",
                  }}
                  className="px-6 py-3.5 rounded-2xl font-display font-bold text-xs uppercase tracking-wider text-white hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-950/40 flex items-center gap-2"
                >
                  Eksplorasi Studi Kasus <span>↓</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    backgroundColor: bgCard,
                    borderColor: borderCol,
                    color: textMain,
                  }}
                  className="px-5 py-3.5 rounded-2xl font-mono-code font-medium text-xs border cursor-pointer hover:border-indigo-400 active:scale-95 transition-all"
                >
                  {copied ? "✓ EMAIL TERSALIN" : "SALIN KONTAK EMAIL"}
                </button>
              </div>
            </DinamikReveal>
          </div>

          {/* FOTO PROFIL DENGAN EFEK PARALLAX MULTI-ACCENT */}
          <div
            style={{
              transform: `translateY(${photoParallaxY * 0.35}px)`,
            }}
            className="lg:col-span-5 flex justify-center transition-transform duration-75 ease-out"
          >
            <DinamikReveal delay={150}>
              <div className="relative w-72 sm:w-80">
                <div
                  style={{
                    background: "linear-gradient(135deg, #4f46e5, #e11d48, #0d9488)",
                  }}
                  className="absolute -inset-2.5 rounded-3xl blur-2xl opacity-35 pointer-events-none"
                />

                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: "rgba(129, 140, 248, 0.35)",
                  }}
                  className="relative rounded-3xl p-2.5 border backdrop-blur-xl shadow-2xl"
                >
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-900 flex items-center justify-center">
                    {!imgError ? (
                      <>
                        <img
                          src="/profile.jpg"
                          alt="Krisna Profile"
                          onError={() => setImgError(true)}
                          className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-700 hover:scale-108"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D13] via-[#0B0D13]/20 to-transparent opacity-85 pointer-events-none" />
                      </>
                    ) : (
                      <div className="relative z-10 text-center p-6 space-y-2">
                        <div
                          style={{
                            background: "linear-gradient(135deg, #4f46e5, #be185d)",
                          }}
                          className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center font-display text-3xl font-extrabold text-white shadow-lg"
                        >
                          K
                        </div>
                        <p className="text-sm font-semibold text-zinc-200">Krisna</p>
                      </div>
                    )}

                    <div className="absolute bottom-3.5 left-4 right-4 z-10 flex items-end justify-between">
                      <div>
                        <p className="text-[11px] font-mono-code font-semibold text-teal-300">
                          KRISNA // X RPL 1
                        </p>
                        <p className="font-display text-sm font-bold text-white">
                          Web & IoT Engineer
                        </p>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono-code bg-indigo-500/30 border border-indigo-400/40 text-indigo-200">
                        2026
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Atas */}
                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: "rgba(45, 212, 191, 0.35)",
                    transform: `translateY(${scrollY * -0.04}px)`,
                  }}
                  className="absolute -top-4 -right-4 z-20 px-3.5 py-2 rounded-2xl border backdrop-blur-xl shadow-xl"
                >
                  <p className="text-[9px] font-mono-code uppercase text-teal-400">
                    LPAK UMM CERT (2025)
                  </p>
                  <p className="font-display text-xs font-extrabold">
                    IPK 4.00 Cum Laude
                  </p>
                </div>

                {/* Floating Badge Bawah */}
                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: "rgba(244, 63, 94, 0.35)",
                    transform: `translateY(${scrollY * 0.03}px)`,
                  }}
                  className="absolute -bottom-4 -left-4 z-20 px-4 py-2.5 rounded-2xl border backdrop-blur-xl shadow-xl"
                >
                  <p className="text-[9px] font-mono-code uppercase tracking-wider text-rose-400 font-semibold">
                    ★ WALIKOTA CUP ROBOTIK
                  </p>
                  <p className="font-display text-xs font-bold">
                    Top 20 Finalist
                  </p>
                </div>
              </div>
            </DinamikReveal>
          </div>
        </section>

        {/* PITA MARQUEE KINETIK (BERGERAK SAAT DI-SCROLL ALA DINAMIK 21) */}
        <DinamikReveal>
          <div
            style={{
              backgroundColor: boxInner,
              borderColor: borderCol,
            }}
            className="py-3.5 px-4 rounded-2xl border overflow-hidden select-none"
          >
            <div
              style={{
                transform: `translateX(${-(scrollY * 0.25) % 600}px)`,
              }}
              className="flex items-center gap-8 whitespace-nowrap font-mono-code text-xs font-semibold tracking-widest uppercase transition-transform duration-75 ease-out"
            >
              <span className="text-indigo-400">✦ NEXT.JS APP ROUTER</span>
              <span style={{ color: textMuted }}>//</span>
              <span className="text-teal-400">✦ ESP32 TELEMETRY</span>
              <span style={{ color: textMuted }}>//</span>
              <span className="text-rose-400">✦ SMART IRRIGATION IOT</span>
              <span style={{ color: textMuted }}>//</span>
              <span className="text-amber-400">✦ RFID HARDWARE LOGGER</span>
              <span style={{ color: textMuted }}>//</span>
              <span className="text-indigo-400">✦ SMKN 1 PROBOLINGGO</span>
              <span style={{ color: textMuted }}>//</span>
              <span className="text-teal-400">✦ FULL-STACK ENGINEERING</span>
              <span style={{ color: textMuted }}>//</span>
              <span className="text-rose-400">✦ CAPRICE TEAM 26</span>
            </div>
          </div>
        </DinamikReveal>

        {/* BENTO STATISTIK MULTI-WARNA */}
        <section className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                num: "10+",
                title: "Proyek Web & IoT",
                desc: "Eksperimen software & mikrokontroler",
                color: "text-indigo-400",
                border: "rgba(99, 102, 241, 0.3)",
                bgTint: "rgba(99, 102, 241, 0.06)",
              },
              {
                num: "4.00",
                title: "IPK Cum Laude (2025)",
                desc: "Sertifikasi Setara D-1 IT LPAK UMM",
                color: "text-teal-400",
                border: "rgba(20, 184, 166, 0.3)",
                bgTint: "rgba(20, 184, 166, 0.06)",
              },
              {
                num: "Top 20",
                title: "Walikota Cup Robotik",
                desc: "Kompetisi Robotika Tingkat Kota",
                color: "text-rose-400",
                border: "rgba(244, 63, 94, 0.3)",
                bgTint: "rgba(244, 63, 94, 0.06)",
              },
            ].map((stat, i) => (
              <DinamikReveal key={i} delay={i * 100}>
                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: stat.border,
                    backgroundImage: `radial-gradient(circle at top right, ${stat.bgTint}, transparent 70%)`,
                  }}
                  className="p-6 rounded-2xl border flex items-center gap-4 backdrop-blur-md hover:-translate-y-1 transition-transform"
                >
                  <div className={`font-display text-3xl sm:text-4xl font-extrabold ${stat.color}`}>
                    {stat.num}
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold">{stat.title}</p>
                    <p style={{ color: textMuted }} className="text-xs">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </DinamikReveal>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: "GitHub", sub: "BiruDesign", href: "https://github.com/BiruDesign", badge: "GH", col: "text-indigo-400" },
              { name: "LinkedIn", sub: "Jaringan Karir", href: "https://linkedin.com", badge: "IN", col: "text-teal-400" },
              { name: "Instagram", sub: "Aktivitas Harian", href: "https://instagram.com", badge: "IG", col: "text-rose-400" },
              { name: "Email Direct", sub: "Diskusi Proyek", href: "#kontak", badge: "EM", col: "text-amber-400" },
            ].map((soc, i) => (
              <DinamikReveal key={i} delay={i * 70}>
                <a
                  href={soc.href}
                  target={soc.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{
                    backgroundColor: bgCard,
                    borderColor: borderCol,
                  }}
                  className="group p-3.5 rounded-2xl border flex items-center gap-3 hover:border-indigo-400/50 hover:-translate-y-1 transition-all"
                >
                  <div
                    style={{ backgroundColor: boxInner }}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono-code text-xs font-bold ${soc.col} group-hover:scale-110 transition-transform`}
                  >
                    {soc.badge}
                  </div>
                  <div>
                    <p className="font-display text-xs font-bold">{soc.name}</p>
                    <p style={{ color: textMuted }} className="text-[11px]">
                      {soc.sub}
                    </p>
                  </div>
                </a>
              </DinamikReveal>
            ))}
          </div>
        </section>

        {/* 01 // TENTANG SAYA */}
        <section id="tentang" className="space-y-8 scroll-mt-24">
          <DinamikReveal>
            <div className="space-y-2">
              <p className="text-xs font-mono-code uppercase tracking-[0.2em] text-indigo-400 font-semibold">
                01 // ARCHITECTURE & PHILOSOPHY
              </p>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
                Menghubungkan Baris Kode dengan{" "}
                <span className="font-serif-accent italic font-normal text-3xl sm:text-5xl text-teal-400">
                  Dunia Fisik
                </span>
              </h2>
            </div>
          </DinamikReveal>

          <DinamikReveal delay={100}>
            <div
              style={{
                backgroundColor: bgCard,
                borderColor: borderCol,
              }}
              className="p-6 sm:p-8 rounded-3xl border space-y-4 leading-relaxed backdrop-blur-md"
            >
              <p>
                Saya memulai eksplorasi di dunia teknologi sejak jenjang MTs di Kota Probolinggo, menyelesaikan
                program sertifikasi aplikasi komputer setara D-1 dari{" "}
                <span className="font-semibold text-indigo-400">
                  LPAK Universitas Muhammadiyah Malang (UMM)
                </span>{" "}
                dengan predikat Cum Laude (IPK 4.00) pada tahun 2025, serta menembus jajaran 20 besar dalam kompetisi robotika Walikota Cup.
              </p>
              <p style={{ color: textMuted }}>
                Di jurusan Pengembangan Perangkat Lunak dan Gim (PPLG), fokus utama saya adalah merancang aplikasi web full-stack menggunakan{" "}
                <span className="text-rose-400 font-medium">Next.js, TypeScript, dan Tailwind CSS</span> yang dapat berkomunikasi langsung dengan sensor dan aktuator pada{" "}
                <span className="text-teal-400 font-medium">ESP32 maupun Arduino</span>.
              </p>
            </div>
          </DinamikReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                no: "01",
                title: "Modern Web Engineering",
                desc: "Pengembangan aplikasi web cepat dan interaktif dengan Next.js App Router, React, TypeScript, dan arsitektur UI modern.",
                accent: "text-indigo-400",
                border: "rgba(99, 102, 241, 0.3)",
                bg: "rgba(99, 102, 241, 0.1)",
              },
              {
                no: "02",
                title: "IoT & Embedded Systems",
                desc: "Integrasi sensor fisik (RFID, DHT22, MQ-135, Soil Moisture) dan kendali aktuator relay pada ESP32 & Arduino.",
                accent: "text-teal-400",
                border: "rgba(20, 184, 166, 0.3)",
                bg: "rgba(20, 184, 166, 0.1)",
              },
              {
                no: "03",
                title: "Telemetry & Data Logging",
                desc: "Pencatatan data real-time melalui protokol HTTP REST, MySQL (Laragon), serta jembatan serial PLX-DAQ Excel.",
                accent: "text-rose-400",
                border: "rgba(244, 63, 94, 0.3)",
                bg: "rgba(244, 63, 94, 0.1)",
              },
            ].map((srv, idx) => (
              <DinamikReveal key={idx} delay={idx * 120}>
                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: srv.border,
                  }}
                  className="p-6 rounded-3xl border space-y-3 h-full hover:-translate-y-2 transition-transform"
                >
                  <div
                    style={{ backgroundColor: srv.bg }}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono-code font-bold text-xs ${srv.accent}`}
                  >
                    {srv.no}
                  </div>
                  <h3 className="font-display text-lg font-bold">{srv.title}</h3>
                  <p style={{ color: textMuted }} className="text-sm leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </DinamikReveal>
            ))}
          </div>
        </section>

        {/* 02 // SHOWCASE PROYEK DENGAN STICKY STACKING ALA DINAMIK */}
        <section id="proyek" className="space-y-10 scroll-mt-24">
          <DinamikReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-mono-code uppercase tracking-[0.2em] text-teal-400 font-semibold">
                  02 // INTERACTIVE ENGINEERING SHOWCASE
                </p>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
                  Karya Pilihan &{" "}
                  <span className="font-serif-accent italic font-normal text-3xl sm:text-5xl text-rose-400">
                    Studi Kasus
                  </span>
                </h2>
              </div>
              <p style={{ color: textMuted }} className="text-xs font-mono-code">
                [ KLIK TOMBOL STUDI KASUS UNTUK BEDAH ARSITEKTUR ]
              </p>
            </div>
          </DinamikReveal>

          {/* Kartu Proyek dengan identitas warna berbeda & efek Sticky saat scroll */}
          <div className="space-y-8">
            {PROJECTS_DATA.map((project, index) => (
              <DinamikReveal key={project.id} delay={index * 100}>
                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: project.accentBorder,
                    backgroundImage: `radial-gradient(circle at 100% 0%, ${project.accentSoftBg}, transparent 55%)`,
                  }}
                  className="rounded-3xl border p-6 sm:p-8 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          style={{
                            backgroundColor: project.accentSoftBg,
                            color: project.accentColor,
                            borderColor: project.accentBorder,
                          }}
                          className="px-3 py-1 rounded-full text-xs font-mono-code font-bold border"
                        >
                          #{project.number} • {project.category}
                        </span>
                        <span
                          style={{
                            backgroundColor: boxInner,
                            color: textMuted,
                          }}
                          className="px-2.5 py-1 text-[11px] font-mono-code rounded-full"
                        >
                          {project.status}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold">
                        {project.title}
                      </h3>

                      <p style={{ color: textMuted }} className="text-sm sm:text-base leading-relaxed">
                        {project.shortDesc}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            style={{
                              backgroundColor: boxInner,
                              color: textMain,
                              borderColor: borderCol,
                            }}
                            className="px-3 py-1 text-xs font-mono-code rounded-xl border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-3">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActiveProject(project);
                          }}
                          style={{
                            backgroundColor: project.accentBadge,
                          }}
                          className="cursor-pointer inline-flex items-center gap-2.5 text-xs font-display font-bold uppercase tracking-wider px-5 py-3 rounded-xl text-white shadow-lg hover:opacity-95 hover:scale-105 active:scale-95 transition-all"
                        >
                          <span>📖 Bedah Studi Kasus Teknis</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>

                    {/* Panel Live Telemetry di Kanan */}
                    <div className="lg:col-span-5">
                      <div
                        style={{
                          backgroundColor: boxInner,
                          borderColor: project.accentBorder,
                        }}
                        className="p-5 rounded-2xl border space-y-3"
                      >
                        <div className="flex items-center justify-between border-b pb-2.5" style={{ borderColor: borderCol }}>
                          <span
                            style={{ color: project.accentColor }}
                            className="text-[11px] font-mono-code uppercase tracking-wider font-bold"
                          >
                            {project.livePreviewTitle}
                          </span>
                          <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                        </div>

                        <div className="space-y-2.5 pt-1">
                          {project.liveMetrics.map((m, idx) => (
                            <div
                              key={idx}
                              style={{
                                backgroundColor: bgCard,
                                borderColor: borderCol,
                              }}
                              className="px-3.5 py-2.5 rounded-xl border flex items-center justify-between"
                            >
                              <span style={{ color: textMuted }} className="text-xs">
                                {m.label}
                              </span>
                              <span className={`text-xs font-mono-code font-bold ${m.statusColor || ""}`}>
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DinamikReveal>
            ))}
          </div>
        </section>

        {/* 03 // TECH STACK MATRIX */}
        <section id="keahlian" className="space-y-8 scroll-mt-24">
          <DinamikReveal>
            <div className="space-y-2">
              <p className="text-xs font-mono-code uppercase tracking-[0.2em] text-rose-400 font-semibold">
                03 // TECHNICAL ARSENAL
              </p>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
                Perangkat Lunak, Hardware &{" "}
                <span className="font-serif-accent italic font-normal text-3xl sm:text-5xl text-amber-400">
                  Ekosistem Kerja
                </span>
              </h2>
            </div>
          </DinamikReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Frontend & Web",
                col: "text-indigo-400",
                border: "rgba(99, 102, 241, 0.3)",
                items: ["Next.js (App Router)", "React 19", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
              },
              {
                title: "Backend & Database",
                col: "text-teal-400",
                border: "rgba(20, 184, 166, 0.3)",
                items: ["Node.js", "RESTful API", "MySQL Database", "Laragon Environment", "Flutter (Mobile UI)", "PLX-DAQ Serial"],
              },
              {
                title: "Hardware & IoT Sensors",
                col: "text-rose-400",
                border: "rgba(244, 63, 94, 0.3)",
                items: ["ESP32 Dual-Core", "Arduino Uno", "mBot2 Robotics", "RFID RC522 & PN532", "DHT11/22 & MQ-135", "HC-SR04, Load Cell, Servo"],
              },
              {
                title: "Workflow & OS",
                col: "text-amber-400",
                border: "rgba(245, 158, 11, 0.3)",
                items: ["VS Code + PlatformIO", "Arduino IDE & Thonny", "Wokwi Simulator", "Git & GitHub", "Linux Mint XFCE", "Windows 11 Pro"],
              },
            ].map((group, idx) => (
              <DinamikReveal key={idx} delay={idx * 90}>
                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: group.border,
                  }}
                  className="p-5 rounded-3xl border space-y-4 h-full hover:-translate-y-1.5 transition-transform"
                >
                  <h3 className={`text-xs font-mono-code uppercase tracking-wider font-bold ${group.col}`}>
                    // {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: boxInner,
                          color: textMain,
                        }}
                        className="px-2.5 py-1.5 text-xs font-medium rounded-xl"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </DinamikReveal>
            ))}
          </div>
        </section>

        {/* 04 // TIMELINE RIWAYAT */}
        <section id="riwayat" className="space-y-8 scroll-mt-24">
          <DinamikReveal>
            <div className="space-y-2">
              <p className="text-xs font-mono-code uppercase tracking-[0.2em] text-amber-400 font-semibold">
                04 // MILESTONES & EDUCATION
              </p>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
                Perjalanan Akademik &{" "}
                <span className="font-serif-accent italic font-normal text-3xl sm:text-5xl text-indigo-400">
                  Kompetisi
                </span>
              </h2>
            </div>
          </DinamikReveal>

          <div
            style={{ borderColor: borderCol }}
            className="relative pl-6 sm:pl-8 border-l-2 space-y-8"
          >
            {[
              {
                year: "2026 — Sekarang",
                title: "Siswa PPLG (Kelas X RPL 1 — Caprice Team 26)",
                org: "SMKN 1 Kota Probolinggo",
                desc: "Mendalami rekayasa perangkat lunak modern, Next.js, serta membangun portal kelas WebCaprice 26 dan otomasi SIPANAS-IoT.",
                highlight: "Active Student",
                dot: "border-indigo-400",
                badge: "text-indigo-300 bg-indigo-500/15 border-indigo-400/30",
              },
              {
                year: "2026",
                title: "Lulus Pendidikan Menengah & Proyek Akhir RFID",
                org: "MTs Negeri Kota Probolinggo",
                desc: "Menyelesaikan pendidikan menengah dan merancang proyek akhir sistem presensi siswa otomatis berbasis RFID RC522 terintegrasi Excel.",
                highlight: "Graduated",
                dot: "border-teal-400",
                badge: "text-teal-300 bg-teal-500/15 border-teal-400/30",
              },
              {
                year: "2025",
                title: "Sertifikasi Program Keahlian Komputer IT (Setara D-1)",
                org: "LPAK FKIP Universitas Muhammadiyah Malang (UMM)",
                desc: "Menyelesaikan program keahlian aplikasi komputer IT dengan raihan Indeks Prestasi Kumulatif (IPK) sempurna 4.00 (Cum Laude).",
                highlight: "IPK 4.00 Cum Laude",
                dot: "border-rose-400",
                badge: "text-rose-300 bg-rose-500/15 border-rose-400/30",
              },
              {
                year: "2025",
                title: "Top 20 Finalis Walikota Cup Robotics Competition",
                org: "Kejuaraan Robotika Tingkat Kota",
                desc: "Menembus jajaran 20 besar dalam kompetisi rancang bangun perangkat keras dan pemrograman logika robotika Walikota Cup.",
                highlight: "Top 20 Placement",
                dot: "border-amber-400",
                badge: "text-amber-300 bg-amber-500/15 border-amber-400/30",
              },
            ].map((item, idx) => (
              <DinamikReveal key={idx} delay={idx * 90}>
                <div className="relative group">
                  <div
                    style={{ backgroundColor: bgMain }}
                    className={`absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full border-2 ${item.dot} group-hover:scale-125 transition-transform`}
                  />
                  <div
                    style={{
                      backgroundColor: bgCard,
                      borderColor: borderCol,
                    }}
                    className="p-6 rounded-3xl border space-y-2 hover:border-indigo-400/40 transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono-code font-bold text-indigo-400">
                        {item.year}
                      </span>
                      <span className={`px-3 py-0.5 text-[11px] font-mono-code rounded-full border ${item.badge}`}>
                        {item.highlight}
                      </span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold">{item.title}</h3>
                    <p style={{ color: textMuted }} className="text-xs font-mono-code">
                      {item.org}
                    </p>
                    <p style={{ color: textMuted }} className="text-sm leading-relaxed pt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </DinamikReveal>
            ))}
          </div>
        </section>

        {/* FOOTER & KONTAK */}
        <DinamikReveal>
          <footer id="kontak" style={{ borderColor: borderCol }} className="pt-12 border-t scroll-mt-24">
            <div
              style={{
                backgroundColor: bgCard,
                borderColor: "rgba(129, 140, 248, 0.3)",
                backgroundImage:
                  "radial-gradient(circle at 0% 100%, rgba(79, 70, 229, 0.14), transparent 50%), radial-gradient(circle at 100% 0%, rgba(13, 148, 136, 0.14), transparent 50%)",
              }}
              className="p-8 sm:p-10 rounded-3xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl"
            >
              <div className="space-y-2 max-w-xl">
                <p className="text-xs font-mono-code uppercase tracking-[0.2em] text-teal-400 font-semibold">
                  READY TO COLLABORATE?
                </p>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
                  Mari Bangun Proyek{" "}
                  <span className="font-serif-accent italic font-normal text-3xl sm:text-5xl text-rose-400">
                    Berikutnya.
                  </span>
                </h2>
                <p style={{ color: textMuted }} className="text-sm">
                  Terbuka untuk kolaborasi rekayasa web, eksperimen sistem mikrokontroler IoT, maupun proyek sekolah.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    background: "linear-gradient(135deg, #4f46e5, #be185d)",
                  }}
                  className="px-6 py-3.5 rounded-2xl font-display font-bold text-xs uppercase tracking-wider text-white hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
                >
                  {copied ? "✓ Email Disalin!" : "Hubungi via Email"}
                </button>
                <a
                  href="https://github.com/BiruDesign"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: boxInner,
                    color: textMain,
                    borderColor: borderCol,
                  }}
                  className="px-5 py-3.5 rounded-2xl font-mono-code font-semibold text-xs border hover:border-teal-400 active:scale-95 transition-all"
                >
                  GitHub @BiruDesign ↗
                </a>
              </div>
            </div>

            <div
              style={{ color: textMuted }}
              className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code"
            >
              <p>© 2026 KRISNA • KANIGARAN, KOTA PROBOLINGGO, JAWA TIMUR.</p>
              <p>CRAFTED WITH NEXT.JS, TYPESCRIPT & TAILWIND CSS.</p>
            </div>
          </footer>
        </DinamikReveal>
      </main>

      {/* POP-UP MODAL STUDI KASUS */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          style={{ backgroundColor: "rgba(6, 8, 15, 0.82)" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md"
          onClick={() => setActiveProject(null)}
        >
          <div
            style={{
              backgroundColor: isDark ? "#0E111A" : "#F4F1EA",
              borderColor: activeProject.accentBorder,
              color: textMain,
            }}
            className="relative w-full max-w-3xl max-h-[86vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl animate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{ borderColor: borderCol }}
              className="flex items-start justify-between border-b pb-4"
            >
              <div>
                <span
                  style={{ color: activeProject.accentColor }}
                  className="text-xs font-mono-code uppercase tracking-wider font-bold"
                >
                  TECHNICAL CASE STUDY // PROJECT {activeProject.number}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                style={{
                  backgroundColor: boxInner,
                  color: textMain,
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono-code font-bold cursor-pointer hover:bg-rose-500 hover:text-white active:scale-90 transition-all"
              >
                ✕ TUTUP
              </button>
            </div>

            <div className="space-y-2">
              <h4
                style={{ color: activeProject.accentColor }}
                className="text-xs font-mono-code uppercase tracking-wider font-bold"
              >
                [01] OVERVIEW & LATAR BELAKANG
              </h4>
              <p className="text-sm leading-relaxed">{activeProject.overview}</p>
            </div>

            <div className="space-y-3">
              <h4
                style={{ color: activeProject.accentColor }}
                className="text-xs font-mono-code uppercase tracking-wider font-bold"
              >
                [02] {activeProject.specsTitle.toUpperCase()}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeProject.specs.map((spec, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: boxInner,
                      borderColor: borderCol,
                    }}
                    className="p-3.5 rounded-2xl border"
                  >
                    <p style={{ color: textMuted }} className="text-xs font-mono-code">
                      {spec.label}
                    </p>
                    <p className="text-xs font-semibold mt-1 leading-relaxed">
                      {spec.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4
                style={{ color: activeProject.accentColor }}
                className="text-xs font-mono-code uppercase tracking-wider font-bold"
              >
                [03] SKEMA ALUR DATA
              </h4>
              <div
                style={{
                  backgroundColor: boxInner,
                  borderColor: borderCol,
                }}
                className="p-4 rounded-2xl border space-y-2.5"
              >
                {activeProject.dataFlow.map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-mono-code">
                    <span
                      style={{
                        backgroundColor: activeProject.accentSoftBg,
                        color: activeProject.accentColor,
                      }}
                      className="w-6 h-6 rounded-lg flex items-center justify-center font-bold shrink-0"
                    >
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4
                style={{ color: activeProject.accentColor }}
                className="text-xs font-mono-code uppercase tracking-wider font-bold"
              >
                [04] {activeProject.logicTitle.toUpperCase()}
              </h4>
              <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
                {activeProject.logicPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-1.5">
                <p className="text-xs font-mono-code uppercase text-rose-400 font-bold">
                  ⚠️ Tantangan Teknis
                </p>
                <p className="text-xs leading-relaxed">{activeProject.challenge}</p>
              </div>
              <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/30 space-y-1.5">
                <p className="text-xs font-mono-code uppercase text-teal-400 font-bold">
                  ✓ Solusi Rekayasa
                </p>
                <p className="text-xs leading-relaxed">{activeProject.solution}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4
                style={{ color: activeProject.accentColor }}
                className="text-xs font-mono-code uppercase tracking-wider font-bold"
              >
                [05] METRIK PENGUJIAN & BENCHMARK
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeProject.benchmarks.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: boxInner,
                      borderColor: borderCol,
                    }}
                    className="p-3.5 rounded-2xl border"
                  >
                    <p style={{ color: textMuted }} className="text-[11px]">
                      {b.metric}
                    </p>
                    <p
                      style={{ color: activeProject.accentColor }}
                      className="text-xs font-mono-code font-bold mt-1"
                    >
                      {b.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{ borderColor: borderCol }}
              className="pt-4 border-t flex flex-wrap items-center justify-between gap-3"
            >
              <div className="flex flex-wrap gap-2">
                {activeProject.links.map((lnk, i) => (
                  <a
                    key={i}
                    href={lnk.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: activeProject.accentBadge }}
                    className="px-4 py-2.5 rounded-xl text-xs font-display font-bold text-white hover:opacity-90 transition-opacity"
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
                  color: textMain,
                }}
                className="px-4 py-2.5 rounded-xl text-xs font-mono-code font-semibold cursor-pointer"
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