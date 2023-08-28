"use client";
import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { apiNextHandler } from "@/app-modules/connection/next-api";
export default function ChangePassword() {
    const router = useRouter();

    const [user, setUser] = React.useState({
        password: "",
        c_password: "",
       
    })
    const [loading, setLoading] = React.useState(false);
    
    const onLogin = async () => {
        try {
            if(user.password!==user.c_password){
                toast.error('passwords do not match')
            }else{
                apiNextHandler(router.query.token).post('/api/changePassword',{password:user.password}).then((res)=>{
                    if(res.data.success){
                     toast.success('Password Change successfully')
                     router.push('/')
                    }
                  }).catch((error)=>{
                    toast.error(error.response.data)
                  })

            }



        } catch (error) {
            console.log(error)
        }
    }
    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mb-10">
        <h1>{"Change Password"}</h1>
        <hr />
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="Password"
            type="text"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="Password"
            />
              <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="Password"
            type="text"
            value={user.c_password}
            onChange={(e) => setUser({...user, c_password: e.target.value})}
            placeholder="Confirm Password"
            />
            <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Confirm</button>
        </div>
    )

}