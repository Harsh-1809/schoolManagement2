// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">School Management System</div>
        <ul className="flex">
          <li className="mr-6">
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li className="mr-6">
            <Link to="/login" className="hover:text-gray-300">Login</Link>
          </li>
          <li className="mr-6">
            <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
          </li>
          {/* <li className="mr-6">
            <Link to="/teacher-list" className="hover:text-gray-300">Teacher Login</Link>
          </li>
          <li className="mr-6">
            <Link to="/add-student" className="hover:text-gray-300">Create Student Acc</Link>
          </li>
          <li className="mr-6">
            <Link to="/add-teacher" className="hover:text-gray-300">Create Teacher Acc</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
