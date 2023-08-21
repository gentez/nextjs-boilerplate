"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { apiNextHandler } from "@/app-modules/connection/next-api";
import { toast } from "react-hot-toast";


export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        name: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const onSignup = async () => {
      apiNextHandler().post('/api/registerapi',user).then((res)=>{
        console.log(res)
        if(res.data.success){
            toast.success('successfully Registered')
        }
      }
      ).catch((err)=>{
        console.log(err)
        toast.error(err.message)

      })
    }
    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.name.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <hr />
        <label htmlFor="name">name</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="name"
            type="text"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
            placeholder="name"
            />
        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No signup" : "Signup"}</button>
            <Link href="/login">Visit login page</Link>
        </div>
    )

}