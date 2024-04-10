// StudentList.js

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StudentList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('https://schoolmanagement1-1.onrender.com/student-list')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h2 className='text-center'>Student List</h2>
      <table className="table-auto w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-4 py-2">USN</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-400 px-4 py-2">{user.usn}</td>
              <td className="border border-gray-400 px-4 py-2">{user.email}</td>
              <td className="border border-gray-400 px-4 py-2">{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
