import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import {createBrowserRouter}from'react-router'
import { RouterProvider } from 'react-router/dom'
import ProfilePage from './pages/ProfilePage.jsx'
import Homepage from './pages/Homepage.jsx'
import RegisterUserPage from './pages/registerUserPage.jsx'
import Loginpage from './pages/Loginpage.jsx'

const router=createBrowserRouter([
  {
  path:"/",
  element:<App/>
  },

  {
    path:"/profile",
    element:<ProfilePage/>
  },
  {
    path:"/register",
    element:<RegisterUserPage/>
  },
  {
    path:"/login",
    element:<Loginpage/>
  }

])

  const rootDiv=document.getElementById('root');
  createRoot(rootDiv).render(<RouterProvider router={router}/>)


