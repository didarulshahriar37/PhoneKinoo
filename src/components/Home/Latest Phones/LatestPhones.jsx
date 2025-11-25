"use client";
import Loading from '@/components/Loading/Loading';
import React, { Suspense } from 'react'
import LatestPhone from './LatestPhone';

export default function LatestPhones() {

  return (
    <div className='mt-20'>
      <div className='text-center'>
        <h3 className='text-2xl md:text-4xl font-bold'>Latest Phones</h3>
      </div>
      <div>
        <Suspense>
          <LatestPhone></LatestPhone>
        </Suspense>
      </div>
    </div>
  )
}
