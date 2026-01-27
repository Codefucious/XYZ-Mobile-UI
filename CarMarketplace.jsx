import React, { useState, useRef, useEffect } from 'react';
import { Search, Bookmark, ChevronLeft, Info, Heart, Send, Phone, Home, Grid, MessageCircle, User, SlidersHorizontal } from 'lucide-react';

// Sample car data
const carsData = [
  {
    id: 1,
    username: '@LandCruiserSpecialist',
    postedTime: '2 days ago',
    title: 'Toyota Landcruiser',
    location: 'Dar es Salaam',
    price: 'TZS 56,000,000',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=600&h=800&fit=crop'
    ]
  },
  {
    id: 2,
    username: '@LuxuryCarDealer',
    postedTime: '3 days ago',
    title: 'Mercedes-Benz GLE',
    location: 'Dodoma',
    price: 'TZS 78,000,000',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&h=800&fit=crop'
    ]
  },
  {
    id: 3,
    username: '@BMWTanzania',
    postedTime: '5 days ago',
    title: 'BMW X5',
    location: 'Arusha',
    price: 'TZS 65,000,000',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617531653520-bd788689d0ce?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=800&fit=crop'
    ]
  },
  {
    id: 4,
    username: '@RangeRoverTZ',
    postedTime: '1 week ago',
    title: 'Range Rover Sport',
    location: 'Mwanza',
    price: 'TZS 92,000,000',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1621135802920-1864f7fb7556?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=800&fit=crop'
    ]
  },
  {
    id: 5,
    username: '@AudiSpecialist',
    postedTime: '1 week ago',
    title: 'Audi Q7',
    location: 'Dar es Salaam',
    price: 'TZS 71,000,000',
    images: [
      'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=600&h=800&fit=crop'
    ]
  },
  {
    id: 6,
    username: '@ToyotaPrado',
    postedTime: '2 weeks ago',
    title: 'Toyota Prado',
    location: 'Mbeya',
    price: 'TZS 48,000,000',
    images: [
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=800&fit=crop'
    ]
  }
];

const CarMarketplace = () => {
  const [selectedImages, setSelectedImages] = useState(
    carsData.reduce((acc, car) => ({ ...acc, [car.id]: 0 }), {})
  );
  const [remainingCars, setRemainingCars] = useState(145);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);

  // Handle scroll to update remaining cars count
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const clientHeight = scrollContainer.clientHeight;

      // Calculate which card is currently visible (each card takes full height)
      const visibleCardIndex = Math.round(scrollTop / clientHeight);

      // Update current card index
      setCurrentCardIndex(visibleCardIndex);

      // Update remaining cars based on scroll position
      const newRemaining = Math.max(0, 145 - visibleCardIndex);
      setRemainingCars(newRemaining);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThumbnailClick = (carId, imageIndex) => {
    setSelectedImages(prev => ({ ...prev, [carId]: imageIndex }));
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <button className="text-white">
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-lg font-semibold">Cars</h1>
        </div>
      </div>

      {/* Search Bar + Filter Toggle */}
      <div className="bg-gray-900 px-4 py-3 flex items-center gap-2 flex-shrink-0">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search in Cars"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Filter Toggle Icon */}
        <button
          onClick={() => setIsFilterExpanded(!isFilterExpanded)}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center ml-2"
          aria-label={isFilterExpanded ? "Hide filters" : "Show filters"}
        >
          <SlidersHorizontal
            size={20}
            className={`text-white transition-transform duration-300 ${isFilterExpanded ? 'rotate-0' : 'rotate-90'}`}
          />
        </button>
      </div>

      {/* Dark Overlay - Shows when filters expanded */}
      {isFilterExpanded && (
        <div
          onClick={() => setIsFilterExpanded(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Collapsible Filter Sections */}
      <div
        className={`relative z-50 transition-all duration-300 ease-in-out overflow-hidden ${
          isFilterExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Brand Filters */}
      <div className="bg-gray-900 px-4 py-3 flex items-center gap-6 border-b border-gray-800 flex-shrink-0">
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
      <div className="bg-gray-900 px-4 flex gap-6 border-b-2 border-gray-800 overflow-x-auto flex-shrink-0">
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
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between flex-shrink-0">
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
      </div>

      {/* Main Content - Car Cards */}
      <div
        ref={scrollContainerRef}
        className="flex-1 bg-gray-900 overflow-y-scroll snap-y snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {carsData.map((car, index) => (
          <div
            key={car.id}
            ref={el => cardRefs.current[index] = el}
            className="relative h-1/2 bg-gray-900 shadow-lg snap-start snap-always flex flex-col"
          >
            {/* Car Image */}
            <div className="relative flex-1 bg-gradient-to-b from-orange-300 to-gray-700 overflow-hidden">
              <img
                src={car.images[selectedImages[car.id]]}
                alt={car.title}
                className="w-full h-full object-cover"
              />

              {/* Card Header Overlay */}
              <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                  <div className="bg-black/70 px-3 py-2 rounded-lg">
                    <p className="text-sm font-bold text-white">{car.username}</p>
                    <p className="text-xs text-white">Posted {car.postedTime}</p>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                  <Info size={20} className="text-white" />
                </button>
              </div>

              {/* Car Details + Action Buttons Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{car.title}</h2>
                  <p className="text-gray-300 text-sm mb-2">{car.location}</p>
                  <p className="text-xl font-bold text-white">{car.price}</p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <button className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg hover:bg-gray-800 transition">
                    <Heart size={24} className="text-white" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg hover:bg-gray-800 transition">
                    <Send size={24} className="text-white" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg hover:bg-gray-800 transition">
                    <Phone size={24} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Images - Enhanced */}
            <div className="relative bg-gray-800 flex-shrink-0 border-t-2 border-gray-700 overflow-hidden">
              {/* Left scroll indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-800 to-transparent pointer-events-none z-10"></div>

              <div className="flex gap-3 p-4 overflow-x-auto">
                {car.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    onClick={() => handleThumbnailClick(car.id, imgIndex)}
                    className={`relative w-32 h-20 rounded-xl overflow-hidden cursor-pointer transition-all flex-shrink-0 shadow-lg ${
                      selectedImages[car.id] === imgIndex
                        ? 'ring-4 ring-green-400 scale-105 shadow-green-400/50'
                        : 'opacity-80 hover:opacity-100 hover:scale-102'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`View ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Selection indicator overlay */}
                    {selectedImages[car.id] === imgIndex && (
                      <div className="absolute inset-0 border-2 border-green-400 bg-green-400/10"></div>
                    )}
                    {/* Image number badge */}
                    <div className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{imgIndex + 1}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right scroll indicator */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-800 to-transparent pointer-events-none z-10"></div>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-gray-300 px-6 py-3 flex items-center justify-between border-t border-gray-400 flex-shrink-0">
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
