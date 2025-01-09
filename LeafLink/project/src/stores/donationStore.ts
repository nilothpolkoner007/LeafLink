import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Donation {
  id: string;
  amount: number;
  cause: string;
  user_id: string;
  created_at: string;
  status: 'pending' | 'completed' | 'failed';
}

interface DonationState {
  donations: Donation[];
  loading: boolean;
  error: string | null;
  createDonation: (amount: number, cause: string) => Promise<void>;
  fetchUserDonations: () => Promise<void>;
}

export const useDonationStore = create<DonationState>((set) => ({
  donations: [],
  loading: false,
  error: null,

  createDonation: async (amount: number, cause: string) => {
    set({ loading: true });
    try {
      const { data: user } = await supabase.auth.getUser();
      if (!user.user) throw new Error('Not authenticated');

      const { error } = await supabase.from('donations').insert([
        {
          amount,
          cause,
          user_id: user.user.id,
          status: 'pending'
        }
      ]);

      if (error) throw error;
    } catch (error: unknown) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  fetchUserDonations: async () => {
    set({ loading: true });
    try {
      const { data: user } = await supabase.auth.getUser();
      if (!user.user) throw new Error('Not authenticated');

      const { data, error } = await supabase
        .from('donations')
        .select('*')
        .eq('user_id', user.user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ donations: data });
    } catch (error: unknown) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },
}));