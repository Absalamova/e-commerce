import React from 'react'
import WhenDelivery from './WhenDelivery'
import EnterDelivery from './EnterDelivery'
import WhereDelivery from './WhereDelivery'
import SumDelivery from './SumDelivery'
import { useDeliveryData } from './hook/useDelivery'
import { useLanguage } from '../../contexts/LanguageContext'


export default function Delivery() {
  const { register, handleSubmit, sendMessage } = useDeliveryData()
  const { t } = useLanguage()

  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>{t('delivery')}</h1>
          <p className='text-lg text-gray-600'>Fill in the details below to complete your order</p>
        </div>

        <form
          onSubmit={handleSubmit(sendMessage)}
          className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100'
        >
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2 space-y-8'>
              <WhereDelivery register={register} />
              <WhenDelivery register={register} />
              <EnterDelivery register={register} />
            </div>
            <div className='lg:col-span-1'>
              <SumDelivery handleSubmit={handleSubmit} sendMessage={sendMessage} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
