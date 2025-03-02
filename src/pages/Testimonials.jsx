import { useState, useEffect } from 'react';
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Development Student",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    course: "Web Development",
    content: "Learnify's web development course transformed my career. The hands-on projects and expert instruction made learning enjoyable and practical."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Game Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    course: "Game Development",
    content: "The game development program exceeded my expectations. I learned Unity from scratch and now I'm working on my own indie game!"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Digital Marketing Specialist",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    course: "Social Marketing",
    content: "Thanks to Learnify's social marketing course, I've mastered digital marketing strategies that have helped me grow my business significantly."
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "Mobile App Developer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    course: "Mobile App Development",
    content: "The mobile app development course was comprehensive and practical. I'm now confidently building cross-platform applications."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600">
            Discover how Learnify has helped students transform their careers
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-2xl">
                  <div className="flex items-center mb-8">
                    <img
                      className="h-14 w-14 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center">
                        <span className="text-purple-600 font-medium">
                          {testimonial.course}
                        </span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-gray-600">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentIndex === index ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
