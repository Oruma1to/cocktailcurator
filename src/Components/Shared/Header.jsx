import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

export default function Header() {
  return (
    <div className="head">
      <Link to="/">The Cocktail Curator</Link>
    </div>
  )
}
