import React, { useEffect, useState } from 'react';
import { 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiClock, 
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle
} from 'react-icons/fi';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram 
} from 'react-icons/fa';
import Loading from '../components/Loading';

const ContactUs = () => {

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });
  
  //const [isSubmitted, setIsSubmitted] = useState(false);
    const [contact, setContact] = useState(null);

  const [loading, setLoading] = useState(true);

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
    
  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setIsSubmitted(true);
  //     setFormData({ name: '', email: '', subject: '', message: '' });
      
  //     // Reset success message after 5 seconds
  //     setTimeout(() => setIsSubmitted(false), 5000);
  //   }, 1500);
  // };



  useEffect(() => {
    const getContact = async () => {
      try {
        const res = await fetch("/api/api/contact");
        const data = await res.json();

        setContact(data); // depends on your API structure
      } catch (error) {
        console.error("Error fetching contact:", error);
      } finally {
        setLoading(false);
      }
    };

    getContact();
  }, []);
  
console.log(contact);

  // const contactInfo = [
  //   {
  //     icon: <FiPhone className="w-6 h-6" />,
  //     title: "Phone",
  //     details: contact?.phone,
  //     action: "Call us now"
  //   },
  //   {
  //     icon: <FiMail className="w-6 h-6" />,
  //     title: "Email",
  //     details: contact?.email,
  //     action: "Email us"
  //   },
  //   {
  //     icon: <FiMapPin className="w-6 h-6" />,
  //     title: "Office",
  //     details: contact?.office,
  //     action: "Get directions"
  //   },
  //   {
  //     icon: <FiClock className="w-6 h-6" />,
  //     title: "Working Hours",
  //     details: contact?.working_hours,
  //     action: "24/7 Support"
  //   }
  // ];

  const contactInfo = [
  {
    icon: <FiPhone className="w-6 h-6" />,
    title: "Phone",
    details: contact?.phone ? [contact.phone] : [],
    action: "Call us now"
  },
  {
    icon: <FiMail className="w-6 h-6" />,
    title: "Email",
    details: contact?.email ? [contact.email] : [],
    action: "Email us"
  },
  {
    icon: <FiMapPin className="w-6 h-6" />,
    title: "Office",
    details: contact?.office ? [contact.office] : [],
    action: "Get directions"
  },
  {
    icon: <FiClock className="w-6 h-6" />,
    title: "Working Hours",
    details: contact?.working_hours ? [contact.working_hours] : [],
    action: "24 hrs Support"
  }
];

    if (loading) return <Loading />;


  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#769A7F] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#769A7F] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="mt-6 text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Get in <span className="text-[#769A7F]">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about BidBaj? We're here to help! Reach out to us through any of the channels below.
          </p>
          <div className="w-24 h-1 bg-[#769A7F] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#769A7F] transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#769A7F]/0 to-[#769A7F]/0 group-hover:from-[#769A7F]/10 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="text-[#769A7F] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-400 text-sm">{detail}</p>
                ))}
                <button className="mt-4 text-[#769A7F] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  {info.action}
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="">
          {/* Form */}
          {/* <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            {isSubmitted && (
              <div className="mb-6 bg-[#769A7F]/20 border border-[#769A7F] rounded-lg p-4 flex items-center gap-3">
                <FiCheckCircle className="text-[#769A7F] w-5 h-5" />
                <span className="text-gray-200">Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#769A7F] focus:ring-1 focus:ring-[#769A7F] transition-all"
                  />
                </div>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#769A7F] focus:ring-1 focus:ring-[#769A7F] transition-all"
                  />
                </div>
              </div>
              
              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#769A7F] focus:ring-1 focus:ring-[#769A7F] transition-all"
                />
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#769A7F] focus:ring-1 focus:ring-[#769A7F] transition-all resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#769A7F] hover:bg-[#5a7b62] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div> */}

          {/* why choose us div */}
          
            {/* <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Why Choose BidBaj?</h3>
              <ul className="space-y-4">
                {[
                  '24/7 Customer Support',
                  'Fast Response Time',
                  'Expert Team Members',
                  'Secure & Reliable Platform'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-400">
                    <div className="w-2 h-2 bg-[#769A7F] rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div> */}

          {/* Map/Additional Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <p className="text-gray-400 mb-8">
                Follow us on social media for the latest updates, news, and exclusive offers from BidBaj.
              </p>
              
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebookF />, color: 'hover:bg-blue-600' },
                  { icon: <FaTwitter />, color: 'hover:bg-blue-400' },
                  { icon: <FaLinkedinIn />, color: 'hover:bg-blue-700' },
                  { icon: <FaInstagram />, color: 'hover:bg-pink-600' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[#769A7F] transition-all duration-300 transform hover:scale-110 hover:rotate-6`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;