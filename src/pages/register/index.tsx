import Link from "next/link";
import React, { useEffect } from "react";
import { apiNextHandler } from "@/app-modules/connection/next-api";
import { toast } from "react-hot-toast";
import { styles } from "./styles";
export default function SignupPage() {
    const [user, setUser] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        name: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const onSignup = async () => {
        apiNextHandler()
            .post('/api/registerapi', user)
            .then((res) => {
                if (res.data.success) {
                    toast.success('Successfully Registered');
                    
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.message);
            });
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.firstName.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="bg-white rounded-lg shadow-md p-8 w-96">
                <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
                <label htmlFor="name" className="text-sm mb-1">First Name</label>
                <input
                    className={styles}
                    id="firstName"
                    type="text"
                    value={user.firstName}
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                    placeholder="Name"
                />
                <label htmlFor="name" className="text-sm mb-1">Last Name</label>
                <input
                    className={styles}
                    id="lastName"
                    type="text"
                    value={user.lastName}
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                    placeholder="Name"
                />
                <label htmlFor="email" className="text-sm mb-1">Email</label>
                <input
                    className={styles}
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Email"
                />
                <label htmlFor="password" className="text-sm mb-1">Password</label>
                <input
                    className={styles}
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Password"
                />
                <button
                    onClick={onSignup}
                    className="p-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 focus:outline-none"
                    disabled={buttonDisabled}
                >
                    {buttonDisabled ? "No signup" : "Sign Up"}
                </button>
                <p className="text-sm mt-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-500 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
}
