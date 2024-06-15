import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className="w-full border-b px-20">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image 
            src="/assets/images/logo.svg"
            width="0" 
            height="0" 
            alt="Evently Logo" 
            priority 
            style={{ width: "128px", height: "38px" }}
          />
        </Link>

        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="rounded-full" size="lg">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header