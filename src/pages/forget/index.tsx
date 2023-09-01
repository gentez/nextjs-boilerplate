import Link from "next/link";
import React from "react";
import { apiNextHandler } from '../../app-modules/connection/next-api';
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

export default function ForgetPasswordPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
    });
    
    const [loading, setLoading] = React.useState(false);
    
    const onSearch = async () => {
        setLoading(true);
        
        try {
            const response = await apiNextHandler().post('api/forgetPassword', user);
            if (response.data.success) {
                toast.success('Kindly Check your Email Address');
                router.push(`/OTP/${response.data.token}`);
            }
        } catch (error: any) {
            toast.error(error.response.data);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 mb-10">
            <h1 className="text-2xl font-semibold mb-4">{loading ? "Searching..." : "Forgot Password"}</h1>
            <div className="bg-white rounded-lg shadow-md p-8 w-96">
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:border-gray-600 text-black"
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Email"
                />
                <button
                    onClick={onSearch}
                    className="p-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 focus:outline-none"
                >
                    {loading ? "Searching..." : "Search"}
                </button>
                <p className="mt-4">
                    <Link href="/register" className="text-blue-500 hover:underline">Create an account</Link>
                </p>
            </div>
        </div>
    );
}
