import React, { useState } from 'react'


const WhenDelivery = ({register}) => {
  const [selectedTime, setSelectedTime] = useState(null)
  const timeOptions = ["8 - 10", "10 - 12", "12 - 14", "14 - 16", "16 - 18", "18 - 20"]

  return (
    <section className=''>
      <h2 className='text-2xl font-bold pb-6'>Qachon</h2>
      <div className='flex justify-between flex-wrap gap-4'>
        <span className='flex flex-col'>
          <p className='mb-1'>Sana:</p>
          <input type="date" className='border bg-white p-1 rounded-md' {...register("date")} />
        </span>
        <span>
          <h3 className='mb-2'>Vaqtini tanlang:</h3>
          <div className='flex flex-wrap w-[250px] gap-2'>
            {timeOptions.map((time) => (
              <p
              {...register("times", {required:"vaqtni tanlang"})}
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-1.5 px-3 rounded-md border cursor-pointer text-gray-800 
                  ${selectedTime === time ? 'bg-green-500 text-white' : 'bg-[#fffcf9] border-gray-500 hover:bg-green-300'}`}>{time}
              </p>
            ))}
          </div>
        </span>
      </div>

    </section>
  )
}

export default WhenDelivery
