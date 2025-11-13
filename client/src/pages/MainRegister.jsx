import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Switch } from "@/components/ui/switch"
import {  EyeIcon } from "lucide-react";
import React from "react";
import mainRegisterImage from '/mainRegisterImage.png'

const MainRegister = () => {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <section className="flex flex-col">
        <section className="flex flex-col justify-center items-center tracking-tight text-sm/normal">
          <h1 className="text-3xl font-extrabold ">
            academy<span className="text-teal-300">kit</span>
          </h1>
          <h1 className="mb-2 text-2xl">Register</h1>
        </section>
        <div className="flex flex-col">
          <Input type ='text'placeholder="Input First name here....." className='w-80 mb-3'/>
          <Input type ='text' placeholder="Input last name here......"  className='w-80 mb-3'/>
          <Input type ='email' placeholder="Input email here......"  className='w-80 mb-3'/>
           <div className="flex items-center">
            <Input type ='password' placeholder="Input password here......" className='mb-3'/><EyeIcon/>
           </div>
            <Button className='bg-teal-300 rounded-3xl w-80'>Create an account</Button>
           <div className="flex gap-2 mt-3">
            <Switch/>
            <p className="text-[12px]">Do you agree withh all the <a href="http://www.google.com" className="underline">terms and conditions</a></p>
           </div>

           <div className="flex justify-center gap-2 mt-12 w-80">
            
            <p className="text-[13px]">Already have an account? <a href="http://www.youtube.com" className="underline">log in</a></p>
           </div>
           
        </div>
      </section>
      <section className="hidden lg:block">
        <img src={mainRegisterImage} alt="" />
      </section>
    </main>
  );
};

export default MainRegister;
