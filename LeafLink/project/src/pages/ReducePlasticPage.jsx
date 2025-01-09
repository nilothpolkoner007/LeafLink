import React from 'react';
import { Recycle, Droplet } from 'lucide-react';
import ImpactCalculator from '../components/calculator/ImpactCalculator';

export default function ReducePlasticPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-6 flex items-center gap-2">
        <Recycle className="h-8 w-8" />
        Reduce Plastic
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Daily Actions</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <Droplet className="h-5 w-5 text-green-600 mt-1" />
              <span>Use reusable water bottles</span>
            </li>
            <li className="flex items-start gap-2">
              <Droplet className="h-5 w-5 text-green-600 mt-1" />
              <span>Bring your own shopping bags</span>
            </li>
            <li className="flex items-start gap-2">
              <Droplet className="h-5 w-5 text-green-600 mt-1" />
              <span>Choose plastic-free packaging</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Track Your Impact</h2>
          <ImpactCalculator />
        </div>
      </div>
    </main>
  );
}