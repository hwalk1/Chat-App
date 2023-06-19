import React from 'react';
import { createClient } from '@supabase/supabase-js';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';

export const supabase = createClient(
  process.env.REACT_APP_PROJECT_URL || '',
  process.env.REACT_APP_API_KEY || ''
);

interface Country {
  id: number;
  name: string;
}

type CountryList = Country[];

interface CountryName {
  name: string;
}

function App() {
  // const [countries, setCountries] = useState<CountryList>([]);

  // useEffect(() => {
  //   getCountries();
  // }, []);

  // async function getCountries() {
  //     const { data } = await supabase.from("countries").select();
  //     if (data !== null) {
  //         setCountries(data as CountryList);
  //     }
  //   }
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
