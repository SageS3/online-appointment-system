import React from 'react'
import 'tailwindcss/tailwind.css';

function BookAppointment() {
  return (
    <>
    <div className='flex justify-between p-3'>
        
        <div>
            <h1 className='font-bold text-lg'>Book Appointment</h1>
            <p className='text-sm text-gray-400'>Select Your Consultation Type</p>
            <p className='text-[12px] text-[#64bc6e] font-semibold'>Fees approx ₹ 500</p>
            <p className='text-[#715ac4]'>(pay at clinic)</p>
        </div>
        <div className='flex-inline space-x-4'>
            <button className='bg-transparent hover:underline  text-blue-700 font-semibold py-1 px-2 border border-blue-500 rounded'>In-Clinic</button>
            <button className='bg-transparent hover:underline  text-blue-700 font-semibold py-1 px-2 border border-blue-500 rounded'>Audio</button>
            <button className='bg-transparent hover:underline  text-blue-700 font-semibold py-1 px-2 border border-blue-500 rounded'>Video</button>
        </div>
    </div>
    <div>
        <div>
            <h1 className='text-[16px] font-bold p-3 d-none'>Clinic Name</h1>
        </div>
        <div>
            <p className='px-0 py-[15px]'>Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp. Bopal Nagar, Maharashtra, 421302</p>
        </div>
    </div>
    </>
    

  )
}

export default BookAppointment