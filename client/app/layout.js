import "./globals.css";
import localFont from "next/font/local";
import "bootstrap-icons/font/bootstrap-icons.css";

const font = localFont({
  src: [{
    path: "../public/fonts/dusiburg-regular.otf",
    style: "normal",
  }]
});

export const metadata = {
  title: "Дусибурская Республика",
  description: "Демократическое виртуальное государство с правом на свободу самовыражения и участие в принятии решений для каждого."
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={font.className}>{children}</body>
    </html>
  )
}