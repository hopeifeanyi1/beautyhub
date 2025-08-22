'use client'
import React, { useState } from 'react';
import { Search, Plus, Heart, MessageCircle, Share, Bookmark, MoreHorizontal, Calendar, Users } from 'lucide-react';
import DashboardLayout from '@/components/Dashboardlayout';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('Featured Discussion');

  const trendingDiscussions = [
    {
      title: 'Best natural skincare brands',
      views: '2.5k views',
      comments: '108 comments'
    },
    {
      title: 'Summer makeup trends 2025',
      views: '3.6k views',
      comments: '156 comments'
    },
    {
      title: 'Sustainable beauty products',
      views: '2.1k views',
      comments: '89 comments'
    },
    {
      title: 'Minimalist makeup routine',
      views: '2.8k views',
      comments: '134 comments'
    },
    {
      title: 'Budget-friendly beauty tips',
      views: '4.2k views',
      comments: '203 comments'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Beauty Masterclass',
      date: 'Tomorrow, 3:00 PM',
      action: 'Join Event'
    },
    {
      title: 'Skincare Workshop',
      date: 'Sat 11:00 AM',
      action: 'Join Event'
    }
  ];

  const topCreators = [
    {
      name: 'Amy Sinclair',
      role: 'Pro Creator',
      avatar: '/api/placeholder/32/32'
    },
    {
      name: 'Emily Chen',
      role: 'Pro Creator',
      avatar: '/api/placeholder/32/32'
    },
    {
      name: 'Amy Sinclair',
      role: 'Pro Creator',
      avatar: '/api/placeholder/32/32'
    },
    {
      name: 'Emily Chen',
      role: 'Pro Creator',
      avatar: '/api/placeholder/32/32'
    }
  ];

  const posts = [
    {
      id: 1,
      type: 'challenge',
      title: 'Weekly Beauty Challenge: Summer Glow Look',
      description: 'Share your favorite summer beauty looks and tips! This week\'s challenge: Create a natural, glowing summer look using only 5 products.',
      author: 'Beauty Hub Team',
      timeAgo: '2 hrs ago',
      likes: '2.1k',
      comments: '156',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      type: 'post',
      title: 'Just tried the new summer collection from @M.A.C! The lightweight sunscreen is a game-changer. Swipe for the full look!',
      author: 'Sarah Johnson',
      timeAgo: '4 hrs ago',
      likes: '934',
      comments: '12',
      image: '/api/placeholder/600/400',
      avatar: '/api/placeholder/40/40'
    }
  ];

  return (
    <DashboardLayout>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6 mt-3">
          {/* Create Post Section */}
          <div className="bg-[#382E53] rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">U</span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Share your look, ask a question or start a discussion..."
                  className="w-full p-4 bg-[#382E53] rounded-xl border-b focus:outline-none focus:ring-none focus:ring-none"
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition-colors">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="bg-[#382E53] rounded-2xl p-6 shadow-sm">
              {post.type === 'challenge' && (
                <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Featured Discussion
                </div>
              )}
              
              <h2 className="text-xl font-semibold mb-3 text-white">
                {post.title}
              </h2>
              
              {post.description && (
                <p className="text-white/70 mb-4">
                  {post.description}
                </p>
              )}

              {post.image && (
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={post.image} 
                    alt="Post content" 
                    className="w-full h-96 object-cover"
                  />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors">
                    <Share className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-500 hover:text-orange-500 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                <div>
                  <p className="font-medium text-sm text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.timeAgo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Discussions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-semibold">📈</span>
              <h3 className="font-semibold text-gray-900">Trending Discussions</h3>
            </div>
            <div className="space-y-3">
              {trendingDiscussions.map((discussion, index) => (
                <div key={index} className="p-3 bg-[#53457D] rounded-lg cursor-pointer">
                  <h4 className="font-medium text-sm text-white mb-1">{discussion.title}</h4>
                  <p className="text-xs text-white/70">{discussion.views} • {discussion.comments}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-4 border border-purple-200 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <h4 className="font-medium text-sm text-gray-900">{event.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{event.date}</p>
                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    {event.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Top Creators */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Top Creators</h3>
            <div className="space-y-3">
              {topCreators.map((creator, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-gray-900">{creator.name}</h4>
                    <p className="text-xs text-gray-500">{creator.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CommunityPage;