import { apiNextHandler } from '@/app-modules/connection/next-api';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-hot-toast';

export default function ChangePassword() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    password: '',
    c_password: '',
  });

  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      if (user.password !== user.c_password) {
        toast.error('Passwords do not match');
      } else {
        setLoading(true);

        const token = router.query.token as string | undefined;

        if (!token) {
          toast.error('Invalid token');
          return;
        }

        const response = await apiNextHandler(token).post(
          '/api/changePassword',
          {
            password: user.password,
          }
        );

        if (response.data.success) {
          toast.success('Password changed successfully');
          router.push('/');
        } else {
          toast.error('Password change failed');
        }
      }
    } catch (error) {
      toast.error('An error occurred while changing the password');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-10 flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="mb-4 text-2xl font-semibold">Change Password</h1>
      <div className="w-96 rounded-lg bg-white p-8 shadow-md">
        <input
          className="border-gray-300 focus:border-gray-600 mb-4 w-full rounded-lg border p-2 text-black focus:outline-none"
          id="Password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="New Password"
        />
        <input
          className="border-gray-300 focus:border-gray-600 mb-4 w-full rounded-lg border p-2 text-black focus:outline-none"
          id="Password"
          type="password"
          value={user.c_password}
          onChange={(e) => setUser({ ...user, c_password: e.target.value })}
          placeholder="Confirm Password"
        />
        <button
          onClick={onLogin}
          className="hover:bg-blue-600 w-full rounded-lg bg-secondary p-2 text-white focus:outline-none"
        >
          {loading ? 'Changing...' : 'Confirm'}
        </button>
      </div>
    </div>
  );
}
