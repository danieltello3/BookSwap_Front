import { Usuario } from "../models/Usuario.model";
import { api } from "../providers/Api";
import {axiosInstance} from "../providers/Api";
import { getTokenFromLocalStorage } from "../utils/localStorage.utils";

export const crearUsuario = async (usuario: Usuario) => {
  try {
    // Llama a la función para crear un nuevo usuario
    const { data } = await api.USUARIO.crear(usuario);
    
    // Devuelve el resultado de la creación del usuario
    return data;
  } catch (error) {
    // Maneja el error de manera apropiada, lanza una excepción, muestra un mensaje, etc.
    console.error('Error al crear el usuario:', error);
    throw error;
  }
};

export const loginUsuario = async (usuario: Usuario) => {
    try {
      // Llama a la función para realizar el login
      const { data } = await api.USUARIO.login(usuario);
  
      // Agrega un console.log para ver la respuesta
      console.log('Respuesta del login:', data);
  
      // Guarda el token en el localStorage
      localStorage.setItem("user", JSON.stringify(data));
  
      // Devuelve el resultado del login
      return data;
    } catch (error) {
      // Maneja el error de manera apropiada, lanza una excepción, muestra un mensaje, etc.
      console.error('Error al realizar el login:', error);
      throw error;
    }
  };
  
  export const obtenerUsuario = async () => {
    try {
      // Obtiene el token del almacenamiento local
      const token = await getTokenFromLocalStorage();
  
      // Si no hay token, podrías manejarlo de alguna manera, o simplemente devolver null
      if (!token) {
        console.error("No se encontró el token de autorización.");
        return null;
      }
  
      // Configura el token en las cabeceras de la solicitud
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  
      // Realiza la solicitud para obtener el usuario
      const { data } = await axiosInstance.get("usuario/perfil");
  
      // Devuelve el resultado de obtener el usuario
      return data;
    } catch (error) {
      // Maneja el error de manera apropiada, lanza una excepción, muestra un mensaje, etc.
      console.error('Error al obtener el usuario:', error);
      throw error;
    }
  };
  
  export const actualizarUsuario = async (usuario: Usuario) => {
    try {
      // Obtiene el token del almacenamiento local
      const token = await getTokenFromLocalStorage();
  
      // Si no hay token, podrías manejarlo de alguna manera, o simplemente devolver null
      if (!token) {
        console.error("No se encontró el token de autorización.");
        return null;
      }
  
      // Configura el token en las cabeceras de la solicitud
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  
      // Realiza la solicitud para actualizar el usuario
      const { data } = await axiosInstance.put("usuario", usuario);
  
      // Devuelve el resultado de actualizar el usuario
      return data;
    } catch (error) {
      // Maneja el error de manera apropiada, lanza una excepción, muestra un mensaje, etc.
      console.error('Error al actualizar el usuario:', error);
      throw error;
    }
  }
  