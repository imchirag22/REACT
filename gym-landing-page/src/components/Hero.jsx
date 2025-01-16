import React from 'react';
import backgroundImage from '../assets/herobg.avif';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
     
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})` 
        }}
      />
      
     
      <div className="absolute inset-0 bg-black opacity-75" />

      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
       
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Transform Your Body
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Transform Your Life
        </h2>

       
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Join the ultimate fitness experience where we turn your goals into achievements. Start your fitness journey today.
        </p>

       
        <div className="flex space-x-4">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition duration-300">
            Start Your Journey
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1A1A1A] transition duration-300">
            Take a Tour
          </button>
        </div>

        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-lg">Active Members</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-lg">Expert Trainers</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-lg">Fitness Classes</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-lg">Gym Access</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;