import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const EnterDelivery = ({ register }) => {
  const { t } = useLanguage()
  const [phone, setPhone] = useState('')

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length > 9) value = value.slice(0, 9)
    setPhone(value)
  }

  return (
    <div className='bg-gray-50 rounded-xl p-6 border border-gray-200'>
      <h2 className='text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3'>
        <div className='w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center'>
          <span className='text-white font-bold'>👤</span>
        </div>
        {t('aboutYou')}
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='space-y-3'>
          <label className='block text-gray-700 font-medium'>{t('enterName')}:</label>
          <input
            type="text"
            placeholder={t('enterNamePlaceholder')}
            className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-white'
            {...register('name', { required: t('enterName') })}
          />
        </div>
        <div className='space-y-3'>
          <label className='block text-gray-700 font-medium'>{t('enterPhone')}:</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500 transition-all">
            <span className="text-gray-700 mr-2 font-medium">+998</span>
            <input
              type="tel"
              value={phone}
              onChange={handleChange}
              maxLength={9}
              placeholder={t('phonePlaceholder')}
              className="outline-none flex-1"
              {...register("phone", { required: t('enterPhone') })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnterDelivery
