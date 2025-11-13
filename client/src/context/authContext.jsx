import { mainRegister } from "@/config/config";
import { useState, createContext } from "react";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [collapseMenu, setCollapseMenu] = useState(false);
  const [registerInfo, setRegisterInfo] = useState(mainRegister);
  const [fillForm, setFillForm] = useState([]);
  const [Error, setError] = useState(false);

  const handleCollapseMenu = () => {
    setCollapseMenu(!collapseMenu);
  };
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (
      registerInfo.registeredFirstName.trim() === "" ||
      registerInfo.registeredLastName.trim() === "" ||
      registerInfo.email.trim() === "" ||
      registerInfo.password.trim() === ""
    ) {
      setError(true);
      return;
    }
    const UseRregistration = {};
    setFillForm([...fillForm]);
  };

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
