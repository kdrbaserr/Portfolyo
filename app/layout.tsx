import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./refinement.css";
import "./orbit-rework.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kadir Başer — Yazılım Mühendisi & MLOps Tutkunu",
  description: "Kadir Başer'in MLOps, yapay zeka ve full-stack geliştirme portfolyosu.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr" className="scroll-smooth"><body className={`${geist.variable} ${geistMono.variable}`}>{children}</body></html>;
}
