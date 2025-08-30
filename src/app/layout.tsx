import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sevgililer: Sürpriz Teklifi Olan Romantik Kart Oyunu",
  description:
    "Eşsiz bir Sevgililer Günü kart oyunu oyna. Koleksiyonu tamamla ve romantik teklifi keşfet!",
  keywords: [
    "Sevgililer Günü kart oyunu",
    "romantik teklif oyunu",
    "fotoğraf kart meydan okuması",
    "Sevgililer Günü sürprizi",
    "çiftler oyunu",
    "sevgililer günü oyunu",
    "teklif oyunu",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
