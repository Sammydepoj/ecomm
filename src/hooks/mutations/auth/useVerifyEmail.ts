import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosApi";

export type VerifyEmailResponseType = {};
export type VerifyEmailInputType = { refreshToken: string };

const verifyEmail = async (
  refreshToken: string
): Promise<AxiosResponse<any>> => {
  return axiosInstance.post(`/auth/verify-email?refreshToken=${refreshToken}`);
};

const useVerifyEmail = (refreshToken: string) => {
  const queryKey = [refreshToken];
  const queryFn = async () => {
    return await verifyEmail(refreshToken);
  };
  return useQuery({ queryKey, queryFn, enabled: !!refreshToken });
};

export default useVerifyEmail;
