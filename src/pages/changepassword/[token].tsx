import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { apiNextHandler } from "@/app-modules/connection/next-api";

export default function ChangePassword() {
    const router = useRouter();

    const [user, setUser] = React.useState({
        password: "",
        c_password: "",
    });
    
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            if (user.password !== user.c_password) {
                toast.error('Passwords do not match');
            } else {
                setLoading(true);
                const response = await apiNextHandler(router.query.token).post('/api/changePassword', { password: user.password });
                
                if (response.data.success) {
                    toast.success('Password changed successfully');
                    router.push('/');
                }
            }
        } catch (error:any) {
            toast.error(error.response.data);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 mb-10">
            <h1 className="text-2xl font-semibold mb-4">Change Password</h1>
            <div className="bg-white rounded-lg shadow-md p-8 w-96">
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:border-gray-600 text-black"
                    id="Password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="New Password"
                />
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:border-gray-600 text-black"
                    id="Password"
                    type="password"
                    value={user.c_password}
                    onChange={(e) => setUser({ ...user, c_password: e.target.value })}
                    placeholder="Confirm Password"
                />
                <button
                    onClick={onLogin}
                    className="p-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 focus:outline-none"
                >
                    {loading ? "Changing..." : "Confirm"}
                </button>
            </div>
        </div>
    );
}
