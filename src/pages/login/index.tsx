import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { styles } from '../../styles/login';

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      await signIn('credentials', {
        email: user.email,
        password: user.password,
        redirect: true,
        callbackUrl: '/admin',
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Check if either email or password is empty
  const isButtonDisabled = !user.email || !user.password;

  return (
    <div className="mb-10 flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="mb-4 text-2xl font-semibold">
        {loading ? 'Logging in...' : 'Login'}
      </h1>
      <div className="w-96 rounded-lg bg-white p-8 shadow-md">
        <label htmlFor="email" className="mb-1 text-sm">
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
        <label htmlFor="password" className="mb-1 text-sm">
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
          className={`hover:bg-blue-600 w-full rounded-lg bg-secondary p-2 text-white focus:outline-none ${
            isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={isButtonDisabled}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <div className="mt-4">
          <Link href="/register" className="text-blue-500 mr-2 hover:underline">
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
