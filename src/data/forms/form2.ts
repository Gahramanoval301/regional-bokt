import { boolean, object, string } from "yup";

export const initialValues = {
  name: "",
  surname: "",
  phoneNumber: "",
  aboutSalary: "",
  finCode: "",
  workPlace: "",
  checked: false,
};

export const validationScheme = object().shape({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  aboutSalary: string().required("Surname is required"),
  workPlace: string().required("This field is required"),
  finCode: string()
    .required("Fin Code is required"),
  phoneNumber: string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be digits")
    .min(10, "Phone number must be at least 10 digits"),
  checked: boolean().isTrue("This field must be selected"),
});
export const inputDatas2 = [
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
    label: "Rəsmi maaşınız var ?",
    name: "aboutSalary",
    type: "text",
    className: "",
    placeholder: "Rəsmi maaşınız var ?",
  },
  {
    label: "İş Yeriniz",
    name: "workPlace",
    type: "text",
    className: "",
    placeholder: "İş Yeriniz",
  },
  {
    label: "FIN Kodunuz",
    name: "finCode",
    type: "text",
    className: "col-span-2",
    placeholder: "FIN Kodunuz",
  },
];
