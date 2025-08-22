'use client'
import React, { useState } from "react";
import Image from "next/image";
import { B, BeautyHub, LoginGirl } from "../../../public";
import { useRouter } from "next/navigation";
import { useUser } from "../../components/context/UserContext"; 

const SignUp = () => {
  const router = useRouter();
  const { setUser } = useUser(); // Use the context
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Set user data in context
    setUser({
      fullName: formData.fullName,
      email: formData.email
    });
    
    router.push('/dashboard');
    console.log('Signup data:', formData);
  };

  const handleGoogleSignUp = () => {
    // Handle Google signup logic here
    // For demo purposes, you might set a default Google user
    // setUser({
    //   fullName: "Google User", // You'd get this from Google API
    //   email: "user@gmail.com"
    // });
    console.log('Google signup clicked');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Welcome Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-r from-[#8B5CF6] via-[#9a38f6] to-[#5F14EA] relative overflow-hidden">
        {/* Logo at top */}
        <div className="absolute top-36 left-8 flex items-center justify-center w-[50vw] space-x-2.5 z-10">
          <Image src={B} alt="BeautyHUB Logo" width={24} height={24} />
          <Image src={BeautyHub} alt="BeautyHUB Logo" width={120} height={32} />
        </div>

        {/* Welcome Content - Upper Left */}
        <div className="absolute top-48 left-8 xl:left-12 z-10">
          <div className=" w-[50vw]">
            <h1 className="text-white text-center text-4xl xl:text-5xl font-bold mb-2 leading-tight">
              Join BeautyHUB Today
            </h1>
            <p className="text-white/90 text-[15px] xl:text-xl text-center mx-auto w-[55%] ">
              Connect with fellow artists, share your work, and grow your beauty career
            </p>
          </div>
        </div>

        {/* Hero Image - Bottom Left */}
        <div className="absolute bottom-2 left-0">
          <div className="relative">
            <Image
              src={LoginGirl}
              alt="Beauty Artist"
              className="object-cover w-64 h-[500px]"
            />
          </div>
        </div>

        {/* Testimonial - Positioned over the girl image area */}
        <div className="absolute bottom-16 right-8 rounded-2xl p-4 max-w-xs">
          <p className="text-white text-right text-[17px] mb-2 w-[230px]">
            &quot;BeautyHUB helped me connect with amazing clients and grow my business.&quot;
          </p>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center justify-center space-x-2.5 mb-8">
            <Image src={B} alt="BeautyHUB Logo" width={20} height={20} />
            <Image src={BeautyHub} alt="BeautyHUB Logo" width={100} height={24} />
          </div>

          {/* Mobile Welcome Text */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-[#411900] text-2xl sm:text-3xl font-bold mb-4">
              Join BeautyHUB Today!
            </h1>
            <p className="text-gray-600 text-base">
              Connect with fellow artists and grow your career
            </p>
          </div>

          {/* Form Header */}
          <div className="text-left mb-8">
            <h2 className="text-[#2D1B69] text-2xl sm:text-3xl font-semibold mb-10">
              Get Started
            </h2>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-[#2F1167] text-md font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 outline-none transition-colors text-gray-900 placeholder-gray-400"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-[#2F1167] text-md font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 outline-none transition-colors text-gray-900 placeholder-gray-400"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-[#2F1167] text-md font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 outline-none transition-colors text-gray-900 placeholder-gray-400"
                required
                minLength={6}
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3 mt-4">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 text-[#8B5CF6] border-gray-300 rounded focus:ring-[#8B5CF6] focus:ring-2"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600 leading-5">
                I agree to the{' '}
                <a href="#" className="text-[#8B5CF6] hover:text-[#7C3AED] font-medium">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#8B5CF6] hover:text-[#7C3AED] font-medium">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#5F14EA] text-white py-3.5 px-4 rounded-xl font-semibold transition-all duration-300 text-base mt-8 hover:from-[#7C3AED] hover:to-[#5B21B6]"
            >
              Get Started
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">or continue with</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Google Signup Button */}
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="w-full bg-white border border-gray-300 text-gray-700 py-3.5 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors text-base flex items-center justify-center space-x-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Sign up with Google</span>
            </button>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm">
                Already have an Account?{' '}
                <a href="/login" className="text-[#8B5CF6] hover:text-[#7C3AED] font-medium transition-colors">
                  Log in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Background for small screens */}
      <div className="lg:hidden fixed inset-0 bg-gradient-to-br from-[#8B5CF6] via-[#A855F7] to-[#7C3AED] -z-10 opacity-10"></div>
    </div>
  );
};

export default SignUp;