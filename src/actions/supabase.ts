import { createClient } from '@supabase/supabase-js';
import { get } from 'lodash';
export const supabase = createClient(
  process.env.REACT_APP_PROJECT_URL || '',
  process.env.REACT_APP_API_KEY || ''
);

export const signInToSupabase = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data, error };
};

export const signUpToSupabase = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  return { data, error };
};
