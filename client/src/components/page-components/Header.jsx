import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header>
      <h1 className="text-2xl font-extrabold pt-2 px-1">
        academy<span className="text-teal-300">kit</span>
      </h1>
      <Button className="bg-teal-300 mb-5">Options</Button>
    </header>
  );
};

export default Header;
