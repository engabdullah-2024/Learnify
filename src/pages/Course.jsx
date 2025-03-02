import React, { useState } from 'react';

const Course = () => {
  const courses = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi66qkFS0iaXHJDK_o4QpDDfhPchmEfh7vGw&s",
      name: "Complete Web Development Bootcamp",
      description: "Master HTML, CSS, JavaScript, React and Node.js through practical projects. Learn modern web development practices, responsive design, and build real-world applications. This comprehensive course covers both front-end and back-end development, preparing you for a career in web development.",
      instructor: "Sarah Johnson",
      price: 99.99,
      discount: 20,
      rating: 4.8,
      duration: "12 weeks",
      lectures: 120,
      level: "Beginner to Advanced",
      prerequisites: "Basic computer knowledge",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7fJWCsHehELVDodP1RaKU-j2H2jzmcQq2Q&s",
      name: "Mobile App Development Masterclass",
      description: "Learn to build iOS and Android apps using React Native. Create cross-platform mobile applications with a single codebase. Master mobile UI/UX principles and deploy your apps to app stores. Includes hands-on projects and real-world examples.",
      instructor: "Mike Chen",
      price: 89.99,
      discount: 15,
      rating: 4.7,
      duration: "10 weeks",
      lectures: 90,
      level: "Intermediate",
      prerequisites: "JavaScript basics",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyyQWRwWSjBMxH0asDjihXND-Q9AzJWD8oQ&s",
      name: "Game Development Fundamentals",
      description: "Create engaging games using Unity and C#. Learn game physics, animation, and user interaction. Build multiple games from scratch and understand core gaming concepts. Perfect for aspiring game developers.",
      instructor: "Alex Turner",
      price: 79.99,
      discount: 10,
      rating: 4.9,
      duration: "14 weeks",
      lectures: 150,
      level: "Beginner",
      prerequisites: "None",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP-mJw7Ef6Om4KovJBqLAo04sv2VtOROUpsg&s",
      name: "Graphic Design Essential",
      description: "Master Adobe Creative Suite and design principles. Learn typography, color theory, and layout design. Create professional logos, marketing materials, and digital artwork. Includes practical assignments and portfolio projects.",
      instructor: "Emma Davis",
      price: 69.99,
      discount: 25,
      rating: 4.6,
      duration: "8 weeks",
      lectures: 80,
      level: "All Levels",
      prerequisites: "None",
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMT_i0Y5HP27CpsxqnUADja13OZA1pKjmRg&s",
      name: "Forex Trading Fundamentals",
      description: "Learn currency trading strategies and market analysis. Master technical and fundamental analysis, risk management, and trading psychology. Practice with demo accounts and real-market scenarios.",
      instructor: "Robert Williams",
      price: 129.99,
      discount: 30,
      rating: 4.5,
      duration: "6 weeks",
      lectures: 60,
      level: "Beginner to Intermediate",
      prerequisites: "Basic financial knowledge",
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS30HtH0JmE9-bUI0YqW8uHSrkpm6Lf5NUIFA&s",
      name: "Digital Marketing Mastery",
      description: "Master social media marketing and content strategy. Learn SEO, email marketing, and paid advertising. Create effective marketing campaigns and measure their success. Includes case studies and practical exercises.",
      instructor: "Lisa Anderson",
      price: 74.99,
      discount: 20,
      rating: 4.7,
      duration: "9 weeks",
      lectures: 85,
      level: "All Levels",
      prerequisites: "None",
    },
    {
      id: 7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4fp6jkxpqWJUxMcgHXM824FwdS7aW8t9_zQ&s",
      name: "Computer Basics for Beginners",
      description: "Essential computer skills for the modern workplace. Learn Microsoft Office, email management, and basic troubleshooting. Perfect for beginners wanting to improve their computer literacy.",
      instructor: "David Brown",
      price: 49.99,
      discount: 40,
      rating: 4.8,
      duration: "4 weeks",
      lectures: 40,
      level: "Beginner",
      prerequisites: "None",
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        Explore Our Courses
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
            onClick={() => setSelectedCourse(course)}
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {course.name}
              </h3>
              <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                {course.description}
              </p>
              <div className="flex items-center mb-4">
                <img
                  src="/images/instructor-avatar.jpg"
                  alt={course.instructor}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="text-gray-700">{course.instructor}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-gray-700">{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 line-through text-sm">
                    ${course.price}
                  </span>
                  <span className="ml-2 text-2xl font-bold text-blue-600">
                    ${(course.price * (1 - course.discount / 100)).toFixed(2)}
                  </span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedCourse.image}
                alt={selectedCourse.name}
                className="w-full h-72 object-cover"
              />
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedCourse.name}
              </h2>
              
              <div className="flex items-center mb-6">
                <img
                  src="/images/instructor-avatar.jpg"
                  alt={selectedCourse.instructor}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-800 font-medium">{selectedCourse.instructor}</p>
                  <p className="text-gray-500 text-sm">Course Instructor</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Course Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedCourse.description}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-sm text-blue-600 font-medium">Duration</p>
                  <p className="text-lg font-semibold">{selectedCourse.duration}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-sm text-green-600 font-medium">Rating</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg">★</span>
                    <span className="ml-1 text-lg font-semibold">{selectedCourse.rating}</span>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <p className="text-sm text-purple-600 font-medium">Lectures</p>
                  <p className="text-lg font-semibold">{selectedCourse.lectures}</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <p className="text-sm text-orange-600 font-medium">Level</p>
                  <p className="text-lg font-semibold">{selectedCourse.level}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Prerequisites</h3>
                <p className="text-gray-600">{selectedCourse.prerequisites}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 line-through text-lg">
                    ${selectedCourse.price}
                  </span>
                  <span className="text-3xl font-bold text-blue-600">
                    ${(selectedCourse.price * (1 - selectedCourse.discount / 100)).toFixed(2)}
                  </span>
                </div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
