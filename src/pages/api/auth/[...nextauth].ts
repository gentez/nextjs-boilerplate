import { loginApi } from "@/app-modules/repositories/api-repository/api-respository";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions :NextAuthOptions  = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name: "credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
        const {email,password}=credentials as any;
        try {
          const res= await loginApi({data:{email,password}})
          if(res.data.token){
              return res.data
          }else {
            return null
          }
        } catch (error:any) {
        return null
        }
       
    }
      }),
     
  ],
  session:{
    strategy:'jwt'
  },
  pages: {
    signIn: "/login",
  },
}
export default NextAuth(authOptions)