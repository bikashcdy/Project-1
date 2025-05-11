import React from 'react';
import { Link } from 'react-router-dom';
import img from '../src/assets/Beautiful-Plain-Website-Background.jpg'  
const Home = () => {
  return (
    <div className="relative min-h-screen">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    ></div>
   <div className="relative z-10 flex flex-col items-center justify-center min-h-screen space-y-4 bg-black bg-opacity-50 text-white">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>

        <Link to="/signup">
          <button className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
            Signup
          </button>
        </Link>

        <Link to="/login">
          <button className="px-6 py-2 bg-black text-white rounded border hover:bg-gray-800 transition">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
