import React from 'react'
import { Link, Outlet } from 'react-router'

const AdminDashBoardLayout = () => {
  return (
    <div className='h-screen w-screen flex  gap-6 p-4  bg-white' >

      <div className='w-[20%] h-full bg-red-200 rounded-2xl flex flex-col gap-3' >
        <div className='flex items-center'>
          <img className='object-contain h-[50px] rounded-2xl' src="" alt="" />
          <p className='text-black text-xl font-bold'>Dashbboard</p>
        </div>
        <nav className='flex flex-col items-start'>
          <Link className='text-blue-500 hover:underline hover:italic' to="/admin-dashboard/courses">Courses</Link>
          <Link className='text-blue-500 hover:underline hover:italic' to="/admin-dashboard/quizes">Quizes</Link>
          <Link className='text-blue-500 hover:underline hover:italic' to="/admin-dashboard/transactions">Transactions</Link>
        </nav>

      </div>
      <div className='w-[80%] h-full' >
        <Outlet/>
      </div>
     </div>
  )
}

export default AdminDashBoardLayout