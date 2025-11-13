import React from 'react'
import MainRegister from './pages/MainRegister'
import MainLogin from './pages/MainLogin'
import ForgotPassword from './pages/ForgotPassword'
import GeneralDashboard from './pages/GeneralDashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      
      <Route path='/' element={<GeneralDashboard/>}/>
      <Route path='/main-register' element={<MainRegister/> }/>
     </Routes>
     </BrowserRouter>
    
  )
}

export default App



 {/* */}
      {/* <MainLogin/> */}
      {/* <ForgotPassword/> */}