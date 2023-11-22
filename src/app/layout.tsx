"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoidContextProvider from "@/store/recoilContextProvider";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.title = "Restaurante do Arthur";
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-700 flex flex-col`}>
        <RecoidContextProvider>{children}</RecoidContextProvider>
      </body>
    </html>
  );
}
