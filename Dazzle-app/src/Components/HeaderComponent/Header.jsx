import React from 'react';
import './header.css';
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import Badge from '@mui/material/Badge';
import ShopCategories from '../../features/ShopCategories';
import BasicMenu from '../../features/ShopCategories';
import {  Routes, Route, Link } from 'react-router-dom';


function Header() {

    
  return (
    <div className='header-container'>

        <div className='header-first-layout'>

        </div>

        <div className='header-second-layout'>
          <div className='app-title'>
             Dazzle
          </div>

          <div className='feature-list'>
             <div className="lits-Content">My Bookings</div>
             <div className="lits-Content"> <span><ShopCategories/></span> <span className='drop-down-icon'> <RiArrowDropDownLine className='dropdown'/> </span></div>
             <div className="lits-Content">Deal</div>
             <div className="lits-Content">Explore</div>
          </div>

          <div className='search-value'>
          <Link to={'/search'} className='seach-link-con'><span className='search-icon'><BiSearch className='search'/></span>Search </Link>
          </div>

           <div className='accounts-value'>
           <span className='account-icon'><FaUser className='account'/></span>Account

           </div>

           <div className='cart-value'>
             <Badge className='cart-badge' badgeContent={1} color="primary">
             </Badge>
             <span className='cart-icon'><FaShoppingCart className='cart'/></span>
             Cart
           </div>
         

        </div>

    </div>
  )
}

export default Header;