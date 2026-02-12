import React, { useState } from 'react';
import { Home, Bookmark, LayoutList, MessageCircle, User, Settings, Plus, ArrowUpRight, ArrowDownRight, X, Wallet, ChevronRight } from 'lucide-react';

const initialTransactions = [
  { id: 1, type: 'topup', description: 'Wallet Top Up', amount: 250000, date: 'Feb 10, 2026', time: '14:32' },
  { id: 2, type: 'deduction', description: 'Ad: Toyota Landcruiser', amount: 15000, date: 'Feb 9, 2026', time: '09:15' },
  { id: 3, type: 'deduction', description: 'Ad: Mercedes-Benz GLE', amount: 15000, date: 'Feb 7, 2026', time: '11:40' },
  { id: 4, type: 'topup', description: 'Wallet Top Up', amount: 100000, date: 'Feb 5, 2026', time: '16:20' },
  { id: 5, type: 'deduction', description: 'Ad: BMW X5', amount: 15000, date: 'Feb 3, 2026', time: '08:55' },
  { id: 6, type: 'deduction', description: 'Ad Boost: Toyota Landcruiser', amount: 25000, date: 'Feb 1, 2026', time: '13:10' },
  { id: 7, type: 'topup', description: 'Wallet Top Up', amount: 500000, date: 'Jan 28, 2026', time: '10:00' },
  { id: 8, type: 'deduction', description: 'Ad: Range Rover Sport', amount: 15000, date: 'Jan 25, 2026', time: '17:45' },
];

const topUpAmounts = [10000, 50000, 100000, 250000, 500000];

const formatCurrency = (amount) => {
  return 'TZS ' + amount.toLocaleString();
};

const ProfilePage = ({ onNavigate, activePage }) => {
  const [balance, setBalance] = useState(765000);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [showTopUp, setShowTopUp] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleTopUp = () => {
    if (!selectedAmount) return;
    setBalance(prev => prev + selectedAmount);
    const newTransaction = {
      id: Date.now(),
      type: 'topup',
      description: 'Wallet Top Up',
      amount: selectedAmount,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
    };
    setTransactions(prev => [newTransaction, ...prev]);
    setSelectedAmount(null);
    setShowTopUp(false);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-extrabold tracking-wide">My Profile</h1>
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <Settings size={20} className="text-gray-300" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

        {/* Profile Card */}
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20">
              <User size={30} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold">@LandCruiserSpecialist</h2>
              <p className="text-sm text-gray-400">Member since Jan 2025</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs text-gray-500">6 Active Ads</span>
                <span className="text-xs text-gray-600">|</span>
                <span className="text-xs text-gray-500">23 Total Ads</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wallet Card */}
        <div className="px-4 pt-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-800/80 rounded-2xl p-5 border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Wallet size={20} className="text-green-400" />
                <span className="text-sm font-medium text-gray-300">Wallet Balance</span>
              </div>
              <ChevronRight size={18} className="text-gray-500" />
            </div>

            <p className="text-3xl font-extrabold text-white mb-1">{formatCurrency(balance)}</p>
            <p className="text-xs text-gray-500 mb-5">Available for car ad postings & boosts</p>

            <button
              onClick={() => setShowTopUp(true)}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
            >
              <Plus size={18} />
              Top Up
            </button>
          </div>
        </div>

        {/* Top Up Modal */}
        {showTopUp && (
          <>
            <div
              onClick={() => { setShowTopUp(false); setSelectedAmount(null); }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-gray-800 rounded-t-3xl z-50 p-6 border-t border-gray-700">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-white">Top Up Wallet</h3>
                <button
                  onClick={() => { setShowTopUp(false); setSelectedAmount(null); }}
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
                >
                  <X size={16} className="text-gray-300" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {topUpAmounts.map(amount => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-3 rounded-xl text-sm font-semibold transition border ${
                      selectedAmount === amount
                        ? 'bg-green-500 border-green-400 text-white'
                        : 'bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600'
                    }`}
                  >
                    {amount >= 1000 ? `${(amount / 1000).toLocaleString()}K` : amount}
                  </button>
                ))}
              </div>

              {selectedAmount && (
                <p className="text-center text-sm text-gray-400 mb-4">
                  Adding <span className="text-green-400 font-semibold">{formatCurrency(selectedAmount)}</span> to your wallet
                </p>
              )}

              <button
                onClick={handleTopUp}
                disabled={!selectedAmount}
                className={`w-full py-3.5 rounded-xl font-semibold transition ${
                  selectedAmount
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Confirm Top Up
              </button>
            </div>
          </>
        )}

        {/* Transaction History */}
        <div className="px-4 pt-6 pb-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold text-white">Transaction History</h3>
            <span className="text-xs text-gray-500">{transactions.length} transactions</span>
          </div>

          <div className="space-y-2">
            {transactions.map(tx => (
              <div key={tx.id} className="bg-gray-800/60 rounded-xl px-4 py-3 flex items-center gap-3 border border-gray-700/30">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  tx.type === 'topup' ? 'bg-green-500/15' : 'bg-red-500/15'
                }`}>
                  {tx.type === 'topup'
                    ? <ArrowUpRight size={20} className="text-green-400" />
                    : <ArrowDownRight size={20} className="text-red-400" />
                  }
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{tx.description}</p>
                  <p className="text-xs text-gray-500">{tx.date} at {tx.time}</p>
                </div>

                {/* Amount */}
                <p className={`text-sm font-bold flex-shrink-0 ${
                  tx.type === 'topup' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {tx.type === 'topup' ? '+' : '-'}{formatCurrency(tx.amount)}
                </p>
              </div>
            ))}
          </div>
        </div>

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

export default ProfilePage;
