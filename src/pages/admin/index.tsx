import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

export default function AdminPage() {
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut();
      toast.success('Logout successful');
      router.push('/login');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="mb-4 text-2xl font-semibold">Dashboard</h1>
      <div className="w-96 rounded-lg bg-white p-8 shadow-md">
        <p className="mx-auto">Welcome to your dashboard page!</p>
        <div className="flex justify-between">
          <button
            onClick={logout}
            className="hover:bg-blue-600 w-1/2 rounded-lg bg-secondary p-2 text-white focus:outline-none"
          >
            Logout
          </button>
          <Link
            href="http://localhost:1337/admin/auth/login"
            target="_blank"
            className="hover:bg-blue-600 ml-4 w-1/2 rounded-lg bg-secondary p-2 text-white focus:outline-none"
          >
            Strapi Login
          </Link>
        </div>
      </div>
    </div>
  );
}
