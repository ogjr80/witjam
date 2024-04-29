import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient(); 


(async ()=> { 
const user = await prisma.user.findMany(); 
console.log(user); 
})(); 

