import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosApi";

export type ResetPasswordRequestType = {
  email_address: string;
  default_password: string;
  new_password: string;
};
export type ResetPasswordResponseType = {
  data: null;
  responseMessage: string;
  responseCode: number;
};
const resetPassword = (
  input: ResetPasswordRequestType
): Promise<AxiosResponse<ResetPasswordResponseType>> => {
  return axiosInstance.post(`authentication/change-password`, input);
};
const useResetPassword = () => {
  return useMutation<
    AxiosResponse<ResetPasswordResponseType>,
    AxiosError,
    ResetPasswordRequestType
  >({
    mutationFn: (input: ResetPasswordRequestType) => resetPassword(input),
    onSuccess: () => {},
    onError: () => {},
  });
};

export default useResetPassword;
