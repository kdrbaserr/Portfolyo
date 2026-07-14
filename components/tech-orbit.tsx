"use client";

import { FaAws } from "react-icons/fa";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { SiDocker, SiDotnet, SiExpo, SiFastapi, SiGit, SiGithubactions, SiLinux, SiMongodb, SiNodedotjs, SiOnnx, SiPostgresql, SiPytorch, SiPython, SiReact, SiTypescript } from "react-icons/si";

const engineering = [[SiGit, "Git", "#f05032"], [SiNodedotjs, "Node.js", "#339933"], [SiTypescript, "TypeScript", "#3178c6"], [SiPython, "Python", "#3776ab"], [SiFastapi, "FastAPI", "#009688"], [SiDocker, "Docker", "#2496ed"], [SiReact, "React", "#149eca"], [SiExpo, "Expo", "#111111"]] as const;
const mlops = [[SiPytorch, "PyTorch", "#ee4c2c"], [SiOnnx, "ONNX", "#005cab"], [FaAws, "AWS", "#ff9900"], [SiPostgresql, "PostgreSQL", "#4169e1"], [SiMongodb, "MongoDB", "#47a248"], [SiLinux, "Linux", "#d99a00"], [SiGithubactions, "GitHub Actions", "#2088ff"], [SiDotnet, ".NET", "#512bd4"]] as const;

function Ring({ items, direction, radius, tier }: { items: readonly (readonly [IconType, string, string])[]; direction: "cw" | "ccw"; radius: number; tier: "outer" | "inner" }) {
  const names = items.map(([, name]) => name).join(" · ");

  return <div className={`radial-ring ${direction} ${tier}`} aria-label={names}>{items.map(([Icon, name, color], index) => {
    const angle = index * (360 / items.length) - 90;
    return <span className="ring-tool" title={name} key={name} style={{ "--brand": color, transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(90deg)` } as CSSProperties}><Icon /><b>{name}</b></span>;
  })}</div>;
}

export function TechOrbit({ lang }: { lang: "tr" | "en" }) {
  const tr = lang === "tr";
  const projects = ["signAI", "Big-Leap", "EVSE Security Lab", "E-Commerce"];
  return <section id="orbit" className="orbit-section orbit-rework"><p className="orbit-eyebrow">02 / {tr ? "Araç kutum" : "Toolbox"}</p><div className="radial-lab">
    <svg className="project-curve" viewBox="0 0 800 800" aria-label={tr ? "Projeler" : "Projects"}><defs><path id="project-0" d="M400,45 A355,355 0 0 1 755,400" /><path id="project-1" d="M755,400 A355,355 0 0 1 400,755" /><path id="project-2" d="M400,755 A355,355 0 0 1 45,400" /><path id="project-3" d="M45,400 A355,355 0 0 1 400,45" /></defs>{projects.map((project, index) => <text key={project}><textPath href={`#project-${index}`} startOffset="50%" textAnchor="middle">{project}</textPath></text>)}</svg>
    <div className="ring-label outer-label">{tr ? "SEÇİLİ PROJELER" : "SELECTED PROJECTS"}</div>
    <Ring items={engineering} direction="ccw" radius={250} tier="outer" />
    <Ring items={mlops} direction="cw" radius={150} tier="inner" />
    <div className="radial-core"><span>{tr ? "TEKNOLOJİ" : "TECH"}<br />×<br /><em>{tr ? "YIĞINI" : "STACK"}</em></span><small>{tr ? "sistemler için" : "for systems"}</small></div>
  </div><div className="orbit-caption"><p>{tr ? "Dış halkada projeler; içeride ise bu projeleri çalışan sistemlere dönüştüren araçlar ve altyapılar yer alıyor." : "Projects live on the outer ring; the tools and infrastructure that turn them into working systems live within."}</p><span>∞ {tr ? "Sürekli öğrenme" : "Always learning"}</span></div></section>;
}
