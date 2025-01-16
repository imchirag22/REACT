import React from 'react';

const serviceData = [
  {
    title: "Personal Training",
    description: "Get customized workout plans and one-on-one guidance from expert trainers.",
    icon: "💪"
  },
  {
    title: "Group Classes",
    description: "Join energetic group sessions with motivating instructors and like-minded people.",
    icon: "👥"
  },
  {
    title: "Nutrition Planning",
    description: "Receive personalized meal plans and dietary guidance for optimal results.",
    icon: "🥗"
  },
  {
    title: "Strength Training",
    description: "Build muscle and increase strength with our state-of-the-art equipment.",
    icon: "🏋️‍♂️"
  },
  {
    title: "Cardio Sessions",
    description: "Improve endurance and burn calories with varied cardio programs.",
    icon: "🏃‍♂️"
  },
  {
    title: "Recovery & Spa",
    description: "Relax and recover with our premium spa and wellness services.",
    icon: "🧘‍♀️"
  }
];

function Services() {
  return (
    <section id="services" className="py-20 relative bg-gradient-to-b from-black via-gray-900 to-black">
     
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-4">
          Our Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Transform your fitness journey with our comprehensive range of services
        </p>
      </div>

     
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800
                        transform transition-all duration-300 hover:scale-105 hover:border-green-500
                        hover:shadow-lg hover:shadow-green-500/20"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;