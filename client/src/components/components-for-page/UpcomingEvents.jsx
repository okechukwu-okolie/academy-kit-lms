import React from 'react'
import { Button } from '../ui/button'



const UpcomingEvents = () => {
  return (
    <div className='flex flex-col gap-2 border rounded-[10px] p-2 w-[175px]'>
      <h1 className='font-semibold text-[20px]'>Assignments</h1>
      <p className='text-[14px] max-w-[170px]'>Effective Communication Skill</p>
      <Button variant='outline' className='rounded-4xl bg-none border-blue-500 cursor-pointer'>Assignment</Button>
      <p>June 25, 2024</p>
    </div>
  )
}

export default UpcomingEvents
