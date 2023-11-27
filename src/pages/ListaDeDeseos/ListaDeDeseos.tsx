import WishCard from "../../components/ui/moleculas/Card/WishCard";
import CategoriaSidebar from "../../components/ui/organismos/CategoriaSidebar/CategoriaSidebar";
import { CategoriaOption } from "../../models/Categoria.model";
import { Book } from "../../models/Book.model";

const books: Book[] = [
  {
    id: 1,
    titulo: "ORIGEN",
    categoria: ["Novela de ciencia ficción", "Thriller intelectual"],
    estado: "MUY BUENO",
    ISBN: "9786124181740",
    idioma: "Español",
    numero_paginas: 640,
    fecha_publicacion: "2019",
    editorial: "PLANETA",
    autor: "DAN BROWN",
    precio: 40,
    imagen_url:
      "https://http2.mlstatic.com/D_NQ_NP_640618-MLU70081325840_062023-O.webp",
    encuadernacion: "Tapa blanda",
    sinopsis:
      "Robert Langdon, profesor de simbología e iconografía religiosa de la universidad de Harvard, acude al Museo Guggenheim Bilbao para asistir a un trascendental anuncio que «cambiará la faz de la ciencia para siempre». El anfitrión de la velada es Edmond Kirsch, un joven multimillonario cuyos visionarios inventos tecnológicos y audaces predicciones lo han convertido en una figura de renombre mundial. Kirsch, uno de los alumnos más brillantes de Langdon años atrás, se dispone a revelar un extraordinario descubrimiento que dará respuesta a las dos preguntas que han obsesionado a la humanidad desde el principio de los tiempos."
  },
  {
    id: 2,
    titulo: "ORIGEN",
    categoria: ["Novela de ciencia ficción", "Thriller intelectual"],
    estado: "MUY BUENO",
    ISBN: "9786124181740",
    idioma: "Español",
    numero_paginas: 640,
    fecha_publicacion: "2019",
    editorial: "PLANETA",
    autor: "DAN BROWN",
    precio: 40,
    imagen_url:
      "https://http2.mlstatic.com/D_NQ_NP_640618-MLU70081325840_062023-O.webp",
    encuadernacion: "Tapa blanda",
    sinopsis:
      "Robert Langdon, profesor de simbología e iconografía religiosa de la universidad de Harvard, acude al Museo Guggenheim Bilbao para asistir a un trascendental anuncio que «cambiará la faz de la ciencia para siempre». El anfitrión de la velada es Edmond Kirsch, un joven multimillonario cuyos visionarios inventos tecnológicos y audaces predicciones lo han convertido en una figura de renombre mundial. Kirsch, uno de los alumnos más brillantes de Langdon años atrás, se dispone a revelar un extraordinario descubrimiento que dará respuesta a las dos preguntas que han obsesionado a la humanidad desde el principio de los tiempos."
  },
  {
    id: 3,
    titulo: "ORIGEN",
    categoria: ["Novela de ciencia ficción", "Thriller intelectual"],
    estado: "MUY BUENO",
    ISBN: "9786124181740",
    idioma: "Español",
    numero_paginas: 640,
    fecha_publicacion: "2019",
    editorial: "PLANETA",
    autor: "DAN BROWN",
    precio: 40,
    imagen_url:
      "https://http2.mlstatic.com/D_NQ_NP_640618-MLU70081325840_062023-O.webp",
    encuadernacion: "Tapa blanda",
    sinopsis:
      "Robert Langdon, profesor de simbología e iconografía religiosa de la universidad de Harvard, acude al Museo Guggenheim Bilbao para asistir a un trascendental anuncio que «cambiará la faz de la ciencia para siempre». El anfitrión de la velada es Edmond Kirsch, un joven multimillonario cuyos visionarios inventos tecnológicos y audaces predicciones lo han convertido en una figura de renombre mundial. Kirsch, uno de los alumnos más brillantes de Langdon años atrás, se dispone a revelar un extraordinario descubrimiento que dará respuesta a las dos preguntas que han obsesionado a la humanidad desde el principio de los tiempos."
  }
];

const ListaDeDeseos = () => {
  return (
    <div className="flex w-full p-6 gap-4">
      <CategoriaSidebar />
      <div className="flex flex-col gap-y5">
        {books?.map((book) => (
          <WishCard
            key={book.id}
            img_url={book.imagen_url}
            titulo={book.titulo}
            autor={book.autor}
            precio={book.precio}
            editorial={book.editorial}
            fecha_publicacion={book.fecha_publicacion}
            num_paginas={book.numero_paginas}
            estado={book.estado}
          />
        ))}
      </div>
    </div>
  );
};

export default ListaDeDeseos;
