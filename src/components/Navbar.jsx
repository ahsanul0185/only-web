import logo from "/logo.jpg";
import ContactButton from "./ContactButton";
import { useNavigate } from "react-router-dom";
import LangToggleButton from "./LangToggleButton";
import { useTranslation } from "../context/useTranslation";

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

  const navigate = useNavigate();
  const {t} = useTranslation();

  return (
    <div className="py-5 border-b border-b-gray-200/40 fixed w-full top-0 left-0 bg-black/75 z-50 backdrop-blur-md">
      <div className="default-padding flex items-center justify-between gap-8">
        <div className="flex gap-10 items-center">
          <img onClick={() => navigate("/")} src={logo} className="w-24 cursor-pointer" alt="" />
         <LangToggleButton/>
        </div>

        <div className="flex gap-14">
          <ul className="hidden md:flex items-center gap-8 uppercase">

            {menuItems.map((item, idx) => <LinkButton key={idx} hash={item.hash}>{t(item.name)}</LinkButton>)}
          </ul>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const LinkButton = ({hash="#", children}) => {

    const handleClick = () => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button onClick={handleClick} className="group cursor-pointer relative py-1 text-white rounded-lg shadow-md transition-all hover:shadow-lg">
      {children}
      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left"></span>
    </button>
  );
};
