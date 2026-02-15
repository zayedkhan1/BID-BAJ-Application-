import React from 'react';
import { FaGavel, FaGasPump, FaRoad } from 'react-icons/fa6';
import { MdSettingsInputComponent, MdTimer } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';

const AvailableCars = () => {
  const cars = [
    {
      id: 1,
      name: "Porsche 911 GT3 RS",
      year: 2023,
      price: "$185,000",
      timeLeft: "02h 45m",
      mileage: "1,200 mi",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
      bids: 14
    },
    {
      id: 2,
      name: "Mercedes-AMG G63",
      year: 2022,
      price: "$210,000",
      timeLeft: "05h 12m",
      mileage: "4,500 mi",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800",
      bids: 22
    },
    {
      id: 3,
      name: "Audi R8 V10 Performance",
      year: 2021,
      price: "$158,000",
      timeLeft: "01h 20m",
      mileage: "8,900 mi",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bids: 9
    },
    {
      id: 4,
      name: "Porsche 911 GT3 RS",
      year: 2023,
      price: "$185,000",
      timeLeft: "02h 45m",
      mileage: "1,200 mi",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bids: 14
    },
    {
      id: 5,
      name: "Mercedes-AMG G63",
      year: 2022,
      price: "$210,000",
      timeLeft: "05h 12m",
      mileage: "4,500 mi",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800",
      bids: 22
    },
    {
      id: 6,
      name: "Audi R8 V10 Performance",
      year: 2021,
      price: "$158,000",
      timeLeft: "01h 20m",
      mileage: "8,900 mi",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bids: 9
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[#769A7F] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Live Auctions
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Available <span className="text-transparent bg-clip-text bg-gradient-to-r bg-gradient-to-r from-[#769A7F] to-[#5a7c63]">Inventory</span>
            </h3>
          </div>
          <button className="text-slate-300 font-semibold border-b border-blue-500/50 pb-1 hover:text-blue-400 hover:border-blue-400 transition-all">
            View All 450+ Listings
          </button>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cars.map((car) => (
            <div key={car.id} className="group bg-slate-900/40 rounded-[2.5rem] overflow-hidden border border-slate-800 transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-2">
              
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Status Badges */}
                <div className="absolute top-5 left-5 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-2xl border border-white/10">
                  <MdTimer className="text-yellow-500 text-lg animate-pulse" />
                  <span className="text-slate-100 uppercase tracking-wider">{car.timeLeft} LEFT</span>
                </div>
                
                <button className="absolute top-5 right-5 p-3 bg-slate-900/80 backdrop-blur-md rounded-2xl hover:bg-blue-600 text-white transition-all shadow-2xl border border-white/10">
                  <IoMdHeartEmpty size={20} />
                </button>

                <div className="absolute bottom-5 left-5 bg-[#769A7F] backdrop-blur-sm text-white px-4 py-1.5 rounded-xl text-xs font-extrabold tracking-wide uppercase">
                  {car.bids} Bids Placed
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[#769A7F] text-xs font-bold uppercase tracking-widest mb-1.5">{car.year} Model</p>
                    <h4 className="text-2xl font-bold text-white group-hover:text-[#769A7F] transition-colors">
                      {car.name}
                    </h4>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Current Bid</p>
                    <p className="text-2xl font-black text-white leading-none tracking-tight">{car.price}</p>
                  </div>
                </div>

                {/* Technical Specs Grid */}
                <div className="grid grid-cols-3 gap-2 py-6 border-y border-slate-800/60 mb-8">
                  <div className="flex flex-col items-center gap-2 border-r border-slate-800/60">
                    <FaRoad className="text-slate-500 text-lg" />
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-tighter">{car.mileage}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 border-r border-slate-800/60">
                    <FaGasPump className="text-slate-500 text-lg" />
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-tighter">{car.fuel}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <MdSettingsInputComponent className="text-slate-500 text-xl" />
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-tighter">Auto</span>
                  </div>
                </div>

                {/* Bidding Button */}
                <button className="w-full text-white py-4 rounded-2xl bg-gradient-to-r from-[#769A7F] to-[#5a7c63] font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-blue-900/20 active:scale-[0.98]">
                  <FaGavel className="text-white/80 group-hover:rotate-12 transition-transform" />
                  <span className="tracking-wide uppercase text-sm">Place A Bid</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableCars;