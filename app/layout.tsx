import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import AppProvider from "@/redux/provider/AppProvider";
import Top from "@/components/Layout/Top";
import { TonProvider } from "@/tonprovider/TonProvider";
import Main from "../components/Layout/Main";

const font = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title:
    "TONPUMP - Leading Provider of Smart Contract Solutions for Businesses",
  description:
    "Unlock the power of secure and automated transactions with our cutting-edge smart contract solutions. Learn how we streamline business operations using blockchain technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} `}>
        <AppProvider>
          <TonProvider >
            {children}
          </TonProvider>
        </AppProvider>
      </body>
    </html>
  );
}
