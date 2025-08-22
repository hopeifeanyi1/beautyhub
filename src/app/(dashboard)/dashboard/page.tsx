import React from 'react';
import DashboardLayout from '@/components/Dashboardlayout';
import { TrendingUp, Calendar, MessageCircle, Users, Eye, Download, Star } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4 md:space-y-6">
        {/* Welcome Section */}
        <div className="bg-[#54467D] rounded-2xl p-4 md:p-6 text-white">
          <h1 className="text-xl md:text-2xl font-bold mb-2">Hi Cassie!</h1>
          <p className="text-purple-100 text-sm md:text-base">
            Ready to glow? Track your bookings, share tutorials, and grow your beauty business all in one place.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          <div className="bg-[#A78BFA29] rounded-2xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="bg-green-100 p-1.5 md:p-2 rounded-lg">
                <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
              </div>
              <span className="text-green-600 text-xs md:text-sm font-medium flex items-center">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                +3%
              </span>
            </div>
            <div>
              <div className="text-lg md:text-2xl font-bold text-gray-900">$434</div>
              <div className="text-gray-500 text-xs md:text-sm">Earnings this month</div>
            </div>
          </div>

          <div className="bg-[#A78BFA29] rounded-2xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="bg-purple-100 p-1.5 md:p-2 rounded-lg">
                <Calendar className="w-4 h-4 md:w-6 md:h-6 text-purple-600" />
              </div>
              <span className="text-purple-600 text-xs md:text-sm font-medium flex items-center">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                +12%
              </span>
            </div>
            <div>
              <div className="text-lg md:text-2xl font-bold text-gray-900">6</div>
              <div className="text-gray-500 text-xs md:text-sm">Booking requests</div>
            </div>
          </div>

          <div className="bg-[#A78BFA29] rounded-2xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="bg-gray-100 p-1.5 md:p-2 rounded-lg">
                <MessageCircle className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
              </div>
              <span className="text-gray-600 text-xs md:text-sm font-medium flex items-center">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                +4
              </span>
            </div>
            <div>
              <div className="text-lg md:text-2xl font-bold text-gray-900">24</div>
              <div className="text-gray-500 text-xs md:text-sm">New comments</div>
            </div>
          </div>

          <div className="bg-[#A78BFA29] rounded-2xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="bg-blue-100 p-1.5 md:p-2 rounded-lg">
                <Users className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
              </div>
              <span className="text-blue-600 text-xs md:text-sm font-medium flex items-center">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                +12.3%
              </span>
            </div>
            <div>
              <div className="text-lg md:text-2xl font-bold text-gray-900">1.6k</div>
              <div className="text-gray-500 text-xs md:text-sm">Engagement rate</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 bg-[#A78BFA29] p-3 md:p-4 rounded-2xl">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 bg-white rounded-xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Today&apos;s Schedule</h2>
              <button className="text-purple-600 hover:text-purple-700 text-xs md:text-sm font-medium">View All</button>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="text-gray-500 text-xs md:text-sm font-medium min-w-[40px] md:min-w-[50px] mt-1">10:00</div>
                <div className="text-gray-900 font-medium text-sm md:text-base">Bridal trial with Sarah</div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="text-gray-500 text-xs md:text-sm font-medium min-w-[40px] md:min-w-[50px] mt-1">14:15</div>
                <div className="text-gray-900 font-medium text-sm md:text-base">Live tutorial: &quot;Winged Liner Mastery&quot;</div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="text-gray-500 text-xs md:text-sm font-medium min-w-[40px] md:min-w-[50px] mt-1">17:30</div>
                <div className="text-gray-900 font-medium text-sm md:text-base">Client booking: Evening Glam</div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="text-gray-500 text-xs md:text-sm font-medium min-w-[40px] md:min-w-[50px] mt-1">20:10</div>
                <div className="text-gray-900 font-medium text-sm md:text-base">Write daily blog with Notion</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-6">
            {/* Product of the Week */}
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Product of the Week</h3>
              <div className="bg-purple-600 rounded-2xl p-3 md:p-4 text-center">
                <div className="mb-3 md:mb-4">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='100' viewBox='0 0 80 100'%3E%3Crect width='80' height='100' fill='%23D4A574' rx='8'/%3E%3Crect x='15' y='15' width='50' height='70' fill='%23B8956A' rx='4'/%3E%3Ctext x='40' y='55' text-anchor='middle' fill='white' font-size='8' font-family='Arial'%3EM.A.C%3C/text%3E%3C/svg%3E" 
                    alt="M.A.C Studio Fix Fluid" 
                    className="w-16 h-20 md:w-20 md:h-24 mx-auto object-contain"
                  />
                </div>
                <div className="text-white">
                  <div className="font-semibold text-xs md:text-sm mb-1">M.A.C Studio Fix Fluid</div>
                  <div className="text-purple-200 text-xs mb-2">By M.A.C</div>
                  <div className="flex items-center justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-2.5 h-2.5 md:w-3 md:h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Spotlight */}
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Brand Spotlight</h3>
              <div className="bg-purple-600 rounded-2xl p-3 md:p-4 text-center">
                <div className="mb-3 md:mb-4">
                  <div className="w-16 h-12 md:w-20 md:h-16 bg-white rounded-lg mx-auto flex items-center justify-center">
                    <svg width="50" height="20" viewBox="0 0 60 24" className="text-blue-600 md:w-[60px] md:h-[24px]">
                      <text x="30" y="16" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold" className="md:text-xs">
                        CeraVe
                      </text>
                    </svg>
                  </div>
                </div>
                <div className="text-white">
                  <div className="font-semibold text-xs md:text-sm mb-1">CeraVe</div>
                  <div className="text-purple-200 text-xs">
                    Discover our latest collection of natural beauty products.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Tutorials */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-900">Top Tutorials</h2>
            <div className="flex items-center space-x-2 text-gray-500">
              <Calendar className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm">August</span>
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="text-purple-600 font-bold text-base md:text-lg min-w-[25px] md:min-w-[30px]">01</div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg flex-shrink-0 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23F59E0B' rx='8'/%3E%3Ccircle cx='32' cy='24' r='8' fill='%23FDE68A'/%3E%3Cpath d='M20 44 Q32 40 44 44 Q32 48 20 44' fill='%23F59E0B'/%3E%3C/svg%3E" 
                  alt="Smokey Eye Tutorial" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 font-semibold text-sm md:text-base truncate">Smokey Eye Basics for Beginners</h3>
              </div>
              <div className="hidden sm:flex items-center space-x-4 md:space-x-6 text-gray-500 text-xs md:text-sm">
                <div className="flex items-center space-x-1">
                  <Eye className="w-3 h-3 md:w-4 md:h-4" />
                  <span>6.5k views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="w-3 h-3 md:w-4 md:h-4" />
                  <span>3.4k saves</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                  <span>18 comments</span>
                </div>
              </div>
              {/* Mobile stats - simplified */}
              <div className="sm:hidden text-gray-500 text-xs">
                6.5k views
              </div>
            </div>
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="text-purple-600 font-bold text-base md:text-lg min-w-[25px] md:min-w-[30px]">02</div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg flex-shrink-0 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23F59E0B' rx='8'/%3E%3Ccircle cx='32' cy='24' r='8' fill='%23FEF3C7'/%3E%3Cpath d='M22 42 Q32 38 42 42 Q32 46 22 42' fill='%23F59E0B'/%3E%3C/svg%3E" 
                  alt="Natural Look Tutorial" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 font-semibold text-sm md:text-base truncate">Everyday Natural Look</h3>
              </div>
              <div className="hidden sm:flex items-center space-x-4 md:space-x-6 text-gray-500 text-xs md:text-sm">
                <div className="flex items-center space-x-1">
                  <Eye className="w-3 h-3 md:w-4 md:h-4" />
                  <span>3.2k views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="w-3 h-3 md:w-4 md:h-4" />
                  <span>0.8k saves</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                  <span>6 comments</span>
                </div>
              </div>
              {/* Mobile stats - simplified */}
              <div className="sm:hidden text-gray-500 text-xs">
                3.2k views
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;