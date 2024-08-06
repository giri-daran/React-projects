import React from 'react'
import Tracking from './Tracking'
import NetProfit from './NetProfit'
import Activity from './Activity'
import Catogory from './Catogory'
import RecentOrders from './RecentOrders'
import CustumerFeedback from './CustumerFeedback'

export default function Dashboard() {
  return (
    <div className='px-3 py-3 bg-slate-900 rounded-br-[30px]'>
        <h2 className='font-sans text-xl font-medium text-white'>Dashboard</h2>
        <div className='pt-5 flex flex-col md:flex-row'>
          <div className='w-full md:w-8/12 mx-auto md:mr-2 lg:mr-3'>
          <Tracking/>
          </div>
          <div className='w-full md:w-4/12 mx-auto mt-3 md:mt-0 md:ml-2 lg:ml-3'>
            <NetProfit/>
          </div>
        </div>
        <div className='pt-5 flex flex-col md:flex-row'>
          <div className='w-full md:w-8/12 mx-auto md:mr-3'>
            <Activity/>
          </div>
          <div className='w-full md:w-4/12 mx-auto mt-3 md:mt-0 md:ml-3'>
            <Catogory/>
          </div>
        </div>

        <div className='pt-5 flex flex-col md:flex-row'>
          <div className='w-full md:w-8/12 mx-auto md:mr-3'>
              <RecentOrders/>
          </div>
          <div className='w-full md:w-4/12 mx-auto mt-3 md:mt-0 md:ml-3'>
              <CustumerFeedback/>
          </div>
        </div>
    </div>
  )
}
