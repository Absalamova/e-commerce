import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const WhereDelivery = ({register}) => {
  const { t } = useLanguage()

  return (
    <div className='bg-gray-50 rounded-xl p-6 border border-gray-200'>
        <h2 className='text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3'>
          <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
            <span className='text-white font-bold'>📍</span>
          </div>
          {t('where')}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           <div className='space-y-2'>
               <label className='text-gray-700 font-medium block'>{t('district')}:</label>
               <select
                 {...register("district")}
                 className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white'
               >
                <option>{t('selectDistrict')}</option>
                <option value="Yunusobod">Yunusobod</option>
                <option value="Sergeli">Sergeli</option>
                <option value="Chilonzor">Chilonzor</option>
                <option value="Yashnobod">Yashnobod</option>
                <option value="Mirzo Ulug'bek">Mirzo Ulug'bek</option>
                <option value="Shayxontohur">Shayxontohur</option>
                <option value="Mirobod">Mirobod</option>
               </select>
           </div>
            <div className='space-y-2'>
              <label className='text-gray-700 font-medium block'>{t('street')}:</label>
              <input
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                type="text"
                placeholder={t('enterStreet')}
                {...register("street", {required: t('enterStreet')})}
              />
            </div>
            <div className='space-y-2'>
              <label className='text-gray-700 font-medium block'>{t('house')}:</label>
              <input
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                type="number"
                placeholder={t('house')}
                {...register("home", {required: t('house'), minLength:{value:1}, maxLength:{value:4}})}
              />
            </div>
            <div className='space-y-2'>
              <label className='text-gray-700 font-medium block'>{t('apartment')}:</label>
              <input
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                type="number"
                placeholder={t('apartment')}
                {...register("apartment", {required: t('apartment')})}
              />
            </div>
            <div className='space-y-2 md:col-span-2'>
              <label className='text-gray-700 font-medium block'>{t('additional')}:</label>
              <input
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                type="text"
                placeholder={t('additional')}
                {...register("additional")}
              />
            </div>
        </div>
    </div>
  )
}

export default WhereDelivery