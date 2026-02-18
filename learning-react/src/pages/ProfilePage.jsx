
import { useNavigate } from 'react-router';
import useUserStore from '../stores/useUserStore'
import AppwriteAccount from '../Appwrite-services/AppwriteAccount';

const ProfilePage = () => {
  const currentUser=useUserStore((state)=>state.user)
  console.log(currentUser)
  const navigate=useNavigate();
  const appWriteAccount=new AppwriteAccount();

  const handleLogout=async()=>{
    try {
      const result=await appWriteAccount.logOutCurrentUser();
      console.log(result);
      if(!result?.message){
        navigate("/login")
      }

    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      {currentUser?.name} <br />
      <button className='text-white hover:italic hover:underline bg-red-500 p-3 border-3' onClick={handleLogout}>Logout</button>
      
    </div>
  )
}

export default ProfilePage


