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
  X,
  LogOut
} from 'lucide-react';
import { BeautyHub } from "../../public";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from './context/UserContext'; // Import the context
import { useRouter } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useUser(); // Use the context
  const router = useRouter();
  const pathname = usePathname();

  // Navigation items
  const navigationItems = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard
    },
    {
      href: '/tutorial',
      label: 'Tutorials',
      icon: GraduationCap
    },
    {
      href: '/shop',
      label: 'Shop',
      icon: ShoppingCart
    },
    {
      href: '/community',
      label: 'Community',
      icon: Users
    },
    {
      href: '/inbox',
      label: 'Inbox',
      icon: Mail
    },
    {
      href: '/setting',
      label: 'Settings',
      icon: Settings
    }
  ];

  // Check if current path is active
  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  // Get first name for display
  const getFirstName = (fullName: string) => {
    return fullName.split(' ')[0];
  };

  // Get initials for avatar
  const getInitials = (fullName: string) => {
    const names = fullName.split(' ');
    return names.length > 1 
      ? `${names[0][0]}${names[1][0]}`.toUpperCase()
      : names[0][0].toUpperCase();
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  // Default to "User" if no user data is available
  const displayName = user?.fullName || "User";
  const firstName = getFirstName(displayName);
  const initials = getInitials(displayName);

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
            
            {/* User Dropdown */}
            <div className="relative">
              <div 
                className="hidden sm:flex items-center space-x-2 cursor-pointer hover:text-purple-200"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <span className="text-white font-medium text-sm md:text-base">{firstName}</span>
                <ChevronDown className="text-white w-4 h-4" />
              </div>

              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-medium text-gray-900">{displayName}</p>
                    <p className="text-sm text-gray-500">{user?.email || 'user@example.com'}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign out</span>
                  </button>
                </div>
              )}
            </div>

            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-white text-xs md:text-sm font-medium">{initials}</span>
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
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const active = isActiveLink(item.href);
                
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsSidebarOpen(false)} // Close mobile sidebar on navigation
                      className={`
                        w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors font-medium
                        ${active 
                          ? 'text-[#2F1167] bg-white hover:bg-white/90' 
                          : 'text-white hover:bg-white/10'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
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

      {/* Click outside to close user menu */}
      {isUserMenuOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;