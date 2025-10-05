import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import logo from "/logo.jpg"

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Column 1: Logo & Info */}
        <div className="flex flex-col gap-4">
          <img src={logo} className="w-32" alt="Only Web" />
          <p>Digital Products & Services</p>
          <div className="flex flex-col gap-1 mt-4">
            <p>Contact: 07 49 70 10 03</p>
            <p>Email: <a href="mailto:contact@webleague.fr" className="text-blue-400 hover:underline">onlywebco.com@gmail.com</a></p>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Discover</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#my-services" className="hover:text-blue-400 transition">MY SERVICES</a></li>
            <li><a href="#my-creations" className="hover:text-blue-400 transition">MY CREATIONS</a></li>
            <li><a href="#digital-products" className="hover:text-blue-400 transition">DIGITAL PRODUCTS</a></li>
            <li><a href="#more-info" className="hover:text-blue-400 transition">MORE INFORMATION</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">CONTACT ME</a></li>
          </ul>
        </div>

        {/* Column 3: Social / Extra */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <SocialLinks iconClass="border"/>
          <p className="mt-4 text-white/50 text-sm">&copy; {new Date().getFullYear()} Only Web. All rights reserved.</p>
        </div>
      </div>

<div className="mt-12 text-center">
  
      <Link to="/privacy-policy" className="text-center">LEGAL NOTICES</Link>
</div>
    </footer>
  );
};

export default Footer;
