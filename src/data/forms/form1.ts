import { boolean, number, object, string } from "yup";

export const initialValues = {
  name: "",
  surname: "",
  phoneNumber: "",
  aboutSalary: "",
  staj: "",
  creditAmount: 0,
  finCode: "",
  workPlace: "",
  salaryAmount: 0,
  checkTrue: false,
};

export const validationScheme = object().shape({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  aboutSalary: string().required("Surname is required"),
  staj: string().required("This field is required"),
  workPlace: string().required("This field is required"),
  creditAmount: number()
    .min(100, "min can be ${min}")
    .required("Credit ammount is required"),
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
  checkTrue: boolean().isTrue("This field must be selected"),
});
export const inputDatas1 = [
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
    className: "",
    placeholder: "FIN Kodunuz",
  },
  {
    label: "Son İş Yerində Staj",
    name: "staj",
    type: "text",
    className: "",
    placeholder: "Son İş Yerində Staj",
  },
  {
    label: "Kredit məbləği",
    name: "creditAmount",
    type: "number",
    className: "",
    placeholder: "Kredit məbləği",
  },
];
