
import {  Show, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export const Navbar=()=>{
    return(
        <header className="flex justify-between items-center p-4 h-16">
            <div className='flex justify-start items-center p-4 gap-4 h-16'>
                <h1>NextJsNav</h1>
            </div>
            
            <div className="flex justify-end items-center p-4 gap-4 h-16">
            <Show when="signed-out">
              <SignInButton mode="modal" />
              <SignUpButton mode="modal">
                <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              {/* <UserButton /> */}
              <Link href='/user-profile'>Profile</Link>
              <SignOutButton/>
            </Show>
            </div>
          </header>
    )
}