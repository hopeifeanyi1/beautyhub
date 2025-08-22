"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
  PaintImage1,
  PaintImage2,
  SectionGirl,
} from "../../public";
import Link from "next/link";

const Landing = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen ">
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#ffffff] flex items-center justify-between px-4 sm:px-8 py-4 relative"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2.5">
          <Image
            src={B}
            alt="BeautyHUB Logo"
            width={20}
            height={20}
            className="sm:w-6 sm:h-6"
          />
          <Image
            src={BeautyHub}
            alt="BeautyHUB Logo"
            width={100}
            height={24}
            className="sm:w-[120px] sm:h-8"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg text-[#2F1167] hover:text-[#2F1167]/60 transition-colors">
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
          className="lg:hidden text-[#2F1167] p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Get Started Button */}
        <Link
          href="/login"
          className="hidden lg:block bg-gradient-to-r from-[#8B5CF6] to-[#5F14EA] text-[#ffffff] px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-colors hover:scale-105"
        >
          Get Started
        </Link>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#2F1167] border-t border-[#ffffff]/20 lg:hidden z-50"
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              <a
                href="#"
                className="text-[#ffffff] hover:text-[#ffffff]/80 transition-colors text-lg"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-[#ffffff] hover:text-[#ffffff]/80 transition-colors text-lg"
              >
                Services
              </a>
              <a
                href="#"
                className="text-[#ffffff] hover:text-[#ffffff]/80 transition-colors text-lg"
              >
                Tutorials
              </a>
              <a
                href="#"
                className="text-[#ffffff] hover:text-[#ffffff]/80 transition-colors text-lg"
              >
                Shop
              </a>
              <button className="bg-[#ffffff] text-[#411900] px-6 py-3 rounded-xl font-semibold hover:bg-[#ffffff]/60 transition-colors mt-4 self-start">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

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
          <motion.div 
            {...slideInLeft}
            className="flex-1 mb-8 lg:mb-0 text-center lg:text-left"
          >
            {/* Decorative Elements */}
            <div className="mb-6 sm:mb-8 flex justify-center lg:justify-start">
              <motion.div 
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-4 sm:w-5 h-12 sm:h-[70px] bg-gradient-to-r from-[#8B5CF6] to-[#5F14EA] mb-4"
              ></motion.div>
            </div>

            {/* Hero Text */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#FFFFFF] text-xl sm:text-2xl lg:text-3xl leading-7 sm:leading-8 lg:leading-10 mb-6 sm:mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0"
            >
              BeautyHub gives makeup artists the power to showcase their skills,
              earn from making tutorials, and build a loyal client base with
              ease.
            </motion.h1>

            {/* Learn More Button */}
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2F1167] shadow-[#A78BFA] shadow-lg border-b-4 border-r-4 border-[#A78BFA] text-[#ffffff] px-6 py-2.5 rounded-xl text-sm sm:text-base font-semibold hover:bg-[#ffffff]/60 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div 
            {...slideInRight}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Oval Frame */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-60 h-72 sm:w-80 sm:h-96 lg:w-[350px] lg:h-[450px] overflow-hidden p-1.5 sm:p-2"
                style={{ borderRadius: "50%" }}
              >
                <div
                  className="w-full h-full overflow-hidden"
                >
                  <Image
                    src={HeroGirl}
                    alt="Beauty artist"
                    className="w-64 h-80 sm:w-80 sm:h-96 object-cover rounded-t-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Logos Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-[#EDE8FE] backdrop-blur-sm py-6 sm:py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div 
            {...fadeInUp}
            className="text-center mb-6 sm:mb-8"
          >
            <p className="text-black/70 text-sm sm:text-base lg:text-lg px-4">
              Join more than 5,000 leading companies that trust BeautyHUB
            </p>
          </motion.div>

          {/* Mobile: Stack logos vertically */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="block sm:hidden space-y-4"
          >
            {[CeraVe, HudaBeauty, MayBelline, Loreal, Sephora, Laroche, Mac].map((logo, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center justify-center h-12"
              >
                <Image src={logo} alt={`Brand ${index + 1}`} className="w-20 sm:w-32" />
              </motion.div>
            ))}
          </motion.div>

          {/* Tablet: 2x2 then 2x2 grid */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hidden sm:block md:hidden"
          >
            {/* First grid */}
            <div className="grid grid-cols-2 gap-8 items-center justify-items-center mb-6">
              {[CeraVe, HudaBeauty, MayBelline, Loreal].map((logo, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center justify-center h-16"
                >
                  <Image src={logo} alt={`Brand ${index + 1}`} className="w-24 sm:w-36" />
                </motion.div>
              ))}
            </div>
            {/* Second grid */}
            <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
              {[Sephora, Laroche, Mac].map((logo, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center justify-center h-16"
                >
                  <Image src={logo} alt={`Brand ${index + 5}`} className="w-24 sm:w-32" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Desktop: Original layout */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hidden md:block"
          >
            {/* First Row - 4 logos */}
            <div className="grid grid-cols-4 gap-x-8 lg:gap-x-16 items-center justify-items-center mb-4 lg:mb-0">
              {[CeraVe, HudaBeauty, MayBelline, Loreal].map((logo, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center justify-center h-16 lg:h-20"
                >
                  <Image
                    src={logo}
                    alt={`Brand ${index + 1}`}
                    className="w-24 lg:w-[130px] xl:w-[240px]"
                  />
                </motion.div>
              ))}
            </div>

            {/* Second Row - 3 logos */}
            <div className="grid grid-cols-3 gap-x-0 items-center justify-items-center">
              {[Sephora, Laroche, Mac].map((logo, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center justify-center h-16 lg:h-20"
                >
                  <Image
                    src={logo}
                    alt={`Brand ${index + 5}`}
                    className="w-24 lg:w-[150px] xl:w-[190px]"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-white pb-48 lg:py-20 overflow-hidden"
      >
        {/* Decorative Paint Elements */}
        <div 
          className="absolute top-[-80px] right-0 "
        >
          <Image
            src={PaintImage1}
            alt="Paint decoration"
            className="w-[300px] h-full object-contain transform"
          />
        </div>
        <div 
          className="absolute lg:bottom-20 bottom-48 left-[0px] lg:left-[116px]"
        >
          <Image
            src={PaintImage2}
            alt="Paint decoration"
            className="w-[200px] h-full object-contain rounded-bl-2xl"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 lg:px-20 lg:py-20 pb-44 bg-[#2F1167] rounded-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-32 items-center">
            {/* Left Content */}
            <motion.div 
             initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white mb-4"
              >
                Features
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[#A78BFA] text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight"
              >
                Everything you need to grow your artistry
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed"
              >
                Manage your clients with ease, share and sell tutorials to grow
                your income, and run your own product shop. Beauty Hub makes it
                simple to book, teach, and sell without the extra hassle.
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#6B46C1] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </motion.button>
            </motion.div>

            {/* Right Content - Feature Cards */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-14"
            >
              {[
                {
                  title: "Smart Booking",
                  description: "Automated booking deposits and reminders so you never miss a client.",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  title: "Tutorials",
                  description: "Host paid interactive lessons, workshops, and tutorials to get paid instantly.",
                  icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
                {
                  title: "Shopfront",
                  description: "Sell your beauty kits or favorite products directly from your profile.",
                  icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                },
                {
                  title: "Growth Dashboard",
                  description: "Track your bookings and audience growth with real-time analytics.",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 50 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-[#A78BFA] rounded-2xl py-6 px-10"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={card.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                  <p className="text-white/80 text-sm">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-white"
      >
        {/* Woman Image */}
        <div className="flex justify-center pt-12 lg:pt-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute lg:top-[-128px] top-[-224px]"
          >
            <Image
              src={SectionGirl}
              alt="Beauty artist"
              className="w-64 h-80 sm:w-80 sm:h-96 object-cover rounded-t-full"
            />
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12 lg:mt-48 text-center bg-[#A78BFAB2] py-16 px-10"
        >
          {[
            { number: "10,000+", label: "Artists" },
            { number: "50,000+", label: "Clients" },
            { number: "₦6N 2M+", label: "Generated" },
            { number: "98%", label: "Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.h3 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.h3>
              <p className="text-white text-md md:text-2xl">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

{/* Footer */}
      <footer 
        className="bg-white text-[#2F1167] pt-12 lg:pt-16 pb-5"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* Logo and Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mt-16 mb-6">
                <Image
                  src={BeautyHub}
                  alt="BeautyHUB Logo"
                  width={150}
                  height={42}
                  className="w-[170px] h-10"
                />
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Features</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="#" className="text-[#2F1167] hover:text-[#2F1167]/80 transition-colors text-md lg:text-xl">
                    Smart Booking
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F1167] hover:text-[#2F1167]/80 transition-colors text-md lg:text-xl">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F1167] hover:text-[#2F1167]/80 transition-colors text-md lg:text-xl">
                    Shopfront
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F1167] hover:text-[#2F1167]/80 transition-colors text-md lg:text-xl">
                    Growth Dashboard
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div >
              <h3 className="text-2xl font-semibold mb-6">Resources</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="#" className="text-[#2F1167] hover:text-[#2F1167]/80 transition-colors text-md lg:text-xl">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F1167] hover:text-[#2F1167]/80 transition-colors text-md lg:text-xl">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F1167] hover:text-[#2F1167]/80 transition-colors text-md lg:text-xl">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F1167] hover:text-[#2F1167]/80 transition-colors text-md lg:text-xl">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div >
              <h3 className="text-2xl font-semibold mb-6">Newsletter</h3>
              <p className="text-[#2F1167]  text-md lg:text-xl mb-6">
                Be the first to get updated on our latest features
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#2F1167] text-[#2F1167] placeholder-[#2F1167]/60 focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all"
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#5F14EA] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#7C3AED] hover:to-[#4C1D95] transition-all"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div 
            className="border-t border-black/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <button 
                className="flex items-center space-x-2 text-[#2F1167] hover:text-[#2F1167]/80 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-md">Back to Creator Flow</span>
              </button>
            </div>
            
            <p className="text-[#2F1167] text-md">
              © 2025 Beauty Hub. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="#" 
                className="w-10 h-10 bg-[#8B5CF6] rounded-full flex items-center justify-center hover:bg-[#7C3AED] transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.297 3.641 9.757 8.564 10.75.626-.056 1.235-.244 1.235-.244-.626-.375-1.13-.896-1.13-1.906 0-.617.242-2.49.242-2.49s-.484-.968-.484-2.401c0-2.251 1.305-3.928 2.927-3.928 1.38 0 2.052 1.037 2.052 2.283 0 1.391-.888 3.467-1.346 5.395-.383 1.616.814 2.933 2.417 2.933 2.902 0 4.846-3.708 4.846-8.149 0-3.368-2.287-5.89-6.434-5.89-4.76 0-7.726 3.71-7.726 7.87 0 1.435.406 2.417.406 2.417s-.203 1.167-.464 1.573c-.242.375-.781.585-.781.585-.484-.222-.726-.484-.726-.726 0-.203.081-.484.081-.484s-.323-1.36-.323-3.347c0-3.266 2.49-6.24 7.767-6.24 4.112 0 6.883 2.933 6.883 6.12 0 4.192-2.37 7.327-5.564 7.327-1.097 0-2.13-.585-2.49-1.286 0 0-.585 2.327-.726 2.823-.242.585-.484 1.097-.727 1.573C9.537 23.812 10.763 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a
                href="#" 
                className="w-10 h-10 bg-[#8B5CF6] rounded-full flex items-center justify-center hover:bg-[#7C3AED] transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8B5CF6] rounded-full flex items-center justify-center hover:bg-[#7C3AED] transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8B5CF6] rounded-full flex items-center justify-center hover:bg-[#7C3AED] transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;