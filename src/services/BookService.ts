import { Book } from "../models/Book.model";
import { api } from "../providers/Api";

export const obtenerLibros = async () => {
    const {data} = await api.LIBRO.obtenerLibros();
    const adapter: Book[] = data.content.map((item:Book)=>({
      id:item.id,
      titulo:item.titulo,
      categoria:item.categoria,
      estado:item.estado,
      editorial:item.editorial,
      autor:item.autor,
      precio:item.precio,
      imagen_url: item.imagen_url,
      encuadernacion:item.encuadernacion,
      sinopsis:item.sinopsis,
      vendedor: {
        id: item.vendedor.id,
        nombre: item.vendedor.nombre,
        apellido: item.vendedor.apellido,
        ubicacion: item.vendedor.ubicacion,
      }
    })) 
    return adapter;
  }

export const obtenerLibro = async (libroId: number) => {

    const { data } = await api.LIBRO.obtenerLibro(libroId);

    if (!data.content) {
      return null;
    }

    const adapter: Book = {
      id: data.content.id,
      titulo: data.content.titulo,
      categoria: data.content.categoria,
      estado: data.content.estado,
      editorial: data.content.editorial,
      idioma:data.content.idioma,
      ISBN:data.content.isbn,
      numero_paginas:data.content.numero_paginas,
      autor: data.content.autor,
      precio: data.content.precio,
      imagen_url: data.content.imagen_url,
      encuadernacion: data.content.encuadernacion,
      sinopsis: data.content.sinopsis,
      vendedor: {
        id: data.content.vendedor.id,
        nombre: data.content.vendedor.nombre,
        apellido: data.content.vendedor.apellido,
        ubicacion: data.content.vendedor.ubicacion,
      },
    };

    return adapter;

};

export const obtenerLibrosPorCategoria = async (categoriaId: number) => {
  const { data } = await api.LIBRO.obtenerLibrosPorCategoria(categoriaId);

  if (!data.content) {
    return null;
  }

  const adapter: Book[] = data.content.map((item:any)=>({
    id:item.id,
    titulo:item.titulo,
    categoria:item.categoria,
    estado:item.estado_libro,
    editorial:item.editorial,
    autor:item.autor,
    precio:item.precio,
    imagen_url: item.imagen[0].url,
    encuadernacion:item.encuadernacion,
    sinopsis:item.sinopsis,
    vendedor: {
      id: item.vendedor.id,
      nombre: item.vendedor.nombre,
      apellido: item.vendedor.apellido,
      ubicacion: item.vendedor.direccion.distrito,
    }
  })) 

  return adapter;
}
