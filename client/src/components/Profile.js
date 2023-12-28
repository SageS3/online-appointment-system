import React from 'react'
import firstdoctor from "../assets/female_doctor.svg"
import 'tailwindcss/tailwind.css';
function Profile() {
  return (
    <div className="hero ">
  <div className="hero-content flex lg:flex-row space-x-10">
    <img src={firstdoctor} className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" />
    <div className='space-y-2'>
      <h1 className="font-bold">Dr. Manik Dalvi</h1>
      <p className="text-sm">Obstetrics & Gynecology</p>
      <button className='bg-transparent hover:underline  text-blue-700 font-semibold py-1 px-2 border border-blue-500 rounded'>VIEW PROFILE</button>
    </div>
  </div>
   
</div>
  )
}

export default Profile