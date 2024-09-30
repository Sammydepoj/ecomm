import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosApi";

export type LoginUpResponseType = {
  data: any;
  responseMessage: string;
  responseCode: number;
};

export type LoginRequestType = {
  email: string;
  password: string;
};

const login = (
  input: LoginRequestType
): Promise<AxiosResponse<LoginUpResponseType>> => {
  return axiosInstance.post(`/auth/login`, input, {});
};

const useLogin = () => {
  return useMutation<
    AxiosResponse<LoginUpResponseType>,
    AxiosError,
    LoginRequestType
  >({
    mutationFn: (input: LoginRequestType) => login(input),
    onSuccess: () => {},
    onError: () => {},
  });
};

export default useLogin;
