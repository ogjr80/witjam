import NextAuth from 'next-auth'; 
import type { NextAuthOptions } from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad'; 
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/lib/prisma';

const env = process.env; 

export const authOptions : NextAuthOptions = {
    //adapter: PrismaAdapter(prisma),
    // secret: process.env.NEXTAUTH_SECRET,
    providers: [
        AzureADProvider({
          clientId: `${env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID}`,
          clientSecret: `${env.NEXT_PUBLIC_AZURE_AD_CLIENT_SECRET}`,
          tenantId: `${env.NEXT_PUBLIC_AZURE_AD_TENANT_ID}`,
          authorization: {
            params: { scope: 'openid email profile User.Read  offline_access' },
          },
          httpOptions: { timeout: 10000 },
        }),
      ],
      // callbacks: {
      //   async jwt({ token, user, account }) {
      //     if (account && user) {
      //       return {
      //         accessToken: account.id_token,
      //         accessTokenExpires: account?.expires_at
      //           ? account.expires_at * 1000
      //           : 0,
      //         refreshToken: account.refresh_token,
      //         user,
      //       };
      //     }
    
      //     if (Date.now() < token.accessTokenExpires - 100000 || 0) {
      //       return token;
      //     }
      //   },
      //   async session({ session, token }) {
      //       if (session) {
      //         session.user = token.user;
      //         session.error = token.error;
      //         session.accessToken = token.accessToken;
      //       }
      //       return session;
      //     },
      //   },

}; 
const handler =  NextAuth(authOptions); 
export {handler as GET, handler as POST}