import { create } from "zustand"

const useUserStore = create ((set) => ({
  User:{},
  setUser:(currentUser)=>set({User:currentUser})
}))

export default useUserStore;