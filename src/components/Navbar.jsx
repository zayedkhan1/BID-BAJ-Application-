
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from "../context/UserContext";

// React Icons
import { 
  HiMenuAlt3, 
  HiX, 
  HiOutlineHome, 
  HiOutlineLightningBolt, 
  HiOutlineCube, 
  HiOutlineCurrencyDollar, 
  HiOutlineSupport 
} from 'react-icons/hi';
import { BiUserCircle } from 'react-icons/bi';
import navlogo from '../assets/images/navbar-logo.jpg'
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';

const Navbar = () => {
    const { user } = useUser();

  const [isOpen, setIsOpen] = useState(false);

  // Define links with their respective icons
  const navLinks = [
    { name: 'Home', href: '/', icon: <HiOutlineHome /> },
    { name: 'Deals', href: '#deals', icon: <HiOutlineLightningBolt /> },
    { name: 'Public Deals', href: '#howitworks', icon: <HiOutlineCube /> },
    // { name: 'Done', href: '#pricing', icon: <HiOutlineCurrencyDollar /> }, //ata profile er under e hobe
    { name: 'Contact Us', href: '#support', icon: <HiOutlineSupport /> },
    { name: 'Admin Panel', href: '/admin', icon: <HiOutlineSupport /> },
  ];

  return (
    <nav className="fixed top-0 w-full z-50  bg-gray-900/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-9xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Brand Logo */}
       <Link to="/">
        <div className="flex items-center gap-2 group cursor-pointer">
          {/* <div className="h-9 w-9 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-indigo-500/20">
            <div className="h-4 w-4 bg-white rounded-full"></div>
          </div> */}
          {/* <span className="text-xl font-bold tracking-tighter text-white">VELOCITY.</span> */}
          <img className="h-18 w-25 " src={navlogo} alt="BID BAJ" />
        </div>
       </Link>

        {/* Desktop Links with Icons */}
        <div className="hidden lg:flex space-x-1 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 group"
            >
              <span className="text-lg group-hover:text-indigo-400 transition-colors">
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to='/login' className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Login
          </Link>
          <buttoon >
            {/* <BiUserCircle className="text-lg" />
            <span>profile</span> */}
            <ProfileDropdown></ProfileDropdown>
          </buttoon>

       {/* ------------------- */}

      {/* <Link
        to="/profile"
      >
        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt="profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
        ) : (
          <BiUserCircle className="text-2xl w-10 h-10 text-white bg-blue-800 rounded-full" />
          
        )}

        <span className="text-white text-sm font-semibold">
          {user.name || "Get Started"}
        </span>
      </Link> */}



       {/* ------------------- */}


        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B0F1A] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-lg font-medium text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <span className="text-2xl text-indigo-500">{link.icon}</span>
                  {link.name}
                </a>
              ))}
              <div className="pt-6 grid grid-cols-2 gap-4">
                <button className="py-3 text-gray-400 font-bold border border-white/10 rounded-xl">Login</button>
                <button className="py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg">Sign Up</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;





















