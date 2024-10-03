import axiosInstance from "@/services/axiosApi";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export type UserinfoResponseType = {
  responseCode: number;
  responseMessage: string;
  data: {
    _id: string;
    first_name: string;
    last_name: string;
    email_address: string;
    phone_number: string;
    home_address: string;
    profile_image: any;
    is_approved: boolean;
    is_default_password: boolean;
    role_type: string;
    createdAt: string;
    updatedAt: string;
  };
};

const getUserInfo = async (): Promise<AxiosResponse<UserinfoResponseType>> => {
  return axiosInstance.get(`authentication/get-user-info`);
};
export const QUERY_KEY_GET_USER_INFO = "Get user info";
const useGetUserInfo = () => {
  const queryKey = [QUERY_KEY_GET_USER_INFO];
  const queryFn = async () => {
    return await getUserInfo();
  };
  return useQuery({ queryKey, queryFn });
};
export default useGetUserInfo;
