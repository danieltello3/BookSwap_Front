import { useEffect, useState } from "react";
import BookCard from "../../components/ui/moleculas/BookCard/BookCard";
import CategoriaSidebar from "../../components/ui/organismos/CategoriaSidebar/CategoriaSidebar";
import { Book } from "../../models/Book.model";
import { obtenerLibros } from "../../services/BookService";


const Home = () => {

  //Aquí se llama a la api
  const [libros,setLibros] = useState([]);

  const getLibros = async () => {
    try {
      const librosData = await obtenerLibros();
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
        <div
          className="h-96 bg-cover rounded-3xl"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
          }}></div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Destacados</h1>
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

export default Home;
