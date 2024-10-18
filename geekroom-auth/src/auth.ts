import NextAuth, { CredentialsSignin } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialProvider({
        name: 'Credentials',
        credentials: {
            email: { label: "Email", type: "email" },
            password: {  label: "Password", type: "password" }
        },
        authorize: async ({email, password})=>{
            console.log({email, password})

            const user = {id: 1, name: 'Test User'}

            if(typeof email !== 'string'){
                throw new CredentialsSignin('Email is not valid')
            }

            if(password !== 'password'){
                throw new CredentialsSignin('Password is incorrect')
               
            } else return user;
        }
    })
  ],
})