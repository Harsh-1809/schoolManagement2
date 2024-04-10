import React from 'react'
import { Link } from 'react-router-dom'

const Choose = () => {
  return (
      <div className="flex flex-col h-screen justify-center items-center">
          {/* Admin Login Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-64">
              <h2 className="text-xl font-semibold mb-2">Admin Login</h2>
              <Link to="/admin-login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200">Login</Link>
          </div>

          {/* Teacher Login Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-64">
              <h2 className="text-xl font-semibold mb-2">Teacher Login</h2>
              <Link to="/teacher-login" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-200">Login</Link>
          </div>

          {/* Student Login Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-64">
              <h2 className="text-xl font-semibold mb-2">Student Login</h2>
              <Link to="/student-login" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-yellow-200">Login</Link>
          </div>
      </div>
  )
}

export default Choose
