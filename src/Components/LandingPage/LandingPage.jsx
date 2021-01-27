import React from 'react'
import { Link } from 'react-router-dom'
import Whiskey from '../../Images/main1.png'
import "./LandingPage.css"

export default function LandingPage() {
  return (
    <>
      <div className="landing-top">
        <section>
          <img  className="whiskey" src={Whiskey} alt="whiskey" />
          <div className="description">
            <p className="text">Welcome to the Cocktail Curator.</p>
            
            <p className="text">Haven't really made up your mind yet on what you'd like? Let us present you with a list of cocktails based on your current spirit of choice!</p>

            <Link to="/selector"><p className="btn">Lets Begin!</p></Link>
          </div>
        </section>
      </div>
    </>
  )
}
