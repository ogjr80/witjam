
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";

import AuthProvider from "./AuthProvider";

//components on default layouts
import { Navbar2, Navbar2Defaults } from "./(component)/NavBar";
// import { Footer2, Footer2Defaults } from "./(component)/FooterComponent";
import { Footer4, Footer4Defaults } from "./(component)/FooterComponent";
const roboto_serif = Roboto_Serif({subsets: ["latin"]})
import { useSession } from "next-auth/react";


export const metadata: Metadata = {
  title: "Witwaterstrand Onboarding Platform",
  description: "An Onboarding platform for Witwaterstrand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      
    <html lang="en">
      <body className={roboto_serif.className}>
        <Navbar2 {...Navbar2Defaults}/>
        {children}
        <Footer4{...Footer4Defaults}/> 
        </body>
    </html>
    </AuthProvider>
  );
}
