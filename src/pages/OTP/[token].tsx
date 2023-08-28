'use client'
import React, { useRef, useState, ChangeEvent, KeyboardEvent } from 'react';
import {apiNextHandler}from '../../app-modules/connection/next-api'
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

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    console.log(router.query.token,'join')
    apiNextHandler(router.query.token).post('/api/verifyotp',{otp:otp.join('')}).then((res)=>{
      router.push(`/changepassword/${res?.data?.data?.token}`)
      console.log(res.data)
      if(res.data.success){
       toast.success('OTP verified successfully')
      } 
    }).catch((error)=>{
      toast.error(error.response.data)
    })
   
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mb-10"  >
      <h2 className="fw-700 display1-size display2-md-size mb-3">
        Enter PIN Code
      </h2>
      <div className="mx-1 mb-4 mt-4">
        <p className="text-muted">
          Enter the 4 digits code that you received on your email.
        </p>
      </div>
<div   >
<form  onSubmit={handleVerifyOTP} >
        <div className="flex flex-row items-center justify-center my-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              className="input_otp"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={refs[index]}
              maxLength={1}
            />
          ))}
        </div>
        <div  className="flex flex-row items-center justify-center my-3" >
        <button
        type='submit'
          style={{ background: "#174B5C" }}
          className="text-white  p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        >
          Continue
        </button>
        </div>
        
      </form>
</div>
 
      <div className="col-sm-12 p-0 text-left">
        <div className="form-group mb-1"></div>
        <h6
          className="text-right font-xsss fw-400 mt-0 mb-0 lh-32"
          style={{ color: "#828282" }}
        >
          Didn't receive code ?
          {/* <Link
            className="fw-700 ms-1"
            style={{ color: "#F37D71" }}
          >
            Resend
          </Link> */}
        </h6>
      </div>
    </div>
  );
};

export default Index;
