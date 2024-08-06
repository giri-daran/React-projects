import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainApp from './MainApp'
import Dashboard from './Dashboard'
import Activity from './Activity'
import RecentOrders from './RecentOrders'
import Catogory from './Catogory'


const router = createBrowserRouter([
    {
        element: <MainApp/>,
        children:[
            {
                path:'/',
                element:<Dashboard/>,
            },
            {
                path:'/activity',
                element:<Activity/>,
            },
            {
                path:'/orders',
                element:<RecentOrders/>,
            },
            {
                path:"/catogory",
                element:<Catogory/>
            }
        ]
    }
])

export default function MainRouter() {
  return (
    <RouterProvider router={router}/>
  )
}
