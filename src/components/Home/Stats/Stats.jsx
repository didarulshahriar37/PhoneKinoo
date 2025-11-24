import React from 'react'
import { FaMobileAlt, FaUser } from "react-icons/fa";
import { TbBrandAirtable } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";

export default function Stats() {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center gap-10 md:gap-15 mt-10 items-center '>
                <div className='text-center'>
                    <div className='bg-base-100 px-10 py-5 rounded-2xl mb-4 transition-transform shadow-xl transform hover:scale-105 hover:shadow-2xl duration-300'>
                        <div className='flex items-center justify-center gap-2 text-xl font-semibold'>
                            <FaMobileAlt/>
                            <h3>1200+ Phones</h3>
                        </div>
                        <p className='mt-2'>Browse an extensive collection of smartphones<br /> across all price ranges.</p>
                    </div>
                    <div className='bg-base-100 px-10 py-5 rounded-2xl mb-4 shadow-xl transform hover:scale-105 hover:shadow-2xl duration-300'>
                        <div className='flex items-center justify-center gap-2 text-xl font-semibold'>
                            <TbBrandAirtable></TbBrandAirtable>
                            <h3>50+ Brands</h3>
                        </div>
                        <p className='mt-2'>Discover phones from top global and local brands.</p>
                    </div>
                    <div className='bg-base-100 px-10 py-5 rounded-2xl shadow-xl transform hover:scale-105 hover:shadow-2xl duration-300'>
                        <div className='flex items-center justify-center gap-2 text-xl font-semibold '>
                            <FaUsers/>
                            <h3>5,000+ Users</h3>
                        </div>
                        <p className='mt-2'>Trusted by thousands of smartphone enthusiasts worldwide.</p>
                    </div>
                </div>
                <div>
                    <div className='bg-base-100 rounded-2xl p-10 shadow-xl transform hover:scale-105 hover:shadow-2xl duration-300'>
                        <h4 className='text-4xl font-semibold text-center mb-10'>Features</h4>
                        <ul className='list-disc space-y-5'>
                            <li><p>Compare features like battery, camera, display, and performance in one place.</p></li>
                            <li><p>Seamless shopping experience with safe payment options.</p></li>
                            <li><p>Stay updated with the newest phone launches every week.</p></li>
                            <li><p>Join thousands of satisfied customers discovering their perfect phone.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
