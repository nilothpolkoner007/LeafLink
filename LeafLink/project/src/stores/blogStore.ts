import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  image_url: string;
  author_id: string;
  created_at: string;
}

interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
  fetchBlogs: () => Promise<void>;
  createBlog: (blog: Omit<Blog, 'id' | 'created_at' | 'author_id'>) => Promise<void>;
  deleteBlog: (id: string) => Promise<void>;
}

export const useBlogStore = create<BlogState>((set) => ({
  blogs: [],
  loading: false,
  error: null,

  fetchBlogs: async () => {
    set({ loading: true });
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ blogs: data, error: null });
    } catch (error: unknown) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  createBlog: async (blog) => {
    try {
      const { data: user } = await supabase.auth.getUser();
      if (!user.user) throw new Error('Not authenticated');

      const { error } = await supabase.from('blogs').insert([
        { ...blog, author_id: user.user.id }
      ]);

      if (error) throw error;
    } catch (error: unknown) {
      set({ error: (error as Error).message });
    }
  },

  deleteBlog: async (id) => {
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (error: unknown) {
      set({ error: (error as Error).message });
    }
  },
}));