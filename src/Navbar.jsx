import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex gap-4 p-4 bg-gray-200">
    <Link to="/" className="text-blue-600">Home</Link>
    <Link to="/signup" className="text-blue-600">Signup</Link>
    <Link to="/login" className="text-blue-600">Login</Link>
  </nav>
);

export default Navbar;
