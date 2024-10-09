import { PiggyBank } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
   <a href="/" className='flex items-center gap-4'>
    <PiggyBank className='stroke h-11 w-11 stroke-amber-500 stroke-[1.5] '/>
    <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl leading-tight tracking-tighter text-transparent'>
       Expo Tracker

    </p>
   </a>
  )
}
export const LogoMobile = () => {
  return (
   <a href="/" className='flex items-center '>
    <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl leading-tight tracking-tighter text-transparent'>
        EXPO
    </p>
   </a>
  )
}

export default Logo