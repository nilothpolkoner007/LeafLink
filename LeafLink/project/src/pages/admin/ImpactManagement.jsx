import React from 'react';
import { LineChart, TreePine, Recycle } from 'lucide-react';

export default function ImpactManagement() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <LineChart className="h-8 w-8" />
          Impact Dashboard
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <TreePine className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">Tree Planting Impact</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Trees Planted</span>
              <span className="text-2xl font-bold text-green-600">1,234</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CO₂ Offset</span>
              <span className="text-2xl font-bold text-green-600">24.7 tons</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <Recycle className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Plastic Reduction Impact</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Plastic Saved</span>
              <span className="text-2xl font-bold text-blue-600">2,567 kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Participants</span>
              <span className="text-2xl font-bold text-blue-600">156</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}