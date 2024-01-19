import { createContext, useContext, useState } from 'react'
import { CURRENT_USER } from '../../constants'
import { SignIn } from '../../types/user.type'

const UserContext = createContext<any>(null)

export const UserProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const user = JSON.parse(localStorage.getItem(CURRENT_USER))
    return user || null
  })

  const handleSignin = (user: SignIn) => {
    setCurrentUser(user)
    localStorage.setItem(CURRENT_USER, JSON.stringify(user))
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.clear()
  }

  return (
    <UserContext.Provider value={{ currentUser, handleSignin, handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => {
  const value = useContext(UserContext)
  return value
}

// <Provider>< App /></Provider>
