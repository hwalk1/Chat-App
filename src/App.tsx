import React from 'react';
import { createClient } from '@supabase/supabase-js';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
