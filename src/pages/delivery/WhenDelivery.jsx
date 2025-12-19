import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const WhenDelivery = ({register}) => {
  const { t } = useLanguage()
  const [selectedTime, setSelectedTime] = useState(null)
  const timeOptions = ["8 - 10", "10 - 12", "12 - 14", "14 - 16", "16 - 18", "18 - 20"]

  return (
    <div className='bg-gray-50 rounded-xl p-6 border border-gray-200'>
      <h2 className='text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3'>
        <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center'>
          <span className='text-white font-bold'>🕐</span>
        </div>
        {t('when')}
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='space-y-3'>
          <label className='text-gray-700 font-medium block'>{t('date')}:</label>
          <input
            type="date"
            className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all bg-white'
            {...register("date")}
          />
        </div>
        <div className='space-y-3'>
          <h3 className='text-gray-700 font-medium'>{t('selectTime')}:</h3>
          <div className='grid grid-cols-2 gap-3'>
            {timeOptions.map((time) => (
              <button
                type="button"
                {...register("times", {required: t('selectTime')})}
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-3 px-4 rounded-lg border-2 cursor-pointer font-medium transition-all transform hover:scale-105 ${
                  selectedTime === time
                    ? 'bg-green-500 text-white border-green-500 shadow-lg'
                    : 'bg-white border-gray-300 text-gray-800 hover:bg-green-50 hover:border-green-300'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhenDelivery
