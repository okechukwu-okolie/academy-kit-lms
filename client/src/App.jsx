import React from 'react'
import MainRegister from './pages/MainRegister'
import MainLogin from './pages/MainLogin'
import ForgotPassword from './pages/ForgotPassword'
import GeneralDashboard from './pages/GeneralDashboard'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './components/page-components/PageNotFound'
import Overview from './components/page-components/Overview'
import UserTrainings from './components/page-components/UserTrainings'

const App = () => {
  
  return (
    <Routes>
      <Route
        path="/"
       element={<MainRegister />} />

      <Route path="/general-dashboard" element={<GeneralDashboard />} >
        <Route index element={<Overview/>}/>
        <Route path='user-trainings' element={<UserTrainings/>}/>
      </Route>
      <Route path="/main-register" element={<MainRegister />} />
      <Route path="/main-login" element={<MainLogin />} />
      <Route path="/reset-password" element={<ForgotPassword />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App



