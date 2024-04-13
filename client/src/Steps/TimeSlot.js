import React from 'react'
import "../App.css"
function TimeSlot() {
  
  //time slots
  const timeSlots = ["10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM", "11:00 AM",
  "11:15 AM", "11:30 AM", "11:45 AM"];
  // days displayed
  const days = [{day:"Today", availability:"no slots"},
                {day:"Tomorrow", availability:"8 slots"},
                {day:"Next Day", availability:"8 slots"}]
  return (
    <div className='time-slot-container'> 
      <div className='time-slot-dates'>
        {days.map((day) => ( 
          <div className='day-container' key={days.indexOf(day)}> 
            <p>{day.day}</p>
            <p>{day.availability}</p>
          </div>
        ))}
      </div>
      <div className='times-container'>
        {timeSlots.map((time) => ( 
          <div className="time" key={time}>{time}</div>
        ))}
      </div> 
      <button>CONTINUE</button>
    </div>
  )
}

export default TimeSlot