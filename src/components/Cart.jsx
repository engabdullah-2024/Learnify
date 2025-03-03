import { useState } from 'react';
import { FaPaypal, FaCreditCard, FaMobile } from 'react-icons/fa';
import { BsCart4 } from 'react-icons/bs';
import React  from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      price: 99.99,
      description: 'Learn full-stack web development from scratch'
    },
    {
      id: 2, 
      title: 'Game Development with Unity',
      price: 89.99,
      description: 'Create amazing 3D games using Unity engine'
    },
    {
      id: 3,
      title: 'Mobile App Development',
      price: 79.99,
      description: 'Build iOS and Android apps with React Native'
    },
    {
      id: 4,
      title: 'Data Science Fundamentals',
      price: 119.99,
      description: 'Master data analysis and machine learning'
    }
  ];

  const localPayments = [
    { id: 'evc', name: 'EVC Plus', icon: <FaMobile /> },
    { id: 'zaad', name: 'Zaad Service', icon: <FaMobile /> },
    { id: 'sahal', name: 'Sahal', icon: <FaMobile /> },
    { id: 'waafi', name: 'Waafi', icon: <FaMobile /> }
  ];

  const internationalPayments = [
    { id: 'paypal', name: 'PayPal', icon: <FaPaypal /> },
    { id: 'stripe', name: 'Stripe', icon: <FaCreditCard /> }
  ];

  const addToCart = (course) => {
    setCart([...cart, course]);
  };

  const removeFromCart = (courseId) => {
    setCart(cart.filter(item => item.id !== courseId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handlePayment = () => {
    // Implement payment processing logic here based on selectedPayment
    alert(`Processing payment via ${selectedPayment}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Courses</h1>
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                <button
                  onClick={() => addToCart(course)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <BsCart4 className="text-2xl mr-2" />
            <h2 className="text-2xl font-bold">Your Cart</h2>
          </div>
          
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty</p>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b">
                  <span>{item.title}</span>
                  <div className="flex items-center">
                    <span className="mr-4">${item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-4 text-xl font-bold">
                Total: ${calculateTotal()}
              </div>
            </>
          )}
        </div>

        {/* Payment Methods */}
        {cart.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Local Payments</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {localPayments.map(method => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.name)}
                    className={`flex items-center justify-center p-4 rounded-lg border ${
                      selectedPayment === method.name
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-600'
                    }`}
                  >
                    {method.icon}
                    <span className="ml-2">{method.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">International Payments</h3>
              <div className="grid grid-cols-2 gap-4">
                {internationalPayments.map(method => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.name)}
                    className={`flex items-center justify-center p-4 rounded-lg border ${
                      selectedPayment === method.name
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-600'
                    }`}
                  >
                    {method.icon}
                    <span className="ml-2">{method.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedPayment && (
              <button
                onClick={handlePayment}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Pay with {selectedPayment}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
