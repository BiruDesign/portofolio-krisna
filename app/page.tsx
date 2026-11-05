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
    status: "LIVE PRODUCTION",
    accentColor: "#818cf8",
    accentSoftBg: "rgba(99, 102, 241, 0.12)",
    accentBorder: "rgba(99, 102, 241, 0.35)",
    accentBadge: "#4f46e5",
    title: "WebCaprice 26 — Class Portal & IoT Hub",
    subtitle:
      "Transformasi workflow kelas X RPL 1 lewat satu central hub yang terhubung langsung ke sensor fisik.",
    shortDesc:
      "Platform web terpadu untuk direktori siswa, adaptive schedule yang tahu jam pelajaran aktif secara otomatis, plus live monitoring suhu & kualitas udara ruang kelas dari mikrokontroler ESP32.",
    livePreviewTitle: "LIVE CLASSROOM TELEMETRY",
    liveMetrics: [
      { label: "Active Cohort", value: "X RPL 1 (Caprice 26)" },
      { label: "Room Condition", value: "27.4°C | Good Air (DHT22)", statusColor: "text-teal-400" },
      { label: "Sync Latency", value: "< 2s Real-Time Interval", statusColor: "text-indigo-400" },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "ESP32 Telemetry"],
    overview:
      "Dibangun khusus sebagai central operating system untuk Kelas X RPL 1 (Caprice Team 26) di SMKN 1 Probolinggo. Proyek ini menggabungkan manajemen akademik harian dengan telemetri IoT dalam satu antarmuka yang clean dan responsif.",
    specsTitle: "System Architecture & Specs",
    specs: [
      { label: "Frontend Stack", detail: "Next.js App Router, React 19, Tailwind CSS" },
      { label: "Backend & Data", detail: "Node.js REST API, JSON State Caching & MySQL Integration" },
      { label: "Hardware Node", detail: "ESP32 Dual-Core + Sensor Suhu DHT22 & Kualitas Udara MQ-135" },
      { label: "Transport Layer", detail: "HTTP REST JSON Payload dengan interval push setiap 5 detik" },
    ],
    dataFlow: [
      "Sensing Node di Kelas (ESP32 membaca suhu DHT22 & udara MQ-135)",
      "Transmisi Wi-Fi (HTTP POST / JSON Payload setiap 5 detik)",
      "API Layer (Validasi payload & penyimpanan state terbaru)",
      "Next.js Client UI (Visualisasi real-time & highlight jadwal otomatis)",
    ],
    logicTitle: "Key Features & Engineering",
    logicPoints: [
      "Dynamic Roster Engine: Pencarian instan profil siswa dan pembagian divisi pengurus kelas.",
      "Time-Aware Schedule: Algoritma yang otomatis menyorot mata pelajaran sesuai jam real-time.",
      "Thermal Alert Indicator: Status bar berubah warna secara dinamis jika suhu ruangan melewati 30°C.",
    ],
    challenge:
      "Koneksi Wi-Fi sekolah kadang kurang stabil sehingga pengiriman data dari ESP32 rawan terkena request timeout.",
    solution:
      "Implementasi logika auto-reconnect dan exponential backoff di level firmware C++, dipadukan dengan fallback state caching di sisi server.",
    benchmarks: [
      { metric: "Directory Load", result: "30+ Siswa & Full Matrix Jadwal" },
      { metric: "End-to-End Latency", result: "< 1.5 Detik Update UI" },
      { metric: "System Uptime", result: "99.2% Selama Jam Aktif" },
    ],
    links: [
      { label: "Explore Live Demo", url: "#" },
      { label: "GitHub Repository", url: "https://github.com/BiruDesign" },
    ],
  },
  {
    id: "sipanas",
    number: "02",
    category: "EMBEDDED IOT & SMART AGRICULTURE",
    status: "WORKING PROTOTYPE",
    accentColor: "#2dd4bf",
    accentSoftBg: "rgba(20, 184, 166, 0.12)",
    accentBorder: "rgba(20, 184, 166, 0.35)",
    accentBadge: "#0d9488",
    title: "SIPANAS-IoT — Smart Irrigation System",
    subtitle:
      "Otomasi penyiraman tanaman presisi berbasis data kelembapan tanah aktual dengan kendali lintas platform.",
    shortDesc:
      "Sistem irigasi pintar menggunakan ESP32, capacitive soil moisture sensor, dan aktuator relay pompa yang bisa dipantau maupun di-override langsung dari web dashboard serta aplikasi Flutter.",
    livePreviewTitle: "SOIL & ACTUATOR TELEMETRY",
    liveMetrics: [
      { label: "Soil Moisture", value: "72% (Optimal Level)", statusColor: "text-teal-400" },
      { label: "Relay Pump State", value: "STANDBY / AUTO-OFF", statusColor: "text-amber-400" },
      { label: "Core Controller", value: "ESP32 NodeMCU-32S" },
    ],
    tags: ["ESP32", "C/C++", "Soil Moisture Sensor", "Relay Actuator", "Flutter", "Next.js"],
    overview:
      "Berawal dari masalah penyiraman manual yang sering tidak konsisten. SIPANAS-IoT dirancang agar tanaman mendapatkan suplai air secara presisi berdasarkan pembacaan sensor analog yang sudah dikalibrasi, lengkap dengan dashboard monitoring jarak jauh.",
    specsTitle: "Hardware Specs & Pinout",
    specs: [
      { label: "Microcontroller", detail: "ESP32 NodeMCU-32S (Dual-Core 32-bit LX6)" },
      { label: "Sensor Array", detail: "Capacitive Soil Moisture Sensor (ADC Pin) & DHT22" },
      { label: "Actuator Stage", detail: "Modul Relay 5V Optocoupler + Pompa Air DC / Motorized Valve" },
      { label: "Client Interfaces", detail: "Flutter Mobile App & Next.js Monitoring Dashboard" },
    ],
    dataFlow: [
      "Soil Sensor (Membaca tegangan analog tingkat kekeringan media tanam)",
      "ESP32 Firmware (Filter sinyal ADC & evaluasi batas ambang bawah/atas)",
      "Physical Execution (Trigger relay pompa menyala atau mati otomatis)",
      "Cloud Sync -> Update status secara live ke aplikasi Flutter & Web",
    ],
    logicTitle: "Control Logic & Safety",
    logicPoints: [
      "Hysteresis Loop: Pompa aktif saat kelembapan turun di bawah 40% dan otomatis berhenti saat menyentuh 75%.",
      "Dry-Run Cutoff Protection: Pompa otomatis dimatikan jika menyala lebih dari 120 detik tanpa kenaikan kelembapan (indikasi tangki air habis).",
      "Manual Override Switch: Tombol pemicu instan dari aplikasi mobile kapan saja dibutuhkan.",
    ],
    challenge:
      "Pembacaan pin ADC pada ESP32 rentan mengalami fluktuasi elektrikal (noise) yang bisa memicu relay menyala-mati terlalu cepat (chattering).",
    solution:
      "Menambahkan algoritma Moving Average Filter (merata-ratakan 10 sampel berturut-turut) di kode C++ sebelum mikrokontroler mengambil keputusan.",
    benchmarks: [
      { metric: "ADC Precision", result: "±2.5% Margin Akurasi" },
      { metric: "Actuator Response", result: "< 500 ms Trigger Time" },
      { metric: "Water Efficiency", result: "Hemat ~35% Air vs Manual" },
    ],
    links: [
      { label: "Firmware Source Code", url: "https://github.com/BiruDesign" },
      { label: "System Architecture", url: "#" },
    ],
  },
  {
    id: "rfid-attendance",
    number: "03",
    category: "HARDWARE DATA LOGGER",
    status: "DEPLOYED FINAL PROJECT",
    accentColor: "#fb7185",
    accentSoftBg: "rgba(244, 63, 94, 0.12)",
    accentBorder: "rgba(244, 63, 94, 0.35)",
    accentBadge: "#e11d48",
    title: "RFID Student Attendance & Excel Logger",
    subtitle:
      "Digitalisasi presensi siswa berbasis tap kartu RFID yang langsung terekap rapi ke lembar kerja Excel.",
    shortDesc:
      "Mesin presensi mandiri berbasis frekuensi 13.56 MHz menggunakan Arduino Uno, modul RC522, layar LCD 20x4 I2C, dan integrasi data serial langsung ke Microsoft Excel via PLX-DAQ.",
    livePreviewTitle: "SERIAL LOGGER METRICS",
    liveMetrics: [
      { label: "RF Frequency", value: "13.56 MHz (MFRC522 SPI)" },
      { label: "Tap-to-Log Speed", value: "< 1.8 Detik / Kartu", statusColor: "text-rose-400" },
      { label: "Data Pipeline", value: "Direct Serial CSV to Excel" },
    ],
    tags: ["Arduino Uno", "C/C++", "RFID RC522", "LCD 20x4 I2C", "PLX-DAQ Excel"],
    overview:
      "Proyek akhir saat menempuh pendidikan di MTs Negeri Probolinggo untuk memangkas antrean absensi manual. Sekali tap kartu pelajar, sistem langsung memvalidasi UID, menampilkan nama di layar LCD 20x4, dan mengisi baris baru di Excel secara real-time.",
    specsTitle: "Hardware Configuration",
    specs: [
      { label: "Microcontroller", detail: "Arduino Uno R3 (ATmega328P 16MHz)" },
      { label: "RFID Transceiver", detail: "Modul MFRC522 melalui jalur komunikasi SPI (D9–D13)" },
      { label: "User Feedback", detail: "Layar LCD 20x4 I2C (Pin A4, A5) + Buzzer Indikator" },
      { label: "Data Bridge", detail: "USB Serial (Baudrate 9600) terhubung ke makro PLX-DAQ Excel" },
    ],
    dataFlow: [
      "Tap Kartu RFID (Pembacaan kode unik Hex UID pada frekuensi 13.56 MHz)",
      "Arduino Uno (Verifikasi UID terhadap array database di memori Flash)",
      "Visual & Audio Output (Tampilkan Nama/Status di LCD 20x4 + bunyi Buzzer)",
      "Serial CSV Injection -> Otomatis mengisi kolom Tanggal, Jam, dan Nama di Excel",
    ],
    logicTitle: "Verification Rules & Optimization",
    logicPoints: [
      "Debounce & Cooldown Lock: Mencegah satu kartu tercatat dua kali jika ditempel terlalu lama di reader.",
      "Distinct Audio Cues: Beep pendek tunggal untuk kartu valid, dan beep panjang ganda untuk kartu tidak dikenal.",
      "Zero Manual Entry: Rekap kehadiran harian langsung siap cetak tanpa perlu input ulang oleh guru piket.",
    ],
    challenge:
      "Kapasitas SRAM Arduino Uno sangat terbatas (hanya 2 KB), sehingga rawan penuh ketika menyimpan banyak teks nama siswa.",
    solution:
      "Memindahkan penyimpanan daftar nama dan UID statis ke Flash Memory menggunakan makro PROGMEM, menghemat pemakaian SRAM secara signifikan.",
    benchmarks: [
      { metric: "Transaction Time", result: "< 2 Detik dari Tap ke Excel" },
      { metric: "Read Reliability", result: "99.8% Akurat (Jarak 1–3 cm)" },
      { metric: "SRAM Footprint", result: "Hemat 45% Memori Kerja" },
    ],
    links: [
      { label: "Arduino Sketch (.ino)", url: "https://github.com/BiruDesign" },
    ],
  },
];

// Komponen Scroll Reveal 60fps (Hanya berjalan sekali saat elemen masuk viewport agar enteng)
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
    const currentElem = domRef.current;
    if (!currentElem) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(currentElem);
    return () => observer.disconnect();
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
  const [activeNav, setActiveNav] = useState<string>("tentang");

  // Ref untuk progress bar tanpa memicu re-render React saat scroll
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };

    let rafId: number | null = null;
    const updateScrollProgress = () => {
      if (progressBarRef.current) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBarRef.current.style.width = `${progress}%`;
      }
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateScrollProgress);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const isDark = theme === "dark";

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("krisna.dev@example.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Palet Warna Deep Obsidian & Warm Editorial Cream
  const bgMain = isDark ? "#090B10" : "#F4F1EA";
  const textMain = isDark ? "#F1F5F9" : "#18181B";
  const bgCard = isDark ? "#12151F" : "#FFFFFF";
  const borderCol = isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(24, 24, 27, 0.1)";
  const textMuted = isDark ? "#94A3B8" : "#57534E";
  const navBg = isDark ? "rgba(15, 18, 28, 0.85)" : "rgba(255, 255, 255, 0.88)";
  const boxInner = isDark ? "#0C0E16" : "#EAE5DC";

  const navItems = [
    { id: "tentang", label: "About" },
    { id: "proyek", label: "Works" },
    { id: "keahlian", label: "Stack" },
    { id: "riwayat", label: "Track" },
  ];

  return (
    <div
      style={{
        backgroundColor: bgMain,
        color: textMain,
        minHeight: "100vh",
      }}
      className="bg-dinamik-grid overflow-x-hidden selection:bg-indigo-500 selection:text-white transition-colors duration-300"
    >
      {/* TOP SCROLL PROGRESS BAR (Direct DOM Ref = 0 Re-renders = Anti Lag) */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none">
        <div
          ref={progressBarRef}
          style={{
            width: "0%",
            background: "linear-gradient(90deg, #6366f1, #ec4899, #14b8a6, #f59e0b)",
          }}
          className="h-full"
        />
      </div>

      {/* STATIC AMBIENT GLOW (Ringan di GPU) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(79, 70, 229, 0.14) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
          }}
          className="absolute -top-40 -left-40 w-[34rem] h-[34rem]"
        />
        <div
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(225, 29, 72, 0.11) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(244, 63, 94, 0.1) 0%, transparent 70%)",
          }}
          className="absolute top-1/3 -right-40 w-[32rem] h-[32rem]"
        />
      </div>

      {/* FLOATING CAPSULE NAVBAR ALA DINAMIK 21 */}
      <header className="sticky top-4 z-40 px-3 sm:px-6">
        <div
          style={{
            backgroundColor: navBg,
            borderColor: borderCol,
          }}
          className="max-w-4xl mx-auto p-1.5 sm:px-3 sm:py-2 rounded-full backdrop-blur-md border flex items-center justify-between gap-2 shadow-xl shadow-black/20"
        >
          {/* Brand Pill */}
          <a
            href="#"
            className="flex items-center gap-2.5 pl-2 pr-3 py-1 rounded-full hover:bg-white/5 transition-colors"
          >
            <div
              style={{
                background: "linear-gradient(135deg, #4f46e5, #be185d, #0d9488)",
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center font-display font-extrabold text-white text-xs shadow-md shrink-0"
            >
              K
            </div>
            <div className="flex items-baseline gap-0.5">
              <span className="font-display font-extrabold tracking-tight text-sm sm:text-base">
                KRISNA
              </span>
              <span className="text-indigo-400 font-bold">.</span>
              <span className="font-serif-accent italic text-base sm:text-lg text-rose-400">
                dev
              </span>
            </div>
          </a>

          {/* Center Navigation Pills ala Dinamik 21 (Tampil di Desktop & Tablet) */}
          <nav
            style={{
              backgroundColor: boxInner,
              borderColor: borderCol,
            }}
            className="hidden sm:flex items-center p-1 rounded-full border gap-1"
          >
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveNav(item.id)}
                  style={{
                    backgroundColor: isActive
                      ? isDark
                        ? "rgba(99, 102, 241, 0.2)"
                        : "rgba(99, 102, 241, 0.15)"
                      : "transparent",
                    color: isActive ? "#818cf8" : textMuted,
                  }}
                  className="px-3.5 py-1 rounded-full text-xs font-mono-code font-semibold transition-all hover:text-indigo-400"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Capsule */}
          <div className="flex items-center gap-1.5 pr-1">
            <button
              type="button"
              onClick={handleToggle}
              style={{
                backgroundColor: boxInner,
                borderColor: borderCol,
                color: isDark ? "#fcd34d" : "#312e81",
              }}
              className="px-3 py-1.5 rounded-full border text-[11px] font-mono-code font-bold cursor-pointer select-none active:scale-95 hover:border-indigo-400/50 transition-all"
            >
              {isDark ? "☀ CREAM" : "☾ DARK"}
            </button>

            <a
              href="#kontak"
              style={{
                background: "linear-gradient(135deg, #4f46e5, #9333ea, #db2777)",
              }}
              className="px-4 py-1.5 rounded-full text-xs font-display font-bold text-white hover:opacity-95 active:scale-95 transition-all shadow-md shadow-indigo-950/50 flex items-center gap-1"
            >
              <span>Collab</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 pt-10 pb-24 space-y-24">
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-4">
          <div className="lg:col-span-7 space-y-6">
            <DinamikReveal delay={0}>
              <div
                style={{
                  backgroundColor: bgCard,
                  borderColor: borderCol,
                }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono-code"
              >
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span style={{ color: textMuted }}>
                  OPEN FOR COLLAB • PPLG SMKN 1 PROBOLINGGO
                </span>
              </div>
            </DinamikReveal>

            <DinamikReveal delay={60}>
              <div className="space-y-3">
                <p className="font-mono-code text-xs uppercase tracking-[0.2em] text-indigo-400 font-semibold">
                  [ CREATIVE WEB DEVELOPER & IOT ENGINEER ]
                </p>
                <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08]">
                  Crafting{" "}
                  <span className="font-serif-accent italic font-normal text-5xl sm:text-7xl bg-gradient-to-r from-indigo-400 via-rose-400 to-teal-300 bg-clip-text text-transparent px-1">
                    Seamless
                  </span>{" "}
                  Web & Smart Hardware.
                </h1>
                <h2
                  style={{ color: textMuted }}
                  className="text-base sm:text-xl font-medium pt-1 leading-relaxed"
                >
                  Halo, gue <strong style={{ color: textMain }}>Krisna</strong> —{" "}
                  <em>hands-on builder</em> yang fokus merancang aplikasi web modern dan mengintegrasikannya langsung dengan sistem mikrokontroler.
                </h2>
              </div>
            </DinamikReveal>

            <DinamikReveal delay={120}>
              <p
                style={{ color: textMuted }}
                className="text-sm sm:text-base leading-relaxed max-w-2xl"
              >
                Berangkat dari <em>mindset problem-solving</em> di{" "}
                <span className="text-indigo-400 font-semibold">Kelas X RPL 1 (Caprice 26)</span>, gue suka nge-<em>bridge</em> antara ekosistem frontend modern (<span className="text-rose-400 font-medium">Next.js, TypeScript, Tailwind CSS</span>) dengan perangkat keras IoT (<span className="text-teal-400 font-medium">ESP32 & Arduino</span>). <em>No fluff, just solid engineering.</em>
              </p>
            </DinamikReveal>

            <DinamikReveal delay={180}>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#proyek"
                  style={{
                    background: "linear-gradient(135deg, #4338ca, #7e22ce, #be185d)",
                  }}
                  className="px-6 py-3.5 rounded-2xl font-display font-bold text-xs uppercase tracking-wider text-white hover:scale-[1.03] active:scale-95 transition-transform shadow-xl shadow-indigo-950/40 flex items-center gap-2"
                >
                  <span>Explore Case Studies</span>
                  <span>↓</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    backgroundColor: bgCard,
                    borderColor: borderCol,
                    color: textMain,
                  }}
                  className="px-5 py-3.5 rounded-2xl font-mono-code font-semibold text-xs border cursor-pointer hover:border-indigo-400 active:scale-95 transition-all"
                >
                  {copied ? "✓ EMAIL COPIED!" : "COPY EMAIL ADDRESS"}
                </button>
              </div>
            </DinamikReveal>
          </div>

          {/* KARTU PROFIL BARU: BEBAS TERTUTUP / OVERLAP */}
          <div className="lg:col-span-5 flex justify-center">
            <DinamikReveal delay={100} className="w-full max-w-sm">
              <div className="relative">
                {/* Glow Halus di Belakang Kartu */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #4f46e5, #e11d48, #0d9488)",
                  }}
                  className="absolute -inset-1.5 rounded-[2rem] blur-xl opacity-30 pointer-events-none"
                />

                {/* Bingkai Utama Kartu Profil */}
                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: "rgba(129, 140, 248, 0.3)",
                  }}
                  className="relative rounded-[1.75rem] p-3 border shadow-2xl space-y-3"
                >
                  {/* Top Bar Kartu ala ID Pass Festival Dinamik */}
                  <div className="flex items-center justify-between px-2 pt-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400" />
                      <span className="text-[10px] font-mono-code uppercase tracking-wider text-teal-400 font-bold">
                        BUILDER PASS // 2026
                      </span>
                    </div>
                    <span
                      style={{ backgroundColor: boxInner, color: textMuted }}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono-code font-semibold"
                    >
                      ID: X-RPL-1
                    </span>
                  </div>

                  {/* Frame Foto Bersih (Tanpa Badge yang Menutupi Teks) */}
                  <div className="relative aspect-[4/4.3] w-full rounded-2xl overflow-hidden bg-zinc-900">
                    {!imgError ? (
                      <img
                        src="/profile.jpg"
                        alt="Krisna Profile"
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-2">
                        <div
                          style={{
                            background: "linear-gradient(135deg, #4f46e5, #be185d)",
                          }}
                          className="w-20 h-20 rounded-2xl flex items-center justify-center font-display text-3xl font-extrabold text-white shadow-lg"
                        >
                          K
                        </div>
                        <p className="text-sm font-semibold text-zinc-200">Krisna</p>
                      </div>
                    )}
                  </div>

                  {/* Baris Identitas di Bawah Foto (100% Jelas & Tidak Tertutup) */}
                  <div
                    style={{
                      backgroundColor: boxInner,
                      borderColor: borderCol,
                    }}
                    className="p-3.5 rounded-2xl border flex items-center justify-between"
                  >
                    <div>
                      <p className="text-[11px] font-mono-code font-bold text-indigo-400">
                        KRISNA // CAPRICE 26
                      </p>
                      <p className="font-display text-base font-extrabold">
                        Web &amp; IoT Engineer
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono-code font-bold bg-indigo-500/15 border border-indigo-400/30 text-indigo-300">
                      PROBOLINGGO
                    </span>
                  </div>

                  {/* Dua Badge Prestasi Tersusun Rapi di Bawah (Tidak Menabrak Foto) */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div
                      style={{
                        backgroundColor: boxInner,
                        borderColor: "rgba(45, 212, 191, 0.3)",
                      }}
                      className="p-3 rounded-xl border"
                    >
                      <p className="text-[9px] font-mono-code uppercase text-teal-400 font-bold">
                        ✦ LPAK UMM CERT
                      </p>
                      <p className="font-display text-xs font-extrabold mt-0.5">
                        GPA 4.00 Cum Laude
                      </p>
                    </div>

                    <div
                      style={{
                        backgroundColor: boxInner,
                        borderColor: "rgba(244, 63, 94, 0.3)",
                      }}
                      className="p-3 rounded-xl border"
                    >
                      <p className="text-[9px] font-mono-code uppercase text-rose-400 font-bold">
                        ★ WALIKOTA CUP
                      </p>
                      <p className="font-display text-xs font-extrabold mt-0.5">
                        Top 20 Robotics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DinamikReveal>
          </div>
        </section>

        {/* SMOOTH INFINITE MARQUEE (Murni CSS GPU = Anti Patah-Patah) */}
        <DinamikReveal>
          <div
            style={{
              backgroundColor: boxInner,
              borderColor: borderCol,
            }}
            className="py-3.5 rounded-2xl border overflow-hidden select-none"
          >
            <div className="animate-marquee-smooth font-mono-code text-xs font-semibold tracking-widest uppercase">
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex items-center gap-8 px-4">
                  <span className="text-indigo-400">✦ NEXT.JS APP ROUTER</span>
                  <span style={{ color: textMuted }}>//</span>
                  <span className="text-teal-400">✦ ESP32 TELEMETRY</span>
                  <span style={{ color: textMuted }}>//</span>
                  <span className="text-rose-400">✦ SMART IRRIGATION IOT</span>
                  <span style={{ color: textMuted }}>//</span>
                  <span className="text-amber-400">✦ RFID HARDWARE LOGGER</span>
                  <span style={{ color: textMuted }}>//</span>
                  <span className="text-indigo-400">✦ FULL-STACK EXECUTION</span>
                  <span style={{ color: textMuted }}>//</span>
                  <span className="text-teal-400">✦ CAPRICE TEAM 26</span>
                  <span style={{ color: textMuted }}>//</span>
                </div>
              ))}
            </div>
          </div>
        </DinamikReveal>

        {/* BENTO METRICS & SOCIAL CHANNELS */}
        <section className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                num: "10+",
                title: "Shipped Builds",
                desc: "Eksperimen web app & mikrokontroler",
                color: "text-indigo-400",
                border: "rgba(99, 102, 241, 0.3)",
                bgTint: "rgba(99, 102, 241, 0.07)",
              },
              {
                num: "4.00",
                title: "Perfect GPA (2025)",
                desc: "Program Setara D-1 IT LPAK UMM",
                color: "text-teal-400",
                border: "rgba(20, 184, 166, 0.3)",
                bgTint: "rgba(20, 184, 166, 0.07)",
              },
              {
                num: "Top 20",
                title: "Walikota Cup Robotics",
                desc: "Finalis Kompetisi Robotika Kota",
                color: "text-rose-400",
                border: "rgba(244, 63, 94, 0.3)",
                bgTint: "rgba(244, 63, 94, 0.07)",
              },
            ].map((stat, i) => (
              <DinamikReveal key={i} delay={i * 70}>
                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: stat.border,
                    backgroundImage: `radial-gradient(circle at top right, ${stat.bgTint}, transparent 70%)`,
                  }}
                  className="p-6 rounded-2xl border flex items-center gap-4 hover:-translate-y-1 transition-transform"
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
              { name: "GitHub", sub: "@BiruDesign", href: "https://github.com/BiruDesign", badge: "GH", col: "text-indigo-400" },
              { name: "LinkedIn", sub: "Professional Network", href: "https://linkedin.com", badge: "IN", col: "text-teal-400" },
              { name: "Instagram", sub: "Daily Snapshot", href: "https://instagram.com", badge: "IG", col: "text-rose-400" },
              { name: "Direct Mail", sub: "Fast Response", href: "#kontak", badge: "EM", col: "text-amber-400" },
            ].map((soc, i) => (
              <DinamikReveal key={i} delay={i * 50}>
                <a
                  href={soc.href}
                  target={soc.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{
                    backgroundColor: bgCard,
                    borderColor: borderCol,
                  }}
                  className="group p-3.5 rounded-2xl border flex items-center gap-3 hover:border-indigo-400/50 hover:-translate-y-0.5 transition-all"
                >
                  <div
                    style={{ backgroundColor: boxInner }}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono-code text-xs font-bold ${soc.col}`}
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

        {/* 01 // ABOUT & APPROACH */}
        <section id="tentang" className="space-y-8 scroll-mt-24">
          <DinamikReveal>
            <div className="space-y-2">
              <p className="text-xs font-mono-code uppercase tracking-[0.2em] text-indigo-400 font-semibold">
                01 // THE MINDSET & EXECUTION
              </p>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
                Dimana Software Modern Ketemu{" "}
                <span className="font-serif-accent italic font-normal text-3xl sm:text-5xl text-teal-400">
                  Hardware Fisik
                </span>
              </h2>
            </div>
          </DinamikReveal>

          <DinamikReveal delay={60}>
            <div
              style={{
                backgroundColor: bgCard,
                borderColor: borderCol,
              }}
              className="p-6 sm:p-8 rounded-3xl border space-y-4 leading-relaxed"
            >
              <p>
                Perjalanan teknis gue dimulai sejak bangku MTs di Kota Probolinggo—menyelesaikan program sertifikasi IT setara D-1 dari{" "}
                <span className="font-semibold text-indigo-400">
                  LPAK Universitas Muhammadiyah Malang (UMM)
                </span>{" "}
                dengan predikat <em>Cum Laude</em> (GPA 4.00), sekaligus menembus <em>Top 20 Finalist</em> di ajang Walikota Cup Robotics.
              </p>
              <p style={{ color: textMuted }}>
                Sekarang di jurusan PPLG, fokus utama gue adalah mengeksekusi produk digital secara <em>end-to-end</em>: merancang UI yang <em>clean</em> dan responsif dengan{" "}
                <span className="text-rose-400 font-medium">Next.js, TypeScript, serta Tailwind CSS</span>, lalu menyambungkannya langsung ke sensor dan aktuator dunia nyata lewat{" "}
                <span className="text-teal-400 font-medium">ESP32 maupun Arduino</span>.
              </p>
            </div>
          </DinamikReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                no: "01",
                title: "Full-Stack Web Crafting",
                desc: "Membangun web app yang cepat, scalable, dan sedap dipandang pakai Next.js App Router, React, TypeScript, dan Tailwind CSS.",
                accent: "text-indigo-400",
                border: "rgba(99, 102, 241, 0.3)",
                bg: "rgba(99, 102, 241, 0.1)",
              },
              {
                no: "02",
                title: "IoT & Smart Hardware",
                desc: "Merakit dan memprogram sistem mikrokontroler (ESP32, Arduino) lengkap dengan sensor presisi dan kendali relay otomatis.",
                accent: "text-teal-400",
                border: "rgba(20, 184, 166, 0.3)",
                bg: "rgba(20, 184, 166, 0.1)",
              },
              {
                no: "03",
                title: "Real-Time Data Pipeline",
                desc: "Integrasi aliran data dari hardware ke layar dashboard via REST API, MySQL (Laragon), maupun jembatan serial PLX-DAQ.",
                accent: "text-rose-400",
                border: "rgba(244, 63, 94, 0.3)",
                bg: "rgba(244, 63, 94, 0.1)",
              },
            ].map((srv, idx) => (
              <DinamikReveal key={idx} delay={idx * 80}>
                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: srv.border,
                  }}
                  className="p-6 rounded-3xl border space-y-3 h-full hover:-translate-y-1.5 transition-transform"
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

        {/* 02 // SELECTED WORKS & CASE STUDIES */}
        <section id="proyek" className="space-y-10 scroll-mt-24">
          <DinamikReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-mono-code uppercase tracking-[0.2em] text-teal-400 font-semibold">
                  02 // SELECTED WORKS & CASE STUDIES
                </p>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
                  Featured Builds &{" "}
                  <span className="font-serif-accent italic font-normal text-3xl sm:text-5xl text-rose-400">
                    System Breakdown
                  </span>
                </h2>
              </div>
              <p style={{ color: textMuted }} className="text-xs font-mono-code">
                [ KLIK TOMBOL DI KARTU BUAT LIHAT ARSITEKTUR LENGKAPNYA ]
              </p>
            </div>
          </DinamikReveal>

          <div className="space-y-8">
            {PROJECTS_DATA.map((project, index) => (
              <DinamikReveal key={project.id} delay={index * 70}>
                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: project.accentBorder,
                    backgroundImage: `radial-gradient(circle at 100% 0%, ${project.accentSoftBg}, transparent 55%)`,
                  }}
                  className="rounded-3xl border p-6 sm:p-8 shadow-xl hover:border-indigo-400/60 transition-colors"
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
                            setActiveProject(project);
                          }}
                          style={{
                            backgroundColor: project.accentBadge,
                          }}
                          className="cursor-pointer inline-flex items-center gap-2.5 text-xs font-display font-bold uppercase tracking-wider px-5 py-3 rounded-xl text-white shadow-lg hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all"
                        >
                          <span>📖 Breakdown Arsitektur & Studi Kasus</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>

                    {/* Panel Live Telemetry */}
                    <div className="lg:col-span-5">
                      <div
                        style={{
                          backgroundColor: boxInner,
                          borderColor: project.accentBorder,
                        }}
                        className="p-5 rounded-2xl border space-y-3"
                      >
                        <div
                          className="flex items-center justify-between border-b pb-2.5"
                          style={{ borderColor: borderCol }}
                        >
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

        {/* 03 // TECH STACK ARSENAL */}
        <section id="keahlian" className="space-y-8 scroll-mt-24">
          <DinamikReveal>
            <div className="space-y-2">
              <p className="text-xs font-mono-code uppercase tracking-[0.2em] text-rose-400 font-semibold">
                03 // DAILY DRIVER & TOOLKIT
              </p>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
                Tech Stack Andalan &{" "}
                <span className="font-serif-accent italic font-normal text-3xl sm:text-5xl text-amber-400">
                  Lab Setup
                </span>
              </h2>
            </div>
          </DinamikReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Frontend & UI",
                col: "text-indigo-400",
                border: "rgba(99, 102, 241, 0.3)",
                items: ["Next.js (App Router)", "React 19", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
              },
              {
                title: "Backend & Mobility",
                col: "text-teal-400",
                border: "rgba(20, 184, 166, 0.3)",
                items: ["Node.js", "RESTful API", "MySQL Database", "Laragon Stack", "Flutter (Mobile)", "PLX-DAQ Serial"],
              },
              {
                title: "Hardware & Sensors",
                col: "text-rose-400",
                border: "rgba(244, 63, 94, 0.3)",
                items: ["ESP32 Dual-Core", "Arduino Uno", "mBot2 Robotics", "RFID RC522 & PN532", "DHT22 & MQ-135", "HC-SR04, Load Cell, Servo"],
              },
              {
                title: "Workflow & Environment",
                col: "text-amber-400",
                border: "rgba(245, 158, 11, 0.3)",
                items: ["VS Code + PlatformIO", "Arduino IDE & Thonny", "Wokwi Simulator", "Git & GitHub CI/CD", "Linux Mint XFCE", "Windows 11 Pro"],
              },
            ].map((group, idx) => (
              <DinamikReveal key={idx} delay={idx * 60}>
                <div
                  style={{
                    backgroundColor: bgCard,
                    borderColor: group.border,
                  }}
                  className="p-5 rounded-3xl border space-y-4 h-full hover:-translate-y-1 transition-transform"
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

        {/* 04 // TRACK RECORD & MILESTONES */}
        <section id="riwayat" className="space-y-8 scroll-mt-24">
          <DinamikReveal>
            <div className="space-y-2">
              <p className="text-xs font-mono-code uppercase tracking-[0.2em] text-amber-400 font-semibold">
                04 // TRACK RECORD & MILESTONES
              </p>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
                Academic Journey &{" "}
                <span className="font-serif-accent italic font-normal text-3xl sm:text-5xl text-indigo-400">
                  Achievements
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
                year: "2026 — Present",
                title: "Software Engineering Student (Kelas X RPL 1 — Caprice 26)",
                org: "SMKN 1 Kota Probolinggo",
                desc: "Fokus mendalami full-stack web development dengan Next.js sekaligus menginisiasi portal kelas WebCaprice 26 dan otomasi SIPANAS-IoT.",
                highlight: "Current Cohort",
                dot: "border-indigo-400",
                badge: "text-indigo-300 bg-indigo-500/15 border-indigo-400/30",
              },
              {
                year: "2026",
                title: "Junior High Graduation & RFID Final Project",
                org: "MTs Negeri Kota Probolinggo",
                desc: "Lulus pendidikan menengah dengan karya akhir sistem presensi siswa berbasis kartu RFID RC522 yang terintegrasi otomatis ke database Excel.",
                highlight: "Alumni",
                dot: "border-teal-400",
                badge: "text-teal-300 bg-teal-500/15 border-teal-400/30",
              },
              {
                year: "2025",
                title: "D-1 Equivalent IT Skills Certification",
                org: "LPAK FKIP Universitas Muhammadiyah Malang (UMM)",
                desc: "Menuntaskan program sertifikasi rekayasa & aplikasi komputer setara D-1 dengan pencapaian IPK sempurna 4.00 (Cum Laude).",
                highlight: "4.00 GPA Cum Laude",
                dot: "border-rose-400",
                badge: "text-rose-300 bg-rose-500/15 border-rose-400/30",
              },
              {
                year: "2025",
                title: "Top 20 Finalist — Walikota Cup Robotics",
                org: "Kejuaraan Robotika Tingkat Kota",
                desc: "Masuk jajaran 20 besar terbaik dalam kompetisi rancang bangun perangkat keras dan algoritma navigasi robotika.",
                highlight: "Top 20 Finalist",
                dot: "border-amber-400",
                badge: "text-amber-300 bg-amber-500/15 border-amber-400/30",
              },
            ].map((item, idx) => (
              <DinamikReveal key={idx} delay={idx * 60}>
                <div className="relative group">
                  <div
                    style={{ backgroundColor: bgMain }}
                    className={`absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full border-2 ${item.dot}`}
                  />
                  <div
                    style={{
                      backgroundColor: bgCard,
                      borderColor: borderCol,
                    }}
                    className="p-6 rounded-3xl border space-y-2 hover:border-indigo-400/40 transition-colors"
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

        {/* FOOTER & COLLABORATION CTA */}
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
                  LET&apos;S BUILD SOMETHING COOL
                </p>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
                  Ada Ide Web App atau{" "}
                  <span className="font-serif-accent italic font-normal text-3xl sm:text-5xl text-rose-400">
                    Proyek IoT?
                  </span>
                </h2>
                <p style={{ color: textMuted }} className="text-sm leading-relaxed">
                  Selalu terbuka buat diskusi seputar <em>software development</em>, kolaborasi tim kompetisi, atau ngulik bareng proyek mikrokontroler. <em>Hit me up anytime!</em>
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    background: "linear-gradient(135deg, #4f46e5, #be185d)",
                  }}
                  className="px-6 py-3.5 rounded-2xl font-display font-bold text-xs uppercase tracking-wider text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-lg"
                >
                  {copied ? "✓ Email Copied!" : "Drop an Email"}
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
              <p>© 2026 KRISNA • KANIGARAN, PROBOLINGGO — BUILT WITH PASSION.</p>
              <p>NEXT.JS • TYPESCRIPT • TAILWIND CSS</p>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-sm"
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
                ✕ CLOSE
              </button>
            </div>

            <div className="space-y-2">
              <h4
                style={{ color: activeProject.accentColor }}
                className="text-xs font-mono-code uppercase tracking-wider font-bold"
              >
                [01] BACKGROUND & CONTEXT
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
                [03] END-TO-END DATA PIPELINE
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
                  ⚠️ Pain Point / Bottleneck
                </p>
                <p className="text-xs leading-relaxed">{activeProject.challenge}</p>
              </div>
              <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/30 space-y-1.5">
                <p className="text-xs font-mono-code uppercase text-teal-400 font-bold">
                  ✓ Engineering Solution
                </p>
                <p className="text-xs leading-relaxed">{activeProject.solution}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4
                style={{ color: activeProject.accentColor }}
                className="text-xs font-mono-code uppercase tracking-wider font-bold"
              >
                [05] PERFORMANCE BENCHMARKS
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
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}