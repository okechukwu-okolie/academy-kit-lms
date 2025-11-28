// import React from 'react'
// import MainRegister from './pages/MainRegister'
// import MainLogin from './pages/MainLogin'
// import ForgotPassword from './pages/ForgotPassword'
// import GeneralDashboard from './pages/GeneralDashboard'
// import { Route, Routes } from 'react-router-dom'
// import PageNotFound from './components/component-pages/PageNotFound'
// import Overview from './components/component-pages/InstructorOverview'
// import UserTrainings from './components/component-pages/UserTrainings'
// import Landing from './pages/LAnding'
import DateCounter from './dateCounter/DateCounter'

const App = () => {
  
  return (
  //  <Routes>
  //     {/* <Route path="/" element={<MainRegister />} /> */}
  //     <Route path="/" element={<Landing />} />

  //     <Route path="/general-dashboard" element={<GeneralDashboard />} >
  //       <Route index element={<Overview/>}/>
  //       <Route path='user-trainings' element={<UserTrainings/>}/>
  //     </Route>
  //     <Route path="/main-register" element={<MainRegister />} />
  //     <Route path="/main-login" element={<MainLogin />} />
  //     <Route path="/reset-password" element={<ForgotPassword />} />
  //     <Route path="*" element={<PageNotFound />} />
  //   </Routes>
  <div>
    <DateCounter/>
  </div>
  );
}

export default App



