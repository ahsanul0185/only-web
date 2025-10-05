import { useState } from "react";
import avatarImg from "../assets/avatar.jpeg";
import Modal from "./Modal";

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


      <Modal
        showModal={activeModal === "show-profile"}
        setShowModal={setActiveModal}
      >
       Hello I am Modal
      </Modal>
    </div>
  );
};

export default ProfileCard;
