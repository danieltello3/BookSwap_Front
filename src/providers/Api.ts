import axios, { AxiosResponse } from "axios";
import { Usuario } from "../models/Usuario.model";
import { Mensaje } from "../models/Mensaje.model";
import { Post } from "../models/Posts.model";
export const baseURL = "http://localhost:3001/";

export const axiosInstance = axios.create({
  baseURL

});
const url_ip = "https://api.ipify.org?format=json";

export const api = {
  COMBOS: {
    categorias: (): Promise<AxiosResponse> => axiosInstance.get("categoria")
  },
  LIBRO:{
    //Retorna los libros que encontré por cada categoría
    obtenerLibros: (): Promise<AxiosResponse> => axiosInstance.get("libros"),
    obtenerLibrosPorCategoria: (categoriaId: number): Promise<AxiosResponse> => axiosInstance.get(`categoria/${categoriaId}`), 
    obtenerLibro: (libroId: number): Promise<AxiosResponse> => axiosInstance.get(`libro/${libroId}`)
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
  },















  POSTS:{
    mostrar: (): Promise<AxiosResponse> => axiosInstance.get(`posts`),
    crear: (data: Mensaje): Promise<AxiosResponse> => axiosInstance.post(`posts`, data),
    like: (data:Post): Promise<AxiosResponse> => axiosInstance.post(`/posts/:postId/like`, data)
  }
};
