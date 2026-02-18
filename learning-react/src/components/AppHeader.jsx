import React from 'react'
import useUserStore from '../stores/useUserStore'
import { Link } from 'react-router'

const AppHeader = () => {
  const currentUser=useUserStore((state)=>state.user)
  return (
    <header className='h[8vh]'>

     <nav className='bg-rose-200 rounded-b-md p-3 flex items-center  gap-3'>
      <Link to="/" className='text-blue-500 hover:underline hover:italic'>Home</Link>
      <Link to="/todo" className='text-blue-500 hover:underline hover:italic'>Todo App</Link>
      <Link to="/profile" className='text-blue-500 hover:underline hover:italic'>myProfile</Link>
      {/* {(currentUser?.$id && currentUser?.labels?.incudes("admin"))&&<Link to="/admin-dashboard" className='text-green-500'>admin </Link>} */}
      {(currentUser?.$id && currentUser?.labels?.includes("admin")) && <Link to="/admin-dashboard" className="text-blue-600 hover:underline hover:italic">Admin Dashboard</Link>  }

     </nav>
      </header>
  )
}

export default AppHeader 