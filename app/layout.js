import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/ui/topBar";
import NavBar from "@/components/ui/navBar";
import NavBar2 from "@/components/navBar2";
import { ScrollAreaHorizontalDemo } from "@/components/ui/scroller";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <div className="w-full ">
          <TopBar></TopBar>
          <NavBar></NavBar>
          <ScrollAreaHorizontalDemo></ScrollAreaHorizontalDemo>
          <div className="w-full p-8 bg-slate-200 lg:px-[192px] ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
