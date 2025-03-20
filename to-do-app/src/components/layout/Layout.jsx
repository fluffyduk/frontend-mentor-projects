import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='bg-gray-900 text-white h-screen py-10'>
        {children}
    </div>
  )
}

export default Layout