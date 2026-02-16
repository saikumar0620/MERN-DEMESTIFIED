import { useState } from "react"
import { useNavigate } from "react-router"


import PrimaryButton from "../components/Primarybutton"
import AppwriteAccount from "../Appwrite/AppwriteAccount"

const Loginpage = () => {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")


  const appwriteAccount= new AppwriteAccount()
  const navigate=useNavigate()

  const loginUser = async(event) => {
    try {
      event.preventDefault();

      const loginData = {
        email,
        password
      }
      const loginResponse=await appwriteAccount.logInWithEmailAndPassword(loginData)
      console.log(loginResponse)
      navigate("/")
      
    } catch (error) {
      console.error(error);

    } finally {
      console.log("finally");
    }
  }

  return (
    <div className='h-screen w-screen bg-red-400 flex items-center justify-center'>
      <form className='bg-white p-3 rounded-2xl flex flex-col gap-3' onSubmit={loginUser}>

        <input onChange={(event) => setEmail(event.target.value)} value={ email} type="email" placeholder='enter your email..' required />
        <input onChange={(event) => setpassword(event.target.value)} value={ password} type="password" placeholder='enter your password..' required />

<PrimaryButton type="submit">
  Login
</PrimaryButton>
      </form>
    </div>
  )
}

export default Loginpage




