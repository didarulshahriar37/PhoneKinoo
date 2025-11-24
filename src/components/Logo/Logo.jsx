import React from 'react'
import logo from "../../../public/logo.png"
import Image from 'next/image'

export default function Logo() {
  return (
    <div>
        <Image src={logo} alt='PhoneKinoo' width={40}></Image>
    </div>
  )
}
