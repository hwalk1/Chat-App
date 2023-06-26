import React from 'react';
import { createClient } from '@supabase/supabase-js';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';

export const supabase = createClient(
  process.env.REACT_APP_PROJECT_URL || '',
  process.env.REACT_APP_API_KEY || ''
);

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello world!</div>,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
