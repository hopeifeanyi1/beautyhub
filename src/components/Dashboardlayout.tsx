'use client'
import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  LayoutDashboard, 
  GraduationCap, 
  ShoppingCart, 
  Users, 
  Mail, 
  Settings,
  Menu,
  X
} from 'lucide-react';
import { BeautyHub } from "../../public";
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="max-h-screen min-h-screen bg-[#2F1167] overflow-hidden">
      {/* Header */}
      <header className="bg-[#2F1167] px-3 md:px-6 pt-2">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button & Logo */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden text-white p-1 hover:bg-white/10 rounded"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="bg-white">
              <Image src={BeautyHub} alt='' className="h-8 md:h-auto w-auto"/>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile, shown on tablet+ */}
          <div className="hidden sm:flex flex-1 max-w-md mx-4 md:mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tutorials, products..."
                className="w-full bg-[#2F1167] border border-gray-600 rounded-full py-2 pl-10 pr-4 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Mobile search icon */}
            <Search className="sm:hidden text-white w-5 h-5 cursor-pointer hover:text-purple-200" />
            <Bell className="text-white w-5 md:w-6 h-5 md:h-6 cursor-pointer hover:text-purple-200" />
            <div className="hidden sm:flex items-center space-x-2 cursor-pointer hover:text-purple-200">
              <span className="text-white font-medium text-sm md:text-base">Cassie</span>
              <ChevronDown className="text-white w-4 h-4" />
            </div>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-white text-xs md:text-sm font-medium">C</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-h-screen overflow-hidden relative">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 transition-transform duration-300 ease-in-out
          fixed md:relative z-50 md:z-auto
          w-64 bg-[#2F1167] min-h-screen
        `}>
          {/* Mobile close button */}
          <div className="md:hidden flex justify-end p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white hover:bg-white/10 p-1 rounded"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="px-6 py-6 md:py-10">
            <ul className="space-y-2">
              <li>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-[#2F1167] bg-white rounded-lg hover:bg-white/30 transition-colors">
                  <LayoutDashboard className="w-5 h-5" />
                  <span className="font-medium">Dashboard</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors">
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-medium">Tutorials</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="font-medium">Shop</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Community</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Inbox</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors">
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">Settings</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-3 md:p-6 overflow-scroll">
          <div className="bg-white backdrop-blur-sm rounded-2xl p-3 md:p-6 min-h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;