import type { ReactNode } from "react";
import "./globals.css"; // Подключаем глобальные стили из `app`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preload" href="/fonts/SFProDisplay/SF-Pro-Display-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
