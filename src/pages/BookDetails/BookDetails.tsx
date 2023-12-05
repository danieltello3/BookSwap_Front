import { useState , useEffect } from "react";
import CategoriaSidebar from "../../components/ui/organismos/CategoriaSidebar/CategoriaSidebar";
import { Book } from "../../models/Book.model";
import { useParams } from "react-router-dom";
import { obtenerLibro } from "../../services/BookService";

const BookDetails = () => {

  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const libro = await obtenerLibro(Number(id));

        if (libro) {
          setBook(libro);
        } else {
          console.error('Libro no encontrado');
        }
      } catch (error) {
        console.error('Error al obtener el libro:', error);
      }
    };

    fetchBook();
  }, [id])

    return (
      <div className="flex w-full p-6 gap-4">
        <CategoriaSidebar />
        <div className="flex flex-row- gap-10 w-full">        
            <div className="flex flex-col w-2/6">
                <img 
                    src={book.imagen_url}
                    className="w-45"
                    alt="Portada del libro"></img>
                <div className = "py-14 px-3 bg-[#D9D9D9]">
                    <b>DETALLES GENERALES</b>
                    <p>Número de páginas: {book.numero_paginas}</p>
                    <p>Idioma: {book.idioma}</p>
                    <p>Encuadernación: {book.encuadernacion}</p>
                    <p>Año de publicación: {book.fecha_publicacion}</p>
                    <p>ISBN: {book.ISBN}</p>
                    <p>Categoría: {book.categoria}</p>
                </div>
            </div>

            <div className="flex flex-col w-4/6 gap-5 p-5">
              <h1 className="text-4xl font-extrabold leading-none 
                              tracking-tight text-gray-900 md:text-5xl 
                              lg:text-6xl font-['Georgia']">{book.titulo}</h1>
              <div className="flex mb-10">
                <p className="text-2xl font-extralight text-gray-900 font-['Georgia']">{book.autor}</p> 
                <p className="text-2xl font-extralight text-gray-900 font-['Georgia']">&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;</p>
                <p className="text-2xl font-extralight text-blue-300 font-['Georgia']">EDITORIAL {book.editorial}</p> 
              </div>
              <div className="text-3xl font-extrabold leading-none 
                               text-gray-900 dark:text-white font-['Georgia']">
                S/ {book.precio}
              </div>


              <div className="flex flex-col">
                <b className="mt-2">SINOPSIS</b>
                <p>{book.sinopsis}</p>
              </div>

            </div>

                
        </div>
      </div>
    );
  };
  
  export default BookDetails;
  