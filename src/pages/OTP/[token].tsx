import { useRouter } from 'next/router';
import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { apiNextHandler } from '../../app-modules/connection/next-api';

const Index: React.FC = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const refs = [
    useRef<HTMLInputElement>(),
    useRef<HTMLInputElement>(),
    useRef<HTMLInputElement>(),
    useRef<HTMLInputElement>(),
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return; // Allow only numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== '' && index < refs.length - 1) {
      refs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      refs[index - 1].current?.focus();
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const queryToken = router.query.token;

      if (!Array.isArray(queryToken) && typeof queryToken === 'string') {
        const response = await apiNextHandler(queryToken).post(
          '/api/verifyotp',
          {
            otp: otp.join(''),
          }
        );

        if (response.data.success) {
          router.push(`/changepassword/${response?.data?.data?.token}`);
          toast.success('OTP verified successfully');
        }
      } else {
        // Handle invalid or unexpected token type here
        toast.error('Invalid token');
      }
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  return (
    <div className="mb-10 flex min-h-screen flex-col items-center justify-center py-2">
      <h2 className="my-4 text-3xl font-bold">Enter PIN Code</h2>
      <p className="text-gray-600 mb-4">
        Enter the 4-digit code that you received on your email.
      </p>
      <form onSubmit={handleVerifyOTP}>
        <div className="my-3 flex items-center justify-center space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              className="border-gray-300 focus:border-gray-600 h-12 w-12 rounded-lg border text-center text-3xl focus:outline-none"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={refs[index] as React.RefObject<HTMLInputElement>}
              maxLength={1}
            />
          ))}
        </div>
        <button
          type="submit"
          className="hover:bg-blue-600 rounded-lg bg-secondary px-4 py-2 text-white focus:outline-none"
        >
          Continue
        </button>
      </form>
      <div className="mt-4 text-left">
        <p className="text-gray-600">Didn{"'"}t receive the code?</p>
      </div>
    </div>
  );
};

export default Index;
