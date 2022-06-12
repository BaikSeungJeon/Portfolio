import React from 'react'
// css

// react-icon
import { AiOutlineHome } from 'react-icons/ai'
import { GrDocumentVerified } from 'react-icons/gr'

function Header() {
  return (
    <div id='header'>
        <div id='header-logo'>
            <h1>Portfolio</h1>
        </div>
        <ul id='header-nav'>
            <li><AiOutlineHome/></li>
            <li><GrDocumentVerified/></li>
            <li></li>
        </ul>
    </div>
  )
}

export default Header