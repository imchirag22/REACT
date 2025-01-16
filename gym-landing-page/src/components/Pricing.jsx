import React from 'react';

function Pricing() {
  return (
    <section id="pricing" className="bg-[#5f7252] py-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="px-8 py-3 rounded-full border-2 border-[#FFFCF2] mb-20 w-fit">
          <h1 className="text-4xl font-bold text-[#FFFCF2]">Membership Plans</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          
          
          <div className="bg-[#FFFCF2] p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Month to Month</h2>
            <p className="text-2xl font-bold text-gray-800 mb-4">Rs165/mo</p>
            <ul className="text-gray-600 text-sm mb-6">
              <li className="mb-2 flex items-center justify-center gap-2">
                All classes <span className="text-green-500">✓</span>
              </li>
              <li className="mb-2 flex items-center justify-center gap-2">
                All member events <span className="text-green-500">✓</span>
              </li>
              <li className="mb-2 flex items-center justify-center gap-2">
                Full gym access <span className="text-green-500">✓</span>
              </li>
              <li className="mb-2 flex items-center justify-center gap-2">
                Monthly Payment <span className="text-green-500">✓</span>
              </li>
            </ul>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300 text-sm">
              Start 7 day free trial
            </button>
          </div>

         
          <div className="bg-[#FFFCF2] p-6 rounded-lg shadow-xl w-80 text-center relative transform scale-105 z-10 border-2 border-green-500/20">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              Recommended
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6 Month Plan</h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              <p className="text-3xl font-bold text-gray-800">Rs135/mo</p>
              <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded">18% OFF</span>
            </div>
            <ul className="text-gray-600 mb-6">
              <li className="mb-2 flex items-center justify-center gap-2">
                All classes <span className="text-green-500">✓</span>
              </li>
              <li className="mb-2 flex items-center justify-center gap-2">
                All member events <span className="text-green-500">✓</span>
              </li>
              <li className="mb-2 flex items-center justify-center gap-2">
                Full gym access <span className="text-green-500">✓</span>
              </li>
              <li className="mb-2 flex items-center justify-center gap-2">
                6-month commitment <span className="text-green-500">✓</span>
              </li>
            </ul>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
              Choose Plan
            </button>
          </div>

          
          <div className="bg-[#FFFCF2] p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Yearly Plan</h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              <p className="text-3xl font-bold text-gray-800">Rs119/mo</p>
              <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded">28% OFF</span>
            </div>
            <ul className="text-gray-600 mb-6">
              <li className="mb-2 flex items-center justify-center gap-2">
                All classes <span className="text-green-500">✓</span>
              </li>
              <li className="mb-2 flex items-center justify-center gap-2">
                All member events <span className="text-green-500">✓</span>
              </li>
              <li className="mb-2 flex items-center justify-center gap-2">
                Full gym access <span className="text-green-500">✓</span>
              </li>
              <li className="mb-2 flex items-center justify-center gap-2">
                12-month commitment <span className="text-green-500">✓</span>
              </li>
            </ul>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
              Choose Plan
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;