import { useState } from "react";
import logo from "/logo.PNG";
import Modal from "./Modal";
import SocialLinks from "./SocialLinks";
import { useTranslation } from "../context/useTranslation";

const ProfileCard = () => {
  const [activeModal, setActiveModal] = useState(null);

  const { t } = useTranslation();

  return (
    <div className="bg-dark border-gray-200/40 p-8 rounded-lg">
      <div className="text-center py-8">
        <div onClick={() => setActiveModal("show-profile")}>
          <img src={logo} className="w-[50%] mx-auto" alt="Only Web" />
          <h2 className="text-2xl mt-6">{t("Only Web***Only Web")}</h2>
          <p className="text-sm">
            {t("Website and Design Creation***Création de sites web et design")}
          </p>
        </div>
        {/* <p className="w-[70%] mx-auto mt-6">
          Freelance website designer & graphic designer – I support businesses
          with their identity and online presence
        </p> */}
      </div>

      <SocialLinks className="bg-black rounded-lg flex justify-center" />

      <Modal
        showModal={activeModal === "show-profile"}
        setShowModal={setActiveModal}
        className="w-[800px]"
      >
        <div className="flex gap-12 py-8 flex-col md:flex-row items-start">
          <img
            src={logo}
            className="w-[40%] mx-auto md:w-[30%] rounded-lg"
            alt=""
          />
          <div>
            <h2 className="text-2xl">{t("Only Web***Only Web")}</h2>
            <p className="text-sm">
              {t(
                "Website and Design Creation***Création de sites web et design"
              )}
            </p>

            <p className="py-8 text-white/80">
              {t(
                "We craft unique websites and visual identities that help businesses shine online. Our mission is to blend creativity and performance to deliver custom solutions that truly reflect your brand.***Nous créons des sites web et des identités visuelles uniques qui permettent aux entreprises de briller en ligne. Notre mission est de mêler créativité et performance pour fournir des solutions personnalisées qui reflètent vraiment votre marque."
              )}
            </p>

            <p>
              <span className="text-white/80">{t("Email***E-mail")}: </span> onlywebco.com@gmail.com
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileCard;
