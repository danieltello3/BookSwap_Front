import { api } from "../providers/Api";  // Asegúrate de tener la ruta correcta a tu archivo de API
import { Post } from "../models/Posts.model";

export const PostService = {
  mostrarPosts: async () => {
    try {
      const response = await api.POSTS.mostrar();
      // Asegúrate de manejar la respuesta según la estructura de tu API
      return response.data;
    } catch (error) {
      console.error('Error al obtener los mensajes:', error);
      throw error;
    }
  },
};

export const Like = async (post: Post) => {
  try {
    const response = await api.POSTS.like(post);
    // Asegúrate de manejar la respuesta según la estructura de tu API
    return response.data;
  } catch (error) {
    console.error('Error al obtener los mensajes:', error);
    throw error;
  }
}
