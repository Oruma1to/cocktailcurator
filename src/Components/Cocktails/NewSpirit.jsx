import React from 'react'
import { Link } from 'react-router-dom'
import "./NewSpirit.css"

export default function NewSpirit(props) {

  let choice = props.drinks


  if (choice === 1) {
    choice = "random"
  } else {
    choice = props.spirit
  }


  return (
    <>
      <div className="select-new">
        <div className="buttons-new">
          <Link to="/Selector/Cocktails/vodka"><p onClick={() => props.updateSpirit('vodka')} className="spirit-new">Vodka</p></Link>
          <Link to="/Selector/Cocktails/gin"><p onClick={() => props.updateSpirit('gin')} className="spirit-new">Gin</p></Link>
          <Link to="/Selector/Cocktails/Bourbon"><p onClick={() => props.updateSpirit('Bourbon')} className="spirit-new">Bourbon</p></Link>
          <Link to="/Selector/Cocktails/rum"><p onClick={() => props.updateSpirit('rum')} className="spirit-new">Rum</p></Link>
          <Link to="/Selector/Cocktails/tequila"><p onClick={() => props.updateSpirit('tequila')} className="spirit-new">Tequila</p></Link>
          <Link to="/Selector/Cocktails/Scotch"><p onClick={() => props.updateSpirit('Scotch')} className="spirit-new">Scotch</p></Link>
          <Link to="/Selector/Cocktails/Random"><p onClick={() => props.apiCall('Random')} className="spirit-new random">Random Cocktail!</p></Link>
        </div>
        {choice === "random" ? <p className="current">The RNG gods have blessed you with...</p>:<p className="current">Currently viewing the {choice} collection</p>}
      </div>
    </>
  )
}
