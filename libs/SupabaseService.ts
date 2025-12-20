import { supabase } from './supabaseClient'

export interface Category {
  id: string | number;
  name: string;
  description?: string;
  images: string | string[];
}

export interface Blog {
  id?: number;
  title: string;
  description?: string;
  image: string | string[];
  category: string;
  content: string;
  slug: string;
}

export interface CategoryInput {
  name: string;
  description?: string;
}

export class blogs {

  async addBlog(blog: Blog, imageUrl: string = ''): Promise<Blog> {
    const { data, error } = await supabase
      .from('blogs')
      .insert([
        {
          title: blog.title,
          description: blog.description,
          image: imageUrl,
          category: blog.category,
          content: blog.content,
          slug: blog.slug,
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async getAllBlogs(): Promise<Blog[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }

  async getBlogBySlug(slug: string): Promise<Blog | null> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null;
      throw error;
    }
    return data;
  }

  async getBlogById(id: number): Promise<Blog | null> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null;
      throw error;
    }
    return data;
  }

  async updateBlog(id: number, blog: Partial<Blog>, imageUrl?: string): Promise<Blog> {
    console.log(`Attempting to update blog with ID: ${id} (type: ${typeof id})`);

    // Debug: Check if blog exists
    const { data: exists, error: existError } = await supabase
      .from('blogs')
      .select('id')
      .eq('id', id)
      .single();

    console.log('Blog existence check:', { exists, existError });

    const updateData: any = {
      ...blog,
      updated_at: new Date().toISOString(),
    };

    if (imageUrl) {
      updateData.image = imageUrl;
    }

    const { data, error } = await supabase
      .from('blogs')
      .update(updateData)
      .eq('id', id)
      .select();

    console.log('Update result:', { data, error });

    if (error) throw error;
    if (!data || data.length === 0) {
      throw new Error(`Blog with id "${id}" not found or could not be updated. (Check RLS policies)`);
    }
    return data[0];
  }

  async deleteBlog(id: number): Promise<void> {
    // First get the blog to find its image
    const blog = await this.getBlogById(id);

    if (blog && blog.image) {
      const imagesToDelete = Array.isArray(blog.image) ? blog.image : [blog.image];
      if (imagesToDelete.length > 0) {
        await deleteImagesFromBucket(imagesToDelete);
      }
    }

    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
}

export const blogsService = new blogs();

export class CategoryService {
  async addCategory(category: CategoryInput, imageUrl: string = ''): Promise<Category> {
    const { data, error } = await supabase
      .from('categories')
      .insert([{
        name: category.name,
        description: category.description,
        images: imageUrl,
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async getAllCategories(): Promise<Category[]> {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name', { ascending: true });

    if (error) throw error;
    return data || [];
  }

  async updateCategory(
    categoryId: string | number,
    payload: Partial<CategoryInput> = {},
    imageUrl: string | null = null
  ): Promise<Category> {
    try {
      const updateData: Partial<Category> = {
        ...(payload.name && { name: payload.name }),
        ...(payload.description && { description: payload.description }),
        ...(imageUrl && { images: imageUrl }),
      };

      const { data, error } = await supabase
        .from('categories')
        .update(updateData)
        .eq('id', categoryId)
        .select()
        .single();

      if (error) throw error;
      if (!data) {
        throw new Error('Category not found or not updated');
      }

      return data;
    } catch (err: any) {
      console.error('Error updating category:', err.message);
      throw err;
    }
  }
}

export async function uploadFilesToBucket(files: File[]): Promise<string[]> {
  const urls: string[] = [];

  for (const file of files) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `Title/${fileName}`;

    const { error } = await supabase.storage
      .from('Blog')
      .upload(filePath, file);

    if (error) throw error;

    const { data } = supabase.storage
      .from('Blog')
      .getPublicUrl(filePath);

    urls.push(data.publicUrl);
  }

  return urls;
}

export async function deleteImagesFromBucket(imageUrls: string[] = []): Promise<{ success: boolean; message: string; deleted?: string[] }> {
  try {
    if (!Array.isArray(imageUrls) || imageUrls.length === 0) {
      return { success: false, message: 'No images provided for deletion' };
    }

    const filePaths = imageUrls.map(url => {
      try {
        const parts = new URL(url).pathname.split('/Blog/');
        return parts.length > 1 ? parts[1] : null;
      } catch (err) {
        console.warn('Invalid URL skipped:', url);
        return null;
      }
    }).filter((path): path is string => path !== null);

    if (filePaths.length === 0) {
      return { success: false, message: 'No valid image paths found' };
    }

    const { error } = await supabase.storage
      .from('Blog')
      .remove(filePaths);

    if (error) throw error;

    return { success: true, message: 'Images deleted successfully', deleted: filePaths };
  } catch (err: any) {
    console.error('Error deleting images:', err.message);
    return { success: false, message: err.message };
  }
}
