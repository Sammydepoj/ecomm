/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosApi";

export type LoginResponseType = {
  responseCode: number;
  responseMessage: string;
  is_default_password: boolean;
  token: string;
  data?: any;
};

export type LoginRequestType = {
  email_address: string;
  password: string;
};

const login = (
  input: LoginRequestType
): Promise<AxiosResponse<LoginResponseType>> => {
  return axiosInstance.post(`authentication/login`, input, {});
};

const useLogin = () => {
  return useMutation<
    AxiosResponse<LoginResponseType>,
    AxiosError,
    LoginRequestType
  >({
    mutationFn: (input: LoginRequestType) => login(input),
    onSuccess: () => {},
    onError: () => {},
  });
};

export default useLogin;
