import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TeacherSubject = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://schoolmanagement1-1.onrender.com/teacher-subject')
            .then(users => setUsers(users.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div>
                <h2 className='text-center'>Student Teacher</h2>
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">ID</th>
                            <th className="border border-gray-400 px-4 py-2">Name</th>
                            <th className="border border-gray-400 px-4 py-2">Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="hover:bg-gray-100">
                                <td className="border border-gray-400 px-4 py-2">{user.id}</td>
                                <td className="border border-gray-400 px-4 py-2">{user.name}</td>
                                <td className="border border-gray-400 px-4 py-2">{user.subject}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TeacherSubject
