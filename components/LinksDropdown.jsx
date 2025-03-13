import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { AlignLeft } from 'lucide-react'
import React from 'react'
import Link from "next/link"
import { Button } from './ui/button'
import links from "../utils/links"

const LinksDropdown = () => {
  return (
    
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='lg:hidden'>
        <Button variant="outine" size="icon">
          <AlignLeft/>
          <span className='sr-only'>Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
      className='w-52'
      align='start'
      sideOffset={25}
      >  
        {links.map((link)=> (
          <DropdownMenuItem key={link.href}>
            <Link href={link.href} className='flex items-center gap-x-2'>
              {link.icon} <span className='capitalize'>{link.label}</span>
            </Link>

        </DropdownMenuItem>))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksDropdown
