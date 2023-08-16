import axios, { AxiosInstance,  AxiosResponse } from 'axios';

const baseURL = process.env.API_NEXT_URL;

export const apiNextHandler = (token?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      ...axios.defaults.headers,
    },
  });
  instance.interceptors.request.use(
    (config:any ) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};