import React from 'react'
import {Link} from 'react-router-dom'
import './Cocktail.css'

export default function Cocktail(props) {
  console.log(props.drinks)
  return (
    <div className="cocktail-top">
      <div className="cocktail-solo">
        <img src={props.drinks[0].strDrinkThumb} className="drink-image-solo" alt="cocktail" />
        <div className="ingreds-solo">
          <p className="drkTitle-solo">{props.drinks[0].strDrink}</p>
          <p className="wyn-solo">What you'll need</p>
          <div className="build-solo">
            <li>{props.drinks[0].strGlass}</li>
            <li>{props.drinks[0].strMeasure1}{props.drinks[0].strIngredient1}</li>
            <li>{props.drinks[0].strMeasure2}{props.drinks[0].strIngredient2}</li>
            <li>{props.drinks[0].strMeasure3}{props.drinks[0].strIngredient3}</li>
            <li>{props.drinks[0].strMeasure4}{props.drinks[0].strIngredient4}</li>
            <p className="instruct-solo">{props.drinks[0].strInstructions}</p>
          </div>
        </div>
      </div>
      <Link to="/Selector/Cocktails/vodka" className="spirit-reset"><p
        onClick={() => props.updateSpirit('vodka')} >Return to selector</p></Link>
    </div>
  )
}
