import React from 'react';
import { TreePine, Award, Heart } from 'lucide-react';

interface UserStatsProps {
  treesPlanted: number;
  totalDonations: number;
  badges: string[];
}

export default function UserStats({ treesPlanted, totalDonations, badges }: UserStatsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <TreePine className="h-8 w-8 text-green-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Trees Planted</h3>
            <p className="text-3xl font-bold text-green-600">{treesPlanted}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="h-8 w-8 text-red-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Total Donations</h3>
            <p className="text-3xl font-bold text-red-600">${totalDonations}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <Award className="h-8 w-8 text-yellow-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Badges Earned</h3>
            <p className="text-3xl font-bold text-yellow-600">{badges.length}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 text-sm font-semibold text-yellow-700 bg-yellow-100 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}