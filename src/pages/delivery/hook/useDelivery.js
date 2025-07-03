// src/hooks/useDeliveryData.js
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const useDeliveryData = () => {
  const { register, handleSubmit, reset } = useForm()

  const sendMessage = async (data) => {
    const message = `
🛒 <b>Yangi buyurtma</b>:
📍 <b>Hudud:</b> ${data.district}
🏘 <b>Ko'cha:</b> ${data.street}, Uy: ${data.home}, Kvartira: ${data.apartment}
📝 <b>Qo'shimcha:</b> ${data.additional || 'yo‘q'}
📅 <b>Sana:</b> ${data.date}
⏰ <b>Vaqt:</b> ${data.times}
📞 <b>Tel:</b> ${data.phone}
    `

    const TOKEN = '8171242828:AAGekrDGyZJMZdghTIZurMr78LZpCBTQZiQ'
    const CHAT_ID = '1456386212'
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    try {
      await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      })

      toast.success(' Buyurtma yuborildi!', {
        position: 'top-right',
        autoClose: 3000,
      })

      reset()
    } catch (error) {
      toast.error(' Xatolik yuz berdi!', {
        position: 'top-right',
        autoClose: 3000,
      })
      console.error(error)
    }
  }

  return {
    register,
    handleSubmit,
    reset,
    sendMessage,
  }
}
