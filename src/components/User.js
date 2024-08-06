import React from 'react'
import user from "../components/img/user.jpg"
export default function User() {
  return (
    <div className='h-[fit-content]'>
        <img src={user} alt='user' className='rounded-full w-10 h-10 cursor-pointer'/>
    </div>
  )
}
