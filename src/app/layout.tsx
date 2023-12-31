"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


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
        <body className={inter.className}>
          <Header />
       
          {children}
          <Footer />
        </body>
      </html>
    </QueryClientProvider>
  );
}
