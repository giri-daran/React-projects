import React from 'react'
import './MainApp.css';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';

export default function MainApp() {
  return (
    <>
        <div className='bg-slate-300'>
            <main className=' py-5'>
                <div className='container mx-auto px-2 md:px-3 lg:px-3 rounded-lg'>
                    <div className='flex flex-wrap'>
                        <div className='w-1/12 sm:w-2/12 md:4/12 lg:w-1/12 grow-0 shrink-0 basis-auto'>
                            <Menu/>
                        </div>
                        <div className='w-11/12 sm:w-10/12 md:8/12 lg:w-11/12 grow-0 shrink-0 basis-auto'>
                            <div className='bg-slate-800 rounded-tr-[30px] rounded-br-[30px]'>
                                <Header/>
                                <Dashboard/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div> 
    </>
    
  )
}
