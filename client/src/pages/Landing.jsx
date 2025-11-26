import Header from '@/components/component-pages/Header'
import React, { useContext } from 'react'
import hero from '../../public/mainloginImage.png'
import Aside from '@/components/Aside'
import { AuthContext } from '@/context/authContext'

const Landing = () => {
     const { 
        collapseMenu,
        handleCollapseMenu }=useContext(AuthContext);
  return (
    <div>
        <Header handleCollapseMenu={handleCollapseMenu}/>
        <Aside collapseMenu={collapseMenu}/>
      <div>
        <img src={hero} alt="hero image" />
      </div>

      <div className='my-4 px-3'>
        <h1 className='text-[20px] font-semibold mb-4 '>Learn more, spend less — Black Friday Sale from ₦8,900</h1>
        <input type="text" className='border' />
      </div>
    </div>
  )
}

export default Landing

