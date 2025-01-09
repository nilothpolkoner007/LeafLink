import React from 'react';
import { Users, MessageSquare } from 'lucide-react';

export default function CommunityPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-6 flex items-center gap-2">
        <Users className="h-8 w-8" />
        Community
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Recent Discussions</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b pb-4">
                <div className="flex items-start gap-2">
                  <MessageSquare className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Tips for Zero Waste Shopping</h3>
                    <p className="text-gray-600">Started by John Doe • 2h ago</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Start a Discussion</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Topic</label>
              <input 
                type="text"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea 
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200"
                rows={4}
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Post Discussion
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}