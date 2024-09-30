import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { IncomingMessage, ServerResponse } from "http";
import { Encryption } from "./encryption";

export type ctxProps = {
  req: IncomingMessage;
  res: ServerResponse;
};

export const storeAndEncryptDataToCookie = <T>(
  key: string,
  data: T,
  ctx?: ctxProps
): void => {
  try {
    const stringifiedData = JSON.stringify(data);
    const encryptedStringifiedData = Encryption.encrypt(stringifiedData);

    const options = ctx ? { ...ctx } : undefined;

    setCookie(key, encryptedStringifiedData, options);
  } catch (error) {
    console.error(`Error storing data with key ${key}:`, error);
  }
};

export const retrieveAndDecryptDataFromCookie = <T>(
  key: string,
  ctx?: ctxProps
): T | null => {
  try {
    const options = ctx ? { ...ctx } : undefined;

    const stringifiedData = getCookie(key, options);

    if (typeof stringifiedData === "string") {
      const deCryptedStringifiedData = Encryption.decrypt(stringifiedData);
      return JSON.parse(deCryptedStringifiedData) as T;
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error retrieving data with key ${key}:`, error);
    return null;
  }
};

export const removeDataFromCookie = (key: string) => deleteCookie(key);
