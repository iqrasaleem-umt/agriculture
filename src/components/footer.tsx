import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='w-full bg-blue-900 px-8 py-6 mt-4'>
      <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start'>
        <div className='text-white'>
          <h1 className='font-bold text-xl'>Agriculture</h1>
          <p className='mt-2'>Adam Street</p>
          <p className='mt-2'>Email: ABC@example.com</p>
          <p className='mt-2'>Phone: 0300 78787800</p>
        </div>

        <div className='mt-4 sm:mt-0 flex justify-center'>
          <Image src="/whatsapp.png" alt="WhatsApp" height={20} width={20} />
        </div>
      </div>

      <div className='text-center text-white mt-4'>
        <p>All Rights Reserved Design By Iqra Saleem</p>
      </div>
    </div>
  )
}
