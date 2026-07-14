"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "signAI", kind: "Tıbbi sinyal platformu", kindEn: "Medical signal platform", accent: "blue", description: "EEG, EKG ve EMG sinyallerini analiz ederek doktorlara tanı desteği sunan uçtan uca platform. Moment modeli, 4-bit NF4 QLoRA fine-tuning ile AUC > 0.88 başarımına ulaştı; MNE-Python pipeline'ı ile işlenen veriler ONNX olarak AWS ECS üzerinde canlıya alındı.", descriptionEn: "An end-to-end platform that analyzes EEG, ECG, and EMG signals to support clinical diagnosis. A Moment model was fine-tuned with 4-bit NF4 QLoRA to reach AUC > 0.88, then served as ONNX on AWS ECS.", tags: ["FastAPI", "PyTorch", "LoRA", "AWS", "Docker", "React Native", "PostgreSQL"], featured: true },
  { title: "Big-Leap", kind: "Ainterview-4", kindEn: "Ainterview-4", accent: "pink", description: "Ölçeklenebilir RESTful API'lar, modern kullanıcı deneyimi, JWT kimlik doğrulama ve Prisma ORM ile güvenilir veri mimarisi.", descriptionEn: "Scalable REST APIs and modern interfaces, backed by JWT authentication and a reliable Prisma ORM data architecture.", tags: ["React.js", "Node.js", "TypeScript", "Prisma"] },
  { title: "EVSE Security Lab", kind: "Güvenlik araştırması", kindEn: "Security research", accent: "yellow", description: "Elektrikli araç şarj istasyonlarında termal sensör spoofing saldırılarına karşı donanım zafiyetleri, veri doğrulama ve anomali tespiti araştırması.", descriptionEn: "Research into hardware vulnerabilities, data validation, and anomaly detection against thermal sensor spoofing in EV charging stations.", tags: ["Cybersecurity", "Anomaly Detection", "IoT Security"] },
  { title: "E-Commerce", kind: "Full-stack platform", kindEn: "Full-stack platform", accent: "purple", description: "Google OAuth, sepet, admin paneli ve sipariş yönetimini içeren; Supabase ve PostgreSQL ile güçlendirilmiş e-ticaret deneyimi.", descriptionEn: "An e-commerce experience with Google OAuth, cart, administration, and order management, powered by Supabase and PostgreSQL.", tags: ["React.js", "Node.js", "Supabase", "PostgreSQL"] },
];

export function Projects({ lang }: { lang: "tr" | "en" }) {
  const tr = lang === "tr";
  return <section id="projects" className="projects-section"><div className="section-heading"><p>03 / {tr ? "Seçili projeler" : "Selected projects"}</p><h2>{tr ? <>İyi fikirler,<br /><em>işleyen ürünler.</em></> : <>Good ideas,<br /><em>working products.</em></>}</h2></div><div className="project-grid">{projects.map((project, index) => <motion.article key={project.title} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .5, delay: index * .06 }} whileHover={{ y: -9, rotate: index % 2 ? .3 : -.3 }} className={`project-card ${project.accent} ${project.featured ? "feature" : ""}`}>
    <div className="project-top"><p>{tr ? project.kind : project.kindEn}</p><span><ArrowUpRight /></span></div><div className="project-content"><h3>{project.title}</h3><p>{tr ? project.description : project.descriptionEn}</p></div><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
  </motion.article>)}</div></section>;
}
