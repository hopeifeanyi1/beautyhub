'use client'
import React, { useState } from 'react';
import { Search, Plus, Heart, ShoppingCart } from 'lucide-react';
import DashboardLayout from '@/components/Dashboardlayout';

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');

  const categories = [
    'All Products',
    'Makeup Brushes',
    'Blush Cleaner',
    'Eyebrow Beauty',
    'Concealer',
    'Eyeslash Curler',
    'Eyelash Curler'
  ];

  const products = [
    {
      id: 1,
      name: 'Matte Lipstick - Ruby Red',
      brand: 'M.A.C',
      price: '₦12,000',
      originalPrice: null,
      image: '/api/placeholder/250/250',
      isNew: false
    },
    {
      id: 2,
      name: 'Matte Lipstick - Ruby Red',
      brand: 'M.A.C',
      price: '₦12,000',
      originalPrice: null,
      image: '/api/placeholder/250/250',
      isNew: false
    },
    {
      id: 3,
      name: 'Matte Lipstick - Ruby Red',
      brand: 'M.A.C',
      price: '₦12,000',
      originalPrice: null,
      image: '/api/placeholder/250/250',
      isNew: false
    },
    {
      id: 4,
      name: 'Matte Lipstick - Ruby Red',
      brand: 'M.A.C',
      price: '₦12,000',
      originalPrice: null,
      image: '/api/placeholder/250/250',
      isNew: false
    },
    {
      id: 5,
      name: 'Matte Lipstick - Ruby Red',
      brand: 'M.A.C',
      price: '₦12,000',
      originalPrice: null,
      image: '/api/placeholder/250/250',
      isNew: false
    },
    {
      id: 6,
      name: 'Matte Lipstick - Ruby Red',
      brand: 'M.A.C',
      price: '₦12,000',
      originalPrice: null,
      image: '/api/placeholder/250/250',
      isNew: false
    },
    {
      id: 7,
      name: 'Matte Lipstick - Ruby Red',
      brand: 'M.A.C',
      price: '₦12,000',
      originalPrice: null,
      image: '/api/placeholder/250/250',
      isNew: false
    },
    {
      id: 8,
      name: 'Matte Lipstick - Ruby Red',
      brand: 'M.A.C',
      price: '₦12,000',
      originalPrice: null,
      image: '/api/placeholder/250/250',
      isNew: false
    },
    {
      id: 9,
      name: 'Matte Lipstick - Ruby Red',
      brand: 'M.A.C',
      price: '₦12,000',
      originalPrice: null,
      image: '/api/placeholder/250/250',
      isNew: false
    },
    {
      id: 10,
      name: 'Matte Lipstick - Ruby Red',
      brand: 'M.A.C',
      price: '₦12,000',
      originalPrice: null,
      image: '/api/placeholder/250/250',
      isNew: false
    }
  ];

  return (
    <DashboardLayout>

      {/* Promotional Banner */}
      <div className="mb-8">
        <div className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-2xl p-8 text-white overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Get 20% off on M.A.C products This Week
            </h1>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Shop Now
            </button>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
            {/* Product Image */}
            <div className="relative aspect-square mb-4 bg-gray-100 rounded-xl overflow-hidden group">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Heart Icon */}
              <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>

              {product.isNew && (
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  NEW
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-2">
              <div className="text-xs text-gray-500 font-medium">{product.brand}</div>
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
                )}
              </div>

              <button className="w-full bg-purple-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-purple-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-12">
        <button className="bg-white text-purple-600 border border-purple-600 px-8 py-3 rounded-xl font-medium hover:bg-purple-50 transition-colors">
          Load More Products
        </button>
      </div>
   </DashboardLayout>
  );
};

export default ShopPage;