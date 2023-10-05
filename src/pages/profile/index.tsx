import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

export default function ProfilePage() {
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
      <h1 className="mb-4 text-2xl font-semibold">Profile</h1>
      <div className="w-96 rounded-lg bg-white p-8 shadow-md">
        <p className="mb-4">Welcome to your profile page!</p>
        <button
          onClick={logout}
          className="hover:bg-blue-600 w-full rounded-lg bg-secondary p-2 text-white focus:outline-none"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
