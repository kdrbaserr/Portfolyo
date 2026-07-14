"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Code2, Mail, Network } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/kdrbaserr", icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kadir-ba%C5%9Fer-623725294/", icon: Network },
  { label: "E-posta", href: "mailto:baserkdr44@gmail.com", icon: Mail },
];

export function Hero({ lang, onLanguageChange }: { lang: "tr" | "en"; onLanguageChange: (lang: "tr" | "en") => void }) {
  const tr = lang === "tr";
  return <section id="home" className="hero-shell">
    <nav className="hero-nav"><a href="#home" className="brand">KB<span>.</span></a><div className="nav-links"><a href="#about">{tr ? "Hakkımda" : "About"}</a><a href="#orbit">{tr ? "Teknolojiler" : "Technologies"}</a><a href="#projects">{tr ? "Projeler" : "Projects"}</a></div><div className="nav-tools"><button onClick={() => onLanguageChange(tr ? "en" : "tr")} className="language-switch" aria-label="Change language"><b>{tr ? "TR" : "EN"}</b><span>/</span>{tr ? "EN" : "TR"}</button><a href="#contact" className="nav-contact">{tr ? "Birlikte çalışalım" : "Let’s work together"} <ArrowUpRight /></a></div></nav>
    <div className="hero-grid">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [0.16,1,0.3,1] }} className="hero-copy">
        <p className="hero-kicker"><i /> Malatya, Türkiye · MLOps / Full-stack</p>
        <h1>KADİR<br /><em>BAŞER</em></h1>
        <p className="hero-role">{tr ? "Yazılım Mühendisi" : "Software Engineer"} <span>&</span> MLOps {tr ? "Tutkunu" : "Enthusiast"}</p>
        <p className="hero-intro">{tr ? "Modelleri yalnızca eğitmiyor; güvenilir, ölçülebilir ve gerçek hayatta çalışan ürünlere dönüştürüyorum." : "I do more than train models; I turn them into reliable, measurable systems that work in the real world."}</p>
        <div className="hero-actions"><a href="#projects" className="primary-button">{tr ? "Projelerimi Gör" : "View projects"} <ArrowDownRight /></a><a href="/kadir-baser-cv.pdf" download className="secondary-button">{tr ? "Özgeçmişimi İndir" : "Download CV"} <ArrowUpRight /></a></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .12, ease: [0.16,1,0.3,1] }} className="portrait-wrap">
        <div className="browser-chrome"><div className="window-controls"><i /><i /><i /></div><span>kadirbaser.dev/portfolio</span></div>
        <div className="portrait-note"><b>01</b><span>{tr ? "İşe yarayan sistemler\nkur." : "Build systems\nthat matter."}</span></div>
        <Image src="/kadir-baser-profile.jpg" alt="Kadir Başer" fill priority sizes="(max-width: 768px) 90vw, 44vw" className="portrait" style={{ objectPosition: "center 8%" }} />
        <div className="portrait-gradient" />
      </motion.div>
    </div>
    <div className="hero-footer"><div className="socials">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label}><Icon /></a>)}</div><span>SCROLL TO EXPLORE ↓</span></div>
  </section>;
}
