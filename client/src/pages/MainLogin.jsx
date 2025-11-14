import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import {  EyeIcon } from "lucide-react";
import React, { useContext } from "react";
import google from '/google-icon.png'
import microsoft from '/microsoft-icon.png'
import mainLoginImage from '/mainLoginImage.png'
import { AuthContext } from "@/context/authContext";


const MainLogin = () => {
  const {handleSubmitLogin} = useContext(AuthContext)
  return (
    <main className="flex min-h-screen justify-center items-center">
      <form onSubmit={handleSubmitLogin} className="flex flex-col">
        <section className="flex flex-col justify-center items-center tracking-tight text-sm/normal">
          <h1 className="text-3xl font-extrabold ">
            academy<span className="text-teal-300">kit</span>
          </h1>
          <h1 className="mb-2 text-3xl ">Welcome</h1>
        </section>
        <div className="flex flex-col">
         
          <Input type ='email' placeholder="Input email here......"  className='w-80 mb-3'/>

           <div className="flex items-center">
            <Input type ='password' placeholder="Input password here......" className='mb-3'/><EyeIcon/>
           </div>

            <Button className='bg-teal-300 rounded-3xl w-80'>Login</Button>

           <div className="flex justify-center gap-2 w-80">
             <a href="http://www.google.com" className="underline text-[12px] mt-3">Forgot Password?</a>
           </div>

           <div className="flex flex-col justify-center items-center w-80 mt-5">
            <p>or log in with</p>
            <div className="flex gap-5">
               <a href="http://www.google.com"> <img src={google} alt="" className="cursor-pointer"/></a>
                <a href="http://www.youtube.com"><img src={microsoft} alt="" className="cursor-pointer"/></a>
            </div>
           </div>

           <div className="flex justify-center gap-2 mt-12 w-80">
            <p className="text-[13px]">Do not have an account? <a href="http://www.youtube.com" className="underline">Sign up</a></p>
           </div>
           
        </div>
      </form>
      <section className="hidden lg:block">
        <img src={mainLoginImage} alt="" />
      </section>
    </main>
  );
};

export default MainLogin;
