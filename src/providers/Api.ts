import axios, { AxiosResponse } from "axios";
import {Usuario}  from "../models/Usuario.model";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:4444/"
});


export const api = {
  COMBOS: {
    categorias: (): Promise<AxiosResponse> => axiosInstance.get("categoria")
  },
  USUARIO: {
    //aqui van los endpoints relacionado al usuario
    crear: (data: Usuario): Promise<AxiosResponse> => axiosInstance.post("usuario", data),
    login: (data: Usuario): Promise<AxiosResponse> => axiosInstance.post("usuario/login", data),
    usuario: (): Promise<AxiosResponse> => axiosInstance.get(`usuario/perfil`),
    // usuario:() : Promise<AxiosResponse> => axiosInstance.put(`usuario/perfil`),
  },
  ORDEN: {
    //aqui van los endpoints relacionado a las ordenes

  },
  PAGO: {
    //aqui van los endpoints relacionado a los pagos

  }
};
