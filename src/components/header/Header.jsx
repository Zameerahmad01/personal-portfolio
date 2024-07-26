import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './Header.css'

const navLinks = [
    {
      to: "home",
      display: "Home",
      icon: "estate"
    },
    {
      to: "about",
      display: "About",
      icon: "user"
    },
    {
      to: "skills",
      display: "Skills",
      icon: "file-alt"
    },

    {
      to: "services",
      display: "Services",
      icon: "file-alt"
    },
  
    {
      to: "works",
      display: "Portfolio",
      icon: "scenery"
    },
    {
      to: "contact",
      display: "Contact",
      icon: "message"
    },
]

function Header() {

    const[Toggle, ShowMenu] = useState(false)

  return (
    <header className='header'>
      <nav className='nav container '>
        <Link to='home' className='nav__logo'>Zameer</Link>

        <div className={Toggle ? "nav__menu show_menu" : "nav__menu"}>
            <ul className='nav__list '>
                {navLinks.map((items, index) => (
                    <li
                    key={index}
                     className='nav_item'>
                    <Link 
                    activeClass='active' 
                    to={items.to} 
                    spy={true} 
                    smooth={true} 
                    offset={-60} 
                    duration={100}  
                    className='nav__link'
                    >

                    <i className={`uil uil-${items.icon} nav__icon`}></i>
                    {items.display}

                    </Link>
                    </li>
                ))}
            </ul>

            <i className='uil uil-times nav__close' 
            onClick={()=>{
            Toggle ? ShowMenu(false) : ShowMenu(true)
        }}></i>
        </div>    

        <div className="nav__toggle" 
            onClick={()=>{
            Toggle ? ShowMenu(false) : ShowMenu(true)
        }}>
            <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
