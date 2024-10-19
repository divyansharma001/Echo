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
        authorize: async (credentials) => {
            let user = null
     
            
            if (!user) {
              // No user found, so this is their first attempt to login
              // meaning this is also the place you could do registration
              throw new Error("User not found.")
            }
     
            // return user object with their profile data
            return user
          },
    })
  ],
})