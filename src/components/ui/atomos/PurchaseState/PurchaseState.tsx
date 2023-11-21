import React from 'react';

interface PurchaseStateProps {
  type: 'Cancelado' | 'En camino' | 'Entregado';
}

const PurchaseState: React.FC<PurchaseStateProps> = ({ type }) => {
  let bgColor, textColor, labelText;

  switch (type) {
    case 'Cancelado':
      bgColor = 'bg-red-200';
      textColor = 'text-red-900';
      labelText = 'Cancelado';
      break;
    case 'En camino':
      bgColor = 'bg-orange-200';
      textColor = 'text-orange-900';
      labelText = 'En camino';
      break;
    case 'Entregado':
      bgColor = 'bg-green-200';
      textColor = 'text-green-900';
      labelText = 'Entregado';
      break;
    default:
      bgColor = 'bg-gray-200';
      textColor = 'text-gray-900';
      labelText = 'Unknown';
  }

  return (
    <span className={`relative inline-block px-3 py-1 font-semibold ${textColor} leading-tight`}>
      <span aria-hidden className={`absolute inset-0 ${bgColor} opacity-50 rounded-full`}></span>
      <span className="relative">{labelText}</span>
    </span>
  );
};

export default PurchaseState;
