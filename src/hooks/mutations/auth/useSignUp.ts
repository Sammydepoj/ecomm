import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosApi";

export type SignUpResponseType = {
  data: {
    user: string;
  };
  responseMessage: string;
  responseCode: number;
};

export type SignupRequestType = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  DOB: string;
};

const signup = (
  input: SignupRequestType
): Promise<AxiosResponse<SignUpResponseType>> => {
  return axiosInstance.post(`/auth/register`, input, {});
};

const useSignUp = () => {
  return useMutation<
    AxiosResponse<SignUpResponseType>,
    AxiosError,
    SignupRequestType
  >({
    mutationFn: (input: SignupRequestType) => signup(input),
    onSuccess: () => {},
    onError: () => {},
  });
};

export default useSignUp;
