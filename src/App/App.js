import { useState } from 'react'
import useFetch from './useFetch';
import Cocktails from '../Components/Cocktails/Cocktails'
import Footer from '../Components/Shared/Footer';
import Header from '../Components/Shared/Header';
import './App.css';
import NewSpirit from '../Components/Cocktails/NewSpirit';

const App = () => {
  const [spirit, updateSpirit] = useState('')

  const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + spirit
  // const URL2 = "https://corsanywhere.herokuapp.com/www.thecocktaildb.com/api/json/v1/1/random.php"



  const { data: drinks, error} = useFetch(URL)
  if (error) console.log(error);

  return (
    <>
      <div className="App">
        <Header />
        <div>
          <NewSpirit
            spririt={spirit}
            updateSpirit={updateSpirit}
            drinks={drinks}
          />
        </div>
        {drinks && <div className="cocktails">
          <Cocktails drinks={drinks.drinks} />
        </div>}
        <Footer />
      </div>
    </>
  );
}

export default App;
