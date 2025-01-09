import React from 'react';
import { Package } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  onAddToCart: (id: number) => void;
}

export default function ProductCard({ id, name, price, image, description, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-green-700 mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg">${price.toFixed(2)}</span>
          <button 
            onClick={() => onAddToCart(id)}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <Package className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}