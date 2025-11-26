import { checkAuthService, loginOfUser, registeredUser } from "@/axios-setup/httpMethods";
import { authState, mainLogin, mainRegister } from "@/config/config";
import { useState, createContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";





export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {


  const [collapseMenu, setCollapseMenu] = useState(true);
  const [registerInfo, setRegisterInfo] = useState(mainRegister);
  const [loginInfo, setLoginInfo] = useState(mainLogin)
  // const [fillForm, setFillForm] = useState([]);
  const [Error, setError] = useState(false);
  const [switchControl, setSwitchControl] = useState(false);
  const [auth, setAuth] = useState(authState);
   const [loading, setLoading] = useState(true);
   const navigation = useNavigate()

  //handles the mobile options tab
  const handleCollapseMenu = () => {
    setCollapseMenu((col)=>!col);
  };

//handles the submission of registered user of the LMS
  const handleSubmitRegister = async(e) => {
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
    setError(false)

    console.log(registerInfo)


   //the set state is updated at this stage
   setFillForm(registerInfo)
  //  console.log('this is the updated form: ',updatedFilledForm)


  //applying the axios function to connect the frontend to the bcakend using the API.
  const userRegisterData = await registeredUser(registerInfo)
  console.log(userRegisterData)

  //the input states are returned to their original empty states
   setRegisterInfo({
    registeredFirstName:'',
    registeredLastName:'',
    email:'',
    password:'',
    TandC:false
   })
   navigation('/main-login')
  };


  const handleSubmitLogin = async(e)=>{
    e.preventDefault()
    if(loginInfo.email.trim() === '' || loginInfo.password.trim() === ''){
     return setError(true)
    }
    //this statement resets the error state if it occured earlier
    setError(null)

      // this state updates the original state of the loginInfo 
   setLoginInfo({...loginInfo, email:loginInfo.email, password: loginInfo.password})
  //  console.log(loginInfo)


  //this line of code is the axios link to the database
    const data = await loginOfUser(loginInfo)
    // console.log(data)


    if (data.success) {
      sessionStorage.setItem("accessToken",JSON.stringify(data.data.accessToken));
      setAuth({
        authenticate: true,
        user: data.data.user,       
      });
    } else {
      console.log('hello')
      setError(true)
      
      setAuth({
        authenticate: false,
        user: null,
      })
    
  }
 

  setLoginInfo({
    password:'',
    email:''
  })

  navigation('/general-dashboard')
  }



    //check auth user on app load
 async function checkAuthUser() {
    try {
      const data = await checkAuthService();
      if (data.success) {
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
        setLoading(false);
      } else {
        setAuth({
          authenticate: false,
          user: null,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      if (!error?.response?.data?.success) {
        setAuth({
          authenticate: false,
          user: null,
        });
        setLoading(false);
      }
    }
  }



    function resetCredentials(){
     setAuth({
      authenticate:false,
      user:null,
     })
  }



    // call check auth user on app load
  useEffect(() => {
    checkAuthUser();
  }, []);



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



