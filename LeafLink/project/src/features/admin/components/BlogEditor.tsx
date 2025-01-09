import React, { useState } from 'react';
import { Save } from 'lucide-react';

interface BlogEditorProps {
  onSave: (data: {
    title: string;
    content: string;
    category: string;
    imageUrl: string;
  }) => Promise<void>;
}

export default function BlogEditor({ onSave }: BlogEditorProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave({ title, content, category, imageUrl });
      // Reset form
      setTitle('');
      setContent('');
      setCategory('');
      setImageUrl('');
    } catch (error) {
      console.error('Failed to save blog:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200"
          required
        >
          <option value="">Select a category</option>
          <option value="trees">Tree Plantation</option>
          <option value="pollution">Pollution Reduction</option>
          <option value="education">Environmental Education</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200"
            placeholder="https://example.com/image.jpg"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        {loading ? (
          'Saving...'
        ) : (
          <>
            <Save className="mr-2 h-5 w-5" />
            Save Blog Post
          </>
        )}
      </button>
    </form>
  );
}