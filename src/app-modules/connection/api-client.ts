import axios, { AxiosInstance,  AxiosResponse } from 'axios';
import { getStrapiURL } from './strapi-connection';

const baseURL = process.env.API_CLIENT_URL;

export const apiHandler = (token?: string): AxiosInstance => {
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

export const strapiApiHandler = (token?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: getStrapiURL(""),
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