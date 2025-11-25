"use client";
import React, { useEffect, useState } from 'react'

export default function SearchDrop() {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/phones")
            .then(res => res.json())
            .then(data => {
                const uniqueBrands = [...new Set(data.map(phone => phone.brand))];
                setBrands(uniqueBrands);
            })
    }, [])

    return (
        <div className='mt-5'>
            <div className='flex justify-between items-center'>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
                <div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">Brands</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            {
                                brands.map((brand, index) => {
                                    return (
                                        <li key={index}><a>{brand}</a></li>
                                    )
                                }
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
