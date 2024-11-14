import { boolean, number, object, string } from "yup";

export const initialValues = {
  name: "",
  surname: "",
  phoneNumber: "",
  salaryAmount: 0,
  finCode: "",
  workPlace: "",
  checked: false,
};

export const validationScheme = object().shape({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  workPlace: string().required("This field is required"),
  salaryAmount: number()
    .min(100, "min can be ${min}")
    .required("Salary ammount is required"),
  finCode: string()
    .length(6, "Fin code is wrong")
    .required("Fin Code is required"),
  phoneNumber: string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be digits")
    .min(10, "Phone number must be at least 10 digits"),
  checked: boolean().isTrue("This field must be selected"),
});
export const inputDatas3 = [
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
    label: "Rəsmi maaşınız",
    name: "salaryAmount",
    type: "number",
    className: "",
    placeholder: "Rəsmi maaşınız",
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
