// services/Instance.ts
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

const API = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/v1/";

const api: AxiosInstance = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const apiClient = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const { data } = await api.get<T>(url, config);
    return data;
  },

  post: async <T>(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const { data } = await api.post<T>(url, body, config);
    return data;
  },

  put: async <T>(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const { data } = await api.put<T>(url, body, config);
    return data;
  },

  patch: async <T>(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const { data } = await api.patch<T>(url, body, config);
    return data;
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const { data } = await api.delete<T>(url, config);
    return data;
  },
};

export default api;
