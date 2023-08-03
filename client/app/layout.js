import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["cyrillic", "latin"], weight: "500" });

export const metadata = {
  title: "Дусибурская Республика",
  description: "Демократическое виртуальное государство с правом на свободу самовыражения и участие в принятии решений для каждого.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
