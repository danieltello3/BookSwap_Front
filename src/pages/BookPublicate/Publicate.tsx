// Publicate.tsx
import React from 'react';
import RatingsSection from '../../components/ui/moleculas/RatingSection/RatingSection';

interface Book {
  title: string;
  author: string;
  // Agrega más propiedades según sea necesario
}

const booksData: Book[] = [
  { title: 'Libro 1', author: 'Autor 1' },
  { title: 'Libro 2', author: 'Autor 2' },
  { title: 'Libro 3', author: 'Autor 3' },
  // Agrega más libros según sea necesario
];

const Publicate: React.FC = () => {
  const ratingsData = [
    { starCount: 5, percentage: 40 },
    { starCount: 4, percentage: 17 },
    { starCount: 3, percentage: 8 },
    { starCount: 2, percentage: 4 },
    { starCount: 1, percentage: 1 },
  ];

  return (
    <div className="flex flex-row">
      {/* Sección de Libros Publicados */}
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Libros Publicados</h2>
        <table className="w-full border-t-2 border-b-2 border-gray-300">
          <tbody>
            {booksData.map((book, index) => (
              <tr key={index}>
                <td className="border p-2">
                  <div>
                    <p className="font-bold">Nombre del libro: {book.title}</p>
                    <p>Precio: ...</p>
                    <p>Autor: {book.author}</p>
                    <p>Número de páginas: ...</p>
                    <p>Estado del libro: ...</p>
                    <p>Editorial: ...</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sección de Puntuación del Usuario */}
      <div className="w-1/2 p-4">
        <RatingsSection ratings={ratingsData} totalRatings={1745} />
      </div>
    </div>
  );
};

export default Publicate;
