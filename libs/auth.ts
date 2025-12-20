import { supabase } from './supabaseClient';
import { User, AuthResponse, AuthError } from '@supabase/supabase-js';

export const authService = {
  async signUp(email: string, password: string, userData: Record<string, any> = {}): Promise<Pick<AuthResponse, 'data' | 'error'>> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    });
    return { data, error };
  },

  async signIn(email: string, password: string): Promise<Pick<AuthResponse, 'data' | 'error'>> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  },

  async signOut(): Promise<{ error: AuthError | null }> {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  async getCurrentUser(): Promise<User | null> {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  async isAdmin(userId: string): Promise<boolean> {
    const { data, error } = await supabase
      .from('admin_users')
      .select('*')
      .eq('user_id', userId)
      .single();

    return !!(!error && data);
  },

  async AdminData(userId: string): Promise<any> {
    const { data } = await supabase
      .from('admin_users')
      .select('*')
      .eq('user_id', userId)
      .single();

    return data;
  },
};