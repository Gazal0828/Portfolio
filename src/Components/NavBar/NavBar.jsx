import React from 'react'
import './NavBar.css'
import {Link} from 'react-scroll';
const NavBar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Gazal</div>
           
        </div>
        <div className="n-right">
            <div className="n-list">
            <ul style={{listStyleType: 'none'}}>
            <li>
                <Link  spy={true} to="NavBar"smooth={true} activeClass='activeClass'>
                Home
                </Link>
            </li>
            <li>
                <Link  spy={true} to="Education"smooth={true}>
                Education
                </Link>
            </li>
            <li>
                <Link  spy={true} to="Achievements"smooth={true}>
                Achievements
                </Link>
            </li>
            <li>
               <Link  spy={true} to="Skills"smooth={true}>
                Skills </Link>
                </li>
                <li>   
                <Link  spy={true} to="Projects"smooth={true}>
              Projects
                </Link>
                </li>
               
            </ul>
            </div>
            <Link  spy={true} to="Contacts"smooth={true}>
            <button className="button n-button">
                Contact
            </button>
            </Link>
        </div>
    </div>
  )
}

export default NavBar