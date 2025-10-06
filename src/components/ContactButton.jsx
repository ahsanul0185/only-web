// import React from "react";
// import { twMerge } from "tailwind-merge";

// const Button = ({ onClick, className, children }) => {
//   return (
//     <button
      
//     >
//       <button onClick={onClick}
//       className={twMerge(
//         `button button--hyperion bg-white` +
//           className
//       )}><span><span>{children}</span></span></button>
//     </button>
//   );
// };

// export default Button;


import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "../context/useTranslation";

const ContactButton = ({ onClick, className, children }) => {
  const {t} = useTranslation();
  return (
    <button className="group relative border border-gray px-8 py-2 rounded-sm cursor-pointer overflow-hidden">
        <span className="group-hover:-translate-x-6 duration-300 block">{t("Contact***Contactez-nous")}</span>
        <span className="inset-0 top-0 left-0 translate-x-full group-hover:translate-x-0 absolute bg-white w-full text-black grid place-items-center transform duration-300 ease-out whitespace-nowrap"><span className="flex items-center gap-2">{t("Let's go***Allons-y ")}<ArrowRight size={20}/></span></span>
    </button>
  );
};

export default ContactButton;
