import React from 'react'
import PrimaryButton from '../components/Primarybutton'
import { useNavigate } from 'react-router'
import AppwriteAccount from '../Appwrite/AppwriteAccount'

const RegisterUserPage = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setpassword] = React.useState("")
  const [conformPassword, setConformPassword] = React.useState("")
    const navigate=useNavigate()
  const appwriteAccount= new AppwriteAccount()



  const registerNewUser = async(event) => {
    try {
      event.preventDefault();

      const newUserData = {
        name,
        email,
        password
      }
      const newuserResponse= await appwriteAccount.createNewUser(newUserData)
      if(newuserResponse?.$id){
        navigate("/login")
      }
      console.log(newuserResponse)
    } catch (error) {
      console.error(error);

    } finally {
      console.log("finally");
    }
  }

  return (
    <div className='h-screen w-screen bg-red-400 flex items-center justify-center'>
      <form className='bg-white p-3 rounded-2xl flex flex-col gap-3' onSubmit={registerNewUser}>
        <input onChange={(event) => setName(event.target.value)} value={ name} type="text" placeholder='enter your name...' required />
        <input onChange={(event) => setEmail(event.target.value)} value={ email} type="email" placeholder='enter your email..' required />
        <input onChange={(event) => setpassword(event.target.value)} value={ password} type="password" placeholder='enter your password..' required />
        <input onChange={(event) => setConformPassword(event.target.value)} value={conformPassword} type="password" placeholder='re-enter your password..' required />
<PrimaryButton type="submit">
  Register
</PrimaryButton>

      </form>
      <p>Already an User?
        <Link to="/login" className="text-blue-400">Log</Link>
      </p>
    </div>
  )
}

export default RegisterUserPage
