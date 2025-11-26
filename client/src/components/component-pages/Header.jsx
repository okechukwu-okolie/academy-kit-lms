import React from "react";
import { Button } from "../ui/button";
import { SearchIcon, ShoppingCart } from "lucide-react";

const Header = ({handleCollapseMenu}) => {
  return (
    <header className="flex justify-between items-center py-3 ">
      <h1 className="text-2xl font-extrabold underline px-1 cursor-pointer">
        academy<span className="text-teal-300 ">kit</span>
      </h1>
      <div className="flex cursor-pointer">
       <div className=" flex border rounded-3xl"><input type="text" className=" w-20"/> <SearchIcon className="text-teal-800"/></div>
        <ShoppingCart className="text-teal-800"/>
      </div>
      <Button onClick={handleCollapseMenu} className="bg-teal-300 cursor-pointer">Options</Button>
    </header>
  );
};

export default Header;
