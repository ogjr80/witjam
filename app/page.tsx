import Image from "next/image";
import { Contact24, Contact24Defaults } from "./dashboard/page";
import { Navbar2, Navbar2Defaults}  from "./dashboard/NavBar";

export default function Home() {
  return (
      <> 
        <Navbar2 {...Navbar2Defaults} />
        <Contact24 {...Contact24Defaults} /> 
      </>
  );
}
