import React from 'react';
import { Settings, Package, Users, TreePine, Recycle } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            icon={<Package className="h-6 w-6" />}
            title="Products"
            value="24"
            link="/admin/products"
          />
          <DashboardCard
            icon={<Users className="h-6 w-6" />}
            title="Users"
            value="156"
            link="/admin/users"
          />
          <DashboardCard
            icon={<TreePine className="h-6 w-6" />}
            title="Trees Planted"
            value="1,234"
            link="/admin/trees"
          />
          <DashboardCard
            icon={<Recycle className="h-6 w-6" />}
            title="Plastic Saved"
            value="2,567 kg"
            link="/admin/impact"
          />
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ icon, title, value, link }) {
  return (
    <a 
      href={link}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-green-50 rounded-full text-green-600">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-3xl font-bold text-green-600">{value}</p>
    </a>
  );
}