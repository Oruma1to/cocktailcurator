import React from 'react'
import { Link } from 'react-router-dom'
import "./Selector.css"

export default function Selector(props) {
  return (
    <div className="select-top">
    <div className="select">
      <p className="title">Please select the spirit of your choice</p>
      <div className="buttons">
        <div>
          <Link to="/Selector/Cocktails/vodka"><p onClick={() => props.updateSpirit('vodka')} className="spirit">Vodka</p></Link>
          <Link to="/Selector/Cocktails/gin"><p onClick={() => props.updateSpirit('gin')} className="spirit">Gin</p></Link>
          <Link to="/Selector/Cocktails/Bourbon"><p onClick={() => props.updateSpirit('Bourbon')} className="spirit">Bourbon</p></Link>
        </div>
        <div>
          <Link to="/Selector/Cocktails/rum"><p onClick={() => props.updateSpirit('rum')} className="spirit">Rum</p></Link>
          <Link to="/Selector/Cocktails/tequila"><p onClick={() => props.updateSpirit('tequila')} className="spirit">Tequila</p></Link>
          <Link to="/Selector/Cocktails/Scotch"><p onClick={() => props.updateSpirit('Scotch')} className="spirit">Scotch</p></Link>
        </div> 
          <Link to="/Selector/Cocktails/Random"><p onClick={() => props.apiCall('Random')} className="spirit">Random Cocktail!</p></Link>

      </div>
      </div>
    </div>
  )
}
