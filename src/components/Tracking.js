import React from 'react'
import ordersimg from '../components/img/Total-order.png'
import delveredimg from '../components/img/delivered.png'
import cancledimg from '../components/img/cancelled.png'
import revenueimg from '../components/img/revenue.png'
import gainimg from '../components/img/profit.png'
import decreseimg  from '../components/img/loss.png'

export default function Tracking() {
  return (
    <>
         <div className='flex flex-col md:flex-row'>
            <div className='p-3 bg-slate-800 rounded-lg mr-0 md:mr-2 mb-2 md:mb-0 last:mb-0 last:mr-0 w-full'>
                <img src={ordersimg} alt='orders' className='w-10 h-10 '/>
                <p className='mt-1 font-sans text-md text-white font-semibold'>Total Orders</p>
                <div className='flex flex-column justify-between items-end font-sans'>
                    <p className='text-xl text-white font-bold mt-2'>75</p>
                    <span className='flex '>
                        <img src={gainimg} alt="prfit" className='w-5 h-5'/>
                        <p className='font-sans text-sm  font-medium text-lime-400 pl-1'>3%</p>
                    </span>
                </div>
            </div>

            <div className='p-3 bg-slate-800 rounded-lg mr-0 md:mr-2 mb-2 md:mb-0 last:mb-0 last:mr-0 w-full'>
                <img src={delveredimg} alt='orders' className='w-10 h-10 '/>
                <p className='mt-1 font-sans text-md text-white font-semibold'>Total Delivered</p>
                <div className='flex flex-column justify-between  items-end font-sans'>
                    <p className='text-xl text-white font-bold mt-2'>70</p>
                    <span className='flex '>
                        <img src={decreseimg} alt="prfit" className='w-5 h-5'/>
                        <p className='font-sans text-sm  font-medium text-red-400 pl-1'>3%</p>
                    </span>
                </div>
            </div>

            <div className='p-3 bg-slate-800 rounded-lg mr-0 md:mr-2 mb-2 md:mb-0 last:mb-0 last:mr-0 w-full'>
                <img src={cancledimg} alt='orders' className='w-10 h-10 '/>
                <p className='mt-1 font-sans text-md text-white font-semibold'>Total Cancelled</p>
                <div className='flex flex-column justify-between items-end font-sans'>
                    <p className='text-xl text-white font-bold mt-2'>05</p>
                    <span className='flex '>
                        <img src={gainimg} alt="prfit" className='w-5 h-5'/>
                        <p className='font-sans text-sm text-green font-medium text-lime-400 pl-1'>3%</p>
                    </span>
                </div>
            </div>

            <div className='p-3 bg-slate-800 rounded-lg mr-0 md:mr-2 mb-2 md:mb-0 last:mb-0 last:mr-0 w-full'>
                <img src={revenueimg} alt='orders' className='w-10 h-10 '/>
                <p className='mt-1 font-sans text-md text-white font-semibold'>Total Revenue</p>
                <div className='flex flex-column justify-between items-end font-sans'>
                    <p className='text-xl text-white font-bold mt-2'>$12k</p>
                    <span className='flex '>
                        <img src={decreseimg} alt="prfit" className='w-5 h-5'/>
                        <p className='font-sans text-sm text-green font-medium text-red-400 pl-1'>3%</p>
                    </span>
                </div>
            </div>
        </div>
    </>
   
  )
}
