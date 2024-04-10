import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import TeacherList from '../List/TeacherList'
import StudentList from '../List/StudentList';
const TeacherDashboard = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://schoolmanagement1-1.onrender.com/student-list')
            .then(users => setUsers(users.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className="flex h-screen">
                {/* Sidebar */}
                <aside className="bg-gray-800 text-white w-1/4 p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-3">Teacher Section</h2>
                        <ul>
                            <li className="mb-2">
                                <Link to="/add-student" className="hover:text-gray-300">Add Student</Link><br />
                                <Link to="/add-grades" className="hover:text-gray-300">Add Grades</Link>
                            </li>
                        </ul>
                    </div>

                </aside>

                {/* Main Content */}
                <main className="flex-1 justify-center bg-gray-200 p-6">
                    <h1 className="text-3xl text-center justify-center font-semibold mb-6">School Management System</h1>
                    <div className="grid grid-cols-1 text-center gap-6 justify-center">

                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-2">Student Details</h2>
                            <p>Total: {users.length}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <StudentList />
                        </div>

                    </div>


                </main>




            </div>
            <footer className="bg-gray-800 text-white w-full text-center">
                Designed and Developed with ❤️ by Your Name
            </footer>
        </div>
    )
}

export default TeacherDashboard
