import Header from "@/components/component-pages/Header";
import Aside from "@/components/Aside";
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
      <div className="flex">
        <Header handleCollapseMenu={handleCollapseMenu}/>
        <Aside  collapseMenu={collapseMenu}/>
      </div>
      <Outlet />
    </main>
  );
};


export default GeneralDashboard;
