import Header from "@/components/page-components/Header";
import Aside from "@/components/page-components/Aside";
import React from "react";
import { Outlet } from "react-router-dom";


const GeneralDashboard = () => {
  return (
    <main className="pl-2">
      <Header />
      <Aside/>
      <Outlet />
    </main>
  );
};

export default GeneralDashboard;
