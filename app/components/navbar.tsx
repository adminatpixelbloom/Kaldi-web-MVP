import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import { FiPhoneCall } from 'react-icons/fi'

const iconSize = 35

function Navbar() {
  return (
    <nav className="absolute top-5 right-5 text-white z-10">
        <ul className="flex gap-5">
          <li className="">
            <Link href='tel:+420725585535' className="flex items-center gap-2">
              <FiPhoneCall size={iconSize}/>
              <div>725 585 535</div>
            </Link>
          </li>
          <li>
            <Link href='https://www.instagram.com/kaldi_kavarna/?next=%2F'target="_blank">
              <FaInstagram size={iconSize}/>
            </Link>
          </li>
          <li>
            <Link href='https://www.facebook.com/profile.php?id=100057554003264' target="_blank">
              <FaFacebook size={iconSize}/>
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
