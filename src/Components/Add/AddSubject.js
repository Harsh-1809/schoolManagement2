import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const AddSubject = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [id, setId] = useState('')
    const history = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await axios.post("https://schoolmanagement1-1.onrender.com/add-subject ", {
                name, subject, id
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("Student already exists")
                    }
                    else if (res.data == "notexist") {
                        history("/dashboard")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }

    return (
        <div className="flex justify-center items-center bg-gray-800 min-h-screen">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <h2 className="text-2xl font-semibold mb-4">Add Subject</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="subject"
                            type="text"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                            ID
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="id"
                            type="text"
                            placeholder="ID"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleSubmit}
                    >
                        Add Subject
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddSubject
