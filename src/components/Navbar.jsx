
// Navbar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../context/useTranslation";
import logo from "/logo.PNG";
import ContactButton from "./ContactButton";
import LangToggleButton from "./LangToggleButton";
// import MobileMenu from "./MobileMenu";

const menuItems = [
  {
    name: "Home***Accueil",
    hash: "#home",
  },
  {
    name: "Our Work***Nos réalisations",
    hash: "#work",
  },
  {
    name: "Price***Tarifs",
    hash: "#price",
  },
  {
    name: "About***À propos",
    hash: "#about",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div className="py-5 border-b border-b-gray-200/40 fixed w-full top-0 left-0 bg-black/75 z-50 backdrop-blur-md">
        <div className="default-padding flex items-center justify-between gap-8">
          <div className="flex gap-10 items-center">
            <img
              onClick={() => navigate("/")}
              src={logo}
              className="w-24 cursor-pointer"
              alt=""
            />
            <div className="hidden md:block">
              <LangToggleButton />
            </div>
          </div>

          <h2 className="hidden sm:block text-xl md:text-2xl font-semibold">Only Web</h2>

          <div className="flex gap-6 items-center">
            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8 uppercase">
              {menuItems.map((item, idx) => (
                <LinkButton key={idx} hash={item.hash}>
                  {t(item.name)}
                </LinkButton>
              ))}
            </ul>
            
            <div className="hidden lg:block">
              <ContactButton />
            </div>

            {/* Hamburger Icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        menuItems={menuItems}
      />
    </>
  );
};

export default Navbar;

const LinkButton = ({ hash = "#", children }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group cursor-pointer relative py-1 text-white rounded-lg shadow-md transition-all hover:shadow-lg"
    >
      {children}
      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left"></span>
    </button>
  );
};

// ============================================
// MobileMenu.jsx - Separate Component
// ============================================


const MobileMenu = ({ isOpen, onClose, menuItems }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`lg:hidden fixed inset-0 bg-black z-40 transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full px-8">
        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-center gap-8 mb-12">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className={`transform transition-all duration-500 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <MobileLinkButton hash={item.hash} onClick={onClose}>
                {t(item.name)}
              </MobileLinkButton>
            </li>
          ))}
        </ul>

        {/* Mobile Language Toggle and Contact */}
        <div
          className={`flex flex-col items-center gap-6 transform transition-all duration-500 ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: `${menuItems.length * 100}ms` }}
        >
          <LangToggleButton />
          <div onClick={onClose}>
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
};



const MobileLinkButton = ({ hash = "#", children, onClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className="text-white text-2xl uppercase font-light tracking-wider hover:text-gray-300 transition-colors duration-300"
    >
      {children}
    </button>
  );
};