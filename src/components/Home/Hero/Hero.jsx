import React from 'react'
import { FaSearch } from "react-icons/fa";
import phones from "../../../../public/phones.png";
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className='bg-base-100 rounded-2xl'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center p-5 md:p-15 gap-10 text-center md:text-left'>
                <div>
                    <h3 className='text-xl md:text-4xl font-bold md:font-semibold'>Discover, Compare, and Buy Your Next Phone — All in One Place!</h3>
                    <p className='md:text-xl mt-5'>Explore the latest smartphones, compare features, and shop with confidence — the perfect phone is just a click away.</p>
                    <Link href="/explore-phones" className='btn mt-10 mb-5'><FaSearch /> Explore More</Link>
                </div>
                <div>
                    <Image src={phones} alt='Phones'></Image>
                </div>
            </div>
        </div>
    )
}
