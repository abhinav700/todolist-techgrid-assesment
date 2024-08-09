
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
const inter = Inter({ subsets: ["latin"] });
import 'bootstrap/dist/css/bootstrap.css';
import StoreProvider from "@/redux/StoreProvider";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata: Metadata = {
  title: "Notedly",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <StoreProvider>
            <NavBar />
            {children}
          </StoreProvider>
        </body>
      </html>
    </>
  );
}
