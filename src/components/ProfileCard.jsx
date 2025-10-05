import { useState } from "react";
import avatarImg from "../assets/avatar.jpeg";
import Modal from "./Modal";
import SocialLinks from "./SocialLinks";

const ProfileCard = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="bg-dark border-gray-200/40 p-8 rounded-lg">
      <div className="text-center py-8">
        <div onClick={() => setActiveModal("show-profile")}>
          <img
            src={avatarImg}
            className="w-[50%] rounded-full aspect-square mx-auto"
            alt="Only Web"
          />
          <h2 className="text-2xl mt-6">Rayan</h2>
          <p className="text-sm">WebMaster</p>
        </div>
        <p className="w-[70%] mx-auto mt-6">
          Freelance website designer & graphic designer – I support businesses
          with their identity and online presence
        </p>
      </div>

      <SocialLinks className="bg-black rounded-lg flex justify-center" />

      <Modal
        showModal={activeModal === "show-profile"}
        setShowModal={setActiveModal}
        className="w-[800px]"
      >
        <div className="flex gap-12 py-8 flex-col md:flex-row">
          <img
            src={avatarImg}
            className="w-[40%] mx-auto md:w-[30%] rounded-lg"
            alt=""
          />
          <div>
            <h2 className="text-2xl">Rayan</h2>
            <p className="text-sm">WebMaster</p>

            <p className="py-8">
              Passionate about web design, I create unique websites and visual
              identities to help businesses stand out. My goal: to combine
              aesthetics and performance to offer tailor-made solutions that
              reflect your vision.🚀
            </p>

            <p>
              <span>Phone: </span> +33 00 00 00 00
            </p>
            <p>
              <span>Email: </span> onlywebco.com@gmail.com
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileCard;
