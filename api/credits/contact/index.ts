import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL + "/api/Contact";

export const sendContactForm = async (newContactData: any) => {
  const res = await axios.post(`${BASE_URL}/create-form`, newContactData);
  return res;
};
