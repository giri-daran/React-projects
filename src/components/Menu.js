import React from 'react'
import logo from '../components/img/logo.svg';
import { FaHome, FaChartLine, FaClipboardList } from 'react-icons/fa';
import { FaBagShopping, FaOutdent } from 'react-icons/fa6';

export default function Menu() {
  return (
    <>
    <div className=' h-full bg-slate-500  rounded-[30px] rounded-l-full sm:rounded-bl-full'>

        <div className="h-full rounded-tl-[30px] rounded-bl-[30px] bg-gray-800 text-white  flex flex-col items-center justify-between py-5 space-y-8">
        <div>
          <div className="text-2xl font-bold">
            <img src={logo} className="w-full" alt="logo" />
          </div>
          <nav className="flex flex-col items-center mt-4 space-y-8">
            <a href="#home" className="text-2xl hover:text-gray-400  underline underline-offset-8 decoration-sky-600">
              <FaHome className='text-blue-400 underline underline-offset-8 decoration-sky-600'/>
            </a>
            <a href="#activity" className="text-2xl hover:text-gray-400">
              <FaChartLine />
            </a>
            <a href="#checklist" className="text-2xl hover:text-gray-400">
              <FaClipboardList />
            </a>
            <a href="#saved" className="text-2xl hover:text-gray-400">
              <FaBagShopping />
            </a>
          </nav>
        </div>
      <div className='flex '>
        <a href='#logout' title='logout'><FaOutdent/></a>
      </div>
    </div>
      </div>
    </>
  )
}
