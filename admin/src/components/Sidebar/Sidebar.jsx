import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
        </div>
        <NavLink to='/list' className="sidebar-options">
            <div className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </div>
        </NavLink>
        <NavLink to='/orders' className="sidebar-options">
            <div className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Orders</p>
            </div>
        </NavLink>
    </div>
  )
}

export default Sidebar