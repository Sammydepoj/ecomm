import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosApi";

export type ResetPasswordRequestType = {
  token: string;
  newPassword: string;
};
export type ResetPasswordResponseType = {
  data: any;
  responseMessage: string;
  responseCode: number;
};
const resetPassword = (
  input: ResetPasswordRequestType,
  token: string
): Promise<AxiosResponse<ResetPasswordResponseType>> => {
  return axiosInstance.put(`/auth/reset-password`, input, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
const useResetPassword = (token: string) => {
  return useMutation<
    AxiosResponse<ResetPasswordResponseType>,
    AxiosError,
    ResetPasswordRequestType
  >({
    mutationFn: (input: ResetPasswordRequestType) =>
      resetPassword(input, token),
    onSuccess: () => {},
    onError: () => {},
  });
};

export default useResetPassword;
