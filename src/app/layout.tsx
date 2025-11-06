import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import WA from "./WA";

      
export const metadata: Metadata = {
  title: "GB Faility",
  description: "Solusi kebutuhan bisnis Anda dengan layanan profesional kami.",
icons: {
    icon: "/images/bgicon.ico", // path ke file favicon kamu
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      
      <body>
       <Header/>
          {children}
         <WA/>
      <Footer/>
   
      </body>
    </html>
  );
}
