import { Link } from 'react-router-dom';
import React from 'react';
import Course from './Course';
import Testimonials from '../pages/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center text-white space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
            Welcome to Learnify
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl opacity-90">
            Transform your learning journey with our modern learning management system. 
            Engage, learn, and grow with interactive courses.
          </p>
          
          <div className="flex gap-4 mt-8">
            <Link 
              to="/course" 
              className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Explore Courses
            </Link>
            <Link 
              to="/signup" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center gap-12 mt-24">
          <div className="text-center text-white">
            <div className="text-4xl font-bold">10K+</div>
            <div className="opacity-80">Active Students</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold">500+</div>
            <div className="opacity-80">Courses</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold">50+</div>
            <div className="opacity-80">Expert Instructors</div>
          </div>
        </div>
      </div>
      <Course/>
      <Testimonials/>
    </div>
  );
};

export default Home;
