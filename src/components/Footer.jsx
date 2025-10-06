import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import logo from "/logo.jpg";
import { useTranslation } from "../context/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Column 1: Logo & Info */}
        <div className="flex flex-col gap-4">
          <img src={logo} className="w-32" alt="Only Web" />
          <p>
            {t("Digital Products & Services***Produits et services numériques")}
          </p>
          <div className="flex flex-col gap-1 mt-4">
            <p>{t("Contact***Contact")}: 07 49 70 10 03</p>
            <p>
              {t("Email***E-mail")}:{" "}
              <a
                href="mailto:contact@webleague.fr"
                className="text-blue-400 hover:underline"
              >
                onlywebco.com@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">{t("Discover***Découvrir")}</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#expertise" className="hover:text-blue-400 transition">
                {t("MY SERVICES***MES SERVICES")}
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-blue-400 transition">
                {t("MY CREATIONS***MES CRÉATIONS")}
              </a>
            </li>
            <li>
              <a
                href="#digital-products"
                className="hover:text-blue-400 transition"
              >
                {t("DIGITAL PRODUCTS***PRODUITS NUMÉRIQUES")}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                {t("MORE INFORMATION***PLUS D'INFORMATIONS")}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                {t("CONTACT ME***CONTACTEZ-MOI")}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social / Extra */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">
            {t("Follow Us***Suivez-nous")}
          </h3>
          <SocialLinks iconClass="border" />
          <p className="mt-4 text-white/50 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            {t(
              "Only Web. All rights reserved.***Only Web. Tous droits réservés."
            )}
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link to="/privacy-policy" className="text-center">
          {t("LEGAL NOTICES***MENTIONS LÉGALES")}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
