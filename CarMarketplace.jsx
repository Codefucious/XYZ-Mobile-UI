import React from 'react';
import { Search, Bookmark, ChevronLeft, Info, Heart, Send, Phone, Home, Grid, MessageCircle, User } from 'lucide-react';

const CarMarketplace = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 p-4">
        <div className="flex items-center gap-3">
          <button className="text-white">
            <ChevronLeft size={28} />
          </button>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search in Cars"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button className="text-white">
            <Bookmark size={24} />
          </button>
        </div>
      </div>

      {/* Price Filter Pills */}
      <div className="bg-gray-900 px-4 py-3 flex gap-2 overflow-x-auto">
        <button className="px-4 py-2 rounded-full bg-green-600 text-white text-sm whitespace-nowrap">
          &lt; TSh 11.0 M
        </button>
        <button className="px-4 py-2 rounded-full bg-green-600 text-white text-sm whitespace-nowrap">
          TSh 11 - 16 M
        </button>
        <button className="px-4 py-2 rounded-full bg-green-600 text-white text-sm whitespace-nowrap">
          &gt; TSh 25 M
        </button>
      </div>

      {/* Brand Filters */}
      <div className="bg-gray-900 px-4 py-3 flex items-center gap-6 border-b border-gray-800">
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <span className="text-gray-900 font-bold text-xs">BMW</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <span className="text-gray-900 font-bold text-xs">★</span>
          </div>
          <span className="text-xs text-gray-400">Mercedes-Benz</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <span className="text-gray-900 font-bold text-xs">M</span>
          </div>
          <span className="text-xs text-gray-400">Other</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-gray-900 px-4 flex gap-6 border-b-2 border-gray-800 overflow-x-auto">
        <button className="py-3 text-white border-b-2 border-white whitespace-nowrap">
          All filters
        </button>
        <button className="py-3 text-gray-400 whitespace-nowrap">
          Price, Tsh
        </button>
        <button className="py-3 text-gray-400 whitespace-nowrap">
          Make
        </button>
        <button className="py-3 text-gray-400 whitespace-nowrap">
          Year
        </button>
        <button className="py-3 text-gray-400 whitespace-nowrap">
          Year
        </button>
      </div>

      {/* Sort Controls */}
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="text-gray-400">
            <ChevronLeft size={24} />
          </button>
          <button className="text-gray-400">
            <ChevronLeft size={24} />
          </button>
          <button className="text-gray-400">
            <ChevronLeft size={24} className="rotate-180" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <Grid size={20} className="text-white" />
          <span className="text-sm text-gray-400">Sort by: Recommended</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span className="text-lg">🕐</span>
          <span>Any time</span>
        </div>
      </div>

      {/* Main Content - Car Card */}
      <div className="flex-1 bg-gray-900 px-4 py-4 overflow-y-auto">
        <div className="bg-gradient-to-b from-orange-200 to-gray-800 rounded-2xl overflow-hidden shadow-lg">
          {/* Card Header */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-800"></div>
              <div>
                <p className="text-sm text-gray-700">@LandCruiserSpecialist</p>
                <p className="text-xs text-gray-600">Posted 2 days ago</p>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
              <Info size={20} className="text-white" />
            </button>
          </div>

          {/* Car Image */}
          <div className="relative h-96 bg-gradient-to-b from-orange-300 to-gray-700">
            <img
              src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=800&fit=crop"
              alt="Toyota Landcruiser"
              className="w-full h-full object-cover"
            />

            {/* Action Buttons */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
              <button className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
                <Heart size={24} className="text-white" />
              </button>
              <button className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
                <Send size={24} className="text-white" />
              </button>
              <button className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
                <Phone size={24} className="text-white" />
              </button>
            </div>

            {/* Car Details Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h2 className="text-2xl font-bold text-white mb-1">Toyota Landcruiser</h2>
              <p className="text-gray-300 text-sm mb-2">Dar es Salaam</p>
              <p className="text-xl font-bold text-white">TZS 56,000,000</p>
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-2 p-3 bg-gray-900">
            <div className="w-32 h-20 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=200&h=150&fit=crop"
                alt="Thumbnail 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-20 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=200&h=150&fit=crop"
                alt="Thumbnail 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Swipe Up Indicator */}
        <div className="flex items-center justify-center gap-2 py-4 text-gray-400">
          <ChevronLeft className="rotate-90" size={20} />
          <span className="text-sm font-semibold">SWIPE UP 145 MORE CARS</span>
          <ChevronLeft className="rotate-90" size={20} />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-gray-300 px-6 py-3 flex items-center justify-between border-t border-gray-400">
        <button className="flex flex-col items-center gap-1 text-gray-600">
          <Home size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-600">
          <Bookmark size={24} />
          <span className="text-xs">Saved</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-600">
          <Grid size={24} />
          <span className="text-xs">Sell</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-600">
          <MessageCircle size={24} />
          <span className="text-xs">Messages</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-600">
          <User size={24} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default CarMarketplace;
