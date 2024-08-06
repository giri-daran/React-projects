import React from 'react';
import userimg from "../components/img/user.jpg";
import perimg from "../components/img/personone.jpg";
import pertwoimg from "../components/img/persontwo.jpg";
import perthreimg from "../components/img/personthree.jpg";
import perfourimg from "../components/img/personfour.jpg";
import perfiveimg from "../components/img/personfive.jpg";


export default function RecentOrders() {
  return (
    <div>
        <div className="w-full  bg-slate-800 px-6 py-3 rounded-lg shadow-md">
        <h2 className='font-sans text-lg font-bold text-white'>Recent Orders</h2>
        <table className="table-fixed">
          <thead>
            <tr className='font-sans text-white text-left text-sm md:text-md font-large '>
              <th className='w-3/12 py-3'>Customer</th>
              <th className='w-3/12 py-3'>Order No.</th>
              <th className='w-3/12 py-3'>Amount</th>
              <th className='w-3/12 py-3'>Status</th>
            </tr>
          </thead>
          <tbody className='font-sans text-white text-left text-[10px] sm:text-xs md:text-sm font-small'>
            <tr className=' border-t-[1px] border-gray-50	border-t-solid'>
              <td className='flex items-center w-3/12 md:w-full py-3'><img src={userimg} alt='one' className='w-8 h-8 rounded-full mr-1 sm:mr-2'/>Wade Warren</td>
              <td className='w-3/12 md:w-4/12 py-3'>1546428</td>
              <td className='w-3/12 md:w-4/12 py-3'>$124.00</td>
              <td className='w-3/12 md:w-4/12 py-3 pr-3'><span className='border-[1px] border-solid border-lime-700 rounded-full px-1 bg-lime-800 text-lime-400 font-medium'>Delivered</span></td>
            </tr>
            <tr className='border-t-[1px] border-gray-50	border-t-solid'>
            <td className='flex items-center w-3/12 md:w-full py-3'><img src={perimg} alt='tw' className='w-8 h-8 rounded-full mr-1 sm:mr-2'/>Jane Cooperr</td>
              <td className='w-3/12 py-3'>4890454</td>
              <td className='w-3/12 py-3'>$386.56</td>
              <td className='w-3/12 py-3 pr-3'><span className='border-[1px] border-solid border-lime-700 rounded-full px-1 bg-lime-800 text-lime-400 font-medium'>Delivered</span></td>
            </tr>
            <tr className='border-t-[1px] border-gray-50	border-t-solid'>
            <td className='flex items-center w-3/12 md:w-full py-3'><img src={pertwoimg} alt='thr' className='w-8 h-8 rounded-full mr-1 sm:mr-2'/>Guy Hawkins</td>
              <td className='w-3/12 py-3'>8896541</td>
              <td className='w-3/12 py-3'>$45.56</td>
              <td className='w-3/12 py-3 pr-3'><span className='border-[1px] border-solid border-red-700 rounded-full px-1 bg-red-800 text-red-400 font-medium'>Cancelled</span></td>
            </tr>
            <tr className='border-t-[1px] border-gray-50	border-t-solid'>
            <td className='flex items-center w-3/12 md:w-full py-3'><img src={perthreimg} alt='fr' className='w-8 h-8 rounded-full mr-1 sm:mr-2'/>Kristen Watson</td>
              <td className='w-3/12 py-3'>7896567</td>
              <td className='w-3/12 py-3'>$45.56</td>
              <td className='w-3/12 py-3 pr-3'><span className='border-[1px] border-solid border-red-700 rounded-full px-1 bg-red-800 text-red-400 font-medium'>Pending</span></td>
            </tr>
            <tr className='border-t-[1px] border-gray-50	border-t-solid'>
            <td className='flex items-center w-3/12 md:w-full py-3'><img src={perfourimg} alt='fve' className='w-8 h-8 rounded-full mr-1 sm:mr-2'/>Codey Fisher</td>
              <td className='w-3/12 py-3'>7896501</td>
              <td className='w-3/12 py-3'>$145.56</td>
              <td className='w-3/12 py-3 pr-3'><span className='border-[1px] border-solid border-lime-700 rounded-full px-1 bg-lime-800 text-lime-400 font-medium'>Delivered</span></td>
            </tr>
            <tr className='border-t-[1px] border-gray-50	border-t-solid'>
            <td className='flex items-center w-3/12 md:w-full py-3'><img src={perfiveimg} alt='sx' className='w-8 h-8 rounded-full mr-1 sm:mr-2'/>Savvanah Nyugan</td>
              <td className='w-3/12 py-3'>7876541</td>
              <td className='w-3/12 py-3'>$245.56</td>
              <td className='w-3/12 py-3 pr-3'><span className='border-[1px] border-solid border-lime-700 rounded-full px-1 bg-lime-800 text-lime-400 font-medium'>Delivered</span></td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
  )
}
