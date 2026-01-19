import React, { useState, useEffect } from 'react';
import { FaCar, FaGavel, FaSearch, FaShieldAlt, FaTachometerAlt, FaGasPump } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';
import { BiTimer } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bidTime, setBidTime] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45
  });

  // Featured cars for the slideshow
  const featuredCars = [
    {
      id: 1,
      name: "2023 Porsche 911 GT3",
      price: "$145,000",
      currentBid: "$132,500",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      specs: ["3.8L Flat-6", "502 HP", "0-60: 3.2s"]
    },
    {
      id: 2,
      name: "2022 Tesla Model S Plaid",
      price: "$129,999",
      currentBid: "$118,750",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      specs: ["Tri-Motor", "1,020 HP", "0-60: 1.99s"]
    },
    {
      id: 3,
      name: "2024 Mercedes-AMG GT",
      price: "$165,000",
      currentBid: "$152,300",
      image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      specs: ["4.0L V8", "523 HP", "Top Speed: 194 mph"]
    }
  ];

  // Timer countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBidTime(prev => {
        const newTime = { ...prev };
        if (newTime.seconds > 0) {
          newTime.seconds -= 1;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes -= 1;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours -= 1;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days -= 1;
              }
            }
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Auto slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredCars.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [featuredCars.length]);

  const handleBidNow = () => {
    alert(`Placing bid on ${featuredCars[currentSlide].name}`);
  };

  return (
    <section className="relative min-h-screen mt-15 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-50 h-50 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                         linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full mb-6">
              <FaGavel className="text-yellow-400" />
              <span className="text-sm font-semibold"> AUCTION IN PROGRESS</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Bid & Win Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Dream Car
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
              Join thousands of bidders in exclusive luxury car auctions. 
              From classics to hypercars, find your perfect ride at unbeatable prices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-gray-400 text-sm">Premium Cars</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-green-400">98%</div>
                <div className="text-gray-400 text-sm">Satisfaction Rate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-gray-400 text-sm">Live Support</div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                <FaSearch className="ml-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search for your dream car (e.g., Porsche 911, Tesla Model S)" 
                  className="w-full bg-transparent px-4 py-3 outline-none placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Search
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-green-500" />
                <span className="text-sm">Verified Vehicles</span>
              </div>
              <div className="flex items-center gap-2">
                <BiTimer className="text-yellow-500" />
                <span className="text-sm">Live Bidding</span>
              </div>
              <div className="flex items-center gap-2">
                <GiCarWheel className="text-blue-500" />
                <span className="text-sm">360° View</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Car Slideshow */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Car Card */}
            <div className="relative bg-gradient-to-br from-gray-800 to-black rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
              {/* Slide Indicators */}
              <div className="absolute top-6 right-6 z-20 flex gap-2">
                {featuredCars.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-blue-500 w-8' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              {/* Car Image */}
              <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                {featuredCars.map((car, index) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      scale: index === currentSlide ? 1 : 1.1
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 ${
                      index === currentSlide ? 'z-10' : 'z-0'
                    }`}
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${car.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  </motion.div>
                ))}
                
                {/* Timer Overlay */}
                <div className="absolute top-6 left-6 z-20 bg-black/80 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BiTimer className="text-yellow-500 text-xl" />
                    <span className="text-sm font-semibold">Auction Ends In</span>
                  </div>
                  <div className="flex gap-2">
                    {Object.entries(bidTime).map(([unit, value]) => (
                      <div key={unit} className="text-center">
                        <div className="bg-gray-900 rounded-lg px-3 py-2 min-w-[50px]">
                          <div className="text-xl font-bold">{value.toString().padStart(2, '0')}</div>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{unit.toUpperCase()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {featuredCars[currentSlide].name}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {featuredCars[currentSlide].specs.map((spec, index) => (
                        <span 
                          key={index}
                          className="bg-gray-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                        >
                          {spec.includes('HP') && <FaTachometerAlt className="text-red-500" />}
                          {spec.includes('L') && <FaGasPump className="text-green-500" />}
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-sm">Current Bid</div>
                    <div className="text-3xl md:text-4xl font-bold text-green-400">
                      {featuredCars[currentSlide].currentBid}
                    </div>
                    <div className="text-gray-400 line-through">
                      Buy Now: {featuredCars[currentSlide].price}
                    </div>
                  </div>
                </div>

                {/* Bid Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={handleBidNow}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <FaGavel />
                    Place Bid Now
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                    <FaCar />
                    View Details
                  </button>
                </div>

                {/* Bid Stats */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="text-gray-400">Total Bids</div>
                      <div className="font-bold">42</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Bidders</div>
                      <div className="font-bold">18</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Time Left</div>
                      <div className="font-bold text-yellow-500">02:14:30</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Reserve</div>
                      <div className="font-bold text-green-500">Met</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl shadow-2xl hidden lg:block"
            >
              <div className="text-center">
                <div className=" font-bold">Boost your </div>
                <div className="text-sm">First Bid !!</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-xl shadow-2xl hidden lg:block"
            >
              <div className="text-center">
                <div className="font-bold"> BID <br />& </div>
                <div className="text-sm"> WIN </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        {/* <div className="text-center">
          <div className="text-gray-400 text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div> */}
      </motion.div>
    </section>
  );
};

export default Hero;