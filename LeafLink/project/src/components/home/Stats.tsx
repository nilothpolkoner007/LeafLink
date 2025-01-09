import React from 'react';
import { TreePine, Recycle, Users } from 'lucide-react';

export default function Stats() {
  return (
    <div className="relative bg-green-900/90 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center text-white">
          <div className="flex flex-col items-center">
            <TreePine className="h-8 w-8 mb-2" />
            <div className="text-3xl font-bold mb-1">50K+</div>
            <div className="text-green-200">Trees Planted</div>
          </div>
          <div className="flex flex-col items-center">
            <Recycle className="h-8 w-8 mb-2" />
            <div className="text-3xl font-bold mb-1">100K+</div>
            <div className="text-green-200">Plastic Items Saved</div>
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-8 w-8 mb-2" />
            <div className="text-3xl font-bold mb-1">25K+</div>
            <div className="text-green-200">Active Members</div>
          </div>
        </div>
      </div>
    </div>
  );
}