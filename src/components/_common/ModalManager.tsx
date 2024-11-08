import { IModalManager } from "@/interfaces/IModalManager";
import React from "react";
import MainModal from "./MainModal";
import Form1 from "../forms/Form1";
import Form2 from "../forms/Form2";
import Form3 from "../forms/Form3";
import Form4 from "../forms/Form4";

const ModalManager: React.FC<IModalManager> = ({ formId, open, setOpen }) => {
  const getFormComponent = () => {
    switch (formId) {
      case "1":
        return Form1;
      case "2":
        return Form2;
      case "3":
        return Form3;
      case "4":
        return Form4;
      default:
        return null;
    }
  };
  const FormComponent = getFormComponent();
  return FormComponent ? (
    <MainModal open={open} setOpen={setOpen} Component={FormComponent} />
  ) : null;
};

export default ModalManager;
