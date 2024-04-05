import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/navbar/navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
