



import React from 'react'
import useUserStore from '../stores/useUserStore'
import { Link } from 'react-router'

const AppHeader = () => {
  const currentUser = useUserStore((state) => state.user)

 return (
  <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      
      <div className="flex items-center gap-10">
        <Link 
          to="/" 
          className="group flex items-center gap-2 text-xl font-black tracking-tight"
        >
          <span className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent transition-opacity group-hover:opacity-80">
            St. Learner
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/50 bg-slate-100/50 p-1 md:flex">
          <Link 
            to="/" 
            className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-blue-600 hover:shadow-sm active:scale-95"
          >
            Home
          </Link>
          <Link 
            to="/todo" 
            className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-blue-600 hover:shadow-sm active:scale-95"
          >
            Todo
          </Link>
          <Link 
            to="/counter" 
            className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-blue-600 hover:shadow-sm active:scale-95"
          >
            Counter
          </Link>
          <Link 
            to="/profile" 
            className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-blue-50 active:scale-95"
          >
            Profile
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        {currentUser?.$id && currentUser?.labels?.includes("admin") && (
          <Link 
            to="/admin-dashboard" 
            className="hidden rounded-lg bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-700 ring-1 ring-inset ring-amber-700/10 transition-colors hover:bg-amber-100 sm:block"
          >
            Admin
          </Link>
        )}
        
        {!currentUser?.$id ? (
          <Link 
            to="/login" 
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/35 active:scale-[0.98]"
          >
            Sign In
          </Link>
        ) : (
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 p-0.5 shadow-inner">
             <div className="h-full w-full rounded-full bg-white transition-opacity hover:opacity-90" />
          </div>
        )}
      </div>

    </div>
  </header>
);
  
}
 export default AppHeader