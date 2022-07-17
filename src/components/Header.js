// 라이브러리
import React from 'react'

// css
import '../styles/components/header.scss'

function Header() {
  return (
    <div>
      <header>
        <h1 class='header-logo'>Portfolio</h1>
      </header>
        <ul id='header-nav'>
          <li>Intro</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header