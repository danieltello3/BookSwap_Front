import CategoriaSidebar from "../../components/ui/organismos/CategoriaSidebar/CategoriaSidebar";
import { CategoriaOption } from "../../models/Categoria.model";
import { Book } from "../../models/Book.model";
import WishCard from "../../components/ui/moleculas/Category/WishCard";

const options: CategoriaOption[] = [
    { nombre: "Arte", id: 1 },
    { id: 2, nombre: "Ciencia" },
    { id: 3, nombre: "Deportes" },
    { id: 4, nombre: "Tecnologia" },
    { id: 5, nombre: "Biografía" },
    { id: 6, nombre: "Historia" }
  ];

const book: Book = {
  id: 1,
  titulo: "ORIGEN",
  categoria:["Novela de ciencia ficción","Thriller intelectual"],
  estado: "MUY BUENO",
  ISBN: "9786124181740",
  idioma: "Español",
  numero_paginas: 640,
  fecha_publicacion: "2019",
  editorial:"PLANETA",
  autor: "DAN BROWN",
  precio:40,
  imagen_url: "https://http2.mlstatic.com/D_NQ_NP_640618-MLU70081325840_062023-O.webp",
  encuadernacion: "Tapa blanda",
  sinopsis: "Robert Langdon, profesor de simbología e iconografía religiosa de la universidad de Harvard, acude al Museo Guggenheim Bilbao para asistir a un trascendental anuncio que «cambiará la faz de la ciencia para siempre». El anfitrión de la velada es Edmond Kirsch, un joven multimillonario cuyos visionarios inventos tecnológicos y audaces predicciones lo han convertido en una figura de renombre mundial. Kirsch, uno de los alumnos más brillantes de Langdon años atrás, se dispone a revelar un extraordinario descubrimiento que dará respuesta a las dos preguntas que han obsesionado a la humanidad desde el principio de los tiempos."
}

  const BookDetails = () => {
    return (
      <div className="flex w-full p-6 gap-4">
        <CategoriaSidebar title="Categorias" options={options} />
        <div className="flex flex-row- gap-10 w-full">
            {/*Componente de imagen del libro y Detalles Generales*/}            
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
                              lg:text-6xl dark:text-white font-['Georgia']">ORIGEN</h1>
              <div className="flex mb-10">
                <p className="text-2xl font-extralight text-gray-900 dark:text-white font-['Georgia']">DAN BROWN </p> 
                <p className="text-2xl font-extralight text-gray-900 dark:text-white font-['Georgia']">&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;</p>
                <p className="text-2xl font-extralight text-blue-300 font-['Georgia']">EDITORIAL PLANETA</p> 
              </div>
              <div className="text-3xl font-extrabold leading-none 
                               text-gray-900 dark:text-white font-['Georgia']">
                S/. {book.precio}
              </div>


              <div className="flex flex-col">
                <b className="mt-2">SINOPSIS</b>
                <p>Robert Langdon, profesor de simbología e iconografía religiosa de la universidad de Harvard, acude al Museo Guggenheim Bilbao para asistir a un trascendental anuncio que «cambiará la faz de la ciencia para siempre». El anfitrión de la velada es Edmond Kirsch, un joven multimillonario cuyos visionarios inventos tecnológicos y audaces predicciones lo han convertido en una figura de renombre mundial. Kirsch, uno de los alumnos más brillantes de Langdon años atrás, se dispone a revelar un extraordinario descubrimiento que dará respuesta a las dos preguntas que han obsesionado a la humanidad desde el principio de los tiempos.</p>
              </div>
              
              <WishCard img_url={book.imagen_url} 
                        titulo={book.titulo} 
                        autor={book.autor} 
                        precio={book.precio} 
                        editorial={book.editorial}
                        fecha_publicacion={book.fecha_publicacion}
                        num_paginas={book.numero_paginas}
                        estado = {book.estado}
                        />

            </div>

                
        </div>
      </div>
    );
  };
  
  export default BookDetails;
  