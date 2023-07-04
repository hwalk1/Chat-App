import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.REACT_APP_PROJECT_URL || '',
  process.env.REACT_APP_API_KEY || ''
);

export const signInToSupabase = async (email: string, password: string) => {
  await supabase.auth
    .signInWithPassword({
      email: email,
      password: password,
    })
    .then((res) => console.log('res', res))
    .catch((err) => {
      console.log('error', err);
    });
};


export const signUpToSupabase = async (email: string, password: string) => {
    await supabase.auth
    .signUp({
      email: email,
      password: password,
    })
    .then((res) => console.log('res', res))
    .catch((err) => {
      console.log('error', err);
    });
};

