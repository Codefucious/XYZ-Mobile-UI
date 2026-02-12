import React, { useState } from 'react';
import { Home, Bookmark, LayoutList, MessageCircle, User, Eye, MessageSquare, TrendingUp, MoreVertical, Plus, Clock, CheckCircle, PauseCircle, XCircle, MapPin } from 'lucide-react';

const myAdsData = [
  {
    id: 1,
    title: 'Toyota Landcruiser',
    location: 'Dar es Salaam',
    price: 'TZS 56,000,000',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=800&fit=crop',
    status: 'active',
    boosted: true,
    postedDate: 'Feb 9, 2026',
    expiresIn: '26 days',
    views: 342,
    inquiries: 18,
    saves: 24,
  },
  {
    id: 2,
    title: 'Mercedes-Benz GLE',
    location: 'Dodoma',
    price: 'TZS 78,000,000',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=800&fit=crop',
    status: 'active',
    boosted: false,
    postedDate: 'Feb 7, 2026',
    expiresIn: '24 days',
    views: 187,
    inquiries: 9,
    saves: 11,
  },
  {
    id: 3,
    title: 'BMW X5',
    location: 'Arusha',
    price: 'TZS 65,000,000',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=800&fit=crop',
    status: 'active',
    boosted: false,
    postedDate: 'Feb 3, 2026',
    expiresIn: '20 days',
    views: 256,
    inquiries: 14,
    saves: 19,
  },
  {
    id: 4,
    title: 'Range Rover Sport',
    location: 'Mwanza',
    price: 'TZS 92,000,000',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=800&fit=crop',
    status: 'paused',
    boosted: false,
    postedDate: 'Jan 25, 2026',
    expiresIn: '11 days',
    views: 410,
    inquiries: 22,
    saves: 31,
  },
  {
    id: 5,
    title: 'Audi Q7',
    location: 'Dar es Salaam',
    price: 'TZS 71,000,000',
    image: 'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=600&h=800&fit=crop',
    status: 'expired',
    boosted: false,
    postedDate: 'Jan 5, 2026',
    expiresIn: 'Expired',
    views: 523,
    inquiries: 27,
    saves: 38,
  },
  {
    id: 6,
    title: 'Toyota Prado',
    location: 'Mbeya',
    price: 'TZS 48,000,000',
    image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=600&h=800&fit=crop',
    status: 'active',
    boosted: false,
    postedDate: 'Feb 1, 2026',
    expiresIn: '18 days',
    views: 134,
    inquiries: 6,
    saves: 8,
  },
];

const statusConfig = {
  active: { label: 'Active', icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-500/15', dot: 'bg-green-400' },
  paused: { label: 'Paused', icon: PauseCircle, color: 'text-yellow-400', bg: 'bg-yellow-500/15', dot: 'bg-yellow-400' },
  expired: { label: 'Expired', icon: XCircle, color: 'text-red-400', bg: 'bg-red-500/15', dot: 'bg-red-400' },
};

const MyAdsPage = ({ onNavigate, activePage }) => {
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'paused', label: 'Paused' },
    { key: 'expired', label: 'Expired' },
  ];

  const filteredAds = filter === 'all' ? myAdsData : myAdsData.filter(ad => ad.status === filter);

  const counts = {
    all: myAdsData.length,
    active: myAdsData.filter(a => a.status === 'active').length,
    paused: myAdsData.filter(a => a.status === 'paused').length,
    expired: myAdsData.filter(a => a.status === 'expired').length,
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-extrabold tracking-wide">My Ads</h1>
          <button className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition">
            <Plus size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="px-4 pt-3 pb-1 flex-shrink-0">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-800/60 rounded-xl px-3 py-3 text-center border border-gray-700/30">
            <p className="text-xl font-extrabold text-white">{myAdsData.reduce((s, a) => s + a.views, 0).toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-0.5">Total Views</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl px-3 py-3 text-center border border-gray-700/30">
            <p className="text-xl font-extrabold text-white">{myAdsData.reduce((s, a) => s + a.inquiries, 0)}</p>
            <p className="text-xs text-gray-500 mt-0.5">Inquiries</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl px-3 py-3 text-center border border-gray-700/30">
            <p className="text-xl font-extrabold text-white">{myAdsData.reduce((s, a) => s + a.saves, 0)}</p>
            <p className="text-xs text-gray-500 mt-0.5">Saves</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 pt-3 pb-2 flex-shrink-0">
        <div className="flex gap-2">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition border ${
                filter === f.key
                  ? 'bg-white text-gray-900 border-white'
                  : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
              }`}
            >
              {f.label} ({counts[f.key]})
            </button>
          ))}
        </div>
      </div>

      {/* Ad Cards List */}
      <div className="flex-1 overflow-y-auto px-4 pt-2 pb-24 space-y-3" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {filteredAds.map(ad => {
          const status = statusConfig[ad.status];
          return (
            <div key={ad.id} className="bg-gray-800/60 rounded-2xl overflow-hidden border border-gray-700/30">
              {/* Image + Status */}
              <div className="relative">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-40 object-cover"
                />
                {/* Status Badge */}
                <div className={`absolute top-3 left-3 ${status.bg} backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${status.dot}`}></div>
                  <span className={`text-xs font-semibold ${status.color}`}>{status.label}</span>
                </div>
                {/* Boosted Badge */}
                {ad.boosted && (
                  <div className="absolute top-3 right-3 bg-green-500/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp size={12} className="text-white" />
                    <span className="text-xs font-semibold text-white">Boosted</span>
                  </div>
                )}
                {/* Menu */}
                <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <MoreVertical size={16} className="text-white" />
                </button>
              </div>

              {/* Details */}
              <div className="p-3.5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-base font-bold text-white">{ad.title}</h3>
                  <p className="text-sm font-bold text-green-400 flex-shrink-0 ml-2">{ad.price}</p>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <MapPin size={12} className="text-gray-500" />
                  <span className="text-xs text-gray-500">{ad.location}</span>
                  <span className="text-xs text-gray-600 mx-1">·</span>
                  <Clock size={12} className="text-gray-500" />
                  <span className="text-xs text-gray-500">
                    {ad.status === 'expired' ? 'Expired' : `${ad.expiresIn} left`}
                  </span>
                </div>

                {/* Metrics */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Eye size={14} className="text-gray-500" />
                    <span className="text-xs text-gray-400">{ad.views}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageSquare size={14} className="text-gray-500" />
                    <span className="text-xs text-gray-400">{ad.inquiries}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bookmark size={14} className="text-gray-500" />
                    <span className="text-xs text-gray-400">{ad.saves}</span>
                  </div>
                  <div className="flex-1"></div>
                  {ad.status === 'active' && !ad.boosted && (
                    <button className="px-3 py-1 rounded-full bg-green-500/15 text-green-400 text-xs font-semibold hover:bg-green-500/25 transition">
                      Boost
                    </button>
                  )}
                  {ad.status === 'expired' && (
                    <button className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 text-xs font-semibold hover:bg-gray-600 transition">
                      Renew
                    </button>
                  )}
                  {ad.status === 'paused' && (
                    <button className="px-3 py-1 rounded-full bg-green-500/15 text-green-400 text-xs font-semibold hover:bg-green-500/25 transition">
                      Resume
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {filteredAds.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-gray-500">
            <LayoutList size={40} className="mb-3 text-gray-600" />
            <p className="text-sm">No {filter} ads found</p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-gray-300 px-6 py-3 flex items-center justify-between border-t border-gray-400">
        <button onClick={() => onNavigate('home')} className={`flex flex-col items-center gap-1 ${activePage === 'home' ? 'text-gray-900' : 'text-gray-600'}`}>
          <Home size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button onClick={() => onNavigate('saved')} className={`flex flex-col items-center gap-1 ${activePage === 'saved' ? 'text-gray-900' : 'text-gray-600'}`}>
          <Bookmark size={24} />
          <span className="text-xs">Saved</span>
        </button>
        <button onClick={() => onNavigate('myads')} className={`flex flex-col items-center gap-1 ${activePage === 'myads' ? 'text-gray-900' : 'text-gray-600'}`}>
          <LayoutList size={24} />
          <span className="text-xs">My Ads</span>
        </button>
        <button onClick={() => onNavigate('messages')} className={`flex flex-col items-center gap-1 ${activePage === 'messages' ? 'text-gray-900' : 'text-gray-600'}`}>
          <MessageCircle size={24} />
          <span className="text-xs">Messages</span>
        </button>
        <button onClick={() => onNavigate('profile')} className={`flex flex-col items-center gap-1 ${activePage === 'profile' ? 'text-gray-900' : 'text-gray-600'}`}>
          <User size={24} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default MyAdsPage;
