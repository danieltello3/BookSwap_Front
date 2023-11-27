import BookCard from "../../components/ui/moleculas/BookCard/BookCard";
import BotonPago from "../../components/ui/organismos/BotonPago/BotonPago";
import CategoriaSidebar from "../../components/ui/organismos/CategoriaSidebar/CategoriaSidebar";
import { Book } from "../../models/Book.model";
import { CategoriaOption } from "../../models/Categoria.model";

const destacados: Book[] = [
  {
    id: 1,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    sinopsis:
      "El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry.",
    categoria: ["Arte"],
    imagen_url:
      "https://img1.od-cdn.com/ImageType-400/5835-1/6E6/854/9D/%7B6E68549D-9C8B-4269-B702-EFC9B6E63C1A%7DImg400.jpg",
    precio: 100,
    estado: "Nuevo",
    vendedor: {
      nombre: "Juan",
      apellido: "Perez",
      id: 1,
      ubicacion: "Arequipa"
    },
  },
  {
    id: 2,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    sinopsis:
      "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez.",
    categoria: ["Literatura"],
    imagen_url:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg",
    precio: 150,
    estado: "Usado",
    vendedor: {
      nombre: "Maria",
      apellido: "Lopez",
      id: 2,
      ubicacion: "Lima"
    },
  },
];

const Home = () => {
  return (
    <div className="flex w-full p-6 gap-4">
      <CategoriaSidebar />
      <div className="flex flex-col gap-5 w-full">
        <div
          className="h-96 bg-cover rounded-3xl"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
          }}></div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Destacados</h1>
          <div className="flex gap-4 p-4">
            {destacados.map((libro) => (
              <BookCard book={libro} key={libro.id}/>
            ))}
          </div>
          <BotonPago/>
        </div>
      </div>
    </div>
  );
};

export default Home;
