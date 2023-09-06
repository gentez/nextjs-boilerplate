import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { styles } from "./styles";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: true,
        callbackUrl: "/admin",
      });
      setLoading(false);
      console.log(result, "result");
    } catch (error) {
      console.log(error);
    }
  };

  // Check if either email or password is empty
  const isButtonDisabled = !user.email || !user.password;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mb-10">
      <h1 className="text-2xl font-semibold mb-4">
        {loading ? "Logging in..." : "Login"}
      </h1>
      <div className="bg-white rounded-lg shadow-md p-8 w-96">
        <label htmlFor="email" className="text-sm mb-1">
          Email
        </label>
        <input
          className={styles}
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
        <label htmlFor="password" className="text-sm mb-1">
          Password
        </label>
        <input
          className={styles}
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
        <button
          onClick={onLogin}
          className={`p-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 focus:outline-none ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isButtonDisabled}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="mt-4">
          <Link href="/register" className="text-blue-500 hover:underline mr-2">
            Create an account
          </Link>
          <Link href="/forget" className="text-blue-500 hover:underline">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
}
