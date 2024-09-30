import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosApi";

export type ForgotPasswordResponseType = {
  data: any;
  responseMessage: string;
  responseCode: number;
};

export type ForgotPasswordRequestType = {
  email: string;
};

const forgotPassword = (
  input: ForgotPasswordRequestType
): Promise<AxiosResponse<ForgotPasswordResponseType>> => {
  return axiosInstance.post(`/auth/forgot-password`, input, {});
};

const useForgotPassword = () => {
  return useMutation<
    AxiosResponse<ForgotPasswordResponseType>,
    AxiosError,
    ForgotPasswordRequestType
  >({
    mutationFn: (input: ForgotPasswordRequestType) => forgotPassword(input),
    onSuccess: () => {},
    onError: () => {},
  });
};

export default useForgotPassword;
