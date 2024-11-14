import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL + "/api/Credits";

//post requets
export const sendIstehlakCredit = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/istehlak`, data);
  return res;
};
export const sendAqroCredit = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/aqro`, data);
  return res;
};
export const sendBiznesCredit = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/biznes`, data);
  return res;
};
export const sendLombardCredit = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/lombard`, data);
  return res;
};
