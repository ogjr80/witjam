import NextAuth from "next-auth";
import nextAuth, { NextAuthOptions } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad"; 
import {setCookie} from "nookies"; 


export const authOptions : NextAuthOptions = {
    //Configure on or more authentication providers 
    providers: [
        AzureADProvider({
            clientId: process.env.AZURE_AD_CLIENT_ID!, 
            clientSecret: process.env.AZURE_AD_CLIENT_ID!, 
            tenantId: process.env.AZURE_AD_TENANT_ID,
        }), 
    ], 
    // callback: {
    //     async signIn(){
    //         //generate a unique state string 
    //         const state = 
    //         Math.random().toString(36).substring(2,15) + 
    //         Math.random().toString(36).substring(2,15); 
    //         //set the state cookie with a 1 hour expiry
    //         setCookie(null, "nextauth.state" , state, {
    //             maxAge: 3600, 
    //             path: "/", 
    //         }); 
    //         console.log("Sign-in error", account, profile);

    //         //return the NextAuth signIn response 
    //         return true 
    //     }, 
    //     async jwt({token, account}) {
    //         //Persist the 0Auth access_token to the token right after signin
    //         if(account){
    //             token.acceToken = account.access_token; 
    //         }
    //         return token; 
    //     }, 
    //     async session({session, token}){
    //         session.acceToken  = token.acceToken; 
    //         return session;
    //     },
    // },
    // pages: {
    //     //signIn: '/auth/signin',
    //     error: '/auth/error', // Make sure this is correct
    //   },
    //   debug: true
}; 
const handler = NextAuth(authOptions); 
export {handler as GET, handler as POST}; 


// export default NextAuth(authOptions); 
