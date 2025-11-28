import Header from '@/components/component-pages/Header'
import React, { useContext, useState } from 'react'
import hero from '/mainloginImage.png'
import Aside from '@/components/Aside'
import { AuthContext } from '@/context/authContext'


const Landing = () => {
    const [range, setRange]=useState(0)
    const [time,setTime] = useState(new Date().toDateString())
     const { 
        collapseMenu,
        handleCollapseMenu }=useContext(AuthContext);
        console.log(range)
        // let date = new Date().toDateString()
  return (
    <div >
        <Header handleCollapseMenu={handleCollapseMenu}/>
        <Aside collapseMenu={collapseMenu}/>
      <div>
        <img src={hero} alt="hero image" />
      </div>

      <div className='font-bold text-red-500'>
        <div><input type="range" value={range} onChange={(e)=>setRange(e.target.value)}/>{range}</div>
        {time}
      </div>
        <button >Reset</button>
      <div className='my-4 px-3'>
        <h1 className='text-[20px] font-semibold mb-4 '>Learn more, spend less — Black Friday Sale from ₦8,900</h1>
        <input type="text" className='border' />
      </div>
    </div>
  )
}

export default Landing

