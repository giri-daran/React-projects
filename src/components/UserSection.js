import React from 'react'
import { FaBell, FaGear, FaMessage } from 'react-icons/fa6'
import User from './User'

export default function UserSection() {
  return (
    <div className='flex flex-row'>
        <span className='bg-slate-500 rounded-full p-[12px] mx-2 first:mx-0 hover:cursor-pointer'><FaMessage /></span>
        <span className='bg-slate-500 rounded-full p-[12px] mx-2 first:mx-0 hover:cursor-pointer'><FaGear/></span>
        <span className='bg-slate-500 rounded-full p-[12px] ml-2 mr-2 md:mr-4 first:mx-0 hover:cursor-pointer'><FaBell/></span>
        <User/>
    </div>
  )
}
