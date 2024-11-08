import { object, string } from "yup";

export const initialValues = {
  name: "",
  surname: "",
  phoneNumber: "",
  branch:"",
};

export const validationScheme = object().shape({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  branch: string().required("Surname is required"),
  phoneNumber: string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be digits")
    .min(10, "Phone number must be at least 10 digits"),
});
export const inputDatas4 = [
  {
    label: "Ad",
    name: "name",
    type: "text",
    className: "",
    placeholder: "Ad",
  },
  {
    label: "Soyad",
    name: "surname",
    type: "text",
    className: "",
    placeholder: "Soyad",
  },
  {
    label: "Mobil Nömrə",
    name: "phoneNumber",
    type: "tel",
    className: "col-span-2",
    placeholder: "Mobil Nömrə",
  },
  {
    label: "Filial",
    name: "branch",
    type: "text",
    className: "col-span-2",
    placeholder: "Filial",
  },
];
