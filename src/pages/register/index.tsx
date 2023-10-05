import { apiNextHandler } from '@/app-modules/connection/next-api';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { styles } from './styles';
export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    name: '',
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const onSignup = async () => {
    apiNextHandler()
      .post('/api/registerapi', user)
      .then((res) => {
        if (res.data.token) {
          toast.success('Successfully Registered');
          router.push('/login');
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.firstName.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="w-96 rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-2xl font-semibold">Sign Up</h1>
        <label htmlFor="name" className="mb-1 text-sm">
          First Name
        </label>
        <input
          className={styles}
          id="firstName"
          type="text"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          placeholder="Name"
        />
        <label htmlFor="name" className="mb-1 text-sm">
          Last Name
        </label>
        <input
          className={styles}
          id="lastName"
          type="text"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          placeholder="Name"
        />
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
          onClick={onSignup}
          className="hover:bg-blue-600 w-full rounded-lg bg-secondary p-2 text-white focus:outline-none"
          disabled={buttonDisabled}
        >
          {buttonDisabled ? 'No signup' : 'Sign Up'}
        </button>
        <p className="mt-4 text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
