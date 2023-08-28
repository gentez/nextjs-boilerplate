"use client";
import Link from "next/link";
import React from "react";
import {apiNextHandler}from '../../app-modules/connection/next-api'
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function LoginPage() {
    const route=useRouter()
    const [user, setUser] = React.useState({
        email: "",
       
    })
    const [loading, setLoading] = React.useState(false);
    
    const onLogin = async () => {
        apiNextHandler().post('api/forgetPassword',user).then((res)=>{
            if(res.data.success){
                toast.success('Kindly Check your Email Address')
                route.push(`/OTP/${res.data.token}`)
            }
        }).catch((error)=>{
            toast.error(error.response.data)
        })   
    }
 

    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mb-10">
        <h1>{loading ? "loading" : "Forget Password"}</h1>
        <hr />
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
            <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Search</button>
            <Link href="/register">Visit Signup page</Link>
        </div>
    )

}