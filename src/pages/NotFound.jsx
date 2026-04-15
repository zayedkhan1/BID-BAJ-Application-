




import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B0E14] via-[#111827] to-[#0B0E14] px-4">
      {/* Background racing grid lines */}
      {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute top-1/3 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div> */}

      {/* Glow orbs */}
      {/* <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-amber-500 rounded-full mix-blend-screen filter blur-[100px] opacity-15 animate-pulse" />
      <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-red-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse delay-700" /> */}
      {/* New glow orb using #769A7F */}
      {/* <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#769A7F] rounded-full mix-blend-screen filter blur-[110px] opacity-20 animate-pulse delay-1000" /> */}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Decorative badge */}  
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
          {/* <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
          </span> */}
          {/* <span className="text-xs font-mono tracking-wider text-amber-300/90 uppercase">Auction alert</span> */}
        </div>

        {/* Broken car illustration (SVG) */}
        <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 mb-6">
          <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
            {/* Car body (broken) */}
            <rect x="30" y="70" width="140" height="40" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
            <rect x="40" y="60" width="120" height="15" rx="4" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
            {/* Crack / broken windshield */}
            <path d="M80 60 L95 75 L110 62 L120 78" stroke="#EF4444" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M100 55 L105 68" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            {/* Missing wheel (left) */}
            <circle cx="55" cy="115" r="18" fill="#1E293B" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />
            <text x="48" y="120" fontSize="10" fill="#EF4444" fontWeight="bold" className="font-mono">MISSING</text>
            {/* Right wheel (ok) */}
            <circle cx="145" cy="115" r="18" fill="#1E293B" stroke="#769A7F " strokeWidth="2.5" />
            <circle cx="145" cy="115" r="8" fill="#769A7F" />
            {/* Smoke / steam */}
            <path d="M170 65 Q180 50 175 35" stroke="#94A3B8" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
            <path d="M178 55 Q190 40 185 25" stroke="#94A3B8" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />
            {/* Wrench icon over car */}
            <g transform="translate(130, 30)">
              <rect x="0" y="8" width="20" height="4" rx="2" fill="#EF4444" />
              <circle cx="22" cy="10" r="6" stroke="#EF4444" strokeWidth="2.5" fill="none" />
            </g>
            {/* Exclamation mark */}
            <text x="10" y="40" fontSize="24" fill="#EF4444" fontWeight="bold">⚠️</text>
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-red-400 via-red-500 to-red-500 bg-clip-text text-transparent">
       404 !!<br></br>   PAGE NOT FOUND 
        </h1>

        {/* Subtext */}
        {/* <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-md mx-auto">
          Looks like this ride has been totalled — or it never existed in our auction house.
        </p> */}
        {/* <p className="mt-2 text-gray-400 text-sm">
          Error 404 · The page you're looking for crashed and burned.
        </p> */}

        {/* Action buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#769A7F]  text-white font-semibold transition-all duration-300 hover:shadow-[0_0_25px_-5px_#F59E0B] hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Back to Home</span>
          </Link>
          {/* <Link
            to="/auctions"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span>Browse Live Auctions</span>
          </Link> */}
        </div>

        {/* Brand signature */}
        {/* <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm font-mono">
          <span className="w-6 h-px bg-gray-600" />
          <span>BidBaj · Where cars find new homes</span>
          <span className="w-6 h-px bg-gray-600" />
        </div> */}
      </div>

      {/* Bottom decorative racing stripe */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" /> */}
    </div>
  );
};

export default NotFound;