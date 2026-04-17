import React from 'react';
import { FaGavel, FaGasPump, FaRoad } from 'react-icons/fa6';
import { MdSettingsInputComponent, MdTimer } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaCar, FaMoneyBillWave } from 'react-icons/fa';


const AvailableCars = ({data}) => {

  //   {
  //     id: 1,
  //     name: "Porsche 911 GT3 RS",
  //     year: 2023,
  //     price: "$185,000",
  //     timeLeft: "02h 45m",
  //     mileage: "1,200 mi",
  //     fuel: "Petrol",
  //     transmission: "Automatic",
  //     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
  //     bids: 14
  //   },
  //   {
  //     id: 2,
  //     name: "Mercedes-AMG G63",
  //     year: 2022,
  //     price: "$210,000",
  //     timeLeft: "05h 12m",
  //     mileage: "4,500 mi",
  //     fuel: "Petrol",
  //     transmission: "Automatic",
  //     image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800",
  //     bids: 22
  //   },
  //   {
  //     id: 3,
  //     name: "Audi R8 V10 Performance",
  //     year: 2021,
  //     price: "$158,000",
  //     timeLeft: "01h 20m",
  //     mileage: "8,900 mi",
  //     fuel: "Petrol",
  //     transmission: "Automatic",
  //     image: "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     bids: 9
  //   },
  //   {
  //     id: 4,
  //     name: "Porsche 911 GT3 RS",
  //     year: 2023,
  //     price: "$185,000",
  //     timeLeft: "02h 45m",
  //     mileage: "1,200 mi",
  //     fuel: "Petrol",
  //     transmission: "Automatic",
  //     image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     bids: 14
  //   },
  //   {
  //     id: 5,
  //     name: "Mercedes-AMG G63",
  //     year: 2022,
  //     price: "$210,000",
  //     timeLeft: "05h 12m",
  //     mileage: "4,500 mi",
  //     fuel: "Petrol",
  //     transmission: "Automatic",
  //     image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800",
  //     bids: 22
  //   },
  //   {
  //     id: 6,
  //     name: "Audi R8 V10 Performance",
  //     year: 2021,
  //     price: "$158,000",
  //     timeLeft: "01h 20m",
  //     mileage: "8,900 mi",
  //     fuel: "Petrol",
  //     transmission: "Automatic",
  //     image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     bids: 9
  //   }
  // ];

  console.log("data at available cars", data);
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[#769A7F] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Previous Auctions
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              SOLD ON<span className="text-transparent bg-clip-text bg-linear-to-r  from-[#769A7F] to-[#5a7c63]"> BIDBAJ</span>
            </h3>
          </div>
        
        </div>

        {/* Car Grid */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {data?.vehicles?.map((vehicle) => (
    <div
      key={vehicle.id}
      className="group relative bg-linear-to-br from-slate-900/90 via-slate-800/90 to-slate-900/95 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 ease-out hover:border-[#769A7F]/80 hover:shadow-2xl hover:-translate-y-2 hover:shadow-black/40"
    >
      {/* Shine effect overlay */}
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src="../../public/assets/image/dummy_car.png"
          alt={vehicle.model}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-105"
        />
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="p-6 pt-5 space-y-5">
        {/* Model & Price */}
        <div className="space-y-1 ">
          <h4 className="text-2xl font-semibold  mb-2 tracking-tight text-white group-hover:text-[#769A7F] transition-colors duration-300">
            { vehicle.model}
          </h4>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Sold Price
            </p>
            <p className="text-4xl font-black text-white leading-none tracking-tighter">
              ${vehicle.price?.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />

        {/* Mileage with refined icon pill */}
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/5">
            <FaRoad className="text-[#769A7F] text-sm" />
          </span>
          <span className="text-slate-300 text-sm font-medium tracking-wide">
            Mileage: {vehicle.milage} MI
          </span>
        </div>
      </div>

      {/* Premium ring glow on hover */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-inset ring-white/0 group-hover:ring-white/10 transition-all duration-500" />
    </div>
  ))}
</div>

        
      </div>
    </section>
  );
};

export default AvailableCars;