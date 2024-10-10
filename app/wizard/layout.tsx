import React, { ReactNode } from 'react'

const layout = ({ children }:{ children :ReactNode}) => {
  return (
        <div className=' relative flex w-full  h-screen flex-col items-center justify-center'>
            {children}

        </div>
  )
}

export default layout