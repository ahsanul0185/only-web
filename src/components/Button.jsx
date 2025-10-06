import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ onClick, className, children }) => {
  return (
    // <button
    //   onClick={onClick}
    //   className={twMerge(
    //     `px-6 py-2 relative group border rounded-sm z-0 cursor-pointer overflow-clip`,
    //     className
    //   )}
    // >
    //   <span className=" mix-blend-difference block">{children}</span>
    //   <span className="absolute -bottom-2 translate-y-[50%] left-1/2 -translate-x-1/2 size-2 rounded-full group-hover:size-52 transition-all  -z-10 bg-white duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></span>
    // </button>

<button
  onClick={onClick}
  className={twMerge(
    `px-6 py-2 relative group border rounded-sm z-0 cursor-pointer overflow-clip`,
    className
  )}
>
  <span className="mix-blend-difference flex items-center gap-2 justify-center">{children}</span>
  <span className="absolute -bottom-2 translate-y-[50%] left-1/2 -translate-x-1/2 size-2 rounded-full group-hover:size-52 transition-all -z-10 bg-white duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
</button>
  );
};

export default Button;
