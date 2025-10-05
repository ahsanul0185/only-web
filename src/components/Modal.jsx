import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

const Modal = ({ showModal, setShowModal, children }) => {
  useEffect(() => {
    if (showModal) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [showModal]);

  return createPortal(
    <AnimatePresence>
      {showModal ? (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-[9999] grid place-items-center p-4"
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 1, x : 50 }}
            animate={{ opacity: 1, scale: 1, x : 0 }}
            exit={{ opacity: 0, scale: 1, x : -50 }}
            transition={{ duration: 0.3 }} // smooth duration
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-dark dark:bg-primaryDark border border-gray-300/40 rounded-lg p-5 relative max-w-4xl w-full"
          >
            <button
              className="absolute top-3 right-3 text-2xl cursor-pointer text-dark"
              onClick={() => setShowModal(false)}
            >
              <X />
            </button>
            <div className="mt-5">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.getElementById("modal-root")
  );
};

export default Modal;
