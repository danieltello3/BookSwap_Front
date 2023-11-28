import axios, { AxiosResponse } from "axios";
import { Usuario } from "../models/Usuario.model";
import { Mensaje } from "../models/Mensaje.model";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/"
});
const url_ip = "https://api.ipify.org?format=json";

export const api = {
  COMBOS: {
    categorias: (): Promise<AxiosResponse> => axiosInstance.get("categoria")
  },
  USUARIO: {
    //aqui van los endpoints relacionado al usuario
    crear: (data: Usuario): Promise<AxiosResponse> => axiosInstance.post("usuario", data),
    login: (data: Usuario): Promise<AxiosResponse> => axiosInstance.post("usuario/login", data),
    usuario: (): Promise<AxiosResponse> => axiosInstance.get(`usuario/perfil`),
    usuario2: (data: Usuario): Promise<AxiosResponse> => axiosInstance.put(`/usuario/perfil/actualizar`, data),
  },
  ORDEN: {
    //aqui van los endpoints relacionado a las ordenes

  },
  PASARELA: {
    //aqui van los endpoints relacionado a los pagos
    getIp: (): Promise<AxiosResponse> => axios.get(url_ip),
    sessionToken: (body:any): Promise<AxiosResponse> => axiosInstance.post("pago",body)
  },
  MENSAJE:{
    mostrar: (): Promise<AxiosResponse> => axiosInstance.get(`messages`),
    enviarMensaje: (data: Mensaje): Promise<AxiosResponse> => axiosInstance.post(`messages`, data)
  }
};
