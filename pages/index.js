import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaEnvelope,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaMoon,
  FaSun,
  FaWhatsapp,
} from "react-icons/fa";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";

const projects = [
  {
    title: "Pembangunan Rumah Kontraktor",
    category: "Arsitektur & Konstruksi",
    description:
      "Website jasa pembangunan rumah dan arsitektur modern dengan presentasi layanan yang rapi dan profesional.",
    image: web1,
    href: "https://pembangunanrumahkontraktor.vercel.app",
  },
  {
    title: "Herodian Teknik",
    category: "Teknik & Industri",
    description:
      "Profil digital layanan rekayasa teknik, pemeliharaan sistem, dan solusi industri.",
    image: web2,
    href: "https://herodianteknik.vercel.app",
  },
  {
    title: "Mamah Ines Laundry",
    category: "Layanan Digital",
    description:
      "Website layanan laundry yang dirancang untuk membantu pelanggan mendapatkan informasi dan memesan layanan dengan mudah.",
    image: web3,
    href: "https://mamahineslaundry.vercel.app",
  },
];

const experience = [
  {
    role: "Mitra Driver Online & Logistik",
    company: "Grab, Shopee Driver, Green SM, InDrive",
    period: "2026 – Sekarang",
    description:
      "Melayani penjemputan dan pengantaran penumpang maupun logistik dengan mengutamakan ketepatan waktu, keramahan, serta pemilihan rute yang efisien dan aman.",
  },
  {
    role: "Calon Field Agent",
    company: "PT Home Credit Indonesia",
    period: "Agustus 2026",
    description:
      "Mempersiapkan verifikasi data lapangan secara teliti serta komunikasi yang efektif, sopan, dan persuasif dengan calon nasabah.",
  },
  {
    role: "F&B Crew",
    company: "Wizzmie",
    period: "Pengalaman operasional F&B",
    description:
      "Menangani pesanan konsumen dengan cekatan, menjaga penyajian tetap higienis, serta memastikan kebersihan dan kerapian outlet.",
  },
  {
    role: "Freelance Digital Printing",
    company: "Cetakers x Twin Project",
    period: "Pengalaman cetak & produksi",
    description:
      "Mengoperasikan mesin cetak digital dan menyelesaikan proses finishing dengan teliti sesuai spesifikasi pesanan.",
  },
  {
    role: "Housekeeping Staff",
    company: "Layanan Kebersihan Area",
    period: "Standar SOP",
    description:
      "Menjaga kebersihan, kerapian, dan kenyamanan lingkungan kerja secara konsisten sesuai prosedur operasional.",
  },
];

const education = [
  { school: "SMK Puspita Bangsa", detail: "Lulus 2024" },
  { school: "MTs Al-Ikhsan", detail: "Pendidikan menengah pertama" },
  { school: "SDN Ciledug Barat", detail: "Pendidikan dasar" },
];

const skills = [
  "Pelayanan pelanggan",
  "Presentasi web digital",
  "Navigasi area Jabodetabek",
  "Operasional F&B & housekeeping",
  "Digital printing & finishing",
  "Microsoft Office & Word",
  "Komunikasi yang ramah",
  "Ketelitian dan disiplin waktu",
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rafli Nugroho | Portofolio & CV</title>
        <meta
          name="description"
          content="Portofolio dan curriculum vitae Rafli Nugroho, profesional muda dari Pamulang, Tangerang Selatan."
        />
        <meta name="theme-color" content={darkMode ? "#0b1424" : "#f7f5f2"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen overflow-hidden bg-[#f7f5f2] text-[#182337] transition-colors duration-300 dark:bg-[#0b1424] dark:text-[#f5f3f0]">
        <div className="pointer-events-none fixed inset-0 -z-0 opacity-40" aria-hidden="true">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-red-200/50 blur-3xl dark:bg-red-700/20" />
          <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-700/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between border-b border-[#17243a]/10 py-6 dark:border-white/10">
            <a href="#home" className="flex items-center gap-3" aria-label="Rafli Nugroho, ke beranda">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b92832] font-serif text-lg font-bold text-white shadow-lg shadow-red-900/20">
                RN
              </span>
              <span>
                <span className="block font-serif text-lg font-bold leading-tight">Rafli Nugroho</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b92832]">Portfolio & CV</span>
              </span>
            </a>
            <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
              <a className="transition hover:text-[#b92832]" href="#profil">Profil</a>
              <a className="transition hover:text-[#b92832]" href="#pengalaman">Pengalaman</a>
              <a className="transition hover:text-[#b92832]" href="#proyek">Proyek</a>
              <a className="transition hover:text-[#b92832]" href="#kontak">Kontak</a>
            </nav>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                aria-label={darkMode ? "Aktifkan tema terang" : "Aktifkan tema gelap"}
                className="rounded-full border border-slate-300 p-2.5 text-[#b92832] transition hover:border-[#b92832] dark:border-slate-600"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <a
                href="https://wa.me/6283151902491"
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 rounded-full bg-[#b92832] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#961e28] sm:flex"
              >
                <FaWhatsapp /> Hubungi
              </a>
            </div>
          </header>

          <section id="home" className="grid min-h-[78vh] items-center gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20">
            <div className="order-2 md:order-1">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[#9f202a] dark:border-red-400/20 dark:bg-white/5 dark:text-red-200">
                <FaMapMarkerAlt /> Pamulang, Tangerang Selatan
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#b92832]">Portofolio profesional</p>
              <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Rafli <span className="text-[#b92832]">Nugroho.</span>
              </h1>
              <h2 className="mt-5 max-w-xl text-xl font-semibold leading-snug text-slate-700 dark:text-slate-200 sm:text-2xl">
                Ketelitian operasional. Layanan yang berkesan. Solusi digital.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
                Profesional muda yang berpengalaman di bidang layanan pelanggan, operasional, logistik, produksi, dan pengembangan presentasi web. Saya mengutamakan tanggung jawab, komunikasi yang baik, serta hasil kerja yang rapi.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#proyek" className="inline-flex items-center gap-2 rounded-xl bg-[#b92832] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition hover:-translate-y-0.5 hover:bg-[#961e28]">
                  Lihat Portofolio <FaArrowRight className="text-xs" />
                </a>
                <a href="mailto:raflinugroho88@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3.5 text-sm font-bold transition hover:border-[#b92832] hover:text-[#b92832] dark:border-slate-600 dark:hover:text-red-300">
                  <FaEnvelope /> Kirim Email
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-6 dark:border-white/10">
                <div><p className="font-serif text-2xl font-bold text-[#b92832]">5+</p><p className="text-xs text-slate-500 dark:text-slate-400">Bidang pengalaman</p></div>
                <div><p className="font-serif text-2xl font-bold text-[#b92832]">3</p><p className="text-xs text-slate-500 dark:text-slate-400">Proyek web</p></div>
                <div><p className="font-serif text-2xl font-bold text-[#b92832]">2024</p><p className="text-xs text-slate-500 dark:text-slate-400">Lulus SMK</p></div>
              </div>
            </div>

            <div className="order-1 mx-auto w-full max-w-md md:order-2">
              <div className="relative mx-auto max-w-[390px]">
                <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-[#b92832]" />
                <div className="relative overflow-hidden rounded-[1.7rem] border-4 border-white bg-[#101827] shadow-2xl dark:border-[#1b293e]">
                  <Image
                    src="/rafli-nugroho.png"
                    alt="Foto formal Rafli Nugroho"
                    width={800}
                    height={1200}
                    priority
                    className="h-auto w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101827]/90 via-[#101827]/25 to-transparent px-6 pb-6 pt-20 text-white">
                    <p className="font-serif text-2xl font-bold">Rafli Nugroho</p>
                    <p className="mt-1 text-xs tracking-wide text-white/80">Profesional muda · Tangerang Selatan</p>
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#13223a] px-5 py-4 text-white shadow-xl sm:block">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-red-300">Prinsip kerja</p>
                  <p className="mt-1 font-serif text-lg italic">Man jadda wajada.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="profil" className="scroll-mt-8 border-t border-slate-200 py-16 dark:border-white/10 sm:py-20">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b92832]">01 / Tentang saya</p>
                <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Profil singkat</h2>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-sm dark:border-white/10 dark:bg-[#111e31] sm:p-9">
                <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                  Saya memiliki pengalaman lintas bidang, mulai dari pelayanan pelanggan dan logistik hingga produksi digital. Pengalaman tersebut membentuk kebiasaan kerja yang disiplin, adaptif, teliti, dan berorientasi pada kebutuhan orang yang saya layani.
                </p>
                <div className="mt-7 grid gap-4 border-t border-slate-200 pt-6 text-sm dark:border-white/10 sm:grid-cols-2">
                  <p><span className="text-slate-500 dark:text-slate-400">Tempat, tanggal lahir</span><br /><strong className="mt-1 inline-block">Tangerang, 12 April 2006</strong></p>
                  <p><span className="text-slate-500 dark:text-slate-400">Domisili</span><br /><strong className="mt-1 inline-block">Pamulang, Tangerang Selatan</strong></p>
                  <p><span className="text-slate-500 dark:text-slate-400">Pendidikan terakhir</span><br /><strong className="mt-1 inline-block">SMK Puspita Bangsa · 2024</strong></p>
                  <p><span className="text-slate-500 dark:text-slate-400">Email</span><br /><a className="mt-1 inline-block font-semibold text-[#b92832] hover:underline" href="mailto:raflinugroho88@gmail.com">raflinugroho88@gmail.com</a></p>
                </div>
              </div>
            </div>
          </section>

          <section id="pengalaman" className="scroll-mt-8 border-t border-slate-200 py-16 dark:border-white/10 sm:py-20">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b92832]">02 / Rekam jejak</p>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Pengalaman & pendidikan</h2>
            </div>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h3 className="mb-5 flex items-center gap-3 text-lg font-bold"><span className="rounded-xl bg-red-100 p-2.5 text-[#b92832] dark:bg-red-400/10"><FaBriefcase /></span>Pengalaman kerja</h3>
                <div className="space-y-4">
                  {experience.map((item) => (
                    <article key={item.role} className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-[#111e31] sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div><h4 className="font-serif text-xl font-bold">{item.role}</h4><p className="mt-1 text-sm font-semibold text-[#b92832]">{item.company}</p></div>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">{item.period}</span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-5 flex items-center gap-3 text-lg font-bold"><span className="rounded-xl bg-red-100 p-2.5 text-[#b92832] dark:bg-red-400/10"><FaGraduationCap /></span>Pendidikan</h3>
                <div className="space-y-4">
                  {education.map((item) => (
                    <article key={item.school} className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-[#111e31]">
                      <h4 className="font-serif text-lg font-bold">{item.school}</h4>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.detail}</p>
                    </article>
                  ))}
                </div>
                <div className="mt-8 rounded-3xl bg-[#12213a] p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">Keahlian</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills.map((skill) => <span key={skill} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-slate-200">{skill}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="proyek" className="scroll-mt-8 border-t border-slate-200 py-16 dark:border-white/10 sm:py-20">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b92832]">03 / Karya pilihan</p><h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Proyek digital</h2></div>
              <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">Beberapa website yang saya rancang untuk kebutuhan bisnis dan layanan.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#111e31]">
                  <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image src={project.image} alt={`Tampilan proyek ${project.title}`} layout="fill" objectFit="cover" className="transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b92832]">{project.category}</p>
                    <h3 className="mt-2 font-serif text-xl font-bold">{project.title}</h3>
                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
                    <a href={project.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#b92832] hover:gap-3">Kunjungi website <FaArrowRight className="text-xs" /></a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="kontak" className="scroll-mt-8 py-16 sm:py-20">
            <div className="overflow-hidden rounded-[2rem] bg-[#12213a] p-8 text-white sm:p-12">
              <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">04 / Mari terhubung</p>
                  <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Ada peluang untuk berkolaborasi?</h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">Saya terbuka untuk peluang kerja, kolaborasi, dan proyek digital. Silakan hubungi saya melalui WhatsApp atau email.</p>
                  <p className="mt-5 flex items-center gap-2 text-sm text-slate-300"><FaMapMarkerAlt className="text-red-300" /> Pamulang, Tangerang Selatan</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <a href="https://wa.me/6283151902491" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b92832] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#d33a43]"><FaWhatsapp /> WhatsApp</a>
                  <a href="mailto:raflinugroho88@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"><FaEnvelope /> Email saya</a>
                </div>
              </div>
            </div>
          </section>

          <footer className="flex flex-col gap-3 border-t border-slate-200 py-7 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Rafli Nugroho. Hak cipta dilindungi.</span>
            <a href="#home" className="font-semibold text-[#b92832] hover:underline">Kembali ke atas ↑</a>
          </footer>
        </div>
      </main>
    </div>
  );
}
