import React from 'react';
import { ShoppingBag, Package } from 'lucide-react';

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: 'Reusable Water Bottle',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 2,
      name: 'Bamboo Utensil Set',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1584346133934-a3afd2a33c3c?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 3,
      name: 'Cotton Shopping Bags',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-6 flex items-center gap-2">
        <ShoppingBag className="h-8 w-8" />
        Eco Shop
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-green-700 mb-2">{product.name}</h2>
              <div className="flex items-center justify-between">
                <span className="text-lg">${product.price}</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}