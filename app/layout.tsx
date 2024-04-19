
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";


//components on default layouts
import { Navbar2, Navbar2Defaults } from "./(component)/NavBar";
// import { Footer2, Footer2Defaults } from "./(component)/FooterComponent";
import { Footer4, Footer4Defaults } from "./(component)/FooterComponent";
const roboto_serif = Roboto_Serif({subsets: ["latin"]})


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
    <html lang="en">
      <body className={roboto_serif.className}>
        <Navbar2 {...Navbar2Defaults}/>
        {children}
        <Footer4{...Footer4Defaults}/> 
        </body>
    </html>
  );
}
