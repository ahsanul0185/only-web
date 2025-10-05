import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

const SocialLinks = ({className, iconClass}) => {
  const socialData = [
    { icon: <FaWhatsapp />, link: "https://wa.me/your-number" },
    { icon: <FaInstagram />, link: "https://instagram.com/your-profile" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/your-profile" },
    { icon: <FaFacebookF />, link: "https://facebook.com/your-profile" },
    { icon: <FaTiktok />, link: "https://tiktok.com/@your-profile" },
    { icon: <FaYoutube />, link: "https://youtube.com/@your-channel" },
  ];

  return (
    <div className={twMerge(`py-4`, className)}>
      <div className="max-w-3xl mx-auto flex gap-4">
        {socialData.map((item, idx) => (
          <Button  className={twMerge(`text-white text-2xl transition-colors p-2 rounded-lg border-gray-200/40`, iconClass)}>
            <a
            key={idx}
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
