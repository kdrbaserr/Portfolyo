import { FaAws } from "react-icons/fa";
import { SiCloudflare, SiDocker, SiExpo, SiFastapi, SiGit, SiGithubactions, SiLinux, SiMongodb, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRedis, SiTypescript } from "react-icons/si";

const stack = [
  [SiGithubactions, "GitHub Actions"], [SiCloudflare, "Cloudflare"], [SiLinux, "Linux"], [SiPostgresql, "PostgreSQL"], [SiMongodb, "MongoDB"], [SiRedis, "Redis"], [FaAws, "AWS"],
  [SiGit, "Git"], [SiNodedotjs, "Node.js"], [SiTypescript, "TypeScript"], [SiPython, "Python"], [SiFastapi, "FastAPI"], [SiDocker, "Docker"], [SiReact, "React"], [SiExpo, "Expo"],
] as const;

export function TechStrip() {
  return <section className="tech-strip" aria-label="Kullandığım teknolojiler"><div className="tech-track">{[...stack, ...stack].map(([Icon, name], index) => <div className="tech-logo" key={`${name}-${index}`}><Icon /><span>{name}</span><i>/</i></div>)}</div></section>;
}
