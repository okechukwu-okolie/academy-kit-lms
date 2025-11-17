import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Switch } from "@/components/ui/switch";
import { Eye, EyeClosed, EyeIcon } from "lucide-react";
import React, { useContext } from "react";
import mainRegisterImage from "/mainRegisterImage.png";
import { AuthContext } from "@/context/authContext";

const MainRegister = () => {
  const { registerInfo, 
           setRegisterInfo,
          collapseMenu,
          handleCollapseMenu,
          handleSubmitRegister,
          Error,
          switchControl,
           setSwitchControl
        }
         = useContext(AuthContext)

        //  console.log(registerInfo)

        const handleSwitch = ()=>{
          setSwitchControl(!switchControl)
        }
  
  return (
    <main className="flex min-h-screen justify-center items-center">
      <form onSubmit={handleSubmitRegister}>
        <section className="flex flex-col">
        <section className="flex flex-col justify-center items-center tracking-tight text-sm/normal">
          <h1 className="text-3xl font-extrabold ">
            academy<span className="text-teal-300">kit</span>
          </h1>
          <h1 className="mb-2 text-2xl">Register</h1>
        </section>
        <div className="flex flex-col">
          <Input
            type="text"
            placeholder="Input First name here....."
            className="w-80 mb-3"
            value={registerInfo.registeredFirstName}
            onChange={(e)=>setRegisterInfo({...registerInfo, registeredFirstName : e.target.value })}
            />
            
          <Input
            type="text"
            placeholder="Input last name here......"
            className="w-80 mb-3"
            value={registerInfo.registeredLastName}
            onChange ={(e)=>setRegisterInfo({...registerInfo, registeredLastName : e.target.value})}
          />
          <Input
            type="email"
            placeholder="Input email here......"
            className="w-80 mb-3"
            value={registerInfo.email}
            onChange = {(e)=>setRegisterInfo({...registerInfo, email:e.target.value})}
          />
          <div className="flex justify-center gap-1 items-center">
            <Input
              type={collapseMenu ? "text" : "password"}
              placeholder="Input password here......"
              className="mb-3"
              value={registerInfo.password}
              onChange={(e)=>setRegisterInfo({...registerInfo, password: e.target.value})}
            />
            {collapseMenu ? <EyeClosed onClick={handleCollapseMenu}/> :<EyeIcon onClick={handleCollapseMenu}/>}
          </div>

          <div className="flex gap-2 mt-3">
            <Switch 
            onCheckedChange={handleSwitch}
            checked = {switchControl ? true:false}
            />
            <p className="text-[12px]">
              Do you agree withh all the{" "}
              <a href="http://www.google.com" className="underline">
                terms and conditions
              </a>
            </p>
          </div>

          <Button className="bg-teal-300 rounded-3xl w-80 mt-7" type='submit'>
            Create an account
          </Button>



          <div className="flex justify-center gap-2 mt-12 w-80">
            <p className="text-[13px]">
              Already have an account?{" "}
              <a href="http://www.youtube.com" className="underline">
                log in
              </a>
            </p>
          </div>
        </div>
      {Error && <div className="text-red-500 font-semibold text-sm text-center w-80 mt-6">Please all the provided field and accept the terms and conditions before creating your account</div>}
      </section>
      <section className="hidden lg:block">
        <img src={mainRegisterImage} alt="" />
      </section>
      </form>
    </main>
  );
};

export default MainRegister;
