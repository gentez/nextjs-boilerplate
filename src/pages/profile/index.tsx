"use client";
import React from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import { signOut, useSession } from "next-auth/react";


export default function ProfilePage() {
    const router = useRouter()
    const session=useSession()
    console.log(session,'seesion data')
    const logout = async () => {
        try {
            await signOut()
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
        <hr />
        <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Logout</button>

            </div>
    )
}