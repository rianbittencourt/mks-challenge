"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="pt-br">
        <body className={inter.className}>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
