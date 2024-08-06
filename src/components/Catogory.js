import React from 'react'
import goalsimg from '../components/img/goal.png'
import menusimg from '../components/img/dish.png'
import maindishgimg from '../components/img/maindish.png'
import {  FaChevronCircleRight } from 'react-icons/fa'
export default function Catogory() {
  return (
    <div className='py-4 px-5 bg-slate-800 rounded-lg w-full'>
        <div className='flex flex-row items-center justify-between py-3 first:pt-0 last:pb-0 '>
            <div className='flex items-center '>
                <img src={goalsimg} alt="goal" className='w-16 h-16 ' />
                <p className='font-sans text-md font-small pl-3 text-white cursor-pointer'>Goals</p>
            </div>
            <FaChevronCircleRight className='font-sans text-lg text-white bg-neutral-600 rounded-[40px] cursor-pointer'/>
        </div>

        <div className='flex flex-row items-center justify-between py-3  first:pt-0 last:pb-0'>
            <div className='flex items-center '>
                <img src={menusimg} alt="menu" className='w-16 h-16 ' />
                <p className='font-sans text-md font-small pl-3 text-white cursor-pointer'>Popular Dishes</p>
            </div>
            <FaChevronCircleRight className='font-sans text-lg text-white bg-neutral-600 rounded-[40px] cursor-pointer'/>
        </div>

        <div className='flex flex-row items-center justify-between py-3  first:pt-0 last:pb-0'>
            <div className='flex items-center '>
                <img src={maindishgimg} alt="maindish" className='w-16 h-16 '/>
                <p className='font-sans text-md font-small pl-3 text-white cursor-pointer'>Menus</p>
            </div>
            <FaChevronCircleRight className='font-sans text-lg text-white bg-neutral-600 rounded-[40px] cursor-pointer'/>
        </div>
    </div>
  )
}
