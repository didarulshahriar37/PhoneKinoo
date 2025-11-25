"use client";
import AllMobiles from '@/components/Explore Mobiles/All Phones/AllMobiles'
import SearchDrop from '@/components/Explore Mobiles/Search and Dropdown/SearchDrop';
import React, { Suspense, useEffect, useState } from 'react'

export default function page() {

    return (
        <div className='mt-15 bg-base-300 px-5 md:px-20 py-10'>
            <h3 className='tetxt-2xl md:text-4xl font-bold text-center'>All Mobiles</h3>
            <p className='md:text-xl text-center'>Explore various mobiles and choose yours now !</p>
            <SearchDrop></SearchDrop>
            <div className='mt-10'>
                <Suspense>
                    <AllMobiles></AllMobiles>
                </Suspense>
            </div>
        </div>
    )
}
