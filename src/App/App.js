import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import axios from "axios"
import LandingPage from '../Components/LandingPage/LandingPage';
import Selector from '../Components/Selector/Selector'
import Cocktails from '../Components/Cocktails/Cocktails'
import Footer from '../Components/Shared/Footer';
import Header from '../Components/Shared/Header';
import './App.css';
import NewSpirit from '../Components/Cocktails/NewSpirit';
import Cocktail from '../Components/Cocktails/Cocktail';

function App() {
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  const URL2 = "https://corsanywhere.herokuapp.com/www.thecocktaildb.com/api/json/v1/1/random.php"
  const [drinks, updateDrinks] = useState([])
  const [spirit, updateSpirit] = useState('')

  const apiCall = async (str = "") => {
    if (str === "Random") {
      let data = await axios(URL2)
      updateDrinks(data.data.drinks)
    } else {
      let data = await axios(URL + spirit)
      updateDrinks(data.data.drinks)
    }
  }

  useEffect(() => {
    apiCall();

  }, [spirit])
  console.log(drinks)

  return (
    <>
      <div className="App">
        <Header path="/" />
        <Switch>
          <LandingPage exact path='/' />
          <Selector
            exact path="/Selector"
            apiCall={apiCall}
            updateSpirit={updateSpirit}
          />
          <Route path="/Selector/Cocktails">
            <div className="ns">
              <NewSpirit
                exact path="/Selector"
                apiCall={apiCall}
                updateSpirit={updateSpirit}
                spirit={spirit}
                drinks={drinks.length}
              />
            </div>
            <div className="cocktails">
              {drinks.map(cocktails =>
                <Cocktails
                  key={cocktails.strDrink}
                  cocktails={cocktails}
                  updateSpirit={updateSpirit}
                />)}
            </div>
          </Route>
          <Route path="/Selector/currentcocktail/">
            <div className="solo">
              <Cocktail
                key={drinks.strDrink}
                drinks={drinks}
                updateSpirit={updateSpirit}
              />
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
