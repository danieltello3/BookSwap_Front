import { api } from "../providers/Api";  // Asegúrate de tener la ruta correcta a tu archivo de API
import { Mensaje } from "../models/Mensaje.model";

export const MensajeService = {
  mostrarMensajes: async () => {
    try {
      const response = await api.MENSAJE.mostrar();
      // Asegúrate de manejar la respuesta según la estructura de tu API
      return response.data;
    } catch (error) {
      console.error('Error al obtener los mensajes:', error);
      throw error;
    }
  },
};

export const enviarMensaje = async (mensaje: Mensaje) => {
    try {
        const response = await api.MENSAJE.enviarMensaje(mensaje);
        // Asegúrate de manejar la respuesta según la estructura de tu API
        return response.data;
    } catch (error) {
        console.error('Error al obtener los mensajes:', error);
        throw error;
    }
}
