import React from 'react';
import { FaCode, FaMobile, FaGamepad, FaPaintBrush } from 'react-icons/fa';
import { BsLightbulb } from 'react-icons/bs';


const About = () => {
  const features = [
    {
      icon: <FaCode className="text-4xl text-blue-500" />,
      title: "Web Development",
      description: "Master modern web technologies from HTML to React and Node.js"
    },
    {
      icon: <FaMobile className="text-4xl text-green-500" />,
      title: "Mobile App Development",
      description: "Create stunning mobile applications for iOS and Android"
    },
    {
      icon: <FaGamepad className="text-4xl text-purple-500" />,
      title: "Game Development",
      description: "Build engaging games using Unity, Unreal Engine, and more"
    },
    {
      icon: <FaPaintBrush className="text-4xl text-red-500" />,
      title: "Graphic Design",
      description: "Design beautiful graphics with industry-standard tools"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">Learnify</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your gateway to mastering digital skills. We offer comprehensive courses
          taught by industry experts to help you achieve your career goals.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <BsLightbulb className="text-5xl text-yellow-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Mission
        </h2>
        <p className="text-xl text-gray-600">
          At Learnify, we believe in making quality education accessible to everyone.
          Our platform combines cutting-edge curriculum with hands-on projects to
          ensure you're ready for real-world challenges.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "10K+", label: "Active Students" },
            { number: "100+", label: "Expert Instructors" },
            { number: "500+", label: "Course Materials" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-blue-600">{stat.number}</p>
              <p className="mt-2 text-xl text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
