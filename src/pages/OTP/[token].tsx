import React, { useRef, useState, ChangeEvent, KeyboardEvent } from 'react';
import { apiNextHandler } from '../../app-modules/connection/next-api';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

const Index: React.FC = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const refs = [useRef<HTMLInputElement>(), useRef<HTMLInputElement>(), useRef<HTMLInputElement>(), useRef<HTMLInputElement>()];

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return; // Allow only numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== "" && index < refs.length - 1) {
      refs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      refs[index - 1].current?.focus();
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await apiNextHandler(router.query.token).post('/api/verifyotp', { otp: otp.join('') });
      
      if (response.data.success) {
        router.push(`/changepassword/${response?.data?.data?.token}`);
        toast.success('OTP verified successfully');
      }
    } catch (error:any) {
      toast.error(error.response.data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mb-10">
      <h2 className="font-bold text-3xl my-4">Enter PIN Code</h2>
      <p className="text-gray-600 mb-4">
        Enter the 4-digit code that you received on your email.
      </p>
      <form onSubmit={handleVerifyOTP}>
        <div className="flex items-center justify-center space-x-2 my-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              className="w-12 h-12 text-3xl border-gray-300 border rounded-lg text-center focus:outline-none focus:border-gray-600"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={refs[index]}
              maxLength={1}
            />
          ))}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Continue
        </button>
      </form>
      <div className="text-left mt-4">
        <p className="text-gray-600">
          Didn{"'"}t receive the code?
          
        </p>
      </div>
    </div>
  );
};

export default Index;
