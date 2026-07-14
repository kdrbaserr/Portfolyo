"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, MapPin } from "lucide-react";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechOrbit } from "@/components/tech-orbit";

const specialties = [
  ["MLOps & AI", "Model yaşam döngüsü, fine-tuning, inference optimizasyonu ve MLOps pipeline tasarımı."],
  ["Backend Systems", "FastAPI, Node.js ve PostgreSQL ile güvenli, bakımı kolay ve ölçeklenebilir servisler."],
  ["Product Engineering", "Web ve mobil yüzlerde, teknik karmaşıklığı anlaşılır ve kullanışlı deneyimlere dönüştürme."],
];

export default function Page() {
  const [lang, setLang] = useState<"tr" | "en">("tr");
  const tr = lang === "tr";
  return <main>
    <Hero lang={lang} onLanguageChange={setLang} />
    <section id="about" className="about-section"><motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .6 }} className="about-grid"><div className="about-heading"><p>01 / {tr ? "Hakkımda" : "About"}</p><h2>{tr ? <>Merakla kurar,<br /><em>titizlikle</em> yayına alırım.</> : <>I build with curiosity,<br />ship with <em>care.</em></>}</h2></div><div className="about-story"><p>{tr ? <>Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. Şu anda <strong>Başaran İleri Teknoloji Limited Şirketi</strong>&apos;nde staj yapıyor; MLOps süreçleri, model entegrasyonu ve güvenli backend altyapıları üzerinde çalışıyorum.</> : <>I am a Software Engineering student at Fırat University. I am currently interning at <strong>Başaran İleri Teknoloji Limited Şirketi</strong>, working on MLOps workflows, model integration, and secure backend infrastructure.</>}</p><p>{tr ? "Veri hattından canlı ortam gözlemlemeye kadar her aşamada; model performansını, sistem güvenilirliğini ve ürün deneyimini birlikte düşünmeyi seviyorum." : "From data pipelines to production monitoring, I enjoy considering model performance, system reliability, and product experience together."}</p><div className="about-meta"><span><MapPin /> Malatya, Türkiye</span><span><BriefcaseBusiness /> MLOps Intern</span></div></div></motion.div></section>
    <TechOrbit lang={lang} />
    <section id="skills" className="specialty-section"><div className="section-heading"><p>{tr ? "Yetkinlik alanları" : "Areas of expertise"}</p><h2>{tr ? <>Teknoloji, amaç<br />için <em>anlamlı.</em></> : <>Technology is<br /><em>purposeful.</em></>}</h2></div><div className="specialty-list">{specialties.map(([title, copy], index) => <motion.div key={title} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}><span>0{index + 1}</span><h3>{title}</h3><p>{tr ? copy : ["Model lifecycle, fine-tuning, inference optimization, and MLOps pipeline design.", "Secure, maintainable, and scalable services with FastAPI, Node.js, and PostgreSQL.", "Turning technical complexity into clear and useful experiences across web and mobile."][index]}</p></motion.div>)}</div></section>
    <Projects lang={lang} />
    <section id="contact" className="contact-section"><div><p>04 / {tr ? "İletişim" : "Contact"}</p><h2>{tr ? <>Beraber<br /><em>bir şey</em> kuralım.</> : <>Let&apos;s build<br /><em>something</em> together.</>}</h2></div><div className="contact-side"><p>{tr ? "Yeni bir ürün, akıllı bir otomasyon veya ölçeklenmesi gereken bir model mi var? Konuşalım." : "Have a new product, an intelligent automation, or a model that needs to scale? Let’s talk."}</p><a href="mailto:baserkdr44@gmail.com">baserkdr44@gmail.com <ArrowUpRight /></a></div></section>
    <footer><span>© 2026 Kadir Başer. Tüm hakları saklıdır.</span><div><a href="https://github.com/kdrbaserr" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/kadir-ba%C5%9Fer-623725294/" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
  </main>;
}
