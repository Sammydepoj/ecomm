/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteCookie, getCookie, setCookie } from "cookies-next";

import { ACCESS_TOKEN_EXPIRY_KEYWORD } from "./constants";

export const removeAccessExpiryCookie = (ctx?: { req: any; res: any }) => {
  if (ctx) {
    deleteCookie(ACCESS_TOKEN_EXPIRY_KEYWORD, ctx);
  } else {
    deleteCookie(ACCESS_TOKEN_EXPIRY_KEYWORD);
  }
};

 export const setAccessExpiryCookie = (time: number, ctx?: { req: any; res: any }) => {
  if (ctx) {
    setCookie(ACCESS_TOKEN_EXPIRY_KEYWORD, time, ctx);
  } else {
    setCookie(ACCESS_TOKEN_EXPIRY_KEYWORD, time);
  }
};

export const removeAccessCookie = (ctx?: { req: any; res: any }) => {
  if (ctx) {
    deleteCookie(process.env.NEXT_PUBLIC_TOKEN as string, ctx);
  } else {
    deleteCookie(process.env.NEXT_PUBLIC_TOKEN as string);
  }
};

export const setAccessCookie = (
  token: string,
  ctx?: { req: any; res: any }
) => {
  if (ctx) {
    setCookie(process.env.NEXT_PUBLIC_TOKEN as string, token, ctx);
    // setAccessTokenExpiry(token, ctx);
  } else {
    setCookie(process.env.NEXT_PUBLIC_TOKEN as string, token);
    // setAccessTokenExpiry(token);
  }
};

export const getAccessCookie = (ctx?: { req: any; res: any }) => {
  if (ctx) {
    const accessTokenExpiry = getCookie(
      process.env.NEXT_PUBLIC_TOKEN as string,
      ctx
    );
    return accessTokenExpiry;
  } else {
    const accessTokenExpiry = getCookie(
      process.env.NEXT_PUBLIC_TOKEN as string
    );
    return accessTokenExpiry;
  }
};

export const setHttpOnlyRefreshTokenCookie = (token: string) => {
  return fetch("/api/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
};

export const refreshHttpOnlyRefreshTokenCookie = () => {
  return fetch("/api/refresh", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
};

export const removeHttpOnlyRefreshTokenCookie = () => {
  return fetch("/api/logout", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
};

// export const setAccessTokenExpiry = (
//   access_token: string,
//   ctx?: { req: any; res: any }
// ) => {
//   const decoded = jwt_decode<JwtPayload>(access_token);
//   if (decoded?.exp) {
//     if (ctx) {
//       setAccessExpiryCookie(decoded?.exp, ctx);
//     } else {
//       setAccessExpiryCookie(decoded?.exp);
//     }
//   }
// };

export const getAccessTokenExpiry = (ctx?: { req: any; res: any }) => {
  if (ctx) {
    const accessTokenExpiry = getCookie(ACCESS_TOKEN_EXPIRY_KEYWORD, ctx);
    return accessTokenExpiry;
  } else {
    const accessTokenExpiry = getCookie(ACCESS_TOKEN_EXPIRY_KEYWORD);
    return accessTokenExpiry;
  }
};
