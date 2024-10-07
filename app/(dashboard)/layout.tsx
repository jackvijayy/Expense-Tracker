import React, { ReactNode } from 'react'

const layout = ({ children }: {children:ReactNode}) => {

  return (
    <div className='realtive flex flex-col w-full h-screen'>
        <div className='w-full'>
            {children}
        </div>

    </div>
  )
}

export default layout