import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../assets/assets';

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
    <div className="navbar-title">
      Olive Catering<span className='dot'>.</span>
    </div>
        <ul className='navbar-menu'>
            <li onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>home</li>
            <li onClick={()=> setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
            <li onClick={()=> setMenu("about")} className={menu==="about"?"active":""}>about</li>
            <li onClick={()=> setMenu("contact")} className={menu==="contact"?"active":""}>contact</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar