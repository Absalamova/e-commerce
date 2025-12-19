import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const SumDelivery = ({ handleSubmit, sendMessage }) => {
  const { t } = useLanguage()
  const [isOn, setIsOn] = useState(false)

  return (
    <div className='bg-white rounded-xl p-6 border border-gray-200 shadow-lg sticky top-4'>
      <h3 className='text-2xl font-bold text-gray-900 mb-6 text-center'>Order Summary</h3>

      {/* Discount Toggle */}
      <div className='flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg mb-6 border border-orange-200'>
        <span className='text-lg font-medium text-gray-800'>200$ {t('discount')}</span>
        <button
          type="button"
          onClick={() => setIsOn(!isOn)}
          className={`w-14 h-8 flex items-center rounded-full p-1 transition-all duration-300 ${
            isOn ? 'bg-green-500' : 'bg-gray-300'
          }`}
        >
          <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? 'translate-x-6' : ''
          }`} />
        </button>
      </div>

      {/* Order Details */}
      <div className='space-y-4 mb-8'>
        <div className='flex justify-between items-center py-3 border-b border-gray-200'>
          <span className='text-gray-600'>3 {t('products')}</span>
          <span className='font-semibold text-gray-900'>258$</span>
        </div>
        <div className='flex justify-between items-center py-3 border-b border-gray-200'>
          <span className='text-gray-600'>{t('discount')}</span>
          <span className='font-semibold text-red-600'>-8$</span>
        </div>
        <div className='flex justify-between items-center py-3 border-b-2 border-gray-300'>
          <span className='text-xl font-bold text-gray-900'>{t('total')}</span>
          <span className='text-2xl font-bold text-gray-900'>250$</span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        onClick={handleSubmit(sendMessage)}
        className='w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
      >
        <span className='flex items-center justify-center gap-2'>
          <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
          </svg>
          {t('payAfterDelivery')}
        </span>
      </button>

      <div className='mt-4 text-center'>
        <p className='text-sm text-gray-500'>
          Secure payment • Fast delivery
        </p>
      </div>
    </div>
  )
}

export default SumDelivery
