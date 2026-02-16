
import useUserStore from '../stores/useUserStore'

const ProfilePage = () => {
  const current=useUserStore((state)=>state.User)
  return (
    <div>
      {current.name}
    </div>
  )
}

export default ProfilePage


