"use client"

import { headerLinks } from '@/constans'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  const pathname = usePathname()
  
  return (
    <ul className="flex w-full items-start md:flex-row flex-between">
      {headerLinks.map((e, i) => {
        const isActive = pathname === e.route
        
        return (
          <li
            key={e.route} 
            className={`${isActive && "text-primary-500"} flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={e.route}>{e.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems