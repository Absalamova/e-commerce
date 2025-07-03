import React, { useState } from 'react'

const EnterDelivery = ({ register }) => {
  const [phone, setPhone] = useState('')

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length > 9) value = value.slice(0, 9)
    setPhone(value)
  }

  return (
    <section>
      <h2 className='text-2xl font-bold pb-4'>O'zingiz haqingizda</h2>
      <div className='flex justify-between gap-4 items-center'>
        <div>
          <label className='block text-gray-700 font-semibold mb-1'>Ismingizni kiriting:</label>
          <input
            type="text"
            placeholder='Ism kiriting'
            className='border py-1 px-2 rounded-md outline-none focus:bg-gray-50'
            {...register('name', { required: 'Ism majburiy' })}
          />
        </div>
        <div>
          <label className='block text-gray-700 font-semibold mb-1'>Raqamingizni kiriting:</label>
          <div className="flex items-center border rounded-md px-2 py-1 bg-white">
            <span className="text-gray-700 mr-1">+998</span>
            <input
              type="tel"
              value={phone}
              onChange={handleChange}
              maxLength={9}
              placeholder='901234567'
              className="outline-none w-[120px]"
              {...register("phone", { required: "Telefon raqam kerak" })}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnterDelivery
