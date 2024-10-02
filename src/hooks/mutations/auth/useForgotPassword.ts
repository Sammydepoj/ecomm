import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosApi";

export type ForgotPasswordResponseType = {
  responseMessage: string;
  responseCode: number;
};

export type ForgotPasswordRequestType = {
  email_address: string;
};

const forgotPassword = (
  input: ForgotPasswordRequestType
): Promise<AxiosResponse<ForgotPasswordResponseType>> => {
  return axiosInstance.post(`authentication/forgot-password`, input, {});
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
