import NextAuth from "next-auth"
import {Account, User as AuthUser} from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/lib/models/user"
import connect from "@/lib/db"
import bcrypt from 'bcryptjs'
import { cookies } from "next/headers"

export const authOptions:any = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        credentials: {
        email: {label: "Email",type:'text'},
        password: {label: "Password",type:'password'}
        },
        
        async authorize(credentials:any) {
            await connect();
            try{
                const user = await User.findOne({ email: credentials.email })
                if (!user) {
                  console.log('User not found');
                  return null;
                }
            
                const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                if (!isPasswordCorrect) {
                  console.log('Incorrect password');
                  alert('Incorrect password')
                  return null;
                }
            
                // If authentication is successful, return the user object
                return user;
            }
            catch(error:any){

                throw new Error(error)
            }
        }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    // ...add more providers here
  ],

  callbacks:{
    async signIn({user,account} : { user: AuthUser , account:Account}){
      if(account?.provider == "credentials"){
        return true;
      }
      if(account?.provider == "github"){
       await connect();

       try{
        const existingUser = await User.findOne({email: user.email})
        if(!existingUser){
          const newUser = new User({
            email: user.email
          })
          await newUser.save();
          return true;
        }
        return true;

       }catch(error){
          console.log("Error connecting", error);
          return false;
       }
      }
      return false;
    },
    async jwt({ token, account }:any) {
      if (account) {
        token.jti = account.jti as string;
        token.accessToken = account.access_token as string;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken as string;
      session.jti = token.jti as string;
      cookies().set('midToken', session.jti);
      return session;
    }
    
  },
  events: {
    signOut() {
        cookies().delete("midToken");
    }
  }
}

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };




// export { GET, POST } from "@/auth";