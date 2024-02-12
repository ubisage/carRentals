import { Inter } from "next/font/google";
import "./globals.css";
import ClientSideProviderTest from "./Components/clientSideProviderTest";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Floaters from "./Components/General/Floaters";
import { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
  title: {
    default:"Next.js 14 Homepage",
    template:"%s | Next.js 14"
  },
  description: "Next.js starter app description",

};

export default function RootLayout({ children }:any) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
          <div className="relative">
            <Navbar />
            <Floaters/>
            {children}
            <Footer />
          </div>
        {/* <ClientSideProviderTest/> */}
      </body>
      
    </html>
  );
}