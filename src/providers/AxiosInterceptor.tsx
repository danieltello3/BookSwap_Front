import { useLayoutEffect } from "react";
import { axiosInstance } from "./Api";
import { getTokenFromLocalStorage } from "../utils/localStorage.utils";

const AxiosInterceptor = ({ children }: any) => {
  useLayoutEffect(() => {
    const resInterceptor = (response: any) => {
      return response;
    };
    const errInterceptor = (error: any) => {
      return Promise.reject(error);
    };
    const useToken = async (config: any) => {
      const token = getTokenFromLocalStorage();
      console.log("Token:", token);
      config.headers.Authorization = token ? `Bearer ${token}` : "";
      return config;
    };
    const interceptor = axiosInstance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );
    const responseInterceptor =
      axiosInstance.interceptors.request.use(useToken);

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
      axiosInstance.interceptors.request.eject(responseInterceptor);
    };
  }, []);
  return children;
};
export default axiosInstance;
export { AxiosInterceptor };
