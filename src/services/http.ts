/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Service } from 'typedi';
import { OptionalInject } from '../common/utils';
import { AUTH_TOKEN } from '../constants/auth';
import { API_URL } from '../config';

/**
 * Proxy class for axios instance
 */
@Service()
export default class HttpService {
  private client: AxiosInstance;

  constructor(@OptionalInject(AUTH_TOKEN) private readonly token?: string) {
    this.client = axios.create({ baseURL: API_URL });
    if (token) {
      this.client.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    }
  }

  getClient(): AxiosInstance {
    return this.client;
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.client.request<T, R>(config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.client.get<T, R>(url, config);
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.client.delete<T, R>(url, config);
  }

  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.client.head<T, R>(url, config);
  }

  options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.client.options<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.client.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.client.put<T, R>(url, data, config);
  }

  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.client.patch<T, R>(url, data, config);
  }
}
