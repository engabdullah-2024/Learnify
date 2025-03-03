import React from 'react';
import { FaCode, FaMobile, FaGamepad, FaDatabase, FaCalendar, FaUser } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Web Development",
      excerpt: "Learn the fundamentals of HTML, CSS, and JavaScript to kickstart your web development journey.",
      author: "Sarah Johnson",
      date: "June 15, 2023",
      icon: <FaCode className="text-blue-500 text-4xl" />,
      category: "Web Development"
    },
    {
      id: 2,
      title: "Mobile App Development Trends in 2023",
      excerpt: "Explore the latest trends in mobile app development including React Native and Flutter.",
      author: "Mike Chen",
      date: "June 12, 2023",
      icon: <FaMobile className="text-green-500 text-4xl" />,
      category: "Mobile Development"
    },
    {
      id: 3,
      title: "Game Development Fundamentals",
      excerpt: "Start your game development journey with Unity and learn core concepts of game design.",
      author: "Alex Turner",
      date: "June 10, 2023",
      icon: <FaGamepad className="text-purple-500 text-4xl" />,
      category: "Game Development"
    },
    {
      id: 4,
      title: "Data Science and Machine Learning",
      excerpt: "Discover the power of data analysis and machine learning algorithms.",
      author: "Emily Davis",
      date: "June 8, 2023",
      icon: <FaDatabase className="text-red-500 text-4xl" />,
      category: "Data Science"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learnify Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends in technology and education through our expert articles
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  {post.icon}
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <FaCalendar className="mr-2" />
                    {post.date}
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-blue-600 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-blue-100 mb-6">
            Get the latest updates on new courses and educational content
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
