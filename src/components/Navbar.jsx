import React from "react";
import logo from "/logo.jpg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="py-5 border-b border-b-gray-200/40 fixed w-full top-0 left-0 bg-black/75 z-50 backdrop-blur-md">
      <div className="default-padding flex items-center justify-between gap-8">
        <div>
          <img src={logo} className="w-24" alt="" />
        </div>

        <div className="flex gap-14">
          <ul className="flex items-center gap-6 uppercase">
            <li className="cursor-pointer">Welcome</li>
            <li className="cursor-pointer">Portfolio</li>
            <li className="cursor-pointer">Prices</li>
            <li className="cursor-pointer">About</li>
          </ul>
          {/* <button class="button button--hyperion bg-white"><span><span>New page</span></span></button> */}
          <Button>Contant</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
