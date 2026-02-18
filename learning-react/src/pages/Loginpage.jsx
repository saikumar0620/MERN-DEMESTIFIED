import { useState } from "react"
import { Link, useNavigate } from "react-router"


import PrimaryButton from "../components/Primarybutton"
import AppwriteAccount from "../Appwrite-services/AppwriteAccount"
import { Bounce, toast } from "react-toastify"

const Loginpage = () => {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")


  const appwriteAccount = new AppwriteAccount()
  const navigate = useNavigate()

  const loginUser = async (event) => {
    try {
      event.preventDefault();

      const loginData = {
        email,
        password
      }
      const loginResponse = await appwriteAccount.logInWithEmailAndPassword(loginData)
      console.log(loginResponse)
      navigate("/")
      toast.error('user login successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

    } catch (error) {
      console.error(error);


    } finally {
      console.log("finally");
    }
  }

  return (
    <div className='h-screen w-screen bg-red-400 flex items-center justify-center'>
      <form className='bg-white p-3 rounded-2xl flex flex-col gap-3' onSubmit={loginUser}>

        <input onChange={(event) => setEmail(event.target.value)} value={email} type="email" placeholder='enter your email..' required />
        <input onChange={(event) => setpassword(event.target.value)} value={password} type="password" placeholder='enter your password..' required />

        <PrimaryButton type="submit">
          Login
        </PrimaryButton>
        <p>Not an User?
          <Link to="/register" className="text-blue-400 flex-col hover:underline hover:italic">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Loginpage




