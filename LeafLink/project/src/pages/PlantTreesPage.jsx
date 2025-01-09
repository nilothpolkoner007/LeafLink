import React from 'react';
import { TreePine, LeafyGreen } from 'lucide-react';

export default function PlantTreesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-6 flex items-center gap-2">
        <TreePine className="h-8 w-8" />
        Plant Trees
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Why Plant Trees?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <LeafyGreen className="h-5 w-5 text-green-600 mt-1" />
              <span>Trees absorb CO2 and release oxygen</span>
            </li>
            <li className="flex items-start gap-2">
              <LeafyGreen className="h-5 w-5 text-green-600 mt-1" />
              <span>Provide habitat for wildlife</span>
            </li>
            <li className="flex items-start gap-2">
              <LeafyGreen className="h-5 w-5 text-green-600 mt-1" />
              <span>Prevent soil erosion</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Plant a Tree Today</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Number of Trees</label>
              <input 
                type="number" 
                min="1"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Contribute
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
