import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const ForgotPassword = () => {
  return (
    <main className="flex flex-col  min-h-screen justify-center items-center ">
       <div className='w-80'>
         <header className='text-[29px] font-medium text-center mb-5'>Forgot your password?</header>
        <p className='text-[14px] text-justify mb-5'>
            Enter the email address associated with your account and we’ll send you a link to reset the password. 
        </p>
        <Input placeholder='input email here...'className='mb-3'/>
        <p className='text-[14px] text-justify mt-5'>
            If your email address exists in our database, and you haven't requested a password reset in the last 30 minutes, you will receive a password recovery link at your email address in a few minutes.
        </p>
            <Button className='bg-teal-300 rounded-3xl w-80 my-3'>Send code</Button>
       </div>
    </main>
  )
}

export default ForgotPassword
