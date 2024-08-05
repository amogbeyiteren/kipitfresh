import axios from "axios";
import { Mutex } from "async-mutex";
import { createApi, FetchArgs, fetchBaseQuery, BaseQueryApi } from "@reduxjs/toolkit/query/react";
import store from "../store";
import { logout } from "../auth/authSlice";

const excludedEndpoints = [
  "login",
  "signUp",
  "forgotPassword",
  "resetPassword",
  "verifyEmail",
  
];

const fetchAccessToken = async (refreshToken: string) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/token/refresh/`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    });

    if (response.data?.access_token) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Failed to refresh access token", error);
    return null;
  }
};

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL as string,
  prepareHeaders: (headers, { endpoint }) => {
    const token = localStorage.getItem("access_token");

    if (token && !excludedEndpoints.includes(endpoint)) {
      headers.set("authorization", `Bearer ${token.replace(/['"]+/g, "")}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, never>
) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  const refreshToken = localStorage.getItem("refresh_token");

  if (result.error && result.error.status === 403) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = refreshToken && await fetchAccessToken(refreshToken);

        if (refreshResult) {
          localStorage.setItem("access_token", refreshResult.access_token);
          localStorage.setItem("refresh_token", refreshResult.refresh_token);

          result = await baseQuery(args, api, extraOptions);
        } else {
          store.dispatch(logout());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  if (result.error && result.error.status === 401) {
    store.dispatch(logout());
  }

  return result;
};

// Explicitly define the type of apiSlice
import { coreModuleName, reactHooksModuleName, Api } from '@reduxjs/toolkit/query/react';

export const apiSlice: Api<
  (args: string | FetchArgs, api: BaseQueryApi, extraOptions: Record<string, never>) => Promise<any>, // use Promise<any> here
  {},
  "api",
  never,
  typeof coreModuleName | typeof reactHooksModuleName
> = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});