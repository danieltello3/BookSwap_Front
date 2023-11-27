import axios, { AxiosResponse } from "axios";

const url_ip = "https://api.ipify.org?format=json";

export const axiosInstance = axios.create({
  baseURL: "https://localhost:3001/"
});

export const api = {
  COMBOS: {
    categorias: (): Promise<AxiosResponse> => axiosInstance.get("categoria")
  },
  USUARIO: {
    //aqui van los endpoints relacionado al usuario
  },
  ORDEN: {
    //aqui van los endpoints relacionado a las ordenes
  },
  PASARELA: {
    //aqui van los endpoints relacionado a los pagos
    getIp: (): Promise<AxiosResponse> => axios.get(url_ip),
    sessionToken: (body:any): Promise<AxiosResponse> => axiosInstance.post("pago",body)
  }
};
