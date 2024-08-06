import React from 'react'
import userimgcomp from '../components/img/persontwo.jpg';
import {  FaStarHalf } from 'react-icons/fa';

export default function CustumerFeedback() {
  return (
    <div>
        <div className='w-full  bg-slate-800 px-6 py-3 rounded-lg shadow-md'>
            <h3 className='font-sans text-lg font-bold text-white mb-2 md:mb-0'>Customer's Feedback</h3>
            <div className='overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full h-[24.5rem] md:h-[25rem] lg:h-[25.3rem]	xl:h-[24.2rem]'>
              <div className='py-2 border-b-[1px] border-solid border-neutral-50'>
                <div className='flex flex-row items-center'>
                  <img src={userimgcomp} alt="compoimg" className='w-8 h-8 mr-2 rounded-full'/>
                  <p className='font-sans text-white text-md font-medium'>
                      Jenny wilson
                  </p>
                </div>
                <div>
                  <span className='flex items-center'>⭐⭐⭐⭐<FaStarHalf className='text-yellow-500 '/></span>
                </div>
                <p className='font-sans text-left text-xs text-white font-sm '>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
              </div>

              <div className='py-2 border-b-[1px] border-solid border-neutral-50'>
                <div className='flex flex-row items-center'>
                  <img src={userimgcomp} alt="compoimg" className='w-8 h-8 mr-2 rounded-full'/>
                  <p className='font-sans text-white text-md font-medium'>
                      Damaine rusole
                  </p>
                </div>
                <div>
                  <span className='flex items-center'>⭐⭐⭐<FaStarHalf className='text-yellow-500 '/></span>
                </div>
                <p className='font-sans text-left text-xs text-white font-sm '>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
              </div>


              <div className='py-2 border-b-[1px] border-solid border-neutral-50'>
                <div className='flex flex-row items-center'>
                  <img src={userimgcomp} alt="compoimg" className='w-8 h-8 mr-2 rounded-full'/>
                  <p className='font-sans text-white text-md font-medium'>
                      Devon Lane
                  </p>
                </div>
                <div>
                  <span className='flex items-center'>⭐⭐<FaStarHalf className='text-yellow-500 '/></span>
                </div>
                <p className='font-sans text-left text-xs text-white font-sm '>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
              </div>

              <div className='py-2 border-b-[1px] border-solid border-neutral-50'>
                <div className='flex flex-row items-center'>
                  <img src={userimgcomp} alt="compoimg" className='w-8 h-8 mr-2 rounded-full'/>
                  <p className='font-sans text-white text-md font-medium'>
                      Ryan Renlold
                  </p>
                </div>
                <div>
                  <span className='flex items-center'>⭐⭐⭐⭐<FaStarHalf className='text-yellow-500 '/></span>
                </div>
                <p className='font-sans text-left text-xs text-white font-sm '>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}
