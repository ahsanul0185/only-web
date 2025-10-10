import { Link, useNavigate } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import logo from "/logo.PNG";
import { useTranslation } from "../context/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Section: Logo & Description */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <img 
              onClick={() => navigate("/")} 
              src={logo} 
              className="w-28 cursor-pointer hover:opacity-80 transition-opacity" 
              alt="Only Web" 
            />
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              {t("Digital Products & Services***Produits et services numériques")}
            </p>
            
            {/* Social Links */}
            <div className="mt-2">
              <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4 font-semibold">
                {t("Follow Us***Suivez-nous")}
              </h3>
              <SocialLinks iconClass="border border-white/20 hover:border-white/40 hover:bg-white/5" />
            </div>
          </div>

          {/* Spacer for large screens */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Right Section: Contact & Legal */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Contact Information */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4 font-semibold">
                {t("Contact***Contact")}
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <span className="text-white/50 text-sm mt-0.5">{t("Email***E-mail")}:</span>
                  <a
                    href="mailto:contact@onlywebco.com"
                    className="text-white hover:text-white/70 transition-colors group"
                  >
                    <span className="border-b border-white/0 group-hover:border-white/50 transition-colors">
                     contact@onlywebco.com 
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4 font-semibold">
                {t("Legal***Légal")}
              </h3>
              <Link 
                to="/privacy-policy" 
                className="text-white hover:text-white/70 transition-colors inline-block group"
              >
                <span className="border-b border-white/0 group-hover:border-white/50 transition-colors">
                  {t("LEGAL NOTICES***MENTIONS LÉGALES")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()}{" "}
              {t("Only Web. All rights reserved.***Only Web. Tous droits réservés.")}
            </p>
            
            {/* Optional: Additional bottom links */}
            <div className="flex gap-6 text-sm">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white/40 hover:text-white/70 transition-colors cursor-pointer"
              >
                {t("Back to top***Retour en haut")} ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;