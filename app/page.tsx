"use client"; 

import { Header76, Header76Defaults } from "./(component)/Home/HomeHeroComponent"
import { useSession, signOut, signIn } from "next-auth/react"


export default  function Page(){
  

   
    return (
        <>
            <Header76 {...Header76Defaults} />
        </>
    );
}