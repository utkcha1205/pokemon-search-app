import NextAuth from "next-auth";
import {Account, User as AuthUser} from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import  User from "@/lib/models/user";
import GithubProvider from "next-auth/providers/github"
import bcrypt from "bcryptjs";

import { jwtDecode } from "jwt-decode";
import connect from "./lib/db";

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessToken(token:any) {
    console.log("Refreshing access token", token);
    try {    

        console.log("Beaarer token", `Bearer ${token.refreshToken}`);

        const response = await fetch(`${process.env.API_SERVER_BASE_URL}/api/auth/refresh`, {
            headers: {
                "Authorization": `Bearer ${token.refreshToken}`
            }
        });

        console.log(response);

        const tokens = await response.json();

        console.log(tokens);

        if (!response.ok) {
            throw tokens;
        }

        /*const refreshedTokens = {
        "access_token": "acess-token",
        "expires_in": 2,
        "refresh_token": "refresh-token"
      }*/

        //return token;

        return {
            ...token,
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken ?? token.refreshToken, // Fall back to old refresh token
        };
    } catch (error) {
        console.log(error);

        return {
            ...token,
            error: "RefreshAccessTokenError",
        };
    }
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
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
    callbacks: {
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
        jwt: async ({ token, account, user }:any) => {
            // user is only available the first time a user signs in authorized
            console.log(`In jwt callback - Token is ${JSON.stringify(token)}`);

            if (token.accessToken) {
                const decodedToken:any = jwtDecode(token.accessToken);
                console.log(decodedToken);
                token.accessTokenExpires = decodedToken?.exp * 1000;
            }

            if (account && user) {
                console.log(
                    `In jwt callback - User is ${JSON.stringify(user)}`
                );
                console.log(
                    `In jwt callback - account is ${JSON.stringify(account)}`
                );

                return {
                    ...token,
                    accessToken: user.accessToken,
                    refreshToken: user.refreshToken,
                    user,
                };
            }

            // Return previous token if the access token has not expired yet
            console.log(
                "**** Access token expires on *****",
                token.accessTokenExpires,
                new Date(token.accessTokenExpires)
            );
            if (Date.now() < token.accessTokenExpires) {
                console.log("**** returning previous token ******");
                return token;
            }

            // Access token has expired, try to update it
            console.log("**** Update Refresh token ******");
            //return token;
            return refreshAccessToken(token);
        },
        session: async ({ session, token }:any) => {
            console.log(
                `In session callback - Token is ${JSON.stringify(token)}`
            );
            if (token) {
                session.accessToken = token.accessToken;
                session.user = token.user;
            }
            return session;
        },
    },
});
