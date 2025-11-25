import PhoneDetails from '@/components/Phone Details/PhoneDetails';
import React from 'react'

export default function page({params}) {
  return (
    <div className='mt-15 bg-base-300 px-5 md:px-20 py-10'>
        <PhoneDetails params={params}></PhoneDetails>
    </div>
  )
}
