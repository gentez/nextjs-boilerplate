import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-hot-toast';
import { apiNextHandler } from '../../app-modules/connection/next-api';

export default function ForgetPasswordPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: '',
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
  };

  return (
    <div className="mb-10 flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="mb-4 text-2xl font-semibold">
        {loading ? 'Searching...' : 'Forgot Password'}
      </h1>
      <div className="w-96 rounded-lg bg-white p-8 shadow-md">
        <input
          className="border-gray-300 focus:border-gray-600 mb-4 w-full rounded-lg border p-2 text-black focus:outline-none"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
        <button
          onClick={onSearch}
          className="hover:bg-blue-600 w-full rounded-lg bg-secondary p-2 text-white focus:outline-none"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
        <p className="mt-4">
          <Link href="/register" className="text-blue-500 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
