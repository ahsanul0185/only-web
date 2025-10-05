import { useState } from "react";
import logo from "/logo.jpg";
import Modal from "./Modal";
import SocialLinks from "./SocialLinks";

const ProfileCard = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="bg-dark border-gray-200/40 p-8 rounded-lg">
      <div className="text-center py-8">
        <div onClick={() => setActiveModal("show-profile")}>
          <img
            src={logo}
            className="w-[50%] mx-auto"
            alt="Only Web"
          />
          <h2 className="text-2xl mt-6">Only Web</h2>
          <p className="text-sm">Website and Design Creation</p>
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
            <h2 className="text-2xl">Only Web</h2>
            <p className="text-sm">Website and Design Creation</p>

            <p className="py-8">
              We craft unique websites and visual identities that help businesses shine online. Our mission is to blend creativity and performance to deliver custom solutions that truly reflect your brand. 
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
