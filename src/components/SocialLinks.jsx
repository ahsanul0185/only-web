import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

const SocialLinks = ({className, iconClass}) => {
  const socialData = [
    // { icon: <FaWhatsapp />, link: "https://wa.me/your-number" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/onlywebco?igsh=MXh4MjlkOW8yeTU1cg%3D%3D&utm_source=qr" },
    { icon: <FaTiktok />, link: "www.tiktok.com/@onlywebco" },
  ];

  return (
    <div className={twMerge(`py-4`, className)}>
      <div className="max-w-3xl mx-auto flex gap-4">
        {socialData.map((item, idx) => (
          <Button key={idx} className={twMerge(`text-white text-2xl transition-colors p-2 rounded-lg border-gray-200/40`, iconClass)}>
            <a
            
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            // className={twMerge(`text-white text-2xl transition-colors p-2 rounded-lg`, iconClass)}
          >
            {item.icon}
          </a>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
