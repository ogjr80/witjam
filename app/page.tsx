import Image from "next/image";
import { Contact24, Contact24Defaults } from "./(component)/page";
import { Navbar2, Navbar2Defaults}  from "./(component)/NavBar";

export default function Home() {
  return (
      <> 
        <Contact24 {...Contact24Defaults} /> 
      </>
  );
}
