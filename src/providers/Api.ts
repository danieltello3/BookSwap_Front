import axios, { AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/"
});

export const api = {
  COMBOS: {
    categorias: (): Promise<AxiosResponse> => axiosInstance.get("categoria"),
    librosPorCategoria: (categoriaId: number): Promise<AxiosResponse> =>
      axiosInstance.get(`libros/${categoriaId}`),

  },
  USUARIO: {
    //aqui van los endpoints relacionado al usuario
  },
  ORDEN: {
    //aqui van los endpoints relacionado a las ordenes
  },
  PAGO: {
    //aqui van los endpoints relacionado a los pagos
  }
};
