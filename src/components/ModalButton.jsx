import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import MultiStepForm from "./MultiStepForm";

const ModalButton = ({ setModalOpen, isModalOpen, text, classname }) => {
  return (
    <div>
      <Button
        onClick={() => setModalOpen(true)}
        classname={`${
          classname ? classname : "py-2 px-4 text-sm xl:text-base"
        }`}
      >
        <p>{text}</p>
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-3xl font-gabarito-semibold-600">
            Upgrade To The Latest Small Business Phone System Technology And
            Save Up To 70% Off Your Calls​
          </h1>
          <p>Start Your Free Demo Below</p>
          <MultiStepForm />
        </div>
      </Modal>
    </div>
  );
};

export default ModalButton;
