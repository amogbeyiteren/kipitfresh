import { createAsyncThunk, AsyncThunk} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface LoginResponse {
  user: {
    id: string;
    type: string;
  };
  token: string;
  refreshToken: string;
}

interface SignupResponse extends LoginResponse {}

interface ForgotPasswordResponse {
  message: string;
}

interface ChangePasswordResponse {
  message: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignupCredentials {
  email: string;
  password1: string;
  password2: string;
  address: string
}

interface ChangePasswordCredentials {
  token: string;
  newPassword: string;
}

const isAxiosError = (error: any): error is AxiosError => {
    return (error as AxiosError).isAxiosError !== undefined;
  };

export const loginUser: AsyncThunk<LoginResponse, LoginCredentials, {}> = createAsyncThunk(
  'auth/loginUser',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post<LoginResponse>(`${import.meta.env.VITE_BASE_URL}/login`, credentials);
      localStorage.setItem("access_token", response.data.token);
      localStorage.setItem("refresh_token", response.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: "An unknown error occurred" });
    }
  }
);

export const signupUser: AsyncThunk<SignupResponse, SignupCredentials, {}> = createAsyncThunk(
  'auth/signupUser',
  async (userInfo: SignupCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post<SignupResponse>(`${import.meta.env.VITE_BASE_URL}/signup`, userInfo);
      localStorage.setItem("access_token", response.data.token);
      localStorage.setItem("refresh_token", response.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: "An unknown error occurred" });
    }
  }
);

export const forgotPassword: AsyncThunk<ForgotPasswordResponse, string, {}> = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await axios.post<ForgotPasswordResponse>(`${import.meta.env.VITE_BASE_URL}/forgot-password`, { email });
      return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: "An unknown error occurred" });
    }
  }
);

export const changePassword: AsyncThunk<ChangePasswordResponse, ChangePasswordCredentials, {}> = createAsyncThunk(
  'auth/changePassword',
  async (passwordData: ChangePasswordCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post<ChangePasswordResponse>(`${import.meta.env.VITE_BASE_URL}/change-password`, passwordData);
      return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: "An unknown error occurred" });
    }
  }
);
