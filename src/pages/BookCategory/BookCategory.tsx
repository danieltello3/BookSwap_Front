import { useEffect, useState } from "react";
import BookCard from "../../components/ui/moleculas/BookCard/BookCard";
import CategoriaSidebar from "../../components/ui/organismos/CategoriaSidebar/CategoriaSidebar";
import { Book } from "../../models/Book.model";
import { obtenerLibrosPorCategoria } from "../../services/BookService";
import { useParams } from "react-router-dom";


const BookCategory = () => {
  
  const { id } = useParams();

  const [libros,setLibros] = useState([]);
  const getLibros = async () => {
    try {
      const librosData = await obtenerLibrosPorCategoria(Number(id));
      setLibros(librosData);
    } catch (error) {
      console.log('Error fetching libros:', error);
    }
  };

  useEffect(() => {
    getLibros();
  }, []);


  return (
    <div className="flex w-full p-6 gap-4">
      <CategoriaSidebar />
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-4">
            
          <div className="flex gap-4 p-4">
            {libros.map((libro) => (
              <BookCard book={libro} key={libro.id}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCategory;
