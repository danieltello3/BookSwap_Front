import React from "react";
import PurchaseItem from "../../moleculas/PurchaseItem/PurchaseItem";

interface PurchaseListProps {
  purchases: {
    name: string;
    author: string;
    price: number;
    seller: string;
    imageUrl?: string;
  }[],
    totalSum: number;
  }


const PurchaseList: React.FC<PurchaseListProps> = ({ purchases, totalSum }) => {
  return (
    <div className="bg-gray-100 rounded-lg">
      <h5 className="px-10 py-5 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
        Resumen de la Compra
      </h5>

      <div className="bg-white p-8 rounded-lg">
        <div className="purchase-list">
          {purchases.map((purchase, index) => (
            <React.Fragment key={index}>
              <PurchaseItem
                name={purchase.name}
                price={purchase.price}
                author={purchase.author}
                seller={purchase.seller}
                imageUrl={purchase.imageUrl}
              />
              {index !== purchases.length - 1 && (
                <hr className="border-t my-4" />
              )}
            </React.Fragment>
          ))}
        </div>

        <hr className="border-t-2 border-b-1 my-4 w-full" />

        {/* Suma total de compra */}
        <div className="total-sum-section">
          <p>Precio Total: S/ {totalSum.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseList;
