import React, { useState } from 'react';
import { Calculator, Trash2, TreePine } from 'lucide-react';

interface Impact {
  trees: number;
  plastic: number;
  co2: number;
}

export default function ImpactCalculator() {
  const [impact, setImpact] = useState<Impact>({
    trees: 0,
    plastic: 0,
    co2: 0
  });

  const calculateImpact = (trees: number, plastic: number) => {
    // Simplified calculation
    const co2 = (trees * 20) + (plastic * 0.5); // kg of CO2
    setImpact({ trees, plastic, co2 });
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
        <Calculator className="h-6 w-6" />
        Impact Calculator
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700 flex items-center gap-2">
              <TreePine className="h-5 w-5" />
              Trees Planted
            </span>
            <input
              type="number"
              min="0"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              onChange={(e) => calculateImpact(parseInt(e.target.value) || 0, impact.plastic)}
            />
          </label>

          <label className="block">
            <span className="text-gray-700 flex items-center gap-2">
              <Trash2 className="h-5 w-5" />
              Plastic Items Avoided (monthly)
            </span>
            <input
              type="number"
              min="0"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              onChange={(e) => calculateImpact(impact.trees, parseInt(e.target.value) || 0)}
            />
          </label>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-3">Your Impact</h3>
          <div className="space-y-2">
            <p className="text-green-700">CO₂ Reduced: {impact.co2} kg</p>
            <p className="text-green-700">Trees Contributing: {impact.trees}</p>
            <p className="text-green-700">Plastic Items Saved: {impact.plastic}</p>
          </div>
        </div>
      </div>
    </div>
  );
}