import axiosInstance from "@/services/axiosApi";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export type SignUpResponseType = {
  responseCode: number;
  responseMessage: string;
  data: {
    email_address: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    home_address: string;
    profile_image: string;
    role_type: string;
    createdAt: string;
    token: string;
  };
};

export type SignupRequestType = {
  first_name: string;
  last_name: string;
  phone_number: string;
  home_address: string;
  profile_image: string;
  email_address: string;
  password: string;
  role_type: string;
};

const signup = (
  input: SignupRequestType
): Promise<AxiosResponse<SignUpResponseType>> => {
  return axiosInstance.post(`authentication/register`, input, {});
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
