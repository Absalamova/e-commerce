import React from 'react'
import WhenDelivery from './WhenDelivery'
import EnterDelivery from './EnterDelivery'
import WhereDelivery from './WhereDelivery'
import SumDelivery from './SumDelivery'
import { useDeliveryData } from './hook/useDelivery'


export default function Delivery() {
  const { register, handleSubmit, sendMessage } = useDeliveryData()

  return (
    <section className='bg-[#f2eddc] p-6'>
      <form
        onSubmit={handleSubmit(sendMessage)}
        className='max-w-[1000px] p-4 mx-auto flex justify-between gap-12 items-start'
      >
        <div className='flex flex-col gap-8 w-[600px]'>
          <WhereDelivery register={register} />
          <WhenDelivery register={register} />
          <EnterDelivery register={register} />
        </div>
        <div>
          <SumDelivery handleSubmit={handleSubmit} sendMessage={sendMessage} />
        </div>
      </form>
    </section>
  )
}
