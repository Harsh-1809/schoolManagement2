import React from 'react'
import Main from "../../Assets/mainImage.jpg"
import { Link } from 'react-router-dom'
const Body = () => {
    return (
        <>
            <div className='  flex justify-center'>
                <img src={Main} alt="" className='h-full w-1/2 my-4 rounded-full shadow-slate-600' />

            </div>
            <div className='m-4'>
                <p className='p-4 justify-center text-center'>
                    In this project The tech used is react js, Node js, Express js and Mongodb, <br />
                    in this project we have 3 login option <b>Admin, Teacher, Student</b> brwith sign up also we can add students and students grades as well as we can add teacher and which subject they teach
                </p>
                <div className="flex justify-evenly   ">
                    <Link to="/signup" className='bg-gray-800 text-white text-center w-24 rounded-full'>Sign Up</Link >
                    <Link to="/login" className=' bg-gray-800 text-white w-24 text-center rounded-full'>Login</Link >
                </div>
            </div>
        </>
    )
}

export default Body
