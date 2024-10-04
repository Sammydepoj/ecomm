import axiosInstance from "@/services/axiosApi";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export type GetCategoriesResponseType = {
  responseCode: number;
  responseMessage: string;
  data: {
    categories: Array<object>;
    pagination: {
      totalCategories: number;
      currentPage: number;
      pageSize: number;
      totalPages: number;
    };
  };
};

export const getCategories = async (
  page: number,
  size: number
): Promise<AxiosResponse<GetCategoriesResponseType>> => {
  return axiosInstance.get(`product/categories?page=${page}&size=${size}`);
};
export const QUERY_KEY_GET_CATEGORIES = "Get categories";
const useGetCategories = (page: number, size: number) => {
  const queryKey = [QUERY_KEY_GET_CATEGORIES];
  const queryFn = async () => {
    return await getCategories(page ?? 1, size ?? 10);
  };
  return useQuery({ queryKey, queryFn });
};
export default useGetCategories;
