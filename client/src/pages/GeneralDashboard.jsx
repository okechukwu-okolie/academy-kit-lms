import Header from "@/components/page-components/Header";
import Aside from "@/components/page-components/Aside";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "@/context/authContext";

const GeneralDashboard = () => {
  const { 
    collapseMenu,
        //  setCollapseMenu,
          handleCollapseMenu } =
    useContext(AuthContext);
  return (
    <main className="pl-2">
      <Header handleCollapseMenu={handleCollapseMenu}/>
      <Aside  collapseMenu={collapseMenu}/>
      <Outlet />
    </main>
  );
};


export default GeneralDashboard;
