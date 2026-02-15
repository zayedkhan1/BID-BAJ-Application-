
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaApple, FaGooglePlay } from 'react-icons/fa';
import { GiCarKey } from 'react-icons/gi';
import footerLogo from '../assets/images/navbar-logo.jpg'

const Footer = () => {
  const footerLinks = {
    'Buying': ['Browse Auctions', 'Live Bidding', 'Buyer Protection', 'Financing'],
    'Selling': ['Sell Your Car', 'Seller Fees', 'Vehicle Inspection', 'Shipping'],
    // 'Company': ['About Us', 'Careers', 'Press', 'Contact'],
    'Support': ['Help Center', 'FAQ', 'Terms of Service', 'Privacy Policy']
  };

  return (
    <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center space-x-3 mb-6"
            >
          
              <img
              className='h-20 w-20'  
              src={footerLogo} alt="Bid Baj" />
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md">
              The premier platform for luxury and classic car auctions. Bid on exclusive vehicles from around the world.
            </p>
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

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-[#769A7F] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { icon: FaEnvelope, text: 'support@autobid.com' },
            { icon: FaPhone, text: '+1 (555) 123-4567' },
            { icon: FaMapMarkerAlt, text: '123 Auction Ave, Motor City, MC 12345' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <item.icon className="text-[#769A7F]" />
              <span className="text-gray-400">{item.text}</span>
            </motion.div>
          ))}
           <div className="flex space-x-4">
              {[FaFacebook,  FaInstagram, FaLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#769A7F] transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}

              
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="  mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BID BAJ. All rights reserved.</p>
        
         <div>
          
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;