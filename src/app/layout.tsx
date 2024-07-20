import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matvey's Creations",
  description:
    "Добро пожаловать на мой персональный сайт-портфолио, посвящённый моей работе в качестве Frontend Developer. Меня зовут Матвей Борисов, и я специализируюсь на создании динамичных и интерактивных веб-приложений, используя современные технологии и лучшие практики разработки.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
