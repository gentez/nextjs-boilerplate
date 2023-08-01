import { apiHandler } from "@/app-modules/connection/api-client";
import { loginApi } from "@/app-modules/repositories/api-repository/api-respository";
import NextAuth, { NextAuthOptions } from "next-auth"
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
        async authorize(credentials, req) {
        const {email,password}=credentials as any;
        const res= await loginApi({data:{email,password}})
        if(res.data.token){
            return res.data.token
        }else {
            return null
        }
    }
      })
  ],
}
export default NextAuth(authOptions)