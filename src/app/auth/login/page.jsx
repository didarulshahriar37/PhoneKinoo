"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/";


  const handleSignIn = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setMessage("Invalid email or password.");
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged in successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push(callbackUrl);
    }
  };


  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl });
  };

  return (
    <div className='mt-15 bg-base-300 px-5 md:px-20 py-10'>
      <title>Sign in to your account</title>
      <div className='mt-10 text-center text-2xl md:text-4xl font-bold'>
        <h2>SIGN IN TO YOUR ACCOUNT</h2>
      </div>

      <div className="mt-10 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form className="fieldset" onSubmit={handleSignIn}>
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="label">Password</label>
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                className="input w-full"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className='hover:cursor-pointer text-xl top-2.5 right-6 absolute z-50'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {message && <p className="text-red-500 mt-2">{message}</p>}

            <button type='submit' className="btn bg-linear-to-r from-[#ff7e5f] to-[#feb47b] mt-4 w-full">Login</button>

            <p className='text-center font-bold text-xl mt-4'>Or</p>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn bg-base-300 text-black border-[#e5e5e5] mt-2 w-full flex justify-center items-center gap-2"
            >
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              Sign in with Google
            </button>

            <p className='mt-5 font-bold text-center'>
              Don&apos;t have an account? <span className='text-blue-600 hover:underline'>
                <Link href="/auth/register">Create an account</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}