import React from 'react'
import Link from 'next/link'
import { navbarProp } from '@/app/types/customType'

export default function Navbar(props:navbarProp) {
  return (
   <>
   <nav className='mx-16 my-16 '>
    <ul className= {`${props.font.className} flex items-center justify-end space-x-5 font-medium text-xl `}>
        <li className='hover:underline'><Link href='/'>Works</Link></li>
        <li className='hover:underline'><Link href='/'>Blog</Link></li>
        <li className='hover:underline'><Link href='/'>Contact</Link></li>
    </ul>
   </nav>
   </>
  )
}
