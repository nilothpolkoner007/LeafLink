import React, { useState } from 'react';
import { TreePine, DollarSign } from 'lucide-react';

interface DonationFormProps {
  onSubmit: (amount: number, cause: string) => Promise<void>;
}

export default function DonationForm({ onSubmit }: DonationFormProps) {
  const [amount, setAmount] = useState<number>(10);
  const [cause, setCause] = useState('trees');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(amount, cause);
    } catch (error) {
      console.error('Donation failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Select Cause</label>
        <select
          value={cause}
          onChange={(e) => setCause(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200"
        >
          <option value="trees">Plant Trees</option>
          <option value="pollution">Fight Pollution</option>
          <option value="education">Environmental Education</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Donation Amount</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="block w-full pl-10 pr-12 border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder="0.00"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        {loading ? (
          'Processing...'
        ) : (
          <>
            <TreePine className="mr-2 h-5 w-5" />
            Make Donation
          </>
        )}
      </button>
    </form>
  );
}