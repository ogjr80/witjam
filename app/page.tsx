"use client"; 

import { Header76, Header76Defaults } from "./(component)/Home/HomeHeroComponent"
import { Header64, Header64Defaults } from "./(component)/Home/HomeMessageComponent";
import { Layout16, Layout16Defaults,  } from "./(component)/Home/LayoutComponent";


import { useSession, signOut, signIn } from "next-auth/react"


export default  function Page(){
  

   
    return (
        <>
            <Header76 {...Header76Defaults} />
            <Header64 {...Header64Defaults}/>
            <Layout16 {...Layout16Defaults} />
        </>
    );
}