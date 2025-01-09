import React from 'react';
import { Droplet } from 'lucide-react';

interface PlasticTipProps {
  title: string;
  description: string;
  impact: string;
}

export default function PlasticTip({ title, description, impact }: PlasticTipProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <Droplet className="h-6 w-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="bg-blue-50 p-3 rounded-md">
        <p className="text-blue-700">Impact: {impact}</p>
      </div>
    </div>
  );
}