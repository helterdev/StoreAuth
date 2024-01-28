import { InputsLogin, InputsRegister } from '@/interfaces/Data';
import axios from './conifg';
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const userRegister = async (data: InputsRegister) => {
  const response = await axios.post(`/register`, data);

  return response;
};

export const loginRequest = async (data: InputsLogin) => {
  return await axios.post(`/login`, data);
};
