import React from 'react'
import { Link } from 'react-router-dom'
const ChooseSign = () => {
  return (
    <div>
          <div className="flex flex-col h-screen justify-center items-center">

              {/* Teacher Login Card */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-64">
                  <h2 className="text-xl font-semibold mb-2">Teacher Signup</h2>
                  <Link to="/teacher-signup" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-200">SignUp</Link>
              </div>

              {/* Student Login Card */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-64">
                  <h2 className="text-xl font-semibold mb-2">Student SignUp</h2>
                  <Link to="/student-signup" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-yellow-200">SignUp</Link>
              </div>
          </div>
    </div>
  )
}

export default ChooseSign
