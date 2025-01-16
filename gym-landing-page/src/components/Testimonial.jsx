import React, { useState } from 'react';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.png';
import avatar5 from '../assets/avatar5.png';
import avatar6 from '../assets/avatar6.png';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Working Professional",
    testimonial: "I joined this gym six months ago, and I've lost 20 pounds! The trainers are amazing, and the group classes keep me motivated. I've never felt better!",
    avatar: avatar1
  },
  {
    name: "Mike Thompson",
    role: "Fitness Enthusiast",
    testimonial: "The personalized training program helped me gain 10 pounds of muscle in just three months. The equipment here is top-notch, and the trainers really know their stuff!",
    avatar: avatar2
  },
  {
    name: "Emily Carter",
    role: "College Student",
    testimonial: "This gym has been a lifesaver for my mental health. The yoga and meditation classes help me manage stress, and the community is so welcoming.",
    avatar: avatar3
  },
  {
    name: "David and Lisa Martinez",
    role: "Parents of Two",
    testimonial: "We love bringing our kids to the family classes. It's a great way to stay active together, and the staff is always so friendly and helpful.",
    avatar: avatar4
  },
  {
    name: "Alex Brown",
    role: "Athlete",
    testimonial: "The trainers here are incredible! They pushed me to my limits and helped me achieve my fitness goals faster than I ever thought possible.",
    avatar: avatar5
  },
  {
    name: "Priya Sharma",
    role: "Freelancer",
    testimonial: "I love the flexibility of the membership plans. I can choose what works best for my schedule, and the online booking system makes it so easy to reserve classes.",
    avatar: avatar6
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getPrevIndex = () => currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  const getNextIndex = () => currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;

  return (
    <section id="testimonials" className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-500">What Our Members Say</h2>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            
            <div className="hidden md:block w-64 opacity-40 scale-75 transition-all duration-300">
              <div className="bg-gray-900 rounded-xl p-6 shadow-md border border-green-500/20">
                <div className="flex flex-col items-center">
                  <img 
                    loading="lazy"
                    src={testimonials[getPrevIndex()].avatar}
                    alt={testimonials[getPrevIndex()].name}
                    className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-green-500"
                  />
                  <p className="text-gray-400 text-sm text-center mb-4">
                    "{testimonials[getPrevIndex()].testimonial}"
                  </p>
                  <h3 className="font-semibold text-green-500">{testimonials[getPrevIndex()].name}</h3>
                  <p className="text-gray-500 text-sm">{testimonials[getPrevIndex()].role}</p>
                </div>
              </div>
            </div>

            {/* Current Card (Main View) */}
            <div className="w-96 z-10 transform transition-all duration-300">
              <div className="bg-gray-900 rounded-xl p-8 shadow-xl border-2 border-green-500">
                <div className="flex flex-col items-center">
                  <img 
                    loading="lazy"
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full mb-6 object-cover border-4 border-green-500"
                  />
                  <p className="text-white text-lg text-center mb-6">
                    "{testimonials[currentIndex].testimonial}"
                  </p>
                  <h3 className="font-semibold text-green-500 text-xl">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-64 opacity-40 scale-75 transition-all duration-300">
              <div className="bg-gray-900 rounded-xl p-6 shadow-md border border-green-500/20">
                <div className="flex flex-col items-center">
                  <img 
                    loading="lazy"
                    src={testimonials[getNextIndex()].avatar}
                    alt={testimonials[getNextIndex()].name}
                    className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-green-500"
                  />
                  <p className="text-gray-400 text-sm text-center mb-4">
                    "{testimonials[getNextIndex()].testimonial}"
                  </p>
                  <h3 className="font-semibold text-green-500">{testimonials[getNextIndex()].name}</h3>
                  <p className="text-gray-500 text-sm">{testimonials[getNextIndex()].role}</p>
                </div>
              </div>
            </div>
          </div>

         
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all z-10"
          >
            ←
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all z-10"
          >
            →
          </button>

          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;