'use client'
import React, { useState } from "react";

import Image from "next/image";
import {
  HeroBGImage,
  HeroGirl,
  CeraVe,
  HudaBeauty,
  MayBelline,
  Loreal,
  Sephora,
  B,
  BeautyHub,
  Laroche,
  Mac,
} from "../../public";
import Link from "next/link";

const Landing = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen ">
        <nav className="bg-[#ffffff] flex items-center justify-between px-4 sm:px-8 py-4 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2.5">
            <Image src={B} alt="BeautyHUB Logo" width={20} height={20} className="sm:w-6 sm:h-6" />
          <Image src={BeautyHub} alt="BeautyHUB Logo" width={100} height={24} className="sm:w-[120px] sm:h-8" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg text-[#2F1167] hover:text-[#FFFDD0]/60 transition-colors">
          <a href="#" className="hover:text-[#2F1167]/80 transition-colors">
            Dashboard
          </a>
          <a href="#" className="hover:text-[#2F1167]/80 transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-[#2F1167]/80 transition-colors">
            Tutorials
          </a>
          <a href="#" className="hover:text-[#2F1167]/80 transition-colors">
            Shop
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-[#FFFDD0] p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Get Started Button */}
        <Link href='/login' className="hidden lg:block bg-gradient-to-r from-[#8B5CF6] to-[#5F14EA] text-[#ffffff] px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-colors">
          Get Started
        </Link>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#411900] border-t border-[#FFFDD0]/20 lg:hidden z-50">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <a href="#" className="text-[#FFFDD0] hover:text-[#FFFDD0]/80 transition-colors text-lg">
                Dashboard
              </a>
              <a href="#" className="text-[#FFFDD0] hover:text-[#FFFDD0]/80 transition-colors text-lg">
                Services
              </a>
              <a href="#" className="text-[#FFFDD0] hover:text-[#FFFDD0]/80 transition-colors text-lg">
                Tutorials
              </a>
              <a href="#" className="text-[#FFFDD0] hover:text-[#FFFDD0]/80 transition-colors text-lg">
                Shop
              </a>
              <button className="bg-[#FFFDD0] text-[#411900] px-6 py-3 rounded-xl font-semibold hover:bg-[#FFFDD0]/60 transition-colors mt-4 self-start">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
      

      {/* Hero Section */}
      <section className="relative overflow-hidden h-[75vh] sm:h-[85vh]">
        {/* Background Image */}
        <div className="absolute inset-0 ">
            <Image
            src={HeroBGImage}
            alt="Background"
            className="w-[100vw] h-full object-cover"
            />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 mb-8 lg:mb-0 text-center lg:text-left">
          {/* Decorative Elements */}
          <div className="mb-6 sm:mb-8 flex justify-center lg:justify-start">
            <div className="w-4 sm:w-5 h-12 sm:h-[70px] bg-gradient-to-r from-[#8B5CF6] to-[#5F14EA] mb-4"></div>
          </div>

          {/* Hero Text */}
          <h1 className="text-[#FFFFFF] text-xl sm:text-2xl lg:text-3xl leading-7 sm:leading-8 lg:leading-10 mb-6 sm:mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
            BeautyHub gives makeup artists the power to showcase their skills, earn from making tutorials, and build a loyal client base with ease.
          </h1>

          {/* Learn More Button */}
          <button className="bg-[#2F1167] shadow-[#A78BFA] shadow-lg border-b-4 border-r-4 border-[#A78BFA] text-[#ffffff] px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-semibold hover:bg-[#FFFDD0]/60 transition-colors">
            Learn More
          </button>
        </div>

        {/* Right Content - Hero Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Oval Frame */}
            <div className="w-60 h-72 sm:w-80 sm:h-96 lg:w-[350px] lg:h-[450px] overflow-hidden p-1.5 sm:p-2" style={{borderRadius: '50%'}}>
              <div className="w-full h-full overflow-hidden" style={{borderRadius: '50%'}}>
                <Image
                  src={HeroGirl}
                  alt="Makeup Artist"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="relative z-10 bg-[#EDE8FE] backdrop-blur-sm py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-black/70 text-sm sm:text-base lg:text-lg px-4">
              Join more than 5,000 leading companies that trust BeautyHUB
            </p>
          </div>

          {/* Mobile: Stack logos vertically */}
          <div className="block sm:hidden space-y-4">
            <div className="flex items-center justify-center h-12">
              <Image src={CeraVe} alt="CeraVe" className="w-20" />
            </div>
            <div className="flex items-center justify-center h-12">
              <Image src={HudaBeauty} alt="Huda Beauty" className="w-32" />
            </div>
            <div className="flex items-center justify-center h-12">
              <Image src={MayBelline} alt="Maybelline" className="w-28" />
            </div>
            <div className="flex items-center justify-center h-12">
              <Image src={Loreal} alt="L'Oreal" className="w-24" />
            </div>
            <div className="flex items-center justify-center h-12">
              <Image src={Sephora} alt="Sephora" className="w-28" />
            </div>
            <div className="flex items-center justify-center h-12">
              <Image src={Laroche} alt="La Roche Posay" className="w-24" />
            </div>
            <div className="flex items-center justify-center h-12">
              <Image src={Mac} alt="MAC" className="w-20" />
            </div>
          </div>

          {/* Tablet: 2x2 then 2x2 grid */}
          <div className="hidden sm:block md:hidden">
            {/* First grid */}
            <div className="grid grid-cols-2 gap-8 items-center justify-items-center mb-6">
              <div className="flex items-center justify-center h-16">
                <Image src={CeraVe} alt="CeraVe" className="w-24" />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image src={HudaBeauty} alt="Huda Beauty" className="w-36" />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image src={MayBelline} alt="Maybelline" className="w-32" />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image src={Loreal} alt="L'Oreal" className="w-28" />
              </div>
            </div>
            {/* Second grid */}
            <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
              <div className="flex items-center justify-center h-16">
                <Image src={Sephora} alt="Sephora" className="w-32" />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image src={Laroche} alt="La Roche Posay" className="w-28" />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image src={Mac} alt="MAC" className="w-24" />
              </div>
            </div>
          </div>

          {/* Desktop: Original layout */}
          <div className="hidden md:block">
            {/* First Row - 4 logos */}
            <div className="grid grid-cols-4 gap-x-8 lg:gap-x-16 items-center justify-items-center mb-4 lg:mb-0">
              <div className="flex items-center justify-center h-16 lg:h-20">
                <Image
                  src={CeraVe}
                  alt="CeraVe"
                  className="w-24 lg:w-[130px]"
                />
              </div>
              <div className="flex items-center justify-center h-16 lg:h-20">
                <Image
                  src={HudaBeauty}
                  alt="Huda Beauty"
                  className="w-40 lg:w-[240px]"
                />
              </div>
              <div className="flex items-center justify-center h-16 lg:h-20">
                <Image
                  src={MayBelline}
                  alt="Maybelline"
                  className="w-36 lg:w-[220px]"
                />
              </div>
              <div className="flex items-center justify-center h-16 lg:h-20">
                <Image
                  src={Loreal}
                  alt="L'Oreal"
                  className="w-28 lg:w-[170px]"
                />
              </div>
            </div>

            {/* Second Row - 3 logos */}
            <div className="grid grid-cols-3 gap-x-0 items-center justify-items-center">
              <div className="flex items-center justify-center h-16 lg:h-20">
                <Image
                  src={Sephora}
                  alt="Sephora"
                  className="w-32 lg:w-[190px]"
                />
              </div>
              <div className="flex items-center justify-center h-16 lg:h-20">
                <Image
                  src={Laroche}
                  alt="La Roche Posay"
                  className="w-28 lg:w-[160px]"
                />
              </div>
              <div className="flex items-center justify-center h-16 lg:h-20">
                <Image
                  src={Mac}
                  alt="MAC"
                  className="w-24 lg:w-[150px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;