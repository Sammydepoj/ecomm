import { USER_INFORMATION } from "./constants";
import { Encryption } from "./encryption";

export const RESPONSE_CODE = {
  successful: 201,
  badRequest: 400,
  noData: 201,
  internalServerError: 500,
  dataDuplication: 230,
  unAuthorized: 401,
  invalidToken: 403,
};
export const retrieveUserInfoFromStorage = () => {
  "use client";
  if (typeof window === "undefined") {
    return { userDetails: null };
  }
  const userDetails =
    sessionStorage.getItem(USER_INFORMATION) &&
    sessionStorage.getItem(USER_INFORMATION)?.length &&
    JSON.parse(
      Encryption.decrypt(sessionStorage.getItem(USER_INFORMATION) as string)
    );
  return userDetails;
};

export const retrieveTokenFromStorage = () => {
  "use client";

  if (typeof window === "undefined") {
    return null;
  }

  const token: string =
    sessionStorage.getItem(process.env.NEXT_PUBLIC_TOKEN as string) &&
    sessionStorage.getItem(process.env.NEXT_PUBLIC_TOKEN as string)?.length &&
    JSON.parse(
      Encryption.decrypt(
        sessionStorage.getItem(
          process.env.NEXT_PUBLIC_TOKEN as string
        ) as string
      )
    );

  return token;
};

