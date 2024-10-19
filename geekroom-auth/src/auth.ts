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

            const user = {email: 'email', password: 'password'};
           
            console.log(credentials);

            if(typeof credentials.email != 'string' && typeof credentials.password != 'string'){
                throw new CredentialsSignin({cause: "Invalid credentials"})
            }

            if(credentials.password != 'password'){
                throw new CredentialsSignin({cause: "Password is incorrect"})
            }else{
                return user;
            }
     
            
          },
    })
  ],
})