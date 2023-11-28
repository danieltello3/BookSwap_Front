import React from 'react';

interface PurchaseItemProps {
  name: string;
  author: string;
  price: number;
  seller: string;
  imageUrl?: string;
}

const PurchaseItem: React.FC<PurchaseItemProps> = ({ name, author, price, seller, imageUrl }) => {
  return (
    <div className="purchase-item p-4 flex items-center">
      {imageUrl ? (
        <div className="image-container mr-4 aspect-w-1 aspect-h-1 min-w-20 min-h-20 max-w-50">
          <img
            src={imageUrl}
            alt={`Image for ${name}`}
            className="object-cover w-30 h-20"
          />
        </div>
      ) : (
        <div className="placeholder-image-container mr-4 aspect-w-1 aspect-h-1 min-w-20 min-h-20 max-w-50">
          {/* Placeholder content or alternative image */}
          <img
            src="src\assets\icons\generic_book.svg"
            alt={`Placeholder Image for ${name}`}
            className="object-cover w-30 h-20 min-w-fit"
          />
        </div>
      )}
      <div className="text-properties px-10">
        <p>NOMBRE: {name}</p>
        <p>AUTOR: {author}</p>
        <p>PRECIO: S/. {price.toFixed(2)}</p>
        <p>VENDEDOR: {seller}</p>
      </div>
      <hr className="border-t my-4" />
    </div>
  );
};

export default PurchaseItem;
