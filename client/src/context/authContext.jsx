import { mainLogin, mainRegister } from "@/config/config";
import { useState, createContext } from "react";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {


  const [collapseMenu, setCollapseMenu] = useState(false);
  const [registerInfo, setRegisterInfo] = useState(mainRegister);
  const [loginInfo, setLoginInfo] = useState(mainLogin)
  const [fillForm, setFillForm] = useState([]);
  const [Error, setError] = useState(false);
  const [switchControl, setSwitchControl] = useState(false);

  //handles the mobile options tab
  const handleCollapseMenu = () => {
    setCollapseMenu(!collapseMenu);
  };

//handles the submission of registered user of the LMS
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (
      registerInfo.registeredFirstName.trim() === "" ||
      registerInfo.registeredLastName.trim() === "" ||
      registerInfo.email.trim() === "" ||
      registerInfo.password.trim() === "" || !switchControl
    ) {
      setError(true);
      return;
    }
    //resets the error state
    setError(null)

      //changes the stte of thTandC to true
    const updatedRegisteredInfo = {...registerInfo, TandC:true}


    //creates a new object for the new user information. this variable iw what is sent to a database
    const singleRegistereduser ={
    id: Math.random(),
    updatedRegisteredInfo,
   }


   //this section is optional and provides for a local store
   //this allows the update to occur before console logging
 const updatedFilledForm = [...fillForm, singleRegistereduser]


   //the set state is updated at this stage
   setFillForm(updatedFilledForm)
  //  console.log('this is the updated form: ',updatedFilledForm)


  //the input states are returned to their original empty states
   setRegisterInfo({
    registeredFirstName:'',
    registeredLastName:'',
    email:'',
    password:'',
    TandC:false
   })
  //  console.log('this is the reset form: ',registerInfo)
  };


  const handleSubmitLogin = (e)=>{
    e.preventDefault()
  }



  return (
    <AuthContext.Provider
      value={{
        collapseMenu,
        setCollapseMenu,
        handleCollapseMenu,
        registerInfo,
        setRegisterInfo,
        handleSubmitRegister,
        Error,
        setError,
        switchControl, 
        setSwitchControl,
        handleSubmitLogin,
        loginInfo,
         setLoginInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
