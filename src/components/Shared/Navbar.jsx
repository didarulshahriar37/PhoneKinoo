"use client";

import React from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const path = usePathname();

    const links = <>
        <li><Link href="/" className={path === "/" ? "text-blue-500" : ""}>Home</Link></li>
        <li><Link href={"/explore-phones"}>Explore Mobiles</Link></li>
        <li><a>About Us</a></li>
        <li><a>Contact</a></li>
    </>

    return (
        <div className="navbar opacity-98 shadow-sm md:px-20 fixed top-0 z-50 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                    </ul>
                </div>
                <a className="flex items-center font-bold text-xl"><Logo></Logo> PhoneKinoo</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className='btn'>Login</button>
                <button className='btn'>Register</button>
            </div>
        </div>
    )
}
