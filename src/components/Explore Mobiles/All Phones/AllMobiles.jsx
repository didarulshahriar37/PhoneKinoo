"use client";
import React, { useEffect, useState } from 'react'
import Loading from '../../Loading/Loading';
import { FaStarHalfAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function AllMobiles() {

    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/phones")
            .then(res => res.json())
            .then(data => {
                setPhones(data);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                phones.map(phone => {
                    return (
                        <div key={phone._id} className="card bg-base-100 shadow-xl">
                            <figure className="w-full h-56 overflow-hidden flex justify-center items-center bg-base-200">
                                <Image
                                    src={phone.photo}
                                    alt={phone.name}
                                    width={200}
                                    height={100}
                                    className="object-cover"
                                />
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
                                    <Link href={`/phone-details/${phone._id}`} className='btn'>View Details</Link>
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
