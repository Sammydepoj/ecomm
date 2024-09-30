import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosApi";

export type ChatResponseType = {
  data: any;
  responseMessage: string;
  responseCode: number;
};

export type ChatRequestType = {
  text?: string;
  chattype: string;
  audio?: string | null;
  language?: string;
  sessionId: string;
};

const chatHandler = (
  input: ChatRequestType
): Promise<AxiosResponse<ChatResponseType>> => {
  return axiosInstance.post(`/chat?sessionId=${input?.sessionId}`, input, {});
};

const useChat = () => {
  return useMutation<
    AxiosResponse<ChatResponseType>,
    AxiosError,
    ChatRequestType
  >({
    mutationFn: (input: ChatRequestType) => chatHandler(input),
    onSuccess: () => {},
    onError: () => {},
  });
};

export default useChat;
