import React from 'react'
import imgLogo from '../assets/quiz-logo.png';

function Header() {
  return (
   <header>
    <img src={imgLogo} alt="Quiz logo" />
    <h1>React Quiz</h1>
   </header>
  )
}

export default Header