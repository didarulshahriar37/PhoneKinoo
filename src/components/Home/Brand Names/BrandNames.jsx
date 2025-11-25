"use client";
import Loading from '@/components/Loading/Loading';
import React, { useEffect, useState } from 'react'

export default function BrandNames() {

  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/phones")
      .then(res => res.json())
      .then(data => {
        const uniqueBrands = [...new Set(data.map(phone => phone.brand))];
        setBrands(uniqueBrands);
        setLoading(false);
      })
  }, [])

  if(loading){
    return <Loading></Loading>
  }

  return (
    <div className=''>
      <div className='mt-5 flex flex-wrap justify-center gap-10'>
        {
          brands.map((brand, index) => {
            return (
              <div className='bg-base-100 px-5 py-1 rounded-2xl transition-transform shadow-xl transform hover:scale-105 hover:shadow-2xl duration-300' key={index}>
                <p>{brand}</p>
              </div>
            )
          }
          )
        }
      </div>
    </div>
  )
}
