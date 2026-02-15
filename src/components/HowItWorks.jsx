import React from 'react';
// Importing specific high-end icons from Font Awesome 6 and Material Design
import { FaUserPlus, FaGavel, FaCarSide } from 'react-icons/fa6';
import { MdSecurity } from 'react-icons/md';

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Create Your Account",
      description: "Join our exclusive community of collectors and enthusiasts. Verification takes less than 24 hours.",
      icon: <FaUserPlus size={32} className="text-[#769A7F]" />,
    },
    {
      id: "02",
      title: "Find Your Dream Car",
      description: "Browse through our curated selection of vintage classics, luxury sedans, and high-performance supercars.",
      icon: <FaCarSide size={32} className="text-[#769A7F]" />,
    },
    {
      id: "03",
      title: "Place Your Bid",
      description: "Engage in transparent, real-time bidding. Set your maximum price and let our system do the rest.",
      icon: <FaGavel size={32} className="text-[#769A7F]" />,
    },
    {
      id: "04",
      title: "Secure Checkout",
      description: "Our secure escrow service ensures that funds are only released once the vehicle is delivered as described.",
      icon: <MdSecurity size={36} className="text-[#769A7F]" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-[#769A7F] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            The Process
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            How to Win Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#769A7F] to-[#5a7c63]">Next Ride</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We've streamlined the luxury car auction process to be as smooth as the vehicles we sell. 
            From registration to delivery, we handle the details.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Subtle connecting line for desktop (Visual flair) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-900/40 border border-[#769A7F] p-10 rounded-3xl hover:border-blue-500/40 transition-all duration-500 z-10 backdrop-blur-md"
            >
              {/* Background Number Label */}
              <span className="absolute top-6 right-8 text-7xl font-black text-slate-800/20 group-hover:text-blue-500/5 transition-colors duration-500">
                {step.id}
              </span>

              {/* Icon Container */}
              <div className="w-20 h-20 bg-slate-800/50 rounded-2xl flex items-center justify-center mb-8 border border-[#769A7F] group-hover:scale-110 group-hover:bg-blue-600/10 group-hover:border-blue-500/30 transition-all duration-500 shadow-xl">
                {step.icon}
              </div>

              {/* Text Content */}
              <h4 className="text-2xl font-bold mb-4 group-hover:text-[#769A7F] transition-colors duration-300">
                {step.title}
              </h4>
              <p className="text-slate-400 leading-relaxed text-base">
                {step.description}
              </p>
              
              {/* Bottom Interactive Glow */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-blue-500/40 to-blue-600/50 transition-all duration-700 group-hover:w-full rounded-b-3xl shadow-[0_5px_15px_rgba(37,99,235,0.4)]" />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold text-white transition duration-300 ease-out border-2 border-[#769A7F] rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#769A7F] group-hover:translate-x-0 ease">
              <FaCarSide size={20} className="mr-2" />
              Let's Go
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#769A7F] transition-all duration-300 transform group-hover:translate-x-full ease">Start Bidding</span>
            <span className="relative invisible">Start Bidding</span>
          </button>
          <p className="text-slate-500 mt-6 text-sm italic">No credit card required for initial browsing</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;