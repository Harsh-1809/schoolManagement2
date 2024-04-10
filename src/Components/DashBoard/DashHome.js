import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import TeacherList from '../List/TeacherList'
import StudentList from '../List/StudentList'
const DashHome = () => {
  const [student, setStudent] = useState([])
  const [teacher, setTeacher] = useState([]
  )
  useEffect(() => {
    axios.get('https://schoolmanagement1-1.onrender.com/student-list')
      .then(users => setStudent(users.data))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    axios.get('https://schoolmanagement1-1.onrender.com/teacher-list')
      .then(users => setTeacher(users.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="bg-gray-800 text-white w-1/4 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Admin Section</h2>

          </div>
          <div>

            <ul>
              <li className="mb-2">
                <Link to="/add-teacher" className="hover:text-gray-300"> Add Teacher </Link>
              </li>
            </ul>

            <ul>
              <li className="mb-2">
                <Link to="/add-admin" className="hover:text-gray-300"> Add Admin </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2">
                <Link to="/add-subject" className="hover:text-gray-300"> Add Subject </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-200 p-6">
          <h1 className="text-3xl text-center font-semibold mb-6">School Management System</h1>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Teacher Details</h2>
              <p>Total: {teacher.length}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Student Details</h2>
              <p>Total: {student.length}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              < TeacherList />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              < StudentList />
            </div>
          </div>

        </main>



      </div>
      <footer className="bg-gray-800 text-white w-full text-center">
        Designed and Developed with ❤️ by Your Name
      </footer>
    </>


  )
}

export default DashHome
