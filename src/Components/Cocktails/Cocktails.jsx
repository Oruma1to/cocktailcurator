import React from 'react'
import {Link} from 'react-router-dom'
import './Cocktails.css'

export default function Cocktails(props) {

  let cc = `/selector/currentcocktail/${props.cocktails.strDrink}`
  
  return (
    <>
      <Link to={cc} className="cocktail">
        <div onClick={() => {props.updateSpirit(props.cocktails.strDrink)}}>
        <img src={props.cocktails.strDrinkThumb} className="drink-image" alt="cocktail" />
        <div className="ingreds">
          <p className="drkTitle">{props.cocktails.strDrink}</p>
          <p className="wyn">What you'll need</p>
          <div className="build">
            <p>{props.cocktails.strGlass}</p>
            <p>{props.cocktails.strMeasure1}{props.cocktails.strIngredient1}</p>
            <p>{props.cocktails.strMeasure2}{props.cocktails.strIngredient2}</p>
            <p>{props.cocktails.strMeasure3}{props.cocktails.strIngredient3}</p>
            <p>{props.cocktails.strMeasure4}{props.cocktails.strIngredient4}</p>
            <p className="instruct">{props.cocktails.strInstructions}</p>
          </div>
        </div>
        </div>
      </Link>
    </>
  )
}
