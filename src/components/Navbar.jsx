import React, { useState } from "react";
import logo from "/logo.jpg";
import ContactButton from "./ContactButton";

const menuItems = [
  {
    name : "Home",
    hash : "#"
  },
  {
    name : "Our Work",
    hash : "#"
  },
  {
    name : "Price",
    hash : "#"
  },
  {
    name : "About",
    hash : "#"
  }
]


const Navbar = () => {

  return (
    <div className="py-5 border-b border-b-gray-200/40 fixed w-full top-0 left-0 bg-black/75 z-50 backdrop-blur-md">
      <div className="default-padding flex items-center justify-between gap-8">
        <div>
          <img src={logo} className="w-24" alt="" />
        </div>

        <div className="flex gap-14">
          <ul className="flex items-center gap-8 uppercase">

            {menuItems.map((item, idx) => <LinkButton key={idx} hash={item.hash}>{item.name}</LinkButton>)}
          </ul>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const LinkButton = ({hash="#", children}) => {
  return (
    <button className="group cursor-pointer relative py-1 text-white rounded-lg shadow-md transition-all hover:shadow-lg">
      {children}
      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left"></span>
    </button>
  );
};
