import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import ProfilePage from './pages/ProfilePage.jsx'
import TodoAppPages from './components/TodoAppPages.jsx'
import Loginpage from './pages/Loginpage.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';    

import RegisterUserPage from './pages/registerUserPage.jsx'
import Homepage from './pages/Homepage.jsx'
import AdminDashBoardLayout from './pages/Admin/AdminDashBoardLayout.jsx'
import Overview from './pages/Admin/Overview.jsx'
import Admincourses from './pages/Admin/Admincourses.jsx'
import AdminQuizes from './pages/Admin/AdminQuizes.jsx'
import AdminTransactions from './pages/Admin/AdminTransactions.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "profile",
        element: <ProfilePage />
      },
      {
        path: "todo",
        element: <TodoAppPages />
      },
    ]
  },


  {
    path: "/admin-dashboard",
    element: <AdminDashBoardLayout />,
      children:[
        {
          index:true,
          element:<Overview/>
        },
        {
         path:"courses",
          element:<Admincourses/>
        },
        {
         path:"quizes",
          element:<AdminQuizes/>
        },
        {
         path:"transactions",
          element:<AdminTransactions/>
        },
      ]
  },
  {
    path: "/register",
    element: <RegisterUserPage />
  },
  {
    path: "/login",
    element: <Loginpage />
  }

])

const rootDiv = document.getElementById('root');
createRoot(rootDiv).render(
  <>

    <RouterProvider router={router} />
    <ToastContainer />


  </>
)


