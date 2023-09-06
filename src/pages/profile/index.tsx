import React from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

export default function ProfilePage() {
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
            <h1 className="text-2xl font-semibold mb-4">Profile</h1>
            <div className="bg-white rounded-lg shadow-md p-8 w-96">
                <p className="mb-4">Welcome to your profile page!</p>
                <button
                    onClick={logout}
                    className="p-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 focus:outline-none"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
