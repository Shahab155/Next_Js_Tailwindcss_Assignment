import React from 'react'
import { FaLinkedin,FaTwitter ,FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import Link from "next/link"

export default function Footer() {
  return (
    <footer className='h-[243px]'>
          {/* icons */}
          <div className='flex justify-center h-8 my-10 space-x-6  text-2xl'>
          <Link target='_blank' href=' https://www.facebook.com'><FaSquareFacebook /></Link>
          <Link target='_blank' href=' https://www.Instagram.com'><FaInstagram /></Link>
          <Link target='_blank' href=' https://www.Twitter.com'><FaTwitter/></Link>
          <Link target='_blank' href=' https://www.Linkedin.com'><FaLinkedin  /></Link>
          </div>
          <p className='text-center  text-[20px] leading-[32.21px] font-[600] relative bottom-3 '> Made with 💖 by Shahab</p>
    </footer>
  )
}
