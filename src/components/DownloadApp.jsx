import React from 'react';
import { FaApple, FaGooglePlay, FaCheckCircle } from 'react-icons/fa';
import { MdOutlineQrCodeScanner, MdPhonelinkRing } from 'react-icons/md';

const AppDownload = () => {
  const features = [
    "Real-time outbid notifications",
    "Exclusive early-access listings",
    "Secure one-tap mobile bidding",
    "HD 360° vehicle walkarounds"
  ];

  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950 border border-slate-800 rounded-[3rem] overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center">
            
            {/* Left Content: Text & Badges */}
            <div className="w-full lg:w-1/2 p-10 md:p-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#769A7F] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/40">
                  <MdPhonelinkRing className="text-white text-2xl" />
                </div>
                <span className="text-[#769A7F] font-bold uppercase tracking-[0.3em] text-xs">The Experience</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Take the Auction House <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#769A7F] to-[#5a7c63]">Wherever You Go.</span>
              </h2>

              <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                Download the <span className="text-white font-bold italic">Bid Baj</span> app to get instant alerts, watch live auctions, and place bids from the palm of your hand.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-300">
                    <FaCheckCircle className="text-[#769A7F] flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <button className="flex items-center gap-3 bg-white text-slate-950 px-6 py-3 rounded-2xl font-bold hover:bg-slate-200 transition-all transform active:scale-95 shadow-xl">
                  <FaApple size={24} />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Download on</span>
                    <span className="text-lg">App Store</span>
                  </div>
                </button>

                <button className="flex items-center gap-3 bg-slate-800 text-white px-6 py-3 rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 transition-all transform active:scale-95">
                  <FaGooglePlay size={20} className="text-blue-400" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Get it on</span>
                    <span className="text-lg">Google Play</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content: Visual Mockup & QR */}
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end p-10 lg:p-0">
              <div className="relative z-10 lg:translate-y-16">
                {/* iPhone Mockup (Main Image) */}
                <img 
                  src="https://images.unsplash.com/photo-1556656793-062ff987825d?auto=format&fit=crop&q=80&w=600" 
                  alt="Bid Baj App" 
                  className="w-[280px] md:w-[320px] rounded-[3rem] border-[8px] border-slate-800 shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700"
                />
                
                {/* Floating QR Code Card */}
                <div className="absolute -bottom-6 -left-12 md:-left-20 bg-slate-900 border border-slate-800 p-6 rounded-[2rem] shadow-2xl backdrop-blur-xl hidden md:block group hover:border-[#769A7F] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl">
                      {/* Using a placeholder QR icon for visual representation */}
                      <MdOutlineQrCodeScanner size={40} className="text-slate-900" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Scan to Download</p>
                      <p className="text-slate-500 text-xs">Available for iOS & Android</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accent Decorative Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 h-50 bg-[#769A7F] blur-[90px] rounded-full z-0" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;

//bg-gradient-to-r from-[#769A7F] to-[#5a7c63]