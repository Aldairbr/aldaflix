import React from 'react'
// import ButtonLink from './components/ButtonLink'
import Logo from '../../assets/img/ALDAFLIX-LOGO.png'
import './Menu.css'
import Button from '../Button'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Aldaflix logo"></img>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Video
      </ Button>
    
    </nav>
  );
}

export default Menu