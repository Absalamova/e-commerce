import React from 'react'

const WhereDelivery = ({register}) => {
  return (
    <section>
        <h2 className='text-2xl font-bold pb-6 ml-2'>Qayerdan</h2>
        <div className='flex flex-wrap gap-8 justify-around items-center'>
           <span>
               <label className='text-gray-700 block mb-1'>Topshiriladigan hudud:</label>
               <select {...register("district")} className='border rounded-md w-[200px] py-1 outline-none cursor-pointer'>
                <option>Hudud tanlang</option>
                <option value="Yunusobod">Yunusobod</option>
                <option value="Sergeli">Sergeli</option>
                <option value="Chilonzor">Chilonzor</option>
                <option value="Yashnobod">Yashnobod</option>
                <option value="Mirzo Ulug'bek">Mirzo Ulug'bek</option>
                <option value="Shayxontohur">Shayxontohur</option>
                <option value="Mirobod">Mirobod</option>
               </select>
           </span>
            <span>
              <label className='text-gray-700 block my-1'>Ko'cha:</label>
              <input className='border-2 border-gray-600 outline-none rounded-md py-1 px-2 focus:bg-blue-50 focus:border-gray-500' type="text" placeholder="Ko'chani kiriting" {...register("street", {required:"Ko'chani kiriting"})} />
            </span>
            <span>
              <label className='text-gray-700 block my-1'>Uy:</label>
              <input className='border-2 border-gray-600 outline-none rounded-md py-1 px-2 focus:bg-blue-50 focus:border-gray-500 w-[60px]' type="number" placeholder='Uy' {...register("home", {required:"Uyni kiriting", minLength:{value:1}, maxLength:{value:4}})}/>
            </span>
            <span>
              <label className='text-gray-700 block my-1'>Kvartira:</label>
              <input className='border-2 border-gray-600 outline-none rounded-md py-1 px-2 focus:bg-blue-50 focus:border-gray-500 w-[100px]' type="number" placeholder='Kvartira' {...register("apartment", {required:"Enter apartment"})} />
            </span>
            <span>
              <label className='text-gray-700 block my-1'>Qo'shimcha:</label>
              <input className='border-2 border-gray-600 outline-none rounded-md py-1 px-2 focus:bg-blue-50 focus:border-gray-500' type="text" placeholder="Qo'shimcha" {...register("additional")}/>
            </span>

        </div>
    </section>
  )
}

export default WhereDelivery