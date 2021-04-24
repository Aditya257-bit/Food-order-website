import React from 'react';
import {NavLink} from 'react-router-dom';

const Header= (props)=>{
    return (
      <div className="heading">
        <div></div>
          <NavLink to="/"><p className="header_heading">Food Ordering Portal</p></NavLink>
          <NavLink to="/cart"><i className="fa fa-shopping-cart cart_icon"></i><span>{props.value}</span></NavLink>
      </div>
    )
}

export default Header