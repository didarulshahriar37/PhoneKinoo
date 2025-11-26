"use client";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import Link from 'next/link';

export default function PhoneDetails({ }) {

    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch("https://phone-kinoo-server.vercel.app/phones")
            .then(res => res.json())
            .then(data => {
                setPhones(data);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            <Loading></Loading>
        )
    }

    const singlePhone = phones.find(phone => phone._id === id);
    console.log(singlePhone);

    return (
        <div className='flex flex-col md:flex-row gap-20'>
            <div className='bg-base-100 p-15 rounded-2xl'>
                <Image src={singlePhone.photo} alt={singlePhone.name} width={300} height={200}></Image>
            </div>
            <div className=''>
                <h3 className='text-4xl font-bold'>{singlePhone.name}</h3>
                <div className="badge badge-outline mt-2">{singlePhone.brand}</div>
                <p className='mt-10 font-bold text-xl'>Description</p>
                <p className='mt-1'>{singlePhone.longDescription}</p>
                <p className='mt-10 text-xl font-semibold'>
                    <span className='font-bold'>Release Date:</span> {new Date(singlePhone.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
                <p className='text-xl font-semibold mt-2'><span className='font-bold'>Price:</span> {singlePhone.price} BDT</p>
                <div className='text-center mt-5'>
                    <Link href="/" className='btn bg-linear-to-r from-[#ff7e5f] to-[#feb47b]'>Go Back</Link>
                </div>
            </div>
        </div>
    )
}
