'use client'
import React, { useState } from 'react';
import { Search, Plus, Play, Clock, Eye, ChevronDown, User } from 'lucide-react';
import DashboardLayout from '@/components/Dashboardlayout';

const TutorialsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All tutorials');
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const categories = [
    'All tutorials',
    'Makeup Basics',
    'Bridal Looks', 
    'Advanced Techniques',
    'Natural',
    'Special Effects',
    'Stage Craft'
  ];

  const featuredTutorial = {
    title: 'Master the Perfect Smokey Eye',
    description: 'Learn professional techniques for creating the classic smokey eye look',
    author: 'Kemi Akande',
    duration: '25 min',
    image: '/api/placeholder/800/400'
  };

  const tutorials = [
    {
      id: 1,
      title: 'Perfect Winged Eyeliner Tutorial',
      author: 'Emma Wilson',
      authorAvatar: '/api/placeholder/32/32',
      views: '6.5k views',
      duration: '12:45',
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Natural Summer Makeup Look',
      author: 'Sarah Anderson',
      authorAvatar: '/api/placeholder/32/32',
      views: '11.2k views', 
      duration: '18:30',
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Professional Face Contouring',
      author: 'Lisa Chen',
      authorAvatar: '/api/placeholder/32/32',
      views: '8.5k views',
      duration: '22:15',
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Bridal Makeup Masterclass',
      author: 'Rachel Kim',
      authorAvatar: '/api/placeholder/32/32',
      views: '20.9k views',
      duration: '45:20',
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Summer Glow Makeup',
      author: 'Anna Smith',
      authorAvatar: '/api/placeholder/32/32',
      views: '11k views',
      duration: '16:45',
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Glowing Skincare Routine',
      author: 'Maria Garcia',
      authorAvatar: '/api/placeholder/32/32',
      views: '1k views',
      duration: '28:10',
      thumbnail: '/api/placeholder/400/250'
    }
  ];

  return (
    <DashboardLayout>
      {/* Header */}

      {/* Featured Tutorial Hero */}
      <div className="mb-8">
        <div className="relative  rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={featuredTutorial.image} 
              alt={featuredTutorial.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-2xl">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Featured
              </div>
              <div className="flex items-center gap-2 text-white/80 mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{featuredTutorial.duration}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {featuredTutorial.title}
              </h1>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                {featuredTutorial.description}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium">{featuredTutorial.author}</span>
              </div>
              <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center gap-3">
                <Play className="w-5 h-5" />
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
      </DashboardLayout>

)}

export default TutorialsPage;