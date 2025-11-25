"use client";
import Loading from '@/components/Loading/Loading';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaStarHalfAlt } from "react-icons/fa";

export default function LatestPhone() {

    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/latest-phones")
            .then(res => res.json())
            .then(data => {
                setPhones(data);
                setLoading(false);
            })
    }, [])

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                phones.map(phone => {
                    return (
                        <div key={phone._id} className="card bg-base-100 shadow-xl">
                            <figure>
                                <Image src={phone.photo} alt={phone.name} width={300} height={300}></Image>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {phone.name}
                                    <div className="badge badge-secondary">{phone.brand}</div>
                                </h2>
                                <p>{phone.shortDescription}</p>
                                <div className='flex items-center mt-5'>
                                    <p className="text-[18px] font-semibold">Price: {phone.price} BDT</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline"><span className='flex justify-center gap-2 items-center text-orange-400'><FaStarHalfAlt /> {phone.rating}</span></div>
                                    </div>
                                </div>
                                <div className='text-center mt-5'>
                                    <button className='btn'>View Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
