import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 1){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor)
  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link to='/'>
            <img className='logo' src="images/logo.png" alt='Logo'/>
        </Link>
        <ul className={click ? 'nav-menu active' :
        'nav-menu'}>
            <li>
                <Link className={color ? 'link link-new' : 'link'} to='/'>Home</Link> 
            </li>
            <li>
                <Link className={color ? 'link link-new' : 'link'} to='/aboutus'>About</Link>
            </li>
            <li>
                <Link className={color ? 'link link-new' : 'link'} to='/services'>Services</Link>
            </li>
            {/* <li>
                <Link className={color ? 'link link-new' : 'link'} to='/projects'>Projects</Link>
            </li> */}
            <li>
                <Link className={color ? 'link link-new' : 'link'} to='/contacts'>Contacts</Link>
            </li>
        </ul>
        <div className='hamberger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:'#000'}} />) :
        (<FaBars size={20} style={{color:'#000'}} />)}  
        </div>
    </div>
  )
}

export default Navbar