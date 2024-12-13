import type { Metadata } from "next";
import "./globals.css";

import {Heebo,Inter} from "next/font/google"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const heebo = Heebo({subsets:["latin"],weight:["400","700"]});
const inter = Inter({subsets:["latin"], weight:["400","700"] },)



export const metadata: Metadata = {
  title: "Figma Design",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <Navbar font = {inter}/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
