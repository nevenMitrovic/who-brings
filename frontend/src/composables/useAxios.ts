import axios, { type AxiosInstance, type InternalAxiosRequestConfig, type AxiosResponse } from "axios";

export function useAxios(): AxiosInstance {
    const axiosInstance: AxiosInstance = axios.create({
        baseURL: import.meta.env.VITE_API_URL
    });

    axiosInstance.interceptors.request.use(
        async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
            return config;
        },
        (error: any) => {
           Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        async (config: AxiosResponse): Promise<AxiosResponse> => {
            return config;
        },
        (error: any) => {
            Promise.reject(error);
        }
    )

    return axiosInstance;
}