import React from 'react'
import Search from './Search'
import UserSection from './UserSection'

export default function Header() {
  return (
    <div className='py-5 px-3 '>
        <header className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
          <Search/>
          <UserSection/>
        </header>
    </div>
  )
}
