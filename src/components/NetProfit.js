import React from 'react'
import gainimg from '../components/img/profit.png'
import CircleProgress from './CircleProgress'

export default function NetProfit() {
  return (
    <div>
        <div className='p-3 bg-slate-800 rounded-lg'>
            <div className='flex items-center'>
            <div className='w-3/6'>
            <div className='flex flex-col '>
            <h4 className='text-sm font-sans font-small text-white'>Net Profit</h4>
                <p className='font-sans text-xl text-white font-bold py-4'>$ 6759.25</p>
                <div className='flex items-center'>
                    <img src={gainimg} alt="prfit" className='w-5 h-5'/>
                    <p className='font-sans text-sm  font-medium text-lime-400 pl-1'>3%</p>
                </div>
            </div>
               
            </div>
            <div className='w-3/6'>
                <CircleProgress progress={70}/>
                <p className='font-sans text-[10px] font-small text-white text-center'><sup>*</sup> the values here has been rounded off</p>
            </div>
            </div>
           
        </div>
    </div>
  )
}
