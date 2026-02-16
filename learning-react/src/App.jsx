import { useEffect } from 'react'
import TodoApp from './components/TodoApp'
import AppwriteAccount from './Appwrite/AppwriteAccount'
import useUserStore from './stores/useUserStore';
import { Link } from 'react-router';


function App() {
  const appWriteAccount = new AppwriteAccount();
  const setUser = useUserStore((state) => state.setUser)

  const getCurrentUser = async () => {
    try {
      const currentUser = await appWriteAccount.getCurrentUser();
      console.log(currentUser)
      setUser(currentUser);

    } catch (error) {
      console.error('error')
    }
  }
  useEffect(() => {
    getCurrentUser();
  }, [])
  return (
    <>
     <nav>
      <Link to="/profile">myProfile</Link>
     </nav>
     <h1>homepage</h1>
    </>
  )
}

export default App
