import { InputsRegister } from '@/interfaces/Data';
import axios, { AxiosError } from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_URL;
interface Errors {
  message: string;
  status: number;
}
export const userRegister = async (data: InputsRegister) => {
  const response = await axios.post(`${BASE_URL}/register`, data);

  return response;
};
