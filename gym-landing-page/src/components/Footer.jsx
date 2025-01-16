import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
        
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-500 mb-6">Get In Touch</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                ></textarea>
              </div>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>

         
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-500 mb-6">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-green-500 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-green-500 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-green-500 transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-green-500 transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-500 mb-6">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>📍</span> 123 Fitness Street, City
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span> +1 234 567 890
                </li>
                <li className="flex items-center gap-2">
                  <span>📧</span> info@powergym.com
                </li>
              </ul>
              <div className="mt-6 space-x-4">
                <a href="#" className="text-2xl hover:text-green-500 transition-colors">📱</a>
                <a href="#" className="text-2xl hover:text-green-500 transition-colors">👤</a>
                <a href="#" className="text-2xl hover:text-green-500 transition-colors">📸</a>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 PowerGym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;