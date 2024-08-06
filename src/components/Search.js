import React from 'react'

export default function Search() {
  return (
    <div className='mb-3 md:mb-0'>

        <form>
            <input 
                type='search'
                placeholder='Search'
                className='px-2 py-1 text-md font-medium font-sans 
                text-slate-200 border-[1px] border-solid border-slate-700
                rounded-lg bg-slate-700	 
                focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600'

            />
        </form>
    </div>
  )
}
