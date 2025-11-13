import React from 'react'
import MainRegister from './pages/MainRegister'
import MainLogin from './pages/MainLogin'
import ForgotPassword from './pages/ForgotPassword'
import GeneralDashboard from './pages/GeneralDashboard'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   
     <Routes>
      
      <Route path='/' element={<GeneralDashboard/>}/>
      <Route path='/main-register' element={<MainRegister/> }/>
      <Route path='/main-login' element={<MainLogin/> }/>
      <Route path='/reset-password' element={<ForgotPassword/> }/>
     </Routes>
    
    
  )
}

export default App



 {/* */}
      {/* <MainLogin/> */}
      {/* <ForgotPassword/> */}