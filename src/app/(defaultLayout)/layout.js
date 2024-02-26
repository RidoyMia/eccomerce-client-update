"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Shared/Header/Header";
import AuthProvider from "../components/AuthProvider/AuthProvider";

import UserStore from "../components/redux/Store/Store";
import { useEffect } from "react";
import Providers from "@/Provider/Provider";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {

  return (
    <Providers>
      <html lang="en">
      <body className={inter.className}>
        
        
        <AuthProvider>
        <Header></Header>
        {children}
        </AuthProvider>
     
        
      </body>
    </html>
    </Providers>
  );
}
