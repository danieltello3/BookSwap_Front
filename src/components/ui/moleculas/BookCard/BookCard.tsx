import React from "react";
import { Book } from "../../../../models/Book.model";
import { useNavigate } from "react-router-dom";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div className="w-44 rounded overflow-hidden shadow-lg border border-black cursor-pointer" onClick={()=>navigate(`/bookdetails/${book.id}`)}>
      <img
        className="w-full px-6 pt-3 rounded-2xl"
        src={book.imagen_url}
        alt={book.titulo}
      />
      <div className="px-6 py-3">
        <div className="font-bold text-xl mb-2 text-center">{book.titulo}</div>
        <p className="text-gray-700 text-xs"><span className="font-bold">Estado: </span>{book.estado}</p>
        <p className="text-gray-700 text-xs">
          <span className="font-bold">Precio: </span>S/{book.precio}</p>
          <p className="text-gray-700 text-xs">
          <span className="font-bold">Lugar: </span>{book.vendedor.ubicacion}</p>
        <p className="text-gray-700 text-xs">
          <span className="font-bold">Vendedor: </span>{" "}
          {book.vendedor.nombre} {book.vendedor.apellido}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
