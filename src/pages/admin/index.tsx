import React from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import Link from 'next/link';

export default function AdminPage() {
    const router = useRouter();

    const logout = async () => {
        try {
            await signOut();
            toast.success('Logout successful');
            router.push('/login');
        } catch (error:any) {
            toast.error(error.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
            <div className="bg-white rounded-lg shadow-md p-8 w-96">
                <p className="mx-auto">Welcome to your dashboard page!</p>
                <div className="flex justify-between">
                    <button
                        onClick={logout}
                        className="p-2 bg-blue-500 text-white rounded-lg w-1/2 hover:bg-blue-600 focus:outline-none"
                    >
                        Logout
                    </button>
                    <Link
                        href="https://strapi-dev-ddlv.onrender.com/admin/auth/login"
                        target="_blank"
                        className="p-2 bg-blue-500 text-white rounded-lg w-1/2 ml-4 hover:bg-blue-600 focus:outline-none"
                    >
                        Strapi Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
