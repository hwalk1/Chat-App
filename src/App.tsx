import React,   { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import './App.css';


const supabase = createClient(process.env.REACT_APP_PROJECT_URL || '', process.env.REACT_APP_API_KEY || '');

interface Country {
  id: number;
  name: string;
}

type CountryList = Country[];

interface CountryName {
    name: string
}

function App() {
    const [countries, setCountries] = useState<CountryList>([]);

    useEffect(() => {
      getCountries();
    }, []);
    
    async function getCountries() {
        const { data } = await supabase.from("countries").select();
        if (data !== null) {
            setCountries(data as CountryList);
        }
      }
      
      return (
        <ul>
          {countries.map((country: CountryName) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
      );
    }
    // return (
    //     <div className="App">
    //         <header className="App-header">
    //             <img src={logo} className="App-logo" alt="logo" />
    //             <p>
    //                 Edit <code>src/App.tsx</code> and save to reload.
    //             </p>
    //             <a
    //                 className="App-link"
    //                 href="https://reactjs.org"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 Learn React
    //             </a>
    //         </header>
    //     </div>
    // );
// }    

export default App;
