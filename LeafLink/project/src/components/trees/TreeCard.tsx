import React from 'react';
import { TreePine } from 'lucide-react';

interface TreeCardProps {
  title: string;
  description: string;
  co2Offset: number;
}

export default function TreeCard({ title, description, co2Offset }: TreeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <TreePine className="h-6 w-6 text-green-600" />
        <h3 className="text-xl font-semibold text-green-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="bg-green-50 p-3 rounded-md">
        <p className="text-green-700">CO₂ Offset: {co2Offset}kg/year</p>
      </div>
    </div>
  );
}
module.exports = TreeCard;