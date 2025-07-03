import React, { useState } from 'react'

const SumDelivery = ({ handleSubmit, sendMessage }) => {
  const [isOn, setIsOn] = useState(false)

  return (
    <section className='w-[300px]'>
      <div className='flex items-center gap-4 py-8'>
        <div
          onClick={() => setIsOn(!isOn)}
          className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isOn ? 'bg-green-500' : ''}`}
        >
          <div className={`bg-white w-6 h-6 rounded-full shadow-md transform ${isOn ? 'translate-x-6' : ''}`} />
        </div>
        <p className='text-[#414141] text-xl'>200$ Chegirma</p>
      </div>

      <div className='py-4 space-y-2'>
        <span className='flex justify-between gap-4'>
          <p className='text-xl text-[#8F8F8F]'>3 ta mahsulot</p>
          <p className='text-xl text-[#414141] font-bold'>258$</p>
        </span>
        <span className='flex justify-between gap-4'>
          <p className='text-xl text-[#8F8F8F]'>Chegirma</p>
          <p className='text-xl text-[#FF6633] font-bold'>-8$</p>
        </span>
      </div>

      <div className='flex justify-between items-center gap-4 py-8'>
        <h2 className='text-2xl text-[#2f2d2d]'>Umumiy Summa</h2>
        <p className='text-2xl font-bold text-[#414141]'>250$</p>
      </div>

      <button
        type='submit'
        onClick={handleSubmit(sendMessage)}
        className='w-full border p-3 bg-green-500 text-white rounded-lg font-semibold cursor-pointer hover:bg-green-400 active:scale-96 duration-250'
      >
        Yetkazib bergandan keyin to'lov
      </button>
    </section>
  )
}

export default SumDelivery
