import React from 'react'
import { useLocation } from 'react-router-dom'

const AuthComponent = ({authenticate,children,role}) => {
    const location = useLocation()
   
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthComponent
